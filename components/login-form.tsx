'use client'
import { authClient } from "@/lib/betterauthclient";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { redirect } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import Link from "next/link";

export default function LoginForm() {

  const [loading, setloading] = useState(false)
  const [error, setError] = useState("")

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;

    authClient.signIn.email({
      email: email,
      password: senha
    },
    {
      onSuccess: () => redirect("/painel"),
      onRequest: () => setloading(true),
      onResponse:() => setloading(false),
      onError: (ctx) => setError(ctx.error.message)
    }

  )
  }

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="senha">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="senha" name="senha" type="password" required />
              </Field>
              <Field>
                <Button type="submit" disabled={loading}>
                  {loading ? "carregando..." : "Login"}
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? 
                  <Link href="/register">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );

}