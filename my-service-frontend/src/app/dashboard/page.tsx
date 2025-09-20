import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hash, ShoppingCart, DollarSign, MessageCircle, ArrowRight, Sparkles, Heart, TrendingUp, Users, Award, Palette } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const features = [
    { 
      title: "AI Hashtag Expert", 
      description: "Generate trending hashtags for your content",
      supportiveText: "Help your beautiful crafts reach more customers globally",
      icon: Hash, 
      href: "/hashtag", 
      color: "text-primary",
      badge: "Most Used",
      stats: "2.3x more reach"
    },
    { 
      title: "Marketplace Assistant", 
      description: "Create compelling product titles and descriptions",
      supportiveText: "Tell your craft's story in multiple languages effortlessly", 
      icon: ShoppingCart, 
      href: "/marketplace", 
      color: "text-secondary",
      badge: "Popular",
      stats: "85% better sales"
    },
    { 
      title: "Pricing Assistant", 
      description: "Get AI-powered pricing recommendations",
      supportiveText: "Price your handmade treasures fairly and competitively",
      icon: DollarSign, 
      href: "/pricing", 
      color: "text-accent",
      stats: "40% profit boost"
    },
    { 
      title: "Customer Service Helper", 
      description: "AI-powered customer support responses",
      supportiveText: "Build lasting relationships with your customers worldwide",
      icon: MessageCircle, 
      href: "/customer-service", 
      color: "text-primary",
      stats: "95% satisfaction"
    },
  ];

  const quickStats = [
    { label: "Active Artisans", value: "12,450+", icon: Users, trend: "+15%" },
    { label: "Crafts Listed", value: "45,230", icon: Palette, trend: "+22%" },
    { label: "Success Stories", value: "3,200+", icon: Award, trend: "+18%" },
    { label: "Revenue Growth", value: "340%", icon: TrendingUp, trend: "+8%" },
  ];

  return (
    <div className="flex h-dvh bg-background cultural-pattern">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Welcome Section */}
            <div className="text-center mb-8 animate-fade-in">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-primary animate-gentle-pulse" />
                <h1 className="text-4xl font-heading font-bold text-foreground">Welcome to Your Craft Studio</h1>
                <Sparkles className="h-8 w-8 text-secondary animate-gentle-pulse animation-delay-400" />
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Empower your artisan journey with AI-powered tools designed to preserve heritage while reaching global markets.
                Every tool here celebrates your creativity and supports your success.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {quickStats.map((stat, index) => (
                <Card key={stat.label} className="text-center group hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                        {stat.trend}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Artisan Tools */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Your Artisan Toolkit</h2>
                <p className="text-muted-foreground">Choose the perfect tool to grow your craft business</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={feature.title} className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-border/50 overflow-hidden animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-full -translate-y-16 translate-x-16 artisan-texture"></div>
                    
                    <CardHeader className="pb-4 relative">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-br from-card to-muted/50 ${feature.color} shadow-sm`}>
                            <feature.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-lg font-heading">{feature.title}</CardTitle>
                              {feature.badge && (
                                <Badge className="bg-primary/20 text-primary border-primary/30">
                                  {feature.badge}
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-sm">{feature.description}</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Supportive message */}
                      <div className="bg-gradient-to-r from-muted/30 to-accent/10 p-3 rounded-lg border-l-4 border-accent">
                        <p className="text-sm text-card-foreground/80 italic">
                          💝 {feature.supportiveText}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Success Rate:</span>
                        <Badge className="bg-secondary/20 text-secondary font-medium">
                          {feature.stats}
                        </Badge>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-medium shadow-md group-hover:shadow-lg transition-all duration-300" asChild>
                        <a href={feature.href} className="flex items-center justify-center space-x-2">
                          <span>Start Creating</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </CardContent>
                </Card>
              ))}
            </div>
            </div>

            {/* Featured Artisan Spotlight */}
            <Card className="overflow-hidden animate-slide-up animation-delay-600">
              <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">Artisan Spotlight</h3>
                    <p className="text-muted-foreground">Celebrating our featured artisan of the month</p>
                  </div>
                  <Award className="h-12 w-12 text-primary animate-gentle-pulse" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-1">
                    <div className="relative">
                      <Image
                        src="/indian-woman-artisan-smiling.jpg"
                        alt="Featured Artisan"
                        width={200}
                        height={200}
                        className="w-full aspect-square object-cover rounded-xl shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2">
                        <Badge className="bg-primary text-primary-foreground animate-warm-glow">
                          🏆 Featured
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-foreground">Priya Sharma</h4>
                      <p className="text-accent font-medium">Block Printing • Rajasthan</p>
                    </div>
                    <p className="text-card-foreground/80">
                      "CraftRise transformed my small block printing workshop into a global business. 
                      The AI tools helped me reach customers in 15 countries while keeping our 200-year-old family traditions alive."
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-secondary/20 text-secondary">300% sales increase</Badge>
                      <Badge className="bg-accent/20 text-accent">15 countries reached</Badge>
                      <Badge className="bg-primary/20 text-primary">Heritage preserved</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20 animate-fade-in animation-delay-800">
              <CardContent className="p-8">
                <div className="max-w-2xl mx-auto space-y-4">
                  <div className="flex justify-center space-x-2 text-4xl mb-4">
                    <span className="animate-craft-float">🎨</span>
                    <span className="animate-craft-float animation-delay-200">✨</span>
                    <span className="animate-craft-float animation-delay-400">❤️</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Ready to Share Your Story?</h3>
                  <p className="text-muted-foreground">
                    Join thousands of artisans who are preserving their heritage while building thriving businesses with CraftRise.
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground animate-warm-glow">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Explore All Tools
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
