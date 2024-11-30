import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className=" max-w-5xl mx-auto px-4">
        <div className="mb-2">
          <Link
            href={"/"}
            className="white font-bold text-xl tracking-tighter italic overline relative z-40"
          >
            Animals
          </Link>
        </div>
        <p className="text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} Animals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
