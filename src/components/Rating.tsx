import { Star } from "lucide-react"

const fiveItemsArray = Array.from({ length: 5 })

type RatingProps = {
  rating: number
}

export const Rating = ({ rating }: RatingProps) => {
  const ariaLabel = `Rated ${rating} out of 5 stars`

  return (
    <div role="img" aria-label={ariaLabel} className="flex">
      {fiveItemsArray.map((_, index) => {
        const isFilled = index < rating

        return (
          <Star
            aria-hidden="true"
            className={isFilled ? "fill-yellow" : ""}
            key={index}
          />
        )
      })}
    </div>
  )
}
