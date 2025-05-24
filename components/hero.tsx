"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { scrollToElement } from "@/lib/utils"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const elementId = href.replace("#", "")
    scrollToElement(elementId)
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Kartikey Mahawar</span>
          </h1>
          <h2
            className={`text-2xl sm:text-3xl text-muted-foreground mb-8 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Fullstack Flutter Developer
          </h2>
          <p
            className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I create beautiful, performant mobile and web applications using Flutter, with expertise in backend
            development and modern web technologies.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="transition-all duration-300 hover:scale-105"
              onClick={(e) => handleNavClick(e as any, "#projects")}
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              onClick={(e) => handleNavClick(e as any, "#contact")}
            >
              <Link href="#contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
          </div>

          <div
            className={`flex justify-center space-x-6 transition-all duration-1000 delay-900 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              className="transition-transform duration-300 hover:scale-110 hover:rotate-6"
              asChild
            >
              <Link href="https://github.com/kartikey321" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="transition-transform duration-300 hover:scale-110 hover:rotate-6"
              asChild
            >
              <Link href="https://linkedin.com/in/kartikey-mahawar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="transition-transform duration-300 hover:scale-110 hover:rotate-6"
              asChild
            >
              <Link href="mailto:kartikeymahawar1234@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
