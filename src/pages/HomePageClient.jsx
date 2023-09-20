"use client";
import { useState } from "react";
export default function HomePageClient() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [scraping, setScraping] = useState(false);

  return (
    <div>
      <button
        className={`h-40 w-40 ${toggle ? "bg-green-500" : "bg-red-500"}`}
        onClick={() => {
          setToggle((lastState) => !lastState);
          setScraping(true);
        }}
      >
        Scrape
      </button>
    </div>
  );
}
