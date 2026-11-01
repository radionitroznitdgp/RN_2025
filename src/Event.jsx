import { useEffect, useRef, useState } from "react";
import "./Event.css";
import FlexCarousel from './FlexCarousel';
import bgVideo from "/assets/videoplayback (1).mp4";
import glamitUp from "/assets/events/rampwalk.jpeg";
import mrn from "/assets/events/mrn.jpg";
import talentX from "/assets/events/talentx.jpeg";
import rhythmicMoment from "/assets/events/Rhythmic moments.jpeg";
import comedyNight from "/assets/events/comedynight.jpeg";
import movieMystic from "/assets/events/moviem.jpeg";
import nexusVerse from "/assets/events/NV.jpg";
import voiceItUp from "/assets/events/Vo.jpg";
import limelight from "/assets/events/rampwalk.jpeg";
import redfmCollab from "/assets/events/REDFM.jpg";
import matkiFod from "/assets/events/MFD.jpg";
import kholeDil from "/assets/events/kholedl.jpeg";
import nds from "/assets/events/nds.jpeg";
import ss from "/assets/events/success_stories.jpeg";
import prank from "/assets/events/prank.jpeg";
import ks from "/assets/events/Ks.jpeg";
import freshers_intro from "/assets/events/freshers_intro.jpeg";
import kj from "/assets/events/kj.jpeg";
import des from "/assets/events/des.jpeg";
const festCards = [
  { id: 1, image: glamitUp, title: "Glamit Up" },
  { id: 2, image: talentX, title: "Talent X" },
  { id: 3, image: rhythmicMoment, title: "Rhythmic Moments" },
  { id: 4, image: comedyNight, title: "Comedy Night" },
  { id: 5, image: movieMystic, title: "Movie Mystic" },
];
const flexFestItems = festCards.map((item) => ({
  src: item.image,
  alt: item.title,
  title: item.title,
}));
const eventCards = [
  { id: 6, image: nexusVerse, title: "Nexus Verse" },
  { id: 7, image: voiceItUp, title: "Voice It Out" },
  { id: 8, image: limelight, title: "Lime Light" },
  { id: 9, image: redfmCollab, title: "RedFM Collab" },
  { id: 10, image: matkiFod, title: "Matki Fod" },
  { id: 11, image: kholeDil, title: "Khole Dil" },
  { id: 12, image: mrn, title: "Meme Ran Tine" },
];
const videoSeriesCards = [
  { id: 13, image: ss, title: "Success Stories" },
  { id: 14, image: prank, title: "Prank Videos" },
  { id: 15, image: ks, title: "Karthick & Hemanika" },
  { id: 16, image: freshers_intro, title: "Freshers' Intro" },
  { id: 17, image: kj, title: "Kasauti Jhanduon Ki" },
  { id: 18, image: nds, title: "NIT Durgapur Special" },
  { id: 19, image: des, title: "Dil Ki Ek Diary Se" },
];

/*2. EVEnts FAN / SIDE CARD CAROUSEL */
const EventsCarousel = ({ title, items }) => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const getOffset = (index) => {
    let offset = index - active;
    if (offset > items.length / 2) {
      offset -= items.length;
    }
    if (offset < -items.length / 2) {
      offset += items.length;
    }
    return offset;
  };
  return (
    <section className="events-carousel-section">
      <h2 className="events-carousel-title">
        {title}
      </h2>
      <div className="events-carousel">
        <div className="events-carousel-stage">
          {items.map((item, index) => {
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;
            const isHovered = hovered === index;
            return (
              <div
                key={item.id}
                className={`
                  events-card
                  ${isCenter ? "center" : ""}
                  ${isHovered ? "hovered" : ""}
                  ${
                    hovered !== null && !isHovered
                      ? "other-hovered"
                      : ""
                  }
                `}
                style={{
                  "--offset": offset,
                  "--abs-offset": absOffset,
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(index)}
              >
                <div className="events-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable="false"
                  />
                </div>
                <div className="events-card-title">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="events-dots">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show ${item.title}`}
          />
        ))}
      </div>
    </section>
  );
};
/*3. VIDEOS & SERIES ORIGINAL CONTINUOUS CAROUSEL */
const VideoCarousel = ({ title, items }) => {
  const cards = [...items, ...items];
  return (
    <section className="video-carousel-section">
      <h2 className="video-section-title">
        {title}
      </h2>
      <div className="video-coverflow-wrapper">
        <div className="video-coverflow-track">
          {cards.map((item, index) => (
            <div
              className="video-coverflow-card"
              key={`${item.id}-${index}`}
            >
              <div className="video-coverflow-image">
                <img
                  src={item.image}
                  alt={item.title}
                  draggable="false"
                />
              </div>
              <div className="video-coverflow-title">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
/*EVENT PAGE*/
const Event = () => {
  return (
    <div className="event-container">
      {/* PAGE TITLE */}
      <h1 className="page-title">
        Wave Craze
      </h1>
      {/* INTRO + VIDEO */}
      <div className="subtitle-video-container">
        <div className="home-text">
          <p className="subtitle">
            Where creativity sparks like wildfire and every heartbeat
            echoes with passion, a celebration like no other emerges at
            NIT Durgapur — Wavecraze! As the curtain rises, Wavecraze
            unveils a treasure trove of surprises, thrilling events,
            and unforgettable memories.
          </p>
        </div>
        <div className="video-card">
          <div className="responsive-video-wrapper">
            <video
              src={bgVideo}
              autoPlay
              muted
              loop
              controls
              playsInline
              className="event-video"
            />
          </div>
        </div>
      </div>
      {/* 1. FEST HIGHLIGHTs  CYLINDER 3D */}
    <section className="fest-cylinder-section">
  <h2 className="fest-cylinder-title">
    Fest Highlights
  </h2>

  <div className="fest-carousel-wrap">
    <FlexCarousel
      items={flexFestItems}
      cardHeight={0.62}
      gap={10}
      radius={14}
      preset="liquid"
      captions={true}
    />
  </div>
</section>
      {/*2. EVENTS FAN / SIDE CARD */}
      <EventsCarousel
        title="Events"
        items={eventCards}
      />
      {/* 3. VIDEOS & SERIES ORIGINAL CONTINUOUS CAROUSEL
  */}
      <VideoCarousel
        title="Videos & Series"
        items={videoSeriesCards}
      />
    </div>
  );
};
export default Event;

