import { createSlice } from "@reduxjs/toolkit"

type CartEntry = Record<number, number>

const initialState: CartEntry = {}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOneToCart: (state, action) => {
      if (state[action.payload]) {
        state[action.payload] += 1
      } else {
        state[action.payload] = 1
      }
    },
  },
})

export const { reducer: cartReducer } = cartSlice
export const { addOneToCart } = cartSlice.actions
