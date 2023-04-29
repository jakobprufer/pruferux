import React, { useRef } from "react";
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

function Birdsong() {
  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  return (
    <div className="uxContent">
      <div className="uxStickyTitle">
        <h2>UX of Birdsong</h2>
      </div>
      <div className="g1">
        <ZoomImage
          src="/images/ux/birdsong_bm.jpg"
          enlargedSrc="/images/ux/birdsong_b.jpg"
        />
      </div>
      <div className="uxText">
        <div className="uxOverview">
          <div className="uxSmallTitle">Brief</div>
          <p>
            Design an <span className="uxHighlight">urban birdsong</span>{" "}
            experience.
          </p>
          <div className="uxSmallTitle">Research Methods</div>
          <p>
            Digital{" "}
            <a
              href="https://www.researchgate.net/publication/38303920_Soundwalking_as_a_methodology_for_understanding_soundscapes"
              target="_blank"
            >
              Soundwalking
            </a>
            ,{" "}
            <a
              href="https://www.sciencedirect.com/topics/engineering/physical-prototyping#:~:text=1.2%20Physical%20verification-,Physical%20prototyping%20and%20testing%20is%20a%20common%20approach%20in%20industrial,mechanical%20and%20flow%2Drelated%20testing."
              target="_blank"
            >
              Physical Prototyping
            </a>
          </p>
          <div className="uxSmallTitle">Designers</div>
          <p>
            <a href="https://montanaricarlotta.com/" target="_blank">
              Carlotta Montanari
            </a>
            ,{" "}
            <a
              href="https://lfang1220211.wixsite.com/lingjia-fang"
              target="_blank"
            >
              Lingjia Fang
            </a>
            ,{" "}
            <a href="https://www.rebeccahodge.co.uk/blog" target="_blank">
              Rebecca Hodge
            </a>
            , Roshni Suri, Jakob Prüfer
          </p>
          <div className="uxSmallTitle">Dates</div>
          <p>10-24/11/2022</p>
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
            We very much understand the world visually, especially when it comes
            to design. We use the word imagination, derived from the “image”,
            even when what we imagine are sounds. All the more inviting was the
            challenge to design around sound, specifically birdsong in an urban
            environment. Unlike most animals, birds use identical sounds in
            patterns like we do with our human phonology - even though the
            sounds don’t seem to carry the same depth of meaning
            <span className="footNote" onClick={executeScroll}>
              [2]
            </span>
            . Birdsong has served as inspiration for various classical composers{" "}
            <span className="footNote" onClick={executeScroll}>
              [3]
            </span>{" "}
            and can contribute to improved mood and mental health
            <span className="footNote" onClick={executeScroll}>
              [4]
            </span>{" "}
            – which I can affirm from personal experience, excluding the
            sunrise-announcing birdsong that haunts me when I try to fall asleep
            after a night of dancing.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/birdsong1_0_1m.jpg"
              enlargedSrc="/images/ux/birdsong1_0_1.jpg"
            />
          </div>
          <div className="caption">
            Paul Klee,{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Paul_Klee_-_Vogelgarten_-_15251_-_Bavarian_State_Painting_Collections.jpg"
              target="_blank"
            >
              Vogelgarten
            </a>
          </div>
          <div className="video169responsive">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CXcAx16yl6E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="caption">20 common birds and their songs</div>
          <p>
            We decided to conduct our soundwalking research separately in
            different areas of London, including central Knightsbridge and South
            Bank as well as leafy Sydenham. A{" "}
            <a
              href="https://www.researchgate.net/publication/38303920_Soundwalking_as_a_methodology_for_understanding_soundscapes"
              target="_blank"
            >
              soundwalk
            </a>{" "}
            is a walk with focus on the sonic environment. I did mine in Forest
            Hill and Catford at around 5pm in early winter darkness. The air had
            a stale quality, lacking altogether the freshness of an evening
            breeze, and a muffling mist had settled over the hills, blurring the
            distant skyscrapers, and damping the soundscape. Only twice I heard
            birds, in two different parks I crossed, but calling from an
            indiscernible location and quieting as I tried to walk towards the
            source. Both times it seemed to be the same species, screeching in a
            short high-pitched tone. I heard various birds of the mechanical
            kind – with planes crossing over towards Heathrow in intervals of
            less than 30 seconds - as well as distant police sirens and dog
            barking, cars, trains, people talking and laughing. My favourite
            moment was standing in a tucked-away, pitch-black meadow in Ladywell
            Fields - with all this London soundscape still audible but at the
            same time hidden away from sight.{" "}
          </p>
          <div className="g111">
            <ZoomImage
              src="/images/ux/birdsong1_1_3m.jpg"
              enlargedSrc="/images/ux/birdsong1_1_3.jpg"
            />
            <ZoomImage
              src="/images/ux/birdsong1_1_1m.jpg"
              enlargedSrc="/images/ux/birdsong1_1_1.jpg"
            />
            <ZoomImage
              src="/images/ux/birdsong1_1_2m.jpg"
              enlargedSrc="/images/ux/birdsong1_1_2.jpg"
            />
          </div>
          <div className="caption">
            Gulls on South Bank by Roshni, some of our ssoundwalk routes and
            resulting themes
          </div>
          <p>
            From our collective recordings and notes of the soundwalks we
            identified common themes. An observation that stood out to all of us
            were the many layers of sound, most of them urban noises. The
            birdsong was routinely hidden beneath them, only noticed when
            listening intentionally. From this notion came our first prototype:
            a sound “sandwich”, made from layers of different materials
            representing natural and urban sounds. To further develop this idea
            of representing sound in a physical form, we then listened to the
            recordings individually and drew on paper what came to our head.
            Curiously, our sketches were very similar for individual bird
            species. We used sharp quick lines for screechy sounds and dainty,
            squiggly lines for melodic singsong. Most of us used notation in
            lines from left to right reminiscent of traditional musical
            notation. Following advice from our tutorial, we tried to bring
            these shapes into 3D form using materials such as toothpicks,
            fabric, wire and paper.
          </p>
          <audio controls>
            <source src="/images/ux/birdsong1.mp3" type="audio/mpeg" />
          </audio>
          <audio controls>
            <source src="/images/ux/birdsong2.mp3" type="audio/mpeg" />
          </audio>
          <audio controls>
            <source src="/images/ux/birdsong3.mp3" type="audio/mpeg" />
          </audio>
          <div className="caption">
            Recordings from Rebecca's Soundwalk - try to guess which are the
            corrisponding shapes in the sketches below
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/birdsong1_2_1m.jpg"
              enlargedSrc="/images/ux/birdsong1_2_1.jpg"
            />
            <ZoomImage
              src="/images/ux/birdsong1_2_2m.jpg"
              enlargedSrc="/images/ux/birdsong1_2_2.jpg"
            />
          </div>
          <div className="caption">
            Sketches and 3d visualisations for the birdsong
          </div>
          <p>
            Our week one physical prototype then became a 3d map of our
            soundwalk. We roughly recreated the South Bank area in a
            grey-painted cardboard model and placed sound representations like
            mentioned above in places where we had heard them. This included
            urban sounds such as a police siren and crowd chatter as well as
            birdsong. I our presentation, we got one participant to listen to
            recordings we had made an identify the corresponding sound
            representation on our map, which they did with surprising accuracy.
            Nonetheless, feedback was mostly critical. The model was too low in
            fidelity, the top down view didn’t represent a very vivid experience
            and the birdsong was not pronounced enough.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/birdsong1_3_1m.jpg"
              enlargedSrc="/images/ux/birdsong1_3_1.jpg"
            />
          </div>
          <h3>Week 2</h3>
          <p>
            After we were all a bit disappointed with the first week feedback,
            the pressure was on to step it up in week 2. We thought about the
            relationship of birdsong and time of day, as we mostly associated
            birdsong with sunrise and sunset times. This coincided with our
            observations in the soundwalk analysis. One idea was to create a
            sunrise alarm clock that included birdsong. Following further
            literature review, we then decided to focus on birdsong in
            connection to urban light pollution. Birds rely on light as cue for
            their activity and singing patterns
            <span className="footNote" onClick={executeScroll}>
              [5]
            </span>
            . Artificial light at night makes birds sing earlier both in dusk
            and dawn than they would naturally
            <span className="footNote" onClick={executeScroll}>
              [6]
            </span>
            . It negatively affects their melatonin levels
            <span className="footNote" onClick={executeScroll}>
              [7]
            </span>
            , leading to irregularities in their inner body clock and disrupted
            sleep
            <span className="footNote" onClick={executeScroll}>
              [8]
            </span>
            . Other negative effects of artificial light include disorientation
            of migrating birds
            <span className="footNote" onClick={executeScroll}>
              [6]
            </span>
            , worsened stress response and impaired immune function
            <span className="footNote" onClick={executeScroll}>
              [9]
            </span>
            . These findings added a new purpose that we could incorporate in
            the design if we were able to raise awareness for the issue.
          </p>
          <div className="g111">
            <ZoomImage
              src="/images/ux/birdsong2_1_1m.jpg"
              enlargedSrc="/images/ux/birdsong2_1_1.jpg"
            />
            <ZoomImage
              src="/images/ux/birdsong2_1_2m.jpg"
              enlargedSrc="/images/ux/birdsong2_1_2.jpg"
            />
            <ZoomImage
              src="/images/ux/birdsong2_1_3m.jpg"
              enlargedSrc="/images/ux/birdsong2_1_3.jpg"
            />
          </div>
          <p>
            We had a small breakthrough when we connected with the Creative
            Technology Lab on campus and found out how to use a light sensor
            with the Arduino microcontroller board to trigger an output.
            Combining good bits from our previous ideas, we settled on the
            concept of an augmented bird nest that would play sounds based on
            light shun on it. We built the nest using twigs from a neighbouring
            park and reinforced it with wire. We then placed the sensor and
            microcontroller in the middle of the nest covered by more twigs; via
            a USB cable, we could now trigger any parameter in our music
            software, Ableton Live. At different levels of light, low pass
            filters would open to make more and more birds audible - climaxing
            in a full choir of reverbed birdsong and loud screeching. The light
            sensor also controlled a white noise synthesizer, making the pitch
            higher with more light and adding a slightly threatening tone to the
            installation.{" "}
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/birdsong2_2_3m.jpg"
              enlargedSrc="/images/ux/birdsong2_2_3.jpg"
            />
            <video controls className="uxVideo" width="720" height="1280">
              <source src="/images/ux/birdsong1.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <div className="g1">
            <video controls className="uxVideo" width="1920" height="1080">
              <source src="/images/ux/birdsong2.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <div className="caption">
            Trial runs with our birdsong installation
          </div>
          <p>
            We dimmed the room for presentation, setting the scene for the nest
            in a in a city night-time setting. Participants were given a
            flashlight and instructed to examine the nest. The experience of
            surprise and interactivity with the light-reactive sound worked very
            well. In addition to the eerie sound sphere that was triggered, the
            twigs of the nest also created a network of shadows that wandered
            around the darkened room with every move of the flashlight. Feedback
            was positive; one observation was that the nest could work well in a
            natural history museum. Suggestions for improvement included better
            disguise of the technology (we had set up our laptop next to the
            nest instead of hiding it) and the introduction of birds sounding
            like they were in pain at maximum brightness to amplify the light
            pollution message.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/birdsong2_3_1m.jpg"
              enlargedSrc="/images/ux/birdsong2_3_1.jpg"
            />
          </div>
          <h3>Main Takeaways:</h3>
          <ul>
            <li>
              Arduino boards are relatively easy to set up and can be used with
              various types of sensors to create interactive installations.
              Various outputs can be triggered and the integration in Ableton
              Live for sound is amazing thanks to a dedicated Max for Live
              device.
            </li>
          </ul>
          <div className="bottomNav">
            <Link to="/projects/hair">
              <HiOutlineArrowLeft className="hiIcon" /> Previous brief
            </Link>
            <Link to="/projects/disguise">
              Next brief <HiOutlineArrowRight className="hiIcon" />
            </Link>
          </div>
          <h3>References</h3>
          <div className="bib" ref={bib}>
            <ol>
              <li>
                Oliveros, P. (2011) “Auralizing in the Sonosphere: A vocabulary
                for inner sound and sounding,” <i>Journal of Visual Culture</i>,
                10(2), pp. 162–168. Available at:{" "}
                <a
                  href="https://doi.org/10.1177/1470412911402881"
                  target="_blank"
                >
                  https://doi.org/10.1177/1470412911402881
                </a>
                .{" "}
              </li>
              <li>
                Collier, K. et al. (2014) “Language evolution: Syntax before
                phonology?,”{" "}
                <i>Proceedings of the Royal Society B: Biological Sciences</i>,
                281(1788), p. 20140263. Available at:{" "}
                <a
                  href="https://doi.org/10.1098/rspb.2014.0263"
                  target="_blank"
                >
                  https://doi.org/10.1098/rspb.2014.0263
                </a>
                .
              </li>
              <li>
                Pentreath, R. (2021) 13 pieces of classical music inspired by
                birdsong, <i>Classic FM</i>. Available at:{" "}
                <a
                  href="https://www.classicfm.com/discover-music/classical-music-inspired-by-birdsong/"
                  target="_blank"
                >
                  https://www.classicfm.com/discover-music/classical-music-inspired-by-birdsong/
                </a>{" "}
                (Accessed: January 7, 2023).{" "}
              </li>
              <li>
                David, B. (2022) “Bird and birdsong encounters improve mental
                health, study finds” <i>Guardian</i>, 27 October. Available at:{" "}
                <a
                  href="https://www.theguardian.com/environment/2022/oct/27/bird-birdsong-encounters-improve-mental-health-study"
                  target="_blank"
                >
                  https://www.theguardian.com/environment/
                  <br />
                  2022 /oct/27/
                  bird-birdsong-encounters-improve-mental-health-study
                </a>{" "}
                (Accessed: January 7, 2023).{" "}
              </li>
              <li>
                Da Silva, A. and Kempenaers, B. (2017) “Singing from north to
                south: Latitudinal variation in timing of dawn singing under
                natural and artificial light conditions,”{" "}
                <i>Journal of Animal Ecology</i>, 86(6), pp. 1286–1297.
                Available at:{" "}
                <a
                  href="https://doi.org/10.1111/1365-2656.12739"
                  target="_blank"
                >
                  https://doi.org/10.1111/1365-2656.12739
                </a>
                .{" "}
              </li>
              <li>
                Artificial night lighting causes birds to sing earlier (2015).{" "}
                <i>Max-Planck-Gesellschaft</i>. Available at:{" "}
                <a
                  href="https://www.mpg.de/9043097/light-pollution-songbirds"
                  target="_blank"
                >
                  https://www.mpg.de/9043097/light-pollution-songbirds
                </a>
                . (Accessed: January 7, 2023).{" "}
              </li>
              <li>
                de Jong, M. et al. (2016) ‘Dose-dependent responses of avian
                daily rhythms to artificial light at night’,{" "}
                <i>Physiology & Behavior</i>, 155, pp. 172–179. doi:{" "}
                <a
                  href="https://doi.org/10.1016/j.physbeh.2015.12.012"
                  target="_blank"
                >
                  10.1016/j.physbeh.2015.12.012
                </a>
              </li>
              <li>
                Aulsebrook, A. E. et al. (2020) ‘White and Amber Light at Night
                Disrupt Sleep Physiology in Birds’, <i>Current Biology</i>,
                30(18), pp. 3657-3663.e5. doi:{" "}
                <a
                  href="https://doi.org/10.1016/j.cub.2020.06.085"
                  target="_blank"
                >
                  10.1016/j.cub.2020.06.085
                </a>
                .
              </li>
              <li>
                Ulgezen, Z.N. et al. (2019) “The preference and costs of
                sleeping under light at night in Forest and urban great tits,”{" "}
                <i>Proceedings of the Royal Society B: Biological Sciences</i>,
                286(1905), p. 20190872. Available at:{" "}
                <a
                  href="https://doi.org/10.1098/rspb.2019.0872"
                  target="_blank"
                >
                  https://doi.org/10.1098/rspb.2019.0872
                </a>
                .{" "}
              </li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}

Birdsong.propTypes = {};

export default Birdsong;
