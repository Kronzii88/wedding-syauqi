import React, { useState } from "react";
import Preloader from "./components/Preloader";
import AudioPlayer from "./components/AudioPlayer";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import CoupleProfile from "./components/CoupleProfile";
import OurStory from "./components/OurStory";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import CarDivider from "./components/CarDivider";
import WaveDivider from "./components/WaveDivider";
import GiftSection from "./components/GiftSection";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGift, setShowGift] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  return (
    <div
      className="app-container"
      style={{ position: "relative", width: "100%", minHeight: "100vh" }}
    >
      {/* Floating Audio Player */}
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Preloader Overlay Envelope */}
      <Preloader isOpened={isOpened} onOpen={handleOpenInvitation} />

      {/* Main Wedding Invitation Layout */}
      <main style={{ width: "100%", overflowX: "hidden" }}>
        <Hero />
        <Quote />
        <WaveDivider />
        <CoupleProfile />
        <OurStory />
        <EventDetails />
        <Gallery />
        {/* <CarDivider /> */}
        <GiftSection
          showGift={showGift}
          onToggle={() => setShowGift((prev) => !prev)}
        />
        <WaveDivider variant="dark-top" />
        <RSVPForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;
