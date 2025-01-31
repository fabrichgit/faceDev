// pages/api/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../prisma/seed';
import { Handler } from '../types';

const handlers: Handler = {
  POST: async (req, res) => {
    const user = req.body;

    try {
      await db.users.create({
        data: user
      })

      res.status(201).json(user);
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
