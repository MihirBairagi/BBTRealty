"use client";
import React, { useState } from "react";
import Image from "next/image";
import BottomSheetMenu from "./BottomSheetMenu";

function FooterBottomMenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Bottom Bar */}
      <div  className={`fixed bottom-0 left-0  w-full bg-[#232323] flex items-center text-white z-[101] `}>
        <a
          href="https://wa.me/9999999030"
          target="_blank"
          className="flex items-center justify-center w-1/3 px-8 py-9"
        >
          <Image
            width={40}
            height={40}
            className="w-10 h-10 object-contain mr-4"
            src="/images/footer-bar-icon-1.png"
            alt="Whatsapp"
          />
          <p className="text-2xl">Whatsapp</p>
        </a>

        <a
          href="tel:+91 99999 990 30"
          className="flex items-center justify-center w-1/3 px-8 py-6"
        >
          <Image
            width={40}
            height={40}
            className="w-10 h-10 object-contain mr-4"
            src="/images/footer-bar-icon-2.png"
            alt="Call"
          />
          <p className="text-2xl">Call Us</p>
        </a>

        {/* MORE INFO */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex items-center justify-center w-1/3 px-8 py-6"
        >
          <Image
            width={40}
            height={40}
            className="w-10 h-10 object-contain mr-4"
            src="/images/footer-bar-icon-3.png"
            alt="More Info"
          />
          <p className="text-2xl">More Info</p>
        </button>
      </div>

      {/* Bottom Sheet Menu */}
      <BottomSheetMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

export default FooterBottomMenuBar;
