import { NextApiRequest, NextApiResponse } from "next";

export type Handler = Record<string | "POST" | "PUT" | "GET", (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void>;

export type UserOmitedProps = "id" | "links" | "createdAt" | "createdAt" | "updatedAt" | "posts" | "projects" | "star" | "comment" | "like" | "password" | "skill"

export type ProjectOmitedProps = "id" | "user" | "comment" | "updatedAt" | "star" | "comment" | "like"