"use client"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'


interface SearchButtonProps {

}

const SearchButton: React.FC<SearchButtonProps> = ({ }) => {
  return (
    <div className="flex flex-1 border gap-2 rounded-lg border-gray-300 outline-none px-3 py-2 items-center">
      <MagnifyingGlassIcon
        className="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
      />
      <input
        placeholder="Search"
        className="outline-none w-full h-full"
      />
    </div>
  )
}

export default SearchButton