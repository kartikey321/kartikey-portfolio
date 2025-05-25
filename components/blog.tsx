"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

export function Blog() {
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
      featured: true,
    },
  ]

  // Show only featured posts (max 3) on homepage
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3)

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and best practices in Flutter development and software engineering.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
              </div>
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <div className="flex-grow"></div>
                <div className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto font-semibold group w-fit" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/blog">
              View All Blog Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
