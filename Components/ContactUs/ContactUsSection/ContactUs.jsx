"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {

    useEffect(() => {
          AOS.init();
      }, []);

  return (
    <>
     <section className="bg-[url('/images/c-mob-banner.webp')] lg:bg-[url('/images/c-banner.webp')] bg-cover bg-center bg-no-repeat" >
        <div className="container">
            <div className="pt-[34rem] pb-[8rem] lg:pt-[17vw] xl:pt-[15vw] lg:pb-[12rem] 1xl:pb-[15rem] 3xl:pb-[18rem]">
                <div className="lg:flex lg:items-center lg:justify-between"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="text-box text-white text-center lg:text-start lg:w-[50%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 mb-[0.8rem] font-[200]' >Contact Us</p>
                        <h1 className='h1 font-[200] tracking-[-0.2rem] leading-[1.2]' >Connect with <strong>BBt Realty</strong></h1>
                        <p className="para mt-[0.8rem]" >Our team is here to assist you with project details, site visits, and personalised guidance</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#fff]' >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between"
          data-aos="fade-up" 
          data-aos-easing="linear"
          data-aos-duration="500"
        >
                <div className="text-box w-[100%] lg:w-[50%]">
                    <div className="head-box">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] text-[#6C6C6C]' >Contact Us</p>
                        <h2 className='h2-big font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem] 3xl:mb-[2rem]' ><strong>Reach out</strong> for project details and assistance.</h2>
                        <p className='para font-[300]' >Our team is available to share project information, site visit details, and personalised guidance—at your convenience.</p>
                    </div>
                    <div className="info-box mt-[1rem]">
                      <div className="flex flex-col-reverse lg:flex-col">
                          <div className="lg:flex w-full lg:mt-[2rem] lg:py-[2rem] 2xl:mt-[3rem] 2xl:py-[3rem] 3xl:mt-[3.5rem] 3xl:py-[3.5rem] lg:border-t lg:border-b border-[#D9D9D9]">
                            <div className="flex lg:w-max lg:border-r border-[#D9D9D9] lg:pr-[2rem] lg:mr-[2rem] mt-[2rem] lg:mt-0">
                                <img className=" w-[4rem] mr-[1rem] lg:w-[4rem] lg:mr-[1rem] object-contain xl:w-[4.5rem] 1xl:w-[5rem] 3xl:w-[7rem] 3xl:mr-[2rem] 2xl:mr-[1.8rem]" src="/images/h-form-tel.png" alt=""/>
                                <div className="text flex flex-col items-start">
                                    <p className="para font-[300] mb-[0.2rem]"> We are always happy to help</p>
                                    <a className="max-[1023px]:text-[1.5rem] f-24" href="tel:+91 99999 990 30">+91 99999 99030</a>
                                </div>
                            </div>
                            <div className="flex lg:w-[48%] mt-[2rem] lg:mt-0">
                                <img className=" w-[4rem] mr-[1rem] lg:w-[4rem] lg:mr-[1rem] object-contain xl:w-[4.5rem] 1xl:w-[5rem] 3xl:w-[7rem] 3xl:mr-[2rem] 2xl:mr-[1.8rem]" src="/images/h-form-mail.png" alt=""/>
                                <div className="text">
                                    <p className="para font-[300] mb-[0.2rem]"> The best way to get answer faster.</p>
                                    <a className="max-[1023px]:text-[1.5rem] f-24" href="mailto:realty@bigboytoyz.com">realty@bigboytoyz.com </a>
                                </div>
                            </div>
                          </div>
                          <div className="flex lg:w-max mt-[2rem] 2xl:mt-[3rem] 3xl:mt-[3.5rem]">
                                <img className=" w-[4rem] mr-[1rem] lg:w-[4rem] lg:mr-[1rem] object-contain xl:w-[4.5rem] 1xl:w-[5rem] 3xl:w-[7rem] 3xl:mr-[2rem] 2xl:mr-[1.8rem]" src="/images/c-form-loc.webp" alt=""/>
                                <div className="text">
                                    <p className='text-[0.86rem] 3xl:text-[1.3rem] mb-[1rem] h-[2rem] px-[1.5rem] uppercase flex items-center bg-black text-white w-max rounded-full 3xl:h-[2.5rem] 3xl:px-[2rem]' >Head Office</p>
                                    <p className="max-[1023px]:text-[1.5rem] f-24 ">Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001 </p>
                                </div>
                          </div>
                        </div>
                        <div className="media-box flex items-center mt-[3rem] lg:mt-[2rem] lg:pt-[2rem] 2xl:mt-[3rem] 2xl:pt-[3rem] lg:border-t border-[#D9D9D9] 3xl:mt-[4rem]">
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[6rem] lg:h-[3rem] 2xl:w-[7rem] 2xl:h-[3.2rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[9rem] 3xl:h-[3.8rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-3.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[6rem] lg:h-[3rem] 2xl:w-[7rem] 2xl:h-[3.2rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[9rem] 3xl:h-[3.8rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-4.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[6rem] lg:h-[3rem] 2xl:w-[7rem] 2xl:h-[3.2rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[9rem] 3xl:h-[3.8rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/images/h-form-media-6.png" alt="" />
                            </a>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="form-box w-[100%] mt-[4rem] lg:mt-[0rem] lg:w-[45%]">
                    <h2 className='h2-big font-[400] leading-[1.2] tracking-[-0.2rem] mb-[1rem] lg:mb-[2rem]' >Enquire Now</h2>
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
                            <input type="text" className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' placeholder='Type You City*' />
                        </div>
                        <div className="select">
                            <select className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' >
                                <option>Project*</option>
                                <option>Pavilion – Vadodara</option>
                                <option>BBT ONE – Karol Bagh, Delhi</option>
                                <option>The Royale Pavilion – Lucknow</option>
                                <option>SORA – Mandi, Himachal Pradesh</option>
                            </select>
                        </div>
                       <div>
                            <textarea className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[7rem] xl:h-[8rem] 1xl:h-[9rem] 3xl:h-[10.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] pt-[1rem] w-[100%]' placeholder='Message*'></textarea>
                        </div>
                        <button type='submit' className='max-[1023px]:text-[1.85rem] f-20 h-[6rem] bg-black text-white rounded-[1rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] hover:bg-[#414141]' >
                            Submit
                        </button>
                    </form>
                </div>
        </div>
      </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#F6F6F6]' >
        <div className="container"
          data-aos="fade-up" 
          data-aos-easing="linear"
          data-aos-duration="500"
        >
            <div className="lg:w-[40%]">
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] text-[#6C6C6C]' >Our offices</p>
                <h2 className='h2-big font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem] 3xl:mb-[2rem]' >Our regional &<strong> project offices</strong></h2>
                <p className='para font-[300]' >Our regional and project offices provide local expertise, support, and management to ensure successful delivery, coordination, and execution of all organizational initiatives.</p>
            </div>
            <ul className='mt-[3rem] flex flex-wrap justify-between lg:mt-0' >
              <li className='w-full lg:w-[48%] mt-[5rem] lg:even:-mt-[15rem]' 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className='mb-[2rem] 3xl:mb-[3rem]' >
                  <img className='w-full' src="/images/c-office-1.webp" alt="" />
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="text w-full lg:w-[60%]">
                    <h3 className='max-[1023px]:text-[2.4rem] h3 mb-[1.5rem]' >PAVILION</h3>
                    <div className='flex items-start mb-[1.5rem]' >
                        <img className='w-[1.5rem] mr-[1.5rem] object-contain 3xl:w-[1.7rem] 3xl:mt-[0.5rem]' src="/images/c-office-loc.png" alt="" />
                        <p className='max-[1023px]:text-[1.6rem] f-20' >Baba marbles road, behind samanvay status, atladara- padra state highway, village bil, tehsil & district vadodara, 391410, gujarat.</p>
                    </div>
                    <div className='flex items-start mb-[1.5rem]' >
                        <img className='w-[1.5rem] mr-[1.5rem] object-contain 3xl:w-[1.7rem] 3xl:mt-[0.5rem]' src="/images/c-office-tel.png" alt="" />
                        <a className='max-[1023px]:text-[1.6rem] f-20' href="tel:+919999999030:">(+91) 99999 990 30</a>
                    </div>
                    
                  </div>
                  <div className="btn-box w-full lg:w-max mt-[1.5rem] lg:mt-[1rem]">
                    <a target="_blank" className=' px-[1.5rem] h-[5.5rem] lg:h-[4rem] xl:h-[5rem] 3xl:h-[6rem] 3xl:px-[2rem] 3xl:rounded-[1rem] flex items-center justify-between w-full border border-[#1616165f] rounded-[1rem] lg:rounded-[0.5rem] hover:bg-[#fff] hover:invert' 
                    href="/pdf/PAVILION BY BBT BROSHURE FULL SIZE  .pdf">
                        <div className="flex w-max items-center">
                            <img className='w-[2rem] mr-[1.5rem] lg:mr-[1rem] lg:w-[1.5rem] 3xl:w-[2.5rem] 3xl:mr-[1.5rem]' src="/images/c-office-pdf.png" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-18' >Project Brochure</p>
                        </div>
                        <img className='w-[1.5rem] lg:w-[1rem] lg:ml-[1rem] 3xl:w-[1.5rem] 3xl:ml-[3rem]' src="/images/c-office-down.png" alt="" />
                    </a>
                  </div>
                </div>
              </li>
              <li className='w-full lg:w-[48%] mt-[5rem] lg:even:-mt-[15rem]' 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className='mb-[2rem] 3xl:mb-[3rem] launching-soon-tag relative' >
                  <img className='w-full' src="/images/c-office-2.webp" alt="" />
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="text w-full lg:w-[60%]">
                    <h3 className='max-[1023px]:text-[2.4rem] h3 mb-[1.5rem]' >BBT ONE</h3>
                    <div className='flex items-start mb-[1.5rem]' >
                        <img className='w-[1.5rem] mr-[1.5rem] object-contain 3xl:w-[1.7rem] 3xl:mt-[0.5rem]' src="/images/c-office-loc.png" alt="" />
                        <p className='max-[1023px]:text-[1.6rem] f-20' >Baba marbles road, behind samanvay status, atladara- padra state highway, village bil, tehsil & district vadodara, 391410, gujarat.</p>
                    </div>
                    <div className='flex items-start mb-[1.5rem]' >
                        <img className='w-[1.5rem] mr-[1.5rem] object-contain 3xl:w-[1.7rem] 3xl:mt-[0.5rem]' src="/images/c-office-tel.png" alt="" />
                        <a className='max-[1023px]:text-[1.6rem] f-20' href="tel:+919999999030:">(+91) 99999 990 30</a>
                    </div>
                    
                  </div>
                </div>
              </li>
              <li className='w-full lg:w-[48%] mt-[5rem] lg:even:-mt-[15rem]' 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className='mb-[2rem] 3xl:mb-[3rem] launching-soon-tag relative' >
                  <img className='w-full' src="/images/c-office-4.webp" alt="" />
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="text w-full lg:w-[60%]">
                    <h3 className='max-[1023px]:text-[2.4rem] h3 mb-[1.5rem]' >The Royale Pavilion</h3>
                    <div className='flex items-start mb-[1.5rem]' >
                        <img className='w-[1.5rem] mr-[1.5rem] object-contain 3xl:w-[1.7rem] 3xl:mt-[0.5rem]' src="/images/c-office-loc.png" alt="" />
                        <p className='max-[1023px]:text-[1.6rem] f-20' >Baba marbles road, behind samanvay status, atladara- padra state highway, village bil, tehsil & district vadodara, 391410, gujarat.</p>
                    </div>
                    <div className='flex items-start mb-[1.5rem]' >
                        <img className='w-[1.5rem] mr-[1.5rem] object-contain 3xl:w-[1.7rem] 3xl:mt-[0.5rem]' src="/images/c-office-tel.png" alt="" />
                        <a className='max-[1023px]:text-[1.6rem] f-20' href="tel:+919999999030:">(+91) 99999 990 30</a>
                    </div>
                    
                  </div>
                </div>
              </li>
              <li className='w-full lg:w-[48%] mt-[5rem] lg:even:-mt-[15rem]' 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className='mb-[2rem] 3xl:mb-[3rem] launching-soon-tag relative' >
                  <img className='w-full' src="/images/c-office-3.webp" alt="" />
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="text w-full lg:w-[60%]">
                    <h3 className='max-[1023px]:text-[2.4rem] h3 mb-[1.5rem]' >SORA</h3>
                    <div className='flex items-start mb-[1.5rem]' >
                        <img className='w-[1.5rem] mr-[1.5rem] object-contain 3xl:w-[1.7rem] 3xl:mt-[0.5rem]' src="/images/c-office-loc.png" alt="" />
                        <p className='max-[1023px]:text-[1.6rem] f-20' >Baba marbles road, behind samanvay status, atladara- padra state highway, village bil, tehsil & district vadodara, 391410, gujarat.</p>
                    </div>
                    <div className='flex items-start mb-[1.5rem]' >
                        <img className='w-[1.5rem] mr-[1.5rem] object-contain 3xl:w-[1.7rem] 3xl:mt-[0.5rem]' src="/images/c-office-tel.png" alt="" />
                        <a className='max-[1023px]:text-[1.6rem] f-20' href="tel:+919999999030:">(+91) 99999 990 30</a>
                    </div>
                    
                  </div>
                </div>
              </li>
            </ul>
        </div>
    </section>

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#161616]' >
        <div className="container">
            <div className="flex justify-between items-center flex-wrap text-white"
              data-aos="fade-up" 
              data-aos-easing="linear"
              data-aos-duration="500"
            >
                <div className="mb-[5rem] w-full lg:w-[45%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >The House</p>
                    <h2 className='h2-big font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem] 3xl:mb-[2rem]' >Experience luxury at the <strong>Big Boy Toyz house.</strong></h2>
                    <p className='para font-[300]' >The House of Big Boy Toyz represents a world where luxury, lifestyle, and passion come together seamlessly. More than India’s most trusted destination for pre-owned supercars, BBT has transformed into a lifestyle universe offering exclusive experiences and premium verticals for those who appreciate refined living. It celebrates the spirit of speed, design, craftsmanship, and individuality. From rare high-performance machines to ultra-luxury living concepts, each offering under the BBT umbrella is built with uncompromising quality and forward-thinking vision. Every brand reflects the values of excellence, exclusivity, and aspiration, creating a journey that goes far beyond ownership. The House of Big Boy Toyz is where luxury becomes personal, experiences become unforgettable, and desire becomes reality.</p>
                    <div className='mt-[2.5rem]' >
                        <Link href="/about-us" className='max-[1023px]:text-[1.5rem] max-[1023px]:h-[5rem] com-btn bg-transparent text-white border-[white] font-normal justify-center hover:bg-[#000]' >About Us</Link>
                    </div>
                </div>
                <div className="img mx-auto w-full sm:w-[60%] lg:w-[48%] lg:mr-[0]">
                    <img className='w-full hidden lg:block' src="/images/c-about-img.webp" alt="" />
                    <img className='w-full lg:hidden' src="/images/c-about-mob-img.webp" alt="" />
                </div>
            </div>
        </div>
    </section>


  </>
  )
}

export default ContactUs