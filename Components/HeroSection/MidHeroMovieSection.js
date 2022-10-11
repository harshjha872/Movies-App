import React from "react";
import Image from "next/image";
import FadeUpWrapper from "../Animation/FadeUpWrapper";

const MidHeroMovieSection = () => {
  return (
    <section className="text-neutral-400 bg-[#111111] body-font">
      <FadeUpWrapper className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:px-16">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <Image
            width={720}
            height={600}
            className="object-cover object-center rounded"
            alt="i'm mid"
            src="/wolverine.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-neutral-100">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
      </FadeUpWrapper>
    </section>
  );
};

export default MidHeroMovieSection;
