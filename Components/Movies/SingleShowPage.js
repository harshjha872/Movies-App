import Navbar from "../Navbar/Navbar";
import Image from "next/image";

const SingleShowPage = (props) => {
  return (
    <>
      <Navbar />
      <section class="text-neutral-500 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:h-[50vh] md:h-[50vh] h-64 object-cover object-center rounded-lg shadow-lg relative">
              <Image
                layout="fill"
                alt="Movie poster"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg shadow-lg"
                src={`https://image.tmdb.org/t/p/original${props.image}`}
              />
            </div>
            <div class="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-neutral-500 tracking-widest">
                {props.genre} | {props.rated}
              </h2>
              <h1 class="text-white text-3xl title-font font-medium mb-1">
                {props.movieName}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    class="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>

                  <span class="text-neutral-400 ml-3">
                    IMDB {props.imdb || "N/A"}
                  </span>

                  <span class="text-neutral-400 ml-3"> | </span>

                  <span class="text-neutral-400 ml-3">
                    🍅 rotten tomatoes {props.rt || "N/A"}
                  </span>

                  <span class="text-neutral-400 ml-3"> | </span>

                  <span class="text-neutral-400 ml-3">
                    Metacritic {props.metacritic || "N/A"}
                  </span>
                </span>
              </div>
              <p class="leading-relaxed">{props.overview}</p>
              <div className="text-indigo-400 py-2">
                <span className="font-bold text-neutral-400">Starring:</span>{" "}
                {props.actors}
              </div>
              <div className="text-indigo-400">
                <span className="font-bold text-neutral-400">Creators:</span>{" "}
                {props.creators}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleShowPage;
