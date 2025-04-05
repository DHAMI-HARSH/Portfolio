"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "DEVELOPER. CREATOR. PROBLEM SOLVER."
  const [isLightOn, setIsLightOn] = useState(false)
  const { themeColors } = useTheme()

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const toggleLight = () => {
    setIsLightOn(!isLightOn)
  }

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Light bulb with glow effect */}
      <div
        className={`absolute top-32 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-500 ${
          isLightOn ? "scale-110" : "opacity-70"
        }`}
        onClick={toggleLight}
      >
        {/* Light beam effect when on */}
        {isLightOn && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -z-10">
            <div
              className="w-1 h-1 rounded-full animate-pulse"
              style={{
                backgroundColor: themeColors.primary,
                boxShadow: `0 0 150px 80px ${themeColors.primaryGlow}`,
              }}
            ></div>
          </div>
        )}

        <svg
          width="40"
          height="60"
          viewBox="0 0 40 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Bulb glow when on */}
          {isLightOn && (
            <>
              <circle cx="20" cy="24" r="13" fill={`${themeColors.primary}30`} />
              <path
                d="M20 15C15.0294 15 11 19.0294 11 24C11 27.9333 13.2667 31.2667 16.6667 32.6C17.3333 32.8667 17.6667 33.5333 17.6667 34.2V40C17.6667 41.1046 18.5621 42 19.6667 42H20.3333C21.4379 42 22.3333 41.1046 22.3333 40V34.2C22.3333 33.5333 22.6667 32.8667 23.3333 32.6C26.7333 31.2667 29 27.9333 29 24C29 19.0294 24.9706 15 20 15Z"
                fill={`${themeColors.primary}20`}
              />
            </>
          )}

          {/* Bulb outline */}
          <path
            d="M20 0V10M20 60V50M10 30H0M40 30H30M20 15C15.0294 15 11 19.0294 11 24C11 27.9333 13.2667 31.2667 16.6667 32.6C17.3333 32.8667 17.6667 33.5333 17.6667 34.2V40C17.6667 41.1046 18.5621 42 19.6667 42H20.3333C21.4379 42 22.3333 41.1046 22.3333 40V34.2C22.3333 33.5333 22.6667 32.8667 23.3333 32.6C26.7333 31.2667 29 27.9333 29 24C29 19.0294 24.9706 15 20 15Z"
            stroke={isLightOn ? themeColors.primary : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Filament glow when on */}
          {isLightOn && (
            <path
              d="M20 15V24"
              stroke={themeColors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="1 2"
            />
          )}
        </svg>

        {/* Tooltip */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs text-gray-400 whitespace-nowrap transition-opacity duration-300 ${
            isLightOn ? "opacity-100" : "opacity-0"
          }`}
        >
          {isLightOn ? "Click to turn off" : "Click to turn on"}
        </div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Dark profile image */}
        <div className="hidden md:block relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-black via-black to-transparent z-10 transition-opacity duration-500 ${
              isLightOn ? "opacity-70" : "opacity-100"
            }`}
          ></div>
          <Image
            src="/image1.jpeg?height=600&width=500"
            alt="Harsh Dhami"
            width={500}
            height={600}
            className={`w-full h-auto max-h-[80vh] object-cover transition-opacity duration-500 ${
              isLightOn ? "opacity-50" : "opacity-30"
            }`}
          />
        </div>

        {/* Right side - Text content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-left md:text-left"
        >
          <h2 className="text-xl md:text-2xl mb-2 text-gray-400">I AM</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            HARSH{" "}
            <span className={`${isLightOn ? "animate-pulse" : ""}`} style={{ color: themeColors.primary }}>
              DHAMI
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-300 font-light">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <p
            className={`text-gray-400 max-w-lg mb-8 transition-all duration-500 ${
              isLightOn ? "text-gray-300" : "text-gray-400"
            }`}
          >
            Passionate full-stack developer specializing in creating modern, responsive web applications with Next.js,
            Firebase, and the MERN stack. Turning ideas into elegant digital solutions.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className={`px-6 py-3 border transition-colors duration-300 ${
                isLightOn ? "hover:text-white" : "text-gray-300 hover:border-theme-primary hover:text-theme-primary"
              }`}
              style={
                {
                  borderColor: isLightOn ? themeColors.primary : "rgb(55, 65, 81)",
                  color: isLightOn ? themeColors.primary : undefined,
                  "--hover-border-color": themeColors.primary,
                  "--hover-bg-color": themeColors.primary,
                } as React.CSSProperties
              }
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 transition-colors duration-300 ${
                isLightOn
                  ? "text-white hover:bg-theme-primary-hover"
                  : "bg-gray-900 text-gray-300 hover:bg-theme-primary hover:text-white"
              }`}
              style={
                {
                  backgroundColor: isLightOn ? themeColors.primary : undefined,
                  "--hover-bg-color": isLightOn ? themeColors.primaryHover : themeColors.primary,
                } as React.CSSProperties
              }
            >
              CONTACT ME
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="transition-colors duration-300 text-gray-400 hover:text-theme-primary"
          style={{ "--hover-text-color": themeColors.primary } as React.CSSProperties}
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>

      {/* Page overlay when light is on */}
      <div
        className={`fixed inset-0 bg-gradient-radial from-transparent pointer-events-none transition-opacity duration-1000 ${
          isLightOn ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.8))`,
        }}
      ></div>
    </section>
  )
}

