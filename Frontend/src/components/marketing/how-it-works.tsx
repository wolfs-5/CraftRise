import { Card, CardContent } from "@/components/ui/card";
import { Upload, Sparkles, Share2 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Share photos and details of your handcrafted items with our intelligent system.",
  },
  {
    icon: Sparkles,
    title: "AI Generates",
    description: "Our AI creates compelling descriptions, social media calendars, and generates engaging marketing content.",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Publish to marketplaces and social media with optimized content that sells.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
            Simple as 1, 2, 3
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty leading-relaxed">
            Transform your craft into compelling marketplace listings in just three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center p-8 h-full border-amber-200/50 hover:shadow-xl transition-all duration-500 motion-safe:hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
                <CardContent className="space-y-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-amber-300"></div>
                  <div className="w-0 h-0 border-l-4 border-l-amber-300 border-y-2 border-y-transparent ml-6 -mt-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}