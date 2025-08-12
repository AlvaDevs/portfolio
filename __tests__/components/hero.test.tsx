import { render, screen, waitFor } from "@testing-library/react"
import Hero from "@/components/hero"

describe("Hero", () => {
  it("renders hero section with profile information", () => {
    render(<Hero />)

    expect(screen.getByRole("img", { name: /profile photo/i })).toBeInTheDocument()
    expect(screen.getByText("Álvaro Álvarez")).toBeInTheDocument()
    expect(screen.getByText("DevOps & Cloud Engineer Enthusiast")).toBeInTheDocument()
  })

  it("displays contact buttons", () => {
    render(<Hero />)

    expect(screen.getByText("Get In Touch")).toBeInTheDocument()
    expect(screen.getByText("+57 (302) 665-4572")).toBeInTheDocument()
  })

  it("has proper section id for navigation", () => {
    render(<Hero />)

    const heroSection = screen.getByRole("region")
    expect(heroSection).toHaveAttribute("id", "home")
  })

  it("applies fade-in animation on mount", async () => {
    render(<Hero />)

    const heroContent = screen.getByText("Álvaro Álvarez").closest("div")

    await waitFor(() => {
      expect(heroContent).toHaveClass("translate-y-0", "opacity-100")
    })
  })

  it("has proper image attributes for accessibility", () => {
    render(<Hero />)

    const profileImage = screen.getByRole("img", { name: /profile photo/i })
    expect(profileImage).toHaveAttribute("src", "/profile-photo.JPEG")
    expect(profileImage).toHaveAttribute("alt", "Profile photo")
    expect(profileImage).toHaveClass("w-full", "h-full", "object-cover")
  })

  it("email button has correct href and styling", () => {
    render(<Hero />)

    const emailButton = screen.getByRole("link", { name: /get in touch/i })
    expect(emailButton).toHaveAttribute("href", "mailto:aalvarez.contact04@gmail.com")
    expect(emailButton).toHaveClass("bg-blue-600", "hover:bg-blue-700", "hover:scale-105")
  })

  it("phone button has correct href and styling", () => {
    render(<Hero />)

    const phoneButton = screen.getByRole("link", { name: /\+57 $$302$$ 665-4572/i })
    expect(phoneButton).toHaveAttribute("href", "tel:+573026654572")
    expect(phoneButton).toHaveClass("border-2", "border-gray-300", "hover:border-blue-600")
  })

  it("has proper responsive classes", () => {
    render(<Hero />)

    const title = screen.getByText("Álvaro Álvarez")
    expect(title).toHaveClass("text-5xl", "md:text-7xl")

    const subtitle = screen.getByText("DevOps & Cloud Engineer Enthusiast")
    expect(subtitle).toHaveClass("text-xl", "md:text-2xl")
  })

  it("buttons have proper hover effects", () => {
    render(<Hero />)

    const emailButton = screen.getByRole("link", { name: /get in touch/i })
    const phoneButton = screen.getByRole("link", { name: /\+57 $$302$$ 665-4572/i })

    expect(emailButton).toHaveClass("hover:scale-105", "transition-all")
    expect(phoneButton).toHaveClass("hover:scale-105", "transition-all")
  })

  it("has proper semantic structure", () => {
    render(<Hero />)

    const section = screen.getByRole("region")
    expect(section).toHaveClass("min-h-screen", "flex", "items-center", "justify-center")

    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toHaveTextContent("Álvaro Álvarez")
  })

  it("profile image container has proper styling", () => {
    render(<Hero />)

    const imageContainer = screen.getByRole("img").parentElement
    expect(imageContainer).toHaveClass("w-32", "h-32", "rounded-full", "shadow-2xl", "overflow-hidden")
  })

  it("contact buttons have proper icons", () => {
    render(<Hero />)

    const emailButton = screen.getByRole("link", { name: /get in touch/i })
    const phoneButton = screen.getByRole("link", { name: /\+57 $$302$$ 665-4572/i })

    expect(emailButton.querySelector("svg")).toBeInTheDocument()
    expect(phoneButton.querySelector("svg")).toBeInTheDocument()
  })
})
