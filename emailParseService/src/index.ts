import express from "express";
import authRoute from "./route/authRoute";
import { config } from "dotenv";
import { google } from "googleapis";
import mailRoute from "./route/mailRoute";
import { Redis } from "@upstash/redis";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
config();

export const OAuth2Client = new google.auth.OAuth2(
    process.env.client_id,
    process.env.client_secret,
    process.env.redirect_uri
);

export const redisMailCache = new Redis({
    url: process.env.REDIS_ENDPOINT!,
    token: process.env.REDIS_PASSCODE!,
    enableAutoPipelining: true,
    retry: false
})

export const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

app.use("/auth", authRoute);
app.use("/mail", mailRoute);

app.listen(process.env.PORT, () => {
    console.log(`EmailParsingService started in port ` + process.env.PORT);
});