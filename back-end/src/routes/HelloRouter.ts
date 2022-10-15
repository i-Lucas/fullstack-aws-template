import { Router } from "express";
import Hello from "../controllers/hello.js";

const helloRouter = Router();

helloRouter.get("/hello", Hello);

export default helloRouter;