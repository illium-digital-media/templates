import HeroContentRight from '@/components/Hero/HeroContentRight/HeroContentRight'
import LandingCenter from '@/components/Hero/LandingCenter/LandingCenter'
import Services3Card from '@/components/Services/Services3Card/Services3Card'
import Services6Cards from '@/components/Services/Services6Cards/Services6Cards'
import SideBySide from '@/components/Services/SideBySide/SideBySide'
import Services3Cards from '@/components/Services/Service3Cards/Service3Cards'
import Service3CardVol2 from '@/components/Services/Service3CardVol2/Service3CardVol2'
import Services4Card from '@/components/Services/Services4Card/Services4Card'
import Services3CardVol3 from '@/components/Services/Services3CardVol3/Services3CardVol3'
import NavigationFullScreen from '@/components/Navigation/NavigationFullScreen/NavigationFullScreen'

export default function Home() {
  return (
    <>
      <NavigationFullScreen />
      <HeroContentRight />
      <LandingCenter />
      <Services6Cards />
      <Services3Card />
      <SideBySide />
      <Services3Cards />
      <Service3CardVol2 />
      <Services4Card />
      <Services3CardVol3 />
    </>

  )
}
