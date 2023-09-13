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
import MeetOurTeam3Card from '@/components/MeetOurTeam/3Card/MeetOurTeam3Card'
import MeetOurTeam4Card from '@/components/MeetOurTeam/4Card/MeetOurTeam4Card'
import MeetOurTeam4CardVol2 from '@/components/MeetOurTeam/4CardVol2/MeetOurTeam4CardVol2'
import SideBySideStandard from '@/components/SideBySide/Standard/SideBySideStandard'

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
      <MeetOurTeam3Card />
      <MeetOurTeam4Card />
      <MeetOurTeam4CardVol2 />
      <SideBySideStandard />
    </>

  )
}
