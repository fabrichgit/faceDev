// pages/api/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Handler } from '../types';
import { authMiddleware } from '../middleware/jwt';

const handlers: Handler = {
    GET: async (req, res) => {

        try {
            const auth = await authMiddleware(req)
            
            res.status(200).json(auth)
        } catch (error) {
            console.error("Erreur Prisma : ", error);
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
