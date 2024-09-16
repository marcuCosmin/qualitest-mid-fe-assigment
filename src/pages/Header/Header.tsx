import { Link, Outlet } from "react-router-dom"

import { Search } from "./Search/Search"

import { Cart } from "./Cart"
import { Favorites } from "./Favorites"

export const Header = () => {
  return (
    <>
      <header className="flex bg-white p-4 justify-between">
        <Link to="/" className="font-bold text-lg">
          App Logo
        </Link>

        <Search />

        <div className="flex gap-3">
          <Cart />
          <Favorites />
        </div>
      </header>

      <Outlet />
    </>
  )
}
