'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  

import { Button } from "@/components/ui/button"

import Link from "next/link"

const Welcome = () => {
  return (
    <div className="flex flex-col gap-6 text-center">
        <Card>
            <CardHeader>
                <CardTitle>Welcome to Kiddleton Trade Up!</CardTitle>
                <CardDescription>Please select an option</CardDescription>
            </CardHeader>
            <CardContent className="text-black">
                <div className="flex flex-col gap-6">
                    <Button asChild>
                        <Link href={"/new-user"}>New User</Link>
                    </Button>
                    <Button asChild>
                        <Link href={"/login"}>Log In</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Welcome