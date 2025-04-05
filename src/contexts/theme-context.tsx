"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeType = "purple" | "green"

interface ThemeContextType {
  theme: ThemeType
  toggleTheme: () => void
  themeColors: {
    primary: string
    primaryHover: string
    primaryLight: string
    primaryDark: string
    primaryGlow: string
  }
}

const defaultThemeColors = {
  purple: {
    primary: "#A855F7", // purple-500
    primaryHover: "#9333EA", // purple-600
    primaryLight: "#C084FC", // purple-400
    primaryDark: "#7E22CE", // purple-700
    primaryGlow: "rgba(168, 85, 247, 0.7)", // purple-500 with opacity
  },
  green: {
    primary: "#10B981", // emerald-500
    primaryHover: "#059669", // emerald-600
    primaryLight: "#34D399", // emerald-400
    primaryDark: "#047857", // emerald-700
    primaryGlow: "rgba(16, 185, 129, 0.7)", // emerald-500 with opacity
  },
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("purple")
  const [themeColors, setThemeColors] = useState(defaultThemeColors.purple)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "purple" ? "green" : "purple"))
  }

  useEffect(() => {
    setThemeColors(defaultThemeColors[theme])

    // Update CSS variables
    document.documentElement.style.setProperty("--theme-primary", themeColors.primary)
    document.documentElement.style.setProperty("--theme-primary-hover", themeColors.primaryHover)
    document.documentElement.style.setProperty("--theme-primary-light", themeColors.primaryLight)
    document.documentElement.style.setProperty("--theme-primary-glow", themeColors.primaryGlow)
  }, [theme, themeColors])

  return <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

