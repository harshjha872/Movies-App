import { createSlice } from "@reduxjs/toolkit";

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    MoviesInWatchlist: [],
  },
  reducers: {
    getWatchlist(state, actions) {
      const newList = actions.payload.userWatchlist || [];
      state.MoviesInWatchlist = [...newList];
    },
    emptyWatchlist(state) {
      state.MoviesInWatchlist = [];
    },
    AddMovieToWatchlist(state, actions) {
      state.MoviesInWatchlist.push({
        genre: actions.payload.genre,
        movieName: actions.payload.movieName,
        year: actions.payload.year,
        image: actions.payload.image,
        bookMarked: true,
        showId: actions.payload.id,
        typeofShow: actions.payload.typeofShow,
      });
    },

    DeleteMovieFromWatchlist(state, actions) {
      const movieToDelete = state.MoviesInWatchlist.find(
        (ele) => ele.movieName === actions.payload.movieName
      );
      const MoviesAfterDelete = state.MoviesInWatchlist.filter(
        (ele) => ele.movieName !== movieToDelete.movieName
      );
      state.MoviesInWatchlist = [...MoviesAfterDelete];
    },
  },
});

export const getUsersWatchlist = () => {
  return async (dispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/getwatchlist`
    );
    const data = await response.json();
    if (data) dispatch(WatchlistActions.getWatchlist(data));
  };
};

export const WatchlistActions = WatchlistSlice.actions;

export default WatchlistSlice;
