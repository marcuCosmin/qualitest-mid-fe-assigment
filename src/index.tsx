import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { RouterProvider } from "react-router-dom"
import { router } from "./pages/router"

import { Provider } from "react-redux"
import { store } from "./redux/store"

import "./index.css"

const rootElement = document.getElementById("root")!

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
