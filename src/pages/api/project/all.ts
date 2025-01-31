import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../prisma/seed';
import { Handler } from '../types';

const handlers: Handler = {
    GET: async (req, res) => {
        const id = req.query["id"]

        try {
            const projects = await db.projects.findMany({
                where: {
                    userId: id as string
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
