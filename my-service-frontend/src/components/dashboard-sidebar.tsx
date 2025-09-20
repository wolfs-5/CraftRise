"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ShoppingCart, Hash, DollarSign, MessageCircle, Settings, ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home, description: "Your craft journey home" },
  { name: "Marketplace Assistant", href: "/marketplace", icon: ShoppingCart, description: "AI-powered listing magic", badge: "Popular" },
  { name: "Hashtag Expert", href: "/hashtag", icon: Hash, description: "Trending hashtags for reach" },
  { name: "Pricing Assistant", href: "/pricing", icon: DollarSign, description: "Smart pricing guidance" },
  { name: "Customer Service", href: "/customer-service", icon: MessageCircle, description: "Connect with customers" },
  { name: "Settings", href: "/settings", icon: Settings, description: "Customize your experience" },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out cultural-pattern",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header with logo and collapse button */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="relative">
              <Heart className="h-6 w-6 text-sidebar-primary" />
              <Sparkles className="h-3 w-3 text-secondary absolute -top-0.5 -right-0.5 animate-gentle-pulse" />
            </div>
            <h1 className="text-lg font-heading font-bold text-sidebar-foreground">CraftRise</h1>
          </div>
        )}
        <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="text-sidebar-foreground hover:bg-sidebar-accent">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Supportive message for artisans */}
      {!collapsed && (
        <div className="p-4 bg-gradient-to-r from-sidebar-primary/5 to-secondary/5 border-b border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/70 text-center italic">
            "Empowering your craft, one tool at a time" ✨
          </p>
        </div>
      )}

      {/* Navigation menu */}
      <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.name} className="relative group">
              <Link href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start transition-all duration-200 hover:scale-[1.02]",
                    collapsed ? "px-2" : "px-3 py-6",
                    isActive
                      ? "bg-gradient-to-r from-sidebar-primary to-secondary text-sidebar-primary-foreground shadow-lg animate-warm-glow"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className={cn("h-5 w-5 flex-shrink-0", collapsed ? "" : "mr-3")} />
                  {!collapsed && (
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.name}</span>
                        {item.badge && (
                          <Badge className="text-xs bg-secondary/20 text-secondary border-secondary/30">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs opacity-70 mt-1">{item.description}</p>
                    </div>
                  )}
                </Button>
              </Link>
              
              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-sidebar-primary text-sidebar-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                  {item.name}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer with encouraging message */}
      {!collapsed && (
        <div className="p-4 border-t border-sidebar-border bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="text-center">
            <p className="text-xs text-sidebar-foreground/60 mb-2">Your creative journey</p>
            <div className="flex justify-center space-x-1 text-sidebar-primary">
              <span className="animate-craft-float">🎨</span>
              <span className="animate-craft-float animation-delay-200">✨</span>
              <span className="animate-craft-float animation-delay-400">❤️</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
