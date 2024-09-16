type Dimensions = {
  width: number
  height: number
  depth: number
}

type Review = {
  comment: string
  rating: number
  date: string
  reviewerName: string
}

export type Product = {
  id: number
  images: string[]
  title: string
  description: string
  rating: number
  price: number
  discountPercentage: number
  dimensions: Dimensions
  reviews: Review[]
  stock: number
}
