"use client"

import { Button } from "@/components/ui/button"

interface FilterChipsProps {
  filters: string[]
  selectedFilters: string[]
  onFilterClick: (filter: string) => void
}

export function FilterChips({ filters, selectedFilters, onFilterClick }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={selectedFilters.includes(filter) ? "default" : "outline"}
          className={`rounded-full ${
            selectedFilters.includes(filter)
              ? "bg-[#4d93d6] text-white hover:bg-[#002a5d]"
              : "border-[#93bde6] text-[#002a5d] hover:bg-[#93bde6]/10"
          }`}
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}

