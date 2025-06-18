"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState, useEffect } from "react"
import { staffTradeUp } from "@/app/actions/actions"
import { toast } from "sonner"

export default function TradeUp() {
    const [state, formAction] = useActionState(staffTradeUp, null, "n/a")

    useEffect(() => {
        if(state?.message) {
        toast(state.message)
        }
    }, [state])


    return (
        <>
        <div className="flex flex-col gap-6">
            <Card>
            <CardHeader>
                <CardTitle>Account information for customer</CardTitle>
            </CardHeader>
            <CardContent> 
                <form action={formAction}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="customer-phone-number">Customer Phone Number</Label>
                            <Input
                                id="customer-phone-number"
                                name="customer-phone-number"
                                type="customer-phone-number"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="points-to-remove">Number of points to remove</Label>
                            <Input
                                id="points-to-remove"
                                name="points-to-remove"
                                type="number"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="type-of-prize">Type of prize traded up</Label>
                            <Input
                                id="type-of-prize"
                                name="type-of-prize"
                                type="string"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Button type="submit" className="w-full">
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
            </Card>
        </div>
        </>
    )
}