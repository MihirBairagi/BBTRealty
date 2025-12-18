"use client";
import React from 'react'
import Link from "next/link";
import Slider from 'react-slick';

function IntroSection() {

    
    // realtime slider 
    let settings = {
        centerMode: false,            
        slidesToShow: 1,             
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        pauseOnHover: true,
    };
           
    function NextArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={`hp-slider-arrow pro-desk-slider-arrow ${className}`} onClick={onClick}>
                <img src="/images/hp-slider-arrow.png" alt="" />
            </div>
        );
    }
    
    function PrevArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={`hp-slider-arrow pro-desk-slider-arrow ${className}`} onClick={onClick}>
                <img src="/images/hp-slider-arrow.png" alt="" />
            </div>
        );
    }

  return (
    <>
     <section className='h-intro-section py-[7rem] lg:pt-[12rem] lg:pb-[8rem] bg-white -mt-10 md:-mt-16 lg:-mt-24 1xl:-mt-[7.8rem]  1xl:pt-[15rem] 1xl:pb-[10rem] 3xl:-mt-[9.5rem] 3xl:pt-[20rem] 3xl:pb-[13rem]' >
        <div className="container">
            <div className="h-intro-box"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="head-box relative mb-[2rem]">
                    <h2 className='max-[1023px]:text-[2rem] h2 font-[500] hp-intro-after relative' >Introduction</h2>
                </div>
                <div className="content-box lg:w-[40%] lg:mt-[5rem]">
                    <h2 className='h2 mb-[2rem] font-[300] leading-[1.2] tracking-[-0.2rem] 1xl:w-[77%] 3xl:w-[80%]' >Crafting landmark spaces with the <strong>precision of a luxury legacy.</strong></h2>
                    <p className='hidden lg:block para' >BBT Realty extends the trusted excellence of Big Boy Toyz into modern living, premium commercial developments, and serene wellness destinations—designed for those who expect more from life.</p>
                    <img className=' hidden lg:block lg:w-[9rem] xl:w-[10rem] mt-[3rem] mb-[7rem] 1xl:w-[12rem] 1xl:mt-[4rem] 1xl:mb-[8rem] 3xl:w-[15rem] 3xl:mt-[5rem] 3xl:mb-[11rem]' src="/images/h-intro-logo.webp" alt="" />
                </div>
                <div className="h-intro-listing flex flex-col-reverse lg:flex-row lg:justify-between">
                    <div className="h-intro-list lg:w-[45%]">
                        <div className="img-box">
                            <img className='w-[100%]' src="/images/h-intro-img-1.webp" alt="" />
                        </div>
                    </div>
                    <div className="h-intro-list-2 lg:w-[45%] lg:-mt-[35rem] 1xl:-mt-[46rem] 3xl:-mt-[57rem]">
                        <div className="img-box mt-[2rem] mb-[3rem] 1xl:mb-[5rem]" >
                            <img className='w-[100%]' src="/images/h-intro-img-2.webp" alt="" />
                        </div>
                        <p className='lg:hidden para font-[300]' >BBT Realty extends the trusted excellence of Big Boy Toyz into modern living, premium commercial developments, and serene wellness destinations—designed for those who expect more from life.</p>
                        <div className="h-intro-inner-box flex flex-col-reverse lg:flex-col"
                        data-aos="fade-up" 
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        >
                            <div className="flex my-[4rem] items-center lg:mt-[2rem] lg:mb-[0]">
                                <div className="icon">
                                    <img className='w-[15rem] max-w-[80px] xl:max-w-[10rem] 3xl:max-w-[15rem]' src="/images/h-intro-qoute.png" alt="" />
                                </div>
                                <div className="text ml-[3rem] 3xl:ml-[5rem]">
                                    <h4 className='max-[1023px]:text-[2rem] h3 tracking-[-0.1rem] font-[400] leading-[1.2] mb-[1rem]' >Every space we build carries the promise of exceptional living.</h4>
                                    <p className='max-[1023px]:text-[1.4rem] f-24 text-[#959595]' >@bigboytoyz_india</p>
                                </div>
                            </div>
                            <div>
                                <div className="line-box grey-line relative my-[3rem] 1xl:my-[5rem] 3xl:my-[7rem]">
                                    <p className='max-[1023px]:text-[1.2rem] para uppercase  text-[#545454] font-[500] hp-promise-after relative'  >Our Promise</p>
                                </div>
                                <ul className="flex items-center gap-[1.2rem] 1xl:gap-[1.8rem]">
                                    <li className='bg-[#F3F3F3] w-[31.5%] p-[1.5rem] rounded-[1rem] 1xl:p-[2.5rem] 1xl:rounded-[1.5rem]' >
                                        <p className='max-[1023px]:text-[2.2rem] h3 font-[500]' >04</p>
                                        <p className='max-[1023px]:text-[1.4rem] f-24 leading-[1.3] mt-[1rem] font-[300]' > <strong>Projects</strong> Across India</p>
                                    </li>
                                    <li className='bg-[#F3F3F3] w-[31.5%] p-[1.5rem] rounded-[1rem] 1xl:p-[2.5rem] 1xl:rounded-[1.5rem]' >
                                        <p className='max-[1023px]:text-[2.2rem] h3 font-[500]' >15+</p>
                                        <p className='max-[1023px]:text-[1.4rem] f-24 leading-[1.3] mt-[1rem] font-[300]' >Combined <strong>Portfolio</strong></p>
                                    </li>
                                    <li className='bg-[#F3F3F3] w-[31.5%] p-[1.5rem] rounded-[1rem] 1xl:p-[2.5rem] 1xl:rounded-[1.5rem]' >
                                        <p className='max-[1023px]:text-[2.2rem] h3 font-[500]' >100%</p>
                                        <p className='max-[1023px]:text-[1.4rem] f-24 leading-[1.3] mt-[1rem] font-[300]' > <strong>Quality</strong> Commitment</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className='h-projects-section bg-[#161616]' >
        <div className="container">
            <div className="h-projects-box text-white py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 1xl:pb-[13rem] 3xl:py-[14rem] 3xl:pb-[17rem]"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="head-box flex justify-between border-b border-[#474747] pb-[5rem] mb-[5rem] 1xl:pb-[8rem] 1xl:mb-[8rem]">
                    <div className="text lg:w-[45%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[2rem]' >Our Projects</p>
                        <h2 className='h2 font-[300] leading-[1.2] tracking-[-0.2rem]' >Discover our projects <strong>showcasing modern excellence.</strong></h2>
                    </div>
                    <div className="contact items-center hidden lg:flex lg:w-max">
                        <img className='lg:w-[4.5rem] lg:mr-[1.5rem] xl:w-[5.2rem] 1xl:w-[5.8rem]' src="/images/h-pro-call.png" alt="" />
                        <div className="text">
                            <p className='f-22 font-[300] lg:mb-[0.2rem]' > Speak With Us</p>
                            <a className='f-28' href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                        </div>
                    </div>
                </div>
                <div className="h-projects-main-box">
                    <div className="h-pro-inner-head flex justify-between flex-col lg:flex-row lg:items-center">
                        <div className="head-text">
                            <h3 className='h3' >PAVILION</h3>
                            <div className="loc flex items-center mt-[1rem] mb-[1.5rem] lg:mt-[0.2rem] lg:mb-[0rem] ">
                                <span>
                                    <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/images/h-pro-location.png" alt="" />
                                </span>
                                <p className='max-[1023px]:text-[1.6rem] f-20' >Vadodara</p>
                            </div>
                        </div>
                       <div className="text lg:w-[55%]">
                            <p className='para font-[300]' >Pavilion brings refined architecture, spacious residences, and curated lifestyle amenities together—offering a luxury community designed for comfort, privacy, and elevated everyday living.</p>
                       </div>
                        <div className="btn-box hidden lg:block">
                            <Link href="" className='com-btn'>
                                View Project
                                <span>
                                    <img className='btn-arrow' src="/images/h-btn-blk-arrow-.png" alt="" />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="h-pro-list-1 flex flex-col-reverse lg:flex-col lg:mt-[5rem]">
                        <div className="ups-box max-[1023px]:mt-[5rem]">
                            <ul className='flex flex-wrap items-center gap-y-[3rem]' >
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-pro-pav-1.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > 2 & 3 BHK Luxury Residences</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-pro-pav-2.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > 3 & 4 BHK Duplex Penthouses</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-pro-pav-3.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Courtyard Green Zones</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-pro-pav-4.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Swimming Pool with Deck</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-pro-pav-5.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Sky Club with Cinematic Views</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-pro-pav-6.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > 24/7 Security & Surveillance</p>
                                </li>   
                            </ul>
                        </div>
                        <div className="h-pro-slider-box my-[2rem] lg:my-[5rem] "
                            data-aos="fade-up" 
                            data-aos-easing="linear"
                            data-aos-duration="500"
                        > 
                            <Slider {...settings} >
                                <li>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%]' src="/images/h-pro-slider-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%]' src="/images/h-pro-slider-mob-1.webp" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%]' src="/images/h-pro-slider-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%]' src="/images/h-pro-slider-mob-1.webp" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%]' src="/images/h-pro-slider-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%]' src="/images/h-pro-slider-mob-1.webp" alt="" />
                                    </div>
                                </li>
                            </Slider>
                        </div>
                    </div>
                    <div className="btn-box lg:hidden">
                            <Link href="" className='com-btn mt-[5rem]' >
                                View Project
                                <span>
                                    <img className='btn-arrow' src="/images/h-btn-blk-arrow-.png" alt="" />
                                </span>
                            </Link>
                    </div>
                    <div className="h-pro-list-2 flex flex-wrap mt-[5rem] lg:mt-[3rem] gap-[5rem] lg:justify-between lg:gap-[3rem]" 
                        data-aos="fade-up" 
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <div className="h-pro-list relative overflow-hidden rounded-[2rem] w-[100%] lg:w-[48%]">
                            <div className="img-box">
                                <img className='w-[100%]' src="/images/h-pro-list-2.webp" alt="" />
                            </div>
                            <div className="text-box absolute bottom-0 w-full h-full flex flex-col justify-end p-[3rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.83%,rgba(0,0,0,0.477963)_59.16%,#000_100%)]">
                                <h3 className='h3' >BBT ONE</h3>
                                <div className="loc flex items-center mt-[0.5rem] mb-[1.5rem] lg:mt-[0.5rem] lg:mb-[0rem]">
                                    <span>
                                        <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/images/h-pro-location.png" alt="" />
                                    </span>
                                    <p className='max-[1023px]:text-[1.6rem] f-20' >Karol Bagh, Delhi</p>
                                </div>
                                <p className='max-[1023px]:text-[1.4rem] f-18 font-[300] lg:mt-[1.5rem]' >A premium commercial landmark in the heart of Delhi, designed for high visibility and business excellence.</p>
                                <Link href="" className='max-[1023px]:text-[1.5rem] f-18 flex items-center mt-[1.5rem]'>
                                    View Project <span><img className='invert ml-[1rem] lg:w-[1.5rem]' src="/images/h-btn-blk-arrow-.png" alt="" /></span>
                                </Link>
                            </div>
                        </div>
                        <div className="h-pro-list relative overflow-hidden rounded-[2rem] w-[100%] lg:w-[48%]">
                            <div className="img-box">
                                <img className='w-[100%]' src="/images/h-pro-list-3.webp" alt="" />
                            </div>
                            <div className="text-box absolute bottom-0 w-full h-full flex flex-col justify-end p-[3rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.83%,rgba(0,0,0,0.477963)_59.16%,#000_100%)]">
                                <h3 className='h3' >The Royale Pavilion</h3>
                                <div className="loc flex items-center mt-[0.5rem] mb-[1.5rem] lg:mt-[0.5rem] lg:mb-[0rem]">
                                    <span>
                                        <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/images/h-pro-location.png" alt="" />
                                    </span>
                                    <p className='max-[1023px]:text-[1.6rem] f-20' >Lucknow</p>
                                </div>
                                <p className='max-[1023px]:text-[1.4rem] f-18 font-[300] lg:mt-[1.5rem] ' >A grand celebration venue designed with regal architecture & luxurious detailing, perfect for weddings, events, & unforgettable moments.</p>
                                <Link href="" className='max-[1023px]:text-[1.5rem] f-18 flex items-center mt-[1.5rem]'>
                                    View Project <span><img className='invert ml-[1rem] lg:w-[1.5rem]' src="/images/h-btn-blk-arrow-.png" alt="" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="h-projects-main-box mt-[6rem]"
                    data-aos="fade-up" 
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="h-pro-inner-head flex justify-between flex-col lg:flex-row lg:items-center">
                        <div className="head-text">
                            <h3 className='h3' >SORA</h3>
                            <div className="loc flex items-center mt-[1rem] mb-[1.5rem] lg:mt-[0.2rem] lg:mb-[0rem] ">
                                <span>
                                    <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/images/h-pro-location.png" alt="" />
                                </span>
                                <p className='max-[1023px]:text-[1.6rem] f-20' >Mandi, Himachal Pradesh</p>
                            </div>
                        </div>
                       <div className="text lg:w-[55%]">
                            <p className='para font-[300]' >A Himalayan wellness retreat designed for calm, clarity, and elevated living among clouds and pine forests.</p>
                       </div>
                        <div className="btn-box hidden lg:block">
                            <Link href="" className='com-btn'>
                                View Project
                                <span>
                                    <img className='btn-arrow' src="/images/h-btn-blk-arrow-.png" alt="" />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="h-pro-list-1 flex flex-col-reverse lg:flex-col lg:mt-[5rem]">
                        <div className="ups-box max-[1023px]:mt-[5rem]">
                            <ul className='flex flex-wrap items-center gap-y-[3rem]' >
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-sora-icon-1.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > 11+ Acre Hilltop Estate</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-sora-icon-2.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Panoramic Valley & Cloud Views</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-sora-icon-3.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Wellness-Focused Architecture</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-sora-icon-4.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Nature Trails & Outdoor Zones</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-sora-icon-5.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Quiet, Secluded Surroundings</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/images/h-sora-icon-6.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Year-Round Pleasant Climate</p>
                                </li>   
                            </ul>
                        </div>
                        <div className="h-pro-slider-box my-[2rem] lg:mt-[5rem] lg:mb-[0rem] "> 
                            <Slider {...settings} >
                                <li>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%]' src="/images/h-sora-img-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%]' src="/images/h-sora-mob-img-1.webp" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%]' src="/images/h-sora-img-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%]' src="/images/h-sora-mob-img-1.webp" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%]' src="/images/h-sora-img-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%]' src="/images/h-sora-mob-img-1.webp" alt="" />
                                    </div>
                                </li>
                            </Slider>
                        </div>
                    </div>
                    <div className="btn-box lg:hidden">
                            <Link href="" className='com-btn mt-[5rem]' >
                                View Project
                                <span>
                                    <img className='btn-arrow' src="/images/h-btn-blk-arrow-.png" alt="" />
                                </span>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='h-why-section bg-white relative' >
        <div className="container">
            <div className="h-why-box flex flex-wrap flex-col-reverse lg:flex-row lg:justify-between pt-[10rem] pb-[7rem] xl:py-[10rem] 1xl:py-[11.5rem] 3xl:py-[14rem]"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="img-box contents lg:flex lg:items-end lg:w-[27%] 1xl:w-[26%] hp-after-circle-1 relative">
                    <div className="img-box-inner w-[70%] lg:w-[100%] mx-auto relative">
                        <img className='w-[100%]' src="/images/h-why-img-1.webp" alt="" />
                    </div>
                </div>
                <div className="text-box mt-[4rem] mb-[8rem] lg:mt-[2rem] lg:mb-[5rem] lg:w-[38%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] text-center 3xl:mb-[2rem]' >Why Choose BBT Realty</p>
                    <h2 className='h2-big font-[300] leading-[1.2] tracking-[-0.2rem] text-center mb-[2rem]' >Where legacy, precision & trust <strong>shape every square foot.</strong></h2>
                    <p className='para font-[300] text-center' >Backed by India’s most iconic luxury brand, BBT Realty brings unmatched credibility, obsessive attention to detail, and a commitment to creating spaces that elevate how people live, celebrate, and experience life.</p>
                    <ul className='mt-[3rem] w-[90%] mx-auto' > 
                        <li className='flex border-b border-[#D9D9D9] pb-[2rem] mb-[2rem] lg:pb-[1rem] lg:mb-[1rem] 1xl:pb-[1.5rem] 1xl:mb-[1.5rem] 3xl:pb-[2rem] 3xl:mb-[2rem]' > 
                            <img className='w-[3.5rem] h-[3.5rem] object-contain mr-[1.5rem] lg:w-[3rem] lg:h-[3rem] 1xl:w-[3.3rem] 1xl:h-[3.3rem] 3xl:w-[4.5rem] 3xl:h-[4.5rem] 3xl:mr-[2.5rem]' src="/images/h-why-usp-1.webp" alt="" />
                            <div className="text">
                                <h6 className=' tracking-tight f-24' >Legacy of trust</h6>
                                <p className='para font-[300]' >A reputation built over years of serving India’s luxury market.</p>
                            </div>
                        </li>
                        <li className='flex border-b border-[#D9D9D9] pb-[2rem] mb-[2rem] lg:pb-[1rem] lg:mb-[1rem] 1xl:pb-[1.5rem] 1xl:mb-[1.5rem] 3xl:pb-[2rem] 3xl:mb-[2rem]' > 
                            <img className='w-[3.5rem] h-[3.5rem] object-contain mr-[1.5rem] lg:w-[3rem] lg:h-[3rem] 1xl:w-[3.3rem] 1xl:h-[3.3rem] 3xl:w-[4.5rem] 3xl:h-[4.5rem] 3xl:mr-[2.5rem]' src="/images/h-why-usp-2.webp" alt="" />
                            <div className="text">
                                <h6 className=' tracking-tight f-24' >Precision in every detail</h6>
                                <p className='para font-[300]' >The same quality obsession from our automotive DNA flows into real estate.</p>
                            </div>
                        </li>
                        <li className='flex border-b border-[#D9D9D9] pb-[2rem] mb-[2rem] lg:pb-[1rem] lg:mb-[1rem] 1xl:pb-[1.5rem] 1xl:mb-[1.5rem] 3xl:pb-[2rem] 3xl:mb-[2rem]' > 
                            <img className='w-[3.5rem] h-[3.5rem] object-contain mr-[1.5rem] lg:w-[3rem] lg:h-[3rem] 1xl:w-[3.3rem] 1xl:h-[3.3rem] 3xl:w-[4.5rem] 3xl:h-[4.5rem] 3xl:mr-[2.5rem]' src="/images/h-why-usp-3.webp" alt="" />
                            <div className="text">
                                <h6 className=' tracking-tight f-24' >Transparent processes</h6>
                                <p className='para font-[300]' >Clear communication, smooth transactions, no hidden surprises.</p>
                            </div>
                        </li>
                        <li className='flex border-b border-[#D9D9D9] pb-[2rem] mb-[2rem] lg:pb-[1rem] lg:mb-[1rem] 1xl:pb-[1.5rem] 1xl:mb-[1.5rem] 3xl:pb-[2rem] 3xl:mb-[2rem]' > 
                            <img className='w-[3.5rem] h-[3.5rem] object-contain mr-[1.5rem] lg:w-[3rem] lg:h-[3rem] 1xl:w-[3.3rem] 1xl:h-[3.3rem] 3xl:w-[4.5rem] 3xl:h-[4.5rem] 3xl:mr-[2.5rem]' src="/images/h-why-usp-4.webp" alt="" />
                            <div className="text">
                                <h6 className=' tracking-tight f-24' >End-to-end guidance</h6>
                                <p className='para font-[300]' >From first enquiry to site visits to documentation — we walk with you.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="img-box contents lg:block lg:w-[27%] 1xl:w-[26%] hp-after-circle-2 relative">
                    <div className="img-box-inner w-[70%] lg:w-[100%] mx-auto relative">
                        <img className='w-[100%]' src="/images/h-why-img-2.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='h-form-section py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem]' >
        <div className="container">
            <div className="h-form-box flex flex-wrap lg:justify-between" 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="text-box w-[100%] lg:w-[40%]">
                    <div className="head-box text-center lg:text-start">
                        <h2 className='h2-big font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem] ' >We’re here <strong>to assist you.</strong></h2>
                        <p className='para font-[300]' >For brochures, pricing, availability or site visits — reach out to our realty team.</p>
                    </div>
                    <div className="info-box  hidden lg:block lg:mt-[2rem]">
                        <div className="flex lg:w-max">
                            <img className=" lg:w-[3rem] lg:mr-[0.8rem] object-contain 1xl:w-[4rem] 3xl:w-[5.2rem] 3xl:mr-[1.5rem]" src="/images/h-form-tel.png" alt=""/>
                            <div className="text flex flex-col items-start">
                                <p className="para font-[300] mb-[0.2rem]"> We are always happy to help</p>
                                <a className="f-20" href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                            </div>
                        </div>
                        <div className="flex lg:w-max lg:mt-[1rem] 1xl:mt-[1.5rem] 3xl:mt-[2rem]">
                            <img className=" lg:w-[3rem] lg:mr-[0.8rem] object-contain 1xl:w-[4rem] 3xl:w-[5.2rem] 3xl:mr-[1.5rem]" src="/images/h-form-mail.png" alt=""/>
                            <div className="text">
                                <p className="para font-[300] mb-[0.2rem]"> The best way to get answer faster.</p>
                                <div className="lg:flex lg:items-start">
                                    <a className="f-20 lg:mr-[0.5rem]" href="mailto:realty@bigboytoyz.com">realty@bigboytoyz.com, </a>
                                    <a className="f-20" href="mailto:pavilion@bigboytoyz.com">pavilion@bigboytoyz.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="media-box flex items-center mt-[3rem] 3xl:mt-[4rem]">
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-1.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-2.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-3.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-4.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-5.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-6.png" alt="" />
                            </a>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="form-box w-[100%] mt-[3rem] lg:mt-[0rem] lg:w-[45%]">

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
                        <div className="select">
                            <select className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' >
                                <option>Choose Property Type*</option>
                                <option>Property Type 1</option>
                                <option>Property Type 2</option>
                            </select>
                        </div>
                        <div className="select">
                            <select className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' > 
                                <option>Select Your State*</option>
                                <option>State 1</option>
                                <option>State 2</option>
                            </select>
                        </div>
                        <button type='submit' className='max-[1023px]:text-[1.85rem] f-20 h-[6rem] bg-black text-white rounded-[1rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] hover:bg-[#414141]' >
                            Submit
                        </button>
                    </form>


                    <div className="info-box lg:hidden mt-[3.5rem]">
                        <div className="flex lg:w-max">
                            <img className=" w-[4.5rem] mr-[1.5rem] object-contain" src="/images/h-form-tel.png" alt=""/>
                            <div className="text">
                                <p className="text-[1.3rem] font-[300] mb-[0.2rem]"> Speak With Us We are always happy to help</p>
                                <a className="text-[1.6rem]" href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                            </div>
                        </div>
                        <div className="flex lg:w-max mt-[1rem]">
                            <img className=" w-[4.5rem] mr-[1.5rem] object-contain" src="/images/h-form-mail.png" alt=""/>
                            <div className="text">
                                <p className="text-[1.3rem] font-[300] mb-[0.2rem]"> The best way to get answer faster.</p>
                                <div className="lg:flex">
                                    <a className="text-[1.6rem]" href="mailto:realty@bigboytoyz.com">realty@bigboytoyz.com</a> <span className='hidden lg:block' >,</span>
                                    <a className="text-[1.6rem]" href="mailto:pavilion@bigboytoyz.com">pavilion@bigboytoyz.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="media-box flex items-center mt-[3rem] ">
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-1.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-2.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-3.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-4.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-5.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-6.png" alt="" />
                            </a>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default IntroSection