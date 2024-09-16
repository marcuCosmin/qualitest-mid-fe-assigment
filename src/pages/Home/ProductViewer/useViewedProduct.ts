import { useSelector } from "../../../redux/store"

export const useViewedProduct = () => {
  const viewedProductId = useSelector(({ viewedProduct }) => {
    const { viewedItemId } = viewedProduct

    return viewedItemId
  })

  const viewedProduct = useSelector(({ products }) => {
    if (!viewedProductId) {
      return null
    }

    const { itemsObject } = products

    const viewedProduct = itemsObject[viewedProductId]

    return viewedProduct
  })

  if (!viewedProduct) {
    return { viewedItem: null }
  }

  return { viewedProduct: { ...viewedProduct, id: viewedProductId } }
}
