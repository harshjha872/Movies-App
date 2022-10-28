import Image from "next/image";
import FadeUpWrapper from "../Animation/FadeUpWrapper";
import { RiBookmarkFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { WatchlistActions } from "../../Store/StateSlices/watchlistSlice";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import Link from "next/link";

const MovieCard = (props) => {
  const [addtowatchlist, setAddtowatchlist] = useState(false);
  const onMouseHover = () => {
    setAddtowatchlist(true);
  };
  const onMouseHoverOver = () => {
    setAddtowatchlist(false);
  };
  const CurrentUserloginStatus = useSelector(
    (state) => state.loginStateR.isloggedIn
  );
  const [bookMarked, setBookMarked] = useState(props.bookMarked);
  let showDeleteButton;
  const pathname = window.location.pathname;
  if (pathname === "/watchlist") showDeleteButton = true;
  else showDeleteButton = false;
  const dispatch = useDispatch();
  let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "kids",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10759: "Action & Adventure",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
  };

  const showData = {
    showId: props.id,
    movieName: props.movieName,
    typeofShow: props.typeofShow,
    genre: props.genre[0],
    year: props.year,
    image: props.image,
    bookMarked: props.bookMarked,
  };

  const BookMarkHandler = async () => {
    dispatch(WatchlistActions.AddMovieToWatchlist(props));
    setBookMarked(true);
    if (CurrentUserloginStatus) {
      const response = await fetch(
        `${process.env.HOST}/api/addshowtowatchlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(showData),
        }
      );
      const data = await response.json();
      console.log(data.message);
    }
  };

  const DeleteMovieFromWatchlistHandler = async () => {
    dispatch(WatchlistActions.DeleteMovieFromWatchlist(props));
    if (CurrentUserloginStatus) {
      const response = await fetch(
        `${process.env.HOST}/api/delShowfromwatchlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(showData),
        }
      );
      const data = await response.json();
      console.log(data.message);
    }
  };

  return (
    <FadeUpWrapper className="xl:w-1/4 md:w-1/2 p-4 relative">
      <div className="bg-[#242526] p-6 rounded-lg shadow-lg">
        <Link href={`/${props.typeofShow}/${props.showId || props.id}`}>
          <Image
            width={720}
            height={400}
            className="h-40 transition duration-300 ease-in-out hover:scale-110 rounded w-full object-cover object-center mb-6 cursor-pointer"
            src={props.image}
            alt="content"
          />
        </Link>
        <h2 className="text-lg text-white font-medium title-font ">
          {props.movieName}
        </h2>
        <h3 className="tracking-widest text-neutral-500 text-xs font-medium title-font py-1 mb-2">
          {props.year.slice(0, 4)}
        </h3>
        <div className="leading-relaxed text-base flex justify-between items-center relative mt-2">
          {genreids[props.genre[0]]}

          <CSSTransition in={bookMarked} timeout={1000} classNames="fade">
            {bookMarked && !showDeleteButton ? (
              <div className="h-10 w-10 lg:h-11 lg:w-11 rounded-full text-center flex justify-center items-center bg-neutral-700 transition duration-300 group">
                <TiTick size={23} className="text-green-500" />
              </div>
            ) : showDeleteButton ? (
              <div className="h-10 w-10 lg:h-11 lg:w-fit flex justify-center items-center">
                {`${genreids[props.genre]}`}
              </div>
            ) : (
              <div className="h-10 w-10 lg:h-11 lg:w-11 flex justify-center items-center"></div>
            )}
          </CSSTransition>

          <CSSTransition
            in={!bookMarked}
            timeout={1000}
            classNames="fadeOut"
            unmountOnExit
          >
            {CurrentUserloginStatus ? (
              <div
                onClick={BookMarkHandler}
                className={`h-10 w-10 lg:h-11 lg:w-11 rounded-full text-center flex justify-center items-center bg-neutral-700 hover:bg-yellow-600 transition duration-300 group hover:scale-125 cursor-pointer absolute top-0 right-0 scale-105 group`}
              >
                <RiBookmarkFill
                  size={18}
                  className={`text-white group-hover:text-neutral-800 group-hover:scale-110 transition duration-300 ease-in-out`}
                />
              </div>
            ) : (
              <div
                onMouseOver={onMouseHover}
                onMouseLeave={onMouseHoverOver}
                className={`h-10 w-10 lg:h-11 lg:w-11 rounded-full text-center flex justify-center items-center bg-neutral-900 hover:bg-yellow-600 transition duration-300 group hover:scale-125 cursor-pointer absolute top-0 right-0 scale-105 group`}
              >
                <RiBookmarkFill
                  size={18}
                  className={`text-neutral-400 group-hover:text-neutral-800 group-hover:scale-110 transition duration-300 ease-in-out`}
                />
                {addtowatchlist && (
                  <div className="absolute rounded-md bottom-12 p-2 shadow-2xl z-100 text-xs bg-black w-24">
                    login to add to watchlist
                  </div>
                )}
              </div>
            )}
          </CSSTransition>

          {bookMarked && showDeleteButton && (
            <div
              onClick={DeleteMovieFromWatchlistHandler}
              className="h-10 w-10 lg:h-11 lg:w-11 rounded-full text-center flex justify-center items-center bg-neutral-700 transition duration-300 group hover:scale-125  cursor-pointer absolute top-0 right-0 scale-105 group"
            >
              <MdDelete
                size={20}
                className="text-white group-hover:text-red-500 transition duration-300 ease-in-out"
              />
            </div>
          )}
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default MovieCard;

/*
currentuser && bookmark
notcurreuser && bookmark with msg
currentuserr && bookmarked && tick
currentuser && bookmarked && showdeletebutton && deletebutton
*/
