'use client';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Link from "next/link"
import { createUser } from "@/app/actions/actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export function CreateAccountForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const [state, formAction] = useActionState(createUser, null, "n/a")

    useEffect(() => {
        if(state?.message) {
            toast(state.message);
        }
    }, [state])

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an Account with Us!</CardTitle>
          <CardDescription>
            Enter your information below to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input
                  id="phone-number"
                  name="phone-number"
                  type="phone-number"
                  placeholder="(415) 555-5555"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="name">Name</Label>
                </div>
                <Input id="name" name="name" type="name" placeholder="John Smith" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href={"/"} className="underline underline-offset-4"> Go back to start</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
