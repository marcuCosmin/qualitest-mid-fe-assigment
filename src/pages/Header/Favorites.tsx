import { useSelector } from "../../redux/store"

import { Dropdown } from "./Dropdown"

export const Favorites = () => {
  const favorites = useSelector(({ favorites }) => favorites)

  const favoriteItems = useSelector(({ products }) => {
    const { itemsObject } = products

    const favoriteItems = favorites.map((id) => {
      const item = itemsObject[id]

      return {
        ...item,
        id,
      }
    })

    return favoriteItems
  })

  const itemsCount = favoriteItems.length

  return (
    <Dropdown isCart={false} itemsCount={itemsCount} items={favoriteItems} />
  )
}
