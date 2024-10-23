import express from "express";
import gmailService from "../service/gmailService";

const route = express.Router();

route.get("/gmail", gmailService);

export default route;