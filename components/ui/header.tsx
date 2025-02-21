"use client"

import Image from "next/image"
import { SearchBar } from "@/components/ui/search-bar"

interface HeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white py-4 shadow-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Image
          src="/voice123-logo.png"
          alt="Voice123 Logo"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
        <div className="w-full max-w-xl px-4 sm:px-0">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>
        <div className="hidden w-28 sm:block"></div> 
      </div>
    </header>
  )
}

