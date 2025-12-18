"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerSection = () => {
      useEffect(() => {
        AOS.init();
      }, []);
      
  return (
   
    <section className="bg-[url('/images/dp-banner-mobile.webp')] lg:bg-[url('/images/dp-banner.webp')] bg-cover bg-center bg-no-repeat" >
        <div className="container">
            <div className="pt-[55rem] pb-[8rem] lg:pt-[13vw] xl:pt-[10vw] 1xl:pt-[9vw] 3xl:pt-[8vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
                <div className="lg:flex lg:items-center lg:justify-center">
                    <div className="text-white text-center lg:text-center"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <p className='max-[1023px]:text-[1.5rem] f-18 mb-[0.8rem] flex w-max items-center mx-auto' >
                            <span><img className='w-[1.5rem] mr-[1rem]' src="/images/h-pro-location.png" alt="" /></span>
                            Vadodara,Gujarat
                        </p>
                        <h1 className='h1 font-[200] tracking-[-0.2rem] leading-[1.2] lg:w-[80%] lg:mx-auto' ><strong>Pavilion</strong> — crafted for sophisticated superlative living.</h1>
                        <div className="mt-[3.5rem] lg:mt-[3rem] lg:mb-[5rem] xl:mb-[8rem] 1xl:mb-[12rem]  hidden lg:block" >
                            <div className="img-box relative flex items-center justify-center">
                                <img
                                    src="/images/dp-banner-icon-cover.webp"
                                    alt="Banner Icon"
                                    className="object-contain w-[8rem] lg:w-[8rem] xl:w-[9.5rem] 1xl:w-[13rem] animate-rotate-slow"
                                />

                                <img
                                    src="/images/dp-banner-icon-arrow.png"
                                    alt="Inner Icon"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5rem] xl:w-[2rem]"
                                />
                            </div>


                        </div>
                        <ul className='mt-[1.5rem] flex flex-wrap' >
                            <li className='flex items-center w-50% text-start border-l border-[#ffffff91] even:border-r mt-[1.5rem] pl-[1.5rem] pr-[1rem] lg:w-[25%] lg:pl-[2.5rem] lg:pr-[2rem] xl:pl-[3.5rem] xl:pr-[2.5rem] 3xl:pl-[5rem] 3xl:pr-[3.5rem]' >
                                <img className='w-[3rem] h-[3rem] mr-[1rem] xl:w-[4rem] xl:h-[4rem] xl:mr-[1.5rem] 3xl:w-[5.5rem] 3xl:h-[5.5rem] 3xl:mr-[2rem] object-contain' src="/images/dp-banner-icon-1.png" alt="" />
                                <p className='max-[1023px]:text-[1.4rem] f-24 font-[300] lg:font-[200] lg:leading-[1.3]' >Near reputed <strong>schools & colleges</strong></p>
                            </li>
                            <li className='flex items-center w-50% text-start border-l border-[#ffffff91] even:border-r mt-[1.5rem] pl-[1.5rem] pr-[1rem] lg:w-[25%] lg:pl-[2.5rem] lg:pr-[2rem] xl:pl-[3.5rem] xl:pr-[2.5rem] 3xl:pl-[5rem] 3xl:pr-[3.5rem]' >
                                <img className='w-[3rem] h-[3rem] mr-[1rem] xl:w-[4rem] xl:h-[4rem] xl:mr-[1.5rem] 3xl:w-[5.5rem] 3xl:h-[5.5rem] 3xl:mr-[2rem] object-contain' src="/images/dp-banner-icon-2.png" alt="" />
                                <p className='max-[1023px]:text-[1.4rem] f-24 font-[300] lg:font-[200] lg:leading-[1.3]' >Close to major <strong>city hospitals</strong></p>
                            </li>
                            <li className='flex items-center w-50% text-start border-l border-[#ffffff91] even:border-r mt-[1.5rem] pl-[1.5rem] pr-[1rem] lg:w-[25%] lg:pl-[2.5rem] lg:pr-[2rem] xl:pl-[3.5rem] xl:pr-[2.5rem] 3xl:pl-[5rem] 3xl:pr-[3.5rem]' >
                                <img className='w-[3rem] h-[3rem] mr-[1rem] xl:w-[4rem] xl:h-[4rem] xl:mr-[1.5rem] 3xl:w-[5.5rem] 3xl:h-[5.5rem] 3xl:mr-[2rem] object-contain' src="/images/dp-banner-icon-3.png" alt="" />
                                <p className='max-[1023px]:text-[1.4rem] f-24 font-[300] lg:font-[200] lg:leading-[1.3]' >Metro connectivity <strong>made easy</strong></p>
                            </li>
                            <li className='flex items-center w-50% text-start border-l border-[#ffffff91] even:border-r mt-[1.5rem] pl-[1.5rem] pr-[1rem] lg:w-[25%] lg:pl-[2.5rem] lg:pr-[2rem] xl:pl-[3.5rem] xl:pr-[2.5rem] 3xl:pl-[5rem] 3xl:pr-[3.5rem]' >
                                <img className='w-[3rem] h-[3rem] mr-[1rem] xl:w-[4rem] xl:h-[4rem] xl:mr-[1.5rem] 3xl:w-[5.5rem] 3xl:h-[5.5rem] 3xl:mr-[2rem] object-contain' src="/images/dp-banner-icon-4.png" alt="" />
                                <p className='max-[1023px]:text-[1.4rem] f-24 font-[300] lg:font-[200] lg:leading-[1.3]' >Surrounded by <strong>major landmarks</strong></p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </section>

   


  )
}

export default BannerSection
