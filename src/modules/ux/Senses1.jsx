import React, { useState } from "react";
import "./UX.sass";
import Image from "react-image-enlarger";

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

function Senses1() {
  return (
    <div>
      <div className="uxGradient"></div>
      <div className="uxContent">
        {/* <div className="uxHeadlineBg1">Senses</div>
        <div className="uxHeadlineBg2">Senses</div> */}
        <h1 className="uxHeadline">
          <b>UX of Human Senses</b> (1/2)
        </h1>
        <div className="uxBeautyContainer">
          <img src="/images/ux/senses1bm.jpg" alt="" className="uxBeauty" />
        </div>
        <div className="uxText">
          <div className="uxOverview">
            <p>
              <b>Brief:</b> Conceive and design a{" "}
              <span className="uxHighlight">wearable</span> experience derived
              from your sensory experiences of London, specifically the{" "}
              <span className="uxHighlight">Twining’s flagship store</span> in
              216 Strand, London WC2R 1AP. Your design should extend the human
              sense of <span className="uxHighlight">nociception</span> beyond
              the body.
            </p>
            <p>
              <b>Designers:</b> Jakob Prufer, <a href="">Lingjia Fang</a>,{" "}
              <a href="">Romit Khurd</a>, <a href="">Yuying Wang</a>
            </p>
            <p>
              <b>Dates:</b> 03-06/10/2022
            </p>
          </div>
          <main className="uxMain">
            <p>
              <b>Final Outcome:</b> We designed an experiment investigating the
              intensity of pain perception when ice cubes touch one’s hand. The
              experience included three scenarios: 1. no distraction, 2. a
              cardboard box to impair vision and 3. a cardboard box with
              headphones and music playing.
            </p>
            <p>
              The UX of human senses was our first design brief of our MA
              program. Having just gotten to know each other, Lingjia, Romit,
              Yuying and me started with fresh eyes and little clue. Preliminary
              research revealed to me that nociception, our group’s assigned
              human sense, is the painful feeling caused by a noxious stimulus
              on the skin or any soft tissue
              <a href="#bib" className="footNote">
                [1]
              </a>
              . Noxious stimuli can be
              <a href="#bib" className="footNote">
                [2]
              </a>
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
              <a href="#bib" className="footNote">
                [3]
              </a>
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
                src="/images/ux/senses0_1s.jpg"
                enlargedSrc="/images/ux/senses0_1.jpg"
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
              as our location to explore and draw inspiration from. Tucked away
              between the post-Covid vacancy and lunch tristesse of a once
              glorious intersection of The Strand and Fleet Street sits this
              narrow, long-drawn-out tea shop. Even though my undergraduate
              university is located just across the street, and I had gotten a
              million cappuccinos next door, I had previously failed to notice
              it. All the more I was surprised to find that this little hidden
              place has been trading tea for over 300 years and is claimed to be
              the original location of the internationally renowned tea brand.
              What was once “Tom’s Coffee House”, purchased by Thomas Twining in
              1706, is now a highly polished brand experience store attractive
              mostly for tourists. Interactivity seems to be the main focus:
              displays on the wall inform customers about the establishment’s
              history and the origins of the tea. All kinds of loose-leaf tea
              can be smelled or tasted at the taster bar. Tea masterclasses in a
              back room are advertised.
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
            <p>
              While the sense of smell was stimulated, nothing in the shop
              obviously related to nociception. Only the hot tea pots reminded
              us of a painful experience. Our first idea for a prototype
              consequently was a glove that reacted to hot objects, either by
              emitting a loud sound or through vibration. The pitch of the sound
              cold be indicative of the touched object’s temperature. With wire
              and a microcontroller board we build a non-functional prototype.
              In the first feedback session however we realised the prototype
              had to be at least somewhat functional in the class room – it
              couldn’t just be recorded or “faked”. with the short amount of
              time given, the glove idea therefor didn’t seem feasible and was
              abandoned.
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
              design anything that would cause considerable physical pain, yet
              the brief asked us to extend nociception beyond the body. While
              the glove prototype constituted a symbolic representation of this
              sense, Romit stimulated a different interpretation. Maybe we could
              use just slight nociceptive pain for good: to remind users of a
              negative habit such as bad posture. We discussed a wearable that
              would poke the wearer whenever they slouched; our second prototype
              of the first week therefor became an exoskeleton of sorts, made
              from wire. While it turned out aesthetically beautiful, it seemed
              hard to mechanically adjust the object so it would only poke at a
              specific degree of slouching.
            </p>
            <div className="g11">
              <div className="g11img1">
                <ZoomImage
                  src="/images/ux/senses1_3_1s.JPEG"
                  enlargedSrc="/images/ux/senses1_3_1.JPEG"
                />
              </div>
              <div className="g11img2">
                <ZoomImage
                  src="/images/ux/senses1_3_2s.JPEG"
                  enlargedSrc="/images/ux/senses1_3_2.JPEG"
                />
              </div>
            </div>
            <p>
              <b>Main takeaways:</b>
              <ul>
                <li>
                  The course team like quirky things that can be touched, tried
                  on and create a “wow”-effect; designs need to function in the
                  room
                </li>
                <li>
                  Being a skilled presenter is a big part of being a good UX
                  designer
                </li>
                <li>Pizza at the canteen is decent</li>
              </ul>
            </p>
            <div className="bib" id="bib">
              <h3 className="uxH3">References</h3>
              <ol>
                <li>
                  Dubin, A. E., & Patapoutian, A. (2010). Nociceptors: the
                  sensors of the pain pathway.{" "}
                  <i>The Journal of clinical investigation</i>, 120(11),
                  3760–3772.{" "}
                  <a href="https://doi.org/10.1172/JCI42843" target="_blank">
                    https://doi.org/10.1172/JCI42843
                  </a>
                </li>
                <li>
                  Chudler, E. H., & Lu, Y. (2008). Nociceptive behavioral
                  responses to chemical, thermal and mechanical stimulation
                  after unilateral, intrastriatal administration of
                  6-hydroxydopamine. <i>Brain research</i>, 1213, 41–47.{" "}
                  <a
                    href="https://doi.org/10.1016/j.brainres.2008.03.053"
                    target="_blank"
                  >
                    https://doi.org/10.1016/j.brainres.2008.03.053
                  </a>
                </li>
                <li>
                  St John Smith E. (2018). Advances in understanding nociception
                  and neuropathic pain. <i>Journal of neurology</i>, 265(2),
                  231–238.{" "}
                  <a href="https://doi.org/10.1007/s00415-017-8641-6">
                    https://doi.org/10.1007/s00415-017-8641-6
                  </a>
                </li>
              </ol>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Senses1;
