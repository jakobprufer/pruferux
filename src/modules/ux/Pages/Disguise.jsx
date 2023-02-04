import React, { Fragment, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Image from "react-image-enlarger";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
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

function Disguise() {
  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  return (
    <div className="uxContent">
      <div className="uxStickyTitle">
        <h2>UX of Disguise</h2>
      </div>
      <div className="g1">
        <ZoomImage
          src="/images/ux/disguise_bm.jpg"
          enlargedSrc="/images/ux/disguise_b.jpg"
        />
      </div>
      <div className="uxText">
        <div className="uxOverview">
          <div className="uxSmallTitle">Brief</div>
          <p>
            Design a way to <span className="uxHighlight">manipulate</span> and{" "}
            <span className="uxHighlight">deceive perceptual recognition</span>.
          </p>
          <div className="uxSmallTitle">Research Methods</div>
          <p>
            <a
              href="https://visionone.co.uk/research-glossary/what-is-artefact-analysis/#:~:text=Artefact%20Analysis%20is%20used%20in,but%20also%20used%20in%20Archaeology."
              target="_blank"
            >
              Artefact Analysis
            </a>
            ,{" "}
            <a href="http://dataphys.org/" target="_blank">
              Data Physicalisation
            </a>
          </p>
          <div className="uxSmallTitle">Designers</div>
          <p>
            <a href="https://kimberlyrodrigues.my.canva.site" target="_blank">
              Kimberly Rodrigues
            </a>
            ,{" "}
            <a
              href="https://blog500070.wixsite.com/martyktdesign/blog"
              target="_blank"
            >
              Kuan-Ting Chen
            </a>{" "}
            (Marty),{" "}
            <a
              href="https://readymag.com/u561240559/MansiMAUX/"
              target="_blank"
            >
              Mansi Chottani
            </a>
            , Wan Ying Liang Chen, Jakob Prüfer
          </p>
          <div className="uxSmallTitle">Dates</div>
          <p>24/11-08/12/2022</p>
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
            Disguise has been a longstanding strategy in the animal kingdom
            <span className="footNote" onClick={executeScroll}>
              [1]
            </span>
            . It seems as important as ever for us humans too, with the
            expansive development of advanced face
            <span className="footNote" onClick={executeScroll}>
              [2]
            </span>{" "}
            and speech
            <span className="footNote" onClick={executeScroll}>
              [3]
            </span>{" "}
            recognition technologies that can be used for surveillance.
            Disguising oneself can mean pretending to be something or someone
            else as well as hiding and avoiding detection altogether. The topic
            seemed to resonate with everyone in our group - from the get-go,
            absorbing and amusing associations started flowing in conversation.
            We came up with various problems that we thought could use a
            solution. In the area of privacy and anti-surveillance protection,
            these included traceable information that we leave in the waste bin
            (like packaging and letters), unique keyboard typing patterns that
            can identify you like a finger print, but also embarrassing noises
            you might want to mask in the bathroom. We felt inspired by
            “Accessories for the Paranoid”, a design project around gadgets that
            feed technology with random data to blur users' digital footprint
            <span className="footNote" onClick={executeScroll}>
              [4]
            </span>
            .
          </p>
          <div className="video169responsive">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nWRI4YQeGWw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p>
            We also had ideas around beautification, for example in interior
            design with speakers or fans that could be disguised as something
            more decorative. We talked about deep fakes and the disguising
            function of clothing; we discussed the idea that you might be more
            likely to gain entrance to a building when wearing a high visibility
            jacket like a construction worker. For our artefact analysis, we
            focused on objects we associated with camouflage or inversely with
            identification: military uniforms, balaclavas, ID cards and pens for
            handwriting.{" "}
          </p>
          {/* <div className="g1">
               
              </div> */}
          <div className="g1d1">
            <ZoomImage
              src="/images/ux/disguise1_1_1m.jpg"
              enlargedSrc="/images/ux/disguise1_1_1.jpg"
            />
            {/* <ZoomImage
                  src="/images/ux/disguise1_1_2m.jpg"
                  enlargedSrc="/images/ux/disguise1_1_2.jpg"
                /> */}
            <ZoomImage
              src="/images/ux/disguise1_1_3m.jpg"
              enlargedSrc="/images/ux/disguise1_1_3.jpg"
            />
          </div>
          <p>
            We then decided on two areas to focus on in parallel: the first was
            handwriting alteration. For this purpose, we experimented with
            altering pens so they were unstable, weighted unusually or harder to
            grip as ways of making personal handwriting unrecognisable. It was
            harder to write with some of these pen prototypes and the
            modification changed some characters, but we were unsure whether the
            effect was strong enough to make handwriting unidentifiable.
          </p>
          <div className="g11asym">
            <div className="g11asymImg1">
              <video controls className="uxVideo" width="848" height="480">
                <source
                  src="/images/ux/disguise1_2_2.mp4#t=0.001"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="g11asymImg2">
              <ZoomImage
                src="/images/ux/disguise1_2_1m.jpg"
                enlargedSrc="/images/ux/disguise1_2_1.jpg"
              />
            </div>
          </div>
          <div className="caption">
            Pen prototype testing, captured by Marty and Mansi
          </div>
          <p>
            The second idea was based on the problem of phone conversations in
            public transport or crowded spaces. To avoid strangers eavesdropping
            on private information or intimate conversation, we envisioned a
            sound-damping face mask with an integrated microphone and attached
            earphones. Further research confirmed that the frequency of around
            1-4 kHz is crucial for speech intelligibility
            <span className="footNote" onClick={executeScroll}>
              [5]
            </span>
            . Most consonants are pronounced in this area. Vowels on the other
            hand, the core tone of which is located somewhere between 100 and
            300 Hz, seem to play a less important role. To showcase the
            frequency allocation, we 3D printed a recorded spectrogram of the
            vowels A, E, I, O and U, inspired by an online 2D spectrogram
            visualizer we had found.
          </p>
          <div className="uxImgRowLeft">
            <div className="uxImg1">
              <ZoomImage
                src="/images/ux/disguise1_3_1s.jpg"
                enlargedSrc="/images/ux/disguise1_3_1.jpg"
              />
            </div>
            <div className="uxImg23">
              <div className="uxImg2">
                <ZoomImage
                  src="/images/ux/disguise1_3_2s.jpg"
                  enlargedSrc="/images/ux/disguise1_3_2.jpg"
                />
              </div>
              <div className="uxImg3">
                <video controls className="uxVideo" width="848" height="480">
                  <source
                    src="/images/ux/disguise1_3_3.mp4#t=0.001"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="caption">
            3D printed spectrogram of the five vowels showing higher volumes in
            the low frequencies. Right: experimentation with live spectogram
            captured by Wan
          </div>
          <audio controls>
            <source src="/images/ux/disguise2.mp3" type="audio/mpeg" />
          </audio>
          <div className="caption">
            Voices with high frequencies above 1 kHz cut away, hard to
            understand
          </div>
          <audio controls>
            <source src="/images/ux/disguise1.mp3" type="audio/mpeg" />
          </audio>
          <div className="caption">
            Voices with low frequencies below 1 kHz cut away, clearly
            intelligible
          </div>
          <p>
            In our first week presentation we then presented a quick cardboard
            prototype of a sound-damping mask (filled with mostly wool and other
            fabrics) as well as the pens described above.{" "}
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/disguise1_4_1m.jpg"
              enlargedSrc="/images/ux/disguise1_4_1.jpg"
            />
          </div>
          <h3>Week 2</h3>
          <p>
            Feedback from week 1 had favoured the mask idea; suggestions were to
            construct the mask so it would isolate the mouth area better and to
            play “noise-cancelling” sounds to counter the relevant frequencies.
            Students had rightfully noted that reception might be an issue when
            calling in the London Underground, which is located in depth half
            way to the Earth’s core. So in week 2 we decided to take the mask
            idea and refine it as much as possible, making it a luxury high-tech
            accessory with branding and packaging; then to present it in a sort
            of unveil keynote. This time we wanted to make sure the mask was
            well crafted, fit well and suppressed as much as possible of the
            crucial 1-4 kHz frequency range. Using Blender, Marty build two
            versions of the mask as 3D models: with an inner frame and outer
            shell, one covering nose and mouth and one covering only the mouth.
          </p>
          <div className="uxImgRowLeft">
            <div className="uxImg1">
              <ZoomImage
                src="/images/ux/disguise2_1_1s.jpg"
                enlargedSrc="/images/ux/disguise2_1_1.jpg"
              />
            </div>
            <div className="uxImg23">
              <div className="uxImg2">
                <ZoomImage
                  src="/images/ux/disguise2_1_2s.jpg"
                  enlargedSrc="/images/ux/disguise2_1_2.jpg"
                />
              </div>
              <div className="uxImg3">
                <ZoomImage
                  src="/images/ux/disguise2_1_3s.jpg"
                  enlargedSrc="/images/ux/disguise2_1_3.jpg"
                />
              </div>
            </div>
          </div>
          <div className="caption">Images by Marty</div>
          <p>
            We made full use of LCC’s 3D workshop: We printed the models again
            using the Ultimaker FDM 3D printers, glued foam from studio acoustic
            panels inside the masks and fixated outer fabric as finish. For
            headphones and microphone, we integrated a bought headset into the
            design, hiding the microphone inside the insulation. One version of
            the mask we kept in the tech-wear finish with the shiny PETG
            material reflecting in many small angled squares, one version we
            covered in more upscale-looking creased fabric and finished with
            golden buttons on the outside.
          </p>
          {/* <div className="g11">
                <video
                  className="uxVideo"
                  width="848"
                  height="480"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  loop
                >
                  <source src="/images/ux/disguise2_2_1.mp4" type="video/mp4" />
                </video>
                <ZoomImage
                  src="/images/ux/disguise2_2_2m.jpg"
                  enlargedSrc="/images/ux/disguise2_2_2.jpg"
                />
              </div> */}
          <div className="g11">
            <ZoomImage
              src="/images/ux/disguise2_2_3m.jpg"
              enlargedSrc="/images/ux/disguise2_2_3.jpg"
            />
            <ZoomImage
              src="/images/ux/disguise2_2_4m.jpg"
              enlargedSrc="/images/ux/disguise2_2_4.jpg"
            />
          </div>
          <p>
            We designed a quick branding for the mask and named it “Secreto”,
            then took product pictures with branded paper packaging. The product
            would be advertised as follows:
          </p>
          <p>
            <i>
              With this handmade designer mask, make your conversations
              exclusive and keep what is most valuable hidden from intrusive
              ears. Advanced sound blocking foam ensures breathable comfort and
              unparalleled privacy. A dynamic microphone will pick up words
              precisely and create a space of privacy amidst the crowd.
            </i>
          </p>
          <div className="g11asym">
            <div className="g11asymImg1">
              <ZoomImage
                src="/images/ux/disguise2_3_1m.jpg"
                enlargedSrc="/images/ux/disguise2_3_1.jpg"
              />
            </div>
            <div className="g11asymImg2">
              <ZoomImage
                src="/images/ux/disguise2_3_2m.jpg"
                enlargedSrc="/images/ux/disguise2_3_2.jpg"
              />
            </div>
          </div>
          <p>
            We also tested the sound-proofing effect in the real-world
            environment of a London bus. To our satisfaction the mask reliably
            muffled the voice while the microphone inside picked up clearly on
            the words. For presentation in front of the class, we sent one
            caller to another room, had one participant wear the mask while
            answering the call and let another participant try to pick out a
            secret word from the phone conversation. In the background we played
            a restaurant noise from speakers. The mask sufficiently dampened the
            voice to disguise the secret word from the guessing student.
          </p>
          <div className="g111">
            <video controls className="uxVideo" width="480" height="848">
              <source
                src="/images/ux/disguise2_4_1.mp4#t=0.001"
                type="video/mp4"
              />
            </video>
            <ZoomImage
              src="/images/ux/disguise2_4_2s.jpg"
              enlargedSrc="/images/ux/disguise2_4_2.jpg"
            />
            <ZoomImage
              src="/images/ux/disguise2_4_3s.jpg"
              enlargedSrc="/images/ux/disguise2_4_3.jpg"
            />
          </div>
          <div className="caption">Images by Mansi and Kimberly</div>
          <p>
            Feedback was positive and highlighted the high fidelity and
            craftsmanship of the prototype considering the short timeframe.
            While more background research could have been added and the
            application was still in the realm of speculation, the realisation
            was well done. I personally think the mask emphasizes the size of my
            nose a bit too much :)
          </p>
          <h3>Main Takeaways:</h3>
          <ul>
            <li>
              3D printing is easy and affordable on campus and represents a
              great opportunity for data visualisation and prototyping.
            </li>
            <li>
              Always have multiple presentation trial runs to make sure team
              coordination is on point and the pitch is within the time limit.
              Even though the demonstration was successful, it could have been
              executed a little smoother.
            </li>
            <li>Regular snacks skyrocket the team morale.</li>
          </ul>
          <div className="bottomNav">
            <Link to="/ux/projects/birdsong">
              <HiOutlineArrowLeft className="hiIcon" /> Previous brief
            </Link>
            <Link to="/ux/projects/outfit">
              Next brief <HiOutlineArrowRight className="hiIcon" />
            </Link>
          </div>
          <h3>References:</h3>
          <div className="bib" ref={bib}>
            <ol>
              <li>
                Stevens, M. and Merilaita, S. (2011) Animal camouflage:
                mechanisms and function. <i>Cambridge University Press</i>.
              </li>
              <li>
                Roussi, A. (2020) ‘Resisting the rise of facial recognition’,{" "}
                <i>Nature</i>, 587(7834), pp. 350–353. Available at:{" "}
                <a
                  href="https://www.nature.com/articles/d41586-020-03188-2"
                  target="_blank"
                >
                  https://www.nature.com/articles/d41586-020-03188-2
                </a>
              </li>
              <li>
                Nassif, A. B. et al. (2019) ‘Speech Recognition Using Deep
                Neural Networks: A Systematic Review’, <i>IEEE Access</i>, 7,
                pp. 19143–19165. doi:{" "}
                <a
                  href="https://doi.org/10.1109/ACCESS.2019.2896880"
                  target="_blank"
                >
                  10.1109/ACCESS.2019.2896880
                </a>
                .
              </li>
              <li>
                Hitti, N. (2019) “ Accessories for the Paranoid uses fake data
                to stop your devices spying on you,” <i>Dezeen</i>, 27 June.
                Available at:{" "}
                <a
                  href="https://www.dezeen.com/2019/06/27/accessories-for-the-paranoid-surveillance-design/"
                  target="_blank"
                >
                  https://www.dezeen.com/2019/06/27/accessories-for-the-paranoid-surveillance-design/
                </a>{" "}
                (Accessed: January 9, 2023).{" "}
              </li>
              <li>
                DPA Microphones (2021) Facts about speech intelligibility: Human
                voice frequency range, <i>DPA Microphones</i>, Available at:{" "}
                <a
                  href="https://www.dpamicrophones.com/mic-university/facts-about-speech-intelligibility"
                  target="_blank"
                >
                  https://www.dpamicrophones.com/mic-university/facts-about-speech-intelligibility
                </a>{" "}
                (Accessed: January 8, 2023).
              </li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Disguise;
