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
              Full-stack developer with over a year of experience in designing and building mobile, web, and desktop
              applications. Skilled in creating scalable cross-platform solutions using Flutter, React Native, and
              React.js.
            </p>
            <p className="text-muted-foreground mb-4">
              Proficient in backend development with Node.js, Express.js, TypeScript, and gRPC, and experienced in
              managing databases like MongoDB, Firebase, Neo4j, and SQL. Passionate about delivering efficient,
              cloud-based systems with real-time updates and well-architected designs.
            </p>
            <p className="text-muted-foreground">
              Currently working as a Flutter Lead Developer at Amiltus, where I spearhead the development of B2B real
              estate management solutions and implement advanced technologies like Graph-Based Access Control systems
              and gRPC.
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
