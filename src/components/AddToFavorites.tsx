import { type MouseEvent } from "react"

import { Star } from "lucide-react"

import { useDispatch, useSelector } from "../redux/store"
import { addOneToFav, removeOneFromFav } from "../redux/slices/favorites"

import type { Product } from "../types"

export const AddToFavorites = ({ id }: Pick<Product, "id">) => {
  const isFavorite = useSelector(({ favorites }) => favorites.includes(id))

  const dispatch = useDispatch()

  const ariaLabel = isFavorite ? "Remove from favorites" : "Add to favorites"
  const iconClassName = isFavorite ? "fill-yellow" : ""

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if (isFavorite) {
      dispatch(removeOneFromFav(id))
      return
    }

    dispatch(addOneToFav(id))
  }

  return (
    <button
      aria-label={ariaLabel}
      type="button"
      aria-pressed={isFavorite}
      onClick={onClick}
    >
      <Star className={iconClassName} />
    </button>
  )
}
