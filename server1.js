const express = require("express");
const {getHtml} = require("./crawl.js");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cron = require("node=cron");
const newsData = JSON.parse(newsJSON);

const SecurityNewsJSON = fs.readFileSync("./SecurityNews.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function getSecurityAsync() {
    const Security_data = await getSecurity();
    console.log("SecurityNews = ", Security_data);
    console.log(SecurityNewsJSON.text);
}

cron.schedule("*/1 * * * *", async () => {
    console.log("running a task every two minutes");
    await getSecurityAsync();
});

append.get("/api/security", async(req, res)=> {
    res.send(SecurityNewsJSON);
})

app.listen(port, () => console.log('Listening on port ${port}'));