import { render, screen, fireEvent } from "@testing-library/react"
import { FilterChips } from "../components/ui/filter-chips"
import '@testing-library/jest-dom';

describe("FilterChips", () => {
  const filters = ["English", "Spanish", "French"]
  const mockOnFilterClick = jest.fn()

  it("renders all filters", () => {
    render(<FilterChips filters={filters} selectedFilters={[]} onFilterClick={mockOnFilterClick} />)
    filters.forEach((filter) => {
      expect(screen.getByText(filter)).toBeInTheDocument()
    })
  })

  it("calls onFilterClick when a filter is clicked", () => {
    render(<FilterChips filters={filters} selectedFilters={[]} onFilterClick={mockOnFilterClick} />)
    fireEvent.click(screen.getByText("English"))
    expect(mockOnFilterClick).toHaveBeenCalledWith("English")
  })

  it("applies selected style to selected filters", () => {
    render(<FilterChips filters={filters} selectedFilters={["English"]} onFilterClick={mockOnFilterClick} />)
    expect(screen.getByText("English")).toHaveClass("bg-[#4d93d6]")
    expect(screen.getByText("Spanish")).toHaveClass("border-[#93bde6]")
  })
})

