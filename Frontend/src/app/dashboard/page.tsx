import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Sparkles, Users, Palette, MessageCircle, TrendingUp, Wand2, Calendar } from "lucide-react";

export default function Dashboard() {
  const features = [
    { 
      title: "StoryWeaver", 
      description: "Transform your craft photos into compelling narratives",
      supportiveText: "Let AI weave beautiful stories from your artisan creations",
      icon: Palette, 
      href: "/storyweaver", 
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-100 dark:bg-purple-800/50",
      gradientBg: "from-purple-100/20 to-pink-100/10 dark:from-purple-800/10 dark:to-pink-800/5",
      iconColor: "text-purple-600 dark:text-purple-400",
      badge: "New Feature",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700",
      stats: "5x engagement"
    },
    { 
      title: "PhotoEnhance Studio", 
      description: "Transform your artisan products with AI-powered enhancement",
      supportiveText: "Turn ordinary product photos into stunning enhanced images with professional mockups", 
      icon: Wand2, 
      href: "/marketplace/photo-listing", 
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconBg: "bg-emerald-100 dark:bg-emerald-800/50",
      gradientBg: "from-emerald-100/20 to-teal-100/10 dark:from-emerald-800/10 dark:to-teal-800/5",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      badge: "Popular",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700",
      stats: "Professional Quality"
    },
    { 
      title: "SocialCraft", 
      description: "AI-powered social media calendar generation for artisans",
      supportiveText: "Transform your craft story into engaging social media content",
      icon: Calendar, 
      href: "/marketplace/social-craft", 
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-100 dark:bg-purple-800/50",
      gradientBg: "from-purple-100/20 to-pink-100/10 dark:from-purple-800/10 dark:to-pink-800/5",
      iconColor: "text-purple-600 dark:text-purple-400",
      badge: "New",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700",
      stats: "Weekly Calendar"
    },
    { 
      title: "Customer Service Helper", 
      description: "AI-powered customer support responses",
      supportiveText: "Build lasting relationships with your customers worldwide",
      icon: MessageCircle, 
      href: "/customer-service", 
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-800/50",
      gradientBg: "from-blue-100/20 to-indigo-100/10 dark:from-blue-800/10 dark:to-indigo-800/5",
      iconColor: "text-blue-600 dark:text-blue-400",
      badge: "",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
      stats: "95% satisfaction"
    },
  ];

  const quickStats = [
    { 
      label: "Active Artisans", 
      value: "12,450+", 
      icon: Users, 
      trend: "+15%", 
      color: "text-rose-600 dark:text-rose-400",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      trendColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
    },
    { 
      label: "Crafts Listed", 
      value: "45,230", 
      icon: Palette, 
      trend: "+22%", 
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      trendColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
    },
    { 
      label: "Success Stories", 
      value: "8,940", 
      icon: Heart, 
      trend: "+18%", 
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      trendColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
    },
    { 
      label: "Global Reach", 
      value: "120+ Countries", 
      icon: Sparkles, 
      trend: "+8%", 
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      trendColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
    }
  ];

  return (
    <div className="flex bg-gradient-to-br from-background via-muted/30 to-background relative">
      {/* Scroll progress indicator */}
      <div className="scroll-progress"></div>
      
      {/* Subtle cultural pattern overlay with parallax */}
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05] parallax-element pointer-events-none" 
           data-speed="0.3"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}>
      </div>
      <DashboardSidebar />
      <div className="flex-1 flex flex-col relative z-10">
        <DashboardHeader />
        <main className="p-8 bg-gradient-to-b from-transparent via-card/10 to-transparent smooth-scroll-element velocity-scale">
          <div className="max-w-7xl mx-auto space-y-10 stagger-reveal">
            
            {/* Welcome Section */}
            <div className="text-center mb-12 reveal-on-scroll bg-gradient-to-br from-card/50 via-muted/20 to-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8 shadow-lg craft-float">
              <div className="flex justify-center items-center gap-4 mb-6">
                <Heart className="h-10 w-10 text-primary animate-gentle-pulse drop-shadow-sm" />
                <h1 className="text-5xl font-heading font-semibold text-foreground tracking-tight">Welcome to Your Craft Atelier</h1>
                <Sparkles className="h-10 w-10 text-accent animate-gentle-pulse animation-delay-400 drop-shadow-sm" />
              </div>
              <p className="text-xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Embrace the harmony of ancient artisanship and modern innovation. Our curated tools honor traditional crafts while connecting your heritage to the global marketplace.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 reveal-on-scroll">
              {quickStats.map((stat, index) => (
                <Card key={stat.label} className={`text-center group hover:shadow-md transition-shadow duration-300 border-0 ${stat.bgColor} premium-hover craft-float`} style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 rounded-full bg-white/50 dark:bg-white/10">
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                    <p className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <div className="flex justify-center">
                      <Badge className={`text-xs font-medium ${stat.trendColor} border-0`}>
                        {stat.trend}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Artisan Tools */}
            <div className="space-y-6 reveal-on-scroll">
              <div className="text-center reveal-on-scroll">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Your Artisan Toolkit</h2>
                <p className="text-muted-foreground">Choose the perfect tool to grow your craft business</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-reveal">
                {features.map((feature, index) => (
                  <Card key={feature.title} className={`group hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden ${feature.bgColor} premium-hover reveal-on-scroll`} style={{animationDelay: `${index * 0.15}s`}}>
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradientBg} rounded-full -translate-y-12 translate-x-12 opacity-30`}></div>
                    
                    <CardHeader className="pb-4 relative">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-xl ${feature.iconBg} shadow-sm`}>
                            <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-lg font-heading">{feature.title}</CardTitle>
                              {feature.badge && (
                                <Badge className="bg-primary/20 text-primary border-primary/30">
                                  {feature.badge}
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-sm">{feature.description}</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Supportive message */}
                      <div className="bg-gradient-to-r from-muted/30 to-accent/10 p-3 rounded-lg border-l-4 border-accent">
                        <p className="text-sm text-card-foreground/80 italic">
                          💝 {feature.supportiveText}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Success Rate:</span>
                        <Badge className="bg-secondary/20 text-secondary font-medium">
                          {feature.stats}
                        </Badge>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-medium shadow-md group-hover:shadow-lg transition-all duration-300" asChild>
                        <a href={feature.href} className="flex items-center justify-center space-x-2">
                          <span>Start Creating</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Inspirational Footer */}
            <div className="text-center py-16 bg-gradient-to-br from-card/80 via-primary/5 to-accent/10 rounded-3xl border border-border/30 backdrop-blur-sm shadow-xl reveal-on-scroll parallax-element craft-float" data-speed="0.2">
              <Heart className="h-14 w-14 text-primary mx-auto mb-6 animate-gentle-pulse drop-shadow-lg craft-float" />
              <h3 className="text-3xl font-heading font-medium text-foreground mb-4 tracking-wide">
                Where Heritage Meets Innovation
              </h3>
              <p className="text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                Each thread you weave, every pattern you craft, carries the wisdom of generations. We honor your artistry while 
                opening doors to a world eager to treasure authentic, handcrafted beauty.
              </p>
              <div className="flex justify-center gap-3 mt-8">
                <Sparkles className="h-6 w-6 text-accent animate-gentle-pulse drop-shadow-sm" />
                <Sparkles className="h-5 w-5 text-secondary animate-gentle-pulse animation-delay-200 drop-shadow-sm" />
                <Sparkles className="h-6 w-6 text-primary animate-gentle-pulse animation-delay-400 drop-shadow-sm" />
              </div>
            </div>

            {/* Artisan Success Stories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-on-scroll">
              <Card className="bg-gradient-to-br from-rose-50/80 via-pink-50/40 to-orange-50/80 dark:from-rose-900/20 dark:via-pink-900/10 dark:to-orange-900/20 border-0 shadow-xl craft-float overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-bl-full"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2 text-rose-800 dark:text-rose-200">
                    <Heart className="h-5 w-5" />
                    Artisan Success Stories
                  </CardTitle>
                  <CardDescription className="text-rose-600 dark:text-rose-400">
                    Celebrating the journey of talented craftspeople
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-4 p-4 bg-white/80 dark:bg-white/8 rounded-xl border border-rose-200/50 dark:border-rose-700/50 hover:shadow-md transition-all">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-rose-200 dark:ring-rose-700">
                      <img src="/indian-woman-artisan-smiling.jpg" alt="Priya" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base text-rose-900 dark:text-rose-100">Priya Sharma</h4>
                      <p className="text-sm text-rose-700 dark:text-rose-300 mb-2">Master Bandhani Artist • Gujarat</p>
                      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
                        &quot;My grandmother taught me the ancient art of Bandhani tie-dye. With CraftRise&apos;s AI tools, I&apos;ve transformed our family tradition into a thriving global business. Each saree tells a story of heritage and hope.&quot;
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">₹3.2L Monthly Revenue</Badge>
                        <Badge className="text-xs bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200">500+ Global Orders</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white/80 dark:bg-white/8 rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-blue-200 dark:ring-blue-700">
                      <img src="/indian-male-potter-working-on-clay-pottery-wheel.jpg" alt="Rajesh" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base text-blue-900 dark:text-blue-100">Rajesh Kumar</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">Fifth-Generation Potter • Khurja, UP</p>
                      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
                        &quot;For 150 years, my family has shaped clay into art. PhotoEnhance Studio helped showcase our pottery in modern settings, attracting interior designers worldwide. Technology preserves our heritage beautifully.&quot;
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Heritage Preserved</Badge>
                        <Badge className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Featured in Museums</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/80 dark:bg-white/8 rounded-xl border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-200 dark:ring-purple-700">
                      <img src="/indian-elderly-woman-weaving-on-traditional-handlo.jpg" alt="Meera" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base text-purple-900 dark:text-purple-100">Meera Devi</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">Handloom Weaver • Varanasi</p>
                      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
                        &quot;Every thread in my Banarasi sarees carries centuries of tradition. CraftRise&apos;s AI storytelling helped customers understand the soul behind each weave. Now brides from 15 countries wear our artistry.&quot;
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">International Recognition</Badge>
                        <Badge className="text-xs bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">Award Winner</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-cyan-50/80 dark:from-emerald-900/20 dark:via-teal-900/10 dark:to-cyan-900/20 border-0 shadow-xl craft-float overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-bl-full"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2 text-emerald-800 dark:text-emerald-200">
                    <Sparkles className="h-5 w-5" />
                    Featured Artisan Crafts
                  </CardTitle>
                  <CardDescription className="text-emerald-600 dark:text-emerald-400">
                    Discover exceptional handcrafted treasures from master artisans
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="group p-4 bg-white/80 dark:bg-white/8 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-lg hover:scale-[1.02] transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-emerald-200 dark:ring-emerald-700 bg-gradient-to-br from-amber-100 to-red-100 dark:from-amber-900/50 dark:to-red-900/50 flex items-center justify-center">
                        <img 
                          src="/artisan-hands-crafting-traditional-jewelry.jpg" 
                          alt="Traditional Handcrafted Jewelry" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base text-emerald-900 dark:text-emerald-100">Rajasthani Silver Jewelry</h4>
                        <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">Handcrafted by Amit Singh • Jaipur</p>
                        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                          Intricate silver work passed down through seven generations, featuring traditional Kundan and Meenakari techniques.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-emerald-100 dark:border-emerald-800">
                      <Badge className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Royal Heritage</Badge>
                      <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">₹15,000 - ₹85,000</span>
                    </div>
                  </div>

                  <div className="group p-4 bg-white/80 dark:bg-white/8 rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg hover:scale-[1.02] transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-blue-200 dark:ring-blue-700">
                        <img src="/image2.jpeg" alt="Pottery" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base text-blue-900 dark:text-blue-100">Blue Pottery Collection</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">Created by Rajesh Kumar • Khurja</p>
                        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                          Elegant ceramic pieces featuring cobalt blue glazes and Persian-inspired motifs, perfect for modern homes.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-blue-100 dark:border-blue-800">
                      <Badge className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Museum Quality</Badge>
                      <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">₹2,500 - ₹12,000</span>
                    </div>
                  </div>

                  <div className="group p-4 bg-white/80 dark:bg-white/8 rounded-xl border border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg hover:scale-[1.02] transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-purple-200 dark:ring-purple-700">
                        <img src="/image3.jpeg" alt="Textiles" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base text-purple-900 dark:text-purple-100">Banarasi Silk Sarees</h4>
                        <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">Woven by Meera Devi • Varanasi</p>
                        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                          Luxurious silk sarees with gold and silver brocade work, taking 2-6 months to complete each masterpiece.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-purple-100 dark:border-purple-800">
                      <Badge className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Bridal Collection</Badge>
                      <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">₹25,000 - ₹150,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Heritage Craft Collections */}
            <div className="space-y-8 reveal-on-scroll">
              <Card className="bg-gradient-to-r from-amber-50/80 to-orange-100/80 dark:from-amber-900/20 dark:to-orange-900/20 border-0 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200/15 to-amber-200/15 rounded-tr-full"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-amber-800 dark:text-amber-200 text-2xl font-bold">Master Craft Collections</CardTitle>
                  <CardDescription className="text-lg text-amber-700 dark:text-amber-300">
                    Where ancient wisdom meets modern innovation • Preserving cultural heritage through technology
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group text-center p-6 bg-white/80 dark:bg-white/8 rounded-2xl hover:bg-white/95 dark:hover:bg-white/12 transition-all transform hover:scale-105 hover:shadow-xl border border-amber-200/50 dark:border-amber-700/50">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden ring-4 ring-amber-200/50 dark:ring-amber-700/50 group-hover:ring-amber-300 dark:group-hover:ring-amber-600 transition-colors">
                          <img src="/artisan-hands-crafting-traditional-jewelry.jpg" alt="Traditional Lamp Making" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-sm">
                          🪔
                        </div>
                      </div>
                      <h4 className="font-bold text-lg mb-3 text-amber-900 dark:text-amber-100">Heritage Diyas</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                        Hand-sculpted clay lamps from Uttar Pradesh, illuminating homes and festivals worldwide with traditional artistry and modern elegance.
                      </p>
                      <div className="space-y-2">
                        <Badge className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">8,500+ Global Orders</Badge>
                        <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">Featured in 25+ Countries</p>
                      </div>
                    </div>

                    <div className="group text-center p-6 bg-white/80 dark:bg-white/8 rounded-2xl hover:bg-white/95 dark:hover:bg-white/12 transition-all transform hover:scale-105 hover:shadow-xl border border-green-200/50 dark:border-green-700/50">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden ring-4 ring-green-200/50 dark:ring-green-700/50 group-hover:ring-green-300 dark:group-hover:ring-green-600 transition-colors">
                          <img src="/colorful-handwoven-textiles-traditional-patterns.jpg" alt="Khadi Weaving" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-sm">
                          🧵
                        </div>
                      </div>
                      <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-100">Khadi Renaissance</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                        Gandhi&apos;s vision reimagined - empowering rural women through sustainable handspun fabric that combines heritage with contemporary fashion.
                      </p>
                      <div className="space-y-2">
                        <Badge className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">18,000+ Women Empowered</Badge>
                        <p className="text-xs text-green-700 dark:text-green-300 font-medium">Eco-Friendly Movement</p>
                      </div>
                    </div>

                    <div className="group text-center p-6 bg-white/80 dark:bg-white/8 rounded-2xl hover:bg-white/95 dark:hover:bg-white/12 transition-all transform hover:scale-105 hover:shadow-xl border border-purple-200/50 dark:border-purple-700/50">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden ring-4 ring-purple-200/50 dark:ring-purple-700/50 group-hover:ring-purple-300 dark:group-hover:ring-purple-600 transition-colors">
                          <img src="/image1.jpg" alt="Royal Jewelry" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-sm">
                          💍
                        </div>
                      </div>
                      <h4 className="font-bold text-lg mb-3 text-purple-900 dark:text-purple-100">Royal Jewelry Legacy</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                        Rajasthani master jewelers creating exquisite pieces that blend ancient royal techniques with contemporary design for modern elegance.
                      </p>
                      <div className="space-y-2">
                        <Badge className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Ancient Techniques Preserved</Badge>
                        <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">Luxury Bridal Collection</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-slate-50/80 to-gray-100/80 dark:from-slate-900/20 dark:to-gray-900/20 border-0 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200/10 to-blue-200/10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200/10 to-indigo-200/10 rounded-tr-full"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-slate-800 dark:text-slate-200 text-2xl font-bold flex items-center gap-3">
                    <TrendingUp className="h-6 w-6" />
                    Global Impact & Recognition
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
                    Transforming lives through traditional craftsmanship and modern technology
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center p-6 bg-white/80 dark:bg-white/8 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-lg transition-all group">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                        ₹
                      </div>
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">₹12.8 Cr</div>
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-1">Revenue Generated</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Directly supporting 2,150+ artisan families across India</p>
                    </div>
                    
                    <div className="text-center p-6 bg-white/80 dark:bg-white/8 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all group">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                        ♀
                      </div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">87%</div>
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-1">Women Entrepreneurs</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Leading the revival of traditional Indian crafts</p>
                    </div>
                    
                    <div className="text-center p-6 bg-white/80 dark:bg-white/8 rounded-2xl border border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg transition-all group">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                        ✨
                      </div>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">158</div>
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-1">Heritage Crafts</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Traditional techniques preserved and digitized</p>
                    </div>
                    
                    <div className="text-center p-6 bg-white/80 dark:bg-white/8 rounded-2xl border border-amber-200/50 dark:border-amber-700/50 hover:shadow-lg transition-all group">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                        🌍
                      </div>
                      <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">52</div>
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-1">Global Markets</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Countries celebrating Indian artisan excellence</p>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-r from-indigo-50/80 to-blue-50/80 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl border border-indigo-200/50 dark:border-indigo-700/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-bl-full"></div>
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-indigo-900 dark:text-indigo-100 mb-2">Empowering Artisan Communities</h4>
                          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                            Every purchase on CraftRise creates a ripple effect of positive change. We&apos;re not just connecting customers with beautiful handcrafted products—we&apos;re preserving centuries-old traditions, empowering skilled artisans, and building sustainable livelihoods that honor both heritage and innovation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/70 dark:bg-white/5 rounded-xl">
                          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">95%</div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Customer Satisfaction</p>
                        </div>
                        <div className="text-center p-4 bg-white/70 dark:bg-white/5 rounded-xl">
                          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">4.8★</div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Average Rating</p>
                        </div>
                        <div className="text-center p-4 bg-white/70 dark:bg-white/5 rounded-xl">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Artisan Support</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-6 justify-center">
                        <Badge className="text-sm px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700">#HandcraftedWithLove</Badge>
                        <Badge className="text-sm px-4 py-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700">#SustainableCrafts</Badge>
                        <Badge className="text-sm px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-700">#HeritagePreserved</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Final Section to ensure enough content */}
            <div className="text-center py-20 reveal-on-scroll">
              <div className="max-w-2xl mx-auto">
                <Sparkles className="h-16 w-16 text-primary mx-auto mb-6 animate-gentle-pulse" />
                <h2 className="text-3xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Your Craft Journey Continues
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Every creation tells a story, every technique carries tradition, and every sale builds bridges between cultures.
                </p>
                <Button size="lg" className="premium-hover">
                  Explore More Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
