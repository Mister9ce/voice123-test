import { render, screen, fireEvent } from "@testing-library/react"
import { SearchBar } from "../components/ui/search-bar"

describe("SearchBar", () => {
  it("renders with placeholder text", () => {
    render(<SearchBar value="" onChange={() => {}} />)
    expect(screen.getByPlaceholderText("Search for a Voice Actor")).toBeInTheDocument()
  })

  it("calls onChange when input value changes", () => {
    const mockOnChange = jest.fn()
    render(<SearchBar value="" onChange={mockOnChange} />)
    const input = screen.getByPlaceholderText("Search for a Voice Actor")
    fireEvent.change(input, { target: { value: "test" } })
    expect(mockOnChange).toHaveBeenCalledWith("test")
  })
})

