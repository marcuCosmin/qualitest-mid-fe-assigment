import { transformProducts, type ProductsObject } from "./transformProducts"

import type { Product } from "../types"

type Result = {
  products: Product[]
  total: number
}

type GetProductsArgs = {
  page: number
  query?: string
  preserveData?: boolean
}

type GetProductsReturnedValue = Promise<
  | {
      productsArray: Product[]
      productsObject: ProductsObject
      total: number
      preserveData: boolean | undefined
    }
  | undefined
>

export const fetchProducts = async ({
  page,
  query,
  preserveData,
}: GetProductsArgs): GetProductsReturnedValue => {
  try {
    let url = "https://dummyjson.com/products"

    const skip = (page - 1) * 20

    if (query) {
      url += `/search?q=${query}&limit=20&skip=${skip}`
    } else {
      url += `?limit=20&skip=${skip}`
    }

    const response = await fetch(url)

    const result = await response.json()

    const { products, total } = result as Result

    const { productsArray, productsObject } = transformProducts(products)

    return { productsArray, productsObject, total, preserveData }
  } catch (error: unknown) {
    console.log(error)
  }
}
