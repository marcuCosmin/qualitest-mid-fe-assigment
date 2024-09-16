import { useState } from "react"

import { Popover } from "react-tiny-popover"

import { ShoppingCart, Star } from "lucide-react"

import { NotificationCounter } from "../../components/NotificationCounter"

import { DropdownContent } from "./DropdownContent"

import type { Product } from "../../types"

export type DropdownItem = Product & { quantity?: number }

export type DropdownProps = {
  isCart: boolean
  itemsCount: number
  items: DropdownItem[]
}

export const Dropdown = ({ isCart, itemsCount, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const ariaLabel = isCart ? "Shopping Cart" : "Favorites"

  const onClick = () => setIsOpen(!isOpen)
  const onClickOutside = () => setIsOpen(false)

  return (
    <Popover
      isOpen={isOpen}
      content={<DropdownContent isCart={isCart} items={items} />}
      positions={["bottom", "left", "top", "right"]}
      onClickOutside={onClickOutside}
    >
      <button
        className="relative"
        type="button"
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {isCart ? (
          <ShoppingCart aria-hidden="true" />
        ) : (
          <Star aria-hidden="true" />
        )}
        <NotificationCounter count={itemsCount} />
      </button>
    </Popover>
  )
}
