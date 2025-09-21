"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialContentPage() {
  return (
    <div className="flex h-dvh bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto grid gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                <Share2 className="h-4 w-4" />
              </span>
              <h1 className="text-2xl font-semibold">Social Media Content</h1>
            </div>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Generate Captions & Hashtags</CardTitle>
                <CardDescription>Quick stubs; connect to real AI endpoints later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button>Instagram Caption</Button>
                  <Button variant="outline">WhatsApp Share</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
