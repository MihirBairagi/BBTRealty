"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
   
    <section className='bbtr-home-banner-section bg-black' >
        <div className="container">
            <div className="bbtr-home-banner-box pt-[55rem] pb-[8rem] lg:pt-[32vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
                <div className="lg:flex lg:items-center lg:justify-between"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="text-box text-white text-center lg:text-start lg:w-[50%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 mb-[0.8rem] font-[200]' >A new chapter in luxury living</p>
                        <h1 className='h1 font-[200] tracking-[-0.2rem] leading-[1.2]' >Discover signature spaces <strong>by bbt realty.</strong></h1>
                    </div>
                    <div className="icon-box mt-[3.5rem]" >
                            <img
                                src="/images/bbtr-h-down-arrow.webp"
                                alt="Banner Icon"
                                className=" object-contain w-[8rem]  lg:w-[9rem] xl:w-[11rem] 1xl:w-[13rem] 3xl:w-[17rem] mx-auto"
                            />
                    </div>
                </div>
            </div>
        </div>
    </section>

   


  )
}

export default BannerSection
