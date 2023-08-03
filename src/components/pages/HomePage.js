"use client";

import { useSelector, useDispatch } from "react-redux";
import { testSliceActions } from "@/store/testSlice";

export default function HomePage({ scraper }) {
  const dispatch = useDispatch();
  const buttonToggle = useSelector((state) => state.testSlice.toggle);

  function clickHandler() {
    dispatch(testSliceActions.toggle());
  }
  return (
    <div>
      <button
        className={`h-40 w-40 ${buttonToggle ? "bg-green-500" : "bg-red-500"}`}
        onClick={clickHandler}
      >
        Scrape
      </button>

      {scraper}
    </div>
  );
}
