import { render, screen } from "@testing-library/react"
import Contact from "@/components/contact"
import { jest } from "@jest/globals"

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})

describe("Contact", () => {
  beforeEach(() => {
    mockIntersectionObserver.mockClear()
  })

  it("renders contact section", () => {
    render(<Contact />)

    expect(screen.getByText("Let's Connect")).toBeInTheDocument()
    expect(screen.getByText(/I'm always interested in new opportunities/)).toBeInTheDocument()
  })

  it("shows contact information", () => {
    render(<Contact />)

    expect(screen.getByText("aalvarez.contact04@gmail.com")).toBeInTheDocument()
    expect(screen.getByText("+57 (302) 665-4572")).toBeInTheDocument()
    expect(screen.getByText("linkedin.com/in/aalvarez-p/")).toBeInTheDocument()
    expect(screen.getByText("github.com/AlvaDevs")).toBeInTheDocument()
  })

  it("displays contact cards", () => {
    render(<Contact />)

    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByText("Phone")).toBeInTheDocument()
    expect(screen.getByText("LinkedIn")).toBeInTheDocument()
    expect(screen.getByText("GitHub")).toBeInTheDocument()
  })

  it("has proper section id for navigation", () => {
    render(<Contact />)

    const contactSection = screen.getByRole("region")
    expect(contactSection).toHaveAttribute("id", "contact")
  })

  it("sets up intersection observer for animations", () => {
    render(<Contact />)

    expect(mockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function), { threshold: 0.2 })
  })

  it("has proper dark background styling", () => {
    render(<Contact />)

    const section = screen.getByRole("region")
    expect(section).toHaveClass("bg-gray-900")
  })

  it("contact method links have correct hrefs", () => {
    render(<Contact />)

    const emailLink = screen.getByRole("link", { name: /email/i })
    expect(emailLink).toHaveAttribute("href", "mailto:aalvarez.contact04@gmail.com")

    const phoneLink = screen.getByRole("link", { name: /phone/i })
    expect(phoneLink).toHaveAttribute("href", "tel:+573026654572")

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/aalvarez-p/")

    const githubLink = screen.getByRole("link", { name: /github/i })
    expect(githubLink).toHaveAttribute("href", "https://github.com/AlvaDevs")
  })

  it("contact cards have proper styling", () => {
    render(<Contact />)

    const emailCard = screen.getByRole("link", { name: /email/i })
    expect(emailCard).toHaveClass("bg-gray-800", "rounded-2xl", "p-6", "hover:bg-gray-700")
  })

  it("contact cards have hover effects", () => {
    render(<Contact />)

    const contactCards = screen.getAllByRole("link")
    contactCards.forEach((card) => {
      expect(card).toHaveClass("hover:-translate-y-1", "hover:shadow-2xl", "transition-all")
    })
  })

  it("displays proper icons for each contact method", () => {
    render(<Contact />)

    const contactCards = screen.getAllByRole("link")
    contactCards.forEach((card) => {
      const icon = card.querySelector("svg")
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass("w-6", "h-6")
    })
  })

  it("has responsive grid layout", () => {
    render(<Contact />)

    const gridContainer = screen.getByRole("link", { name: /email/i }).parentElement
    expect(gridContainer).toHaveClass("grid", "md:grid-cols-2")
  })

  it("displays copyright information", () => {
    render(<Contact />)

    expect(screen.getByText(/© 2025 Álvaro Álvarez/)).toBeInTheDocument()
    expect(screen.getByText(/Built with Next.js and Tailwind CSS/)).toBeInTheDocument()
  })

  it("has proper text styling for dark theme", () => {
    render(<Contact />)

    const title = screen.getByText("Let's Connect")
    expect(title).toHaveClass("text-white")

    const description = screen.getByText(/I'm always interested in new opportunities/)
    expect(description).toHaveClass("text-gray-300")

    const copyright = screen.getByText(/© 2025 Álvaro Álvarez/)
    expect(copyright).toHaveClass("text-gray-400")
  })

  it("contact method values have proper styling", () => {
    render(<Contact />)

    const emailValue = screen.getByText("aalvarez.contact04@gmail.com")
    expect(emailValue).toHaveClass("text-white", "font-medium")

    const phoneValue = screen.getByText("+57 (302) 665-4572")
    expect(phoneValue).toHaveClass("text-white", "font-medium")
  })

  it("contact method labels have proper styling", () => {
    render(<Contact />)

    const emailLabel = screen.getByText("Email")
    expect(emailLabel).toHaveClass("text-gray-400", "text-sm", "font-medium")
  })

  it("has proper semantic structure", () => {
    render(<Contact />)

    const mainHeading = screen.getByRole("heading", { level: 2 })
    expect(mainHeading).toHaveTextContent("Let's Connect")
  })

  it("icons have proper color styling", () => {
    render(<Contact />)

    const contactCards = screen.getAllByRole("link")
    contactCards.forEach((card) => {
      const iconContainer = card.querySelector(".text-blue-400")
      expect(iconContainer).toHaveClass("group-hover:text-blue-300", "transition-colors")
    })
  })

  it("has proper border styling in footer", () => {
    render(<Contact />)

    const footerBorder = screen.getByText(/© 2025 Álvaro Álvarez/).parentElement
    expect(footerBorder).toHaveClass("border-t", "border-gray-700", "pt-8")
  })
})
