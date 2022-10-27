import Movies from "../Components/Movies/Movies";
import Navbar from "../Components/Navbar/Navbar";
import getServerSideProps from "../middleware/helpers";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../Store/StateSlices/loginSlice";
import {
  getUsersWatchlist,
  WatchlistActions,
} from "../Store/StateSlices/watchlistSlice";
import { useEffect } from "react";

const MoviesPage = (props) => {
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

  return (
    <>
      <Navbar />
      <Movies />;
    </>
  );
};

export default MoviesPage;

export { getServerSideProps };
