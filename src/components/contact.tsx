"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { themeColors } = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold relative inline-block">
            CONTACT ME
            <span
              className="absolute -bottom-2 left-0 w-full h-0.5"
              style={{ backgroundColor: themeColors.primary }}
            ></span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                Have a project in mind or want to collaborate? Feel free to reach out through the form or via the
                contact details below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-900 p-3 mr-4" style={{ color: themeColors.primary }}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                    <p className="text-white">dhamiharsh203@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-900 p-3 mr-4" style={{ color: themeColors.primary }}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                    <p className="text-white">India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-900 p-3 mr-4" style={{ color: themeColors.primary }}>
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                    <p className="text-white">+91 9897523690</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-900/30 border border-gray-800 p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                      style={{ backgroundColor: `${themeColors.primary}20` }}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: themeColors.primary }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-gray-800 px-4 py-3 text-white focus:outline-none"
                          style={
                            {
                              borderColor: "rgb(31, 41, 55)",
                              ":focus": { borderColor: themeColors.primary },
                            } as React.CSSProperties
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-gray-800 px-4 py-3 text-white focus:outline-none"
                          style={
                            {
                              borderColor: "rgb(31, 41, 55)",
                              ":focus": { borderColor: themeColors.primary },
                            } as React.CSSProperties
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full bg-black border border-gray-800 px-4 py-3 text-white focus:outline-none resize-none"
                          style={
                            {
                              borderColor: "rgb(31, 41, 55)",
                              ":focus": { borderColor: themeColors.primary },
                            } as React.CSSProperties
                          }
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-white py-3 hover:bg-theme-primary-hover transition-colors duration-300 flex items-center justify-center"
                        style={
                          {
                            backgroundColor: themeColors.primary,
                            "--hover-bg-color": themeColors.primaryHover,
                          } as React.CSSProperties
                        }
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            SENDING...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            SEND MESSAGE <Send className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

