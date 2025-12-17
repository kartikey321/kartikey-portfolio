"use client"

export const runtime = "edge"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Share2, BookmarkPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useParams } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

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

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // In a real app, you'd fetch this data based on the slug
  const blogPosts: BlogPost[] = [
    {
      id: "flutter-state-management-2024",
      title: "Flutter State Management in 2024: A Comprehensive Guide",
      excerpt:
        "Explore the latest state management solutions in Flutter, from Provider to Riverpod, and learn when to use each approach.",
      content: `
# Flutter State Management in 2024: A Comprehensive Guide

State management is one of the most crucial aspects of Flutter development. As your app grows in complexity, managing state effectively becomes essential for maintainability, performance, and developer experience.

## Introduction

In this comprehensive guide, we'll explore the current landscape of state management solutions in Flutter, examining their strengths, weaknesses, and ideal use cases.

> The way you manage state can make or break your application. Choose wisely, as it affects everything from performance to developer experience.

## Popular State Management Solutions

### 1. Provider
Provider remains one of the most popular choices for Flutter state management. It's officially recommended by the Flutter team and offers a good balance of simplicity and power.

**Pros:**
- Easy to learn and implement
- Good performance
- Officially supported
- Great for small to medium apps

**Cons:**
- Can become verbose in large applications
- Limited compile-time safety

### 2. Riverpod
Riverpod is the evolution of Provider, addressing many of its limitations while maintaining the same philosophy.

> Riverpod was created by the same author as Provider, and it's designed to solve the limitations of Provider while keeping its simplicity.

**Pros:**
- Compile-time safety
- Better testing support
- No BuildContext dependency
- Excellent developer tools

**Cons:**
- Steeper learning curve
- Newer ecosystem

### 3. Bloc/Cubit
The Bloc pattern provides a predictable state management solution with clear separation of concerns.

**Pros:**
- Predictable state changes
- Excellent testing support
- Great for complex applications
- Strong community

**Cons:**
- More boilerplate code
- Can be overkill for simple apps

## Code Example

Here's a simple example of using Provider:

\`\`\`dart
// Define a provider
final counterProvider = StateProvider<int>((ref) => 0);

// Use it in a widget
class CounterWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);
    
    return Text('Count: $count');
  }
}
\`\`\`

## Choosing the Right Solution

The choice of state management solution depends on several factors:

1. **App Complexity**: Simple apps might benefit from Provider, while complex apps might need Bloc
2. **Team Experience**: Consider your team's familiarity with different patterns
3. **Performance Requirements**: Some solutions offer better performance characteristics
4. **Testing Needs**: Consider how important testing is for your project

## Best Practices

Regardless of which solution you choose, here are some best practices:

1. **Keep state minimal**: Only store what you need
2. **Separate business logic**: Keep your state management separate from UI
3. **Use immutable state**: Prefer immutable data structures
4. **Test your state logic**: Write comprehensive tests for your state management

> Remember that the best state management solution is the one that works for your specific use case and team. There's no one-size-fits-all approach.

## Conclusion

State management in Flutter has evolved significantly, and we now have excellent options for every use case. Choose the solution that best fits your project's needs and your team's expertise.

Remember, the best state management solution is the one that your team can use effectively and maintain over time.
      `,
      date: "2024-01-15",
      category: "Flutter",
      tags: ["Flutter", "State Management", "Riverpod", "Provider"],
      image: "/placeholder.svg?height=400&width=800",
      featured: true,
    },
    // Add other blog posts here...
  ]

  const post = blogPosts.find((p) => p.id === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Navigation */}
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            {post.featured && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
            )}
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkPlus className="mr-2 h-4 w-4" />
                Bookmark
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12 blog-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                a: ({ node, ...props }) => <a className="text-primary hover:underline transition-colors" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <div className="relative my-6">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                    <blockquote className="pl-6 italic text-xl text-muted-foreground leading-relaxed" {...props} />
                  </div>
                ),
                code: ({ node, inline, ...props }) =>
                  inline ? (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground" {...props} />
                  ) : (
                    <code className="block bg-muted p-4 rounded-md text-sm font-mono overflow-x-auto my-4" {...props} />
                  ),
                pre: ({ node, ...props }) => <pre className="overflow-auto" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                em: ({ node, ...props }) => <em className="italic" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Kartikey Mahawar"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">About the Author</h3>
                  <p className="text-muted-foreground mb-4">
                    Passionate fullstack Flutter developer with expertise in mobile and web development. I love sharing
                    knowledge and helping other developers build amazing applications.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/#contact">Get in Touch</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/blog">More Posts</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="relative h-32 w-full">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
