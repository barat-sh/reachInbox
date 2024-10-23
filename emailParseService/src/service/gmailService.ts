import { Request, Response } from "express"
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const OAuth2Client = new OAuth2(

);

const gmailService = (req: Request, res: Response) => {
    res.json({gmail: "jkldnv"})
}

export default gmailService;