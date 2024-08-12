import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
};

//globalThis no es afectado por hot reload, por eso lo hacemos de esta forma para developper mode, por el hot reload
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db