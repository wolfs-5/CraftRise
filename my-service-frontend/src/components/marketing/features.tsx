import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Hash, DollarSign, Headphones } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Marketplace Assistant",
    description:
      "Generate compelling product titles and descriptions that capture the essence of your craft and attract global buyers.",
  },
  {
    icon: Hash,
    title: "Hashtag Expert",
    description:
      "Smart hashtags for social media growth. Reach the right audience and expand your digital presence effortlessly.",
  },
  {
    icon: DollarSign,
    title: "Pricing Assistant",
    description:
      "Suggests fair pricing based on market trends, material costs, and the unique value of your handcrafted items.",
  },
  {
    icon: Headphones,
    title: "Customer Service Helper",
    description:
      "Multilingual auto-replies that maintain your personal touch while handling customer inquiries efficiently.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Crafted for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Our AI tools are designed specifically for artisans, understanding the unique challenges and opportunities
            in the handmade marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-gray-200/50 hover:border-orange-400/20 bg-white"
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors shadow-md">
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8">
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}