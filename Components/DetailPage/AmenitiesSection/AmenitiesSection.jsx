"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import AmenitiesSlider from "./AmenitiesSlider";
import { amenitiesTabs, lifestyleAmenities, communityAmenities } from "../../../public/data/dummyData";

export default function AmenitiesSection() {
  const [activeAmenities, setActiveAmenities] = useState("amenities1");

  useEffect(() => {
    setTimeout(() => AOS.refreshHard(), 50);
  }, [activeAmenities]);

  return (
    <section
      className="py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white overflow-x-hidden"
      data-aos="fade-up"
    >
      <div className="container dp-pro-mob">
        <div className="lg:flex lg:items-center text-center lg:text-start lg:justify-between ">
            <div className="mb-[1.5rem]">
                <p className="max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]">Project Amenities</p>
                <h2 className="font-[300] leading-[1.2] tracking-[-0.2rem]">
                Spaces curated for <strong>comfort, community, and everyday living.</strong>
                </h2>
            </div>
        </div>

        {/* TOGGLE */}
        <ul className="flex gap-[1rem] mt-[2.5rem] overflow-x-scroll no-scroll-bar mx-[-3rem] px-[3rem]">
          {amenitiesTabs.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveAmenities(item.id)}
                className={`com-toggle-btn ${
                  activeAmenities === item.id
                    ? "bg-black text-white"
                    : "text-[#676767]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* SLIDER */}
        {activeAmenities === "amenities1" && (
          <AmenitiesSlider data={lifestyleAmenities} />
        )}
        {activeAmenities === "amenities2" && (
          <AmenitiesSlider data={communityAmenities} />
        )}

        <div className="flex items-center justify-center w-max bg-[#161616] rounded-[3rem] py-[1.5rem] px-[3rem] mt-[5rem] mx-auto text-white lg:rounded-full lg:py-[2rem] 3xl:p-[4rem] 3xl:mt-[7rem]">
                    <div className="icon-box mr-[2.5rem] ">
                        <img className='w-[8rem] lg:w-[7rem] 3xl:w-[10rem]' src="/images/dp-proj-dp.webp" alt="" />
                    </div>
                    <div className='lg:flex lg:items-center' >
                        <div>
                            <p className='max-[1023px]:text-[2rem] f-26 font-medium tracking-[-0.1rem] lg:tracking-[0] mb-[1rem]' >Plan a private walkthrough</p>
                            <div className="flex flex-col lg:flex-row">
                                <p className='max-[1023px]:text-[1.4rem] f-24 text-[#808080] flex pb-[0.8rem] mb-[0.8rem] lg:pb-0 lg:mb-0 3xl:px-[2rem]'>
                                    Limited visit slots available
                                </p>
                            </div>
                        </div>
                        <div className='lg:ml-[3rem] 3xl:ml-[4.5rem]' >
                            <Link href="" className='max-[1023px]:text-[1.5rem] max-[1023px]:h-[5rem] com-btn bg-black text-white border-[white] font-normal justify-center' >
                                Request Visit
                            </Link>
                        </div>
                    </div>
        </div>

      </div>
    </section>
  );
}
