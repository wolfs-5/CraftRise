"use client";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { DollarSign, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [margin, setMargin] = useState("40");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState<string | null>(null);

  const canGenerate = useMemo(() => !!cost.trim() && !!margin.trim(), [cost, margin]);

  const recommend = (e?: React.FormEvent) => {
    e?.preventDefault();
    const c = parseFloat(cost || "0");
    const m = parseFloat(margin || "0");
    if (!isFinite(c) || !isFinite(m)) return setPrice(null);
    const p = c * (1 + m / 100);
    setPrice(p.toFixed(2));
  };

  return (
    <div className="flex h-dvh bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto grid gap-6">
            {/* Title */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                  <DollarSign className="h-4 w-4" />
                </span>
                <h1 className="text-2xl md:text-3xl font-semibold">Pricing Assistant</h1>
              </div>
              <p className="text-muted-foreground">Get AI-powered pricing recommendations based on market analysis and your business goals</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left form */}
              <Card className="lg:col-span-2 border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full border border-border flex items-center justify-center text-muted-foreground">•</div>
                    <CardTitle className="text-lg">Product Information</CardTitle>
                  </div>
                  <CardDescription>Provide details about your product for accurate pricing analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={recommend} className="grid gap-4">
                    <div>
                      <div className="text-sm font-medium mb-1">Product Name</div>
                      <Input placeholder="Enter your product name..." value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                      <div>
                        <div className="text-sm font-medium mb-1">Category</div>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className={cn(
                            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                          )}
                        >
                          <option value="">Select product category</option>
                          <option>Clothing</option>
                          <option>Home & Living</option>
                          <option>Accessories</option>
                          <option>Beauty</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium mb-1">Cost Price ($)</div>
                        <Input type="number" placeholder="0.00" value={cost} onChange={(e) => setCost(e.target.value)} />
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">Target Margin (%)</div>
                        <Input type="number" placeholder="40" value={margin} onChange={(e) => setMargin(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Product Description (Optional)</div>
                      <textarea
                        placeholder="Describe your product features, quality, target audience..."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className={cn(
                          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input min-h-24 w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                        )}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={!canGenerate}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white w-full h-10"
                    >
                      <BarChart3 className="h-4 w-4" />
                      Generate Pricing Recommendation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Right analysis */}
              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Pricing Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  {!price ? (
                    <div className="flex flex-col items-center justify-center text-center py-16">
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                        <DollarSign className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="font-medium">Enter your product details to get AI-powered pricing recommendations</div>
                      <p className="text-sm text-muted-foreground mt-2">Our AI will analyze market trends, competitor pricing, and your cost structure</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Recommended Sale Price</div>
                      <div className="text-3xl font-semibold">${price}</div>
                      <div className="text-xs text-muted-foreground">Based on cost, target margin, and basic heuristics</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
