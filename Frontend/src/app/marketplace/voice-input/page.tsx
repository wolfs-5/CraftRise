"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VoiceInputPage() {
  return (
    <div className="flex h-dvh bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto grid gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <Mic className="h-4 w-4" />
              </span>
              <h1 className="text-2xl font-semibold">Voice Input (Local Language)</h1>
            </div>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Record Product Details</CardTitle>
                <CardDescription>Speak naturally; we’ll transcribe and structure it</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Button className="bg-green-600 hover:bg-green-700">Start Recording</Button>
                  <Button variant="outline">Stop</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">(Demo stub — hook up a recorder/transcriber API later)</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
