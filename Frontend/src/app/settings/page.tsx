"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { 
  Settings, 
  User, 
  Save, 
  Sparkles, 
  Sun, 
  Moon, 
  Monitor, 
  Palette, 
  Globe, 
  Shield, 
  CreditCard, 
  Upload, 
  Eye,
  Camera,
  Languages,
  Lock,
  Key,
  Database,
  Workflow
} from "lucide-react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect to set mounted to true after hydration
  useState(() => {
    setMounted(true);
  });

  if (!mounted) return null;

  return (
    <div className="flex theme-bg-gradient relative">
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
        <main className="p-6 bg-gradient-to-b from-transparent via-card/10 to-transparent smooth-scroll-element velocity-scale">
          <div className="max-w-7xl mx-auto grid gap-6 stagger-reveal">
            {/* Header */}
            <div className="text-center mb-12 reveal-on-scroll bg-gradient-to-br from-card/50 via-muted/20 to-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8 shadow-xl">
              <div className="flex justify-center items-center gap-4 mb-6">
                <Settings className="h-12 w-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Professional Settings</h1>
                <Sparkles className="h-12 w-12 text-secondary" />
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Configure your artisan workspace with enterprise-grade tools and personalization options
              </p>
              <Badge className="mt-4 bg-primary/10 text-primary border-primary/20">
                Pro Configuration
              </Badge>
            </div>

            {/* Professional Profile */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50/50 to-violet-50/30 dark:from-purple-900/20 dark:to-violet-900/10">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20">
                      <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">Professional Profile</CardTitle>
                      <CardDescription className="text-base">Complete your artisan professional information</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300">
                    Pro Account
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Artisan Display Name</label>
                    <Input placeholder="Master Craftsperson Name" className="bg-white/70 dark:bg-white/5 border-purple-200 dark:border-purple-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Professional Email</label>
                    <Input placeholder="professional@email.com" type="email" className="bg-white/70 dark:bg-white/5 border-purple-200 dark:border-purple-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Phone Number</label>
                    <Input placeholder="+1 (555) 123-4567" type="tel" className="bg-white/70 dark:bg-white/5 border-purple-200 dark:border-purple-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Website/Portfolio</label>
                    <Input placeholder="https://your-portfolio.com" className="bg-white/70 dark:bg-white/5 border-purple-200 dark:border-purple-800" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground">Professional Bio</label>
                  <textarea 
                    placeholder="Tell your craft story, heritage, and expertise..." 
                    className="w-full h-24 p-3 bg-white/70 dark:bg-white/5 border border-purple-200 dark:border-purple-800 rounded-lg resize-none"
                  />
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-100/50 to-violet-100/50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border border-purple-200/50 dark:border-purple-800/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Upload className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-700 dark:text-purple-300">Profile Image</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Upload a professional photo to represent your craftsmanship</p>
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300">
                    <Camera className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Settings */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50/50 to-teal-50/30 dark:from-emerald-900/20 dark:to-teal-900/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <Database className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Business Configuration</CardTitle>
                    <CardDescription className="text-base">Manage your artisan business settings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Business Name</label>
                    <Input placeholder="Your Craft Business Name" className="bg-white/70 dark:bg-white/5 border-emerald-200 dark:border-emerald-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Craft Specialty</label>
                    <Input placeholder="e.g., Handwoven Textiles, Pottery" className="bg-white/70 dark:bg-white/5 border-emerald-200 dark:border-emerald-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Location</label>
                    <Input placeholder="City, State, Country" className="bg-white/70 dark:bg-white/5 border-emerald-200 dark:border-emerald-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Years of Experience</label>
                    <Input placeholder="e.g., 15 years" type="number" className="bg-white/70 dark:bg-white/5 border-emerald-200 dark:border-emerald-800" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Language & Localization */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-900/20 dark:to-indigo-900/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                    <Languages className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">Language & Region</CardTitle>
                    <CardDescription className="text-base">Configure multilingual and regional preferences</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Primary Language</label>
                    <select className="w-full p-3 bg-white/70 dark:bg-white/5 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <option>English</option>
                      <option>हिंदी (Hindi)</option>
                      <option>বাংলা (Bengali)</option>
                      <option>தமிழ் (Tamil)</option>
                      <option>Español (Spanish)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground">Currency</label>
                    <select className="w-full p-3 bg-white/70 dark:bg-white/5 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <option>USD - US Dollar</option>
                      <option>INR - Indian Rupee</option>
                      <option>EUR - Euro</option>
                      <option>GBP - British Pound</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50/50 to-pink-50/30 dark:from-red-900/20 dark:to-pink-900/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20">
                    <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-red-700 dark:text-red-300">Privacy & Security</CardTitle>
                    <CardDescription className="text-base">Manage your account security and privacy settings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: Eye, title: "Profile Visibility", desc: "Control who can see your profile", enabled: true },
                    { icon: Camera, title: "Photo Privacy", desc: "Manage image usage permissions", enabled: true },
                    { icon: Globe, title: "Public Listings", desc: "Show products in public marketplace", enabled: false },
                    { icon: Lock, title: "Two-Factor Auth", desc: "Enhanced account security", enabled: false }
                  ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/60 dark:bg-white/5 rounded-lg border border-red-100 dark:border-red-900/30">
                      <div className="flex items-center gap-3">
                        <setting.icon className="h-5 w-5 text-red-600 dark:text-red-400" />
                        <div>
                          <div className="font-semibold text-sm">{setting.title}</div>
                          <div className="text-xs text-muted-foreground">{setting.desc}</div>
                        </div>
                      </div>
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-red-600 border-red-300 rounded focus:ring-red-500" 
                        defaultChecked={setting.enabled} 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Theme Settings */}
            <Card className="border-0 shadow-lg theme-section-amber theme-card-gradient reveal-on-scroll craft-float">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                    <Palette className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-amber-700 dark:text-amber-300">Theme & Appearance</CardTitle>
                    <CardDescription className="text-base">Customize the look and feel of your workspace</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Light", value: "light", icon: Sun, description: "Bright and clean interface" },
                    { name: "Dark", value: "dark", icon: Moon, description: "Easy on the eyes" },
                    { name: "System", value: "system", icon: Monitor, description: "Follow device setting" },
                  ].map((themeOption) => (
                    <div 
                      key={themeOption.value} 
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all group ${
                        theme === themeOption.value 
                          ? 'border-amber-500 bg-amber-100/50 dark:bg-amber-900/30 shadow-md' 
                          : 'border-border bg-white/30 dark:bg-white/5 hover:border-amber-300 hover:bg-white/50 dark:hover:bg-white/10'
                      }`}
                      onClick={() => setTheme(themeOption.value)}
                    >
                      <div className="flex items-center justify-center flex-col gap-2">
                        <themeOption.icon className={`h-8 w-8 ${
                          theme === themeOption.value 
                            ? 'text-amber-600 dark:text-amber-400' 
                            : 'text-amber-600/60 dark:text-amber-400/60 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                        }`} />
                        <span className={`font-medium text-sm ${
                          theme === themeOption.value 
                            ? 'text-amber-700 dark:text-amber-300' 
                            : 'text-foreground/80 group-hover:text-foreground'
                        }`}>
                          {themeOption.name}
                        </span>
                        <span className="text-xs text-muted-foreground text-center">
                          {themeOption.description}
                        </span>
                      </div>
                      {theme === themeOption.value && (
                        <div className="mt-2 text-center">
                          <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-200/50 dark:bg-amber-800/50 rounded-full text-xs text-amber-700 dark:text-amber-300">
                            <Sparkles className="h-3 w-3" />
                            Active
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200/50 dark:border-amber-800/50">
                  <h4 className="font-medium text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Theme Preview
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    See how your selected theme affects the interface colors and patterns.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { name: "Background", class: "bg-background" },
                      { name: "Card", class: "bg-card" },
                      { name: "Primary", class: "bg-primary" },
                      { name: "Accent", class: "bg-accent" }
                    ].map((color) => (
                      <div key={color.name} className="text-center">
                        <div className={`w-full h-8 ${color.class} rounded border border-border mb-1`}></div>
                        <span className="text-xs text-muted-foreground">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API & Integrations */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-900/20 dark:to-emerald-900/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                    <Workflow className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-300">API & Integrations</CardTitle>
                    <CardDescription className="text-base">Connect with external services and tools</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Instagram Business", status: "Connected", color: "text-green-600" },
                    { name: "Facebook Shop", status: "Not Connected", color: "text-gray-500" },
                    { name: "Etsy Integration", status: "Connected", color: "text-green-600" },
                    { name: "Google Analytics", status: "Not Connected", color: "text-gray-500" }
                  ].map((integration, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/60 dark:bg-white/5 rounded-lg border border-green-100 dark:border-green-900/30">
                      <div>
                        <div className="font-semibold text-sm">{integration.name}</div>
                        <div className={`text-xs ${integration.color}`}>{integration.status}</div>
                      </div>
                      <Button size="sm" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-300">
                        {integration.status === "Connected" ? "Manage" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200/50 dark:border-green-800/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Key className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="font-semibold text-green-700 dark:text-green-300">API Keys</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Manage your API keys for third-party integrations</p>
                  <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-300">
                    <Key className="mr-2 h-4 w-4" />
                    Manage API Keys
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Save Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary shadow-lg">
                <Save className="mr-2 h-5 w-5" />
                Save All Settings
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-muted-foreground/20 hover:bg-muted/50">
                <Upload className="mr-2 h-5 w-5" />
                Export Configuration
              </Button>
            </div>

            {/* Professional Footer */}
            <div className="text-center py-8 bg-gradient-to-br from-muted/30 to-card/60 rounded-2xl border border-border/50">
              <div className="flex justify-center items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-semibold text-primary">Enterprise Grade Security</span>
              </div>
              <p className="text-sm text-muted-foreground">
                All settings are automatically encrypted and backed up. Your artisan data is secure and private.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
