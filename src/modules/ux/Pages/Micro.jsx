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

function Macro() {
  const bib = useRef(null);

  const executeScroll = () => bib.current.scrollIntoView();

  return (
    <div className="uxContent">
      <div className="uxStickyTitle">
        <h2>Saige - Conversation Rehearsal AI</h2>
      </div>
      <ZoomImage
        src="/images/ux/micro_bm.jpg"
        enlargedSrc="/images/ux/micro_b.jpg"
      />
      <div className="uxText">
        <div className="uxOverview">
          <div className="uxSmallTitle">Brief</div>
          <p>
            Design a way for a <span className="uxHighlight">person</span> to{" "}
            <span className="uxHighlight">pass as a 'generative AI'</span> in an{" "}
            <span className="uxHighlight">everyday setting</span>. You will be
            working with <span className="uxHighlight">R/GA</span>, a global
            creative consultancy and agency specializing in advertising,
            branding, product design, and technology.
          </p>
          <div className="uxSmallTitle">Designers</div>
          <p>
            Akriti Goel, Changlin Hou (Charlie),{" "}
            <a href="https://www.rebeccahodge.co.uk/blog" target="_blank">
              Rebecca Hodge
            </a>
            ,{" "}
            <a
              href="https://ruoxisong.notion.site/e70dcbaf72034826b5b1e2642070d3ea?v=73aac37695504375bbea3110257dea77"
              target="_blank"
            >
              Ruoxi Song
            </a>{" "}
            (Roxy),{" "}
            <a
              href="https://www.notion.so/tanyadoesux/R-GA-Generative-AI-e6d7089d2b274d799cf75b051f00e117?pvs=4"
              target="_blank"
            >
              Tanya Singh
            </a>{" "}
            , Jakob Prufer
          </p>
          <div className="uxSmallTitle">Dates</div>
          <p>20/04-08/06/2023</p>
        </div>
        <main className="uxMain">
          <h3>Week 1</h3>
          <p>
            Week 1 started off with a captivating presentation by Andre and
            Isaac from{" "}
            <a href="https://rga.com" target="_blank">
              R/GA
            </a>
            , a global creative consultancy and agency that helps brands
            transform and thrive in the digital age, specializing in
            advertising, branding, product design, and technology. Both
            experience designers introduced the wide range of artificial
            intelligence applications and tools springing up in the AI boom
            started end of 2022 by ChatGPT, the intelligent chatbot by{" "}
            <a href="https://openai.com" target="_blank">
              OpenAI
            </a>
            . Two projects in particular stuck with me. One was a Dalí
            exhibition that used the image generator DALL-E (also by OpenAI) to
            visualise visitor’s dreams and then combine multiple dreams on a
            large digital canvas in the style of the 20th century Spanish artist
            <span className="footNote" onClick={executeScroll}>
              [1]
            </span>
            . Another was a project that used an AI to generate live sports
            play-by-play in the exact voice and style of famous commentators for
            people with visual impairments – generated based on camera footage,
            this allowed them not just to better follow famous sporting events
            but also smaller-scale competitions such as family school
            tournaments.
          </p>
          <div className="video169responsive">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/B0P4HHX7W7g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p>
            We were then presented with the brief to design a way for a human to
            pass as a generative AI – specifically deceiving another human to
            believe they were artificial intelligence in an everyday setting – a
            sort of reverse Turing test{" "}
            <span className="footNote" onClick={executeScroll}>
              [2]
            </span>
            . On recommendation of the partners we watched parts of the film
            “Blade Runner”{" "}
            <span className="footNote" onClick={executeScroll}>
              [3]
            </span>
            , which had served as one of the inspirations for the brief. Quickly
            it became clear to us that at the heart of our task was
            understanding human perception of AI, to then design something that
            could match these expectations. We did some brainstorming with
            sticky notes, eliciting a first few associations. As a fun exercise
            to combine our imagination of a voice assistant like Siri, we each
            folded a piece of paper and drew head, chest, torso and legs,
            folding and passing the paper to the next person for each body area.
            This brought some interesting results, with some team members
            picturing Siri more mechanical while others saw her as a traditional
            blonde housekeeper. We also started first attempts of roleplaying,
            one person acting as if they were an AI voice assistant, but found
            it hard to generate accurate responses quickly. We still lacked a
            bit of precision on the question whether voice assistants like Siri
            or Alex could be considered a generative AI or just a collection of
            pre-programmed responses.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige1_1_1s.jpg"
              enlargedSrc="/images/ux/saige1_1_1.jpg"
            />
            <ZoomImage
              src="/images/ux/saige1_1_2s.jpg"
              enlargedSrc="/images/ux/saige1_1_2.jpg"
            />
          </div>
          <div className="caption">Initial brainstorming</div>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige1_1_3m.jpg"
              enlargedSrc="/images/ux/saige1_1_3.jpg"
            />
          </div>
          <div className="caption">
            Some sketches of how we visualised voice assistants - the drawings
            could be combined in to hilarious combinations
          </div>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige1_1_4m.jpg"
              enlargedSrc="/images/ux/saige1_1_4.jpg"
            />
          </div>
          <div className="caption">Some initial bodystorming / roleplaying</div>
          <h3>Week 2</h3>
          <p>
            In week 2 we split the larger R/GA group into subgroups, and I
            started working with Rebecca, Tanya and Akriti. All four of us were
            interested in looking closer at audio, voice and music within this
            AI brief. There was some dispute in one of the other subgroups,
            which was resolved in a communal discussion, and resulted in Roxy
            and Charlie also joining our “team audio”.
          </p>
          <p>
            We honed in on roleplaying and bodystorming the reverse Turing test,
            investigating different methods of how a person could act more like
            an AI and get access to information quickly. It seemed obvious that
            there would need to be some boundary that obscured physical
            appearance of the counterpart. We played with the idea of an AI
            becoming increasingly more human as the conversation went on, for
            example making fun of the of its counterpart or becoming clingy, and
            found our initial reaction to be repulsion. Humans seem to like AI
            as a personality-less, helpful tool but seem to get frightened when
            it develops feelings of its own, as some claim it already has
            <span className="footNote" onClick={executeScroll}>
              [4]
            </span>
            . Another idea came from the thoughts of Geoffrey Hinton, commonly
            referred to as one of the “Godfathers of AI”, who publicly warned of
            the possible dangers of AI before leaving his position at tech giant
            Google. In an interview
            <span className="footNote" onClick={executeScroll}>
              [5]
            </span>{" "}
            he compared AI to millions of minds who could each learn and gather
            new information independently, but then connect and contribute to a
            gigantic, shared knowledge. This led us to experiment with multiple
            people working together to enable the person mimicking AI to faster
            access information and generate responses. One thing that stood out
            clearly was that AI, unless prompted to, did not instigate
            conversation. It didn’t ask questions, didn’t seem curious, it just
            responded; something that made it remarkably inhuman.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige2_1_1m.jpg"
              enlargedSrc="/images/ux/saige2_1_1.jpg"
            />
          </div>
          <p>
            We also started researching more into AI tools at our disposal, the
            likes of which at the time around May 2023 seemed to spring up
            wherever you looked on the internet. One category that fascinated me
            was text-to-speech (TTS) AI, which had become more advanced than I
            expected. We worked with Bark AI and later Eleven Labs to generate
            highly expressive and human voice samples from typed text – Bark
            even being able to integrate pre-determined laughter, hesitations or
            singing. Another category of AI was music generation AI, of which
            the most impressive was MusicLM, an unreleased research project by
            Google that could generate musical pieces of frightening quality and
            complexity from text description or a hummed melody
            <span className="footNote" onClick={executeScroll}>
              [6]
            </span>
            .
          </p>
          <p>
            Feedback encouraged us to put more effort into the quality of the
            documentation, making an effort to meet professional standards
            rather than making it look like a university project – something I
            believe we got closer to towards the final outcome.
          </p>
          <h3>Week 3</h3>
          <p>
            In week 2 our thinking had remained somewhat surface-level and the
            research was predominantly conducted within our group. Consequently,
            in week 3 we went out into the real world to get some perspectives
            from non-students.
          </p>
          <p>
            Firstly, we conducted directed storytelling interviews with friends
            and acquaintances, asking them to go in-depth about their
            experiences with and perceptions of AI. We found that many of them
            considered AI an advanced tool, but not highly creative or socially
            apt. Most were positive about the use of AI in everyday life, but
            some felt sceptical about applications that concerned human
            psychology, emotions as well as financial markets. People liked to
            use AI to subsidise skills they weren’t good at, to focus more on
            things they were good at. They provided inventive and witty ideas of
            how a human could pretend to be an AI.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige3_1_1m.jpg"
              enlargedSrc="/images/ux/saige3_1_1.jpg"
            />
          </div>
          <div className="caption">Data from directed storytelling</div>
          <p>
            Secondly, we conducted guerrilla research in the form of interviews
            in and around Granary Square, a newly developed area north of Kings
            Cross station, turned into lively shopping and tech hub, hosting the
            London offices of companies such as Google, Meta and Universal
            Music. In exchange for free cookies (which rather embarrassingly
            Charlie and me were assigned to advertise by wearing large posters
            around our bodies) we got people of ages 17-75 to engage in
            conversation.
          </p>
          <p>
            Our questions included:
            <ul>
              <li>
                Do you think AI should have social skills? (Mixed responses)
              </li>
              <li>
                Do you have a mental image of a personality for voice assistants
                like Siri? (Most people didn’t)
              </li>
              <li>
                Would you want to use an AI to give you tips during a date?
                (Mixed responses)
              </li>
            </ul>
          </p>
          <div className="uxImgRowLeft">
            <div className="uxImg1">
              <ZoomImage
                src="/images/ux/saige3_2_1s.jpg"
                enlargedSrc="/images/ux/saige3_2_1.jpg"
              />
            </div>
            <div className="uxImg23">
              <div className="uxImg2">
                <ZoomImage
                  src="/images/ux/saige3_2_2s.jpg"
                  enlargedSrc="/images/ux/saige3_2_2.jpg"
                />
              </div>
              <div className="uxImg3">
                <ZoomImage
                  src="/images/ux/saige3_2_3s.jpg"
                  enlargedSrc="/images/ux/saige3_2_3.jpg"
                />
              </div>
            </div>
          </div>
          <div className="caption">Granary Square interviews</div>
          <p>
            I personally found it quite challenging to conduct interviews in
            public like this. I must admit that I myself master the art of
            avoiding public activism or questioning. Occasionally we were
            approached by security guards and asked to change location because
            parts of the area are privately owned. After a while we got into the
            flow however; receiving good responses was rewarding. I quite
            enjoyed trying out various ways of grabbing bypassers’ attention.
            One surprising takeaway was how many people hadn’t used and hadn’t
            even heard of ChatGPT, a tool that for me at the time already seemed
            ubiquitous.
          </p>
          <p>
            We then reported results to Andre from R/GA in a feedback call. He
            liked the direction we were going in but challenged us to experiment
            more and to start thinking about the final outcome. He also
            encouraged us to investigate which things humans trust AI more with
            than other humans to help us understand the everyday setting we
            wanted to situate our design in. Generally, I found it difficult to
            determine what to research if we had no concept of what we wanted to
            build – and was keen to start making.
          </p>
          <h3>Week 4</h3>
          <p>
            We all felt we had assembled a good amount of data on the perception
            of AI. Akriti and Rebecca were excited to experiment with sound in a
            workshop format, while the other members including me felt motivated
            to start ideating. We managed to arrange participants and get a room
            for a workshop in week 5, so we started ideating in week 4 with the
            “Crazy 4s” method: Each of us took a sheet of paper and drew four
            quick ideas for a design in only 30 seconds per sketch. I had been
            impressed with the level of inventiveness in our course before, and
            this exercise again proved very fruitful. We presented our sketches
            to each other, which in turn lead to new alterations and ideas
            popping up in conversation. The exercise trained our ability to
            discuss and integrate ideas with each other and I felt more
            confident in my ability to articulate my standpoint after. It
            provided us with new wind and first concepts for our final design.
            Some standout concepts were:
            <ul>
              <li>
                A museum installation, a sort of weird object which verbally
                responds to visitors. They believe the object is powered by AI,
                while inside actually hides a human. The final reveal of this
                fact provokes discusion about the boundary between human and
                machine.
              </li>
              <li>
                A secret service encryption technique: hiding real human
                messages in a mass of AI-generated content, where the human
                messages should seem artificial to avoid detection
              </li>
              <li>
                A dating rehearsal AI that can be used to train your dating
                skill, with a real human sometimes taking over from the AI
              </li>
            </ul>
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige4_1_1m.jpg"
              enlargedSrc="/images/ux/saige4_1_1.jpg"
            />
          </div>
          <div className="caption">Sketches from "Crazy 4s"</div>
          <p>
            We also decided it would be very helpful to – independent from what
            our final outcome would be - build a toolkit of sorts that could
            make it easier for a human to pass as an AI, for example providing
            an option to indicate a “loading” state while the human thought
            about a response. For this purpose, we collected guidelines on how
            to act like an AI, listed common phrases associated with an AI and
            build a soundboard prototype that could play sentences generated by
            TTS on press of a button. For the midpoint presentation, with all
            the industry partners present, we also prepared the below video as a
            humorous reminder of how realistic voice generation could blur the
            line between real and fake.
          </p>
          <div className="g1">
            <video controls className="uxVideo" width="1920" height="1080">
              <source
                src="/images/ux/saige4_2_1.mp4#t=0.001"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="caption">
            The audio in the first half of the video is actually the real
            recorded audio, but my voice is changed using the service
            Respeecher.
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige4_3_1s.jpg"
              enlargedSrc="/images/ux/saige4_3_1.jpg"
            />
            <ZoomImage
              src="/images/ux/saige4_3_2s.jpg"
              enlargedSrc="/images/ux/saige4_3_2.jpg"
            />
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige4_3_3s.jpg"
              enlargedSrc="/images/ux/saige4_3_3.jpg"
            />
            <ZoomImage
              src="/images/ux/saige4_3_4s.jpg"
              enlargedSrc="/images/ux/saige4_3_4.jpg"
            />
          </div>
          <div className="g1">
            <video controls className="uxVideo" width="1920" height="1080">
              <source
                src="/images/ux/saige4_3_5.mp4#t=0.001"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="caption">
            Experimentation with our AI voice toolbox concept.
          </div>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige4_3_6m.jpg"
              enlargedSrc="/images/ux/saige4_3_6.jpg"
            />
          </div>
          <div className="caption">Thematic map of research to date</div>
          <h3>Week 5</h3>
          <p>
            In week 5 we got to hold the workshop in a room in Central Saint
            Martins college. One task asked participants to create storyboards
            of imaginary, strange use cases of AI, which gave us both new
            insights about the perception of AI as well as ideas for the
            outcome. For another activity we had created both real recordings of
            ourselves and AI-generated voice samples and asked workshop
            participants to identify AI or real samples – and were excited to
            see that nearly half of the AI-generated samples managed to fool
            participants.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige5_1_1m.jpg"
              enlargedSrc="/images/ux/saige5_1_1.jpg"
            />
          </div>
          <div className="caption">Materials generated in the workshop</div>
          <audio controls>
            <source src="/images/ux/saige5_1_2.mp3" type="audio/mpeg" />
          </audio>
          <div className="caption">
            Example of an Bark-generated voice sample
          </div>
          <audio controls>
            <source src="/images/ux/saige5_1_3.mp3" type="audio/mpeg" />
          </audio>
          <div className="caption">
            Example of a recorded human voice sample
          </div>
          <p>
            We continued to discuss ideas, with the dating rehearsal idea now
            taking shape. The plan was to build a booth with an AI voice
            assistant that anyone could enter to practice a flirty conversation.
            A human on the other side of the booth would then take over from the
            AI without the user’s awareness. To make the separation between
            human and AI clear, we came up with the idea of a tiered level
            system. Level 1 would give the user a friendly, easy-going
            conversational partner powered by AI. Higher levels then represented
            higher “dating difficulty” or “humanness”, meaning answers would
            become a bit more cheeky, mocking and socially demanding. Initially
            we considered a level 2, where one human replaced the AI responses,
            and a level 3, where a group of humans would in cooperation decide
            on the best answers. The level system provided a good framework to
            see how far we could push the “humanness” before a user would start
            questioning whether they were indeed talking to an AI. We considered
            framing this design as either a game show, with an unknowing
            candidate, or as a product demo for the booth as a commercial
            product.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige5_2_1s.jpg"
              enlargedSrc="/images/ux/saige5_2_1.jpg"
            />
            <ZoomImage
              src="/images/ux/saige5_2_2s.jpg"
              enlargedSrc="/images/ux/saige5_2_2.jpg"
            />
          </div>
          <div className="caption">Sketches of the initial booth idea</div>
          <p>
            Still we were not completely happy with the concept. Akriti for
            example questioned whether anyone would actually want to train
            dating with an AI. Personally, I thought AI would be preferable to
            practicing conversation with a real human, because the user could
            rehearse without embarrassment in front of a conscious being while
            still receiving relatively intelligent responses. Akriti considered
            different reasons that could persuade her to use this AI and
            suggested we could add a personalisation feature: using data from
            public social media profiles or through manual entry, you could
            customize the AI to respond with the characteristics of the person
            you wanted to go on a date with – an idea we ended up implementing
            into the final design. We also discussed a separate idea around a
            cooking AI; a lot of the week we spent debating and attempting to
            integrate new thoughts with existing concepts while trying to
            understand each other’s doubts and criticisms; observations from
            this stage are also discussed in my{" "}
            <a href="https://prufer.co/writing/discussingideas" target="_blank">
              essay
            </a>{" "}
            for this term.
          </p>
          <p>
            Feedback for the dating idea was positive and the course team liked
            how we had integrated all the research about TTS, voice assistants
            and AI perception into a scenario that satisfied the brief; we had
            found a setting where humans disguising as an AI seemed sensible.
            However, a critique was that the idea was too complex and “blown
            up”; we planned to build too many things at once with the booth and
            the level system – we were advised to simplify and test a lot in the
            remaining two weeks.
          </p>
          <h3>Week 6</h3>
          <p>
            Consequently, we started tests. We set up ChatGPT with a
            speech-to-text plugin to quickly input speech as prompts. The
            response of ChatGPT we would then copy and paste into the very
            realistic Eleven Labs TTS, so that a response would be spoken in a
            natural female or male voice. A human could then take over at any
            time, typing out the answer instead of pasting from ChatGPT. We
            experimented with calibrating the generative AI, asking it to
            abandon its usually formal and informative language and to take up
            the role of a flirty dating partner. Pretty quickly it became clear
            that it was not very good at subtlety. Its attempts at flirting were
            painfully overinvested and over-the-top, to the point where our test
            candidates felt “weirded-out” or repulsed by it. Statements like
            “hello there, sweet-talker” gave us the ick. It was also reluctant
            to talk about itself, instead continuously probing with keen
            questioning. This was great, as it confirmed some of the human
            expectations we had gathered in research.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige6_1_1m.jpg"
              enlargedSrc="/images/ux/saige6_1_1.jpg"
            />
          </div>
          <div className="caption">ChatGPT's attempts at flirting</div>
          <p>
            We tested the setup with some participants, Rebecca handling the
            laptop, separated from the testers by a curtain and taking over from
            AI after a while. Reviews of the test setup were generally good.
            Testers did not always realise a human had replaced the AI, but
            commonly felt more comfortable as soon as Rebecca started taking
            over. Naturally, we had to deal with a bit of delay in the responses
            as it took some time for ChatGPT to generate or Rebecca to type, but
            overcame it by deciding we would add a loading sound to the final
            design. We named the project “Saige”, rooting both from the meaning
            of wisdom and the cleansing quality of the herb sage. We had a tight
            schedule now to make it in time for the final presentation, as many
            parts would need to be built in LCC’S 3D workshop.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige6_2_1m.jpg"
              enlargedSrc="/images/ux/saige6_2_1.jpg"
            />
          </div>
          <div className="caption">Basic testing setup</div>
          <p>
            The final consultation with the course team then again brought
            changes; we were advised to reduce the design further down to the
            essence of what the tutors saw as a great idea, to work on a concise
            presentation of the idea and to expand the use case beyond dating.
            This instantly made sense to us; we decided to make Saige a
            rehearsal partner for any difficult situation, not just romantic
            ones, but also job interviews, confessions or arguments. After first
            being slightly taken aback by the big changes for the last week, we
            bounced back really well and spent the rest of the afternoon
            discussing until we had a solid final concept. We abandoned the
            level-system, the booth setup and the calibration with social media
            data which had all over-complicated the user experience and
            presentation of the design. Saige would now simply be a light strip
            which could be attached to a mirror in the house and used while
            getting ready. It would be calibrated with a simple button press and
            voice request.
          </p>
          <h3>Week 7</h3>
          <p>
            The final week held the bulk of the making so I will keep
            descriptions brief. We planned to present Saige with both a live
            demo but also a video to get the message across effectively and have
            documentation to share beyond the course. To build the actual Saige
            product, we used light strips controlled by a microphone through an
            Arduino microcontroller. This meant that when Saige spoke, the light
            strip would pulsate in a neon green light, the brand colour, giving
            the mirror which sage was attached to a weird hovering glow – a
            great effect to represent our AI. Akriti and Roxi worked on the
            technical implementation for this. The Saige voice was generated as
            in week 6 with Eleven Labs TTS and played on a Bluetooth speaker. I
            designed the start and loading sounds for Saige using software
            synthesizers. To represent a home space in the live demo, over 2
            days we used the 3D workshop on campus to build a wooden
            presentation wall with the Saige mirror and some coat hangers
            attached.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige7_1_1s.jpg"
              enlargedSrc="/images/ux/saige7_1_1.jpg"
            />
            <ZoomImage
              src="/images/ux/saige7_1_2s.jpg"
              enlargedSrc="/images/ux/saige7_1_2.jpg"
            />
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige7_1_3s.jpg"
              enlargedSrc="/images/ux/saige7_1_3.jpg"
            />
            <ZoomImage
              src="/images/ux/saige7_1_4s.jpg"
              enlargedSrc="/images/ux/saige7_1_4.jpg"
            />
          </div>
          <div className="caption">
            Construction of Saige and the live demo setup
          </div>
          <div className="uxImgRowLeft">
            <div className="uxImg1">
              <ZoomImage
                src="/images/ux/saige7_3_1s.jpg"
                enlargedSrc="/images/ux/saige7_3_1.jpg"
              />
            </div>
            <div className="uxImg23">
              <div className="uxImg2">
                <ZoomImage
                  src="/images/ux/saige7_3_2s.jpg"
                  enlargedSrc="/images/ux/saige7_3_2.jpg"
                />
              </div>
              <div className="uxImg3">
                <ZoomImage
                  src="/images/ux/saige7_3_3s.jpg"
                  enlargedSrc="/images/ux/saige7_3_3.jpg"
                />
              </div>
            </div>
          </div>
          <div className="caption">Final week planning</div>
          <p>
            For the video, we all agreed on a general structure and Rebecca then
            wrote the detailed script. After a wholesome brunch together, we
            filmed in my apartment, Rebecca’s apartment and the studio in LCC.
            Rebecca and me took care of the camera work, everyone in the group
            was involved in assisting and setting up the lighting. The user
            interface for the human behind the AI was designed by Tanya in
            Figma. Tanya and Charlie were also responsible for the logo and
            general branding of Saige. I edited the video. It was a few days of
            intense work but good scheduling with all hands on deck meant that
            we completed the project stress-free.
          </p>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige7_2_1s.jpg"
              enlargedSrc="/images/ux/saige7_2_1.jpg"
            />
            <ZoomImage
              src="/images/ux/saige7_2_2s.jpg"
              enlargedSrc="/images/ux/saige7_2_2.jpg"
            />
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige7_2_3s.jpg"
              enlargedSrc="/images/ux/saige7_2_3.jpg"
            />
            <ZoomImage
              src="/images/ux/saige7_2_4s.jpg"
              enlargedSrc="/images/ux/saige7_2_4.jpg"
            />
          </div>
          <div className="g11">
            <ZoomImage
              src="/images/ux/saige7_2_5s.jpg"
              enlargedSrc="/images/ux/saige7_2_5.jpg"
            />
            <ZoomImage
              src="/images/ux/saige7_2_6s.jpg"
              enlargedSrc="/images/ux/saige7_2_6.jpg"
            />
          </div>
          <div className="caption">Filming, Figma UI and branding</div>
          <p>
            Only on the last afternoon, with video and live demo ready and set
            up, we were late to think about the detailed structure of our
            presentation. From previous projects I had learned that a
            hard-to-follow, unrehearsed presentation could completely ruin a
            great outcome, so I knew it would be important to nail this. We came
            up with the idea to frame the entire presentation with Saige
            present, opening up as if we would like to practice in front of the
            AI mirror and then implementing its comments throughout. When we
            first ran through our initial presentation plan, we all felt the
            connection between the research and the final outcome was missing.
            We had some debates about it would be better to present with the
            outcome before the process or process before the outcome. Again,
            with good discussion which we all had improved throughout the
            project, we settled on a final structure. We had to keep it brief to
            fit into the 7-minute limit and decided to let the video do most of
            the talking.
          </p>
          <div className="g1">
            <video controls className="uxVideo" width="1920" height="1080">
              <source
                src="/images/ux/saige7_5_1.mp4#t=0.001"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="caption">
            The final video showcasing Saige, including the twist of a human
            taking over the conversation.
          </div>
          <p>
            All of us were very happy with the final demo and small hiccups in
            the presentation went widely unnoticed. The video and presentation
            earned good laughs from the crowd and feedback was great – partners,
            course team and students highlighted the clarity of concept, the way
            we addressed the humanness in the AI-driven design, the level of
            filming and acting. As a caveat, our partners from R/GA noted that
            our toolbox, the practical method of disguising oneself as an AI
            could have been more pronounced.
          </p>
          <div className="g1">
            <ZoomImage
              src="/images/ux/saige7_5_1m.jpg"
              enlargedSrc="/images/ux/saige7_5_1.jpg"
            />
          </div>
          <div className="caption">Project overview</div>
          <h3>Main Takeaways:</h3>
          <ul>
            <li>
              A great video transports the gist of a design better than any
              presentation. High production value on video and any documentation
              can level up the whole project.
            </li>
            <li>
              I learned a lot about discussing ideas in a group, see the{" "}
              <a
                href="https://prufer.co/writing/discussingideas"
                target="_blank"
              >
                essay for this term
              </a>
            </li>
          </ul>
          <div className="bottomNav">
            <Link to="/projects/soilstory">
              <HiOutlineArrowLeft className="hiIcon" /> Previous brief
            </Link>
            <Link to="/">
              Back to overview <HiOutlineArrowRight className="hiIcon" />
            </Link>
          </div>
          <h3>References</h3>
          <div className="bib" ref={bib}>
            <ol>
              <li>
                Lawson-Tancred, J. (2022) DALL-E, the A.I. Art App, Is the
                Breakout Star of a New Show About Dreams at Florida’s Dalí
                Museum, <i>Artnet News</i>. Available at:{" "}
                <a
                  href="https://news.artnet.com/art-world/dall-e-dali-museum-dream-tapestry-2220871"
                  target="_blank"
                >
                  https://news.artnet.com/art-world/dall-e-dali-museum-dream-tapestry-2220871
                </a>{" "}
                (Accessed: 17 June 2023).
              </li>
              <li>
                French, R.M. (2000) ‘The Turing Test: the first 50 years’,
                <i>Trends in Cognitive Sciences</i>, 4(3), pp. 115–122.
                Available at:
                <a
                  href="https://doi.org/10.1016/S1364-6613(00)01453-4"
                  target="_blank"
                >
                  {" "}
                  https://doi.org/10.1016/S1364-6613(00)01453-4
                </a>
                .
              </li>
              <li>Scott, R. (1982). Blade Runner. Warner Bros.</li>
              <li>
                Bratton, B. and Arcas, B.A.Y. (2022) ‘The Model Is The Message’.
                Available at:{" "}
                <a
                  href="https://www.noemamag.com/the-model-is-the-message"
                  target="_blank"
                >
                  https://www.noemamag.com/the-model-is-the-message
                </a>{" "}
                (Accessed: 17 June 2023).
              </li>
              <li>
                Full interview: ‘Godfather of artificial intelligence’ talks
                impact and potential of AI (2023). Available at:{" "}
                <a
                  href="https://www.youtube.com/watch?v=qpoRO378qRY"
                  target="_blank"
                >
                  https://www.youtube.com/watch?v=qpoRO378qRY
                </a>{" "}
                (Accessed: 17 June 2023).
              </li>
              <li>
                Agostinelli, A. et al. (2023) ‘MusicLM: Generating Music From
                Text’. arXiv. Available at:{" "}
                <a
                  href="https://doi.org/10.48550/arXiv.2301.11325"
                  target="_blank"
                >
                  https://doi.org/10.48550/arXiv.2301.11325
                </a>
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
