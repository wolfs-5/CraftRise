import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ArtisanStories } from "@/components/marketing/artisan-stories";
import { EncouragementSupport } from "@/components/marketing/encouragement-support";
import { Impact } from "@/components/marketing/impact";
import { Testimonials } from "@/components/marketing/testimonials";
import { CallToAction } from "@/components/marketing/call-to-action";
import { Navbar } from "@/components/marketing/navbar";

export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground landing-theme">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ArtisanStories />
        <EncouragementSupport />
        <Impact />
        <Testimonials />
        <CallToAction />
      </main>
      <footer className="px-6 py-8 border-t border-muted text-sm text-foreground/70 text-center">
        © {new Date().getFullYear()} CraftRise. Empowering artisans, preserving heritage.
      </footer>
    </div>
  );
}
