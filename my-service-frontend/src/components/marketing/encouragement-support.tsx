import { Heart, BookOpen, TrendingUp, Users } from "lucide-react";

export function EncouragementSupport() {
  const supportAreas = [
    {
      icon: Heart,
      title: "Cultural Heritage Preservation",
      description: "Every craft tells a story. We help artisans share their cultural heritage with the world.",
    },
    {
      icon: BookOpen,
      title: "Education & Skill Development",
      description: "Providing digital literacy and business skills to help artisans thrive in the modern marketplace.",
    },
    {
      icon: TrendingUp,
      title: "Fair Value Recognition",
      description: "Helping artisans understand and communicate the true value of their handcrafted products.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connecting artisans with like-minded creators and conscious consumers worldwide.",
    },
  ];

  return (
    <section id="encouragement-support" className="py-20 lg:py-32 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-r from-amber-900 to-red-900"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">We Stand with Artisans</h2>
          <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            CraftRise is more than a platform – it&apos;s a movement to preserve cultural heritage, empower local communities,
            and ensure that the beauty of handmade crafts continues to flourish in our digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportAreas.map((area, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 motion-safe:group-hover:scale-110 shadow-lg">
                <area.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{area.title}</h3>
              <p className="text-white/80 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 rounded-2xl p-8 md:p-12 text-center border border-white/20 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Join the Movement</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Together, we can ensure that traditional crafts don&apos;t just survive but thrive in the modern world.
            Every purchase, every share, every story matters.
          </p>
        </div>
      </div>
    </section>
  );
}