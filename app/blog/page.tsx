"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Search, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts: BlogPost[] = [
    {
      id: "flutter-state-management-2024",
      title: "Flutter State Management in 2024: A Comprehensive Guide",
      excerpt:
        "Explore the latest state management solutions in Flutter, from Provider to Riverpod, and learn when to use each approach.",
      content: "Full blog post content would go here...",
      date: "2024-01-15",
      category: "Flutter",
      tags: ["Flutter", "State Management", "Riverpod", "Provider"],
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: "building-scalable-flutter-apps",
      title: "Building Scalable Flutter Applications: Architecture Patterns",
      excerpt:
        "Learn how to structure your Flutter apps for scalability using clean architecture, MVVM, and other proven patterns.",
      content: "Full blog post content would go here...",
      date: "2024-01-10",
      category: "Architecture",
      tags: ["Flutter", "Architecture", "Clean Code", "MVVM"],
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: "flutter-web-performance",
      title: "Optimizing Flutter Web Performance: Tips and Tricks",
      excerpt:
        "Discover techniques to improve your Flutter web app's performance, from code splitting to lazy loading.",
      content: "Full blog post content would go here...",
      date: "2024-01-05",
      category: "Performance",
      tags: ["Flutter Web", "Performance", "Optimization"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: "flutter-testing-strategies",
      title: "Complete Guide to Testing Flutter Applications",
      excerpt:
        "Master unit testing, widget testing, and integration testing in Flutter with practical examples and best practices.",
      content: "Full blog post content would go here...",
      date: "2023-12-28",
      category: "Testing",
      tags: ["Flutter", "Testing", "Unit Tests", "Widget Tests"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: "flutter-animations-guide",
      title: "Creating Beautiful Animations in Flutter",
      excerpt:
        "Learn how to create smooth, performant animations in Flutter using AnimationController, Tween, and custom animations.",
      content: "Full blog post content would go here...",
      date: "2023-12-20",
      category: "UI/UX",
      tags: ["Flutter", "Animations", "UI", "Performance"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: "backend-integration-flutter",
      title: "Integrating Flutter with Backend Services: REST APIs and GraphQL",
      excerpt:
        "A comprehensive guide to connecting your Flutter app with backend services, handling authentication, and managing data.",
      content: "Full blog post content would go here...",
      date: "2023-12-15",
      category: "Backend",
      tags: ["Flutter", "REST API", "GraphQL", "Backend"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: "flutter-deployment-strategies",
      title: "Flutter App Deployment: From Development to Production",
      excerpt:
        "Learn the best practices for deploying Flutter apps to app stores, web hosting, and managing CI/CD pipelines.",
      content: "Full blog post content would go here...",
      date: "2023-12-10",
      category: "DevOps",
      tags: ["Flutter", "Deployment", "CI/CD", "App Store"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: "flutter-security-best-practices",
      title: "Security Best Practices for Flutter Applications",
      excerpt:
        "Protect your Flutter apps with these essential security practices, from data encryption to secure API communication.",
      content: "Full blog post content would go here...",
      date: "2023-12-05",
      category: "Security",
      tags: ["Flutter", "Security", "Encryption", "Best Practices"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Flutter",
    "Architecture",
    "Performance",
    "Testing",
    "UI/UX",
    "Backend",
    "DevOps",
    "Security",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and best practices in Flutter development and software engineering.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    post.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    {post.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="p-0 h-auto font-semibold group" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No blog posts found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
