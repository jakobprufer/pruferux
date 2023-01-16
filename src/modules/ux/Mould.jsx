import React, { useState, useRef } from "react";
import "./UX.sass";
import classNames from "classnames";
import Image from "react-image-enlarger";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

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

function Mould() {
  const [U1Open, setU1Open] = useState(true);

  const toggleU1 = () => {
    setU1Open(!U1Open);
  };

  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div
      onClick={toggleDark}
      className={classNames({ dark: dark }, { light1: !dark })}
    >
      <div className="uxPage">
        <div className="uxSolid"></div>
        {/* <div className="uxHeadlineBg1">Senses</div>
        <div className="uxHeadlineBg2">Senses</div> */}
        <div className="uxBody">
          <div className="uxSidebar">
            <a href="/ux">
              <h1 className="uxStickyTitleFirst" id="uxlogoTitle">
                <div className="uxLogo">
                  <b>MA:UX</b>&nbsp;
                </div>
                <div className="uxName">Jakob Prüfer</div>
              </h1>
            </a>
            <div className="uxSidebarText">
              <nav className="uxNav">
                <div className="uxNavSection">
                  <a href="/ux">
                    <svg
                      className="uxBackArrow"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      enableBackground="new 0 0 500 500"
                      version="1.1"
                      viewBox="0 0 500 500"
                      xmlSpace="preserve"
                    >
                      <path d="M460.89 281.06v-45.72H132.95c40.92-38 75.37-70 109.38-101.58-14.83-15.13-25.34-25.85-33.02-33.68-54.35 54.3-108.14 108.03-158.5 158.34 51.63 51.85 105.29 105.73 160.36 161.04 7.99-8.3 17.96-18.67 30.33-31.53-34.83-32.81-69.13-65.13-103.44-97.44.09-.16.17-.33.26-.49l-8.32-9h14.7l-.01.06h316.2z"></path>
                    </svg>{" "}
                    Back to overview
                  </a>
                </div>
                <div className="uxNavSection">
                  <div className="uxButton" onClick={toggleU1}>
                    <svg
                      className={classNames(
                        "uxArrow",
                        { turned90: U1Open },
                        { notTurned90: !U1Open }
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      enableBackground="new 0 0 500 500"
                      version="1.1"
                      viewBox="0 0 500 500"
                      xmlSpace="preserve"
                    >
                      <path d="M288.5 248.28c-57.54-53.77-107.68-100.63-158.36-148 19.61-19.53 34.64-34.5 47.13-46.93L368.35 244.4c-61.39 61.29-127.11 126.91-193.6 193.3-9.13-9.54-23.93-25.02-41.03-42.89 48.43-45.85 98.34-93.1 154.78-146.53z"></path>
                    </svg>{" "}
                    Unit 1: UX Studio Practices
                  </div>
                  <div className={U1Open ? "uxIntroIn" : "uxIntroOut"}>
                    <a href="/ux/senses" className="uxNavProject">
                      UX of Human Senses
                    </a>
                    <a
                      href="/ux/mould"
                      className="uxNavProject uxHighlight active"
                    >
                      UX of Mould
                    </a>
                    <a href="/ux/hair" className="uxNavProject">
                      UX of Hair
                    </a>
                    <a href="/ux/birdsong" className="uxNavProject">
                      UX of Birdsong
                    </a>
                    <a href="/ux/disguise" className="uxNavProject">
                      UX of Disguise
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="uxContent">
            <div className="uxStickyTitle">
              <h2>UX of Mould</h2>
            </div>
            <div className="uxBeautyContainer">
              <video
                className="uxBeautyVideo"
                width="1920"
                height="1080"
                autoPlay
                muted
                playsInline
                preload="auto"
                loop
              >
                <source src="/images/ux/mould_bv.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="uxText">
              <div className="uxOverview">
                <div className="uxSmallTitle">Brief</div>
                <p>
                  Design an embodied experience that{" "}
                  <span className="uxHighlight">translates</span> both the{" "}
                  <span className="uxHighlight">good and bad qualities</span> of
                  mould. Outcomes must be{" "}
                  <span className="uxHighlight">physical and digital</span>.
                </p>
                <div className="uxSmallTitle">Research Methods</div>
                <p>
                  <a
                    href="https://spin.atomicobject.com/2017/06/29/design-thinking-activity-love-breakup-letter/"
                    target="_blank"
                  >
                    Love Letter and Breakup Letter
                  </a>
                  ,{" "}
                  <a
                    href="https://openpracticelibrary.com/practice/aeiou-observation-framework/"
                    target="_blank"
                  >
                    AEIOU
                  </a>
                </p>
                <div className="uxSmallTitle">Designers</div>
                <p>
                  Kye Li Chia,{" "}
                  <a href="https://manfredimaux.com/" target="_blank">
                    Manfredi Montaretto Marullo
                  </a>
                  , Wan Ying Liang Chen, Jakob Prüfer
                </p>
                <div className="uxSmallTitle">Dates</div>
                <p>13-27/10/2022</p>
              </div>
              <main className="uxMain">
                <h3>Week 1</h3>
                <p>
                  We found that mould is one of these things we don’t think
                  about a lot even though it is always somewhere around, be it
                  on the window frame, in the back of the cupboard or as spores
                  in the air. Upon briefing, the first two things that came to
                  my mind were the intuitively repulsive effect of mould, a
                  fascinating psychological protection mechanism, and its often
                  organic, moss-like texture. Both, I thought, could translate
                  nicely into the project. Initial research in our group
                  revealed that mould is a fungal growth
                  <span className="footNote" onClick={executeScroll}>
                    [1]
                  </span>
                  . Its network structure of tiny branches is called Mycelium.
                  This structure has been talked about in the last decade as a
                  promising sustainable material
                  <span className="footNote" onClick={executeScroll}>
                    [2]
                  </span>{" "}
                  ranging in application from product packaging
                  <span className="footNote" onClick={executeScroll}>
                    [3]
                  </span>{" "}
                  to building construction
                  <span className="footNote" onClick={executeScroll}>
                    [4]
                  </span>
                  . Another astonishing finding we discussed was mould’s
                  apparent intelligence, enabling it to solve mazes through its
                  network growth
                  <span className="footNote" onClick={executeScroll}>
                    [5]
                  </span>
                  .
                </p>
                <div className="g11">
                  <ZoomImage
                    src="/images/ux/mould1_1_1m.jpg"
                    enlargedSrc="/images/ux/mould1_1_1.jpg"
                  />
                  <ZoomImage
                    src="/images/ux/mould1_1_2m.jpg"
                    enlargedSrc="/images/ux/mould1_1_2.jpg"
                  />
                </div>
                <div className="caption">
                  Mould on ground coffee (left), Mycelium structures (right, by{" "}
                  <a
                    href="https://www.flickr.com/photos/bushman_k/6177594429"
                    target="_blank"
                  >
                    Kirill Ignatyev
                  </a>
                  )
                </div>
                <p>
                  We assembled our findings in a shared document and started
                  working on the research methods specified by the brief. The
                  love and breakup letter seemed like a fun way to highlight
                  positive and negative characteristics we associate with mould.
                  As positive aspects we mentioned the intelligent growth, the
                  unity and self-sacrifice of small entities for the good of the
                  network and the aesthetic qualities in texture and colour. We
                  also noted that mould contributes to some tasty cheese varieties
                  and helped the discovery of penicillin. Negative qualities highlighted in
                  the breakup letter included toxicity, nastiness and parasitism
                  of mould. See both handwritten letters below.
                </p>
                <div className="g11">
                  <ZoomImage
                    src="/images/ux/mould1_2_1m.png"
                    enlargedSrc="/images/ux/mould1_2_1.png"
                  />
                  <ZoomImage
                    src="/images/ux/mould1_2_2m.png"
                    enlargedSrc="/images/ux/mould1_2_2.png"
                  />
                </div>
                <p>
                  Applying the{" "}
                  <a
                    href="https://openpracticelibrary.com/practice/aeiou-observation-framework/"
                    target="_blank"
                  >
                    AEIOU
                  </a>{" "}
                  (Activities, Environment, Interactions, Objects, Users)
                  framework to mould was difficult. The method seemed suitable
                  for observation of a shop environment, a checkout desk or
                  service station – it wasn’t obvious how to apply it to mould.
                  Was mould the user or the object? We decided to conduct the
                  AEIOU in the setting of Kye Li’s kitchen and with her as the
                  user. To analyse the observations, we labelled emerging themes
                  on an online idea board.
                </p>
                <div className="g11">
                  <ZoomImage
                    src="/images/ux/mould1_3_1m.jpg"
                    enlargedSrc="/images/ux/mould1_3_1.jpg"
                  />
                  <ZoomImage
                    src="/images/ux/mould1_3_2m.jpg"
                    enlargedSrc="/images/ux/mould1_3_2.jpg"
                  />
                </div>
                <div className="g1add">
                  <ZoomImage
                    src="/images/ux/mould1_3_3m.jpg"
                    enlargedSrc="/images/ux/mould1_3_3.jpg"
                  />
                </div>
                <div className="caption">
                  Initial AEIOU sketch (top-left), AEIOU idea board (bottom)
                </div>
                <p>
                  We thought audio might be an exciting medium to translate the
                  positive and negative characteristics, creating a kind of
                  “soundtrack” of mould. Consequently, we worked on a
                  composition made from synthesized sounds and recorded slime
                  noises, representing both the repulsive and aesthetically
                  pleasing qualities of mould for our first week experience. We
                  also discussed using multiple torches shining from behind
                  on a canvas of black fabric, turning on each one after another,
                  to express the slow beginning and then exponential growth of a
                  mould network. We then decided last-minute to only play the
                  audio for the presentation. Below is the week one audio
                  experience as well as sketches and a video of the light
                  concept.
                </p>
                <audio controls>
                  <source src="/images/ux/mould1.mp3" type="audio/mpeg" />
                </audio>
                <div className="caption">Week 1 audio composition</div>
                <div className="g11">
                  <ZoomImage
                    src="/images/ux/mould1_4_1m.jpg"
                    enlargedSrc="/images/ux/mould1_4_1.jpg"
                  />
                  <video
                    controls
                    className="uxVideo"
                    width="720"
                    height="960"
                    muted
                  >
                    <source
                      src="/images/ux/mould1_4_2.mp4#t=0.001"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="caption">
                  Sketch and video of the light concept by Manfredi and Kye Li
                </div>
                <p>
                  While the soundtrack was appreciated, there was a bit of (what
                  the course team would throughout the first module call) a
                  “so-what” effect – we too felt that there was something
                  missing after playing the composition. Feedback included
                  suggestions of other sounds, demand for utilization of real
                  mould and the observation that the sound was too pleasant,
                  that maybe the audience shouldn’t enjoy listening to it.
                </p>
                <h3>Week 2</h3>
                <p>
                  The tutorial with the course team gave us some helpful
                  insights. The brief had turned out to be tricky (even groups I
                  felt had presented promising projects had not received a lot
                  of credit) and we tried to ask challenging questions. We
                  clarified that it was fine for us to only use sound and no
                  visual aspect for this project, which we appreciated as an
                  opportunity to focus on only one medium. Almost all groups in
                  week 1 had been criticised for going too abstract and lacking
                  actual mould in their work; accordingly, we were advised to
                  work with as much of “the real thing” as possible when
                  recording our sounds. A "translation", as the brief demanded,
                  needs to stem from an original material; the translation
                  itself needs to relate element for element to this original
                  source. Nothing can just be made up.
                </p>
                <div className="g111">
                  <ZoomImage
                    src="/images/ux/mould2_1_1s.jpg"
                    enlargedSrc="/images/ux/mould2_1_1.jpg"
                  />
                  <ZoomImage
                    src="/images/ux/mould2_1_3s.jpg"
                    enlargedSrc="/images/ux/mould2_1_3.jpg"
                  />
                  <ZoomImage
                    src="/images/ux/mould2_1_2s.jpg"
                    enlargedSrc="/images/ux/mould2_1_2.jpg"
                  />
                </div>
                <div className="caption">
                  Left image by Manfredi, right image by Kye Li
                </div>
                <p>
                  Manfredi had started to grow his own mycelium in week one,
                  using mushrooms from the grocery store and multiple layers of
                  cardboard as seen above. All of us discovered some mould in
                  our respective houses, for example in a yoghurt pot and in a
                  ginger beer starter. We also discovered that mould had already
                  been used for renowned art pieces such as Sam Taylor-Wood’s
                  Still Life
                  <span className="footNote" onClick={executeScroll}>
                    [6]
                  </span>{" "}
                  (see below) . We started to capture more sounds in mouldy
                  environments such as the shower and experimented with
                  recording mouldy ginger beer starter with a close-up
                  microphone to get diverse sound layers with connection to the
                  physical objects.
                </p>
                <div className="video169responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/BJQYSPFo7hk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="caption">Sam Taylor-Wood: Still Life</div>
                <div className="g11">
                  <ZoomImage
                    src="/images/ux/mould2_2_1s.jpg"
                    enlargedSrc="/images/ux/mould2_2_1.jpg"
                  />
                  <ZoomImage
                    src="/images/ux/mould2_2_2s.jpg"
                    enlargedSrc="/images/ux/mould2_2_2.jpg"
                  />
                </div>
                <div className="g1add">
                  <ZoomImage
                    src="/images/ux/mould2_2_3m.jpg"
                    enlargedSrc="/images/ux/mould2_2_3.jpg"
                  />
                </div>
                <div className="caption">
                  Top-right picture by Kye Li (note the sounds working on us)
                </div>
                <p>
                  Finally, we came up with the idea to use a MIDI-controller
                  (the Ableton Push 2) to let other students create their own
                  mould soundtrack in our experience. We decided to assign 8
                  buttons on the controller to a specific sound each. Every
                  sound represented one of the qualities of mould discovered
                  through our research. Some sounds stemmed from our recordings,
                  and some were synthesized digitally; see the full list of
                  sounds below. Each button was labelled with tape and marker to
                  identify the respective meaning. Participants were able to
                  combine and arrange sounds in the audio installation by
                  pressing the buttons. To add depth to the sonic experience, we
                  used two additional speakers playing permanent sound layers in
                  separate areas of the room. These represented darkness (a
                  common feature of our examined mouldy environments) with a
                  speaker placed on the floor and mould spores (which surround
                  us in fine quantities) with a speaker on a high window frame.
                </p>
                <div className="g1">
                  <ZoomImage
                    src="/images/ux/mould2_3_1.jpg"
                    enlargedSrc="/images/ux/mould2_3_1.jpg"
                  />
                </div>
                <div className="caption">
                  List of sounds used for the installation
                </div>
                <div className="g11asym">
                  <div className="g11asymImg1b">
                    <video
                      controls
                      className="uxVideo"
                      width="1280"
                      height="720"
                    >
                      <source
                        src="/images/ux/mould2_3_2.mp4#t=0.001"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="g11asymImg2">
                    <video
                      controls
                      className="uxVideo"
                      width="720"
                      height="1280"
                    >
                      <source
                        src="/images/ux/mould2_3_3.mp4#t=0.001"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="caption">
                  Live experimentation with the mould sounds, recorded by Kye Li
                </div>
                <audio controls>
                  <source src="/images/ux/mould2.mp3" type="audio/mpeg" />
                </audio>
                <div className="caption">
                  A possible sound sphere with all sounds combined
                </div>
                <p>
                  Feedback was generally positive. Other students mentioned they
                  found the installation calming and meditative, but also eerie.
                  Suggestions were to add more of a story line to the sound, to
                  make the sounds more obviously relate to mould and to add more
                  to the physical setting and a communal, shared experience.
                  Another group also worked with sound – amazingly, their
                  speaker was triggered by touching actual mould connected to a
                  microcontroller board. We agreed that a combination of our
                  sound sphere and their physical set up would have worked
                  great.
                </p>
                <h3>Main Takeaways:</h3>
                <p>
                  <ul>
                    <li>
                      The design should be grounded in findings from the given
                      research methods. It is tempting to do it the other way
                      around; to come up with a design idea and then to
                      construct a research justification retrospectively.
                    </li>
                    <li>
                      The prototype should not be overly metaphorical, any
                      abstraction must have a connection to the real matter.
                    </li>
                    <li>
                      The module is designed to train our way of thinking and
                      ability to generate prototypes in teams; for this purpose,
                      we are challenged with unusual design topics and
                      counter-intuitive methods.
                    </li>
                    <li>
                      We have considerable freedom in interpreting the brief,
                      the first line with the task is the guiding constant we
                      can come back to.
                    </li>
                  </ul>
                </p>
                <div className="bottomNav">
                  <a href="/ux/senses">
                    <HiOutlineArrowLeft className="hiIcon" /> Previous brief
                  </a>
                  <a href="/ux/hair">
                    Next brief <HiOutlineArrowRight className="hiIcon" />
                  </a>
                </div>
                <h3>References:</h3>
                <div className="bib" ref={bib}>
                  <ol>
                    <li>
                      Hukka, A. and Viitanen, H. A. (1999) ‘A mathematical model
                      of mould growth on wooden material’,{" "}
                      <i>Wood Science and Technology</i>, 33(6), pp. 475–485.
                      doi:{" "}
                      <a
                        href="https://doi.org/10.1007/s002260050131"
                        target="_blank"
                      >
                        10.1007/s002260050131
                      </a>
                      .
                    </li>
                    <li>
                      Ivanova, N. (2022) ‘Fungi for Material Futures: The Role
                      of Design’, in Deshmukh, S. K., Deshpande, M. V., and
                      Sridhar, K. R. (eds) Fungal Biopolymers and Biocomposites:
                      Prospects and Avenues. <i>Springer Nature Singapore</i>,
                      pp. 209–251. doi:{" "}
                      <a
                        href="https://doi.org/10.1007/978-981-19-1000-5_12"
                        target="_blank"
                      >
                        10.1007/978-981-19-1000-5_12
                      </a>
                      .
                    </li>
                    <li>
                      Hahn, J. (2020) “Amen grows carbon-negative mycelium
                      packaging to ship its candles,” <i>Dezeen</i>, 5 October.
                      Available at:{" "}
                      <a
                        href="https://www.dezeen.com/2020/10/05/amen-candles-mycelium-packaging-mushroom-conversations/"
                        target="_blank"
                      >
                        https://www.dezeen.com/2020/10/05/amen-candles-mycelium-packaging-mushroom-conversations/
                      </a>{" "}
                      (Accessed: December 27, 2022).
                    </li>
                    <li>
                      Frearson, A. (2014) “Tower of ‘grown’ bio-bricks by The
                      Living opens at MoMA PS1,” <i>Dezeen</i>, 1 July.
                      Available at:{" "}
                      <a
                        href="https://www.dezeen.com/2014/07/01/tower-of-grown-bio-bricks-by-the-living-opens-at-moma-ps1-gallery/"
                        target="_blank"
                      >
                        https://www.dezeen.com/2014/07/01/tower-of-grown-bio-bricks-by-the-living-opens-at-moma-ps1-gallery/
                      </a>{" "}
                      (Accessed: December 27, 2022).
                    </li>
                    <li>
                      Adamatzky, A. (2012) ‘Slime Mold Solves Maze in One Pass,
                      Assisted by Gradient of Chemo-Attractants’,{" "}
                      <i>IEEE Transactions on NanoBioscience</i>, 11(2), pp.
                      131–134. doi:{" "}
                      <a
                        href="https://doi.org/10.1109/TNB.2011.2181978"
                        target="_blank"
                      >
                        10.1109/TNB.2011.2181978
                      </a>
                      .
                    </li>
                    <li>
                      Still Life (2013) YouTube. Available at:
                      <a href="https://youtu.be/BJQYSPFo7hk" target="_blank">
                        https://youtu.be/BJQYSPFo7hk
                      </a>{" "}
                      (Accessed: December 27, 2022).
                    </li>
                  </ol>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mould;
