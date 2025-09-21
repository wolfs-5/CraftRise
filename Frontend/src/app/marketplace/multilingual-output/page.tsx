"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Globe } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function MultilingualOutputPage() {
  return (
    <div className="flex h-dvh bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto grid gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Globe className="h-4 w-4" />
              </span>
              <h1 className="text-2xl font-semibold">Multilingual Output</h1>
            </div>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Translate Product Details</CardTitle>
                <CardDescription>Enter a base description and choose languages</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Textarea placeholder="Enter your base description..." />
                <div className="flex gap-2 flex-wrap text-sm text-muted-foreground">
                  <span className="px-2 py-1 border rounded-md">English</span>
                  <span className="px-2 py-1 border rounded-md">Hindi</span>
                  <span className="px-2 py-1 border rounded-md">Bengali</span>
                  <span className="px-2 py-1 border rounded-md">Tamil</span>
                  <span className="px-2 py-1 border rounded-md">Marathi</span>
                </div>
                <Button className="w-fit">Generate Translations</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
