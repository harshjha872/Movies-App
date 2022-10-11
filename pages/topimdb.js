import MovieCard from "../Components/Movies/MovieCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";
import getServerSideProps from "../middleware/helpers";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../Store/StateSlices/loginSlice";
import {
  getUsersWatchlist,
  WatchlistActions,
} from "../Store/StateSlices/watchlistSlice";

const TopIMDB = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.isUserloggedIn === true) {
      dispatch(loginStateActions.UserLoggedIn());
      dispatch(getUsersWatchlist());
    } else {
      dispatch(loginStateActions.UserLoggedOut());
      dispatch(WatchlistActions.emptyWatchlist());
    }
  }, [dispatch, props.isUserloggedIn]);
  const MoviesInWatchlist = useSelector(
    (state) => state.watchlist.MoviesInWatchlist
  );
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchingTopImdb = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=f91458f7d7dd51c6920d723c52564c4a&language=en-US&page=1"
      );
      const response = await data.json();
      if (response) setLoading(false);
      let MoviesArray = [];
      for (let i = 0; i < 16; i++) {
        const existInWatchlist = MoviesInWatchlist.find(
          (ele) => ele.movieName === response.results[i].title
        );
        MoviesArray.push(
          <MovieCard
            year={response.results[i].release_date}
            movieName={response.results[i].title}
            image={`https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}`}
            genre={response.results[i].genre_ids}
            bookMarked={existInWatchlist ? true : false}
            id={response.results[i].id}
            typeofShow="movie"
          />
        );
      }
      setContent([...MoviesArray]);
    };
    FetchingTopImdb();
  }, [MoviesInWatchlist]);

  return (
    <>
      <Navbar />
      <section className="text-neutral-500 body-font">
        <div className="container py-24 mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0"></div>
          </div>
          {!loading ? (
            <div className="flex flex-wrap -m-4">{content}</div>
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
                className="opacity-100"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </div>
      </section>
    </>
  );
};

export default TopIMDB;

export { getServerSideProps };
