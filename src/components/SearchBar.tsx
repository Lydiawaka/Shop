"use client"
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex ic  gap-2 p-2 rounded-md">
        <input type="text" placeholder="Search" />
      <FaSearch className="cursor-pointer"/>
    </div>
  )
}

export default SearchBar
