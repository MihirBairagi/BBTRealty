"use client";
import FooterMenuDesktop from "./FooterMenuDesktop";
import FooterAppLinks from "./FooterAppLinks";
import FooterCopyRight from "./FooterCopyRight";
import FooterContact from "./FooterContact";
import BackToTop from '../CommonComponents/BackToTop/BackToTop'
import FooterMenuMobile from "./FooterMenuMobile";

const Footer = () => {
  return (
    <>
      
      <footer className="bg-black pb-20 sm:pb-0" id="footer">
        <div className="max-1920">
          <div className="container">
            <div className="lg:hidden">
              <FooterMenuMobile />
            </div>
            <div className="hidden lg:block">
              <FooterMenuDesktop />
            </div>

            <FooterContact />
            
            <FooterAppLinks />
            <FooterCopyRight />
          </div>
        </div>
        <BackToTop />
      </footer>
    </>
  );
};

export default Footer;
