"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function OfferingSection() {




    // 2 video code 
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Play the correct video depending on current viewport width (lg breakpoint = 1024px)
    const handlePlay = () => {
        const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width:1024px)").matches;
        const vid = isDesktop ? desktopRef.current : mobileRef.current;
        if (!vid) return;
        // ensure other video is paused
        if (desktopRef.current && desktopRef.current !== vid) desktopRef.current.pause();
        if (mobileRef.current && mobileRef.current !== vid) mobileRef.current.pause();

        vid.currentTime = 0;
        vid.play().catch((err) => {
        // handle play error (autoplay policies etc.)
        console.warn("Play failed:", err);
        });
        setIsPlaying(true);
    };

    const handlePause = () => {
        if (desktopRef.current) desktopRef.current.pause();
        if (mobileRef.current) mobileRef.current.pause();
        setIsPlaying(false);
    };

    // When video ends, reset playing state
    useEffect(() => {
        const d = desktopRef.current;
        const m = mobileRef.current;
        const onEnded = () => setIsPlaying(false);

        if (d) d.addEventListener("ended", onEnded);
        if (m) m.addEventListener("ended", onEnded);

        return () => {
        if (d) {
            d.removeEventListener("ended", onEnded);
            d.pause();
        }
        if (m) {
            m.removeEventListener("ended", onEnded);
            m.pause();
        }
        };
    }, []);

    // classes based on isPlaying — keep simple and explicit
    const desktopVideoClass = isPlaying ? "hidden lg:block" : "hidden";
    const mobileVideoClass = isPlaying ? "block lg:hidden" : "hidden";

    const desktopThumbClass = !isPlaying ? "hidden lg:block" : "hidden";
    const mobileThumbClass = !isPlaying ? "block lg:hidden" : "hidden";



    // toggle Tower code 
    const [activeTower, setActiveTower] = useState("1");

    const towers = [
        { id: "1", label: "Tower 1" },
        { id: "2", label: "Tower 2" },
        { id: "3", label: "Tower 3" },
        { id: "4", label: "Tower 4" },
    ];

    useEffect(() => {
    // Wait for DOM update
    setTimeout(() => {
        AOS.refreshHard(); // recalculates positions & height
    }, 50);
    }, [activeTower]);
    



  return (
    <>
    <section className='py-[7rem] xl:pb-[10rem] 1xl:pb-[11rem] 3xl:pb-[14rem] -mt-[3rem] rounded-t-[3rem] bg-[white] lg:rounded-[0]  lg:-mt-24 lg:pt-[12rem] 1xl:-mt-[7.8rem] xl:pt-[15rem] 1xl:pt-[18rem] 3xl:-mt-[9.5rem] 3xl:pt-[20rem]' >
        <div className="container">
            <div className="flex flex-col lg:flex-row lg:justify-between"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="text-box lg:w-[47%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] lg:text-[#6C6C6C]' >OUR OFFERING</p>
                        <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Refined living, <strong>thoughtfully designed.</strong></h2>

                        <p className='para mt-[2rem]' >Pavilion is built around intelligent planning, enduring quality, and everyday comfort. From well-proportioned residences to carefully selected amenities, every element is designed to elevate how you live—today and for years to come.</p>

                        <div className="items-center flex mt-[2rem] lg:mt-[3rem]">
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem] mr-[1rem] 3xl:mr-[2rem]">
                                <img className='mr-[0.6rem] w-[1.6rem] lg:w-[1.5rem] 3xl:w-[2.2rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='max-[1023px]:text-[1.15rem] para lg:font-[500]' >RERA Approved</p>
                            </div>
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem]">
                                <img className='mr-[0.6rem] w-[1.6rem] lg:w-[1.5rem] 3xl:w-[2.2rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='max-[1023px]:text-[1.15rem] para lg:font-[500]' >Designed for Long-Term Living</p>
                            </div>
                        </div>                     
                </div>
                <div className="list-box mt-[3rem] lg:mt-[0] lg:w-[45%] ">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] lg:text-[#6C6C6C]' >The Promise</p>
                        <ul>
                            <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                    <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/images/cd-offer-1.png" alt="" />
                                    <div className="text">
                                        <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Engineered layouts that maximise space</p>
                                        <p className='para mt-[0.6rem]' > Homes designed for natural light, airflow, and efficient movement.</p>
                                    </div>
                            </li>
                             <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                    <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/images/cd-offer-2.png" alt="" />
                                    <div className="text">
                                        <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Curated amenities for everyday comfort</p>
                                        <p className='para mt-[0.6rem]' >  Spaces that support relaxation, wellness, and community living.</p>
                                    </div>
                            </li>
                             <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                    <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/images/cd-offer-3.png" alt="" />
                                    <div className="text">
                                        <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Built with long-term quality in mind</p>
                                        <p className='para mt-[0.6rem]' >Strong construction standards with attention to durability and detail.</p>
                                    </div>
                            </li>
                             <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                    <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/images/cd-offer-4.png" alt="" />
                                    <div className="text">
                                        <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Designed for every stage of life</p>
                                        <p className='para mt-[0.6rem]' > A balanced environment suitable for families, professionals, and future needs.</p>
                                    </div>
                            </li>
                        </ul>

                </div>
            </div>
        </div>
    </section>

    <section className='max-w-[1920px] mx-auto' >
        <img className='hidden w-full lg:block' src="/images/dp-img.webp" alt="" />
        <img className='lg:hidden w-full' src="/images/dp-mob-img.webp" alt="" />
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white'
        data-aos="fade-up" 
        data-aos-easing="linear"
        data-aos-duration="500"
    >
        <div className="container">
            <div className="flex flex-wrap lg:justify-between">
                <div className="lg:w-[48%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >HIGHLIGHT FEATURES</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1.5rem]' >A promise of <strong>considered design</strong> and <strong>lasting quality.</strong></h2>
                    <p className='para lg:w-[80%]' >Every residence at Pavilion is thoughtfully planned with an emphasis on natural light, ventilation, spatial balance, and enduring materials—ensuring homes that feel refined today and relevant tomorrow.</p>

                    <ul className='flex items-center flex-wrap justify-between mt-[3rem]' >
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-1.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Vastu-Aligned Spatial Planning</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-2.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Abundant Natural Light & Airflow</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-3.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Optimised Room Proportions</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-4.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Spacious Balconies & Open Views</p>
                        </li>
                        
                    </ul>
                </div>
                <div className="lg:w-[48%] lg:flex-col flex flex-col-reverse">
                    <ul className='flex items-center flex-wrap justify-between' >
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-5.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Enhanced Privacy & Acoustic Comfort</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-6.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Durable Materials & Timeless Finishes</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-7.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Robust Plumbing & Electrical Infrastructure</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-8.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Designed for Every Stage of Life</p>
                        </li>
                    </ul>
                    <div className="mt-[4rem] mb-[2.5rem] border-l-[0.3rem] border-[#7C7C7C] pl-[3rem] lg:mb-[0]"
                        data-aos="fade-up" 
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <h3 className='max-[1023px]:text-[2.5rem] mb-[2rem] font-[300] lg:leading-[1.3] lg:tracking-tighter 3xl:text-[3.5rem]' >“Great homes are not defined by luxury alone, but by how effortlessly they fit into everyday life.”</h3>
                        <p className='max-[1023px]:text-[1.6rem] f-24 text-[#959595]' >— Pavilion by BBT Realty</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-black' >
        <div className="container">
            <div className="text-center text-white"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Gallery </p>
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem]' >A closer look at life <strong>inside Pavilion</strong></h2>
                <p className='para' >A visual walkthrough of Pavilion’s architecture, interiors, and lifestyle amenities.</p>
                <ul className='flex flex-wrap gap-[1.5rem] lg:gap-y-[2.2rem] lg:gap-x-[2.5%] mt-[4rem] 3xl:gap-y-[3.5rem] 3xl:mt-[5rem]' >
                    <li className='w-[100%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/images/h-pro-slider-7.webp" alt="" />
                    </li>   
                    <li className='w-[48%] lg:w-[31.5%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/images/db-gallery-2.webp" alt="" />
                    </li>   
                    <li className='w-[48%] lg:w-[31.5%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/images/db-gallery-3.webp" alt="" />
                    </li>
                    <li className='w-[100%] lg:w-[31.5%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/images/db-gallery-4.webp" alt="" />
                    </li>
                    <li className='w-[100%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/images/h-pro-slider-8.webp" alt="" />
                    </li> 
                </ul>
            </div>
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white'
        data-aos="fade-up" 
        data-aos-easing="linear"
        data-aos-duration="500"
    >
        <div className="container">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="mb-[1.5rem] lg:w-[45%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >choose what suits you</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Explore pavilion <strong>floor designs</strong></h2>
                </div>
                <p className='para lg:w-[30%]' >Whether it's a cozy 2 BHK a family-sized 3 BHK, or a grand 4 BHK, your new home is crafted to suit everystage of life. With thoughtful layouts and premium amenities, every detail is designed for modern living.</p>
            </div>
            {/* TOGGLE BUTTONS */}
            <ul className="btn-toggle-box flex items-center gap-[0.5rem] mt-[2.5rem] lg:gap-[1rem]">
                {towers.map((tower) => (
                <li key={tower.id}>
                    <button
                    type="button"
                    onClick={() => setActiveTower(tower.id)}
                    className={`com-toggle-btn transition-all
                        ${
                        activeTower === tower.id
                            ? "bg-black text-white border-white"
                            : "bg-transparent text-[#676767] border-[#000000ab]"
                        }`}
                    >
                    {tower.label}
                    </button>
                </li>
                ))}
            </ul>

            {/* TOWER 1 DATA */}
            {activeTower === "1" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                    <img className='w-full' src="/images/tower-1-img-1.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Typical floor plan ( 1st to 7th )
                    </p>
                </li>
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%]  lg:p-[3rem] flex flex-col justify-between">
                    <img className='w-full' src="/images/tower-1-img-2.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Pent house lower (8th)
                    </p>
                </li>
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%]  lg:p-[3rem] flex flex-col justify-between">
                    <img className='w-full' src="/images/tower-1-img-3.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Pent house upper (8th)
                    </p>
                </li>
                <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                    <p className="max-[1023px]:text-[2rem] f-28">Basement Plan</p>
                    <p className="max-[1023px]:text-[1.5rem] f-20 mb-[2rem]">
                    BUA:3296.66
                    </p>
                    <img className='w-full' src="/images/dp-floor-4.webp" alt="" />
                </li>
                <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                    <p className="max-[1023px]:text-[2rem] f-28 mb-[2rem]">
                    Layout plans
                    </p>
                    <img className='w-full' src="/images/dp-floor-5.webp" alt="" />
                </li>
                </ul>
            )}

            {/* TOWER 2 DATA */}
            {activeTower === "2" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-2-img-1.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Typical floor plan ( 1st to 7th )
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-2-img-2.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house lower (8th)
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-2-img-3.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house upper (8th)
                        </p>
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28">Basement Plan</p>
                        <p className="max-[1023px]:text-[1.5rem] f-20 mb-[2rem]">
                        BUA:3296.66
                        </p>
                        <img className='w-full' src="/images/dp-floor-4.webp" alt="" />
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28 mb-[2rem]">
                        Layout plans
                        </p>
                        <img className='w-full' src="/images/dp-floor-5.webp" alt="" />
                    </li>
                </ul>
            )}

            {/* TOWER 3 DATA */}
            {activeTower === "3" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-3-img-1.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Typical floor plan ( 1st to 7th )
                        </p>
                    </li>
                     <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-3-img-2.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house lower (8th)
                        </p>
                    </li>
                     <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-3-img-3.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house upper (8th)
                        </p>
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28">Basement Plan</p>
                        <p className="max-[1023px]:text-[1.5rem] f-20 mb-[2rem]">
                        BUA:3296.66
                        </p>
                        <img className='w-full' src="/images/dp-floor-4.webp" alt="" />
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28 mb-[2rem]">
                        Layout plans
                        </p>
                        <img className='w-full' src="/images/dp-floor-5.webp" alt="" />
                    </li>
                </ul>
            )}

            {/* TOWER 4 DATA */}
            {activeTower === "4" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-4-img-1.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Typical floor plan ( 1st to 7th )
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-4-img-2.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house lower (8th)
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/images/tower-4-img-3.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house upper (8th)
                        </p>
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28">Basement Plan</p>
                        <p className="max-[1023px]:text-[1.5rem] f-20 mb-[2rem]">
                        BUA:3296.66
                        </p>
                        <img className='w-full' src="/images/dp-floor-4.webp" alt="" />
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28 mb-[2rem]">
                        Layout plans
                        </p>
                        <img className='w-full' src="/images/dp-floor-5.webp" alt="" />
                    </li>
                </ul>
            )}
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-black' >
        <div className="container">
            <div className="text-center text-white" 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem]' >Our project <strong>showreel </strong></h2>
                <p className='para' >Explore beautifully crafted visuals showcasing Pavilion’s design excellence, comfort, elegance, and modern living.</p>
            </div>
            <div className="vid-box mt-[3rem] xl:mt-[4rem] 3xl:mt-[5rem]"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="relative rounded-[1.5rem] overflow-hidden 3xl:rounded-[2.5rem]">
                    {/* Desktop video (visible only on lg when playing) */}
                    <video
                    ref={desktopRef}
                    className={`w-full h-full object-cover cursor-pointer ${desktopVideoClass}`}
                    onClick={handlePause}
                    playsInline
                    // controls // uncomment if you want native controls while playing
                    // muted // optional
                    >
                    <source src="/videos/hp-banner-compress.mp4" type="video/mp4" />
                    </video>

                    {/* Mobile video (visible only on small when playing) */}
                    <video
                    ref={mobileRef}
                    className={`w-full h-full object-cover cursor-pointer ${mobileVideoClass}`}
                    onClick={handlePause}
                    playsInline
                    >
                    <source src="/videos/showroom-vid-gurgaon.mp4" type="video/mp4" />
                    </video>

                    {/* Thumbnails shown when NOT playing */}
                    <img
                    src="/images/dp-video-thumb.webp"
                    alt="Building Thumbnail"
                    className={`w-full h-full object-cover ${mobileThumbClass}`}
                    />
                    <img
                    src="/images/dp-video-lg-thumb.webp"
                    alt="Building Thumbnail"
                    className={`w-full h-full object-cover ${desktopThumbClass}`}
                    />

                    {/* Play button overlay (only when NOT playing) */}
                    {!isPlaying && (
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label="Play video"
                        type="button"
                    >
                        <span className="w-[6rem] h-[6rem] flex items-center justify-center xl:w-[8rem] xl:h-[8rem] 3xl:w-[10rem] 3xl:h-[10rem]">
                            <img className="w-full" src="/images/a-intro-play-btn.webp" alt="Play" />
                        </span>
                    </button>
                    )}
                </div>
            </div>
        </div>
    </section>

    


    </>
  )
}

export default OfferingSection