"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content:
        "Working with this Flutter developer was an absolute pleasure. They delivered our mobile app ahead of schedule and exceeded our expectations in terms of quality and performance.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupX",
      content:
        "We hired this developer to rebuild our existing app using Flutter, and the results were impressive. Not only did they successfully port all features, but they also improved the UI/UX.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "HealthApp",
      content:
        "Our healthcare app required complex integrations and a flawless user experience. This Flutter developer delivered on all fronts. They were communicative, detail-oriented, and truly understood our vision.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Developer",
      company: "DevTeam Global",
      content:
        "As a fellow developer, I can attest to the exceptional quality of code and architecture this Flutter developer produces. Their contributions were invaluable to our large-scale project.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      role: "UI/UX Designer",
      company: "DesignStudio",
      content:
        "I've worked with many developers who struggle to implement designs accurately, but this Flutter developer was different. They perfectly translated our design files into a beautiful, functional app.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Startup Founder",
      company: "InnovateNow",
      content:
        "The Flutter app they built for us has been a game-changer for our business. The performance is outstanding and our users love the intuitive interface. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients and collaborators have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">{testimonial.content}</p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
