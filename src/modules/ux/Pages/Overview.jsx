import React, {  useRef } from "react";
import { Link } from "react-router-dom";

function Overview(props) {
  const mouldPost = useRef();
  const disguisePost = useRef();
  const disguisePost1 = useRef();
  const birdsongPost = useRef();
  const birdsongPost1 = useRef();
  const sensesPost = useRef();
  const hairPost = useRef();

  return (
    <div className="uxContent">
      <div className="uxStickyTitle">
        <h2>Favourite Projects</h2>
      </div>
      <div className="uxHomeGrid">
        <Link className="uxPost" ref={birdsongPost1} to="/projects/birdsong">
          <div className="uxSmallTitle">Unit 1</div>
          <div className="uxPostTitle">UX of Birdsong</div>
          <div className="uxPostBeauty">
            {/* <HoverVideoPlayer
                  videoSrc="/images/ux/birdsong_b2.mp4"
                  hoverTarget={birdsongPost1}
                  pausedOverlay={
                    <img
                      src="/images/ux/birdsong_bs.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                /> */}
            <div className="imgCont169">
              <img
                src="/images/ux/birdsong_bs.jpg"
                alt="A picture of a bird nest and a human hand shining into it with a smartphone flash light"
              />
            </div>
          </div>
        </Link>
        <Link className="uxPost" ref={disguisePost1} to="/projects/disguise">
          <div className="uxSmallTitle">Unit 1</div>
          <div className="uxPostTitle">UX of Disguise</div>
          <div className="uxPostBeauty">
            {/* <HoverVideoPlayer
                  videoSrc="/images/ux/disguise_bslow.mp4"
                  hoverTarget={disguisePost1}
                  pausedOverlay={
                    <img
                      src="/images/ux/disguise2btemp.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                /> */}
            <div className="imgCont169">
              <img
                src="/images/ux/disguise_bs.jpg"
                alt="A grey plastic mask with attached headphones"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="uxStickyTitle">
        <h2>Unit 1: UX Studio Practices</h2>
      </div>
      <div className="uxHomeGrid">
        <Link to="/projects/senses" className="uxPost" ref={sensesPost}>
          <div className="uxSmallTitle">Brief 1</div>
          <div className="uxPostTitle">UX of Human Senses</div>
          <div className="uxPostBeauty">
            {/* <HoverVideoPlayer
                  videoSrc="/images/ux/senses_b.mp4"
                  hoverTarget={sensesPost}
                  pausedOverlay={
                    <img
                      src="/images/ux/senses_bs.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                /> */}
            <div className="imgCont169">
              <img
                src="/images/ux/senses_bs.JPEG"
                alt="A security pin slightly piercing human skin"
              />
            </div>
          </div>
        </Link>
        <Link className="uxPost" ref={mouldPost} to="/projects/mould">
          <div className="uxSmallTitle">Brief 2</div>
          <div className="uxPostTitle">UX of Mould</div>
          <div className="uxPostBeauty">
            {/* <HoverVideoPlayer
                  videoSrc="/images/ux/mould_bv.mp4"
                  hoverTarget={mouldPost}
                  pausedOverlay={
                    <img
                      src="/images/ux/mould_bs.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                /> */}
            <div className="imgCont169">
              <img
                src="/images/ux/mould_bs.jpg"
                alt="A microphone pointed at a mason jar filled with a mouldy yellow substance"
              />
            </div>
          </div>
        </Link>
        <Link className="uxPost" to="/projects/hair" ref={hairPost}>
          <div className="uxSmallTitle">Brief 3</div>
          <div className="uxPostTitle">UX of Hair</div>
          <div className="uxPostBeauty">
            {/* <HoverVideoPlayer
                  videoSrc="/images/ux/hair_b.mp4"
                  hoverTarget={hairPost}
                  pausedOverlay={
                    <img
                      src="/images/ux/hair_btemp.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                /> */}
            <div className="imgCont169">
              <img
                src="/images/ux/hair_bs.jpg"
                alt="One girl touching another girl's hair within a room with large windows"
              />
            </div>
          </div>
        </Link>
        <Link className="uxPost" ref={birdsongPost} to="/projects/birdsong">
          <div className="uxSmallTitle">Brief 4</div>
          <div className="uxPostTitle">UX of Birdsong</div>
          <div className="uxPostBeauty">
            {/* <HoverVideoPlayer
                  videoSrc="/images/ux/birdsong_b2.mp4"
                  hoverTarget={birdsongPost}
                  pausedOverlay={
                    <img
                      src="/images/ux/birdsong_bs.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                /> */}
            <div className="imgCont169">
              <img
                src="/images/ux/birdsong_bs.jpg"
                alt="A picture of a bird nest and a human hand shining into it with a smartphone flash light"
              />
            </div>
          </div>
        </Link>
        <Link className="uxPost" ref={disguisePost} to="/projects/disguise">
          <div className="uxSmallTitle">Brief 5</div>
          <div className="uxPostTitle">UX of Disguise</div>
          <div className="uxPostBeauty">
            {/* <HoverVideoPlayer
                  videoSrc="/images/ux/disguise_bslow.mp4"
                  hoverTarget={disguisePost}
                  pausedOverlay={
                    <img
                      src="/images/ux/disguise2btemp.jpg"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                /> */}
            <div className="imgCont169">
              <img
                src="/images/ux/disguise_bs.jpg"
                alt="A grey plastic mask with attached headphones"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="uxStickyTitle">
        <h2>Unit 2: Collaborative Unit</h2>
      </div>
      <div className="uxHomeGrid">
        <Link className="uxPost" to="/projects/outfit">
          <div className="uxSmallTitle">Brief 1</div>
          <div className="uxPostTitle">Survival of the Outfit</div>
          <div className="uxPostBeauty">
            <div className="imgCont169">
              <img
                src="/images/ux/outfit_bs.jpg"
                alt="A man and woman both wearing black jackets with plastic pipes around them, the man facing away from the camera and wearing a black backpack"
              />
            </div>
          </div>
        </Link>
        <Link className="uxPost" to="/projects/psychogeography">
          <div className="uxSmallTitle">Brief 2</div>
          <div className="uxPostTitle">Digital Psychogeography</div>
          <div className="uxPostBeauty">
            <div className="imgCont169">
              <img
                src="/images/ux/psychogeography_bs.jpg"
                alt="An areal top-down view of the Hackney Marshes"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="uxStickyTitle">
        <h2>Unit 3: Macro UX</h2>
      </div>
      <div className="uxHomeGrid">
        <Link className="uxPost" to="/projects/macro">
          <div className="uxSmallTitle">Brief 1</div>
          <div className="uxPostTitle">Soil Story</div>
          <div className="uxPostBeauty">
            <div className="imgCont169">
              <img
                src="/images/ux/macro_btemp.jpg"
                alt="Boxed filled with green plants in a grocery store shelf"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

Overview.propTypes = {};

export default Overview;
