"use client";

import { useState, useRef } from "react";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Palette, Upload, Sparkles, Heart, Wand2, FileText, Camera, Loader2, CheckCircle, Copy } from "lucide-react";
import Image from "next/image";

interface StoryResponse {
  story: string;
  title: string;
  tags?: string[];
}

export default function StoryWeaverPage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [craftDescription, setCraftDescription] = useState("");
  const [artisanName, setArtisanName] = useState("");
  const [craftType, setCraftType] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStory, setGeneratedStory] = useState<StoryResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateStory = async () => {
    if (!selectedImage || !craftDescription.trim()) {
      setError("Please upload an image and provide craft description");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // Convert image to base64
      const base64Image = await convertToBase64(selectedImage);

      const requestData = {
        image: base64Image,
        craftDescription: craftDescription.trim(),
        artisanName: artisanName.trim() || "Artisan",
        craftType: craftType.trim() || "Handcraft"
      };

      const response = await fetch('https://asia-south1-kalasetu-5.cloudfunctions.net/generate-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Assuming the API returns a story field
      setGeneratedStory({
        story: data.description || data.story || "Beautiful craft story generated",
        title: data.title || `${craftType} by ${artisanName}`,
        tags: data.tags || []
      });

    } catch (err) {
      console.error('Error generating story:', err);
      setError("Failed to generate story. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data URL prefix to get just the base64 string
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const resetForm = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setCraftDescription("");
    setArtisanName("");
    setCraftType("");
    setGeneratedStory(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
          <div className="max-w-6xl mx-auto space-y-8 stagger-reveal">
            
            {/* Hero Section */}
            <div className="text-center space-y-6 reveal-on-scroll bg-gradient-to-br from-card/50 via-muted/20 to-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8 shadow-lg craft-float">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Palette className="h-10 w-10 text-primary animate-gentle-pulse" />
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">StoryWeaver</h1>
                <Wand2 className="h-10 w-10 text-secondary animate-gentle-pulse animation-delay-400" />
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transform your beautiful craft photos into compelling stories that captivate customers and preserve heritage. 
                Let AI weave narratives that honor tradition while embracing modern storytelling.
              </p>
              <div className="flex justify-center space-x-2 text-2xl">
                <span className="animate-craft-float">📸</span>
                <span className="animate-craft-float animation-delay-200">✨</span>
                <span className="animate-craft-float animation-delay-400">📖</span>
                <span className="animate-craft-float animation-delay-600">❤️</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 reveal-on-scroll">
              
              {/* Input Section */}
              <div className="space-y-6">
                <Card className="border-primary/20 animate-slide-up">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Camera className="h-6 w-6 text-primary" />
                      <CardTitle className="font-heading">Share Your Craft</CardTitle>
                    </div>
                    <CardDescription>Upload your creation and tell us about its story</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {/* Image Upload */}
                    <div className="space-y-4">
                      <label className="text-sm font-medium text-card-foreground">Craft Photo</label>
                      <div 
                        className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer bg-gradient-to-br from-primary/5 to-accent/5"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {imagePreview ? (
                          <div className="space-y-4">
                            <Image
                              src={imagePreview}
                              alt="Craft preview"
                              width={300}
                              height={200}
                              className="mx-auto rounded-lg object-cover"
                            />
                            <Button variant="outline" size="sm">Change Image</Button>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="h-12 w-12 mx-auto text-primary/50" />
                            <div>
                              <p className="text-sm text-muted-foreground">Click to upload your craft photo</p>
                              <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>

                    {/* Craft Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-card-foreground">Artisan Name</label>
                        <Input
                          placeholder="Your name"
                          value={artisanName}
                          onChange={(e) => setArtisanName(e.target.value)}
                          className="border-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-card-foreground">Craft Type</label>
                        <Input
                          placeholder="e.g., Block Printing, Pottery"
                          value={craftType}
                          onChange={(e) => setCraftType(e.target.value)}
                          className="border-primary/20"
                        />
                      </div>
                    </div>

                    {/* Craft Description */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-card-foreground">Craft Description</label>
                      <Textarea
                        placeholder="Describe your craft, the techniques used, materials, cultural significance, or any story behind this creation..."
                        value={craftDescription}
                        onChange={(e) => setCraftDescription(e.target.value)}
                        rows={4}
                        className="border-primary/20 resize-none"
                      />
                    </div>

                    {/* Generate Button */}
                    <Button
                      onClick={generateStory}
                      disabled={!selectedImage || !craftDescription.trim() || isGenerating}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-medium h-12"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Weaving Your Story...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Weave My Story
                        </>
                      )}
                    </Button>

                    {error && (
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                        <p className="text-sm text-destructive">{error}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Tips Card */}
                <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20 animate-slide-up animation-delay-200">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-secondary" />
                      <CardTitle className="text-lg">Storytelling Tips</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-card-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✨</span>
                        <span>Include the cultural significance of your craft</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">🏛️</span>
                        <span>Mention traditional techniques or family heritage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">🌿</span>
                        <span>Describe natural materials and sustainable practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">⏰</span>
                        <span>Share the time and dedication invested</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Output Section */}
              <div className="space-y-6">
                {generatedStory ? (
                  <Card className="border-accent/20 animate-slide-up">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-6 w-6 text-accent" />
                          <CardTitle className="font-heading">Your Woven Story</CardTitle>
                        </div>
                        <Badge className="bg-accent/20 text-accent animate-gentle-pulse">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Generated
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      
                      {/* Title */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-card-foreground">Story Title</label>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(generatedStory.title)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3 border">
                          <h3 className="font-heading font-semibold text-card-foreground">{generatedStory.title}</h3>
                        </div>
                      </div>

                      {/* Story */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-card-foreground">Generated Story</label>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(generatedStory.story)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 border border-accent/20">
                          <p className="text-card-foreground leading-relaxed whitespace-pre-wrap">{generatedStory.story}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      {generatedStory.tags && generatedStory.tags.length > 0 && (
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-card-foreground">Suggested Tags</label>
                          <div className="flex flex-wrap gap-2">
                            {generatedStory.tags.map((tag, index) => (
                              <Badge key={index} className="bg-primary/20 text-primary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2 pt-4">
                        <Button
                          onClick={() => copyToClipboard(`${generatedStory.title}\n\n${generatedStory.story}`)}
                          className="flex-1"
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Copy All
                        </Button>
                        <Button variant="outline" onClick={resetForm} className="flex-1">
                          Create New Story
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-muted/50 animate-slide-up">
                    <CardContent className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading font-semibold text-card-foreground">Your Story Awaits</h3>
                        <p className="text-muted-foreground text-sm max-w-sm">
                          Upload your craft photo and share its story to generate a compelling narrative that honors your artisan heritage.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Success Stories Section */}
            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20 animate-fade-in animation-delay-800">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl font-heading font-bold text-foreground mb-2">
                    StoryWeaver Success Stories
                  </CardTitle>
                  <CardDescription className="text-lg">
                    See how artisans transformed their craft narratives
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">📸</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">Visual Storytelling</h4>
                      <p className="text-sm text-muted-foreground">Transform photos into captivating narratives</p>
                    </div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">Cultural Heritage</h4>
                      <p className="text-sm text-muted-foreground">Honor traditions in modern storytelling</p>
                    </div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">💝</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">Emotional Connection</h4>
                      <p className="text-sm text-muted-foreground">Create bonds between artisans and customers</p>
                    </div>
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