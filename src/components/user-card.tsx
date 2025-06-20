'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link";

interface UserProps {
    id: string;
    name: string;
    phoneNumber: string;
    points: number;
}

const UserCard: React.FC<UserProps> = ({
    name,
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
                  <Label>You have: <span className="text-orange-500">{points} points</span></Label>
                  <Label>Talk to the staff about how to trade in your points!</Label>
                </div>
                <div className="mt-4 text-center text-sm">
                  <Link href={"/"} className="underline underline-offset-4"> Go back to start</Link>
                </div>
              </div>  
          </CardContent>
        </Card>
      </div>
    )
}

export default UserCard;
