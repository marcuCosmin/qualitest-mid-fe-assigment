export const getPriceAfterDiscount = (
  price: number,
  discountPercentage: number | undefined
) => {
  if (!discountPercentage) {
    return price
  }

  let discount = price * (discountPercentage / 100)
  discount = parseFloat(discount.toFixed(2))

  return price - discount
}
