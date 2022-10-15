import { Router } from "express";
import helloRouter from "./HelloRouter.js";

const router = Router();

router.use(helloRouter);

export default router;