import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Sharma",
    craft: "Block Print Artisan",
    location: "Rajasthan, India",
    quote: "CraftRise helped me reach customers worldwide. My traditional block prints now sell in 15 countries!",
    avatar: "/indian-woman-artisan-smiling.jpg",
  },
  {
    name: "Carlos Mendoza",
    craft: "Ceramic Artist",
    location: "Oaxaca, Mexico",
    quote: "The pricing assistant helped me value my work fairly. I finally earn what my pottery is truly worth.",
    avatar: "/mexican-man-ceramic-artist.jpg",
  },
  {
    name: "Fatima Al-Zahra",
    craft: "Textile Weaver",
    location: "Morocco",
    quote: "The multilingual support means I can serve customers in their own language. Sales have tripled!",
    avatar: "/moroccan-woman-textile-weaver.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
            Stories from Our Artisans
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Real artisans, real results. See how CraftRise is transforming lives and preserving traditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-stone-200 hover:shadow-xl transition-all duration-500 bg-stone-50 hover:bg-white motion-safe:hover:scale-[1.03]">
              <CardContent className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-stone-700 leading-relaxed text-lg font-medium">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover border-2 border-amber-200"
                  />
                  <div>
                    <div className="font-semibold text-stone-800">{testimonial.name}</div>
                    <div className="text-sm text-stone-500">
                      {testimonial.craft} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}