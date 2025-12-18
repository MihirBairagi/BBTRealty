"use client";
import React from 'react'

function FloatingFormSection() {
  return (
    <>
    <section className="h-b-form-section relative z-10 -mt-10 md:-mt-16 lg:-mt-[5rem] xl:-mt-[7.5rem] 3xl:-mt-[8.5rem]  bg-gradient-to-t from-white to-transparent lg:bg-none">
        <div className="container">
            <div className="h-b-form-box">
            <form className="bg-white rounded-3rem shadow-detail-space p-[4rem] md:px-8 md:py-10 lg:px-[5rem] lg:py-[3rem] lg:rounded-2rem xl:py-[4rem] 1xl:py-[5rem] 3xl:px-[7rem] 3xl:py-[6rem]">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-8">
                    <div className="field lg:w-[35%]">
                        <input className='max-[1023px]:text-[1.5rem] f-20 text-black border-b border-black w-full pb-[2rem] pt-[1rem] outline-0 ' type="text" placeholder='Full Name'/>
                    </div>
                    <div className="field lg:w-[35%]">
                        <input className='max-[1023px]:text-[1.5rem] f-20 text-black border-b border-black w-full pb-[2rem] pt-[1rem] outline-0 ' type="text" placeholder='Mobile'/>
                    </div>
                    <div className="field lg:w-[35%]">
                        <input className='max-[1023px]:text-[1.5rem] f-20 text-black border-b border-black w-full pb-[2rem] pt-[1rem] outline-0 ' type="text" placeholder='Your City'/>
                    </div>
                    <div className="submit mt-[1rem] lg:mt-[0]">
                        <button type='submit' className="com-btn bg-black text-white border-[white] font-normal min-w-[18rem] justify-center" >
                            Submit
                        </button>
                    </div>


                </div>
            </form>
            </div>
        </div>
    </section>

    </>

  )
}

export default FloatingFormSection