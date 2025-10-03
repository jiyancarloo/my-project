import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20  mx-auto">
      <div className="bg-black  backdrop-blur-md shadow-lg rounded-full px-6 py-2 flex items-center space-x-4">
        <div className="flex space-x-4 items-center">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <Button variant="ghost" className="text-white" key={index}>
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
