"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = "Search for a Voice Actor" }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Input
        type="search"
        placeholder={placeholder}
        className="h-10 w-full rounded-full bg-[#93bde6]/20 pl-10 pr-4 sm:h-12 border-none text-[#4d93d6] focus: ring-2 ring-blue-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4d93d6]" />
    </div>
  )
}

