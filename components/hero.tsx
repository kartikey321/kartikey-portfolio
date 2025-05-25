"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { scrollToElement } from "@/lib/utils"
import Image from "next/image"

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
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image - 40% */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div
              className={`relative transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-muted/20 to-muted/5 rounded-3xl overflow-hidden shadow-2xl border backdrop-blur-sm">
                  <Image
                    src="/images/kartikey-profile-new.png"
                    alt="Kartikey Mahawar"
                    fill
                    className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content - 60% */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
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
                className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                I create beautiful, performant mobile and web applications using Flutter, with expertise in backend
                development and modern web technologies.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-1000 delay-700 ease-out ${
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
                className={`flex justify-center lg:justify-start space-x-6 transition-all duration-1000 delay-900 ease-out ${
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
        </div>
      </div>
    </section>
  )
}
