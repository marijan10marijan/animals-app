"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [hamburgerOpen]);

  return (
    <nav className="w-full py-4 sm:py-6 bg-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div>
          <Link
            href={"/"}
            className="white font-bold text-2xl tracking-tighter italic overline relative z-40"
            onClick={() => setHamburgerOpen(false)}
          >
            Animals
          </Link>
        </div>
        <div className="sm:gap-6 md:gap-8  hidden sm:flex">
          <Link
            href={"/about"}
            className="font-bold font-mono text-lg hover:scale-110 transition duration-200"
          >
            about.
          </Link>
          <Link
            href={"/blog"}
            className="font-bold font-mono text-lg hover:scale-110 transition duration-200"
          >
            blog.
          </Link>
        </div>
        {!hamburgerOpen && (
          <div
            className="flex flex-col gap-1 cursor-pointer sm:hidden relative z-40"
            onClick={() => setHamburgerOpen((prev) => !prev)}
          >
            <span className="bg-white h-[2px] w-6 rounde-md"></span>
            <span className="bg-white h-[2px] w-6 rounde-md"></span>
            <span className="bg-white h-[2px] w-6 rounde-md"></span>
          </div>
        )}
        {hamburgerOpen && (
          <p
            className="text-white font-bold  relative z-40"
            onClick={() => setHamburgerOpen((prev) => !prev)}
          >
            <X className="w-8 h-8 font-extrabold" />
          </p>
        )}
      </div>
      <div
        className={`fixed overflow-hidden top-0 left-0 w-full h-screen bg-slate-800 text-white flex flex-col gap-6 items-center justify-center font-bold font-mono text-lg z-20 transform ${
          hamburgerOpen
            ? "translate-y-0 translate-x-0"
            : "-translate-y-full translate-x-full"
        } transition-transform duration-700`}
      >
        <Link
          href={"/about"}
          className="text-3xl hover:scale-110 transition duration-200"
          onClick={() => setHamburgerOpen(false)}
        >
          about.
        </Link>
        <Link
          href={"/blog"}
          className="text-3xl hover:scale-110 transition duration-200"
          onClick={() => setHamburgerOpen(false)}
        >
          blog.
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
