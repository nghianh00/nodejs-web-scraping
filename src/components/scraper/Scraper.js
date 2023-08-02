import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

import { scrollPageToBottom } from "puppeteer-autoscroll-down";
// let scraping = false;
export default async function Scraper() {
  // if (scraping === true) return;
  const dataArray = [];
  let browser, page;
  // scraping = true;
  browser = await puppeteer.launch({ headless: "new" });
  page = await browser.newPage();
  await page.goto("https://coinmarketcap.com/");
  await scrollPageToBottom(page, { size: 1000 });

  const data = await page.content();
  const $ = cheerio.load(data);
  $(".cmc-table tbody")
    .find("tr")
    .each((index, el) => {
      const name = $(el).find(".kKpPOn").text();
      const price = $(el).find(".cmc-link span").text();
      dataArray.push({ name, price });
    });

  await browser.close();
  return (
    <ul>
      {dataArray.map((ea) => (
        <li>{ea.name}</li>
      ))}
    </ul>
  );
  // try {
  //   test();
  // } catch (err) {
  //   console.log(err.message);
  // } finally {
  //   await page.reload();
  //   // scraping = false;
  //   await setTimeout(test, 5000);
  // }
}

// async function autoScroll(page) {
//   await page.evaluate(async () => {
//     await new Promise((resolve) => {
//       var totalHeight = 0;
//       var distance = 100;
//       var timer = setInterval(() => {
//         var scrollHeight = document.body.scrollHeight;
//         window.scrollBy(0, distance);
//         totalHeight += distance;

//         if (totalHeight >= scrollHeight - window.innerHeight) {
//           clearInterval(timer);
//           resolve();
//         }
//       }, 100);
//     });
//   });
// }
