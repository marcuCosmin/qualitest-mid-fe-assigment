import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: number[] = []

const favoritesSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOneToFav: (state, action) => {
      state.push(action.payload)
    },
    removeOneFromFav(state, action: PayloadAction<number>) {
      const index = state.findIndex((id) => id === action.payload)

      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const { reducer: favoritesReducer } = favoritesSlice
export const { addOneToFav, removeOneFromFav } = favoritesSlice.actions
