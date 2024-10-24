import express from "express";
import gmailMailService from "../service/gmailMailService";
const router = express.Router();

router.get("/gmail", gmailMailService);

export default router;