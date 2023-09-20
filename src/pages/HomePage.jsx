import { useState } from "react";
import HomePageClient from "./HomePageClient";
import Scraper from "@/Scraper";
export default async function HomePage() {
  return (
    <>
      <HomePageClient />
      <Scraper />
    </>
  );
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
