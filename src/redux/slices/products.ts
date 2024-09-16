import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { fetchProducts as fetchProductsUtil } from "../../utils/fetchProducts"

import type { ProductsObject } from "../../utils/transformProducts"
import type { Product } from "../../types"

type InitalState = {
  itemsArray: Product[]
  itemsObject: ProductsObject
  page: number
  totalItems: number
  isLoading: boolean
  searchQuery: string
}

const initialState: InitalState = {
  itemsArray: [],
  itemsObject: {},
  totalItems: 0,
  page: 1,
  isLoading: false,
  searchQuery: "",
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  fetchProductsUtil
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false

      if (!action.payload) {
        return
      }

      const { productsArray, productsObject, total, preserveData } =
        action.payload

      if (preserveData) {
        state.itemsArray = [...state.itemsArray, ...productsArray]
        state.itemsObject = { ...state.itemsObject, ...productsObject }
        state.page += 1
      } else {
        state.itemsArray = productsArray
        state.itemsObject = productsObject
        state.page = 1
      }

      state.totalItems = total
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log(state, action)
    })
  },
})

export const { reducer: productsReducer } = productsSlice
export const { setSearchQuery } = productsSlice.actions
