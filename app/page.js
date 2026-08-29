import Hero from '@/components/Hero'
import MusicPlayer from '@/components/MusicPlayer'
import Countdown from '@/components/Countdown'
import Message from '@/components/Message'
import PhotoHero from '@/components/PhotoHero'
import Parents from '@/components/Parents'
import TheDay from '@/components/TheDay'
import Itinerary from '@/components/Itinerary'
import DressCode from '@/components/DressCode'
import GiftTable from '@/components/GiftTable'
import RSVP from '@/components/RSVP'
import NoKids from '@/components/NoKids'
import Closing from '@/components/Closing'
import FloralDecor from '@/components/FloralDecor'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFF9F2]">
      <FloralDecor />
      <div className="relative z-10">
        <MusicPlayer />
        <Hero />
        <Countdown />
        <Message />
        <PhotoHero />
        <Parents />
        <TheDay />
        <Itinerary />
        <DressCode />
        <GiftTable />
        <RSVP />
        <NoKids />
        <Closing />
      </div>
    </main>
  )
}
