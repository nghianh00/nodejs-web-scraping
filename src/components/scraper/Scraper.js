import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

import { scrollPageToBottom } from "puppeteer-autoscroll-down";
import Modal from "../ui/Modal";
// let scraping = false;

export default async function Scraper() {
  let browser, page;
  const dataArray = [];

  // if (scraping === true) return;

  // scraping = true;
  // browser = await puppeteer.launch({ headless: "new" });
  // page = await browser.newPage();

  try {
    browser = await puppeteer.launch({ headless: "new" });
    page = await browser.newPage();
    await page.goto("https://coinmarketcap.com/");

    await scrollPageToBottom(page, { size: 1000 });
    console.time("time");
    const data = await page.content();
    console.timeEnd("time");
    const $ = cheerio.load(data);
    $(".cmc-table tbody")
      .find("tr")
      .each((index, el) => {
        const name = $(el).find(".kKpPOn").text();
        const price = $(el).find(".cmc-link span").text();
        dataArray.push({ name, price });
      });

    return (
      <ul>
        {dataArray.map((ea) => (
          <Modal>
            <li>{ea.name}</li>
          </Modal>
        ))}
      </ul>
    );
  } catch (err) {
    console.log(err.message);
  } finally {
    // await page.reload();
    // scraping = false;
    await browser.close();
  }
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
