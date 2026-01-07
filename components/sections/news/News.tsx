"use client";

import { useRef } from "react";

export default function News() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        id="news"
        ref={sectionRef}
        className="min-h-screen mx-auto relative bg-[#F4F6FB] py-20">
        <div>
          <span>News Section</span>
        </div>
      </section>
    </> 
  );
}
