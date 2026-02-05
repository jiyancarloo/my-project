"use client";

import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="py-30 lg:py-30 bg-[#F4F6FB]">
        <div className="px-4 sm:px-8 lg:mx-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="">
              <article className="text-pretty">
                <p className="text-xl sm:text-2xl lg:text-4xl text-third">
                  Do you have any inquiries about billing, sales, accounting, or
                  request technical support? Drop us a message here.
                </p>
              </article>
            </div>

            {/* Right Column / Form */}
            <div className="w-full max-w-2xl justify-self-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="md:col-span-4 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    First Name
                  </label>
                  <input
                    placeholder="e.g. John Smith"
                    className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    placeholder="email@gmail.com"
                    className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    placeholder="63+123456"
                    className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>

                <div className="md:col-span-4 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter your message here..."
                    className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 w-full resize-none"
                  />
                </div>

                <div className="md:col-span-4">
                  <button className="py-3 border rounded-full bg-third text-white text-md w-full">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
