import Hero from './Hero'
import Countdown from './Countdown'
import Message from './Message'
import PhotoHero from './PhotoHero'
import Parents from './Parents'
import TheDay from './TheDay'
import Itinerary from './Itinerary'
import DressCode from './DressCode'
import GiftTable from './GiftTable'
import RSVP from './RSVP'
import GuestWelcome from './GuestWelcome'
import FinalPhoto from './FinalPhoto'
import Closing from './Closing'
import SectionFlourish from './SectionFlourish'
import ClosingFloral from './ClosingFloral'

// guest = { slug, invitationName, guests: [...] } | null
export default function InvitationContent({ guest = null }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FBFAF6]">
      <div className="relative z-10">
        <ClosingFloral flip />
        <Hero guest={guest} />
        <SectionFlourish />
        <Countdown />
        <SectionFlourish />
        <Message />
        <SectionFlourish />
        <PhotoHero />
        <SectionFlourish />
        <Parents />
        <SectionFlourish />
        <TheDay />
        <SectionFlourish />
        <Itinerary />
        <SectionFlourish />
        <DressCode />
        <SectionFlourish />
        <GiftTable />
        <SectionFlourish />
        <GuestWelcome guest={guest} />
        <SectionFlourish />
        <RSVP guest={guest} />
        <SectionFlourish />
        <FinalPhoto />
        <Closing />
        <ClosingFloral />
      </div>
    </main>
  )
}
