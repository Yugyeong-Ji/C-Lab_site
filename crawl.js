const axios = require("axios");
const cheerio = require("cheerio");
const Iconv = require('iconv-lite');
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://news.naver.com/main/list.naver?mode=LS2D&mid=shm&sid1=105&sid2=732");
  } catch (error) {
    console.error(error);
  }
};


getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
        const $bodyList = $("div.list_body.newsflash_body ul.type06_headline li").children("dl");
        $bodyList.each(function(i, elem) {
          ulList[i] = {
              title: $(this).find('dt a').text(),
              url: $(this).find('dt a').attr('href'),
              image_url: $(this).find('dt.photo a img').attr('src'),
              image_alt: $(this).find('dt.photo a img').attr('alt'),
              summary: $(this).find('dd span.lede').text(),
              //.slice(0, -11),
              date: $(this).find('dd span.date').text()
    };
  });
  
  const data = ulList.filter(n=> n.title);
  return data;
})
.then(res => log(res));
