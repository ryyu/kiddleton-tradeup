"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import { staffTradeUp, staffUpdateUser } from "@/app/actions/actions"

export default function StaffDashboard() {
    const [updateState, updateFormAction] = useActionState(staffUpdateUser, null, "n/a")
    const [tradeUpState, tradeUpFormAction] = useActionState(staffTradeUp, null, "n/a")

    return (
        <>
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Tabs defaultValue="account">
                <TabsList>
                <TabsTrigger value="account">Trade In</TabsTrigger>
                <TabsTrigger value="password">Trade Up</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <div className="flex flex-col gap-6">
                        <Card>
                        <CardHeader>
                            <CardTitle>Account information for customer</CardTitle>
                        </CardHeader>
                        <CardContent> 
                            <div className="flex flex-col gap-6">
                                <form action={updateFormAction}>
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
                                            <Label htmlFor="points-to-add">Number of points to add</Label>
                                            <Input
                                                id="points-to-add"
                                                name="points-to-add"
                                                type="number"
                                                placeholder=""
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="number-of-prizes-returned">Number of prizes returned</Label>
                                            <Input 
                                                id="number-of-prizes-returned" 
                                                name="number-of-prizes-returned" 
                                                type="number" 
                                                placeholder="" 
                                                required />
                                            <Label htmlFor="type-of-prize">Type of prize returned</Label>
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
                                    </div>
                                </CardContent>
                                </Card>
                </div>
                </TabsContent>


                <TabsContent value="password">
                    <Card>
            <CardHeader>
                <CardTitle>Account information for customer</CardTitle>
            </CardHeader>
            <CardContent> 
                <form action={tradeUpFormAction}>
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
                </TabsContent>
            </Tabs>
        </div>





        </>
    )
}

