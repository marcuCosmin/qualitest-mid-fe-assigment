import { useEffect, type ChangeEvent } from "react"

import { useDebounce } from "use-debounce"

import { useDispatch, useSelector } from "../../../redux/store"
import { fetchProducts, setSearchQuery } from "../../../redux/slices/products"

export const useSearch = () => {
  const { page, searchQuery } = useSelector(({ products }) => {
    const { page, searchQuery } = products

    return { page, searchQuery }
  })

  const [debouncedSearch] = useDebounce(searchQuery, 200)

  useEffect(() => {
    if (!debouncedSearch) {
      return
    }

    dispatch(fetchProducts({ query: debouncedSearch, page }))
  }, [debouncedSearch])

  const dispatch = useDispatch()

  const onSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target

    dispatch(setSearchQuery(value))
  }

  return { search: searchQuery, onSearch }
}
