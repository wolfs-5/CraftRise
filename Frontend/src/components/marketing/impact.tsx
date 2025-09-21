import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Heart, Globe } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Increased Sales",
    description: "Artisans see an average 40% increase in sales within the first month of using CraftRise.",
    stat: "40%",
    statLabel: "Sales Increase",
  },
  {
    icon: Heart,
    title: "Cultural Preservation",
    description: "Helping preserve traditional crafts by making them accessible to global markets.",
    stat: "500+",
    statLabel: "Crafts Preserved",
  },
  {
    icon: Globe,
    title: "Digital Inclusion",
    description: "Bridging the digital divide by empowering artisans with modern e-commerce tools.",
    stat: "50+",
    statLabel: "Countries Reached",
  },
];

export function Impact() {
  return (
    <section className="py-20 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
            Making a Real Impact
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            CraftRise is more than just a tool – it&apos;s a movement to empower artisans, preserve cultural heritage, and
            create sustainable livelihoods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="text-center p-8 border-stone-200 hover:shadow-xl transition-all duration-500 bg-white hover:bg-stone-50 motion-safe:hover:scale-[1.03]"
            >
              <CardHeader className="pb-6">
                <div className="mx-auto w-16 h-16 bg-amber-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <impact.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-amber-600 mb-2">{impact.stat}</div>
                <div className="text-sm text-stone-500 font-medium uppercase tracking-wide">
                  {impact.statLabel}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-4 text-stone-800 font-semibold">{impact.title}</CardTitle>
                <p className="text-stone-600 leading-relaxed">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}