const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://news.naver.com/main/list.naver?mode=LS2D&mid=shm&sid1=105&sid2=732", { responseType: "arraybuffer" });
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const fs = require("fs");
    const dataArr = [];
    const dataPath = "./SecurityNews.json";
    const content = iconv.decode(html.data, "EUC-KR").toString();
    const $ = cheerio.load(content);
    const $bodyList = $("ul.type06_headline").children("li");

    $bodyList.each(function( i, elem) {
      ulList[i] = {
        id: i,
        title: $(this).find('dt a').text().replace(/[\n]/g, "").replace(/[\t]/g, ""),
        url: $(this).find('dt a').attr('href'),
        image_url: $(this).find('dt.photo a img').attr('src'),
        image_alt: $(this).find('dt.photo a img').attr('alt'),
        summary: $(this).find('dd span.lede').text(),
        //.slice(0, -11),
        date: $(this).find('dd span.date').text().replace(/[\t]/g, "")

      };
      if(i<11){
        dataArr.push(ulList[i]);
        fs.writeFileSync(dataPath, JSON.stringify(dataArr));
        console.log("json file");
      }
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));
  module.exports = {getHtml};
  