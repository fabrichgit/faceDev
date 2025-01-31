import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";
import { db } from "../../../../prisma/seed";
import { Users } from "@prisma/client";

import("dotenv").then(dot => dot.config());

export const authMiddleware = async (req: NextApiRequest): Promise<Error | Users> => {
    const token = req.headers.authorization;

    if (!token) {
        throw new Error("Accès non autorisé, token manquant");
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET || "") as { id: string };

        const user = await db.users.findUnique({
            where: {
                id: decoded.id
            }
        })

        if (user) {
            return user
        }

        throw new Error("user not found")

    } catch (err) {
        throw new Error(JSON.stringify(err));
    }
};

export const getToken = (user: Users) => {
    try {
        return jwt.sign({ id: user.id }, process.env.JWT_SECRET || "")
    } catch (err) {
        throw new Error(err as string);
    }
}