import { jest } from "@jest/globals"
import "@testing-library/jest-dom"

// Mock framer-motion - use doMock to avoid module resolution issues
jest.doMock("framer-motion", () => ({
  motion: {
    div: "div",
    section: "section",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    img: "img",
    nav: "nav",
    ul: "ul",
    li: "li",
    a: "a",
    button: "button",
    form: "form",
    input: "input",
    textarea: "textarea",
  },
  AnimatePresence: ({ children }) => children,
  useInView: () => true,
}))

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// jest.setup.js
class MockIntersectionObserver {
  constructor(callback, options) {}
  observe = jest.fn()
  unobserve = jest.fn()
  disconnect = jest.fn()
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})
