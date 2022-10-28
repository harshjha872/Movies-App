import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { BsBookmarkStarFill } from "react-icons/bs";
import { useState } from "react";
import SideBar from "./SideBar";
import Link from "next/link";
import Overlay from "../Overlay/Overlay";
import { Toast, toastInitiator } from "../Toastify/tost";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { loginStateActions } from "../../Store/StateSlices/loginSlice";
import { WatchlistActions } from "../../Store/StateSlices/watchlistSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const CurrentUserloginStatus = useSelector((state) => {
    return state.loginStateR.isloggedIn;
  });
  const [Hamishidden, setHamIsHidden] = useState(false);
  let HamClasses = `h-screen w-60 bg-black transition duration-200 fixed ease-in-out z-20 top-0 left-0 ${
    Hamishidden ? "translate-x-0 " : "-translate-x-60"
  }`;

  const HamClickHandler = () => {
    setHamIsHidden(!Hamishidden);
  };

  const LogoutHandler = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/logout`);
    const data = await response.json();
    if (
      data.message === "Successfuly logged out!" ||
      data.message === "Bro you are already not logged in..."
    ) {
      dispatch(WatchlistActions.emptyWatchlist());
      dispatch(loginStateActions.UserLoggedOut());
      toastInitiator("Successfuly logged out!", "info");
      Router.push("/");
    }
  };

  return (
    <>
      <Toast />
      {Hamishidden && <Overlay onClickHandler={HamClickHandler} />}
      <nav className="flex h-20 items-center bg-opacity-50 bg-black justify-between sticky">
        <div className="flex items-center md:space-x-8">
          <GiHamburgerMenu
            className="text-2xl text-neutral-300 m-4 cursor-pointer md:hidden"
            onClick={HamClickHandler}
          />
          <Link href="/">
            <span className="md:m-4 text-2xl md:text-2xl cursor-pointer">
              MovieSaga
            </span>
          </Link>
          <Link href="/movies">
            <span className="hidden md:block cursor-pointer text-neutral-300 hover:text-neutral-50 transition duration-300 ease-in-out">
              Movies
            </span>
          </Link>
          <Link href="/tvshows">
            <span className="hidden md:block cursor-pointer text-neutral-300 hover:text-neutral-50 transition duration-300 ease-in-out">
              TV Shows
            </span>
          </Link>
          <Link href="/topimdb">
            <span className="hidden md:block cursor-pointer text-neutral-300 hover:text-neutral-50 transition duration-300 ease-in-out">
              Top IMDB
            </span>
          </Link>
        </div>
        <div className="flex">
          {CurrentUserloginStatus ? (
            <MdLogout
              onClick={LogoutHandler}
              className="text-2xl text-neutral-300 m-4 mr-2 cursor-pointer hover:text-neutral-50 transition duration-300 ease-in-out lg:m-5"
            />
          ) : (
            <Link href="/signup">
              <AiOutlineUser className="text-2xl text-neutral-300 m-4 mr-2 cursor-pointer hover:text-neutral-50 transition duration-300 ease-in-out lg:m-5" />
            </Link>
          )}

          <Link href="/watchlist">
            <BsBookmarkStarFill
              size={21}
              className="text-2xl text-neutral-300 m-4 ml-2 cursor-pointer hover:text-neutral-50 transition duration-300 ease-in-out lg:m-5 lg:mr-8 lg:ml-3"
            />
          </Link>
        </div>
      </nav>
      <SideBar classes={HamClasses} onClickHandler={HamClickHandler} />
    </>
  );
};

export default Navbar;
