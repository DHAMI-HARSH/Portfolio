"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, ShoppingCart, LineChart } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const projects = [
  {
    id: "dino-store",
    title: "Dino Store",
    category: "E-commerce",
    description:
      "A full-featured e-commerce platform for dinosaur enthusiasts, built with Next.js and Firebase. Features include product listings, cart functionality, user authentication, and payment processing.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Stripe"],
    icon: <ShoppingCart className="h-5 w-5" />,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "blink-bank",
    title: "Blink Bank",
    category: "Finance",
    description:
      "Real-time finance tracker application that helps users monitor their spending habits, track investments, and set financial goals. Includes data visualization and predictive analytics.",
    technologies: ["Next.js", "Firebase", "Chart.js", "TailwindCSS"],
    icon: <LineChart className="h-5 w-5" />,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { themeColors } = useTheme()

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.category.toLowerCase() === activeTab)

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold relative inline-block">
            MY PROJECTS
            <span
              className="absolute -bottom-2 left-0 w-full h-0.5"
              style={{ backgroundColor: themeColors.primary }}
            ></span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex border border-gray-800">
              <button
                className={`px-6 py-2 ${
                  activeTab === "all" ? "text-white" : "text-gray-400 hover:text-white"
                } transition-colors duration-300`}
                style={{
                  backgroundColor: activeTab === "all" ? themeColors.primary : undefined,
                }}
                onClick={() => setActiveTab("all")}
              >
                ALL
              </button>
              <button
                className={`px-6 py-2 ${
                  activeTab === "e-commerce" ? "text-white" : "text-gray-400 hover:text-white"
                } transition-colors duration-300`}
                style={{
                  backgroundColor: activeTab === "e-commerce" ? themeColors.primary : undefined,
                }}
                onClick={() => setActiveTab("e-commerce")}
              >
                E-COMMERCE
              </button>
              <button
                className={`px-6 py-2 ${
                  activeTab === "finance" ? "text-white" : "text-gray-400 hover:text-white"
                } transition-colors duration-300`}
                style={{
                  backgroundColor: activeTab === "finance" ? themeColors.primary : undefined,
                }}
                onClick={() => setActiveTab("finance")}
              >
                FINANCE
              </button>
            </div>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div
                  className="relative overflow-hidden border border-gray-800 hover:border-theme-primary transition-colors duration-300"
                  style={{ "--hover-border-color": themeColors.primary } as React.CSSProperties}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                    <div className="mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 border border-gray-700 text-xs font-medium text-gray-300">
                        <span style={{ color: themeColors.primary }}>{project.icon}</span>
                        <span className="ml-1">{project.category}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs text-gray-400 border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-400 hover:text-theme-primary transition-colors duration-300"
                        style={{ "--hover-text-color": themeColors.primary } as React.CSSProperties}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-400 hover:text-theme-primary transition-colors duration-300"
                        style={{ "--hover-text-color": themeColors.primary } as React.CSSProperties}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

