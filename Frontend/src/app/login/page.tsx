"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/auth/auth-layout";
import { FormInput } from "@/components/auth/form-input";

export default function LoginPage() {
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: replace with real auth; for now, redirect after "login"
    router.push("/dashboard");
  };
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to continue your artisan journey.">
      <form className="grid gap-4" onSubmit={onSubmit}>
        <FormInput id="email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" required />
        <FormInput id="password" label="Password" type="password" autoComplete="current-password" placeholder="••••••••" required />
        <Button type="submit" className="mt-2 rounded-lg transition-transform hover:scale-[1.01]">Continue</Button>
      </form>
      <div className="mt-4 text-sm text-muted-foreground">Don’t have an account? <a href="/signup" className="text-primary underline-offset-4 hover:underline">Create one</a>.</div>
    </AuthLayout>
  );
}
