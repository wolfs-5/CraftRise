"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Heart, Camera, Mic, Globe, Share2, MessageSquareText, Sparkles, Palette, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function MarketplacePage() {
  const features = [
    {
      id: 1,
      title: "Photo Upload + AI Listing",
      desc: "Upload artisan product photos and let AI generate compelling titles and storytelling content",
      supportiveText: "Turn your beautiful craft photos into compelling stories that sell",
      icon: Camera,
      bg: "bg-gradient-to-br from-secondary/10 to-accent/5",
      href: "/marketplace/photo-listing",
      badge: "Most Popular",
      stats: "2.5x more sales"
    },
    {
      id: 2,
      title: "Voice Input (Local Language)",
      desc: "Speak your product details in your native language and AI will understand and process them",
      supportiveText: "Express your craft's story in your mother tongue, we'll handle the rest",
      icon: Mic,
      bg: "bg-gradient-to-br from-primary/10 to-secondary/5",
      href: "/marketplace/voice-input",
      stats: "15+ languages"
    },
    {
      id: 3,
      title: "Multilingual Output",
      desc: "AI translates your product details into English and regional languages for wider reach",
      supportiveText: "Break language barriers and reach customers worldwide",
      icon: Globe,
      bg: "bg-gradient-to-br from-accent/10 to-primary/5",
      href: "/marketplace/multilingual-output",
      badge: "Global Reach",
      stats: "40+ countries"
    },
    {
      id: 4,
      title: "Social Media Content",
      desc: "Generate Instagram captions, hashtags, and WhatsApp share messages for your products",
      supportiveText: "Amplify your craft's voice across all social platforms",
      icon: Share2,
      bg: "bg-gradient-to-br from-secondary/5 to-accent/10",
      href: "/marketplace/social-content",
      stats: "3x engagement"
    },
  ];

  const successStories = [
    {
      name: "Kavya Reddy",
      craft: "Handwoven Sarees",
      location: "Andhra Pradesh",
      image: "/indian-woman-artisan-smiling.jpg",
      story: "Increased international sales by 400% using multilingual listings",
      tools: ["Photo Upload", "Multilingual Output"]
    },
    {
      name: "Arjun Singh",
      craft: "Wooden Sculptures", 
      location: "Rajasthan",
      image: "/placeholder-user.jpg",
      story: "Voice input in Hindi helped him list 50+ products in just one week",
      tools: ["Voice Input", "Social Content"]
    }
  ];

  return (
    <div className="flex h-dvh bg-background cultural-pattern">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Hero Section */}
            <div className="text-center space-y-6 animate-fade-in">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Heart className="h-10 w-10 text-primary animate-gentle-pulse" />
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Marketplace Assistant</h1>
                <Sparkles className="h-10 w-10 text-secondary animate-gentle-pulse animation-delay-400" />
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transform your beautiful handcrafted treasures into compelling marketplace listings. 
                From voice input in your native language to global multilingual reach - let AI amplify your artisan story.
              </p>
              <div className="flex justify-center space-x-2 text-2xl">
                <span className="animate-craft-float">🎨</span>
                <span className="animate-craft-float animation-delay-200">📸</span>
                <span className="animate-craft-float animation-delay-400">🌍</span>
                <span className="animate-craft-float animation-delay-600">✨</span>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={feature.id} className={`group overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.02] border-border/50 animate-slide-up`} style={{animationDelay: `${index * 150}ms`}}>
                  <div className={`${feature.bg} p-1 artisan-texture`}>
                    <div className="bg-card/80 backdrop-blur-sm rounded-lg">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <CardTitle className="text-lg font-heading">{feature.title}</CardTitle>
                                {feature.badge && (
                                  <Badge className="bg-primary/20 text-primary border-primary/30">
                                    {feature.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground font-medium">{feature.stats}</p>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-card-foreground/70">{feature.desc}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Supportive message */}
                        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-3 rounded-lg border-l-4 border-accent">
                          <p className="text-sm text-card-foreground/80 italic">
                            💫 {feature.supportiveText}
                          </p>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-medium" asChild>
                          <a href={feature.href} className="flex items-center justify-center gap-2">
                            <span>Start Creating</span>
                            <feature.icon className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Success Stories Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Artisan Success Stories</h2>
                <p className="text-muted-foreground">See how fellow artisans transformed their craft businesses</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {successStories.map((story, index) => (
                  <Card key={story.name} className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: `${600 + index * 200}ms`}}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={story.image}
                            alt={story.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h4 className="font-heading font-semibold text-card-foreground">{story.name}</h4>
                            <p className="text-sm text-accent font-medium">{story.craft} • {story.location}</p>
                          </div>
                          <p className="text-sm text-card-foreground/80 italic">"{story.story}"</p>
                          <div className="flex flex-wrap gap-1">
                            {story.tools.map((tool) => (
                              <Badge key={tool} className="text-xs bg-secondary/20 text-secondary">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Artisan Success Tips */}
            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20 animate-fade-in animation-delay-800">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Palette className="h-8 w-8 text-primary animate-gentle-pulse" />
                  <CardTitle className="text-2xl font-heading font-bold text-foreground text-center">Artisan Success Wisdom</CardTitle>
                </div>
                <CardDescription className="text-center text-muted-foreground text-lg">
                  Time-tested wisdom to help your handmade treasures shine in the global marketplace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Photography Magic */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                        <Camera className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-3">Photography Magic ✨</h3>
                      <ul className="space-y-2 text-sm text-card-foreground/80">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">📸</span>
                          <span>Natural lighting brings out texture and soul</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">🤲</span>
                          <span>Show your hands creating the magic</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">📏</span>
                          <span>Include scale references for clarity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">📖</span>
                          <span>Capture the story behind each craft</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Storytelling Power */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <MessageSquareText className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-3">Storytelling Power 📚</h3>
                      <ul className="space-y-2 text-sm text-card-foreground/80">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary">🎨</span>
                          <span>Share your creative journey and process</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary">🏛️</span>
                          <span>Honor traditional techniques and heritage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary">🌿</span>
                          <span>Highlight sustainable, eco-friendly materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary">❤️</span>
                          <span>Connect deeply with customer emotions</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Global Reach */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                        <Globe className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-3">Global Reach 🌍</h3>
                      <ul className="space-y-2 text-sm text-card-foreground/80">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">🏺</span>
                          <span>Cultural context adds immense value</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">🌾</span>
                          <span>Local materials tell authentic stories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">📦</span>
                          <span>Clear shipping details build trust</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">🤝</span>
                          <span>Custom orders create lasting bonds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Encouraging call to action */}
                <div className="text-center mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    Ready to showcase your beautiful crafts to the world?
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground animate-warm-glow">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Begin Your Marketplace Journey
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
