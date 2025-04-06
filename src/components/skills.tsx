"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Lightbulb, Layers, Globe, Server, Cpu, Braces } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const skillCategories = [
  {
    id: "basic-programming",
    title: "Basic Programming",
    icon: <Cpu className="h-12 w-12 mb-4" />,
    description:
      "Strong foundation in programming fundamentals including data structures, algorithms, and object-oriented principles.",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    id: "mern-stack",
    title: "MERN Stack",
    icon: <Layers className="h-12 w-12 mb-4" />,
    description: "Expertise in building full-stack applications using MongoDB, Express.js, React, and Node.js.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    icon: <Globe className="h-12 w-12 mb-4" />,
    description: "End-to-end development capabilities from database design to frontend implementation and deployment.",
    skills: ["Next.js", "Tailwind CSS",  "GraphQL", ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Server className="h-12 w-12 mb-4" />,
    description: "Building robust, scalable server-side applications with focus on performance and security.",
    skills: ["Node.js", "Express", "REST APIs", "Microservices", ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Braces className="h-12 w-12 mb-4" />,
    description: "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const { themeColors } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true)
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % skillCategories.length)
        setIsChanging(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentSkill = skillCategories[currentSkillIndex]

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold relative inline-block">
            MY SKILLS
            <span
              className="absolute -bottom-2 left-0 w-full h-0.5"
              style={{ backgroundColor: themeColors.primary }}
            ></span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gray-900/30 border border-gray-800 p-8 relative">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-xs font-mono text-gray-500">
                  {currentSkillIndex + 1}/{skillCategories.length}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0 flex justify-center">
                      <div style={{ color: themeColors.primary }}>{currentSkill.icon}</div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{currentSkill.title}</h3>

                      <p className="text-gray-400 mb-6">{currentSkill.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {currentSkill.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1.5 border border-gray-700 text-sm text-gray-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center space-x-2 mt-4">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsChanging(true)
                    setTimeout(() => {
                      setCurrentSkillIndex(index)
                      setIsChanging(false)
                    }, 500)
                  }}
                  className={`w-2 h-2 transition-all duration-300 ${
                    currentSkillIndex === index ? "w-6" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  style={{
                    backgroundColor: currentSkillIndex === index ? themeColors.primary : undefined,
                  }}
                  aria-label={`View ${skillCategories[index].title} skills`}
                />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-gray-900/30 border border-gray-800 p-6 hover:border-theme-primary transition-colors duration-300"
              style={{ "--hover-border-color": themeColors.primary } as React.CSSProperties}
            >
              <div style={{ color: themeColors.primary }}>
                <Code className="h-8 w-8 mb-4" />
              </div>
              <h3 className="text-xl font-bold mb-2">Next.js</h3>
              <p className="text-gray-400">
                Building modern, server-rendered React applications with optimized performance and SEO.
              </p>
            </div>

            <div
              className="bg-gray-900/30 border border-gray-800 p-6 hover:border-theme-primary transition-colors duration-300"
              style={{ "--hover-border-color": themeColors.primary } as React.CSSProperties}
            >
              <div style={{ color: themeColors.primary }}>
                <Database className="h-8 w-8 mb-4" />
              </div>
              <h3 className="text-xl font-bold mb-2">Firebase</h3>
              <p className="text-gray-400">
                Leveraging Firebase for authentication, real-time databases, and serverless functions.
              </p>
            </div>

            <div
              className="bg-gray-900/30 border border-gray-800 p-6 hover:border-theme-primary transition-colors duration-300"
              style={{ "--hover-border-color": themeColors.primary } as React.CSSProperties}
            >
              <div style={{ color: themeColors.primary }}>
                <Lightbulb className="h-8 w-8 mb-4" />
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
              <p className="text-gray-400">
                Analytical approach to breaking down complex problems into manageable solutions.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 text-center">Technologies & Tools</h3>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                
                "Firebase",
                "Redux",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Vercel",
                
                "REST API",
                "GraphQL",
                "Responsive Design",
                "UI/UX",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="tech-tag px-3 py-1.5 border border-gray-800 text-sm text-gray-300 hover:border-theme-primary hover:text-white transition-all duration-300 relative group"
                  style={{ "--hover-border-color": themeColors.primary } as React.CSSProperties}
                >
                  {tech}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 0 10px 2px ${themeColors.primaryGlow}`,
                      zIndex: -1,
                    }}
                  ></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

