import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Dart", "TypeScript", "JavaScript", "Kotlin", "Java", "C++", "Python", "C"],
    },
    {
      title: "Flutter & Dart",
      skills: ["Flutter", "BLoC", "Riverpod", "Provider", "Dart Isolates", "Offline-first", "Fastlane"],
    },
    {
      title: "Backend & Real-time",
      skills: ["gRPC", "WebSockets", "REST", "Kafka CDC", "Node.js", "TypeScript", "Event-driven", "S3"],
    },
    {
      title: "Databases & Infrastructure",
      skills: ["PostgreSQL", "MongoDB", "Neo4j", "Redis", "KeyDB", "Typesense", "Docker", "CI/CD", "Nginx"],
    },
    {
      title: "Web Frameworks",
      skills: ["React Native", "React.js", "HTML", "CSS", "Next.js"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "GitHub Actions", "Firebase", "Cloudflare R2", "k6", "Git"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="transition-all duration-300 hover:scale-105">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
