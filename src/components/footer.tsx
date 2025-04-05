"use client"

import type React from "react"

import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function Footer() {
  const { themeColors } = useTheme()

  return (
    <footer className="py-8 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Harsh Dhami. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-theme-primary transition-colors duration-300"
              style={{ "--hover-text-color": themeColors.primary } as React.CSSProperties}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-theme-primary transition-colors duration-300"
              style={{ "--hover-text-color": themeColors.primary } as React.CSSProperties}
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-theme-primary transition-colors duration-300"
              style={{ "--hover-text-color": themeColors.primary } as React.CSSProperties}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-theme-primary transition-colors duration-300"
              style={{ "--hover-text-color": themeColors.primary } as React.CSSProperties}
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-theme-primary transition-colors duration-300"
              style={{ "--hover-text-color": themeColors.primary } as React.CSSProperties}
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

