import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../../prisma/seed';
import { Handler } from '../../types';
import { authMiddleware } from '../../middleware/jwt';

const handlers: Handler = {
    GET: async (req, res) => {
        const id = req.query["id"]

        try {
            const coms = await db.projects.findUnique({
                where: {
                    id: id as string,
                },
                select: {
                    comment: {
                        include: {
                            like: {
                                include: {
                                    user: true
                                }
                            }
                        }
                    }
                }
            })

            res.status(200).json(coms)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    POST: async (req, res, payload) => {
        const {content}: {content: string} = req.body
        const projectsId = req.query["projectsId"]

        try {
            const coms = await db.comment.create({
                data: {
                    content, userId: payload.id,
                    projectsId: projectsId as string
                }
            })
            res.status(200).json(coms)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    PUT: async (req, res) => {
        const {content}: {content: string} = req.body
        const id = req.query["id"]

        try {
            const coms = await db.comment.update({
                data: {
                    content
                },
                where: {
                    id: id as string
                }
            })
            res.status(200).json(coms)
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
