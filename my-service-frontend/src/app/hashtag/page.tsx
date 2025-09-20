"use client";
import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { Hash, TrendingUp } from "lucide-react";

export default function HashtagPage() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const canGenerate = useMemo(() => topic.trim().length > 0, [topic]);
  const generate = (e?: React.FormEvent) => {
    e?.preventDefault();
    const base = topic.trim().replace(/\s+/g, "");
    setResult([`#${base}`, `#${base}Tips`, `#${base}Pro`, `#${base}2025`, `#Go${base}`]);
  };

  return (
    <div className="flex h-dvh bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto grid gap-6">
            {/* Title */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Hash className="h-4 w-4" />
                </span>
                <h1 className="text-2xl md:text-3xl font-semibold">AI Hashtag Expert</h1>
              </div>
              <p className="text-muted-foreground">Generate trending hashtags for your content using AI-powered analysis</p>
            </div>

            {/* Two-panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Content Input</CardTitle>
                  <CardDescription>Describe your content, topic, or paste your text to generate relevant hashtags</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={generate} className="grid gap-4">
                    <Textarea
                      placeholder="Enter your content description, topic, or paste your text here..."
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="min-h-32"
                    />
                    <Button type="submit" disabled={!canGenerate} className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Hash className="h-4 w-4" /> Generate Hashtags
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-lg">Generated Hashtags</CardTitle>
                  </div>
                  <CardDescription>Click on any hashtag to copy it individually</CardDescription>
                </CardHeader>
                <CardContent>
                  {result.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                      <div className="text-6xl leading-none mb-4">#</div>
                      <div className="font-medium">Generated hashtags will appear here</div>
                      <div className="text-sm">Enter your content and click generate to get started</div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {result.map((h) => (
                        <button
                          key={h}
                          onClick={() => navigator.clipboard?.writeText(h)}
                          className="px-2.5 py-1 rounded-full border text-sm hover:bg-accent"
                          title="Click to copy"
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Pro Tips */}
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-semibold mb-2">For Better Results:</div>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Be specific about your content topic</li>
                    <li>Include your target audience</li>
                    <li>Mention the platform you’re posting on</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold mb-2">Best Practices:</div>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Use 5-10 hashtags per post</li>
                    <li>Mix popular and niche hashtags</li>
                    <li>Research hashtag performance regularly</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
