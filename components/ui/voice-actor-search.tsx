"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { VoiceActorCard } from "@/components/ui/voice-actor-card"
import { Pagination } from "@/components/ui/pagination"
import { searchVoiceActors } from "@/lib/api"
import { useDebounce } from "@/hooks/use-debounce"
import type { Provider, PaginationInfo } from "@/lib/types"
import { Header } from "@/components/ui/header"
import { AudioProvider } from "@/contexts/audio-context"

const DynamicFilterChips = dynamic(() => import("@/components/ui/filter-chips").then((mod) => mod.FilterChips), {
  ssr: false,
})

export default function VoiceActorSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState(searchParams.get("keywords") || "")
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1)
  const [providers, setProviders] = useState<Provider[]>([])
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    pageSize: 10,
    currentPage: 1,
    totalPages: 1,
    totalRows: 0,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const debouncedSearch = useDebounce(searchQuery)

  const filters = ["English", "Spanish", "French", "Commercial", "Narration"]

  const fetchProviders = useCallback(async () => {
    try {
      setIsLoading(true)
      const [data, pagination] = await searchVoiceActors(debouncedSearch, currentPage)
      setProviders(data.providers)
      setPaginationInfo(pagination)
    } catch (error) {
      console.error("Failed to fetch providers:", error)
    } finally {
      setIsLoading(false)
    }
  }, [debouncedSearch, currentPage])

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    params.set("keywords", debouncedSearch)
    params.set("page", currentPage.toString())
    router.push(`?${params.toString()}`)
    fetchProviders()
  }, [debouncedSearch, currentPage, router, searchParams, fetchProviders])

  const handleFilterClick = (filter: string) => {
    setSelectedFilters((current) =>
      current.includes(filter) ? current.filter((f) => f !== filter) : [...current, filter],
    )
  }

  return (
    <AudioProvider>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Suspense fallback={<div>Loading filters...</div>}>
            <DynamicFilterChips filters={filters} selectedFilters={selectedFilters} onFilterClick={handleFilterClick} />
          </Suspense>
        </div>

        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[200px] animate-pulse rounded-xl bg-gray-100" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {providers.map((provider) => (
                <VoiceActorCard key={provider.id} provider={provider} searchQuery={debouncedSearch} />
              ))}
            </div>
            {paginationInfo.totalPages > 1 && (
              <Pagination
                currentPage={paginationInfo.currentPage}
                totalPages={paginationInfo.totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </main>
    </AudioProvider>
  )
}

