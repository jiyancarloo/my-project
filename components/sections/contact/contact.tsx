"use client";

import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  return (
    <>
      <section id="contact" ref={sectionRef} className="min-h-screen">
        <div>Hello</div>
      </section>
    </>
  );
}
