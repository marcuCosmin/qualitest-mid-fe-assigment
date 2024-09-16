import { Search as SearchIcon } from "lucide-react"

import { useSearch } from "./useSearch"

export const Search = () => {
  const { search, onSearch } = useSearch()

  return (
    <div className="relative">
      <input
        className="p-1 border"
        aria-label="Search Product"
        type="search"
        placeholder="Search"
        value={search}
        onChange={onSearch}
      />
      <SearchIcon
        aria-hidden="true"
        className="pl-1 bg-white absolute top-1/2 -right-2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
