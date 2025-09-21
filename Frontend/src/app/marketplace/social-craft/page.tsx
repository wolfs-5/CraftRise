"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { 
  Calendar, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Heart, 
  Camera, 
  Instagram, 
  Copy, 
  Share2, 
  Wand2, 
  ArrowRight, 
  Clock, 
  Target, 
  Palette,
  RefreshCw,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface SocialPost {
  day: string;
  post_type: string;
  caption: string;
  hashtags?: string;
  image_url?: string;
  best_time?: string;
}

export default function SocialCraftPage() {
  const [artisanId, setArtisanId] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [socialPosts, setSocialPosts] = useState<SocialPost[]>([]);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateSocialCalendar = async () => {
    if (!artisanId.trim()) {
      setError("Please enter an Artisan ID");
      return;
    }

    setIsGenerating(true);
    setError("");
    
    try {
      const response = await fetch(
        `https://asia-south1-kalasetu-5.cloudfunctions.net/generate-social-calendar?artisanId=${encodeURIComponent(artisanId.trim())}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setSocialPosts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error generating social calendar:", err);
      setError(err instanceof Error ? err.message : "Failed to generate social calendar. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const refreshWithNewArtisan = async () => {
    // Clear the artisan ID field for new input
    setArtisanId("");
    setError("");
    setSocialPosts([]);
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getPostTypeIcon = (postType: string) => {
    switch (postType.toLowerCase()) {
      case 'product spotlight':
        return <Camera className="h-5 w-5 text-purple-500" />;
      case 'behind the scenes':
        return <Users className="h-5 w-5 text-blue-500" />;
      case 'cultural story':
        return <Palette className="h-5 w-5 text-orange-500" />;
      default:
        return <Heart className="h-5 w-5 text-pink-500" />;
    }
  };

  const getPostTypeColor = (postType: string) => {
    switch (postType.toLowerCase()) {
      case 'product spotlight':
        return 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700';
      case 'behind the scenes':
        return 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700';
      case 'cultural story':
        return 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700';
      default:
        return 'from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-pink-200 dark:border-pink-700';
    }
  };

  return (
    <div className="flex bg-gradient-to-br from-background via-muted/30 to-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="p-6">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Calendar className="h-12 w-12 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">SocialCraft</h1>
                <Sparkles className="h-12 w-12 text-secondary" />
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                AI-powered social media calendar generation for artisans. Transform your craft story into engaging social content.
              </p>
            </div>

            {/* Input Section */}
            <Card className="bg-gradient-to-br from-card/80 to-muted/40 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Wand2 className="h-6 w-6" />
                  Generate Your Social Calendar
                </CardTitle>
                <CardDescription className="text-base">
                  Enter your unique Artisan ID to create a personalized social media strategy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input
                    placeholder="Enter your Artisan ID (e.g., artisan-123)"
                    value={artisanId}
                    onChange={(e) => setArtisanId(e.target.value)}
                    className="flex-1"
                    disabled={isGenerating}
                  />
                  <Button
                    onClick={generateSocialCalendar}
                    disabled={isGenerating || !artisanId.trim()}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate Calendar
                      </>
                    )}
                  </Button>
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    <span className="text-destructive">{error}</span>
                  </div>
                )}

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-white/60 dark:bg-white/5 rounded-xl">
                    <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold text-sm">Smart Content</h3>
                    <p className="text-xs text-muted-foreground">AI analyzes your craft story</p>
                  </div>
                  <div className="text-center p-4 bg-white/60 dark:bg-white/5 rounded-xl">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-secondary" />
                    <h3 className="font-semibold text-sm">Optimal Timing</h3>
                    <p className="text-xs text-muted-foreground">Best posting times included</p>
                  </div>
                  <div className="text-center p-4 bg-white/60 dark:bg-white/5 rounded-xl">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <h3 className="font-semibold text-sm">Engagement Focus</h3>
                    <p className="text-xs text-muted-foreground">Crafted for maximum reach</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generated Calendar */}
            {socialPosts && socialPosts.length > 0 && (
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold mb-2">Your Social Media Calendar</h2>
                  <p className="text-muted-foreground">AI-generated social content for your artisan journey</p>
                  
                  {/* Refresh Button */}
                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={refreshWithNewArtisan}
                      disabled={isGenerating}
                      variant="outline"
                      className="bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-green-200 text-green-700 hover:text-green-800 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-700 dark:text-green-300"
                    >
                      <>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Refresh with Different Artisan
                      </>
                    </Button>
                    
                    <Input
                      placeholder="Try another Artisan ID"
                      value={artisanId}
                      onChange={(e) => setArtisanId(e.target.value)}
                      className="max-w-xs"
                      disabled={isGenerating}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {socialPosts.map((post: SocialPost, index: number) => (
                    <Card key={index} className={`bg-gradient-to-br ${getPostTypeColor(post.post_type)} border shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            {getPostTypeIcon(post.post_type)}
                            Day {post.day}
                          </CardTitle>
                          <Badge className="text-xs bg-secondary/20 text-secondary">
                            {post.post_type}
                          </Badge>
                        </div>
                        {post.best_time && (
                          <CardDescription className="flex items-center gap-1 text-sm">
                            <Clock className="h-3 w-3" />
                            Best time: {post.best_time}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {post.image_url && (
                          <div className="w-full h-32 bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={post.image_url} 
                              alt={`${post.post_type} content`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                              <Instagram className="h-4 w-4" />
                              Caption
                            </h4>
                            <div className="bg-white/70 dark:bg-white/5 p-3 rounded-lg text-sm leading-relaxed">
                              {post.caption}
                            </div>
                          </div>

                          {post.hashtags && (
                            <div>
                              <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                <Target className="h-4 w-4" />
                                Hashtags
                              </h4>
                              <div className="bg-white/70 dark:bg-white/5 p-3 rounded-lg text-sm text-primary">
                                {post.hashtags}
                              </div>
                            </div>
                          )}

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => copyToClipboard(`${post.caption}${post.hashtags ? '\n\n' + post.hashtags : ''}`, index)}
                              className="flex-1 border border-border bg-card hover:bg-muted"
                            >
                              {copiedIndex === index ? (
                                <>
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3 mr-1" />
                                  Copy All
                                </>
                              )}
                            </Button>
                            <Button size="sm" className="border border-border bg-card hover:bg-muted">
                              <Share2 className="h-3 w-3 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="text-center space-y-4 pt-6">
                  <div className="flex justify-center gap-4">
                    <Button onClick={generateSocialCalendar} className="border border-border bg-card hover:bg-muted">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Regenerate Calendar
                    </Button>
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Schedule Posts
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Workflow Explanation */}
            <Card className="bg-gradient-to-br from-muted/40 to-card/60 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Heart className="h-6 w-6" />
                  How SocialCraft Works
                </CardTitle>
                <CardDescription className="text-base">
                  Our AI-powered workflow creates personalized social media content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold">1. Artisan Data</h3>
                    <p className="text-sm text-muted-foreground">
                      We fetch your personal story, craft history, and recent products from our database
                    </p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 rounded-full flex items-center justify-center">
                      <Wand2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold">2. AI Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Gemini AI analyzes your story, products, and cultural context to create engaging content
                    </p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40 rounded-full flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold">3. Calendar Creation</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate a structured social media plan with captions, hashtags, and optimal timing
                    </p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="font-semibold">4. Engagement</h3>
                    <p className="text-sm text-muted-foreground">
                      Ready-to-use content designed to maximize reach and authentic connections
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}