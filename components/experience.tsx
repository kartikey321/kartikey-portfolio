import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Lead Flutter Fullstack Developer",
      company: "Cladbe",
      period: "June 2024 - Present",
      location: "Bareilly, India",
      description: [
        "Built cross-platform Flutter apps (web, mobile, desktop) for multi-tenant real-estate SaaS serving 10K+ daily users",
        "Architected concurrent file upload system using Dart isolates achieving 37% faster uploads, 50% memory reduction, and CPU usage from 200% to 50%",
        "Integrated event-driven backend (gRPC, WebSocket streams, Kafka CDC pipelines) with offline-first BLoC/Riverpod state management",
        "Implemented Graph-Based Access Control UI with Neo4j for robust permission management",
        "Led team of engineers and established Flutter best practices for scaling",
      ],
      skills: ["Flutter", "Dart Isolates", "gRPC", "WebSocket", "Kafka", "Neo4j", "BLoC", "Riverpod", "S3"],
    },
    {
      title: "Flutter Software Developer",
      company: "Amiltus / Cladbe",
      period: "December 2023 - June 2024",
      location: "Bareilly, India",
      description: [
        "First engineer—architected cross-platform real-estate platform from ground up for Web, iOS, Android, macOS, and Windows",
        "Designed responsive UIs with BLoC/Riverpod state management and implemented performance optimization with offline caching",
        "Built real-time sync using gRPC/WebSockets and established CI/CD pipelines for team scaling",
        "Implemented Graph-Based Access Control (GBAC) UI with Neo4j integration",
      ],
      skills: ["Flutter", "Firebase", "BLoC", "gRPC", "WebSockets", "Neo4j", "Typesense", "Node.js", "Docker"],
    },
    {
      title: "Software Developer Intern",
      company: "Wells Fargo",
      period: "June 2023 - August 2023",
      location: "Hyderabad, India",
      description: [
        "Developed React UI for ML-driven enterprise workflows with user-friendly design",
        "Integrated machine learning predictions and real-time data using Socket.io and MongoDB",
        "Ensured responsive user interfaces and seamless AIML integration",
      ],
      skills: ["React", "Socket.io", "MongoDB", "Machine Learning"],
    },
    {
      title: "React Native Developer",
      company: "Andwemet",
      period: "February 2021 - April 2022",
      location: "Remote",
      description: [
        "Developed core mobile features across React Native, Node.js, and MongoDB stack",
        "Built real-time chat + notification system using WebSockets improving delivery speed and user engagement",
        "Implemented document verification workflows with API integration, validation logic, and secure upload handling",
        "Improved app stability by fixing major crashes and optimizing performance, significantly boosting retention",
      ],
      skills: ["React Native", "Node.js", "MongoDB", "WebSockets"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey as a developer across different roles and organizations.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
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
