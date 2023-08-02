"use client";

export default function HomePage({ children }) {
  return (
    <div>
      <button className="bg-cyan-100" onClick={() => console.log("clicked")}>
        content
      </button>
      <div className="p-40 bg-red-500">hello</div>
      {children}
    </div>
  );
}
