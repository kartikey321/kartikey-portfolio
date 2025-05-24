import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "C", "JavaScript", "TypeScript", "Dart", "Kotlin", "Java", "Python", "C#"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flutter", "React Native", "React.js", "HTML", "CSS", "DotNet Maui", "Docker", "Node.js", "gRPC"],
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB", "Firebase", "Neo4j", "Supabase", "PostgreSQL"],
    },
    {
      title: "Core Skills",
      skills: ["Data Structures", "Algorithms", "Object Oriented Design", "Operating Systems", "Database Management"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "CI/CD", "Git", "Vercel"],
    },
    {
      title: "Tools & Others",
      skills: ["VS Code", "Android Studio", "Figma", "Postman", "Jira", "Agile"],
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
