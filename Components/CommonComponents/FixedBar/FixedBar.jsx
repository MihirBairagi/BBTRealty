"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import VisitPopup from './VisitPopup'

function FixedBar() {
  const barRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);


  // ===============================
  // Desktop-only IntersectionObserver
  // ===============================
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) {
      setIsFixed(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (barRef.current) observer.observe(barRef.current);

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsFixed(false);
        observer.disconnect();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ===============================
  // Toggle footer padding
  // ===============================
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    if (isFixed) {
      footer.classList.add("more-pad");
    } else {
      footer.classList.remove("more-pad");
    }

    return () => footer.classList.remove("more-pad");
  }, [isFixed]);

  return (
    <>
      {/* Placeholder to prevent layout jump (desktop only) */}
      <div className={isFixed ? "hidden lg:block" : ""}></div>

      <div
        ref={barRef}
        className={`visit-floating-box transition-all duration-300 z-80 lg:z-100 left-1/2 -translate-x-1/2 bottom-[0rem]  opacity-0
        ${
          isFixed
            ? "hidden lg:flex fixed bottom-[3rem] left-1/2 -translate-x-1/2  opacity-100"
            : "relative flex ml-0 mr-0 mb-[7rem  opacity-100]"
        }
        items-center justify-center w-max bg-[#161616] rounded-[3rem]
        py-[1.5rem] px-[3rem] mx-auto text-white
        lg:rounded-full lg:py-[2rem] 3xl:p-[4rem] `}
      >
        <div className="icon-box mr-[2.5rem]">
          <img
            className="w-[8rem] lg:w-[7rem] 3xl:w-[10rem]"
            src="/images/dp-proj-dp.webp"
            alt=""
          />
        </div>

        <div className="lg:flex lg:items-center">
          <div>
            <p className="max-[1023px]:text-[2rem] f-26 font-medium tracking-[-0.1rem] lg:tracking-[0] mb-[0.5rem] lg:mb-[1rem]">
              Plan a private walkthrough
            </p>
            <p className="max-[1023px]:text-[1.4rem] mb-[1rem] f-24 text-[#808080]">
              Limited visit slots available
            </p>
          </div>

          <div className="lg:ml-[3rem] 3xl:ml-[4.5rem]">
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                setOpenPopup(true);
              }}
              className="max-[1023px]:text-[1.5rem] max-[1023px]:h-[5rem]
              com-btn bg-black text-white border-[white] font-normal justify-center"
            >
              Request Visit
            </Link>

          </div>
        </div>
      </div>
      <VisitPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />

    </>
  );
}

export default FixedBar;
