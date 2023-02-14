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
            Watch the best movies
            <br className="hidden lg:inline-block" />
            trending today!
          </h1>
          <p className="mb-8 leading-relaxed">
            Explore your fav movies and web series that are trending today, Bookmark them right now to watch them later. MoviesSaga has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want
          </p>
        </div>
      </FadeUpWrapper>
    </section>
  );
};

export default MidHeroMovieSection;
