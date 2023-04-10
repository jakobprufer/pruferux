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

function Macro() {
  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  return (
    <div className="uxContent">
      <div className="uxStickyTitle">
        <h2>Soil Story</h2>
      </div>
      <ZoomImage
        src="/images/ux/macroB_bm.jpg"
        enlargedSrc="/images/ux/macroB_b.jpg"
      />
      <div className="uxText">
        <div className="uxOverview">
          <div className="uxSmallTitle">Brief</div>
          <p>
            Design a <span className="uxHighlight">transmedia experience</span>{" "}
            that mobilises people to an{" "}
            <span className="uxHighlight">urgent social cause</span>. You will
            be working with{" "}
            <span className="uxHighlight">Creative Conscience</span>, a creative
            community and global NGO. Decide on the topic and narrative for your
            experience, use the capabilities of transmedia to amplify
            under-represented voices and make stories that suggest a more
            inclusive future.
          </p>
          <div className="uxSmallTitle">Designers</div>
          <p>
            <a
              href="https://blog500070.wixsite.com/martyktdesign/blog"
              target="_blank"
            >
              Kuan-Ting Chen
            </a>{" "}
            (Marty),{" "}
            <a
              href="https://lfang1220211.wixsite.com/lingjia-fang"
              target="_blank"
            >
              Lingjia Fang
            </a>
            , Reagan Bbengo,{" "}
            <a
              href="https://romit-khurd.notion.site/93fa67c50fd84f12bf84abd829dd9e7a?v=c045d378c54a4270b875748ebfe24746"
              target="_blank"
            >
              Romit Khurd
            </a>
            , Jakob Prufer
          </p>
          <div className="uxSmallTitle">Dates</div>
          <p>02/02-09/03/2023</p>
        </div>
        <main className="uxMain">
          <h3>Week 1</h3>
          <p>
            In our first week we were allocated to our groups and industry
            partners. I landed with{" "}
            <a href="https://www.creative-conscience.org.uk/" target="_blank">
              Creative Conscience
            </a>
            , a UK-based NGO that aims to inspire and encourage social
            responsibility and positive change through creativity. The
            organization provides a platform for creatives to showcase their
            work in various fields, such as advertising, design, and film, with
            a focus on creating solutions to global social and environmental
            challenges
            <span className="footNote" onClick={executeScroll}>
              [1]
            </span>
            .{" "}
            <a
              href="https://www.creative-conscience.org.uk/team/chrissy-levett/"
              target="_blank"
            >
              Chrissy Levett
            </a>
            , director of Creative Conscience, delivered a compelling
            introductory presentation with the charm of someone who has lived a
            colourful life and has now decided to focus their efforts on
            positive impact. Using catchy statistics and slogans she underlined
            the urgency of today’s challenges and the power of creatives to make
            a change.
          </p>
          <p>
            In conversation with her and her co-worker Ed it became clear that
            CC had specific expectations for this project. While the brief
            provided by the course team tasked us to design a transmedia
            experience that mobilises people to an urgent social cause – one of
            our choice – the CC team preferred climate change as the focus of
            this project.
          </p>
          <div className="uxVideoCont">
            <embed
              src="/images/ux/Climate Action Script 2.pdf#toolbar=0"
              width="500"
              height="375"
              type="application/pdf"
              className="pdf"
            />
          </div>
          <div className="caption">One of the four scripts provided by CC</div>
          <p>
            The NGO also came prepared with four short scripts, drawn up by
            their writers, that addressed climate change from different angels.
            An example of one of their scripts is above. We were a bit taken
            aback, as the scripts gave the impression that we were expected to
            make a video campaign instead of creating a user experience. In
            previous projects we had done most of the ideation ourselves while
            here it seemed we should execute a prewritten concept. A really good
            approach of CC was to encourage us to make the message positive and
            hopeful instead of threatening and negative. They aimed to inspire
            change, not to scare people into it.
          </p>
          <p>
            In first week, a couple first design ideas we had included bins that
            encourage correct waste disposal through gamification
            <span className="footNote" onClick={executeScroll}>
              [2]
            </span>
            , a mobile application that informs users about emissions caused by
            scanning a shop receipt and a digital installation that shows the
            impact of climate actions on a balancing scale. This latter
            installation could be triggered by people selecting specific actions
            on their smartphone and then seeing the cumulative impact of
            everyone partaking reflected on the scale displayed on a big screen
            or projection.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/macro1_1_1m.jpg"
              enlargedSrc="/images/ux/macro1_1_1.jpg"
            />
          </div>
          <div className="caption">Initial sketches by Marty</div>
          <h3>Week 2</h3>
          <p>
            We decided to split into two subgroups, my group sticking to climate
            change and the other one on one focusing on learning disabilities.
            We were a bit sceptical about CC’s scripts, especially because they
            seemed to do “more of the same thing”, a typical awareness campaign
            with shocking but seen-before nature videos and messages that go in
            one ear and out the other. Personally, I entered the project with
            the belief that tackling climate change was not a question of
            changing people’s motivation; rather about making the sustainable
            action easier and making the impact of actions more obvious. This
            belief might well stem from my undergraduate education in
            behavioural science. My teammates had similar thoughts and we
            discussed approaches focusing on habit formation as described in
            “Atomic Habits”
            <span className="footNote" onClick={executeScroll}>
              [3]
            </span>
            .
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/macro2_1_1m.jpg"
              enlargedSrc="/images/ux/macro2_1_1.jpg"
            />
          </div>
          <p>
            Only when we started digging into the subject matter it became clear
            to us what an incredibly complex issue we were dealing with. The
            first weeks we spent trying to find a design that provided a
            miraculous solution to what many before us had already attempted to
            solve. How can you get lazy humanity to give up comfort for
            sustainably?
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/macro2_1b_1m.jpg"
              enlargedSrc="/images/ux/macro2_1b_1.jpg"
            />
          </div>
          <div className="caption">
            Research synthesis and idea brainstorming.
          </div>
          <p>
            Certainly we ourselves changed our perspectives a lot through the
            research we did. I had not understood basic principles of climate
            change. For instance, I hadn’t known that nature, specifically
            plants in healthy soil, capture CO2 back from the atmosphere. As the
            documentary “Kiss the Ground”
            <span className="footNote" onClick={executeScroll}>
              [4]
            </span>{" "}
            demonstrates powerfully, a big part of the solution is not just
            reducing emissions, but also restoring a healthy nature to pull
            carbon dioxide back down. The importance of regenerative farming,
            soil health and the impact of organic food purchases was
            fascinating.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/macro2_2_1m.jpg"
              enlargedSrc="/images/ux/macro2_2_1.jpg"
            />
          </div>
          <div className="caption">
            Conservative modern agriculture vs. regenerative farming,
            illustration by Maggie Eileen Lochtenberg for Kiss the Ground. The
            image visualises the core message of the film pretty well; the side
            by side comparisons in the documentary were inspiration for our
            later 3D poster concept.
          </div>
          <div>
            We conducted primary research by interviewing people in- and outside
            of our campus and creating an online survey we sent out to friends.
            Questions included:
            <ul>
              <li>
                Do you think humanity can actually turn around climate change?{" "}
                <i>Most respondents said yes, but tentatively.</i>
              </li>
              <li>
                How much do you care about the life of 3 generations in the
                future - that would be your grand-grand-children? (Say on a
                scale of 1-5).{" "}
                <i>
                  Most said a relative hight number (4 or 5), although ratings
                  were slightly higher in person than anonymously online.
                </i>
              </li>
              <li>
                Tell us a story/moment when you are conscious about
                environmental issues or climate change.{" "}
                <i>
                  This really lit up the faces the passion in some participants
                  as they recalled a vivid experience they had with climate
                  change. Maybe bringing up these vivid physical experiences
                  should be part of our design.
                </i>
              </li>
              <li>
                Imagine there were massive machines set up, capturing and
                storing enough CO2 to offset all human’s yearly emissions. How
                much tax/contribution would you be willing to pay monthly to set
                up and maintain them?{" "}
                <i>
                  Surprisingly for me most respondents were not willing to spend
                  a lot on this.
                </i>
              </li>
              <li>
                How sure are you that climate change is already noticeable from
                your everyday observations?{" "}
                <i>
                  People were very certain they were already seeing the effects.
                </i>
              </li>
            </ul>
          </div>
          <div className="g1">
            <ZoomImage
              src="/images/ux/macro2_3_1m.jpg"
              enlargedSrc="/images/ux/macro2_3_1.jpg"
            />
          </div>
          <div className="caption">Excerpt from our online questionaire.</div>
          <h3>Week 3</h3>
          <p>
            Obersations and thoughts from the research in week 1 and 2 included:
          </p>
          <ul>
            <li>
              The common individual can’t do enough to stop climate change and
              it doesn’t make sense to put the blame on them. One focus could be
              reaching the powerful individuals and firms in that can make a
              change through legislation and company policy.
            </li>
            <li>
              We wondered whether people care about and empathize with
              generations in the future – those we will never meet but that are
              impacted by today’s actions. Perhaps we could create a vivid time
              travel to make future impact more real.
            </li>
            <li>
              There is a gap between people that are already sustainably minded
              and those that know next to nothing about environmental concerns.
              Students in the UAL predominantly belong to the first group, so
              maybe we should target people outside.
            </li>
          </ul>
          <p></p>
          <div className="video169responsive">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yiw6_JakZFc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="caption">
            A great video that highlights many of the things we've researched
            and shows the complexity of the issue.
          </div>
          <p>
            A new idea involved creating an immersive time travel experience
            where you decide on your actions today and then press a button to
            see the resulting future scenario projected on canvasses all around
            you. When we presented this idea however, listeners remarked that
            this would somewhat put the blame on the individual and present
            rather pessimistic future scenarios.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/macro2_4_1s.jpg"
              enlargedSrc="/images/ux/macro2_4_1.jpg"
            />
            <ZoomImage
              src="/images/ux/macro2_4_2s.jpg"
              enlargedSrc="/images/ux/macro2_4_2.jpg"
            />
          </div>
          <div className="caption">
            Cardboard models of the immersive time travel concept by Lingjia and
            Marty.
          </div>
          <p>
            We also discussed the term “transmedia” that was used in the brief.
            For the first two weeks I misinterpreted it to mean a wholistic
            installation or experience using different forms of media at the
            same time. Later we found that it is more commonly used for a story
            line, promotion or campaigns that runs in adapted forms throughout
            different media. An example could be the horror film "The Blair
            Witch Project." Its campaign consisted of a movie, a website, a
            book, and various other forms of media that created an immersive
            experience for the audience and made them feel like they were part
            of the story
            <span className="footNote" onClick={executeScroll}>
              [5]
            </span>
            .
          </p>
          <p>
            With this shift in our understanding of transmedia we arrived at the
            idea of centring a multi-platform campaign around a 3D soil poster
            that shows a side-by-side comparison of healthy soil and soil that
            is destroyed through unsustainable farming methods. The poster could
            be a thin plexiglass box filled with real soil, plants and their
            roots. Then we wanted to ask viewers: Where do you want your food to
            come from? The underlying aim was to encourage purchases of organic
            food. We also planned to augment the poster, either with
            Arduino-controlled light strips or an augmented reality animation
            seen through a phone camera. This augmentation could be used to
            visualise CO2 particles being pulled into the healthy soil and
            toxins from fertilisers and pesticides in the ruined soil. The
            poster was meant to be a hook to get people interested and guided
            onto website that continued the side-by-side comparison theme. Romit
            had various ideas for this online platform, including an organic
            food marketplace or an online community. He emphasized that it would
            be important to create a community feel to the platform to achieve
            user retention. Marty was excited to add other hooks apart from the
            3D poster, like the arcade game bin we had as an idea earlier.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/macro3_2_1s.jpg"
              enlargedSrc="/images/ux/macro3_2_1.jpg"
            />
            <ZoomImage
              src="/images/ux/macro3_2_2s.jpg"
              enlargedSrc="/images/ux/macro3_2_2.jpg"
            />
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/macro3_2_3s.jpg"
              enlargedSrc="/images/ux/macro3_2_3.jpg"
            />
            <ZoomImage
              src="/images/ux/macro3_2_4s.jpg"
              enlargedSrc="/images/ux/macro3_2_4.jpg"
            />
          </div>
          <div className="caption">
            Beginnings of the 3D poster concept and sketches for the online
            platform structure
          </div>
          <p>
            At the halfway point presentation we introduced the course and CC to
            this idea. Ed from CC responded that he wanted the message to be
            more positive and suggested we could only focus on the healthy soil
            side instead of showing a comparison. Of course our web platform was
            still a vague concept and partners encouraged us to clearly define
            our plan. Generally we had tried to combine a multitude of
            individual ideas and lost sight of concision.
          </p>
          <h3>Week 4</h3>
          <p>
            After jumping between ideas previously, in fourth week we settled on
            our final concept. We abandoned the side-by-side poster idea and
            instead built on the idea of Marty to put a garden with real soil
            inside a grocery store. As soon as we started pitching the idea to
            friends and course mates we saw it made sense. Everyone grasped
            immediately the core message that food today in clean plastic
            packaging is disconnected from nature. A garden inside a grocery
            store was a great reminder that in order to be sustainable, we need
            to reconnect the two. We kept the idea of a website as the
            destination of the campaign, but decided to make it purely
            informational to introduce visitors to the basic information about
            soil health that we had gathered. We also decided to make the
            website based on a scrollable 3D animation inspired by a sustainable
            fuel website Lingjia had found
            <span className="footNote" onClick={executeScroll}>
              [6]
            </span>
            .{" "}
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/macro4_1_2s.jpg"
              enlargedSrc="/images/ux/macro4_1_2.jpg"
            />
            <ZoomImage
              src="/images/ux/macro4_1_1s.jpg"
              enlargedSrc="/images/ux/macro4_1_1.jpg"
            />
          </div>
          <div className="caption">
            Developing the initial story board for the website. At this stage we
            planned to also include a worm as a second character.
          </div>
          <p>
            The storyline of the animation would be similar to what we
            envisioned in the week before. The main character, a lady bug, would
            guide the story through various camera movements in the animation,
            like a slide down into a cross section of the earth or a zoom out
            into the atmosphere to show the share of land destroyed by modern
            farming.
          </p>
          <p>
            To capture the garden in a grocery store, we decided we would record
            it in a video that clearly visualized the message and then attracted
            visitors to the website. While we also imagined real garden
            installations in various supermarkets as part of the campaign, the
            video as the main statement of the campaign made more sense for
            transmedia purposes as well as the presentation in the classroom.
          </p>
          <h3>Week 5</h3>
          <p>
            Having set up the concept we now had the final week to execute it.
            To get the garden into the grocery store, we approached multiple
            independent Off License shops in London and asked if we could film
            there. We found a great shop front with fresh vegetables and fruit
            in Vauxhall where we were allowed to record. While the sterile
            interior of a big supermarket could have strengthened the contrast
            to our garden, the big chains would not allow us to film. Our garden
            then consisted of three boxed filled with garden soil and plants
            that we found in the wild. We bought cauliflower and placed it
            within the garden. We also borrowed a drinks basket that we could
            use as an imaginary shopping basket for our garden store scenario.
            All of us together spent a day planning, setting up, filming close
            ups on campus, taking additional photos, filming at the store and
            ended up with great footage.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/macro5_1_1s.jpg"
              enlargedSrc="/images/ux/macro5_1_1.jpg"
            />
            <ZoomImage
              src="/images/ux/macro5_1_4s.jpg"
              enlargedSrc="/images/ux/macro5_1_4.jpg"
            />
          </div>
          <div className="caption">
            We want to make the contrast between nature and the artificial
            environment of a supermarket tangible
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/macro5_1_3s.jpg"
              enlargedSrc="/images/ux/macro5_1_3.jpg"
            />
            <ZoomImage
              src="/images/ux/macro5_1_2s.jpg"
              enlargedSrc="/images/ux/macro5_1_2.jpg"
            />
          </div>
          <div className="caption">
            Setting up the boxes for our little garden
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/macro5_1_5s.jpg"
              enlargedSrc="/images/ux/macro5_1_5.jpg"
            />
            <ZoomImage
              src="/images/ux/macro5_1_6s.jpg"
              enlargedSrc="/images/ux/macro5_1_6.jpg"
            />
          </div>
          <div className="caption">
            Shooting indoor close ups and then moving outside
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/macro5_1_7s.jpg"
              enlargedSrc="/images/ux/macro5_1_7.jpg"
            />
            <ZoomImage
              src="/images/ux/macro5_1_8s.jpg"
              enlargedSrc="/images/ux/macro5_1_8.jpg"
            />
          </div>
          <div className="caption">Video shoot at the off license store</div>
          <p>
            Marty got to work on the website and together we settled on the
            slogan “Food is supposed to be earthy” to suggest both the
            importance of connection of food to its origin and soil health. We
            also gave the website the title "Soil Story". Reagan and JiaJia
            focused on typography, poster design and additional graphic design
            for the video while Romit collected more research for the website
            captions. I edited the footage we had taken and added the animated
            elements to the video. We made sure to produce all posters, videos
            and the website so it would work on various forms of media and
            devices.
          </p>
          <div className="uxVideoCont">
            <video controls className="img" width="720" height="1280">
              <source
                src="/images/ux/Soil Story Wide Final.mp4#t=0.001"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="caption">
            The final video edit for wide screen devices. The ending of the
            video blends smoothly into the start screen of the website.
          </div>
          <div className="uxVideoCont">
            <video controls className="img" width="720" height="1280">
              <source
                src="/images/ux/Soil Story Website.mp4#t=0.001"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="caption">
            Slow scroll through the website draft. Animations by Marty.
          </div>
          <div className="g11asym">
            <div className="g11asymImg1">
              <video controls className="uxVideo" width="848" height="480">
                <source
                  src="/images/ux/Soil Story Billboard Final.mp4#t=0.001"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="g11asymImg2">
              <ZoomImage
                src="/images/ux/macro5_2_1s.jpg"
                enlargedSrc="/images/ux/macro5_2_1.jpg"
              />
            </div>
          </div>
          <div className="caption">
            Transmedia implementation of the campaign on a bilboard and on
            Instagram
          </div>
          <p>
            When we presented, feedback was generally positive. Creative
            conscience remarked that they had approached the project with other
            expectations but were happy with the final product. The course team
            and students were impressed specifically with the scrolling
            animation on the website. After many twists and turns we had landed
            on a middle ground between UX project and marketing/awareness
            campaign, which might have been a result of the conflicting
            expectations of CC and our course team - a scenario perhaps quite
            realistic in preparation for future work on multi-stakeholder
            projects.
          </p>
          <div className="bottomNav">
            <Link to="/ux/projects/psychogeography">
              <HiOutlineArrowLeft className="hiIcon" /> Previous brief
            </Link>
            <Link to="/ux">
              Back to overview <HiOutlineArrowRight className="hiIcon" />
            </Link>
          </div>
          <h3>References</h3>
          <div className="bib" ref={bib}>
            <ol>
              <li>
                Creative Conscience (2022). Events | <i>Creative Conscience</i>.
                [online] www.creative-conscience.org.uk. Available at:{" "}
                <a
                  href="https://www.creative-conscience.org.uk/what-we-do"
                  target="_blank"
                >
                  https://www.creative-conscience.org.uk/what-we-do
                </a>
                .
              </li>
              <li>
                Bliss, L. (2017). The Magic Trash Can Cities Probably Don’t
                Need. [online] <i>Bloomberg</i>. Available at:{" "}
                <a
                  href="https://www.bloomberg.com/news/articles/2017-03-03/tetrabin-the-digitized-playable-trash-can"
                  target="_blank"
                >
                  https://www.bloomberg.com/news/articles/2017-03-03/tetrabin-the-digitized-playable-trash-can
                </a>{" "}
                [Accessed 9 Apr. 2023]
              </li>
              <li>
                Clear, J. (2018). Atomic Habits. <i>Penguin Publishing Group</i>
                .
              </li>
              <li>
                Tickel, J. & Tickel, R. (2020) Kiss the Ground.{" "}
                <i>Big Picture Ranch</i>. Available at:{" "}
                <a
                  href="https://www.youtube.com/watch?v=pNGj2vXpKHE"
                  target="_blank"
                >
                  https://www.youtube.com/watch?v=pNGj2vXpKHE
                </a>{" "}
                (Accessed: April 9, 2023).
              </li>
              <li>
                Kring-Schreifels, J. (2019). ‘The Blair Witch Project’ at 20:
                Why It Can’t Be Replicated. <i>The New York Times</i>. [online]
                30 Jul. Available at:{" "}
                <a
                  href="https://www.nytimes.com/2019/07/30/movies/blair-witch-project-1999.html"
                  target="_blank"
                >
                  https://www.nytimes.com/2019/07/30/movies/blair-witch-project-1999.html
                </a>{" "}
                [Accessed 9 Apr. 2023]
              </li>
              <li>
                Prometheus (2021). Chapter 2 - <i>Prometheus Fuels</i>. [online]
                prometheusfuels.com. Available at:
                <a
                  href="https://www.prometheusfuels.com/chapter2"
                  target="_blank"
                >
                  https://www.prometheusfuels.com/chapter2
                </a>{" "}
                [Accessed 10 Apr. 2023].
              </li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}

Macro.propTypes = {};

export default Macro;
