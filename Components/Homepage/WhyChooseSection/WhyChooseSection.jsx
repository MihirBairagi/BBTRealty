"use client";
import React from 'react'

function WhyChooseSection() {
  return (
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
  )
}

export default WhyChooseSection