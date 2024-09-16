import { Rating } from "../../../components/Rating"

import type { Product } from "../../../types"

type ReviewsProps = Pick<Product, "reviews">

export const Reviews = ({ reviews }: ReviewsProps) => (
  <div className="mt-4">
    <h4>Reviews</h4>

    <ul className="flex flex-col gap-3">
      {reviews.map(({ comment, rating, date, reviewerName }, index) => {
        const timestamp = new Date(date).toLocaleDateString()
        // using index here as the list is not interactive
        return (
          <li className="text-sm" key={index}>
            <h5>{reviewerName}</h5>
            <time dateTime={date}>{timestamp}</time>
            <Rating rating={rating} />
            <p>{comment}</p>
          </li>
        )
      })}
    </ul>
  </div>
)
