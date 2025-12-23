"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

function SiteProgressSection() {

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
    

  return (
    <>
    <section className='pb-[7rem] xl:pb-[10rem] 1xl:pb-[11rem] 3xl:pb-[14rem] bg-white overflow-hidden' >
        <div className="m-auto"
            data-aos="fade-up" 
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className="text-center mb-[3rem] xl:mb-[4rem]">
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Realtime updates</p>
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Current site <strong>progress</strong></h2>
                <p className='para mt-[2rem] lg:w-[50%] lg:mx-auto' >Explore stunning visuals showcasing Pavilion’s architecture, lifestyle, interiors, and amenities crafted for elevated modern living.</p>
            </div>

            <Slider className='cd-realtive-arrow relative' {...settings} >
                <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/images/dp-realtime-list-1.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on July 2025
                            </p>
                        </div>

                    </div>
                </div>
                 <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/images/dp-realtime-list-2.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on July 2025
                            </p>
                        </div>

                    </div>
                </div>
                 <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/images/dp-realtime-list-4.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on July 2025
                            </p>
                        </div>

                    </div>
                </div>
                 <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/images/dp-realtime-list-3.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on July 2025
                            </p>
                        </div>

                    </div>
                </div>
                 <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/images/dp-realtime-list-5.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on July 2025
                            </p>
                        </div>

                    </div>
                </div>

            </Slider>
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#F6F6F6]' >
        <div className="container"
            data-aos="fade-up" 
            data-aos-easing="linear"
            data-aos-duration="500"
        >
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
                        <button type='submit' className='max-[1023px]:text-[1.85rem] f-20 h-[6rem] bg-black text-white rounded-[1rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] hover:bg-[#414141]' >
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

export default SiteProgressSection