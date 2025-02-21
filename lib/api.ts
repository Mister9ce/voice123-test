import type { SearchResponse, PaginationInfo } from "./types"

const API_BASE_URL = "https://api.sandbox.voice123.com/providers/search"

export async function searchVoiceActors(keywords = "", page = 1): Promise<[SearchResponse, PaginationInfo]> {
  try {
    const params = new URLSearchParams({
      service: "voice_over",
      keywords,
      page: page.toString(),
    })

    const response = await fetch(`${API_BASE_URL}/?${params}`)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data: SearchResponse = await response.json()

    const paginationInfo: PaginationInfo = {
      pageSize: Number.parseInt(response.headers.get("x-list-page-size") || "10"),
      currentPage: Number.parseInt(response.headers.get("x-list-current-page") || "1"),
      totalPages: Number.parseInt(response.headers.get("x-list-total-pages") || "1"),
      totalRows: Number.parseInt(response.headers.get("x-list-total-rows") || "0"),
    }

    return [data, paginationInfo]
  } catch (error) {
    console.error("Error fetching voice actors:", error)
    throw error
  }
}

