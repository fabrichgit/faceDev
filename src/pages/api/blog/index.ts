import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../prisma/seed';
import { Handler } from '../types';
import { authMiddleware } from '../middleware/jwt';

const handlers: Handler = {
    GET: async (req, res) => {
        const id = req.query["id"]

        try {
            const blogs = await db.blog.findUnique({
                where: {
                    id: id as string
                },
                include: {
                    user: true
                }
            })

            res.status(200).json(blogs)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    POST: async (req, res, payload) => {
        const data: { title: string, content: string } = req.body

        try {
            const created = await db.blog.create({
                data: {
                    ...data,
                    userId: payload.id
                }
            })
            res.status(200).json(created)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    PUT: async (req, res, payload) => {
        const id = req.query["id"] as string
        const data: Partial<{ title: string, content: string }> = req.body

        try {
            const created = await db.blog.update({
                data,
                where: {
                    userId: payload.id,
                    id
                }
            })
            res.status(200).json(created)
        } catch (error) {
            res.status(500).json(error)
        }
    },
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
