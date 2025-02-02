import bcrypt from "bcrypt"
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../prisma/seed';
import { Handler } from '../types';
import { getToken } from '../middleware/jwt';

const handlers: Handler = {
    POST: async (req, res) => {
        const user: { email: string, password: string } = req.body;

        try {
            const userfound = await db.users.findUnique({
                where: {
                    email: user.email
                }
            })

            if (userfound && bcrypt.compareSync(user.password, userfound?.password || "")) {
                const token = getToken(userfound)
                res.status(200).json({ token });
            }

            res.status(404).json({message: "user not found"})

        } catch (error) {
            res.status(500).json(error)
        }
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    const handle = handlers[method as keyof typeof handlers];

    if (handle) {
        return handle(req, res, { id: "" });
    }

    res.setHeader('Allow', Object.keys(handlers));
    return res.status(405).end(`Method ${method} Not Allowed`);
}
