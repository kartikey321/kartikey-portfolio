import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Flutter Lead Developer",
      company: "Amiltus",
      period: "December 2023 - Present",
      location: "Bareilly, India",
      description: [
        "Spearheaded the development of a B2B real estate management solution, reducing development time by 15% and boosting team efficiency by 20% through effective leadership and streamlined processes.",
        "Engineered internal and external APIs using Express.js and TypeScript, implementing a Graph-Based Access Control (GBAC) system with Neo4j database for robust role and permission management.",
        "Enhanced system performance by integrating cloud telephony for direct client-customer communication, developing a file caching system with Hive DB, and implementing Typesense for advanced search capabilities.",
        "Optimized data flow by implementing gRPC and WebSocket technologies, ensuring real-time updates and improving system responsiveness.",
        "Designed and developed a cross-platform application for macOS, iOS, Android, Windows, and web, resulting in a 10% improvement in average loading time and seamless user experience across devices.",
      ],
      skills: ["Flutter", "Express.js", "TypeScript", "Neo4j", "gRPC", "WebSocket", "Hive DB", "Typesense"],
    },
    {
      title: "Software Developer Intern",
      company: "Wells Fargo",
      period: "June 2023 - August 2023",
      location: "Hyderabad, India",
      description: [
        "Spearheaded React development for the project, focusing on creating a adaptable and user-friendly frontend.",
        "Collaborated with AIML developers to seamlessly integrate model-based predictions into the project.",
        "Implemented real-time updates on the frontend using Socket.io and MongoDB, ensuring responsive user interfaces.",
      ],
      skills: ["React", "Socket.io", "MongoDB", "AIML Integration"],
    },
    {
      title: "React Native Developer Intern",
      company: "Andwemet",
      period: "February 2022 - April 2022",
      location: "Remote",
      description: [
        "Took on the role of a React Native Developer, actively contributing to the development of innovative features for the application.",
        "Collaborated effectively with team members to identify and resolve issues in the existing application, resulting in a 50% reduction in crash rates and a 25% increase in user retention within two months.",
        "Implemented optimizations to improve the app's performance, ensuring a smooth and efficient user interface.",
      ],
      skills: ["React Native", "Mobile Development", "Performance Optimization"],
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
