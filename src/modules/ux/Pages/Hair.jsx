import React, { useState, useRef } from "react";
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

function Hair() {
  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  return (
    <div className="uxContent">
      <div className="uxStickyTitle">
        <h2>UX of Hair</h2>
      </div>
      <div className="uxBeautyContainer">
        <ZoomImage
          src="/images/ux/hair_bm.jpg"
          enlargedSrc="/images/ux/hair_btemp.jpg"
        />
      </div>
      <div className="uxText">
        <div className="uxOverview">
          <div className="uxSmallTitle">Brief</div>
          <p>
            Design a way to <span className="uxHighlight">intensify</span> how
            we experience human hair.
          </p>
          <div className="uxSmallTitle">Research Methods</div>
          <p>
            <a
              href="https://think.design/user-design-research/bodystorming/"
              target="_blank"
            >
              Bodystorming
            </a>
            ,{" "}
            <a
              href="http://www.servicedesignkit.org/techniques/details?tn_id=23"
              target="_blank"
            >
              Directed Storytelling
            </a>
          </p>
          <div className="uxSmallTitle">Designers</div>
          <p>
            <a href="https://medium.com/@KEYICAO" target="_blank">
              Keyi Cao
            </a>
            ,{" "}
            <a
              href="https://readymag.com/u561240559/MansiMAUX/"
              target="_blank"
            >
              Mansi Chottani
            </a>
            ,{" "}
            <a href="https://stofmohbek.wixsite.com/mbekkaoui" target="_blank">
              Mohammed Bekkaoui
            </a>{" "}
            (Beck), Yanxu Chen, Jakob Prüfer
          </p>
          <div className="uxSmallTitle">Dates</div>
          <p>27/10-10/11/2022</p>
        </div>
        <main className="uxMain">
          <h3>Week 1</h3>
          <p>
            I do appreciate the confidence boost of a new haircut, a fresh skin
            fade usually makes me quite smug and selfie-ready. In this project
            however I became fully aware that there can be a lot deeper meaning
            and sentiment connected to hair. In the first bodystorming with the
            entire class for instance, we were instructed to think about body
            areas where hair might be connected to shame. For Yanxu and Keyi, it
            turned out in our first group discussion, hair is immediately
            associated with intimacy and privacy. A touch of a lover can be
            indefinitely close and pleasant; a touch of a stranger can feel like
            harsh intrusion. These were things I had never really thought about
            in depth.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/hair1_1_1m.png"
              enlargedSrc="/images/ux/hair1_1_1.png"
            />
          </div>
          <div className="g11asym">
            <div className="g11asymImg1">
              <ZoomImage
                src="/images/ux/hair1_1_2m.jpg"
                enlargedSrc="/images/ux/hair1_1_2.jpg"
              />
            </div>
            <div className="g11asymImg2">
              <ZoomImage
                src="/images/ux/hair1_1_3m.png"
                enlargedSrc="/images/ux/hair1_1_3.png"
              />
            </div>
          </div>
          <div className="caption">
            Documentation of the directed story telling research (top and right
            by Yanxu)
          </div>
          <p>
            We decided to explore these possible topics more with the directed
            storytelling method, each asking friends or family members about
            moments relating to their hair, guiding them through record a
            detailed account. Questions included “Tell a story about a time that
            you liked your hair”, “How do you feel if a stranger touches your
            hair?” and “How do you think your hair contribute to your
            identity?”. Interviewing a friend with afro hair, I was impressed
            with how much time and consideration needs to go into its proper
            care, but also how much pride is connected to hair styles such as
            dread locks, twists and braids that are specific to afro-textured
            hair. Hair types can be a cause for discrimination{" "}
            <span className="footNote" onClick={executeScroll}>
              [1]
            </span>
            , but also a source of pride and belonging as shown in the short
            film Hair Love{" "}
            <span className="footNote" onClick={executeScroll}>
              [2]
            </span>{" "}
            (see below) . Again I found that a lot had slipped under my radar
            previously. Aggregating and analysing our directed storytelling
            records, we found some common themes. Hair’s identity signalling
            function, pride and shame connected to it, but also practical
            considerations (hair being out of the way and easy to groom) were
            frequently mentioned. Another theme that emerged was hair as a
            protection from the elements, which is indeed one of its main
            functions{" "}
            <span className="footNote" onClick={executeScroll}>
              [3]
            </span>
            , but also perceived protection from the outside world.
          </p>
          <div className="video169responsive">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kNw8V_Fkw28"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="caption">Short film "Hair Love"</div>
          <div className="uxImgRowLeft">
            <div className="uxImg1">
              <ZoomImage
                src="/images/ux/hair1_2_1m.jpg"
                enlargedSrc="/images/ux/hair1_2_1.jpg"
              />
            </div>
            <div className="uxImg23">
              <div className="uxImg2">
                <ZoomImage
                  src="/images/ux/hair1_2_2s.jpg"
                  enlargedSrc="/images/ux/hair1_2_2.jpg"
                />
              </div>
            </div>
          </div>
          <div className="caption">Images by Keyi</div>
          <p>
            For our first week design, we decided to settle on the identity
            signalling function of hair. We experimented with a wig and styled
            it differently to see how hair affects recognisability. Our final
            outcome was a short video clip inspired by the Pokémon series and
            animated by Beck. It challenged classmates to identify fellow
            students by the silhouette of their hair only. Feedback was mixed.
            While most found the concept amusing, advice was to escalate the
            idea further. Maybe we could use projections to map hair styles to
            someone’s face? Maybe we could find ways to make the game more
            competitive and use other parts of the hair such as eyebrows? It was
            also noted that we only used boys; it had seemed harder to
            differentiate the girls’ hairstyles by silhouette alone. All in all
            the design remained pretty surface-level.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/hair1_3_1m.jpg"
              enlargedSrc="/images/ux/hair1_3_1.jpg"
            />
            <ZoomImage
              src="/images/ux/hair1_3_2m.jpg"
              enlargedSrc="/images/ux/hair1_3_2.jpg"
            />
          </div>
          <div className="g1">
            <video controls className="uxVideo" width="1920" height="1080">
              <source src="/images/ux/hair1_3_3.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <div className="caption">
            Final presentation and animation by Beck
          </div>
          <p>
            Unsure of how to advance the week 1 design, we thought about
            possible other directions to take the project in. We discussed
            another week 1 idea that included tying helium-filled balloons to
            participant’s hair, making it stand up in the air. While this image
            seemed visually appealing, we didn’t manage to substantially connect
            it with our research. The same was the case with a new idea:
            Referencing the protecting function of hair, I envisioned a sort of
            iron framework with fake hair that would surround the participant’s
            head. Hair dryers would then be attached at the sides and the
            subject would “vanish” in a sort of bubble of waving hair and static
            noise. I imagined this experience as amazingly intimate, but
            abandoned the idea lacking justification. We also experimented with
            projection of hair as a way to upgrade our week 1 guessing game, but
            testing showed the effect was not as good as we had hoped and a lot
            of expertise would be required to map the projection accurately to a
            participant.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/hair2_1_1m.jpg"
              enlargedSrc="/images/ux/hair2_1_1.jpg"
            />
            <ZoomImage
              src="/images/ux/hair2_1_2m.jpg"
              enlargedSrc="/images/ux/hair2_1_2.jpg"
            />
          </div>
          <div className="g1">
            <ZoomImage
              src="/images/ux/hair2_1_3m.jpg"
              enlargedSrc="/images/ux/hair2_1_3.jpg"
            />
          </div>
          <div className="caption">
            Experimentation with projection (pictures by Mansi) and blow dryer
            concept
          </div>
          <div className="g1">
            <video controls className="uxVideo" width="1920" height="1080">
              <source src="/images/ux/hair2_1_4.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <div className="caption">Bodystorming</div>
          <p>
            We decided to redo the bodystorming research more thoroughly. One
            thing we noticed in the process was how differently we registered
            touch on our hair. While the girls with long hair did not register
            even a tight squeeze of their hair tips, I could feel every slight
            touch on my hair due to the close proximity to my scalp. It also
            became very clear that some of us were more comfortable with being
            touched than others and the relationship with the other person
            mattered. This brought us back to our original notion of hair touch
            and intimacy. We developed the plan to use a touch-sensitive wire in
            the participants hair to trigger a sound and video, our way to
            intensify the sensation. We considered various properties of the
            touch that could be linked to the level of intimacy and decided for
            technical reasons to go with the length of the touch. Beck developed
            three animations representing the touch of a lover, of a friend, and
            the very brief, maybe accidental and uncomfortable touch of a
            stranger. I created corresponding sounds for each animation, while
            Keyi, Mansi and Yanxu worked on setting up the wire with a
            microcontroller board to trigger the video through a Python script.
            Because of London Underground industrial action, this week’s
            presentation was moved online. Find below videos of our final trial
            runs with the three levels of intimacy in the touch.
          </p>
          <div className="g111">
            <video controls className="uxVideo" width="480" height="848">
              <source src="/images/ux/hair2_2_1.mp4#t=0.001" type="video/mp4" />
            </video>
            <video controls className="uxVideo" width="480" height="848">
              <source src="/images/ux/hair2_2_2.mp4#t=0.001" type="video/mp4" />
            </video>
            <video controls className="uxVideo" width="480" height="848">
              <source src="/images/ux/hair2_2_3.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <div className="caption">
            From left to right: videos and sounds for touch of a lover, a friend
            and a stranger (by Mansi)
          </div>
          <p>
            Again, feedback was mixed. It was remarked that a stranger’s touch
            is not always uncomfortable on the hair, for example if a
            hairdresser does it; that the visuals and sounds were too
            unspecific, as feelings of love or friendship could be experienced
            very differently from person to person. Generally, as in week one we
            lacked a strong justification for our design choices. Some students
            saw potential in the prototype to be developed further into an
            augmented wearable or an opportunity to enrich non-verbal
            communication.
          </p>
          <h3>Main Takeaways:</h3>
          <ul>
            <li>
              “Let’s make a prototype, see what’s up” – Beck. This had been said
              before, but I really felt it this week. You can only think and
              talk about an idea so much without starting to build it. Many
              important considerations and issues only become clear then.
            </li>
            <li>
              To research your design area, you have to go out and talk to
              experts or people that interact with the object/subject a lot.
              Don’t rely on you own assumptions and consider that other people
              might relate a lot more emotionally with the matter.
            </li>
          </ul>
          <div className="bottomNav">
            <Link to="/ux/projects/mould">
              <HiOutlineArrowLeft className="hiIcon" /> Previous brief
            </Link>
            <Link to="/ux/projects/birdsong">
              Next brief <HiOutlineArrowRight className="hiIcon" />
            </Link>
          </div>
          <h3>References:</h3>
          <div className="bib" ref={bib}>
            <ol>
              <li>
                Onnie Rogers, L., Versey, H.S. and Cielto, J. (2022) “‘they’re
                always gonna notice my natural hair’: Identity,
                intersectionality and resistance among black girls.,”
                <i>Qualitative Psychology</i>, 9(3), pp. 211–231. Available at:{" "}
                <a href="https://doi.org/10.1037/qup0000208" target="_blank">
                  https://doi.org/10.1037/qup0000208
                </a>
                .
              </li>
              <li>
                Cherry, M. (2019) Hair Love. <i>Sony Pictures</i>. Available at:{" "}
                <a
                  href="https://www.youtube.com/watch?v=kNw8V_Fkw28"
                  target="_blank"
                >
                  https://www.youtube.com/watch?v=kNw8V_Fkw28
                </a>
                (Accessed: December 28, 2022).
              </li>
              <li>
                Erdoğan, B., 2017, ‘Anatomy and Physiology of Hair’, in Z.
                Kutlubay, S. Serdaroglu (eds.), Hair and Scalp Disorders,
                <i>IntechOpen</i>, London. 10.5772/67269.{" "}
                <a
                  href="https://www.intechopen.com/chapters/53880"
                  target="_blank"
                >
                  https://www.intechopen.com/chapters/53880
                </a>
              </li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hair;
