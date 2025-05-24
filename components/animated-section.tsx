"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right"
  delay?: number
  threshold?: number
  id?: string
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  id,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold })

  const getAnimationClasses = () => {
    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-10"
        case "fade-in":
          return "opacity-0"
        case "slide-in-left":
          return "opacity-0 -translate-x-10"
        case "slide-in-right":
          return "opacity-0 translate-x-10"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0"
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        getAnimationClasses(),
        "transition-all duration-700 ease-in-out",
        delay && `delay-[${delay}ms]`,
        className,
      )}
      id={id}
    >
      {children}
    </section>
  )
}
