"use client";
import React from 'react'
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";




function OfferingSection() {


    
    // realtime slider 
    let settings = {
        centerMode: true,            
        centerPadding: "15%",        
        slidesToShow: 1,             
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        pauseOnHover: true,
        responsive: [
            {
            breakpoint: 1400,
            settings: { centerPadding: "12%" },
            },
            {
            breakpoint: 1024,
            settings: { centerPadding: "8%" },
            },
            {
            breakpoint: 768,
            settings: { centerPadding: "4%" },
            }

        ],
    };

       
    function ProDeskNextArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={`pro-desk-slider-arrow ${className}`} onClick={onClick}>
                <img src="/images/dp-pro-slide-arr.png" alt="" />
            </div>
        );
    }
    
    function ProDeskPrevArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={`pro-desk-slider-arrow ${className}`} onClick={onClick}>
                <img src="/images/dp-pro-slide-arr.png" alt="" />
            </div>
        );
    }

    
        // product Desktop Slider 
        let proDeskSettings = {
            slidesToShow: 4,             
            infinite: true,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: false,
            arrows: true,
            pauseOnHover: true,
            nextArrow: <ProDeskNextArrow />,
            prevArrow: <ProDeskPrevArrow />,
        }
    
        // product Mobile Slider 
        let proMobSettings = {
            slidesToShow: 2,             
            infinite: true,
            autoplay: true,
            dots: true,
            arrows: false,
            pauseOnHover: true,
        }
    
       
    function NextArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={`realtime-slider-arrow ${className}`} onClick={onClick}></div>
        );
    }
    
    function PrevArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={`realtime-slider-arrow ${className}`} onClick={onClick}></div>
        );
    }

 


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



    // toggle code 
    const [activeTower, setActiveTower] = useState("F");

    const towers = [
        { id: "F", label: "Tower F" },
        { id: "G", label: "Tower G" },
        { id: "H", label: "Tower H" },
        { id: "I", label: "Tower I" },
    ];


  return (
    <>
    <section className='py-[7rem] xl:pb-[10rem] 1xl:pb-[11rem] 3xl:pb-[14rem] -mt-[3rem] rounded-t-[3rem] bg-[white] lg:rounded-[0]  lg:-mt-24 lg:pt-[12rem] 1xl:-mt-[7.8rem] xl:pt-[15rem] 1xl:pt-[18rem] 3xl:-mt-[9.5rem] 3xl:pt-[20rem]' >
        <div className="container">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="text-box lg:w-[47%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] lg:text-[#6C6C6C]' >OUR OFFERING</p>
                        <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >The ultimate address of <strong>sophistication &  superlative lifestyle.</strong></h2>

                        <p className='para mt-[2rem]' >Each tower at Pavilion by Big Boy Toyz is a statement of luxury, offering exquisitely designed residences and penthouses that redefine modern living. With expansive layouts, panoramic views, and premium finishes, every home is crafted to deliver an unmatched lifestyle of comfort, elegance, and exclusivity.</p>

                        <div className="items-center flex mt-[2rem] lg:mt-[3rem]">
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem] mr-[1rem] 3xl:mr-[2rem]">
                                <img className='mr-[0.6rem] w-[1.6rem] lg:w-[1.5rem] 3xl:w-[2.2rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='max-[1023px]:text-[1.15rem] para lg:font-[500]' >RERA Approved</p>
                            </div>
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem]">
                                <img className='mr-[0.6rem] w-[1.6rem] lg:w-[1.5rem] 3xl:w-[2.2rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='max-[1023px]:text-[1.15rem] para lg:font-[500]' >Approved Building Plan</p>
                            </div>
                        </div>                     
                </div>
                <div className="list-box mt-[3rem] lg:mt-[0] lg:w-[45%] ">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] lg:text-[#6C6C6C]' >The Promise</p>
                        <ul>
                            <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/images/cd-offer-1.png" alt="" />
                                <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Engineered & thoughtful layouts</p>
                            </li>
                             <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/images/cd-offer-2.png" alt="" />
                                <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Premium amenities for comfort</p>
                            </li>
                             <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/images/cd-offer-3.png" alt="" />
                                <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Quality infra with promise of durability</p>
                            </li>
                             <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/images/cd-offer-4.png" alt="" />
                                <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Crated to suit every-stage of life</p>
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

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white' >
        <div className="container">
            <div className="flex flex-wrap lg:justify-between">
                <div className="lg:w-[48%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >HIGHLIGHT FEATURES</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1.5rem]' >A promise of <strong>premiuness</strong> and <strong>timeless excellence.</strong></h2>
                    <p className='para lg:w-[80%]' >Discover smart, stylish living with spacious layouts, premium finishes, airy balconies, and vastu-aligned design—crafted to elevate comfort, convenience, and modern family lifestyles across every home type.</p>

                    <ul className='flex items-center flex-wrap justify-between mt-[3rem]' >
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-1.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Vastu-friendly planning</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-2.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Aluminium windows & ventilators</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-3.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Standard sanitary. plumbing & electrical fittings</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-4.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Thoughtfully Planned Spaces</p>
                        </li>
                        
                    </ul>
                </div>
                <div className="lg:w-[48%] lg:flex-col flex flex-col-reverse">
                    <ul className='flex items-center flex-wrap justify-between' >
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-1.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Vastu-friendly planning</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-2.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Aluminium windows & ventilators</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-3.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Standard sanitary. plumbing & electrical fittings</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] h-full border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%] h-fill-available flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/images/dp-feature-icon-4.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Thoughtfully Planned Spaces</p>
                        </li>
                    </ul>
                    <div className="mt-[4rem] mb-[2.5rem] border-l-[0.3rem] border-[#7C7C7C] pl-[3rem] lg:mb-[0]">
                        <h3 className='max-[1023px]:text-[2.5rem] mb-[2rem] font-[300] lg:leading-[1.3] lg:tracking-tighter 3xl:text-[3.5rem]' >“We create timeless spaces where luxury, comfort, and extraordinary living come together seamlessly.”</h3>
                        <p className='max-[1023px]:text-[1.6rem] f-24 text-[#959595]' >@bigboytoyz_india</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-black' >
        <div className="container">
            <div className="text-center text-white">
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Gallery </p>
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem]' ><strong>Gallery </strong>of the project pavilion</h2>
                <p className='para' >Explore stunning visuals showcasing Pavilion’s architecture, lifestyle, interiors, and amenities crafted for elevated modern living.</p>
                <ul className='flex flex-wrap gap-[1.5rem] lg:gap-y-[2.2rem] lg:gap-x-[2.5%] mt-[4rem] 3xl:gap-y-[3.5rem] 3xl:mt-[5rem]' >
                    <li className='w-[100%]' >        
                        <img className='rounded-[1.5rem] w-full' src="/images/db-gallery-1.webp" alt="" />
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
                </ul>
            </div>
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white'>
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

            {/* TOWER F DATA */}
            {activeTower === "F" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem]">
                    <img className='w-full' src="/images/dp-floor-1.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Typical floor plan ( 1st to 7th )
                    </p>
                </li>
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%]  lg:p-[3rem]">
                    <img className='w-full' src="/images/dp-floor-2.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Pent house lower (8th)
                    </p>
                </li>
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%]  lg:p-[3rem]">
                    <img className='w-full' src="/images/dp-floor-3.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Pent house upper
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

            {/* TOWER G DATA */}
            {activeTower === "G" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem]">
                        <img className='w-full' src="/images/dp-floor-1.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Tower G – Typical floor plan
                        </p>
                    </li>
                </ul>
            )}

            {/* TOWER H DATA */}
            {activeTower === "H" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem]">
                        <img className='w-full' src="/images/dp-floor-2.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Tower H – Typical floor plan
                        </p>
                    </li>
                </ul>
            )}

            {/* TOWER I DATA */}
            {activeTower === "I" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem]">
                        <img className='w-full' src="/images/dp-floor-3.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Tower I – Typical floor plan
                        </p>
                    </li>
                </ul>
            )}
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-black' >
        <div className="container">
            <div className="text-center text-white">
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem]' >Our project <strong>showreel </strong></h2>
                <p className='para' >Explore beautifully crafted visuals showcasing Pavilion’s design excellence, comfort, elegance, and modern living.</p>
            </div>
            <div className="vid-box mt-[3rem] xl:mt-[4rem] 3xl:mt-[5rem]">
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
                    <source src="/videos/menu-collection.mp4" type="video/mp4" />
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

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white'>
        <div className="container">
            <div className="lg:flex lg:items-center text-center lg:text-start lg:justify-between">
                <div className="mb-[1.5rem] lg:w-[40%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Project AMENITIES</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Amenities at pavilion <strong>the experience in millions.</strong></h2>
                </div>
                <p className='para lg:w-[30%]' >Crafted with precision and high-grade materials, these specifications ensure durability, comfort, safety, and a refined living experience across every corner of your home.</p>
            </div>

            {/* mobile list  */}
            <div className="lg:hidden dp-pro-mob">
                <Slider className='mt-[3rem] flex gap-[1.5rem]' {...proMobSettings} >
                    <div className='flex flex-col gap-[1.5rem] w-[48%]' >
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[1.5rem] w-[48%]' >
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[1.5rem] w-[48%]' >
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative p-[0.5rem]">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* desktop list  */}
            <div className="hidden lg:block">
                <Slider className='mt-[3rem] flex gap-[1.5rem] xl:px-[2.5rem] 2xl:px-[3rem]' {...proDeskSettings} >
                    <div className='flex flex-col gap-[1.5rem] w-[24%]' >
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                    </div>   
                    <div className='flex flex-col gap-[1.5rem] w-[24%]' >
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                    </div>   
                    <div className='flex flex-col gap-[1.5rem] w-[24%]' >
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                    </div>   
                    <div className='flex flex-col gap-[1.5rem] w-[24%]' >
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                    </div>   
                    <div className='flex flex-col gap-[1.5rem] w-[24%]' >
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                        <div className="relative lg:p-[1rem] ">
                            <div className="img-box">
                                <img className='w-full' src="/images/dp-project-1-.webp" alt="" />
                            </div>
                            <div className="absolute text-white w-full h-full p-[3rem] bottom-0 left-0 flex items-end justify-center">
                                <p className='max-[1023px]:text-[1.6rem] f-22' >Swimming pool</p>
                            </div>
                        </div>
                    </div>   
                    
                </Slider>
            </div>

            <div className="flex items-center justify-center w-max bg-[#161616] rounded-[3rem] py-[1.5rem] px-[3rem] mt-[5rem] mx-auto text-white lg:rounded-full lg:py-[2rem] 3xl:p-[4rem] 3xl:mt-[7rem]">
                    <div className="icon-box mr-[2.5rem] ">
                        <img className='w-[8rem] lg:w-[7rem] 3xl:w-[10rem]' src="/images/dp-proj-dp.webp" alt="" />
                    </div>
                    <div className='lg:flex lg:items-center' >
                        <div>
                            <p className='max-[1023px]:text-[2rem] f-26 font-medium tracking-[-0.1rem] lg:tracking-[0] mb-[1rem]' >Schedule a visit today!</p>
                            <div className="flex flex-col lg:flex-row">
                                <p className='max-[1023px]:text-[1.4rem] f-24 text-[#808080] flex pb-[0.8rem] mb-[0.8rem] lg:pb-0 lg:mb-0 3xl:px-[2rem]'>
                                    12 sloths remaining 
                                </p>
                            </div>
                        </div>
                        <div className='lg:ml-[3rem] 3xl:ml-[4.5rem]' >
                            <Link href="" className='max-[1023px]:text-[1.5rem] max-[1023px]:h-[5rem] com-btn bg-black text-white border-[white] font-normal justify-center' >
                                Share Details
                            </Link>
                        </div>
                    </div>
            </div>

        </div>
    </section>

    <section className='pb-[7rem] xl:pb-[10rem] 1xl:pb-[11rem] 3xl:pb-[14rem] bg-white overflow-hidden' >
        <div className="m-auto">
            <div className="text-center mb-[3rem] xl:mb-[4rem]">
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Realtime updates</p>
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Current site <strong>progress</strong></h2>
                <p className='para mt-[2rem] lg:w-[50%] lg:mx-auto' >Explore stunning visuals showcasing Pavilion’s architecture, lifestyle, interiors, and amenities crafted for elevated modern living.</p>
            </div>

            <Slider className='cd-realtive-arrow relative' {...settings} >
                <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative">
                        <div className="img-box">
                            <img className='w-full' src="/images/dp-realtime-list-1.webp" alt="" />
                        </div>
                        <div className="absolute text-white w-full h-full p-[1.5rem] bottom-0 left-0 flex items-end xl:p-[3rem]">
                            <p className='max-[1023px]:text-[1.6rem] f-22' >Current site progress on July 2025</p>
                        </div>
                    </div>
                </div>
                <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative">
                        <div className="img-box">
                            <img className='w-full' src="/images/dp-realtime-list-1.webp" alt="" />
                        </div>
                        <div className="absolute text-white w-full h-full p-[1.5rem] bottom-0 left-0 flex items-end xl:p-[3rem]">
                            <p className='max-[1023px]:text-[1.6rem] f-22' >Current site progress on July 2025</p>
                        </div>
                    </div>
                </div>
                <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative">
                        <div className="img-box">
                            <img className='w-full' src="/images/dp-realtime-list-1.webp" alt="" />
                        </div>
                        <div className="absolute text-white w-full h-full p-[1.5rem] bottom-0 left-0 flex items-end xl:p-[3rem]">
                            <p className='max-[1023px]:text-[1.6rem] f-22' >Current site progress on July 2025</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#F6F6F6]' >
        <div className="container">
            <div className="flex flex-wrap lg:justify-between">
                <div className="w-full text-center mb-[2.5rem] lg:text-start lg:w-[30%] lg:mb-[3.5rem]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Locate Us</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Visit us. Reach out.  <strong>Locate Us</strong></h2>
                    <p className='para lg:hidden mt-[1.5rem]' >Crafted with precision and high-grade materials, these specifications ensure durability, comfort, safety, and a refined living experience across every corner of your home.</p>
                </div>
                <div className="w-full flex items-center lg:w-max">
                        <div className="flex lg:w-max">
                            <img className=" w-[3rem] mr-[0.8rem] lg:w-[5rem] lg:mr-[1.2rem] object-contain 1xl:w-[6rem] 3xl:w-[6rem] 3xl:mr-[1.5rem]" src="/images/h-form-tel.png" alt=""/>
                            <div className="text flex flex-col items-start" >
                                <p className="max-[1023px]:text-[1rem] f-22 font-[300] mb-[0.2rem]"> Speak With Us</p>
                                <a className="max-[1023px]:text-[1.4rem] f-28" href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                            </div>
                        </div>
                        <div className="flex lg:w-max ml-[1rem] pl-[1rem] lg:ml-[2rem] lg:pl-[2rem] border-l border-[#D9D9D9]">
                            <img className=" w-[3rem] mr-[0.8rem] lg:w-[5rem] lg:mr-[1.2rem] object-contain 1xl:w-[6rem] 3xl:w-[6rem] 3xl:mr-[1.5rem]" src="/images/h-form-mail.png" alt=""/>
                            <div className="text flex flex-col items-start" >
                                <p className="max-[1023px]:text-[1rem] f-22 font-[300] mb-[0.2rem]"> The best way to get answer faster.</p>
                                <a className="max-[1023px]:text-[1.4rem] f-28" href="mailto:realty@bigboytoyz.com">realty@bigboytoyz.com</a>
                            </div>
                        </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
                <div className="map lg:w-[47%] relative rounded-[1rem] overflow-hidden">
                    <div>
                        <img className='w-full' src="/images/dp-map.webp" alt="" />
                    </div>
                    <div className=" absolute w-full h-full p-[1.5rem] bottom-0 left-0 flex justify-between items-end bg-[linear-gradient(180deg,rgba(232,232,232,0)_38.05%,#E7E7E7_81.33%)] lg:p-[2rem] 2xl:p-[3rem]">
                        <div className="flex justify-between items-center">
                            <div className='w-[70%]' >
                                <h3 className='max-[1023px]:text-[2rem] mb-[1rem]' >Pavilion</h3>
                                <p className='para' >Baba Marbles Road, Behind Samanvay Status, Atladara- Padra State Highway, Village Bil, Tehsil & District Vadodara, 391410, Gujarat.</p>
                            </div>
                            <div className='ml-[1.5rem]' >
                                <a href="">
                                    <img className='w-[8rem]' src="/images/dp-map-enlarge.webp" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-box w-[100%] my-[3rem] lg:my-[0rem] lg:w-[47%]">

                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1.5rem]' >Get a <strong>callback.</strong></h2>
                    <form className='flex flex-col gap-[1.2rem] 1xl:gap-[1.5rem] 3xl:gap-[2rem]' >
                        <div className="two-field flex justify-between items-center">
                            <div className="field w-[48.5%]">
                                <input type="text" className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' placeholder='First Name*' />
                            </div>
                            <div className="field w-[48.5%]">
                                <input type="text" className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' placeholder='Last Name*' />
                            </div>
                        </div>
                        <div className="two-field flex justify-between items-center">
                            <div className="field w-[48.5%]">
                                <input type="text" className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' placeholder='Phone No*' />
                            </div>
                            <div className="field w-[48.5%]">
                                <input type="text" className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' placeholder='Email Address*' />
                            </div>
                        </div>
                        <div>
                            <input type="text" className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' placeholder='Type Your City*' />
                        </div>
                        <div>
                            <input type="text" className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' placeholder='Type Your Budget*' />
                        </div>
                        <div className="select">
                            <select className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' > 
                                <option>Your Query Type*</option>
                                <option>Query 1</option>
                                <option>Query 2</option>
                            </select>
                        </div>
                        <button type='submit' className='max-[1023px]:text-[1.85rem] f-20 h-[6rem] bg-black text-white rounded-[1rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem]' >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default OfferingSection