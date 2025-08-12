import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Navigation from "@/components/navigation"
import { jest } from "@jest/globals"

// Mock scrollIntoView
const mockScrollIntoView = jest.fn()
Object.defineProperty(window.Element.prototype, "scrollIntoView", {
  writable: true,
  value: mockScrollIntoView,
})

// Mock getElementById
const mockGetElementById = jest.fn()
Object.defineProperty(document, "getElementById", {
  writable: true,
  value: mockGetElementById,
})

describe("Navigation", () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear()
    mockGetElementById.mockClear()
    // Reset scroll position
    Object.defineProperty(window, "scrollY", { writable: true, value: 0 })
  })

  it("renders navigation menu", () => {
    render(<Navigation />)

    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByText("Portfolio")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Experience")).toBeInTheDocument()
    expect(screen.getByText("Education")).toBeInTheDocument()
    expect(screen.getByText("Certifications")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
  })

  it("has proper navigation buttons", () => {
    render(<Navigation />)

    const homeButton = screen.getByRole("button", { name: "Home" })
    const experienceButton = screen.getByRole("button", { name: "Experience" })
    const educationButton = screen.getByRole("button", { name: "Education" })
    const certificationsButton = screen.getByRole("button", { name: "Certifications" })
    const contactButton = screen.getByRole("button", { name: "Contact" })

    expect(homeButton).toBeInTheDocument()
    expect(experienceButton).toBeInTheDocument()
    expect(educationButton).toBeInTheDocument()
    expect(certificationsButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
  })

  it("applies glass effect when scrolled", async () => {
    render(<Navigation />)

    const nav = screen.getByRole("navigation")
    expect(nav).not.toHaveClass("glass")

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { writable: true, value: 100 })
    fireEvent.scroll(window)

    await waitFor(() => {
      expect(nav).toHaveClass("glass")
    })
  })

  it("scrolls to section when navigation button is clicked", () => {
    const mockElement = { scrollIntoView: mockScrollIntoView }
    mockGetElementById.mockReturnValue(mockElement)

    render(<Navigation />)

    const homeButton = screen.getByRole("button", { name: "Home" })
    fireEvent.click(homeButton)

    expect(mockGetElementById).toHaveBeenCalledWith("home")
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" })
  })

  it("handles missing section elements gracefully", () => {
    mockGetElementById.mockReturnValue(null)

    render(<Navigation />)

    const homeButton = screen.getByRole("button", { name: "Home" })
    fireEvent.click(homeButton)

    expect(mockGetElementById).toHaveBeenCalledWith("home")
    expect(mockScrollIntoView).not.toHaveBeenCalled()
  })

  it("updates active section based on scroll position", async () => {
    const mockElements = {
      home: { offsetTop: 0, offsetHeight: 500 },
      experience: { offsetTop: 500, offsetHeight: 500 },
      education: { offsetTop: 1000, offsetHeight: 500 },
      certifications: { offsetTop: 1500, offsetHeight: 500 },
      contact: { offsetTop: 2000, offsetHeight: 500 },
    }

    const mockGetElementById = jest.fn<(id: string) => HTMLElement | null>()

    render(<Navigation />)

    // Simulate scroll to experience section
    Object.defineProperty(window, "scrollY", { writable: true, value: 600 })
    fireEvent.scroll(window)

    await waitFor(() => {
      const experienceButton = screen.getByRole("button", { name: "Experience" })
      expect(experienceButton).toHaveClass("text-blue-600")
    })
  })

  it("shows mobile menu button on small screens", () => {
    render(<Navigation />)

    const mobileMenuButton = screen.getByRole("button", { name: /menu/i })
    expect(mobileMenuButton).toBeInTheDocument()
    expect(mobileMenuButton).toHaveClass("md:hidden")
  })

  it("portfolio logo button scrolls to home", () => {
    const mockElement = { scrollIntoView: mockScrollIntoView }
    mockGetElementById.mockReturnValue(mockElement)

    render(<Navigation />)

    const portfolioButton = screen.getByRole("button", { name: "Portfolio" })
    fireEvent.click(portfolioButton)

    expect(mockGetElementById).toHaveBeenCalledWith("home")
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" })
  })

  it("applies hover effects to navigation items", () => {
    render(<Navigation />)

    const homeButton = screen.getByRole("button", { name: "Home" })
    expect(homeButton).toHaveClass("hover:text-blue-600")
  })
})
