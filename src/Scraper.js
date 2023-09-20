import puppeteer from "puppeteer";

import * as cheerio from "cheerio";
import { scrollPageToBottom } from "puppeteer-autoscroll-down";

const dataArray = [];

export default async function Scraper() {
  let browser = await puppeteer.launch({ headless: "new" });
  let page = await browser.newPage();
  await page.goto("https://coinmarketcap.com/");

  await scrollPageToBottom(page, { size: 400 });
  // console.time("time");
  const data = await page.content();
  // console.timeEnd("time");
  const $ = cheerio.load(data);
  $(".cmc-table tbody")
    .find("tr")
    .each((index, el) => {
      const name = $(el).find(".kKpPOn").text();
      const price = $(el).find(".cmc-link span").text();
      dataArray.push({ name, price });
    });

  await page.close();
  await browser.close();

  return (
    <div>
      {dataArray.map((item) => (
        <div>
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
}
