"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme, themeColors } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold" style={{ color: themeColors.primary }}>
          HARSH DHAMI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider hover:text-theme-primary transition-colors duration-300"
                style={
                  {
                    "--hover-color": themeColors.primary,
                  } as React.CSSProperties
                }
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-800"
            aria-label={`Switch to ${theme === "purple" ? "green" : "purple"} theme`}
          >
            {theme === "purple" ? (
              <Sun className="h-5 w-5" style={{ color: themeColors.primary }} />
            ) : (
              <Moon className="h-5 w-5" style={{ color: themeColors.primary }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-800"
            aria-label={`Switch to ${theme === "purple" ? "green" : "purple"} theme`}
          >
            {theme === "purple" ? (
              <Sun className="h-5 w-5" style={{ color: themeColors.primary }} />
            ) : (
              <Moon className="h-5 w-5" style={{ color: themeColors.primary }} />
            )}
          </button>

          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
          <nav className="flex flex-col py-4">
            {["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-3 text-center hover:bg-gray-900 transition-colors duration-300"
                style={
                  {
                    color: "white",
                    ":hover": { color: themeColors.primary },
                  } as React.CSSProperties
                }
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

