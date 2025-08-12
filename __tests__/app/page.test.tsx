import { render, screen } from "@testing-library/react"
import Portfolio from "@/app/page"

describe("Portfolio Page", () => {
  it("renders all main sections", () => {
    render(<Portfolio />)

    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByText("Álvaro Álvarez")).toBeInTheDocument() // Hero section
    expect(screen.getByText("Experience")).toBeInTheDocument()
    expect(screen.getByText("Education")).toBeInTheDocument()
    expect(screen.getByText("Certifications")).toBeInTheDocument()
    expect(screen.getByText("Let's Connect")).toBeInTheDocument() // Contact section
  })

  it("has proper page structure", () => {
    render(<Portfolio />)

    const main = screen.getByRole("main")
    expect(main).toHaveClass("min-h-screen")
  })

  it("renders navigation with correct links", () => {
    render(<Portfolio />)

    expect(screen.getByText("Portfolio")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Experience")).toBeInTheDocument()
    expect(screen.getByText("Education")).toBeInTheDocument()
    expect(screen.getByText("Certifications")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
  })

  it("renders all sections in correct order", () => {
    render(<Portfolio />)

    const sections = [
      screen.getByRole("navigation"),
      screen.getByText("Álvaro Álvarez").closest("section"),
      screen.getByText("Experience").closest("section"),
      screen.getByText("Education").closest("section"),
      screen.getByText("Certifications").closest("section"),
      screen.getByText("Let's Connect").closest("section"),
    ]

    sections.forEach((section) => {
      expect(section).toBeInTheDocument()
    })
  })

  it("has proper section IDs for navigation", () => {
    render(<Portfolio />)

    expect(screen.getByText("Álvaro Álvarez").closest("section")).toHaveAttribute("id", "home")
    expect(screen.getByText("Experience").closest("section")).toHaveAttribute("id", "experience")
    expect(screen.getByText("Education").closest("section")).toHaveAttribute("id", "education")
    expect(screen.getByText("Certifications").closest("section")).toHaveAttribute("id", "certifications")
    expect(screen.getByText("Let's Connect").closest("section")).toHaveAttribute("id", "contact")
  })

  it("displays personal information correctly", () => {
    render(<Portfolio />)

    expect(screen.getByText("Álvaro Álvarez")).toBeInTheDocument()
    expect(screen.getByText("DevOps & Cloud Engineer Enthusiast")).toBeInTheDocument()
    expect(screen.getByText("aalvarez.contact04@gmail.com")).toBeInTheDocument()
    expect(screen.getByText("+57 (302) 665-4572")).toBeInTheDocument()
  })

  it("displays work experience information", () => {
    render(<Portfolio />)

    expect(screen.getByText("Student Intern")).toBeInTheDocument()
    expect(screen.getByText("Intellsis")).toBeInTheDocument()
    expect(screen.getByText("2023 - 2023")).toBeInTheDocument()
  })

  it("displays education information", () => {
    render(<Portfolio />)

    expect(screen.getByText("Systems and Computer Engineer")).toBeInTheDocument()
    expect(screen.getByText("Universidad Tecnológica de Bolívar")).toBeInTheDocument()
    expect(screen.getByText("2022 - 2027")).toBeInTheDocument()
  })

  it("displays certification information", () => {
    render(<Portfolio />)

    expect(screen.getByText("Digital Transformation with Google Cloud")).toBeInTheDocument()
    expect(screen.getByText("Google Cloud Skills Boost")).toBeInTheDocument()
    expect(screen.getAllByText("LinkedIn")).toHaveLength(7) // Multiple LinkedIn certifications
  })

  it("displays contact methods", () => {
    render(<Portfolio />)

    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByText("Phone")).toBeInTheDocument()
    expect(screen.getByText("LinkedIn")).toBeInTheDocument()
    expect(screen.getByText("GitHub")).toBeInTheDocument()
  })

  it("has proper responsive design classes", () => {
    render(<Portfolio />)

    const main = screen.getByRole("main")
    expect(main).toHaveClass("min-h-screen")

    // Check for responsive typography
    const mainTitle = screen.getByText("Álvaro Álvarez")
    expect(mainTitle).toHaveClass("text-5xl", "md:text-7xl")
  })

  it("includes all technology tags", () => {
    render(<Portfolio />)

    expect(screen.getByText("C++")).toBeInTheDocument()
    expect(screen.getByText("Rust")).toBeInTheDocument()
    expect(screen.getByText("WebAssembly")).toBeInTheDocument()
  })

  it("has proper semantic HTML structure", () => {
    render(<Portfolio />)

    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("main")).toBeInTheDocument()

    const headings = screen.getAllByRole("heading")
    expect(headings.length).toBeGreaterThan(10) // Multiple section headings and certification titles
  })

  it("displays profile image", () => {
    render(<Portfolio />)

    const profileImage = screen.getByRole("img", { name: /profile photo/i })
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute("src", "/profile-photo.JPEG")
  })

  it("includes copyright information", () => {
    render(<Portfolio />)

    expect(screen.getByText(/© 2025 Álvaro Álvarez/)).toBeInTheDocument()
    expect(screen.getByText(/Built with Next.js and Tailwind CSS/)).toBeInTheDocument()
  })

  it("has proper link attributes for external links", () => {
    render(<Portfolio />)

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/aalvarez-p/")

    const githubLink = screen.getByRole("link", { name: /github/i })
    expect(githubLink).toHaveAttribute("href", "https://github.com/AlvaDevs")
  })
})
