import { useDispatch } from "../redux/store"
import { setViewedProduct } from "../redux/slices/viewedProduct"

import { Rating } from "./Rating"
import { AddToCart } from "./AddToCart"
import { AddToFavorites } from "./AddToFavorites"

import { getPriceAfterDiscount } from "../utils/getPriceAfterDiscount"

import type { Product } from "../types"

type ProductCardProps = Product & {
  quantity?: number
}

export const ProductCard = ({
  id,
  images,
  title,
  description,
  rating,
  price,
  discountPercentage,
  stock,
  quantity,
}: ProductCardProps) => {
  const dispatch = useDispatch()

  // Defining the onClick handler inside this component because event delegation is automatically handled by React
  const onClick = () => dispatch(setViewedProduct(id))

  const image = images[0]

  const heigthClassName = quantity ? "h-28" : "h-44"

  const total = quantity
    ? (getPriceAfterDiscount(price, discountPercentage) * quantity).toFixed(2)
    : undefined

  return (
    <li
      tabIndex={0}
      className={`product-card flex cursor-pointer p-2 gap-5 bg-gray h-44 ${heigthClassName}`}
      onClick={onClick}
    >
      <img
        loading="lazy"
        className="w-20 rounded-full object-contain"
        src={image}
        alt={title}
      />

      <div className="flex flex-col justify-between text-sm w-full gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-bold text-base">{title}</h3>

          <p>
            Price: {price}
            {discountPercentage && ` Discount: ${discountPercentage}%`}
          </p>
        </div>

        {quantity ? (
          <>
            <p className="flex justify-between w-full">
              x {quantity} = Total: {total}
            </p>
          </>
        ) : (
          <>
            <p className="text-sm line-clamp-1">{description}</p>

            <div className="flex items-center justify-between">
              <Rating rating={rating} />

              <div className="flex gap-3 items-center">
                <AddToCart stock={stock} id={id} />

                <AddToFavorites id={id} />
              </div>
            </div>
          </>
        )}
      </div>
    </li>
  )
}
