"use client";

import { useRef } from "react";

export default function News() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        id="news"
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center">
        <div>
          <span>News Section</span>
        </div>
      </section>
    </>
  );
}
