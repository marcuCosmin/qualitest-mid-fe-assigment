import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type InitalState = {
  viewedItemId: number | null
}

const initialState: InitalState = {
  viewedItemId: null,
}

const viewedProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setViewedProduct(state, action: PayloadAction<number | null>) {
      state.viewedItemId = action.payload
    },
  },
})

export const { reducer: viewedProductReducer } = viewedProductSlice
export const { setViewedProduct } = viewedProductSlice.actions
