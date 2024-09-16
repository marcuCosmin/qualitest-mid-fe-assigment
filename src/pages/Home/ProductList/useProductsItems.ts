import { useEffect, useRef } from "react"

import { useDispatch, useSelector } from "../../../redux/store"
import { fetchProducts } from "../../../redux/slices/products"

export const useProductsItems = () => {
  const preventDuplicateFetch = useRef(false)

  const productsData = useSelector(({ products }) => {
    const {
      itemsArray: productsItems,
      totalItems,
      page,
      searchQuery,
    } = products

    return { productsItems, totalItems, page, searchQuery }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (preventDuplicateFetch.current) {
      return
    }

    dispatch(fetchProducts({ page: 1 }))
    preventDuplicateFetch.current = true
  }, [])

  return productsData
}
