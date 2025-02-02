import bcrypt from "bcrypt"
import { NextApiRequest, NextApiResponse } from 'next';1
import { db } from '../../../../prisma/seed';
import { Handler } from '../types';

const handlers: Handler = {
  POST: async (req, res) => {
    const user = req.body;

    try {
      user.password = bcrypt.hashSync(user.password, 10)

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
    return handle(req, res, {id: ""});
  }

  res.setHeader('Allow', Object.keys(handlers));
  return res.status(405).end(`Method ${method} Not Allowed`);
}
