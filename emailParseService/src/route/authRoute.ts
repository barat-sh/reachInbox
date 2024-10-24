import express from "express";
import gmailAuthService from "../service/gmailAuthService";

const route = express.Router();

route.get("/gmail", gmailAuthService);

export default route;