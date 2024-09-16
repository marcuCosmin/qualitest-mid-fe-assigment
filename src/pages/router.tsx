import { createBrowserRouter } from "react-router-dom"

import { Home } from "./Home/Home"
import { Header } from "./Header/Header"
import { Checkout } from "./Checkout/Chekout"
import { Error } from "./Error"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
])
