import FloatingFormSection from '../../Components/Homepage/FloatingFormSection/FloatingFormSection'
import BannerSection from '../../Components/DetailPage/BannerSection/BannerSection'
import OfferingSection from '../../Components/DetailPage/OfferingSection/OfferingSection'
import FeaturedImageSection from '../../Components/DetailPage/FeaturedImageSection/FeaturedImageSection'
import HighlightSection from '../../Components/DetailPage/HighlightSection/HighlightSection'
import GallerySection from '../../Components/DetailPage/GallerySection/GallerySection'
import TowerSection from '../../Components/DetailPage/TowerSection/TowerSection'
import ShowreelSection from '../../Components/DetailPage/ShowreelSection/ShowreelSection'
import AmenitiesSection from '../../Components/DetailPage/AmenitiesSection/AmenitiesSection'
import SiteProgressSection from '../../Components/DetailPage/SiteProgressSection/SiteProgressSection'
import LocateUsSection from '../../Components/DetailPage/LocateUsSection/LocateUsSection'

function DetailPage() {
  return (
    <>
        <BannerSection/>
        <FloatingFormSection/>
        <OfferingSection/>
        <FeaturedImageSection/>
        <HighlightSection/>
        <GallerySection/>
        <TowerSection/>
        <ShowreelSection/>
        <AmenitiesSection/>
        <SiteProgressSection/>
        <LocateUsSection/>
    </>
  )
}

export default DetailPage