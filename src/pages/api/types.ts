import { NextApiRequest, NextApiResponse } from "next";
import { Payload } from "./middleware/jwt";

export type Handler = Record<string | "POST" | "PUT" | "GET", (req: NextApiRequest, res: NextApiResponse, payload: Payload) => Promise<void> | void>;

export type UserOmitedProps = "id" | "links" | "createdAt" | "createdAt" | "updatedAt" | "posts" | "projects" | "star" | "comment" | "like" | "password" | "skill"

export type ProjectOmitedProps = "id" | "user" | "comment" | "updatedAt" | "star" | "comment" | "like"