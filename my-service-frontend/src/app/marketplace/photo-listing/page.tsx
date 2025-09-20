"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PhotoListingPage() {
  return (
    <div className="flex h-dvh bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto grid gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                <Camera className="h-4 w-4" />
              </span>
              <h1 className="text-2xl font-semibold">Photo Upload + AI Listing</h1>
            </div>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upload Product Photos</CardTitle>
                <CardDescription>Drop images to generate title, highlights, and a story</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-dashed rounded-lg p-8 text-center text-muted-foreground">
                  Drag and drop images here or
                  <Button variant="link" className="ml-1 p-0 h-auto">browse</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
