"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/98 dark:bg-gray-900/98 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-700/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Heart className="h-8 w-8 text-red-600 group-hover:text-orange-600 transition-colors duration-300" />
                <Sparkles className="h-4 w-4 text-amber-500 absolute -top-1 -right-1 animate-gentle-pulse" />
              </div>
              <span className="text-2xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                CraftRise
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#features" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#artisan-stories" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 font-medium relative group">
                Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#encouragement-support" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/98 dark:bg-gray-900/98 border-t border-gray-200 dark:border-gray-700">
              <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Features
              </a>
              <a href="#artisan-stories" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Stories
              </a>
              <a href="#encouragement-support" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                About
              </a>
              <div className="px-3 py-2 space-y-2">
                <Link href="/login" className="block w-full text-center py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  Log in
                </Link>
                <Button asChild className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-orange-600 hover:to-red-600">
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