import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import axios from "axios";

export default async function Scraper() {
  const dataArray = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://coinmarketcap.com/");
  await autoScroll(page);
  const data = await page.content();

  const $ = cheerio.load(data);
  $(".cOXNvh tbody")
    .find("tr")
    .each((index, el) => {
      const name = $(el).find(".kKpPOn").text();
      dataArray.push(name);
    });

  await browser.close();
  // axios.post(
  //   `https://web-scraping-fb6b7-default-rtdb.asia-southeast1.firebasedatabase.app/.json`,
  //   "test"
  // );
  return console.log(dataArray);
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
