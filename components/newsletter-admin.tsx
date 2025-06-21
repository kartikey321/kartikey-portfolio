"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { toast } from "./ui/use-toast";

interface Subscriber {
  email: string;
  name: string;
  source: string;
  timestamp: string;
}

interface Campaign {
  id: number;
  subject: string;
  campaign_type: string;
  sent_at: string;
  recipient_count: number;
  status: string;
}

interface ReleaseData {
  title: string;
  description: string;
  type: "project" | "blog" | "feature" | "update";
  link?: string;
  image_url?: string;
}

export default function NewsletterAdmin() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [customSubject, setCustomSubject] = useState("");
  const [customContent, setCustomContent] = useState("");
  const [releaseData, setReleaseData] = useState<ReleaseData>({
    title: "",
    description: "",
    type: "project",
    link: "",
    image_url: "",
  });

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.kartikeymahawar1234.workers.dev";

  useEffect(() => {
    fetchSubscribers();
    fetchCampaigns();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch(`${backendUrl}/get-newsletters`);
      const data = await response.json();
      if (data.data) {
        setSubscribers(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch subscribers:", error);
      toast({
        title: "Error",
        description: "Failed to fetch subscribers",
        variant: "destructive",
      });
    }
  };

  const fetchCampaigns = async () => {
    try {
      const response = await fetch(`${backendUrl}/get-campaigns`);
      const data = await response.json();
      if (data.data) {
        setCampaigns(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch campaigns:", error);
      toast({
        title: "Error",
        description: "Failed to fetch campaigns",
        variant: "destructive",
      });
    }
  };

  const sendReleaseAnnouncement = async () => {
    if (!releaseData.title || !releaseData.description) {
      toast({
        title: "Error",
        description: "Please fill in title and description",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/send-release-announcement`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ release: releaseData }),
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Success",
          description: `Release announcement sent to ${data.data.totalSubscribers} subscribers`,
        });
        setReleaseData({ title: "", description: "", type: "project", link: "", image_url: "" });
        fetchCampaigns();
      } else {
        throw new Error(data.message || "Failed to send announcement");
      }
    } catch (error) {
      console.error("Failed to send release announcement:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send announcement",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const sendCustomNewsletter = async () => {
    if (!customSubject || !customContent) {
      toast({
        title: "Error",
        description: "Please fill in subject and content",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/send-custom-newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campaign: {
            subject: customSubject,
            content: customContent,
            campaign_type: "general",
          },
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Success",
          description: `Custom newsletter sent to ${data.data.totalSubscribers} subscribers`,
        });
        setCustomSubject("");
        setCustomContent("");
        fetchCampaigns();
      } else {
        throw new Error(data.message || "Failed to send newsletter");
      }
    } catch (error) {
      console.error("Failed to send custom newsletter:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send newsletter",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Newsletter Admin Dashboard</h1>
        <div className="flex gap-2">
          <Button onClick={fetchSubscribers} variant="outline">
            Refresh Subscribers
          </Button>
          <Button onClick={fetchCampaigns} variant="outline">
            Refresh Campaigns
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{subscribers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{campaigns.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Last campaign: {campaigns[0]?.sent_at ? new Date(campaigns[0].sent_at).toLocaleDateString() : "None"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Release Announcement */}
        <Card>
          <CardHeader>
            <CardTitle>Send Release Announcement</CardTitle>
            <CardDescription>
              Announce a new project, blog post, or feature to all subscribers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input
                value={releaseData.title}
                onChange={(e) => setReleaseData({ ...releaseData, title: e.target.value })}
                placeholder="New Project Launch"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={releaseData.description}
                onChange={(e) => setReleaseData({ ...releaseData, description: e.target.value })}
                placeholder="Describe your new release..."
                rows={3}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Type</label>
              <Select
                value={releaseData.type}
                onValueChange={(value: any) => setReleaseData({ ...releaseData, type: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="project">Project</SelectItem>
                  <SelectItem value="blog">Blog Post</SelectItem>
                  <SelectItem value="feature">Feature</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Link (Optional)</label>
              <Input
                value={releaseData.link}
                onChange={(e) => setReleaseData({ ...releaseData, link: e.target.value })}
                placeholder="https://example.com/project"
              />
            </div>
            <Button onClick={sendReleaseAnnouncement} disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send Release Announcement"}
            </Button>
          </CardContent>
        </Card>

        {/* Custom Newsletter */}
        <Card>
          <CardHeader>
            <CardTitle>Send Custom Newsletter</CardTitle>
            <CardDescription>
              Send a custom newsletter to all subscribers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Subject</label>
              <Input
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                placeholder="Monthly Update"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Content (HTML)</label>
              <Textarea
                value={customContent}
                onChange={(e) => setCustomContent(e.target.value)}
                placeholder="<h1>Hello {name}!</h1><p>Here's what's new...</p>"
                rows={6}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Use {"{name}"} for personalization
              </p>
            </div>
            <Button onClick={sendCustomNewsletter} disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send Custom Newsletter"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Campaigns */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.slice(0, 5).map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{campaign.subject}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(campaign.sent_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={campaign.status === "sent" ? "default" : "secondary"}>
                    {campaign.status}
                  </Badge>
                  <Badge variant="outline">{campaign.campaign_type}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {campaign.recipient_count} recipients
                  </span>
                </div>
              </div>
            ))}
            {campaigns.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No campaigns yet</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Subscribers List */}
      <Card>
        <CardHeader>
          <CardTitle>Subscribers ({subscribers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {subscribers.map((subscriber) => (
              <div key={subscriber.email} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{subscriber.email}</p>
                  <p className="text-sm text-muted-foreground">
                    {subscriber.name} • {subscriber.source} • {new Date(subscriber.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            {subscribers.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No subscribers yet</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 