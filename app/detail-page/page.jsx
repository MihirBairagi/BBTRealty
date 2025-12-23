import FloatingFormSection from '../../Components/Homepage/FloatingFormSection/FloatingFormSection'
import BannerSection from '../../Components/DetailPage/BannerSection/BannerSection'
import OfferingSection from '../../Components/DetailPage/OfferingSection/OfferingSection'
import AmenitiesSection from '../../Components/DetailPage/AmenitiesSection/AmenitiesSection'
import SiteProgressSection from '../../Components/DetailPage/SiteProgressSection/SiteProgressSection'

function DetailPage() {
  return (
    <>
        <BannerSection/>
        <FloatingFormSection/>
        <OfferingSection/>
        <AmenitiesSection/>
        <SiteProgressSection/>
    </>
  )
}

export default DetailPage