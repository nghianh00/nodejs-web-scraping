"use client";
export default function ClientComponent({ scraper }) {
  return (
    <div>
      <button
        className="flex min-h-screen flex-col items-center justify-between p-24"
        onClick={() => console.log("clicked")}
      >
        content
      </button>
      {scraper}
    </div>
  );
}
