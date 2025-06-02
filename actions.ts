'use server';

import prisma from "@/lib/prismadb";
import { redirect } from "next/navigation";

type User = {
    id: number,
    name: string,
    phoneNumber: string,
    points: number,
}

export async function createUser(prevState: any, formData: FormData) {

    const name = formData.get("name") as string;
    const phoneNumber = formData.get("phone-number") as string;

    // todo more checks here: valid phone number
    // todo put in try catch
    if(name && phoneNumber) {
        const user = await prisma.user.create({
            data: {
                name: name,
                phoneNumber: phoneNumber 
            }
        })
        if(user) {
            console.log(user);
            redirect("/ThankYou")
        }
    } 

    // I don't like returning null here tbh
    return { message: "Unable to create new account" };
}

export async function getUser(prevState: any, formData: FormData) {

    const phoneNumber = formData.get("phone-number") as string;

    console.log(phoneNumber)

    if(phoneNumber) {
        const user = await prisma.user.findUnique({
            where: {
                phoneNumber: phoneNumber
            }
        })

        if(user) {
            console.log(user);

            redirect(`/user/${user.id}`)
        }

        return { message: "Could not find account" };
    }    
    return { message: "Could not find account" };
}

export async function getUserById(id: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if(user) {
        return user
    }
    return null;
}