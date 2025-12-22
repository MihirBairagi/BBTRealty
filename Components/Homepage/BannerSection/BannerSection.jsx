"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bbtr-home-banner-section relative overflow-hidden">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hp-banner-compress.mp4"
        poster="/images/hp-banner-vid-poster.webp"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10">
        <div className="bbtr-home-banner-box pt-[55rem] pb-[8rem] lg:pt-[32vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
          
          <div
            className="lg:flex lg:items-center lg:justify-between"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="text-box text-white text-center lg:text-start lg:w-[50%]">
              <p className="max-[1023px]:text-[1.5rem] f-22 mb-[0.8rem] font-[200]">
                From the House of Big Boy Toyz
              </p>

              <h1 className="h1 font-[200] tracking-[-0.2rem] leading-[1.2]">
                Signature Spaces for an <strong>Elevated Lifestyle</strong>
              </h1>
            </div>

            <div className="icon-box mt-[3.5rem] flex justify-center">
              <Image
                src="/images/bbtr-h-down-arrow.webp"
                alt="Scroll Down"
                width={272}
                height={272}
                priority
                className="object-contain w-[8rem] lg:w-[9rem] xl:w-[11rem] 1xl:w-[13rem] 3xl:w-[17rem] hover:scale-[1.1] cursor-pointer transition-transform duration-300"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight * 1.15,
                    behavior: "smooth",
                  });
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
