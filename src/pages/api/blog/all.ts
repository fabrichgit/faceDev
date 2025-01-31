import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../prisma/seed';
import { Handler } from '../types';
import { authMiddleware } from '../middleware/jwt';

const handlers: Handler = {
    GET: async (req, res) => {
        const userId = req.query["userId"]

        try {
            const projects = await db.blog.findMany({
                where: {
                    userId: userId as string
                }
            })

            res.status(200).json(projects)
        } catch (error) {
            res.status(500).json(error)
        }
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    const handle = handlers[method as keyof typeof handlers];

    if (handle) {
        const payload = await authMiddleware(req, res)!
        return handle(req, res, payload!);
    }

    res.setHeader('Allow', Object.keys(handlers));
    return res.status(405).end(`Method ${method} Not Allowed`);
}
