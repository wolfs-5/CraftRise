import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden min-h-[500px] flex items-center">
      {/* Background image with better overlay */}
      <div className="absolute inset-0">
        <Image
          src="/artisan-working-on-traditional-craft-with-warm-lig.jpg"
          alt="Artisan at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center min-h-[400px]">
          <div className="max-w-xl space-y-6 ml-4 sm:ml-8 lg:ml-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
              Join CraftRise Today –<br />Empower Your Craft
            </h2>

            <p className="text-lg text-white/95 leading-relaxed drop-shadow-lg max-w-md">
              Join thousands of artisans who are already using CraftRise to transform their traditional crafts into
              thriving global businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="default"
                className="text-base px-8 py-3 group bg-white text-red-900 hover:bg-amber-50 font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-pulse hover:animate-none"
              >
                <Link href="/dashboard">
                  Get Started Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="text-base px-8 py-3 border-2 border-white/80 text-white hover:bg-white/15 bg-white/5 font-semibold backdrop-blur-sm transition-all duration-500 hover:scale-105"
              >
                <Link href="/craft">Empower Your Craft</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}