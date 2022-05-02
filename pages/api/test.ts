// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient();
const actions = {
    "GET": get
}

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    return actions[req.method](req, res);
}

async function get(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const questions = await prisma.quiz.findMany();
    res.status(200).json(questions);
}
