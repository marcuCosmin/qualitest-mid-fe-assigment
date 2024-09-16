import { type UIEvent } from "react"

import { fetchProducts } from "../../../redux/slices/products"
import { useDispatch } from "../../../redux/store"

type UseInfiniteScrollProps = {
  page: number
  totalItems: number
  searchQuery: string
}

export const useInfiniteScroll = ({
  page,
  totalItems,
  searchQuery,
}: UseInfiniteScrollProps) => {
  const reachedLimit = (page - 1) * 20 >= totalItems

  const dispatch = useDispatch()

  const fetchMoreProducts = () =>
    dispatch(fetchProducts({ page, preserveData: true, query: searchQuery }))

  const onScroll = ({ target }: UIEvent<HTMLUListElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = target as HTMLUListElement

    const reachedBottom = Math.round(scrollTop) + clientHeight >= scrollHeight

    if (reachedBottom) {
      fetchMoreProducts()
    }
  }

  if (reachedLimit) {
    return {}
  }

  return { onScroll }
}
