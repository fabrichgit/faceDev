import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../prisma/seed';
import { Handler, ProjectOmitedProps } from '../types';
import { Projects, Users } from '@prisma/client';
import { authMiddleware } from '../middleware/jwt';

const handlers: Handler = {
    GET: async (req, res) => {
        const id = req.query["id"]

        try {
            const projects = await db.projects.findUnique({
                where: {
                    id: id as string
                },
                include: {
                    star: {
                        include: {
                            user: true
                        }
                    },
                    comment: {
                        include: {
                            user: true,
                            like: {
                                include: {
                                    user: true
                                }
                            }
                        }
                    }
                }
            })

            res.status(200).json(projects)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    POST: async (req, res, payload) => {
        const data: Omit<Projects , ProjectOmitedProps> = req.body

        try {

            const created = await db.projects.create({
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
        const id = req.query["id"]
        const data: Partial<Omit<Projects , ProjectOmitedProps>> = req.body

        try {

            const updated = await db.projects.update({
                data,
                where: {
                    userId: payload.id,
                    id: id as string
                }
            })
            res.status(200).json(updated)
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
