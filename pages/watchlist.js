import MovieCard from "../Components/Movies/MovieCard";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";
import getServerSideProps from "../middleware/helpers";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../Store/StateSlices/loginSlice";
import {
  getUsersWatchlist,
  WatchlistActions,
} from "../Store/StateSlices/watchlistSlice";
import { useEffect } from "react";
import Router from "next/router";

const Watchlist = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.isUserloggedIn === true) {
      dispatch(loginStateActions.UserLoggedIn());
      dispatch(getUsersWatchlist());
    } else {
      dispatch(loginStateActions.UserLoggedOut());
      dispatch(WatchlistActions.emptyWatchlist());
      Router.push("/login");
    }
  }, [dispatch, props.isUserloggedIn]);
  const MoviesInWatchlist = useSelector(
    (state) => state.watchlist.MoviesInWatchlist
  );
  let moviesToDisplay = [];
  MoviesInWatchlist.forEach((ele) => {
    moviesToDisplay.push(
      <MovieCard
        genre={ele.genre}
        movieName={ele.movieName}
        year={ele.year}
        image={ele.image}
        bookMarked={ele.bookMarked}
        showId={ele.showId}
        typeofShow={ele.typeofShow}
      />
    );
  });

  return (
    <>
      <Navbar />
      <section className="w-full h-fit">
        <h1 className="sm:text-3xl text-4xl font-medium title-font mb-2 text-white px-8 py-1 pt-12 md:px-16 lg:px-20">
          Watchlist
        </h1>
        <div className="h-1 w-20 bg-white rounded mx-8 md:mx-16 lg:mx-20"></div>
        <div className="text-neutral-500 body-font">
          <div className="container py-4 mx-auto px-8 lg:px-12">
            <div className="flex flex-wrap w-full mb-4">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0"></div>
            </div>
            <div className="flex flex-wrap -m-4">{moviesToDisplay}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Watchlist;

export { getServerSideProps };
