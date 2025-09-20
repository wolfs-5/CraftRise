import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/indian-woman-artisan-with-colorful-block-printed-t.jpg"
          alt="Indian artisan at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 via-red-900/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-8 drop-shadow-2xl animate-fade-in">
            Bridging Heritage<br />with Modernity
          </h1>

          <p className="text-xl sm:text-2xl text-white/95 font-light text-pretty mb-8 max-w-3xl leading-relaxed drop-shadow-lg animate-slide-up">
            Empowering India&apos;s master craftspeople to reach global markets while preserving our rich cultural heritage.
          </p>

          <p className="text-lg text-white/90 leading-relaxed text-pretty mb-12 max-w-2xl drop-shadow-md animate-slide-up animation-delay-200">
            Join us in celebrating the artistry of Indian hands. Every purchase supports local communities, preserves
            traditional skills, and brings authentic handcrafted beauty to the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up animation-delay-400">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-4 bg-amber-500 text-white hover:bg-amber-600 font-semibold group transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 hover:rotate-1"
            >
              <Link href="/signup">
                Support Local Artisans
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-10 py-4 bg-white/10 border-2 border-white/80 text-white hover:bg-white hover:text-amber-900 transition-all duration-500 backdrop-blur-sm hover:scale-105 hover:-rotate-1"
            >
              <Link href="#features">Explore the Marketplace</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}