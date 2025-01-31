import { NextApiRequest, NextApiResponse } from "next";

export type Handler = Record<string, (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void>;