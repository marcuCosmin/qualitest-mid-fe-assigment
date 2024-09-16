import { useSelector } from "../../redux/store"

import { ProductCard } from "../../components/ProductCard"

import { getPriceAfterDiscount } from "../../utils/getPriceAfterDiscount"

export const Checkout = () => {
  const cart = useSelector(({ cart }) => cart)

  const cartItems = useSelector(({ products }) => {
    const { itemsObject } = products

    const cartItems = Object.entries(cart).map(([id, quantity]) => {
      const parsedId = parseInt(id)
      const item = itemsObject[parsedId]

      return {
        ...item,
        id: parsedId,
        quantity,
      }
    })

    return cartItems
  })

  const total = cartItems.reduce((acc, item) => {
    const price = getPriceAfterDiscount(item.price, item.discountPercentage)

    return acc + price * item.quantity
  }, 0)

  return (
    <main className="flex flex-col items-center gap-3">
      <h2 className="text-center mb-4">Checkout</h2>

      <ul>
        {cartItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ul>

      <p>Total: {total.toFixed(2)}</p>

      <button className="button-yellow" type="button">
        Proceed to payment
      </button>
    </main>
  )
}
