export interface Provider {
    id: number
    user_id: number
    headline: string
    user: {
      name: string
      location: string
      picture_medium: string
      username: string
    }
    relevant_sample: {
      file: string
      name: string
    }
    description: string
  }
  
  export interface SearchResponse {
    providers: Provider[]
  }
  
  export interface PaginationInfo {
    pageSize: number
    currentPage: number
    totalPages: number
    totalRows: number
  }
  
  