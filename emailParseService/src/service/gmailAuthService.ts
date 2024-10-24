import { Request, Response } from "express"
import { OAuth2Client, SCOPES } from "..";

const gmailAuthService = (req: Request, res: Response) => {
    const authUrl = OAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    res.json({auth: authUrl})
}

export default gmailAuthService;