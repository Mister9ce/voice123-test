import { renderHook, act } from "@testing-library/react"
import { useDebounce } from "../hooks/use-debounce"

describe("useDebounce", () => {
  jest.useFakeTimers()

  it("returns the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500))
    expect(result.current).toBe("initial")
  })

  it("debounces the value change", () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: "initial", delay: 500 },
    })

    rerender({ value: "changed", delay: 500 })
    expect(result.current).toBe("initial")

    act(() => {
      jest.advanceTimersByTime(250)
    })
    expect(result.current).toBe("initial")

    act(() => {
      jest.advanceTimersByTime(250)
    })
    expect(result.current).toBe("changed")
  })
})

