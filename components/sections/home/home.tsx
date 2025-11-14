"use client";

import { useRef } from "react";

export default function Details() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className="min-h-screen flex justify-center items-center">
        <div>Hello</div>
      </section>
    </>
  );
}
