import { ProductCard } from "../../../components/ProductCard"

import { useProductsItems } from "./useProductsItems"
import { useInfiniteScroll } from "./useInfiniteScroll"

export const ProductList = () => {
  const { productsItems, page, totalItems, searchQuery } = useProductsItems()

  const { onScroll } = useInfiniteScroll({ page, totalItems, searchQuery })

  return (
    <section className="min-w-96 md:min-w-[auto]">
      <ul
        className="flex flex-col pr-2 pb-2 max-h-[calc(100vh-100px)] gap-5 overflow-y-scroll sm:max-w-4xl md:max-w-2xl"
        onScroll={onScroll}
      >
        {productsItems.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </ul>
    </section>
  )
}
