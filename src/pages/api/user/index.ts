import { NextApiRequest, NextApiResponse } from 'next';
import { Handler, UserOmitedProps } from '../types';
import { authMiddleware } from '../middleware/jwt';
import { Users } from '@prisma/client';
import { db } from '../../../../prisma/seed';

const handlers: Handler = {
    PUT: async (req, res) => {
        const data: Partial<Omit<Users, UserOmitedProps>> = req.body
        const id = req.query["id"]

        try {

            if (!id || typeof(id) !== "string") {
                throw new Error("Id required")
            }

            await db.users.update({
                data,
                where: {
                    id
                }
            })
        } catch (error) {
            console.error("Erreur Prisma : ", error);
            res.status(500).json(error)
        }
    },
    GET: async (req, res) => {
        try {
            const users = await db.users.findMany()

            res.status(200).json(users)
        } catch (error) {
            console.error("Erreur Prisma : ", error);
            res.status(500).json(error)
        }
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    const handle = handlers[method as keyof typeof handlers];

    if (handle) {
        return handle(req, res);
    }

    res.setHeader('Allow', Object.keys(handlers));
    return res.status(405).end(`Method ${method} Not Allowed`);
}
