import { useState } from "react";
import Link from "next/link";
import { Toast, toastInitiator } from "../Components/Toastify/tost";
import Navbar from "../Components/Navbar/Navbar";
import getServerSideProps from "../middleware/helpers";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../Store/StateSlices/loginSlice";
import {
  getUsersWatchlist,
  WatchlistActions,
} from "../Store/StateSlices/watchlistSlice";
import { useEffect } from "react";

const Signup = (props) => {
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
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandlerName = (e) => {
    setName(e.target.value);
  };
  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    const response = await fetch(`${process.env.HOST}/api/adduser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        Email,
        password,
      }),
    });
    const data = await response.json();

    switch (data.message) {
      case "User created":
        toastInitiator("user created successfully");
        break;
      case "Invalid user information":
        toastInitiator("Invalid user information", "error");
        break;
      case "User already exist":
        toastInitiator("User already exist", "error");
        break;
      default:
        toastInitiator("error while adding User");
    }
  };
  return (
    <>
      <Navbar />
      <form
        onSubmit={SubmitHandler}
        method="POST"
        className="p-4 lg:w-[35vw] w-[80vw] md:w-[60vw] px-8 mx-auto"
      >
        <Toast />
        <div className=" text-center my-8 ">
          <span className=" text-3xl font-bold underline underline-offset-4">
            Sign up
          </span>
          <Link href="/login">
            <a className="block text-sm text-blue-500 hover:text-blue-300">
              or sign in
            </a>
          </Link>
        </div>

        <div>Name</div>
        <input
          onChange={onChangeHandlerName}
          value={name}
          id="name"
          name="name"
          type="text"
          className="bg-neutral-800 text-white block my-2 w-full p-3 border rounded border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-transparent placeholder-neutral-600 "
          placeholder="Name"
        />
        <div>Email</div>
        <input
          id="Email"
          name="Email"
          type="email"
          onChange={onChangeHandlerEmail}
          value={Email}
          className="bg-neutral-800 text-white block my-2 w-full p-3 border rounded border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-transparent placeholder-neutral-600 "
          placeholder="Email"
        />
        <div>Password</div>
        <input
          onChange={onChangeHandlerPassword}
          value={password}
          id="password"
          name="password"
          type="password"
          className="bg-neutral-800 text-white block my-2 w-full p-3 border rounded border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-transparent placeholder-neutral-600 "
          placeholder="password"
        />
        <div className="flex justify-center my-8">
          <button
            type="submit"
            className="text-white bg-neutral-800 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black transition duration-300 ease-in-out rounded text-lg text-center"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;

export { getServerSideProps };
