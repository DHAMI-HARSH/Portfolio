"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { themeColors } = useTheme()

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
          ref={ref}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold relative inline-block">
              ABOUT ME
              <span
                className="absolute -bottom-2 left-0 w-full h-0.5"
                style={{ backgroundColor: themeColors.primary }}
              ></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div
                className="absolute -inset-1 opacity-75 blur-sm"
                style={{ backgroundColor: themeColors.primary }}
              ></div>
              <div className="relative bg-black p-1">
                <Image
                  src="/image2.jpeg?height=400&width=400"
                  alt="Harsh Dhami"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4" style={{ color: themeColors.primary }}>
                Who I Am
              </h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  I'm Harsh Dhami, a passionate developer focused on creating modern, responsive web applications using
                  cutting-edge technologies. With expertise in Next.js and Firebase, I build solutions that are not only
                  visually appealing but also performant and scalable.
                </p>
                <p>
                  My approach combines technical skills with creative problem-solving to deliver exceptional user
                  experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of web
                  development.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">NAME</h4>
                  <p className="text-white">Harsh Dhami</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">EMAIL</h4>
                  <p className="text-white">dhamiharsh203@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">ROLE</h4>
                  <p className="text-white">Full Stack Developer</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">LOCATION</h4>
                  <p className="text-white">India</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="px-6 py-3 text-white hover:bg-theme-primary-hover transition-colors duration-300 inline-block"
                  style={
                    {
                      backgroundColor: themeColors.primary,
                      "--hover-bg-color": themeColors.primaryHover,
                    } as React.CSSProperties
                  }
                >
                  CONTACT ME
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

