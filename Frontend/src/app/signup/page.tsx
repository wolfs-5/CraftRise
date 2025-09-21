"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/auth/auth-layout";
import { FormInput } from "@/components/auth/form-input";

export default function SignupPage() {
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: replace with real signup; for now, redirect after "signup"
    router.push("/dashboard");
  };
  return (
    <AuthLayout title="Create your account" subtitle="Join a community that celebrates craftsmanship and story.">
      <form className="grid gap-4" onSubmit={onSubmit}>
        <FormInput id="name" label="Full name" placeholder="Aarti Sharma" required />
        <FormInput id="email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" required />
        <FormInput id="password" label="Password" type="password" autoComplete="new-password" placeholder="Create a strong password" required />
        <Button type="submit" className="mt-2 rounded-lg transition-transform hover:scale-[1.01]">Create account</Button>
      </form>
      <div className="mt-4 text-sm text-muted-foreground">Already have an account? <a href="/login" className="text-primary underline-offset-4 hover:underline">Log in</a>.</div>
    </AuthLayout>
  );
}
