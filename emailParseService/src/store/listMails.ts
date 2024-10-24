import { google } from "googleapis";
import getTenMinutesAgoTimestamp from "./getTenMinutes";

async function listMails(auth: any) {
    const gmail = google.gmail({ version: 'v1', auth });
    const tenMinutesAgo = getTenMinutesAgoTimestamp();
    try{
        const listofMails = await gmail.users.messages.list({
            userId: 'me',
            maxResults: 5,
            q: `is:unread`,
        })
        if(listofMails.status){
            if(listofMails && listofMails.data && listofMails.data.messages){
                console.log("list is empty" + listofMails.data.messages)
                return listofMails.data.messages;
            }
        }
    }catch(err){
        console.log(err)
    }
    return "No Mails"
}

export default listMails;