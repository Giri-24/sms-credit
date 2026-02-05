
import { Router } from "express";
const router = Router();
router.get("/brands", (_, res) => res.json([]));
export default router;
