import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Server, Globe } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Development",
      description: "Expert in Flutter for iOS and Android app development",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Flutter Web and modern web technologies",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "API design, databases, and server-side architecture",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Full Stack",
      description: "End-to-end application development and deployment",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate fullstack Flutter developer with expertise in creating cross-platform applications and
            robust backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Lead Flutter Fullstack Developer with <strong>3+ years</strong> of experience building high-performance cross-platform applications serving <strong>10K+ daily users</strong>. Specialized in architecting concurrent Flutter frontends, real-time pipelines (gRPC, WebSockets), and distributed backend systems.
            </p>
            <p className="text-muted-foreground mb-4">
              Architected concurrent file upload system achieving <strong>37% faster</strong> performance and <strong>50% memory reduction</strong> using Dart isolates. Expert in offline-first BLoC/Riverpod state management, event-driven microservices, and Graph-Based Access Control with Neo4j.
            </p>
            <p className="text-muted-foreground">
              Currently working as <strong>Lead Flutter Fullstack Developer</strong> at <strong>Cladbe</strong>, where I lead engineering teams building multi-tenant SaaS platforms across Web, iOS, Android, macOS, and Windows. Open-source contributor with published packages on pub.dev including Fletch (Express for Dart) and Knex Dart (SQL query builder).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex justify-center mb-3">{highlight.icon}</div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">{highlight.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
