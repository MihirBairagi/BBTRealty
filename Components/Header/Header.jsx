"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderMenu from './HeaderMenu';

const styles = {
  menuItem:
    "text-white relative px-[1rem] uppercase text-sm transition-all ease-in-out duration-300 lg:border-l lg:border-l-[#fff] hover:text-[#CE1921] xl:text-[0.9rem] 1xl:px-[1.5rem] 1xl:text-[1.05rem] 3xl:text-[1.35rem] 2xl:tracking-[0.4px] 3xl:tracking-[0.3px] 3xl:px-[1.9rem]",
};
 
const Header = ({}) => {
  const pathName = usePathname();

  const [openMenu , setOpenMenu] = useState(false);

  // Define static routes and dynamic route prefixes
  const staticRoutes = [
    "/about-us",
    "/collection",
    "/showrooms",
    "/workshop",
    "/wallpapers",
    "/booking",
    "/emi-calculator",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/refund-policy",
  ];
  const dynamicPrefixes = [
    "/cars",
    "/search-results",
    "/filter-results",
    "/projects",
    "/blogs",
  ];

  // Check for matching static or dynamic routes
  const isPageHeader =
    staticRoutes.includes(pathName) ||
    dynamicPrefixes.some((prefix) => pathName.startsWith(prefix)) ||
    (pathName.startsWith("/guides") &&
      pathName.split("/").filter(Boolean).length === 2);

  return (
    <header
      className={`header w-full h-auto z-[99] ${
        isPageHeader
          ? "page-header relative bg-[#000]"
          : "absolute bg-transparent"
      }`}
      id="header"
    >
      <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="max-1920">
        <div
          className={`header-wrapper w-full p-[3rem] mx-auto lg:py-[2rem] lg:px-[4rem] 1xl:py-[2.5rem] 2xl:px-[4.3rem] 3xl:py-[3rem] 3xl:px-[5.5rem] ${
            isPageHeader
              ? "py-[2rem] px-[2rem] 2xl:pt-[2.5rem] 2xl:pb-[3rem] 2xl:pr-[4rem] 2xl:pl-[3.5rem] 3xl:py-[3.5rem] 3xl:px-[5.5rem]"
              : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center menu-toggler cursor-pointer lg:order-3 lg:hidden`}
              onClick={() => setOpenMenu(true)}
            >
              <span className="text-white uppercase mr-5 hidden lg:inline-block text-base xl:text-lg 3xl:text-2xl 3xl:mr-6">
                Menu
              </span>
              <div className="menu-bar w-12 lg:w-10 xl:w-[3rem] 3xl:w-[3.9rem] [&>span]:h-[1.5px] [&>span]:bg-white [&>span]:block [&>span]:rounded-[5px] group">
                <span className="w-[80%] mb-[7px] 3xl:mb-[8px]"></span>
                <span className="w-[100%] mb-[7px] 3xl:mb-[8px] group-hover:ml-[5px] transition-all duration-500 ease-in-out"></span>
                <span className="w-[65%]"></span>
              </div>
            </div>
            <div className="header-logo  lg:order-1 ">
              <Link href="/" className="block">
                <img
                  src="/images/bbt-realty-logo.webp"
                  width="105"
                  height="70"
                  alt="BBT Logo"
                  className="w-[18rem] object-contain lg:w-[15rem] xl:w-[22rem] 3xl:w-[28.5rem]"
                  priority="high"
                />
              </Link>
            </div>
            <div
              className={`lg:flex items-center justify-center header-phone-list hidden lg:order-2 [&>a:last-of-type]:border-r [&>a:last-of-type]:border-r-[#fff] group`}
            >
              <Link href="detail-page" className={styles.menuItem}>
                Pavilion – Vadodara{" "}
              </Link>
              <Link href="detail-page" className={styles.menuItem}>
                BBT ONE – Karol Bagh, Delhi{" "}
              </Link>
              <Link href="detail-page" className={styles.menuItem}>
                The Royale Pavilion – Lucknow{" "}
              </Link>
              <Link href="detail-page" className={styles.menuItem}>
                SORA – Mandi, Himachal Pradesh{" "}
              </Link>

              <div className="contact items-center hidden lg:flex lg:w-max text-white">
                <img className='lg:w-[3rem] lg:ml-[1.5rem] xl:ml-[2rem] 1xl:ml-[3rem] lg:mr-[1rem] xl:w-[4rem] 1xl:w-[5.2rem]' src="/images/hp-head-tel.webp" alt="" />
                  <div className="text">
                    <p className='f-18 font-[300] lg:mb-[0] xl:mb-[0.2rem]' > Connect with us</p>
                    <a className='f-20' href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                  </div>
              </div>

            </div>

            <div className="mobile-search-bar lg:hidden">
              <Image
                src="/images/banner-search-icon-white.webp"
                width="20"
                height="20"
                alt="Header Search Icon"
                className="w-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
