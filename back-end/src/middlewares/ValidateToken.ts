import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import error from "../utils/error.js";

export async function ValidateToken(req: Request, res: Response, next: NextFunction) {

	const { authorization } = req.headers;
	const token = authorization?.replace("Bearer ", "").trim();
	if (!token) error.Unauthorized("No token provided");

	const user = jwt.verify(token, process.env.JWT_SECRET);
	res.locals.user = user;

	next();
};