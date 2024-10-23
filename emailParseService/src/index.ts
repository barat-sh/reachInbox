import express from "express";
import emailRoute from "./route/emailRoute";
const app = express();

app.use("/mail", emailRoute)

app.listen(3001, () => {
    console.log("EmailParsingService started in port 3001");
});