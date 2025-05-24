"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Blog } from "@/components/blog"
import { Testimonials } from "@/components/testimonials"
import { Experience } from "@/components/experience"
import { Awards } from "@/components/awards"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const hash = window.location.hash
    if (hash) {
      const elementId = hash.replace("#", "")
      setTimeout(() => {
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AnimatedSection id="about" animation="fade-up">
          <About />
        </AnimatedSection>
        <AnimatedSection id="experience" animation="fade-in">
          <Experience />
        </AnimatedSection>
        <AnimatedSection id="skills" animation="fade-up">
          <Skills />
        </AnimatedSection>
        <AnimatedSection id="projects" animation="fade-in">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="awards" animation="fade-up">
          <Awards />
        </AnimatedSection>
        <AnimatedSection id="testimonials" animation="fade-in">
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection id="blog" animation="fade-up">
          <Blog />
        </AnimatedSection>
        <AnimatedSection id="contact" animation="slide-in-left">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}
