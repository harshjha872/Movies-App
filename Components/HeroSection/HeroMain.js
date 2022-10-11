import FadeUpWrapper from "../Animation/FadeUpWrapper";
import Link from "next/link";

const HeroMain = () => {
  return (
    <FadeUpWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-gray-200 body-font h-fit -mb-2"
    >
      <header className="container min-h-[90vh] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:px-32 lg:text-xl md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-20 md:mt-0">
          <h1 className="title-font sm:text-5xl md:text-6xl sm:pb-4 text-4xl mb-4 font-medium text-white">
            Best Movie Recommendations Coming!
          </h1>
          <p className="mb-8 leading-relaxed">
            This free movie recommendation engine suggests films based on your
            mood, the occasion & personal taste in 2 minutes or less! No
            registration necessary.
          </p>
          <div className="flex justify-center">
            <Link href="/movies">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black transition duration-300 ease-in-out rounded text-lg">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </header>
    </FadeUpWrapper>
  );
};

export default HeroMain;
