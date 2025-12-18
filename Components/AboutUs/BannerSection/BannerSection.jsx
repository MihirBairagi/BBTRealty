"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <section className="bg-[url('/images/a-banner-mobile-bg.webp')] lg:bg-[url('/images/a-banner-bg.webp')] bg-cover bg-center bg-no-repeat" >
        <div className="container">
            <div className="pt-[55rem] pb-[8rem] lg:pt-[17vw] xl:pt-[25vw] 3xl:pt-[26vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
                <div className="lg:flex lg:items-center lg:justify-between"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="text-box text-white text-center lg:text-start lg:w-[50%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 mb-[0.8rem] font-[200]' >About Us</p>
                        <h1 className='h1 font-[200] tracking-[-0.2rem] leading-[1.2]' >Crafting experiences, <strong>not just ownership.</strong></h1>
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
                        <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Redefining luxury through <strong>innovation, style, and legacy.</strong></h2>

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

                        <p className='para mt-[2rem]' >The House of Big Boy Toyz brings together luxury, lifestyle, and automotive passion to create an ecosystem designed for those who appreciate the extraordinary. What began as India’s most trusted destination for pre-owned supercars has evolved into a world of curated experiences, premium verticals, and exclusive offerings. Here, performance meets elegance, craftsmanship meets aspiration, and every detail reflects refinement. BBT is more than a brand—it’s a way of life built for the bold.</p>

                        <div className="items-center hidden lg:flex mt-[3rem]">
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem] mr-[1rem] 3xl:mr-[2rem] ">
                                <img  className='mr-[0.6rem] w-[1.5rem] 3xl:w-[2.2rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='para font-[500]' >RERA Approved</p>
                            </div>
                            <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem]">
                                <img  className='mr-[0.6rem] w-[1.5rem] 3xl:w-[2.2rem]' src="/images/a-intro-green-check.png" alt="" />
                                <p className='para font-[500]' >Approved Building Plan</p>
                            </div>
                        </div>

                        <div className="items-center hidden lg:flex mt-[5rem]">
                            <div className="lg:pr-[2rem] lg:pl-[3.5rem] lg:border-l lg:last:border-r lg:border-[#D9D9D9] 3xl:pl-[5rem]">
                                <h3 className='2xl:text-[4rem] 3xl:text-[5.5rem]' >100+</h3>
                                <p className='f-26' >Luxury Homes Delivered Nationwide</p>
                            </div>
                             <div className="lg:pr-[2rem] lg:pl-[3.5rem] lg:border-l lg:last:border-r lg:border-[#D9D9D9] 3xl:pl-[5rem]">
                                <h3 className='2xl:text-[4rem] 3xl:text-[5.5rem]' >07+</h3>
                                <p className='f-26' >Cities & Expanding Presence.</p>
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
                                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >We’re here with a mission to create extraordinary living spaces.</h2>
                            </div>
                        </div>
                        <div className="flex justify-end flex-wrap">
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#CFCFCF] lg:flex-row lg:text-start lg:justify-between lg:rounded-[4rem] lg:px-[6rem] lg:pt-[4rem] lg:pb-[7rem] 3xl:pt-[7rem] 3xl:pb-[15rem] 3xl:px-[10rem] 3xl:rounded-[7rem]"
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem] lg:w-max' >Our Mission</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300] lg:w-[60%]' >To create extraordinary spaces blending innovation, comfort, and timeless design—delivering value, exceptional service, and meaningful lifestyle experiences for those who refuse compromise.</p>
                            </div>
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#E8E8E8] lg:flex-row lg:text-start lg:justify-between lg:rounded-[4rem] lg:px-[6rem] lg:pt-[4rem] lg:pb-[7rem] 3xl:pt-[7rem] 3xl:pb-[15rem] 3xl:px-[10rem] 3xl:rounded-[7rem] lg:-mt-[4rem] lg:w-[90%] 3xl:-mt-[8rem]" 
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem]' >Our Vision</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300] lg:w-[60%]' >To redefine luxury living by creating spaces that inspire individuality, elevate lifestyles, and reflect the highest standards of design, craftsmanship, and exclusivity.</p>
                            </div>
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#ffff] lg:rounded-[4rem] lg:w-[70%] lg:-mt-[4rem] lg:text-start 3xl:-mt-[8rem] 3xl:px-[10rem] 3xl:py-[6rem] 3xl:rounded-[7rem]"
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem] lg:mb-[0rem]' >Our Ethical Promises</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300]' >We commit to transparency, integrity, excellence, and trust in every decision.</p>
                                <ul className='flex flex-wrap lg:justify-between' >
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/images/a-commitment-usp-1.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>Transparency</strong> in every step</p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/images/a-commitment-usp-2.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>Quality</strong> without compromise</p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/images/a-commitment-usp-3.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>Customer</strong> first, always</p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/images/a-commitment-usp-4.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' >Built on <strong>integrity & trust</strong></p>
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
                        <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >We stand apart through <strong>the following key parameters.</strong></h2>
                    </div>
                    <p className='para my-[2rem] lg:w-[45%]' >We distinguish ourselves through uncompromising standards, refined craftsmanship, and a deep understanding of luxury living. Every decision, design, and detail reflects purpose and precision. These parameters shape who we are, ensuring excellence, trust, and consistency in everything we create—setting us apart as leaders in premium experiences.</p>
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
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Curated luxury, not mass construction</p>
                            <p className='para' >Unlike volume-driven builders, every project is selectively developed to maintain exclusivity, rarity, and a bespoke identity.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/images/a-why-usp-2.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Turnkey luxury living experience</p>
                            <p className='para' >Fully finished, thoughtfully detailed, and lifestyle-ready residences crafted for effortless ownership and elevated everyday living.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/images/a-why-usp-3.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Design-first development philosophy</p>
                            <p className='para' >Spaces are designed with global architects, luxury interior specialists, and lifestyle experts ensuring aesthetics are as exceptional as functionality.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/images/a-why-usp-4.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Uncompromising quality & transparency</p>
                            <p className='para' >From materials to processes, everything is benchmarked to global standards, backed by complete transparency and ethical practices.</p>
                        </div>
                    </li>
                </ul>

                <div className="flex items-center justify-center w-max bg-white rounded-[3rem] py-[1.5rem] px-[3rem] mt-[5rem] mx-auto text-black lg:rounded-full lg:py-[2rem] 3xl:p-[4rem] 3xl:mt-[7rem]"
                    data-aos="fade-up" 
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="icon-box mr-[2.5rem] ">
                        <img className='w-[8rem] lg:w-[7rem] 3xl:w-[10rem]' src="/images/a-schedule-img.webp" alt="" />
                    </div>
                    <div className='lg:flex lg:items-center' >
                        <div>
                            <p className='max-[1023px]:text-[2rem] f-26 font-medium hidden lg:block mb-[1rem]' > Schedule A Consultation Call!</p>
                            <p className='max-[1023px]:text-[2rem] f-26 font-medium lg:hidden tracking-[-0.1rem] mb-[1rem]' >Schedule a visit today!</p>
                            <div className="flex flex-col lg:flex-row">
                                <a className='max-[1023px]:text-[1.4rem] f-22 text-[#808080] flex border-b border-[#D9D9D9] last:border-0 pb-[0.8rem] mb-[0.8rem] lg:border-b-0 lg:pb-0 lg:mr-0 lg:px-[1rem] lg:last:border-r lg:border-l lg:last:border-l 3xl:px-[2rem]' href="mailto:realty@bigboytoyz.com">
                                    <img className='mr-[1rem] w-[1.8rem] object-contain 3xl:w-[2.8rem]' src="/images/a-grey-mail.png" alt="" />
                                    realty@bigboytoyz.com
                                </a>
                                <a className='max-[1023px]:text-[1.4rem] f-22 text-[#808080] flex border-b border-[#D9D9D9] last:border-0 pb-[0.8rem] mb-[0.8rem] lg:border-b-0 lg:pb-0 lg:mr-0 lg:px-[1rem] lg:last:border-r lg:border-l lg:last:border-l 3xl:px-[2rem]' href="tel:+91 99999 990 30">
                                    <img className='mr-[1rem] w-[1.8rem] object-contain 3xl:w-[2.8rem]' src="/images/a-grey-tel.png" alt="" />
                                    (+91) 99999 990 30
                                </a>
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
        </div>
   </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#fff]' >
        <div className="container"
            data-aos="fade-up" 
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className='flex justify-between flex-col lg:flex-row lg:items-center' >
                <div className='lg:w-[40%]' >
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >projects type</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >We deal in <strong>creating spaces across verticals.</strong></h2>
                </div>
                <p className='para mt-[2rem] lg:m-[0] lg:w-[45%]' >We create innovative spaces across diverse verticals, transforming ideas into functional, inspiring environments. Our focus is design, precision, and purpose—delivering experiences that elevate living, working, and connecting.</p>
            </div>
            <div className="flex bg-[#F6F6F6] flex-col lg:flex-row justify-between mt-[3rem] p-[2rem] rounded-[1.5rem] lg:p-[4rem] 3xl:mt-[5rem] 3xl:rounded-[3rem] 3xl:py-[7rem] 3xl:px-[6rem]">
                <div className="lg:w-[40%]">
                    <h3 className='mb-[1.5rem]' >Residential Projects</h3>
                    <p className='para' >Our residential projects combine thoughtful design, quality materials, and expert craftsmanship to create beautiful, functional living spaces tailored to modern lifestyles, comfort, sustainability, and long-term value, community, innovation, trust, excellence.</p>
                    <div className='mt-[3rem] hidden lg:block 3xl:mt-[6rem]' >
                        <p className='f-20 uppercase text-[#6C6C6C]' >Key Highlights</p>
                        <ul>
                            <li className='flex mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem] lg:items-center 2xl:pt-[1.5rem] 2xl:mt-[1.5rem] 2xl:last:pb-[1.5rem] 3xl:pt-[2rem] 3xl:mt-[3rem] 3xl:last:pb-[2rem]' >
                                <span className='mr-[1rem]' ><img className='w-[2rem] 3xl:w-[3rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                <p className='f-24 tracking-tighter' >Designed for modern comfortable living</p>
                            </li>
                            <li className='flex mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem] lg:items-center 2xl:pt-[1.5rem] 2xl:mt-[1.5rem] 2xl:last:pb-[1.5rem] 3xl:pt-[2rem] 3xl:mt-[3rem] 3xl:last:pb-[2rem]' >
                                <span className='mr-[1rem]' ><img className='w-[2rem] 3xl:w-[3rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                <p className='f-24 tracking-tighter' >High-quality materials and durability</p>
                            </li>
                            <li className='flex mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem] lg:items-center 2xl:pt-[1.5rem] 2xl:mt-[1.5rem] 2xl:last:pb-[1.5rem] 3xl:pt-[2rem] 3xl:mt-[3rem] 3xl:last:pb-[2rem]' >
                                <span className='mr-[1rem]' ><img className='w-[2rem] 3xl:w-[3rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                <p className='f-24 tracking-tighter' >Smart home features and automation</p>
                            </li>
                            <li className='flex mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem] lg:items-center 2xl:pt-[1.5rem] 2xl:mt-[1.5rem] 2xl:last:pb-[1.5rem] 3xl:pt-[2rem] 3xl:mt-[3rem] 3xl:last:pb-[2rem]' >
                                <span className='mr-[1rem]' ><img className='w-[2rem] 3xl:w-[3rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                <p className='f-24 tracking-tighter' >Sustainable, eco-friendly building solutions</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-[52%] mt-[2rem] lg:mt-[0]">
                    <img className="w-full" src="/images/a-proj-img-1.webp" alt="" />
                </div>
                <div className="lg:hidden mt-[3rem]">
                    <p className='text-[1.5rem] uppercase text-[#6C6C6C]' >Key Highlights</p>
                    <ul className='pb-[1.5rem]' >
                            <li className='flex items-center mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem]' >
                                <span className='mr-[1rem]' ><img className='w-[1.5rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                <p className='max-[1023px]:text-[1.6rem] tracking-tighter f-24 font-medium' >Designed for modern comfortable living</p>
                            </li>
                            <li className='flex items-center mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem]' >
                                <span className='mr-[1rem]' ><img className='w-[1.5rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                <p className='max-[1023px]:text-[1.6rem] tracking-tighter f-24 font-medium' >High-quality materials and durability</p>
                            </li>
                            <li className='flex items-center mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem]' >
                                <span className='mr-[1rem]' ><img className='w-[1.5rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                <p className='max-[1023px]:text-[1.6rem] tracking-tighter f-24 font-medium' >Smart home features and automation</p>
                            </li>
                            <li className='flex items-center mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem]' >
                                <span className='mr-[1rem]' ><img className='w-[1.5rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                <p className='max-[1023px]:text-[1.6rem] tracking-tighter f-24 font-medium' >Sustainable, eco-friendly building solutions</p>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between flex-col lg:flex-row"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="lg:w-[48.5%] flex bg-[#F6F6F6] flex-col justify-between mt-[3rem] p-[2rem] rounded-[1.5rem] lg:p-[3rem] ">
                    <div className="hidden lg:block mt-[2rem]">
                        <img className="w-full " src="/images/a-proj-img-2.webp" alt="" />
                    </div>
                    <div className="mt-[2.5rem]">
                        <h3 className='mb-[1.5rem]' >Commercial Projects</h3>
                        <p className='para' >Our commercial projects focus on innovative design, functional layouts, and durable construction, delivering efficient, modern spaces that support business growth and long-term success.</p>
                    </div>
                    <div className="lg:hidden mt-[2rem]">
                        <img className="w-full " src="/images/a-proj-img-2.webp" alt="" />
                    </div>
                    <div className="mt-[3rem] lg:mt-[1rem]">
                        <p className='text-[1.5rem] uppercase text-[#6C6C6C] lg:hidden' >Key Highlights</p>
                        <ul className='pb-[1.5rem] lg:pb-[1rem]' >
                                <li className='flex items-center mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem] 2xl:pt-[1.5rem] 2xl:mt-[1.5rem] 2xl:last:pb-[1.5rem] 3xl:pt-[2rem] 3xl:mt-[3rem] 3xl:last:pb-[2rem]' >
                                    <span className='mr-[1rem]' ><img className='w-[1.5rem] lg:w-[1.8rem] 3xl:w-[3rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                    <p className='max-[1023px]:text-[1.6rem] tracking-tighter f-24 font-medium lg:font-normal' >Optimized layouts for productivity</p>
                                </li>
                                <li className='flex items-center mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem] 2xl:pt-[1.5rem] 2xl:mt-[1.5rem] 2xl:last:pb-[1.5rem] 3xl:pt-[2rem] 3xl:mt-[3rem] 3xl:last:pb-[2rem]' >
                                    <span className='mr-[1rem]' ><img className='w-[1.5rem] lg:w-[1.8rem] 3xl:w-[3rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                    <p className='max-[1023px]:text-[1.6rem] tracking-tighter f-24 font-medium lg:font-normal' >Future-ready infrastructure & technology</p>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-[48.5%] flex bg-[#F6F6F6] flex-col justify-between mt-[3rem] p-[2rem] rounded-[1.5rem] lg:p-[3rem] ">
                    <div className="hidden lg:block mt-[2rem]">
                        <img className="w-full " src="/images/a-proj-img-3.webp" alt="" />
                    </div>
                    <div className="mt-[2.5rem]">
                        <h3 className='mb-[1.5rem]' >Experiential Projects</h3>
                        <p className='para' >Our experiential projects create immersive, interactive environments that engage senses, inspire emotions, and deliver memorable moments through creative design, storytelling, and innovation.</p>
                    </div>
                    <div className="lg:hidden mt-[2rem]">
                        <img className="w-full " src="/images/a-proj-img-3.webp" alt="" />
                    </div>
                    <div className="mt-[3rem] lg:mt-[1rem]">
                        <p className='text-[1.5rem] uppercase text-[#6C6C6C] lg:hidden' >Key Highlights</p>
                        <ul className='pb-[1.5rem] lg:pb-[1rem]' >
                                <li className='flex items-center mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem] 2xl:pt-[1.5rem] 2xl:mt-[1.5rem] 2xl:last:pb-[1.5rem] 3xl:pt-[2rem] 3xl:mt-[3rem] 3xl:last:pb-[2rem]' >
                                    <span className='mr-[1rem]' ><img className='w-[1.5rem] lg:w-[1.8rem] 3xl:w-[3rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                    <p className='max-[1023px]:text-[1.6rem] tracking-tighter f-24 font-medium lg:font-normal' >Immersive design inspiring engagement</p>
                                </li>
                                <li className='flex items-center mt-[1rem] pt-[1rem] border-t border-[#D9D9D9] last:border-b last:pb-[1rem] 2xl:pt-[1.5rem] 2xl:mt-[1.5rem] 2xl:last:pb-[1.5rem] 3xl:pt-[2rem] 3xl:mt-[3rem] 3xl:last:pb-[2rem]' >
                                    <span className='mr-[1rem]' ><img className='w-[1.5rem] lg:w-[1.8rem] 3xl:w-[3rem]' src="/images/a-blk-tick.png" alt="" /></span>
                                    <p className='max-[1023px]:text-[1.6rem] tracking-tighter f-24 font-medium lg:font-normal' >Technology enhancing visitor experience</p>
                                </li>
                        </ul>
                    </div>
                </div>
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
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >A Renowned Name In <strong>the Circuit of Trust.</strong></h2>
                </div>
                <ul className="hidden lg:flex lg:w-[65%]">
                    <li className='border-l border-[#AEAEAE] last:border-r px-[2rem] h-max 3xl:pl-[5rem]' >
                        <h3 className='3xl:text-[5.5rem]' >20+</h3>
                        <p className='f-26' >Years Delivering Excellence & Trust</p>
                    </li>
                    <li className='border-l border-[#AEAEAE] last:border-r px-[2rem] h-max 3xl:pl-[5rem]' >
                        <h3 className='3xl:text-[5.5rem]' >50+</h3>
                        <p className='f-26' >Landmark Projects Built With Pride</p>
                    </li>
                    <li className='border-l border-[#AEAEAE] last:border-r px-[2rem] h-max 3xl:pl-[5rem]' >
                        <h3 className='3xl:text-[5.5rem]' >5000+</h3>
                        <p className='f-26' >Happy Clients Across Multiple Regions</p>
                    </li>
                </ul>
            </div>
            <div className="flex lg:justify-between flex-col lg:flex-row flex-wrap mt-[1.5rem] lg:mt-[2.5rem] 3xl:mt-[10rem]">
                <p className='lg:w-[30%] max-[1023px]:text-[1.4rem] f-26 font-light' ><strong>These milestone achievements</strong> reflect our journey of growth and excellence. With <strong>dedication, innovation, and trust,</strong> we’ve built relationships that last. Every number tells a story of <strong>quality, consistency, and commitment</strong> shaping our reputation in the industry.</p>
                <ul className='lg:w-[65%] mt-[2.5rem] flex overflow-x-scroll w-[100vw] -mx-[20px] px-[2rem] gap-[3rem] no-scrollbar lg:gap-[1.5rem] lg:mx-[0] lg:px-[0] lg:mt-[0]' >
                    <li className='bg-[#fff] p-[2rem] rounded-[2rem] min-w-[75vw] lg:min-w-[31%] lg:p-[1rem] lg:rounded-[1rem] lg:pb-[2rem] 3xl:p-[2rem] 3xl:pb-[3rem] 3xl:rounded-[2rem]' >
                        <Link href="" >
                            <div className="img-outer relative ">
                                <div className="img-box">
                                    <img className='rounded-[2rem] w-full lg:rounded-[1rem]' src="/images/a-pro-slide-1.webp" alt="" />
                                </div>
                                <img className=' absolute bottom-[2rem] right-[2rem] w-[15rem] lg:w-[8rem] lg:bottom-[1.2rem] lg:right-[1.2rem] 3xl:w-[13rem] 3xl:right-[2rem] 3xl:bottom-[2rem]' src="/images/a-pro-logo-1.webp" alt="" />
                            </div>
                            <div className="mt-[2.5rem] lg:mt-[1.5rem]">
                                <p className='max-[1023px]:text-[1.7rem] f-24 text-[#333333] mb-[0.5rem] font-[500]' >Cars.co</p>
                                <p className='para text-[#333333]' >Trusted cars, smart solutions, seamless support for every buyer.</p>
                            </div>
                        </Link>
                    </li>
                     <li className='bg-[#fff] p-[2rem] rounded-[2rem] min-w-[75vw] lg:min-w-[31%] lg:p-[1rem] lg:rounded-[1rem] lg:pb-[2rem] 3xl:p-[2rem] 3xl:pb-[3rem] 3xl:rounded-[2rem]' >
                        <Link href="" >
                            <div className="img-outer relative ">
                                <div className="img-box">
                                    <img className='rounded-[2rem] w-full lg:rounded-[1rem]' src="/images/a-pro-slide-2.webp" alt="" />
                                </div>
                                <img className=' absolute bottom-[2rem] right-[2rem] w-[15rem] lg:w-[8rem] lg:bottom-[1.2rem] lg:right-[1.2rem] 3xl:w-[13rem] 3xl:right-[2rem] 3xl:bottom-[2rem]' src="/images/a-pro-logo-2.webp" alt="" />
                            </div>
                            <div className="mt-[2.5rem] lg:mt-[1.5rem]">
                                <p className='max-[1023px]:text-[1.7rem] f-24 text-[#333333] mb-[0.5rem] font-[500]' >Big Boy Toyz Luxury</p>
                                <p className='para text-[#333333]' >Premium exotic cars with unmatched quality, performance, and luxury.</p>
                            </div>
                        </Link>
                    </li>
                     <li className='bg-[#fff] p-[2rem] rounded-[2rem] min-w-[75vw] lg:min-w-[31%] lg:p-[1rem] lg:rounded-[1rem] lg:pb-[2rem] 3xl:p-[2rem] 3xl:pb-[3rem] 3xl:rounded-[2rem]' >
                        <Link href="" >
                            <div className="img-outer relative ">
                                <div className="img-box">
                                    <img className='rounded-[2rem] w-full lg:rounded-[1rem]' src="/images/a-pro-slide-3.webp" alt="" />
                                </div>
                                <img className=' absolute bottom-[2rem] right-[2rem] w-[15rem] lg:w-[8rem] lg:bottom-[1.2rem] lg:right-[1.2rem] 3xl:w-[13rem] 3xl:right-[2rem] 3xl:bottom-[2rem]' src="/images/a-pro-logo-3.webp" alt="" />
                            </div>
                            <div className="mt-[2.5rem] lg:mt-[1.5rem]">
                                <p className='max-[1023px]:text-[1.7rem] f-24 text-[#333333] mb-[0.5rem] font-[500]' >Queens Drive Club</p>
                                <p className='para text-[#333333]' >Exclusive club offering premium cars, luxury experiences, and benefits.</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className="lg:hidden mt-[4rem]">
                    <li className='flex items-center mt-[1.5rem] pt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] ' >
                        <h3 className='mr-[1rem] w-[25%]' >20+</h3>
                        <p className='f-26 w-[70%] para text-[#333333]' >Years Delivering <strong>Excellence & Trust</strong></p>
                    </li>
                    <li className='flex items-center mt-[1.5rem] pt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] ' >
                        <h3 className='mr-[1rem] w-[25%]' >50+</h3>
                        <p className='f-26 w-[70%] para text-[#333333]' >Landmark Projects <strong>Built With Pride</strong></p>
                    </li>
                    <li className='flex items-center mt-[1.5rem] pt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] ' >
                        <h3 className='mr-[1rem] w-[25%]' >5000+</h3>
                        <p className='f-26 w-[70%] para text-[#333333]' >Happy Clients Across <strong>Multiple Regions</strong></p>
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
                    <Link href="" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/images/a-just-1.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >The Pavilion</h4>
                        <div className="mt-[2rem] flex justify-between border-t border-b border-[#D9D9D9] py-[2rem] lg:py-[1.5rem] lg:mt-[1rem] 3xl:py-[2rem]">
                            <p className='text-[1.2rem] lg:text-[0.8rem] xl:text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.26rem] rounded-full border border-[#D4D4D4] h-[3rem] lg:h-[2.5rem] 3xl:h-[3.5rem] px-[2rem] lg:px-[1.5rem] text-[#959595] w-max flex items-center uppercase ' >Commercial</p>
                            <p className='max-[1023px]:text-[1.9rem] f-20 flex items-center' > 
                                <img className='invert mr-[0.5rem] w-[1.5rem] lg:w-[1rem] ' src="/images/h-pro-location.png" alt="" /> Vadodara
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <Link href="" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/images/a-just-2.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >BBT One</h4>
                        <div className="mt-[2rem] flex justify-between border-t border-b border-[#D9D9D9] py-[2rem] lg:py-[1.5rem] lg:mt-[1rem] 3xl:py-[2rem]">
                            <p className='text-[1.2rem] lg:text-[0.8rem] xl:text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.26rem] rounded-full border border-[#D4D4D4] h-[3rem] lg:h-[2.5rem] 3xl:h-[3.5rem] px-[2rem] lg:px-[1.5rem] text-[#959595] w-max flex items-center uppercase ' >Commercial</p>
                            <p className='max-[1023px]:text-[1.9rem] f-20 flex items-center' > 
                                <img className='invert mr-[0.5rem] w-[1.5rem] lg:w-[1rem] ' src="/images/h-pro-location.png" alt="" /> Vadodara
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <Link href="" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/images/a-just-3.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >The Royal Pavilion</h4>
                        <div className="mt-[2rem] flex justify-between border-t border-b border-[#D9D9D9] py-[2rem] lg:py-[1.5rem] lg:mt-[1rem] 3xl:py-[2rem]">
                            <p className='text-[1.2rem] lg:text-[0.8rem] xl:text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.26rem] rounded-full border border-[#D4D4D4] h-[3rem] lg:h-[2.5rem] 3xl:h-[3.5rem] px-[2rem] lg:px-[1.5rem] text-[#959595] w-max flex items-center uppercase ' >Commercial</p>
                            <p className='max-[1023px]:text-[1.9rem] f-20 flex items-center' > 
                                <img className='invert mr-[0.5rem] w-[1.5rem] lg:w-[1rem] ' src="/images/h-pro-location.png" alt="" /> Lucknow
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <Link href="" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/images/a-just-4.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >Sora</h4>
                        <div className="mt-[2rem] flex justify-between border-t border-b border-[#D9D9D9] py-[2rem] lg:py-[1.5rem] lg:mt-[1rem] 3xl:py-[2rem]">
                            <p className='text-[1.2rem] lg:text-[0.8rem] xl:text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.26rem] rounded-full border border-[#D4D4D4] h-[3rem] lg:h-[2.5rem] 3xl:h-[3.5rem] px-[2rem] lg:px-[1.5rem] text-[#959595] w-max flex items-center uppercase ' >Commercial</p>
                            <p className='max-[1023px]:text-[1.9rem] f-20 flex items-center' > 
                                <img className='invert mr-[0.5rem] w-[1.5rem] lg:w-[1rem] ' src="/images/h-pro-location.png" alt="" /> Mandi, H P
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </section>


    </>

  )
}

export default BannerSection
