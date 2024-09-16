import { type ReactNode } from "react"
import { useMediaQuery } from "react-responsive"
import Modal from "react-modal"

import { Rating } from "../../../components/Rating"
import { Reviews } from "./Reviews"

import { useViewedProduct } from "./useViewedProduct"
import { useDispatch } from "../../../redux/store"
import { setViewedProduct } from "../../../redux/slices/viewedProduct"
import { AddToCart } from "../../../components/AddToCart"
import { AddToFavorites } from "../../../components/AddToFavorites"

const sectionClassName = "h-fit p-5 bg-gray sm:min-w-96 md:p-10 max-w-5xl"

type ProductViewerWrapperProps = {
  children: ReactNode
  isOpen: boolean
  wrapInsideModal: boolean
  closeModal: () => void
}

const ProductViewerWrapper = ({
  isOpen,
  children,
  wrapInsideModal,
  closeModal,
}: ProductViewerWrapperProps) => {
  if (wrapInsideModal) {
    return (
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick
        onRequestClose={closeModal}
      >
        {children}
      </Modal>
    )
  }

  return <section className={sectionClassName}>{children}</section>
}

export const ProductViewer = () => {
  const { viewedProduct } = useViewedProduct()
  const wrapInsideModal = useMediaQuery({ query: "(max-width: 800px)" })

  const dispatch = useDispatch()

  if (!viewedProduct) {
    if (wrapInsideModal) {
      return null
    }

    return (
      <section className={sectionClassName}>
        <p>No product selected</p>
      </section>
    )
  }

  const closeModal = () => dispatch(setViewedProduct(null))

  const {
    id,
    stock,
    title,
    images,
    description,
    rating,
    price,
    discountPercentage,
    dimensions,
    reviews,
  } = viewedProduct

  const image = images[0]

  const { width, height, depth } = dimensions

  return (
    <ProductViewerWrapper
      wrapInsideModal={wrapInsideModal}
      isOpen={!!viewedProduct}
      closeModal={closeModal}
    >
      <div className="flex flex-wrap sm:flex-nowrap gap-10 md:justify-between mb-4">
        <div className="sm:w-2/3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-bold text-base">{title}</h3>

            <p>
              Price: {price}
              {discountPercentage && ` Discount: ${discountPercentage}%`}
            </p>
          </div>

          <img
            className="object-contain sm:w-[350px]"
            src={image}
            alt={title}
          />

          <p>{description}</p>

          <div className="mt-4">
            <h4>Dimensions</h4>
            <p>Weight: {width} </p>
            <p>Height: {height} </p>
            <p>Depth: {depth} </p>
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <Rating rating={rating} />

          <Reviews reviews={reviews} />
        </div>
      </div>

      <div className="ml-auto flex items-center justify-end gap-3 w-full">
        <AddToCart stock={stock} id={id!} />
        <AddToFavorites id={id!} />
      </div>
    </ProductViewerWrapper>
  )
}
