import React, { Fragment, useEffect, useRef, useState } from "react";
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

function Senses() {
  const [U1Open, setU1Open] = useState(true);

  const toggleU1 = () => {
    setU1Open(!U1Open);
  };

  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  return (
    <div>
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
                  <a
                    href="/ux/senses"
                    className="uxNavProject uxHighlight active"
                  >
                    UX of Human Senses
                  </a>
                  <a href="/ux/mould" className="uxNavProject">
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
            <h2>UX of Human Senses</h2>
          </div>
          <div className="g1">
            <ZoomImage
              src="/images/ux/senses_bm.JPG"
              enlargedSrc="/images/ux/senses_b.jpg"
            />
          </div>
          <div className="uxText">
            <div className="uxOverview">
              <div className="uxSmallTitle">Brief</div>
              <p>
                Conceive and design a{" "}
                <span className="uxHighlight">wearable</span> experience derived
                from your sensory experiences of London, specifically the{" "}
                <span className="uxHighlight">Twining’s flagship store</span> in
                216 Strand, London WC2R 1AP. Your design should{" "}
                <span className="uxHighlight">extend</span> the human sense of{" "}
                <span className="uxHighlight">nociception</span> beyond the
                body.
              </p>
              <div className="uxSmallTitle">Designers</div>
              <p>
                Lingjia Fang, <a href="https://romit-khurd.notion.site/93fa67c50fd84f12bf84abd829dd9e7a?v=c045d378c54a4270b875748ebfe24746" target="_blank">Romit Khurd</a>,{" "}Yuying Wang (Abbey) , Jakob Prüfer
              </p>
              <div className="uxSmallTitle">Dates</div>
              <p>03-13/10/2022</p>
            </div>
            <main className="uxMain">
              {/* <p>
                <b>Final Outcome:</b> We designed an experiment investigating
                the intensity of pain perception when ice cubes touch one’s
                hand. The experience included three scenarios: 1. no
                distraction, 2. a cardboard box to impair vision and 3. a
                cardboard box with headphones and music playing.
              </p> */}
              <h3>Week 1</h3>
              <p>
                The UX of human senses was our first design brief of our MA
                programme. Having just gotten to know each other, Abbey, Lingjia,
                Romit and me started with fresh eyes and little clue.
                Preliminary research revealed to me that nociception, our
                group’s assigned human sense, is the painful feeling caused by a
                noxious stimulus on the skin or any soft tissue
                <span className="footNote" onClick={executeScroll}>
                  [1]
                </span>
                . Noxious stimuli can be
                <span className="footNote" onClick={executeScroll}>
                  [2]
                </span>
                :
                <ul>
                  <li>
                    mechanical - fractures, cuts, sharp objects penetrating the
                    skin
                  </li>
                  <li>chemical - chilli peppers, smoke, acid, tissue damage</li>
                  <li>thermal - extremely hot or cold objects</li>
                </ul>
                It is important to clarify that not any pain is automatically
                nociceptive – chronic pain caused by diseases for instance is
                instead classed as neuropathic pain
                <span className="footNote" onClick={executeScroll}>
                  [3]
                </span>
                .
              </p>
              {/* <div className="uxImgRowLeft">
              <img src="/images/ux/senses1_1_1.jpg" alt="" className="uxImg1" />
              <div className="uxImg23">
                <img src="/images/ux/senses1_1_4.jpg" alt="" className="uxImg2" />
                <img src="/images/ux/senses1_1_2.jpg" alt="" className="uxImg3" />
              </div>
              </div> */}
              {/* <div className="imgR12">
              <img src="/images/ux/senses1_1_1.jpg" alt="" className="img1" />
              <div className="imgR12r2">
                <img src="/images/ux/senses1_1_4.jpg" alt="" className="img2" />
                <img src="/images/ux/senses1_1_2.jpg" alt="" className="img3" />
              </div>
            </div> */}
              <div className="g1">
                <ZoomImage
                  src="/images/ux/senses1_0_1s.jpg"
                  enlargedSrc="/images/ux/senses1_0_1.jpg"
                />
              </div>
              <p>
                The brief specified the{" "}
                <a
                  href="https://twinings.co.uk/pages/twinings-flagship-store-216-strand"
                  target="_blank"
                >
                  Twining’s flagship store
                </a>{" "}
                as our location to explore and draw inspiration from. Tucked
                away between the post-Covid vacancy and lunch tristesse of a
                once glorious intersection of The Strand and Fleet Street sits
                this narrow, long-drawn-out tea shop. Even though my
                undergraduate university is located just across the street, and
                I had gotten a million cappuccinos next door, I had previously
                failed to notice it. All the more I was surprised to find that
                this little hidden place has been trading tea for over 300 years
                and is claimed to be the original location of the
                internationally renowned tea brand. What was once “Tom’s Coffee
                House”, purchased by Thomas Twining in 1706, is now a highly
                polished brand experience store attractive mostly for tourists.
                Interactivity seems to be the main focus: displays on the wall
                inform customers about the establishment’s history and the
                origins of the tea. All kinds of loose-leaf tea can be smelled
                or tasted at the taster bar. Tea masterclasses in a back room
                are advertised.
              </p>
              <div className="gr12">
                <div className="gr12img1">
                  <ZoomImage
                    src="/images/ux/senses1_1_1s.jpg"
                    enlargedSrc="/images/ux/senses1_1_1.jpg"
                  />
                </div>
                <div className="gr12img2">
                  <ZoomImage
                    src="/images/ux/senses1_1_2s.jpg"
                    enlargedSrc="/images/ux/senses1_1_2.jpg"
                    className="img"
                  />
                </div>
                <div className="gr12img3">
                  <ZoomImage
                    src="/images/ux/senses1_1_3s.jpg"
                    enlargedSrc="/images/ux/senses1_1_3.jpg"
                  />
                </div>
              </div>
              <div className="caption">
                Left image by{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Twinings_Strand_Heritage_Shop,_London,_UK_-_20111128.jpg"
                  target="_blank"
                >
                  Victorgrigas
                </a>
                , Wikimedia Commons
              </div>
              <p>
                While the sense of smell was stimulated, nothing in the shop
                obviously related to nociception. Only the hot tea pots reminded
                us of a painful experience. Our first idea for a prototype
                consequently was a glove that reacted to hot objects, either by
                emitting a loud sound or through vibration. The pitch of the
                sound cold be indicative of the touched object’s temperature.
                With wire and a microcontroller board we build a non-functional
                prototype.
              </p>
              <div className="uxImgRowLeft">
                <div className="uxImg1">
                  <ZoomImage
                    src="/images/ux/senses1_2_1m.JPEG"
                    enlargedSrc="/images/ux/senses1_2_1.JPEG"
                  />
                </div>
                <div className="uxImg23">
                  <div className="uxImg2">
                    <ZoomImage
                      src="/images/ux/senses1_2_2s.JPEG"
                      enlargedSrc="/images/ux/senses1_2_2.JPEG"
                    />
                  </div>
                  <div className="uxImg3">
                    <ZoomImage
                      src="/images/ux/senses1_2_3s.JPEG"
                      enlargedSrc="/images/ux/senses1_2_3.JPEG"
                    />
                  </div>
                </div>
              </div>
              <p>
                A difficulty with our allocated sense was that we didn’t want to
                design anything that would cause physical pain, yet
                the brief asked us to extend nociception beyond the body. While
                the glove prototype constituted a symbolic representation of
                this sense, Romit stimulated a different interpretation. Maybe
                we could use just slight nociceptive pain for good: to remind
                users of a negative habit such as bad posture. We discussed a
                wearable that would poke the wearer whenever they slouched; our
                second prototype of the first week therefore became an
                exoskeleton of sorts, made from wire. While it turned out
                aesthetically beautiful, it seemed hard to mechanically adjust
                the object so it would only poke at a specific degree of
                slouching.
              </p>
              <div className="g11asym">
                <div className="g11asymImg1">
                  <ZoomImage
                    src="/images/ux/senses1_3_1s.jpeg"
                    enlargedSrc="/images/ux/senses1_3_1.JPEG"
                  />
                </div>
                <div className="g11asymImg2">
                  <ZoomImage
                    src="/images/ux/senses1_3_2s.JPEG"
                    enlargedSrc="/images/ux/senses1_3_2.JPEG"
                  />
                </div>
              </div>
              <div className="caption">Left image by Lingjia</div>
              <p>
                The first week feedback session revealed that our prototype had
                to be at least somewhat functional in the class room – it
                couldn’t just be recorded or “faked” on video. With the short
                amount of time given, the glove idea therefore didn’t seem
                feasible and was abandoned. For our other approaches, we would
                have to consider practicability in week 2. The first
                presentation in front of the class brought out some nerves for
                me; wrapping up week 1 felt very rewarding.
              </p>
              <h3>Week 2</h3>
              <p>
                Following up from our behaviour change approach from first week,
                we considered various behaviours that could be affected by using
                a slight nociceptive pain. Ideas included:
                <ul>
                  <li>Smoking – a cigarette case with a spiky flap</li>
                  <li>Nail biting – a nail polish made with spicy chili oil</li>
                  <li>
                    Studying – uncomfortable slippers that make you want to stay
                    seated
                  </li>
                </ul>
                These ideas were very much in the realm of self-development and
                straight-forward problem-solving instruments. I wasn’t sure
                whether this was the way we had to think about our
                designs; projects that had gotten good feedback in the first
                week often more resembled artistic installations rather than
                consumer products.
              </p>
              <div className="g1">
                <ZoomImage
                  src="/images/ux/senses2_0_1m.jpg"
                  enlargedSrc="/images/ux/senses2_0_1.jpg"
                />
              </div>
              <div className="caption">Sketch by Lingjia</div>
              <p>
                The other approach we had discussed in first week was realising
                the warning function of nociception without inflicting actual
                pain. Along this line of ideas, we experimented with the “rubber
                hand illusion”. This psychological experimental design
                investigates the effect of visual information on the perception
                of body ownership. Specifically, participants start associating
                a rubber hand with their own body when they observe it being
                stroked while their own unseen hand is synchronously stroked
                <span className="footNote" onClick={executeScroll}>
                  [4]
                </span>
                . Slamming a hammer on the rubber hand then leads to a shock
                effect, demonstrating this new association
                <span className="footNote" onClick={executeScroll}>
                  [5]
                </span>
                . The phenomenon was first reported by Botvinick and Cohen in
                1998
                <span className="footNote" onClick={executeScroll}>
                  [6]
                </span>
                . To adopt the experiment, we built a cardboard setup that would
                cover the real hand and prepared a latex glove as the fake hand.
                Recreating the shock effect with the face hand however did not
                exactly induce a nociceptive experience for us.
              </p>
              <div className="g11asym">
                <div className="g11asymImg1">
                  <ZoomImage
                    src="/images/ux/senses2_1_1s.jpg"
                    enlargedSrc="/images/ux/senses2_1_1.jpg"
                  />
                </div>
                <div className="g11asymImg2">
                  <ZoomImage
                    src="/images/ux/senses2_1_2s.jpg"
                    enlargedSrc="/images/ux/senses2_1_2.jpg"
                  />
                </div>
              </div>
              <div className="caption">
                Left image by Romit, right image by Abbey
              </div>
              <p>
                We then settled on an experiment as our final design. Using ice
                cubes, we wanted to test the experience of thermal nociception
                in different settings. We hypothesized that blocking vision and
                hearing would increase the perception of cold because it was the
                main focus. For that purpose we build a cardboard box, sealed
                off by cotton wool to wear on the head. We also integrated a
                pair of headphones in the box. In our live demonstration, we let
                one person from the class rate their pain perception while we
                put ice cubes on the back of their hands in three different
                conditions:
                <ol>
                  <li>no distraction</li>
                  <li>a cardboard box to impair vision and</li>
                  <li>
                    a cardboard box and music playing through the headphones.
                    The song played was “Bonnie and Clyde” by Serge
                    Gainsborough. We used over-ear closed headphones and the
                    participant didn’t hear talking with the music on.
                  </li>
                </ol>
              </p>
              <p>
                Our hypothesis was confirmed as the participant reported a
                slightly higher pain level with each condition. Certainly the
                nature of the demonstration and the one-person sample size was
                no scientific proof, instead our focus was on the participant’s
                experience. We received vivid feedback from the class, mostly
                with suggestions how we could add to the setup – this
                showed that our outcome was not final, but still in the
                experimental stage.
              </p>
              <h3>Main Takeaways:</h3>
              <p>
                <ul>
                  <li>
                    The course team like quirky things that can be touched,
                    tried on and create a “wow”-effect; designs need to function
                    in the room
                  </li>
                  <li>
                    Being a skilled presenter is integral for a UX designer
                  </li>
                  <li>
                    "Getting one’s hands dirty" with physical prototyping is a
                    worthwhile change from thinking, clicking and typing
                  </li>
                  <li>Pizza at the canteen is solid</li>
                </ul>
              </p>
              <div className="bottomNav">
                <a href="/ux">
                  <HiOutlineArrowLeft className="hiIcon" /> Back to overview
                </a>
                <a href="/ux/mould">
                  Next brief <HiOutlineArrowRight className="hiIcon" />
                </a>
              </div>
              <h3>References:</h3>
              <div className="bib" ref={bib}>
                <ol>
                  <li>
                    Dubin, A. E., & Patapoutian, A. (2010). Nociceptors: the
                    sensors of the pain pathway.{" "}
                    <i>The Journal of clinical investigation</i>, 120(11), pp.
                    3760–3772.{" "}
                    <a href="https://doi.org/10.1172/JCI42843" target="_blank">
                      https://doi.org/10.1172/JCI42843
                    </a>
                  </li>
                  <li>
                    Chudler, E. H., & Lu, Y. (2008). Nociceptive behavioral
                    responses to chemical, thermal and mechanical stimulation
                    after unilateral, intrastriatal administration of
                    6-hydroxydopamine. <i>Brain research</i>, 1213, pp. 41–47.{" "}
                    <a
                      href="https://doi.org/10.1016/j.brainres.2008.03.053"
                      target="_blank"
                    >
                      https://doi.org/10.1016/j.brainres.2008.03.053
                    </a>
                  </li>
                  <li>
                    St John Smith E. (2018). Advances in understanding
                    nociception and neuropathic pain.{" "}
                    <i>Journal of neurology</i>, 265(2), pp. 231–238.{" "}
                    <a
                      href="https://doi.org/10.1007/s00415-017-8641-6"
                      target="_blank"
                    >
                      https://doi.org/10.1007/s00415-017-8641-6
                    </a>
                  </li>
                  <li>
                    Kammers, M.P., de Vignemont, F., Verhagen, L. and Dijkerman,
                    H.C. (2009). The rubber hand illusion in action.{" "}
                    <i>Neuropsychologia</i>, 47(1), pp. 204-211.{" "}
                    <a
                      href="https://doi.org/10.1016/j.neuropsychologia.2008.07.028"
                      target="_blank"
                    >
                      https://doi.org/10.1016/j.
                      <br />
                      neuropsychologia.2008.07.028
                    </a>
                  </li>
                  <li>
                    The Rubber Hand Illusion - Horizon: Is Seeing Believing?
                    (2010) YouTube. <i>BBC Two</i>. Available at:{" "}
                    <a
                      href="https://www.youtube.com/watch?v=sxwn1w7MJvk"
                      target="_blank"
                    >
                      https://www.youtube.com/watch?v=sxwn1w7MJvk
                    </a>{" "}
                    (Accessed: December 14, 2022).
                  </li>
                  <li>
                    Botvinick, M. and Cohen, J. (1998). Rubber hands ‘feel’
                    touch that eyes see. <i>Nature</i>, 391(6669), p. 756.{" "}
                    <a href="https://doi.org/10.1038/35784" target="_blank">
                      https://doi.org/10.1038/35784
                    </a>
                  </li>
                </ol>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Senses;
