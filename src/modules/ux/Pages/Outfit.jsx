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

function Outfit() {
  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  return (
    <div className="uxContent">
      <div className="uxStickyTitle">
        <h2>Survival of the Outfit</h2>
      </div>
      <div className="g1">
        <ZoomImage
          src="/images/ux/outfit_bm.jpg"
          enlargedSrc="/images/ux/outfit_b.jpg"
        />
      </div>
      <div className="uxText">
        <div className="uxOverview">
          <div className="uxSmallTitle">Brief</div>
          <p>
            Design and make a{" "}
            <span className="uxHighlight">
              garment for surviving social breakdown
            </span>
            , using recycled or found materials.
          </p>
          <div className="uxSmallTitle">Designers</div>
          <p>
            Changlin Hou (Charlie), Mengdie Lu,{" "}
            <a
              href="https://ruoxisong.notion.site/e70dcbaf72034826b5b1e2642070d3ea?v=73aac37695504375bbea3110257dea77 "
              target="_blank"
            >
              Ruoxi Song
            </a>{" "}
            (Roxy),{" "}
            <a
              href="https://tanyadoesux.notion.site/tanyadoesux/Tanya-s-MA-UX-Blog-ffd599cf66584f3f980a0891704ab049"
              target="_blank"
            >
              Tanya Singh
            </a>
            , Jakob Prüfer
          </p>
          <div className="uxSmallTitle">Dates</div>
          <p>16-20/12/2023</p>
        </div>
        <main className="uxMain">
          <h3>Process</h3>
          <p>
            Our guest for the week, Clare Farrell (fashion designer, activist
            and co-founder of{" "}
            <a href="https://extinctionrebellion.uk/" target="_blank">
              Extinction Rebellion
            </a>
            ) opened the project with a captivating talk about the looming
            climate catastrophe and how humanity for the most part turns a blind
            eye and continues full steam. She frequently used the phrase
            “criminal damage” that could be done in public spaces and buildings
            to raise awareness. This was the first time I had thought about the
            challenge of mass migration caused by rising ocean levels and the
            resulting cultural tensions that will happen on an unprecedented
            scale. For about two hours I was in a high alert state, fully
            realizing the irreversibility of climate change, before falling back
            into my everyday nonchalance.{" "}
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/outfit1_1m.jpg"
              enlargedSrc="/images/ux/outfit1_1.jpg"
            />
          </div>
          <p>
            We were briefly introduced by Clare to the fundamentals of pattern
            cutting in fashion and challenged to quickly generate outfit ideas
            in the form of 8 sketches in 8 minutes. We discussed two initial
            ideas in our group. One was a garment with an attached notepad and
            letterbox to resolve conflict by giving anonymous feedback. The
            second idea featured sewn-in NFC tags that would transmit personal
            information or baby pictures of the wearer to enable others to
            quickly connect emotionally with strangers - say refugees.
          </p>
          <div className="uxImgRowLeft">
            <div className="uxImg1">
              <ZoomImage
                src="/images/ux/outfit2_1s.jpg"
                enlargedSrc="/images/ux/outfit2_1.jpg"
              />
            </div>
            <div className="uxImg23">
              <div className="uxImg2">
                <ZoomImage
                  src="/images/ux/outfit2_2s.jpg"
                  enlargedSrc="/images/ux/outfit2_2.jpg"
                />
              </div>
              <div className="uxImg3">
                <ZoomImage
                  src="/images/ux/outfit2_3s.jpg"
                  enlargedSrc="/images/ux/outfit2_3.jpg"
                />
              </div>
            </div>
          </div>
          <div className="caption">Pattern cutting and first sketches</div>
          <p>
            Charlie then offered another idea we decided to stick with – a
            jacket surrounded by tubes that enabled people to share fluids with
            each other. Inspired by the camel that stores rich fat in their
            humps to survive long periods without food or water
            <span className="footNote" onClick={executeScroll}>
              [1]
            </span>
            , we wanted to store the fluid in a sort of hump on the wearer’s
            back. Initially we thought of just water. Water resources are
            already unsafe and distributed unequally in many parts of the world
            <span className="footNote" onClick={executeScroll}>
              [2]
            </span>{" "}
            and the drinking water quality and availability will be impacted
            negatively by climate change
            <span className="footNote" onClick={executeScroll}>
              [3]
            </span>
            . Because it is hard to carry vast amounts of water, we later
            changed to the concept of a more condensed liquid carrying important
            nutrients and electrolytes. This liquid would be transferred from
            the ”giver” to the receiving person with a IV infusion in our
            fashion show performance.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/outfit3_1s.jpg"
              enlargedSrc="/images/ux/outfit3_1.jpg"
            />
            <ZoomImage
              src="/images/ux/outfit3_2s.jpg"
              enlargedSrc="/images/ux/outfit3_2.jpg"
            />
          </div>
          <div className="caption">Sketches by Charlie</div>
          <p>
            To realise the design, we built a backpack of sorts with foam and
            rubber mantle and attached it to a custom-tailored rain cape. Into
            the backpack we fitted a watering can connected to plastic tubes.
            The fluid-receiving person had a corresponding rain jacket with more
            tubes attached and a hidden plastic bag at the sleeve to receive the
            “IV”. It took quite a while for us to figure out how to get
            sufficient flow from the can so it ran all the way through the tube.
            We sealed the system with a dizzying amount of duct tape and used a
            pen cap as a flow stopper. At times I was wondering – why are we
            doing this kind of DIY work if none of us are skilled in nor
            inclined to work in fashion? To simulate our “elixir of life”, we
            tinted water with blue colour, which also achieved a nice visual
            effect of the blue liquid progressing through the transparent tubes.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/outfit4_1s.jpg"
              enlargedSrc="/images/ux/outfit4_1.jpg"
            />
            <ZoomImage
              src="/images/ux/outfit4_2s.jpg"
              enlargedSrc="/images/ux/outfit4_2.jpg"
            />
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/outfit4_3m.jpg"
              enlargedSrc="/images/ux/outfit4_3.jpg"
            />
            <ZoomImage
              src="/images/ux/outfit4_4m.jpg"
              enlargedSrc="/images/ux/outfit4_4.jpg"
            />
          </div>
          <div className="caption">Making the outfit</div>
          <div className="g1">
            <video controls className="uxVideo" width="1280" height="720" muted>
              <source src="/images/ux/outfit4_5.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
          <div className="caption">Our "elixir of life"</div>
          <p>
            Feedback for the performance was generally positive. The course team
            deemed the design relatively simplistic. I thought this might be
            because the inner workings and the time we had spent testing it was
            not immediately obvious. People generally liked the dark and
            technical finish of the outfits and the aesthetic of the plastic
            tubes.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/outfit5_1m.jpg"
              enlargedSrc="/images/ux/outfit5_1.jpg"
            />
          </div>
          <div className="bottomNav">
            <Link to="/ux/projects/disguise">
              <HiOutlineArrowLeft className="hiIcon" /> Previous brief
            </Link>
            <Link to="/ux/projects/psychogeography">
              Next brief <HiOutlineArrowRight className="hiIcon" />
            </Link>
          </div>
          <h3>References:</h3>
          <div className="bib" ref={bib}>
            <ol>
              <li>
                Gonzalez, N. (2017) “Do camels store water in their humps?”,
                britannica.com. <i>Encyclopædia Britannica</i>. Available at:{" "}
                <a
                  href="https://www.britannica.com/story/do-camels-store-water-in-their-humps"
                  target="_blank"
                >
                  https://www.britannica.com/story/do-camels-store-water-in-their-humps
                </a>
                (Accessed: February 1, 2023).
              </li>
              <li>
                Truelove, Y. (2019) ‘Rethinking water insecurity, inequality and
                infrastructure through an embodied urban political ecology’,
                <i>WIREs Water</i>, 6(3), p. e1342. doi:{" "}
                <a href="https://doi.org/10.1002/wat2.1342" target="_blank">
                  10.1002/wat2.1342
                </a>
                .
              </li>
              <li>
                Delpla, I. et al. (2009) ‘Impacts of climate change on surface
                water quality in relation to drinking water production’,
                <i>Environment International</i>, 35(8), pp. 1225–1233. doi:{" "}
                <a
                  href="https://doi.org/10.1016/j.envint.2009.07.001"
                  target="_blank"
                >
                  10.1016/j.envint.2009.07.001
                </a>
                .
              </li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}

Outfit.propTypes = {};

export default Outfit;
