"use client";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Sun, Moon, Laptop, Cog, Bell, Shield, User } from "lucide-react";

function Toggle({ checked, onChange, disabled = false }: { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        "relative inline-flex h-5 w-9 items-center rounded-full border transition-colors",
        checked ? "bg-foreground text-background" : "bg-muted text-muted-foreground",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <span className={cn("inline-block h-4 w-4 transform rounded-full bg-background transition-transform", checked ? "translate-x-4" : "translate-x-1")} />
    </button>
  );
}

export default function SettingsPage() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [emailNoti, setEmailNoti] = useState(true);
  const [pushNoti, setPushNoti] = useState(true);
  const [marketingNoti, setMarketingNoti] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

  useEffect(() => {
    // Ensure current theme reflects system when mode is system
    if (theme === "system" && systemTheme) {
      // noop, just reading to re-render on changes
    }
  }, [theme, systemTheme]);

  return (
    <div className="flex h-dvh bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto grid gap-6">
            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg border inline-flex items-center justify-center"><Cog className="h-5 w-5" /></div>
              <div>
                <h1 className="text-3xl font-semibold">Settings</h1>
                <p className="text-muted-foreground">Customize your dashboard experience</p>
              </div>
            </div>

            {/* Appearance */}
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">Appearance</CardTitle>
                </div>
                <CardDescription>Customize the look and feel of your dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium mb-2">Theme</div>
                <div className="flex gap-2">
                  <Button variant={theme === "light" ? "default" : "outline"} onClick={() => setTheme("light")}>
                    <Sun className="h-4 w-4" /> Light
                  </Button>
                  <Button variant={theme === "dark" ? "default" : "outline"} onClick={() => setTheme("dark")}>
                    <Moon className="h-4 w-4" /> Dark
                  </Button>
                  <Button variant={theme === "system" ? "default" : "outline"} onClick={() => setTheme("system")}>
                    <Laptop className="h-4 w-4" /> System
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2"><Bell className="h-5 w-5" /><CardTitle className="text-lg">Notifications</CardTitle></div>
                <CardDescription>Manage your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Email Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive updates via email</div>
                  </div>
                  <Toggle checked={emailNoti} onChange={setEmailNoti} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Push Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive browser notifications</div>
                  </div>
                  <Toggle checked={pushNoti} onChange={setPushNoti} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Marketing Emails</div>
                    <div className="text-sm text-muted-foreground">Receive promotional content</div>
                  </div>
                  <Toggle checked={marketingNoti} onChange={setMarketingNoti} />
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2"><Shield className="h-5 w-5" /><CardTitle className="text-lg">Privacy & Security</CardTitle></div>
                <CardDescription>Manage your privacy and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Analytics</div>
                    <div className="text-sm text-muted-foreground">Help improve our service with usage data</div>
                  </div>
                  <Toggle checked={analytics} onChange={setAnalytics} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Data Sharing</div>
                    <div className="text-sm text-muted-foreground">Share anonymized data for research</div>
                  </div>
                  <Toggle checked={dataSharing} onChange={setDataSharing} />
                </div>
              </CardContent>
            </Card>

            {/* Account */}
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2"><User className="h-5 w-5" /><CardTitle className="text-lg">Account</CardTitle></div>
                <CardDescription>Manage your account settings</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button variant="outline">Change Password</Button>
                <Button variant="outline">Update Profile</Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Delete Account</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
