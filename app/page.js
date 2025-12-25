import IntroSection from "../Components/Homepage/IntroSection/IntroSection";
import BannerSection from "../Components/Homepage/BannerSection/BannerSection";
import FloatingFormSection from "../Components/Homepage/FloatingFormSection/FloatingFormSection";
import ProjectsSection from "../Components/Homepage/ProjectsSection/ProjectsSection"
import WhyChooseSection from "../Components/Homepage/WhyChooseSection/WhyChooseSection"
import FormSection from "../Components/Homepage/FormSection/FormSection"

export default function Home() {
  return (
   <>
      <BannerSection/>
      <FloatingFormSection/>
      <IntroSection/>
      <ProjectsSection/>
      <WhyChooseSection/>
      <FormSection/>
   </>
  );
}
