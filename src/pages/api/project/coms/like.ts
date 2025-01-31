import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../../prisma/seed';
import { Handler } from '../../types';
import { authMiddleware } from '../../middleware/jwt';

const handlers: Handler = {
    PUT: async (req, res, payload) => {
        const commentId = req.query["commentId"] as string
        const status = req.query["status"] as "like" | "unlike"

        try {
            switch (status) {
                case 'like':
                    const like = await db.like.create({
                        data: {
                            commentId,
                            userId: payload.id
                        }
                    })
                    res.status(200).json(like)
                    break;
                case 'unlike':
                    const unlike = await db.like.deleteMany({
                        where: {
                            commentId,
                            userId: payload.id
                        }
                    })
                    res.status(200).json(unlike)
                default:
                    res.status(400)
                    break;
            }
            
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
