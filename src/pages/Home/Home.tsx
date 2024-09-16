import { ProductList } from "./ProductList/ProductList"
import { ProductViewer } from "./ProductViewer/ProductViewer"

export const Home = () => {
  return (
    <main className="p-4 flex gap-5 md:gap-20">
      <ProductList />
      <ProductViewer />
    </main>
  )
}
