"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm cultural-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Heart className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                <Sparkles className="h-4 w-4 text-secondary absolute -top-1 -right-1 animate-gentle-pulse" />
              </div>
              <span className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                CraftRise
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#artisan-stories" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#encouragement-support" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-semibold shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1 animate-craft-float">
              <Link href="/marketplace" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border cultural-pattern">
              <a href="#home" className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                Features
              </a>
              <a href="#artisan-stories" className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                Stories
              </a>
              <a href="#encouragement-support" className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                About
              </a>
              <div className="px-3 py-2 space-y-2">
                <Link href="/login" className="block w-full text-center py-2 text-card-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                  Log in
                </Link>
                <Button asChild className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-primary">
                  <Link href="/signup">Sign up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}