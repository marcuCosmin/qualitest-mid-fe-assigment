import type { Product } from "../types"

export type ProductsObject = Record<number, Omit<Product, "id">>

export const transformProducts = (products: Product[]) => {
  const productsObject: ProductsObject = {}

  products.forEach((product) => {
    const { id, ...productProps } = product

    productsObject[id] = productProps
  })

  return { productsArray: products, productsObject }
}
