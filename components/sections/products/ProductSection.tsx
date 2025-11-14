"use client";
import { useRef } from "react";

export default function Products() {
  const sectionRef = useRef(null);
  return (
    <>
      <div
        id="product"
        ref={sectionRef}
        className="min-h-screen flex justify-center">
        <div>Hello</div>
      </div>
    </>
  );
}
