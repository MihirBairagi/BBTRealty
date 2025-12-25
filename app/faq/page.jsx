import React from "react";

import FaqMain from "../../Components/Faq/FaqMain/FaqMain";
import PageBannerSmall from "../../Components/CommonComponents/PageBannerSmall/PageBannerSmall";

const bannerData = {
  title:`Frequently <br /> <b>Asked questions</b>`,
  description: `  Hello, How we can help`,
  breadcrumb: "FAQ",
  bannerImage:"/images/faq-banner.webp",
  bannerImageMobile:"/images/faq-mob-banner.webp"
}

const Faqs = () => {
  return (
    <>
   
      <PageBannerSmall data={bannerData} />
      <FaqMain />
  
    </>
  );
};

export default Faqs;
