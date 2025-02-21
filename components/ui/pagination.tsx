import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 6

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "ghost"}
            className={
              currentPage === i ? "bg-[#4d93d6] text-white hover:bg-[#002a5d]" : "text-[#002a5d] hover:bg-[#93bde6]/10"
            }
            onClick={() => onPageChange(i)}
          >
            {i}
          </Button>,
        )
      }
    } else {
      pageNumbers.push(
        <Button
          key={1}
          variant={currentPage === 1 ? "default" : "ghost"}
          className={
            currentPage === 1 ? "bg-[#4d93d6] text-white hover:bg-[#002a5d]" : "text-[#002a5d] hover:bg-[#93bde6]/10"
          }
          onClick={() => onPageChange(1)}
        >
          1
        </Button>,
      )

      if (currentPage > 3) {
        pageNumbers.push(<span key="ellipsis1">...</span>)
      }

      const startPage = Math.max(2, currentPage - 1)
      const endPage = Math.min(totalPages - 1, currentPage + 1)
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "ghost"}
            className={
              currentPage === i ? "bg-[#4d93d6] text-white hover:bg-[#002a5d]" : "text-[#002a5d] hover:bg-[#93bde6]/10"
            }
            onClick={() => onPageChange(i)}
          >
            {i}
          </Button>,
        )
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(<span key="ellipsis2">...</span>)
      }

      pageNumbers.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "default" : "ghost"}
          className={
            currentPage === totalPages
              ? "bg-[#4d93d6] text-white hover:bg-[#002a5d]"
              : "text-[#002a5d] hover:bg-[#93bde6]/10"
          }
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Button>,
      )
    }

    return pageNumbers
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <Button
        variant="outline"
        className="text-[#002a5d]"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      {renderPageNumbers()}
      <Button
        variant="outline"
        className="text-[#002a5d]"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  )
}

