"use client";

import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className=" min-h-screen py-25 bg-[#F4F6FB]">
        <div className="mx-20">
          {/* 1st Column */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] items-start">
            {/* Left Column */}
            <div className="p-6">
              <div className="w-fit">
                <span className="flex items-center  gap-1  px-3  py-2 text-sm border border-black/30 rounded-full shadow-lg text-third ">
                  <div className="w-2 h-2 bg-third rounded-full" />
                  Contact Us
                </span>
              </div>
              <article className="text-pretty">
                <p className="text-4xl  mt-6 text-gray-600 ">
                  Do you have any inquiries about billing, sales, accounting or
                  request a technical support? Drop us a message here.
                </p>
              </article>
            </div>

            {/* Right Column */}
            <div className="w-full max-w-2xl justify-self-center border rounded-lg bg-white shadow-lg flex flex-col ">
              <div className="px-8 pt-8">
                <h2 className="text-3xl font-semibold text-third">
                  Get in Touch
                </h2>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
                <div className="md:col-span-2 flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    First Name
                  </label>
                  <input className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="md:col-span-2 flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    Last Name
                  </label>
                  <input className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="md:col-span-4 flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    placeholder="email@gmail.com"
                    className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-4 flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    placeholder="63+123456"
                    className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-4 flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    Message
                  </label>
                  <textarea
                    rows={8}
                    cols={80}
                    placeholder="Enter your message here..."
                    className="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-4 flex flex-col gap-1">
                  <button className="py-3 border rounded-full bg-third text-white text-md">
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
