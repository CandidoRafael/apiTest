import { Router } from "express";
import { welcomeRouter } from "./welcome.js";
import { apiRouter } from "./api.js";

const router = Router();

router.use('/api', apiRouter);
router.use('/welcome', welcomeRouter);

export default router;