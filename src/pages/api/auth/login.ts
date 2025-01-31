// pages/api/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../prisma/seed';
import { Handler } from '../type';
import { getToken } from '../middleware/jwt';

const handlers: Handler = {
    POST: async (req, res) => {
        const user: { name: string, email: string, password: string } = req.body;

        try {
            const userfound = await db.users.create({
                data: user
            })

            const token = getToken(userfound)

            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json(error)
        }
    },
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
