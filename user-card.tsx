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
import Link from "next/link";

interface UserProps {
    id: number;
    name: string;
    phoneNumber: string;
    points: number;
}

const UserCard: React.FC<UserProps> = ({
    id, 
    name,
    phoneNumber,
    points
}) => {
    return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome Back, {name}!</CardTitle>
        </CardHeader>
        <CardContent> 
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label>You have: {points} points</Label>
                <Label>Talk to the staff about how to trade in your points!</Label>
              </div>
            </div>  
        </CardContent>
      </Card>
    </div>
    )
}

export default UserCard;
