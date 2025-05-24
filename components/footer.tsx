"use client"

import type React from "react"

import Link from "next/link"
import { Github, Linkedin, Mail, NewspaperIcon as Newsletter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const { toast } = useToast()

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to my newsletter!",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kartikey Mahawar</h3>
            <p className="text-muted-foreground mb-4">
              Creating beautiful, performant applications with Flutter and modern web technologies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/kartikey321" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/kartikey-mahawar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:kartikeymahawar1234@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <div className="font-medium">SRM Institute of Science and Technology</div>
                <div className="text-sm">B.Tech Computer Science with specialization in Internet of Things</div>
                <div className="text-sm">2020 - 2024 | CGPA: 8.25</div>
              </li>
              <li>
                <div className="font-medium">Hartmann College (ICSE Board)</div>
                <div className="text-sm">Class 12th: 86.25% | Class 10th: 80.25%</div>
                <div className="text-sm">2018 - 2020</div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest updates on Flutter development and tech insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubscribing}
              />
              <Button type="submit" size="sm" className="w-full" disabled={isSubscribing || !email}>
                {isSubscribing ? (
                  "Subscribing..."
                ) : (
                  <>
                    <Newsletter className="mr-2 h-4 w-4" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kartikey Mahawar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
