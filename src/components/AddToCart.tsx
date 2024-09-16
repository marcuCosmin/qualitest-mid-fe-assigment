import { type MouseEvent } from "react"

import { ShoppingCart } from "lucide-react"

import { addOneToCart } from "../redux/slices/cart"
import { removeOneFromFav } from "../redux/slices/favorites"
import { useDispatch, useSelector } from "../redux/store"

import type { Product } from "../types"

export type AddToCartProps = Pick<Product, "id" | "stock"> & {
  isFavDropdownChild?: boolean
}

export const AddToCart = ({
  id,
  stock,
  isFavDropdownChild,
}: AddToCartProps) => {
  const quantity = useSelector(({ cart }) => {
    const quantity = cart[id]

    if (!quantity) {
      return 0
    }

    return quantity
  })

  const dispatch = useDispatch()

  const disabled = quantity === stock
  const ariaLabel = isFavDropdownChild ? "Add to cart" : undefined
  const favClassName = isFavDropdownChild ? "p-1 rounded-full" : ""
  const elementTitle = isFavDropdownChild ? "Add to cart" : undefined

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    dispatch(addOneToCart(id))

    if (isFavDropdownChild) {
      dispatch(removeOneFromFav(id))
    }
  }

  return (
    <button
      className={`button-yellow ${favClassName}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={elementTitle}
    >
      {isFavDropdownChild ? (
        <ShoppingCart width={18} height={18} aria-hidden="true" />
      ) : (
        "Add to cart"
      )}
    </button>
  )
}
