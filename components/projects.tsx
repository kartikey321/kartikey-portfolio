"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, Github, ExternalLink, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const projects = [
    {
      title: "Mongo Chat Dart",
      description:
        "A Dart package for implementing chat functionality with features like user management, direct messaging, group chats, read receipts, and real-time updates.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Dart", "MongoDB", "Real-time", "Package"],
      githubUrl: "https://github.com/kartikey321",
      liveUrl: "https://example.com",
    },
    {
      title: "Educazy",
      description:
        "An inclusive educational platform for specially-abled students with features like voice-controlled bot, online classes with sign language to text conversion, and text to Braille.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "React", "TensorFlow", "Mediapipe"],
      githubUrl: "https://github.com/kartikey321",
      liveUrl: "https://example.com",
    },
    {
      title: "DotPay",
      description:
        "A neobank platform enabling users to create custom labels for transactions, invest in community projects, and earn ERC20 tokens as participation incentives.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "API Integration", "Blockchain", "ERC20"],
      githubUrl: "https://github.com/kartikey321",
      liveUrl: "https://example.com",
    },
    {
      title: "Real Estate Management Solution",
      description:
        "A B2B real estate management solution with cloud telephony, file caching system, and advanced search capabilities using Typesense.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "Express.js", "TypeScript", "Neo4j"],
      githubUrl: "https://github.com/kartikey321",
      liveUrl: "https://example.com",
    },
    {
      title: "Cross-Platform Application",
      description:
        "A cross-platform application for macOS, iOS, Android, Windows, and web with optimized data flow using gRPC and WebSocket technologies.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "gRPC", "WebSocket", "Cross-platform"],
      githubUrl: "https://github.com/kartikey321",
      liveUrl: "https://example.com",
    },
    {
      title: "Gen-y Club App",
      description:
        "Led the development of the Gen-y Club SRM app as App Developer Lead, mentoring and developing 5 cross-platform applications.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "Cross-platform", "Mentorship", "Team Lead"],
      githubUrl: "https://github.com/kartikey321",
      liveUrl: "https://example.com",
    },
  ]

  // Extract all unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap((project) => project.technologies)))

  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length
    ? projects.filter((project) => selectedTags.some((tag) => project.technologies.includes(tag)))
    : projects

  // Replace the handleTagToggle function with this version that uses temporary state
  const [tempSelectedTags, setTempSelectedTags] = useState<string[]>([])

  // Initialize tempSelectedTags with selectedTags when dialog opens
  useEffect(() => {
    if (isFilterOpen) {
      setTempSelectedTags([...selectedTags])
    }
  }, [isFilterOpen, selectedTags])

  const handleTagToggle = (tag: string) => {
    // For tags clicked directly in the project cards, apply immediately
    if (!isFilterOpen) {
      setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
    } else {
      // For tags in the filter dialog, only update temporary state
      setTempSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
    }
  }

  const applyFilters = () => {
    setSelectedTags(tempSelectedTags)
    setIsFilterOpen(false)
  }

  const clearFilters = () => {
    setSelectedTags([])
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-wrap gap-2 items-center">
            {selectedTags.length > 0 && (
              <>
                <span className="text-sm font-medium">Filters:</span>
                {selectedTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                    {tag}
                    <button
                      onClick={() => handleTagToggle(tag)}
                      className="ml-1 hover:text-destructive transition-colors"
                      aria-label={`Remove ${tag} filter`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                  Clear all
                </Button>
              </>
            )}
          </div>

          <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter Projects
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Filter Projects by Technology</DialogTitle>
                <DialogDescription>
                  Select technologies to filter the projects that match your interests.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                {allTags.sort().map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tag-${tag}`}
                      checked={tempSelectedTags.includes(tag)}
                      onCheckedChange={() => handleTagToggle(tag)}
                    />
                    <Label htmlFor={`tag-${tag}`} className="cursor-pointer">
                      {tag}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={clearFilters}>
                  Clear All
                </Button>
                <Button onClick={applyFilters}>Apply Filters</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant={selectedTags.includes(tech) ? "default" : "outline"}
                        className="text-xs cursor-pointer transition-colors"
                        onClick={() => handleTagToggle(tech)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="transition-all duration-300 hover:scale-105" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground mb-4">No projects match the selected filters.</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
