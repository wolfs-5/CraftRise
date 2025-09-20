import * as React from "react";
import { Input } from "@/components/ui/input";

export function FormInput({ label, id, type = "text", required, placeholder, autoComplete }: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>
      <Input id={id} name={id} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} className="rounded-lg" />
    </div>
  );
}
