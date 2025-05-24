"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, NewspaperIcon as Newsletter } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function Contact() {
  const { toast } = useToast()
  const [messageFormData, setMessageFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribeToNewsletter: false,
  })
  const [newsletterFormData, setNewsletterFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmittingMessage, setIsSubmittingMessage] = useState(false)
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false)
  const [messageFormStatus, setMessageFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [newsletterFormStatus, setNewsletterFormStatus] = useState<"idle" | "success" | "error">("idle")

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingMessage(true)
    setMessageFormStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would send the data to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(messageFormData)
      // });

      setMessageFormStatus("success")

      let successMessage = "Thank you for your message. I'll get back to you soon."
      if (messageFormData.subscribeToNewsletter) {
        successMessage += " You've also been subscribed to my newsletter!"
      }

      toast({
        title: "Message sent!",
        description: successMessage,
      })

      // Reset form
      setMessageFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        subscribeToNewsletter: false,
      })
    } catch (error) {
      console.error("Error sending message:", error)
      setMessageFormStatus("error")
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingMessage(false)
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingNewsletter(true)
    setNewsletterFormStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, you would send the data to your newsletter service
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newsletterFormData)
      // });

      setNewsletterFormStatus("success")
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to my newsletter! You'll receive updates about my latest projects and insights.",
      })

      // Reset form
      setNewsletterFormData({ name: "", email: "" })
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setNewsletterFormStatus("error")
      toast({
        title: "Subscription failed",
        description: "There was a problem subscribing you to the newsletter. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingNewsletter(false)
    }
  }

  const handleMessageFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessageFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleNewsletterFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kartikeymahawar1234@gmail.com",
      href: "mailto:kartikeymahawar1234@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7252926670",
      href: "tel:+917252926670",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Bareilly, India",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out through any of these channels. I typically respond within 24 hours and I'm always
              happy to discuss new projects or opportunities.
            </p>

            {/* Newsletter Highlight */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Newsletter className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground">
                      Subscribe to my newsletter for the latest insights on Flutter development, tech trends, and
                      project updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>Send me a message or subscribe to my newsletter to stay updated.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="message" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="message" className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </TabsTrigger>
                  <TabsTrigger value="newsletter" className="flex items-center gap-2">
                    <Newsletter className="h-4 w-4" />
                    Newsletter
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="message" className="mt-6">
                  {messageFormStatus === "success" && (
                    <Alert className="mb-6 bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-900">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <AlertTitle>Message sent successfully!</AlertTitle>
                      <AlertDescription>
                        {messageFormData.subscribeToNewsletter
                          ? "Thank you for your message and for subscribing to my newsletter!"
                          : "Thank you for your message. I'll get back to you soon."}
                      </AlertDescription>
                    </Alert>
                  )}

                  {messageFormStatus === "error" && (
                    <Alert className="mb-6" variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error sending message</AlertTitle>
                      <AlertDescription>There was a problem sending your message. Please try again.</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleMessageSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={messageFormData.name}
                          onChange={handleMessageFormChange}
                          required
                          disabled={isSubmittingMessage}
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={messageFormData.email}
                          onChange={handleMessageFormChange}
                          required
                          disabled={isSubmittingMessage}
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={messageFormData.subject}
                        onChange={handleMessageFormChange}
                        required
                        disabled={isSubmittingMessage}
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={messageFormData.message}
                        onChange={handleMessageFormChange}
                        required
                        disabled={isSubmittingMessage}
                      />
                    </div>

                    {/* Newsletter subscription checkbox */}
                    <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-md">
                      <Checkbox
                        id="subscribe"
                        checked={messageFormData.subscribeToNewsletter}
                        onCheckedChange={(checked) =>
                          setMessageFormData((prev) => ({ ...prev, subscribeToNewsletter: checked as boolean }))
                        }
                        disabled={isSubmittingMessage}
                      />
                      <Label htmlFor="subscribe" className="text-sm cursor-pointer">
                        Also subscribe me to your newsletter for updates on Flutter development and tech insights
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full transition-all duration-300 hover:scale-105"
                      disabled={isSubmittingMessage}
                    >
                      {isSubmittingMessage ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="newsletter" className="mt-6">
                  {newsletterFormStatus === "success" && (
                    <Alert className="mb-6 bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-900">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <AlertTitle>Successfully subscribed!</AlertTitle>
                      <AlertDescription>
                        Welcome to my newsletter! You'll receive updates about my latest projects and insights.
                      </AlertDescription>
                    </Alert>
                  )}

                  {newsletterFormStatus === "error" && (
                    <Alert className="mb-6" variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Subscription failed</AlertTitle>
                      <AlertDescription>
                        There was a problem subscribing you to the newsletter. Please try again.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What you'll get:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Latest Flutter development tips and tricks
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Behind-the-scenes of my projects
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Tech industry insights and trends
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Exclusive content and early access to resources
                      </li>
                    </ul>
                  </div>

                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={newsletterFormData.name}
                        onChange={handleNewsletterFormChange}
                        required
                        disabled={isSubmittingNewsletter}
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={newsletterFormData.email}
                        onChange={handleNewsletterFormChange}
                        required
                        disabled={isSubmittingNewsletter}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full transition-all duration-300 hover:scale-105"
                      disabled={isSubmittingNewsletter}
                    >
                      {isSubmittingNewsletter ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Newsletter className="mr-2 h-4 w-4" />
                          Subscribe to Newsletter
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    No spam, unsubscribe at any time. I respect your privacy.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
