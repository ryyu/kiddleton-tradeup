import { PrismaClient } from "../../generated/prisma/client";

// declare global {
//     var prisma: PrismaClient | undefined
// }

// const client = global.prisma || new PrismaClient()
// if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

// export default client;

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;