"use client";
import React from "react";

const VisitPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-[92%] max-w-[90rem] bg-white rounded-[3rem] px-[4rem] py-[4.5rem] lg:px-[6rem] lg:py-[5rem]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[2.5rem] top-[2.5rem] text-[2.5rem] text-black opacity-60 hover:opacity-100"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="mb-[0.5rem]">
          Experience It <span className="font-light">in Person</span>
        </h2>

        <p className="text-[#6b6b6b] para max-w-[55rem] mb-[3rem]">
          You’re just moments away from discovering your perfect home.
          Fill in a few details and we’ll take it from there.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
          <input
            type="text"
            placeholder="Name"
            className="border border-[#d9d9d9] rounded-[1.2rem] px-[2rem] h-[5.8rem] text-[1.5rem] outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-[#d9d9d9] rounded-[1.2rem] px-[2rem] h-[5.8rem] text-[1.5rem] outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-[#d9d9d9] rounded-[1.2rem] px-[2rem] h-[5.8rem] text-[1.5rem] outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white rounded-[1.2rem] h-[5.8rem] text-[1.5rem] flex items-center justify-center gap-[1rem] hover:bg-[#2a2a2a]"
          >
            Schedule Now <span className="text-[1.8rem]">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default VisitPopup;
