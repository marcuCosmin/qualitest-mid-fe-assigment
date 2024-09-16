import { Link } from "react-router-dom"

import { AddToCart } from "../../components/AddToCart"

import type { DropdownProps, DropdownItem } from "./Dropdown"

type DropdownContentProps = Pick<DropdownProps, "isCart"> & {
  items: DropdownItem[]
}

const containerClassName = "bg-white shadow rounded-b p-4 max-w-64 text-xs"

export const DropdownContent = ({ items, isCart }: DropdownContentProps) => {
  if (items.length === 0) {
    const content = isCart ? "Your cart is empty" : "Your have no favorites yet"

    return <p className={containerClassName}>{content}</p>
  }

  return (
    <div className={containerClassName}>
      <ul>
        {items.map(({ title, images, quantity, stock, id }) => (
          <li className="flex items-center gap-5" key={id}>
            <img className="w-10" src={images[0]} alt={title} />
            <p className="line-clamp-1">{title}</p>
            {quantity && (
              <p className="text-nowrap font-semibold">x {quantity}</p>
            )}

            {!isCart && <AddToCart isFavDropdownChild stock={stock} id={id} />}
          </li>
        ))}
      </ul>

      {isCart && (
        <Link to="/checkout" className="block ml-auto w-fit button-yellow">
          Go to checkout
        </Link>
      )}
    </div>
  )
}
