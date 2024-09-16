import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

import { productsReducer } from "./slices/products"
import { viewedProductReducer } from "./slices/viewedProduct"
import { cartReducer } from "./slices/cart"
import { favoritesReducer } from "./slices/favorites"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    viewedProduct: viewedProductReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
})

type State = ReturnType<typeof store.getState>
type Dispatch = typeof store.dispatch

export const useDispatch: () => Dispatch = useReduxDispatch
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector
