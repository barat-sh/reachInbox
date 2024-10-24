import { redisMailCache } from "..";

export const getMailFromRedis = async () => {
    const recent_mail = await redisMailCache.rpop("mail");
    console.log(recent_mail);
    return recent_mail;
}