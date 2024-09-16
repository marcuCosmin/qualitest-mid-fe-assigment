import { useSelector } from "../../redux/store"

import { Dropdown } from "./Dropdown"

export const Cart = () => {
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

  const itemsCount = cartItems.reduce((acc, { quantity }) => acc + quantity, 0)

  return <Dropdown isCart itemsCount={itemsCount} items={cartItems} />
}
