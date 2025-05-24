import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export function Awards() {
  const awards = [
    {
      title: "Nasscom Academic Grand Challenge (Wells Fargo Hackathon)",
      position: "1st Prize Winner",
      date: "February 2023",
    },
    {
      title: "Smart India Hackathon 2022",
      position: "1st Prize Winner",
      date: "August 2022",
    },
    {
      title: "Bajaj Finserv Hackrx 3.0",
      position: "3rd Prize Winner",
      date: "June 2022",
    },
    {
      title: "Defence Innovation Hackathon",
      position: "1st Prize Winner",
      date: "May 2022",
    },
    {
      title: "Hack The Mountains 2.0",
      position: "3rd Prize Winner",
      date: "June 2021",
    },
  ]

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Awards & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation and excellence in various competitions and hackathons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Trophy className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{award.title}</h3>
                    <p className="text-primary font-medium mb-1">{award.position}</p>
                    <p className="text-muted-foreground text-sm">{award.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="font-semibold mb-6 text-xl">Positions of Responsibility</h3>
              <div className="space-y-6">
                <div>
                  <div className="font-medium text-lg">App Developer Head | Coding Ninjas Club SRM</div>
                  <div className="text-sm text-muted-foreground">2021 - 2023</div>
                  <div className="text-sm mt-2">
                    Mentored and guided 30+ students and completed 4 full-fledged working apps
                  </div>
                </div>
                <div>
                  <div className="font-medium text-lg">App Developer Lead | Gen-y Club SRM</div>
                  <div className="text-sm text-muted-foreground">2021 - 2023</div>
                  <div className="text-sm mt-2">
                    Mentored and developed 5 cross-platform apps including the club app
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
