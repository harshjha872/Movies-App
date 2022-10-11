import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SingleShowPage from "../../Components/Movies/SingleShowPage";
import Navbar from "../../Components/Navbar/Navbar";

const SingleShow = () => {
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    const fetchMovieData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${slug}?api_key=f91458f7d7dd51c6920d723c52564c4a&language=en-US`
      );
      const tmdbData = await response.json();
      if (tmdbData) setLoading(false);
      console.log(tmdbData);
      setContent(tmdbData.name);
      //   const newres = await fetch(
      //     `https://www.omdbapi.com/?i=${tmdbData.imdb_id}&plot=full&apikey=6dd2da1e`
      //   );
      //   const omdbData = await newres.json();
      //   if (omdbData) setLoading(false);
      //   setContent(omdbData.Title);
      //   console.log(omdbData);
    };
    fetchMovieData();
  }, [router.isReady, slug]);

  return (
    <>
      <Navbar />
      {!loading ? (
        <div>
          <SingleShowPage />
        </div>
      ) : (
        <svg
          className="animate-spin mx-auto h-8 w-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </>
  );
};

export default SingleShow;