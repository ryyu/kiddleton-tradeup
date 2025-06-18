'use server';

import prisma from "@/lib/prismadb";
import { redirect } from "next/navigation";

// type User = {
//     id: number,
//     name: string,
//     phoneNumber: string,
//     points: number,
// }

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
            redirect(`/user/${user.id}`)
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

export async function staffUpdateUser(prevState: any, formData: FormData) {
    const phoneNumber = formData.get("customer-phone-number") as string;
    const points = formData.get("points-to-add") as string;
    const numPrizes = formData.get("number-of-prizes-returned") as string;
    const prizeType = formData.get("type-of-prize") as string;
    // console.log(phoneNumber, points, numPrizes, prizeType);

    if(phoneNumber && points) {
        const updatedUser = await prisma.user.update({
            where: { phoneNumber: phoneNumber },
            data: { points: {
                increment: +points
            } }
        })
        if(updatedUser) {
            console.log(updatedUser);
        }
    }

    const newTradeupStat = await prisma.prizeStats.create({
        data: {
            numPrizesReturned: +numPrizes,
            numPointsAwarded: +points,
            prizeType: prizeType,
            customerPhoneNumber: phoneNumber
        }
    })
    console.log(newTradeupStat);
    return {message: "Successfully updated account"}
}

export async function staffTradeUp(prevState: any, formData: FormData) {
    const phoneNumber = formData.get("customer-phone-number") as string;
    const points = formData.get("points-to-remove") as string;
    const prizeType = formData.get("type-of-prize") as string;
    // console.log(phoneNumber, points, numPrizes, prizeType);

    if(phoneNumber && points) {
        const updatedUser = await prisma.user.update({
            where: { phoneNumber: phoneNumber },
            data: { points: {
                decrement: +points
            } }
        })
        if(updatedUser) {
            console.log(updatedUser);
        }
    }

    const newTradeupStat = await prisma.tradeUp.create({
        data: {
            numPointsRemoved: +points,
            prizeType: prizeType,
            customerPhoneNumber: phoneNumber
        }
    })
    console.log(newTradeupStat);
    return {message: "Successfully updated account"}
}