import { Request, Response } from "express";

export default async function Hello(req: Request, res: Response) {

    res.send("hello Lucas").status(200);
};