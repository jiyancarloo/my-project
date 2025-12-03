"use client";

import { useRef } from "react";

export default function Awards() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        id="awards"
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center">
        <div>
          <span>Awards Section</span>
        </div>
      </section>
    </>
  );
}
