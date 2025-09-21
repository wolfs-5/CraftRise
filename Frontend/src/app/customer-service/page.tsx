"use client";
import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Lightbulb, MessageCircle, Send } from "lucide-react";

type Suggestion = {
  tone: "Professional" | "Friendly" | "Empathetic";
  text: string;
};

export default function CustomerServicePage() {
  const [prompt, setPrompt] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const canSend = useMemo(() => prompt.trim().length > 0, [prompt]);

  const generate = (e?: React.FormEvent) => {
    e?.preventDefault();
    const p = prompt.trim();
    if (!p) return;
    const base = p.replace(/\s+/g, " ");
    setSuggestions([
      {
        tone: "Professional",
        text: `Thank you for contacting us. We understand your concern regarding "${base}". Our team is reviewing this now and we'll provide a clear, actionable update shortly. If you have any additional details, please reply to this message.`,
      },
      {
        tone: "Friendly",
        text: `Thanks for reaching out! I totally get what you mean about "${base}". I'm on it and will circle back with a quick fix or next steps ASAP. Appreciate your patience!`,
      },
      {
        tone: "Empathetic",
        text: `I'm really sorry for the trouble caused by "${base}". I know how frustrating that can be. I'll make this a priority and keep you updated until it's fully resolved. You're in good hands.`,
      },
    ]);
  };

  return (
    <div className="flex bg-gradient-to-br from-background via-muted/30 to-background relative">
      {/* Scroll progress indicator */}
      <div className="scroll-progress"></div>
      
      {/* Subtle cultural pattern overlay with parallax */}
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05] parallax-element pointer-events-none" 
           data-speed="0.3"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}>
      </div>

      <DashboardSidebar />
      <div className="flex-1 flex flex-col relative z-10">
        <DashboardHeader />
        <main className="p-6 bg-gradient-to-b from-transparent via-card/10 to-transparent smooth-scroll-element velocity-scale">
          <div className="max-w-7xl mx-auto grid gap-6 stagger-reveal">
            {/* Page title */}
            <div className="flex flex-col gap-1 reveal-on-scroll bg-gradient-to-br from-card/50 via-muted/20 to-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-lg craft-float">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60 text-primary">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <h1 className="text-2xl md:text-3xl font-semibold">Customer Service Helper</h1>
              </div>
              <p className="text-muted-foreground">AI-powered customer support responses with multiple tone options</p>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Conversation */}
              <Card className="lg:col-span-2 border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Customer Conversation</CardTitle>
                  </div>
                  <CardDescription>Simulate customer inquiries to generate AI responses</CardDescription>
                </CardHeader>
                <CardContent>
                  {suggestions.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-16 border border-dashed rounded-lg border-border/60 bg-muted/20">
                      <div className="rounded-full bg-muted h-14 w-14 flex items-center justify-center mb-4">
                        <MessageCircle className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="text-lg font-medium">Start a Customer Conversation</div>
                      <p className="text-sm text-muted-foreground">Type a customer message below to generate AI-powered response suggestions</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground">Based on your message, here are tailored responses:</div>
                    </div>
                  )}

                  {/* Input area */}
                  <form onSubmit={generate} className="mt-6 relative">
                    <Textarea
                      placeholder="Type a customer message to generate AI responses..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="pr-12 min-h-12"
                    />
                    <Button
                      type="submit"
                      disabled={!canSend}
                      className="absolute bottom-2 right-2 h-8 w-8 p-0 rounded-md"
                      aria-label="Send"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Right column */}
              <div className="space-y-6">
                {/* AI Suggestions */}
                <Card className="border-border/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      <CardTitle className="text-lg">AI Suggestions</CardTitle>
                    </div>
                    <CardDescription>Choose from different response tones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {suggestions.length === 0 ? (
                      <div className="text-center py-10 text-sm text-muted-foreground">
                        <div className="mb-2">AI response suggestions will appear here</div>
                        <div>Send a customer message to get started</div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {suggestions.map((s, idx) => (
                          <div key={idx} className="p-3 rounded-lg border bg-card text-card-foreground">
                            <div className="text-xs font-medium mb-1">
                              {s.tone}
                            </div>
                            <p className="text-sm leading-relaxed">{s.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Response Tips */}
                <Card className="border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Response Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Professional: </span>
                      <span className="text-muted-foreground">Formal, business-like tone</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-600 dark:text-green-400">Friendly: </span>
                      <span className="text-muted-foreground">Warm, approachable tone</span>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">Empathetic: </span>
                      <span className="text-muted-foreground">Understanding, caring tone</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
