import { Request, Response } from "express";
import { OAuth2Client } from "..";
import listMails from "../store/listMails";
import { redisMailCache } from "..";

const gmailMailService = async (req: Request, res: Response) => {
    const code: string | undefined | any = req.query.code;
    OAuth2Client.getToken(code || "",async (err, token) => {
        if (err) {
          return;
        }
        if(token){
            OAuth2Client.setCredentials(token);
            const listOfUnreadMails = await listMails(OAuth2Client);
            if(listOfUnreadMails != "No Mails"){
                console.log("ht")
                for(let i = 0; i < listOfUnreadMails.length; i++){
                    const mail = {
                        mailId: listOfUnreadMails[i],
                        token: token
                    }
                    await redisMailCache.lpush("mail", JSON.stringify(mail));
                }
            }
        }
        });
    res.json({ code: code })
}

export default gmailMailService;