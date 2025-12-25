"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FixedBar from '../../CommonComponents/FixedBar/FixedBar'

const BannerSection = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
        setIsPlaying(false);
    };

  return (
   
    <>    
    <section className="bg-[url('/images/dp-about-mob-banner.webp')] lg:bg-[url('/images/dp-about-banner.webp')] bg-cover bg-center bg-no-repeat h-[100vh] flex items-end lg:h-auto lg:block" >
        <div className="container">
            <div className="pb-[18vh] lg:pt-[17vw] xl:pt-[25vw] 3xl:pt-[26vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
                <div className="lg:flex lg:items-center lg:justify-between"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="text-box text-white text-center lg:text-start lg:w-[70%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 mb-[0.8rem] font-[200]' >About Us</p>
                        <h1 className='h1 font-[200] tracking-[-0.2rem] leading-[1.2]' >Redefining premium real estate through <strong>intent and integrity.</strong></h1>
                    </div>
                    <div className="mt-[3.5rem] lg:hidden" >
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

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] -mt-[3rem] rounded-t-[3rem] bg-[white] lg:mt-[0] lg:rounded-[0]' >
        <div className="container">
            <div className="flex flex-col lg:flex-row lg:justify-between"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="text-box lg:w-[47%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Introduction</p>
                        <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Built on a legacy of <strong>trust and curated excellence.</strong></h2>

                        <div className="items-center flex lg:hidden mt-[2rem]">
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] mr-[1rem]">
                                <img className='mr-[0.6rem] w-[1.6rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='text-[1.15rem]' >RERA Approved</p>
                            </div>
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem]">
                                <img className='mr-[0.6rem] w-[1.6rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='text-[1.15rem]' >Approved Building Plan</p>
                            </div>
                        </div>

                        <p className='para mt-[2rem]' >Born from the reputation of Big Boy Toyz — a name synonymous with precision, passion, and performance — BBT Realty brings the same ethos to real estate. We believe exceptional spaces come from detail-led planning, transparent processes, and a deeply rooted commitment to those who place their trust in us.</p>
                        <p className="para mt-[2rem]"> Each BBT Realty project is conceived and delivered with a single purpose: to create environments that elevate everyday life through thoughtful design, functional elegance, and enduring quality.</p>

                        <div className="items-center hidden lg:flex mt-[3rem]">
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem] mr-[1rem] 3xl:mr-[2rem] ">
                                <img  className='mr-[0.6rem] w-[1.5rem] 3xl:w-[2.2rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='para font-[500]' >RERA Registered</p>
                            </div>
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem]">
                                <img  className='mr-[0.6rem] w-[1.5rem] 3xl:w-[2.2rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='para font-[500]' >Designed for Long-Term Living</p>
                            </div>
                        </div>

                        <div className="items-center hidden lg:flex mt-[5rem]">
                            <div className="lg:pr-[2rem] lg:pl-[3.5rem] lg:border-l lg:last:border-r lg:border-[#D9D9D9] 3xl:pl-[5rem]">
                                <h3 className='2xl:text-[4rem] 3xl:text-[5.5rem]' >04</h3>
                                <p className='f-26' >Landmark Projects Across India</p>
                            </div>
                             <div className="lg:pr-[2rem] lg:pl-[3.5rem] lg:border-l lg:last:border-r lg:border-[#D9D9D9] 3xl:pl-[5rem]">
                                <h3 className='2xl:text-[4rem] 3xl:text-[5.5rem]' >1M+ Sq. Ft.</h3>
                                <p className='f-26' >Planned & Under Development</p>
                            </div>
                        </div>

                </div>
                <div className="vid-box mt-[3rem] lg:w-[47%] lg:mt-[0]">
                    <div className="relative rounded-[1.5rem] overflow-hidden 3xl:rounded-[2.5rem]">                     
                        <video
                            ref={videoRef}
                            className={`w-full h-full object-cover cursor-pointer ${
                            isPlaying ? "block" : "hidden"
                            }`}
                            onClick={handlePause}
                        >
                            <source src="/videos/showroom-vid-gurgaon.mp4" type="video/mp4" />
                        </video>

                        {!isPlaying && (
                            <img
                            src="/images/a-intro-vid-thumb.webp"
                            alt="Building Thumbnail"
                            className="w-full h-full object-cover"
                            />
                        )}

                        {!isPlaying && (
                            <button
                                onClick={handlePlay}
                                className="absolute inset-0 flex items-center justify-center"
                                >
                                <span className="w-[6rem] h-[6rem] flex items-center justify-center 3xl:w-[10rem] 3xl:h-[10rem]">
                                    <img className='3xl:w-full' src="/images/a-intro-play-btn.webp" alt="" />
                                </span>
                            </button>
                        )}
                    </div>
                     <div className="items-center flex lg:hidden mt-[3rem]">
                            <div className="pl-[3rem] pr-[1.5rem] py-[0.5rem] border-l border-[#D9D9D9]">
                                <h3 className='text-[2.5rem] mb-[0.5rem]' >100+</h3>
                                <p className='text-[1.4rem]' >Luxury Homes Delivered Nationwide</p>
                            </div>
                             <div className="pl-[3rem] pr-[1.5rem] py-[0.5rem] border-l border-[#D9D9D9]">
                                <h3 className='text-[2.5rem] mb-[0.5rem]' >07+</h3>
                                <p className='text-[1.4rem]' >Cities & Expanding Presence.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>

    <section className='bg-white pb-[8rem]' >
        <FixedBar/>
    </section>


    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#F6F6F6]' >
            <div className="container">
                <div >
                        <div className="relative"
                            data-aos="fade-up" 
                            data-aos-easing="linear"
                            data-aos-duration="500"
                         >
                            <div className="img-box">
                                <img className='w-full hidden lg:block' src="/images/a-commitment-bg.webp" alt="" />
                                <img className='w-full lg:hidden' src="/images/a-commitment-mobile-bg.webp" alt="" />
                            </div>  
                            <div className="text-white absolute h-full w-full flex flex-col justify-end bottom-[0%] p-[3.2rem] lg:px-[5rem] lg:py-[6rem] lg:w-[60%] 3xl:pl-[11rem] 3xl:pb-[8rem]">
                                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Our Commitments</p>
                                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >A commitment to creating spaces that truly elevate everyday living.</h2>
                            </div>
                        </div>
                        <div className="flex justify-end flex-wrap">
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#CFCFCF] lg:flex-row lg:text-start lg:justify-between lg:rounded-[4rem] lg:px-[6rem] lg:pt-[4rem] lg:pb-[7rem] 3xl:pt-[7rem] 3xl:pb-[15rem] 3xl:px-[10rem] 3xl:rounded-[7rem]"
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem] lg:w-max' >Our Mission</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300] lg:w-[60%]' >To create thoughtfully designed spaces that balance innovation, comfort, and long-term value—delivered with care, clarity, and a deep respect for the people who live, work, and gather within them.</p>
                            </div>
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#E8E8E8] lg:flex-row lg:text-start lg:justify-between lg:rounded-[4rem] lg:px-[6rem] lg:pt-[4rem] lg:pb-[7rem] 3xl:pt-[7rem] 3xl:pb-[15rem] 3xl:px-[10rem] 3xl:rounded-[7rem] lg:-mt-[4rem] lg:w-[90%] 3xl:-mt-[8rem]" 
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem]' >Our Vision</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300] lg:w-[60%]' >To shape a new standard of modern living by building environments that feel personal, purposeful, and enduring—defined by quality, craftsmanship, and meaningful design.</p>
                            </div>
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#ffff] lg:rounded-[4rem] lg:w-[70%] lg:-mt-[4rem] lg:text-start 3xl:-mt-[8rem] 3xl:px-[10rem] 3xl:py-[6rem] 3xl:rounded-[7rem]"
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem] lg:mb-[0rem]' >Our Ethical Promises</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300]' >Principles that guide every decision, partnership, and delivery.</p>
                                <ul className='flex flex-wrap lg:justify-between' >
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/images/a-commitment-usp-1.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' >Radical <strong>Transparency</strong></p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/images/a-commitment-usp-2.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' >Uncompromised <strong>Quality</strong></p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/images/a-commitment-usp-3.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>Customer-First</strong> Thinking</p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/images/a-commitment-usp-4.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>Integrity </strong>at Every Step </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
    </section>
   
   <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-black text-white' >
        <div className="container">
            <div 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="head-box flex justify-between flex-col lg:flex-row lg:mb-[3rem] 3xl:mb-[5rem]">
                    <div className="text lg:w-[48%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Why Us</p>
                        <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >What sets us apart is not scale, <strong>but intent.</strong></h2>
                    </div>
                    <p className='para my-[2rem] lg:w-[45%]' >We build selectively, design deliberately, and deliver with clarity. Every BBT Realty project is shaped by thoughtful planning, disciplined execution, and an uncompromising focus on long-term value—not short-term volume.</p>
                </div>
                <div className="img-box">
                    <img className='w-full hidden lg:block' src="/images/a-why-img.webp" alt="" />
                    <img className='w-full lg:hidden' src="/images/a-why-mob-img.webp" alt="" />
                </div>
                <ul className="usp-list mt-[3rem] flex flex-wrap justify-between"
                    data-aos="fade-up" 
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/images/a-why-usp-1.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Curated development, not mass construction</p>
                            <p className='para' >Every project is intentionally limited in scale—allowing deeper attention to design, quality, and individuality rather than volume-driven execution.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/images/a-why-usp-2.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Turnkey living, thoughtfully delivered</p>
                            <p className='para' >Homes are planned to be lifestyle-ready—from finishes and layouts to shared amenities—ensuring ease, comfort, and a seamless ownership experience.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/images/a-why-usp-3.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Design-first approach</p>
                            <p className='para' >Architecture, interiors, and shared spaces are shaped by design thinking—where aesthetics, functionality, and livability are treated with equal importance.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/images/a-why-usp-4.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Quality with complete transparency</p>
                            <p className='para' >From materials and construction practices to timelines and communication, our processes are guided by clarity, consistency, and ethical execution.</p>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
   </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#F6F6F6] overflow-hidden' >
        <div className="container"
            data-aos="fade-up" 
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className="flex lg:justify-between">
                <div className='lg:w-[30%]' >
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >projects type</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >THE <strong>BBT ECOSYSTEM</strong></h2>
                </div>
                <ul className="hidden lg:flex lg:w-[65%]">
                    <li className='border-l border-[#AEAEAE] last:border-r px-[2rem] h-max 3xl:pl-[5rem]' >
                        <h3 className='3xl:text-[5.5rem]' >20+</h3>
                        <p className='f-26' >Years of Brand Legacy</p>
                    </li>
                    <li className='border-l border-[#AEAEAE] last:border-r px-[2rem] h-max 3xl:pl-[5rem]' >
                        <h3 className='3xl:text-[5.5rem]' >4000+</h3>
                        <p className='f-26' >Luxury Vehicles Curated</p>
                    </li>
                    <li className='border-l border-[#AEAEAE] last:border-r px-[2rem] h-max 3xl:pl-[5rem]' >
                        <h3 className='3xl:text-[5.5rem]' >5000+</h3>
                        <p className='f-26' >High-Value Clients Served</p>
                    </li>
                </ul>
            </div>
            <div className="flex lg:justify-between flex-col lg:flex-row flex-wrap mt-[1.5rem] lg:mt-[2.5rem] 3xl:mt-[10rem]">
                <div className="lg:w-[30%]">
                    <p className='max-[1023px]:text-[1.4rem] f-26 font-light' >A trusted name across luxury automotive, technology-led platforms, and lifestyle communities.</p>
                    <p className='max-[1023px]:text-[1.4rem] f-26 font-light mt-[1.5rem] lg:mt-[1.8rem]' > BBT operates at the intersection of precision, passion, and premium experiences. Across automotive, digital platforms, and exclusive communities, each venture reflects a commitment to quality, trust, and long-term value—built consistently over time</p>
                </div>
                <ul className='lg:w-[65%] mt-[2.5rem] flex overflow-x-scroll w-[100vw] -mx-[20px] px-[2rem] gap-[3rem] no-scrollbar lg:gap-[1.5rem] lg:mx-[0] lg:px-[0] lg:mt-[0]' >
                     <li className='bg-[#fff] p-[2rem] rounded-[2rem] min-w-[75vw] lg:min-w-[31%] lg:p-[1rem] lg:rounded-[1rem] lg:pb-[2rem] 3xl:p-[2rem] 3xl:pb-[3rem] 3xl:rounded-[2rem]' >
                        <a target="_blank" href="https://www.bigboytoyz.com/" >
                            <div className="img-outer relative ">
                                <div className="img-box">
                                    <img className='rounded-[2rem] w-full lg:rounded-[1rem]' src="/images/a-pro-slide-2.webp" alt="" />
                                </div>
                                <img className=' absolute bottom-[2rem] right-[2rem] w-[15rem] lg:w-[8rem] lg:bottom-[1.2rem] lg:right-[1.2rem] 3xl:w-[13rem] 3xl:right-[2rem] 3xl:bottom-[2rem]' src="/images/a-pro-logo-2.webp" alt="" />
                            </div>
                            <div className="mt-[2.5rem] lg:mt-[1.5rem]">
                                <p className='max-[1023px]:text-[1.7rem] f-24 text-[#333333] mb-[0.5rem] font-[500]' >Big Boy Toyz</p>
                                <p className='para text-[#333333]' > India’s most recognised luxury automotive brand, redefining the pre-owned supercar experience through precision, transparency, and curation.</p>
                            </div>
                        </a>
                    </li>
                    <li className='bg-[#fff] p-[2rem] rounded-[2rem] min-w-[75vw] lg:min-w-[31%] lg:p-[1rem] lg:rounded-[1rem] lg:pb-[2rem] 3xl:p-[2rem] 3xl:pb-[3rem] 3xl:rounded-[2rem]' >
                        <a target="_blank" href="https://cars.co.in/" >
                            <div className="img-outer relative ">
                                <div className="img-box">
                                    <img className='rounded-[2rem] w-full lg:rounded-[1rem]' src="/images/a-pro-slide-1.webp" alt="" />
                                </div>
                                <img className=' absolute bottom-[2rem] right-[2rem] w-[15rem] lg:w-[8rem] lg:bottom-[1.2rem] lg:right-[1.2rem] 3xl:w-[13rem] 3xl:right-[2rem] 3xl:bottom-[2rem]' src="/images/a-pro-logo-1.webp" alt="" />
                            </div>
                            <div className="mt-[2.5rem] lg:mt-[1.5rem]">
                                <p className='max-[1023px]:text-[1.7rem] f-24 text-[#333333] mb-[0.5rem] font-[500]' >Cars.co.in</p>
                                <p className='para text-[#333333]' > A digital-first automotive platform offering trusted listings, smart buying tools, and seamless ownership support.</p>
                            </div>
                        </a>
                    </li>
                     <li className='bg-[#fff] p-[2rem] rounded-[2rem] min-w-[75vw] lg:min-w-[31%] lg:p-[1rem] lg:rounded-[1rem] lg:pb-[2rem] 3xl:p-[2rem] 3xl:pb-[3rem] 3xl:rounded-[2rem]' >
                        <a target="_blank" href="https://queensdriveclub.com/" >
                            <div className="img-outer relative ">
                                <div className="img-box">
                                    <img className='rounded-[2rem] w-full lg:rounded-[1rem]' src="/images/a-pro-slide-3.webp" alt="" />
                                </div>
                                <img className=' absolute bottom-[2rem] right-[2rem] w-[15rem] lg:w-[8rem] lg:bottom-[1.2rem] lg:right-[1.2rem] 3xl:w-[13rem] 3xl:right-[2rem] 3xl:bottom-[2rem]' src="/images/a-pro-logo-3.webp" alt="" />
                            </div>
                            <div className="mt-[2.5rem] lg:mt-[1.5rem]">
                                <p className='max-[1023px]:text-[1.7rem] f-24 text-[#333333] mb-[0.5rem] font-[500]' >Queens Drive Club</p>
                                <p className='para text-[#333333]' > A private members’ community built around luxury automobiles, curated experiences, and a shared passion for driving culture</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="lg:hidden mt-[4rem]">
                    <li className='flex items-center mt-[1.5rem] pt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] ' >
                        <h3 className='mr-[1rem] w-[25%]' >20+</h3>
                        <p className='f-26 w-[70%] para text-[#333333]' >Years of Brand Legacy</p>
                    </li>
                    <li className='flex items-center mt-[1.5rem] pt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] ' >
                        <h3 className='mr-[1rem] w-[25%]' >4000+</h3>
                        <p className='f-26 w-[70%] para text-[#333333]' >Luxury Vehicles Curated</p>
                    </li>
                    <li className='flex items-center mt-[1.5rem] pt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] ' >
                        <h3 className='mr-[1rem] w-[25%]' >5000+</h3>
                        <p className='f-26 w-[70%] para text-[#333333]' >High-Value Clients Served</p>
                    </li>
            </ul>
        </div>
    </section>

    <section className='bg-[#fff] py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem]' >
        <div className="container"
        
            data-aos="fade-up" 
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className="text-center">
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Let’s Just</p>
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Explore our <strong>projects</strong></h2>
            </div>
            <ul className='flex gap-[3rem] overflow-x-scroll no-scrollbar -mx-[20px] px-[2rem] mt-[4rem] lg:mx-[0] lg:px-[0] lg:overflow-auto lg:gap-[2rem] 3xl:gap-[4rem]' >
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <Link href="/detail-page" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/images/a-just-1.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >The Pavilion</h4>
                    </Link>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <div className="launching-soon-tag relative" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/images/a-just-2.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >BBT One</h4>
                    </div>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <div className="launching-soon-tag relative" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/images/a-just-3.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >The Royal Pavilion</h4>
                    </div>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <div className="launching-soon-tag relative" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/images/a-just-4.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >Sora</h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>


    </>

  )
}

export default BannerSection
