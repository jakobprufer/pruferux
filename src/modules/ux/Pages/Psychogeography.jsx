import React, { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import Image from "react-image-enlarger";
import { Link } from "react-router-dom";

function ZoomImage({ src, enlargedSrc }) {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <div>
      <Image
        style={{ width: "10000px", height: "auto" }}
        zoomed={zoomed}
        src={src}
        enlargedSrc={enlargedSrc}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
        renderLoading
      />
    </div>
  );
}

function Psychogeography() {
  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  return (
    <div className="uxContent">
      <div className="uxStickyTitle">
        <h2>Digital Psychogeography</h2>
      </div>
      <div className="uxVideoCont">
        <video
          className="uxBeautyVideo, uxPlacedVideo"
          width="1920"
          height="1080"
          autoPlay
          muted
          playsInline
          preload="auto"
          loop
        >
          <source src="/images/ux/psychogeography_bv.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="uxText">
        <div className="uxOverview">
          <div className="uxSmallTitle">Brief</div>
          <p>
            Design a <span className="uxHighlight">journey</span> that leads
            from the{" "}
            <span className="uxHighlight">inner world to the outer world</span>,
            inspired by a <span className="uxHighlight">dérive</span> starting
            at the <span className="uxHighlight">Hackney Marshes</span>. The
            journey must be experienceable inside the classroom.
          </p>
          <div className="uxSmallTitle">Research Methods</div>
          <p>
            <a href="http://www.bopsecrets.org/SI/2.derive.htm" target="_blank">
              Dérive
            </a>
          </p>
          <div className="uxSmallTitle">Designers</div>
          <p>
            Anshu Agarwal,{" "}
            <a href="https://stofmohbek.wixsite.com/mbekkaoui" target="_blank">
              Mohammed Bekkaoui
            </a>{" "}
            (Beck), Sushil Suresh, Jakob Prufer
          </p>
          <div className="uxSmallTitle">Dates</div>
          <p>23-27/01/2023</p>
        </div>
        <main className="uxMain">
          <h3>Process</h3>
          <p>
            To introduce us to the concept of psychogeography, we were taken on
            a guided walk around Waterloo Bridge, Summerset House and the Royal
            Courts of Justice that highlighted symbols of power. It was
            fascinating that anyone could walk into the court and observe
            wig-wearing barristers go about their business in actual court
            hearings.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/psycho1_1m.jpg"
              enlargedSrc="/images/ux/psycho1_1.jpg"
            />
          </div>
          <p>
            On the following day we went to the{" "}
            <a href="https://hackney.gov.uk/hackney-marshes" target="_blank">
              Hackney Marshes
            </a>
            , which I had known in the past as a place of Sunday football
            enjoyment. On this gloomy Tuesday we got a very different picture,
            it was grey, rainy and empty. We started in Hackney Wick’s
            graffiti-heavy industrial environment and walked along a canal full
            of house boats belonging to people most of which had chosen a very
            different life to that of the city hamster wheel. Underneath a
            motorway overpass there were left mattresses, broken devices and
            garbage, some of which had been assembled in artworks on the
            bridge’s supporting pillars. Not a single team was playing when we
            reached the dozens of football pitches that make up the central area
            of the marshes. All of us where in a strange mood in this empty
            place, discussing our life choices and the future. We took some
            materials like grass and soil from along the way.{" "}
          </p>
          <div className="g111">
            <ZoomImage
              src="/images/ux/psycho2_1s.jpg"
              enlargedSrc="/images/ux/psycho2_1.jpg"
            />
            <ZoomImage
              src="/images/ux/psycho2_2s.jpg"
              enlargedSrc="/images/ux/psycho2_2.jpg"
            />
            <ZoomImage
              src="/images/ux/psycho2_3s.jpg"
              enlargedSrc="/images/ux/psycho2_3.jpg"
            />
          </div>
          <div className="g111">
            <ZoomImage
              src="/images/ux/psycho2_4s.jpg"
              enlargedSrc="/images/ux/psycho2_4.jpg"
            />
            <ZoomImage
              src="/images/ux/psycho2_5s.jpg"
              enlargedSrc="/images/ux/psycho2_5.jpg"
            />
            <ZoomImage
              src="/images/ux/psycho2_6s.jpg"
              enlargedSrc="/images/ux/psycho2_6.jpg"
            />
          </div>
          <div className="g111">
            <ZoomImage
              src="/images/ux/psycho2_7s.jpg"
              enlargedSrc="/images/ux/psycho2_7.jpg"
            />
            <ZoomImage
              src="/images/ux/psycho2_8s.jpg"
              enlargedSrc="/images/ux/psycho2_8.jpg"
            />
            <ZoomImage
              src="/images/ux/psycho2_9s.jpg"
              enlargedSrc="/images/ux/psycho2_9.jpg"
            />
          </div>
          <p>
            Returning to the familiar framework of the Overground station, like
            a jump back into everyday routine after this walk into the
            emptiness, felt good. While somewhat depressing, the walk had also
            served as a “pallet cleanser” and a refresher for the eyes, like
            visiting nature or abandoned places can do before returning into
            comfortable, familiar human-made environment. The canal in this way
            had been the border between the outside and the inside. A similar
            with the marshes I had in the past. When I would take the Stansted
            Express to the airport throughout my first year in London, I would
            look out of the window seeing rows of houses pass before suddenly
            the train would burst across the canal and out into the marshes, as
            if taking a deep inhale.{" "}
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/psycho3_1s.jpg"
              enlargedSrc="/images/ux/psycho3_1.jpg"
            />
            <ZoomImage
              src="/images/ux/psycho3_2s.jpg"
              enlargedSrc="/images/ux/psycho3_2.jpg"
            />
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/psycho3_3s.jpg"
              enlargedSrc="/images/ux/psycho3_3.jpg"
            />
            <ZoomImage
              src="/images/ux/psycho3_4s.jpg"
              enlargedSrc="/images/ux/psycho3_4.jpg"
            />
          </div>
          <div className="g1">
            <ZoomImage
              src="/images/ux/psycho3_5m.jpg"
              enlargedSrc="/images/ux/psycho3_5.jpg"
            />
          </div>
          <p>
            Together we decided we wanted to make this journey to the outside,
            with the canal as the border, experienceable through multiple
            senses. For that purpose, Anshu built a barefoot trail with three
            stages: industrial gravel, a basin full of water for the canal and
            wet grass from the marshes. Sushil then augmented the three stages
            with the good old Arduino-sensors (responding to pressure caused by
            stepping on each of the three stages) that would for each stage
            trigger corresponding soundscapes and animations or videos. The
            visual stimuli were projected onto the wall in front of our
            participant and the sounds played through headphones. Beck took care
            of the animations for the canal and the marshes, while I edited a
            collage of multiple videos for the first (industrial) stage and
            worked on the soundscapes. For the latter I assembled 5-10 sounds
            for each stage of the journey, edited and and placed them in the
            stereo field to create an immersive experience. Find the three
            videos with soundscapes below.
          </p>
          <div className="g1">
            <video controls className="uxVideo" width="1820" height="720">
              <source src="/images/ux/psycho4_1.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <div className="g1">
            <video controls className="uxVideo" width="1820" height="720">
              <source src="/images/ux/psycho4_2.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <div className="g1">
            <video controls className="uxVideo" width="1820" height="720">
              <source src="/images/ux/psycho4_3.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <p>
            Feedback was positive. Our participant appreciated the multisensory
            journey, highlighting the cold shock of the canal phase. The course
            team also appreciated the many different senses triggered.
          </p>
          <div className="bottomNav">
            <Link to="/ux/projects/outfit">
              <HiOutlineArrowLeft className="hiIcon" /> Previous brief
            </Link>
            <Link to="/ux/projects/macro">
              Next brief <HiOutlineArrowRight className="hiIcon" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

Psychogeography.propTypes = {};

export default Psychogeography;
