import { SiChatbot } from "react-icons/si";
import { MdRecommend } from "react-icons/md";
import FadeUpWrapper from "../Animation/FadeUpWrapper";

const InfoCard = () => {
  return (
    <section className="text-neutral-500 body-font">
      <div className="container px-5 py-40 mx-auto">
        <FadeUpWrapper className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-neutral-100 mb-4">
            Welcome to the website!
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-neutral-100 inline-flex"></div>
          </div>
        </FadeUpWrapper>
        <FadeUpWrapper className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/2 lg:px-16 md:px-12 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-800 text-neutral-100 mb-5 flex-shrink-0">
              <SiChatbot size={27} />
            </div>
            <div className="flex-grow">
              <h2 className="text-neutral-100 text-lg title-font font-medium mb-3">
                Chatbot in use
              </h2>
              <p className="leading-relaxed text-base px-8 md:px-0 lg:leading-5">
                The chatbot uses a recommendation engine to suggest similar
                movies with the help of your previous picks, use the chatbot for
                a new search and find your favourite watch starting right now in
                just few clicks
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/2 lg:px-16 md:px-12 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-800 text-neutral-100 mb-5 flex-shrink-0">
              <MdRecommend size={35} />
            </div>
            <div className="flex-grow">
              <h2 className="text-neutral-100 text-lg title-font font-medium mb-3">
                Highly filtered results
              </h2>
              <p className="leading-relaxed text-base px-8 md:px-0 lg:leading-5">
                search results are highly filtered based on your selected movies
                on your watchlist, so be quick and add some movies to your
                watchlist so that we can figure out your perfect taste
              </p>
            </div>
          </div>
        </FadeUpWrapper>
      </div>
    </section>
  );
};

export default InfoCard;
