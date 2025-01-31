import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { db } from "../../../../prisma/seed";
import { Users } from "@prisma/client";

import("dotenv").then(dot => dot.config());

export interface Payload {
    id: string;
}

export const authMiddleware = async (req: NextApiRequest, res: NextApiResponse): Promise<Users | undefined> => {
    const token = req.headers.authorization;

    try {
        if (!token) {
            throw new Error("Accès non autorisé, token manquant");
        }
        
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET || "") as Payload;

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
        res.status(404).json({message: "Unauthorized", content: err})
    }
};

export const getToken = (user: Users) => {
    try {
        return jwt.sign({ id: user.id }, process.env.JWT_SECRET || "")
    } catch (err) {
        throw new Error(err as string);
    }
}