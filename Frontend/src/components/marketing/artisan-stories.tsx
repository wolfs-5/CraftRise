"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MapPin, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export function ArtisanStories() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const artisans = [
    {
      name: "Meera Devi",
      craft: "Block Printing",
      location: "Rajasthan",
      experience: "25+ years",
      story:
        "Three generations of block printing expertise. Meera creates intricate patterns that tell stories of her heritage, each design carrying the whispers of ancient traditions.",
      impact: "AI-generated listings helped her reach international customers, increasing sales by 300%.",
      supportMessage: "CraftRise helped preserve my family's 100-year-old printing techniques while connecting me to global markets.",
      image: "/indian-woman-artisan-with-colorful-block-printed-t.jpg",
      craftIcon: "🎨",
    },
    {
      name: "Ravi Kumar",
      craft: "Pottery",
      location: "Gujarat",
      experience: "15+ years",
      story: "Master potter crafting traditional terracotta pieces with modern functionality for contemporary homes. His hands shape clay into vessels that bridge centuries.",
      impact: "Multilingual descriptions opened doors to European markets, preserving ancient techniques.",
      supportMessage: "With CraftRise's AI assistance, I now sell to customers from 12 countries while keeping our pottery traditions alive.",
      image: "/indian-male-potter-working-on-clay-pottery-wheel.jpg",
      craftIcon: "🏺",
    },
    {
      name: "Lakshmi Amma",
      craft: "Handloom Weaving",
      location: "Kerala",
      experience: "30+ years",
      story: "Weaving dreams into reality with traditional Kerala handloom techniques passed down through generations. Each thread tells a story of resilience and beauty.",
      impact: "Smart hashtags increased her social media reach, connecting with conscious fashion enthusiasts.",
      supportMessage: "The platform taught me how to share my weaving stories online. Now young people appreciate our traditional crafts.",
      image: "/indian-elderly-woman-weaving-on-traditional-handlo.jpg",
      craftIcon: "🧶",
    },
  ];

  return (
    <section id="artisan-stories" className="py-20 bg-gradient-to-br from-background via-muted to-card cultural-pattern relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 artisan-texture opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-primary animate-gentle-pulse" />
            <h2 className="text-4xl md:text-5xl font-heading text-foreground font-bold">Stories of Empowerment</h2>
            <Heart className="h-8 w-8 text-accent animate-gentle-pulse animation-delay-400" />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Meet the talented artisans whose lives have been transformed through CraftRise&apos;s AI-powered marketplace assistance. 
            Each story represents the preservation of heritage and the power of technology serving tradition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <Card
              key={index}
              className={`group overflow-hidden transition-all duration-500 bg-card border-border/50 hover:border-primary/50 hover:shadow-2xl ${
                hoveredCard === index ? 'animate-warm-glow scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="aspect-square overflow-hidden relative">
                {/* Craft icon overlay */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-border/50 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{artisan.craftIcon}</span>
                </div>

                {/* Experience badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground font-medium backdrop-blur-sm">
                    {artisan.experience}
                  </Badge>
                </div>

                <Image
                  src={artisan.image || "/placeholder.svg"}
                  alt={`${artisan.name} - ${artisan.craft} artisan`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-8 space-y-6">
                {/* Artisan details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading text-card-foreground font-bold group-hover:text-primary transition-colors duration-300">
                      {artisan.name}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{artisan.location}</span>
                    </div>
                  </div>
                  
                  <Badge className="text-accent border-accent/30 bg-accent/10 border">
                    {artisan.craft}
                  </Badge>
                </div>

                {/* Story */}
                <p className="text-card-foreground/80 leading-relaxed text-sm">{artisan.story}</p>

                {/* Impact section */}
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 rounded-lg border-l-4 border-secondary">
                  <p className="text-sm text-card-foreground font-medium mb-2">
                    📈 <strong>Impact:</strong> {artisan.impact}
                  </p>
                </div>

                {/* Support message */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-card-foreground/90 italic leading-relaxed">
                    💬 &quot;{artisan.supportMessage}&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-up animation-delay-600">
          <p className="text-lg text-muted-foreground mb-4">
            Join thousands of artisans who are preserving heritage while building their future
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 cursor-pointer animate-craft-float">
            <Sparkles className="h-5 w-5" />
            <span>Start Your Story Today</span>
          </div>
        </div>
      </div>
    </section>
  );
}