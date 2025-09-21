"use client";
import * as React from "react";

export function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 smooth-scroll-element velocity-scale">
      {/* Scroll progress indicator */}
      <div className="scroll-progress"></div>
      
      {/* Subtle cultural pattern overlay with parallax */}
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05] parallax-element pointer-events-none z-0" 
           data-speed="0.3"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}>
      </div>
      {/* Left: story/illustration */}
      <div className="relative hidden lg:flex items-center justify-center p-12 bg-gradient-to-b from-amber-50 to-stone-50 reveal-on-scroll craft-float z-10">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
          <div className="absolute -left-24 -top-24 size-[28rem] rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-16 bottom-10 size-[24rem] rounded-full bg-stone-300/30 blur-3xl" />
        </div>
        <div className="relative max-w-md text-center">
          <div className="mx-auto mb-6 size-16 rounded-2xl border bg-white/70 backdrop-blur-sm shadow-sm flex items-center justify-center">
            {/* Simple artisan glyph */}
            <svg width="28" height="28" viewBox="0 0 24 24" className="text-amber-700" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3l3 5-3 5-3-5 3-5Z" />
              <path d="M5 21h14l-7-8-7 8Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Empowering artisans to share their craft with the world</h2>
          <p className="mt-3 text-stone-600">Showcase your creations with warmth and authenticity. Our tools help your story reach the right audience.</p>
        </div>
      </div>

      {/* Right: form */}
      <div className="flex items-center justify-center p-6 sm:p-10 reveal-on-scroll z-10">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
            {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          <div className="bg-card border rounded-2xl shadow-sm p-6">{children}</div>
          <p className="mt-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Artisan Hub</p>
        </div>
      </div>
    </div>
  );
}
