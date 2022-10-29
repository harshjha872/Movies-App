import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import getServerSideProps from "../middleware/helpers";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toast, toastInitiator } from "../Components/Toastify/tost";
import { loginStateActions } from "../Store/StateSlices/loginSlice";
import Router from "next/router";
import { WatchlistActions } from "../Store/StateSlices/watchlistSlice";
import { getUsersWatchlist } from "../Store/StateSlices/watchlistSlice";

const Login = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.isUserloggedIn === true) {
      dispatch(loginStateActions.UserLoggedIn());
      dispatch(getUsersWatchlist());
      Router.push("/");
    } else {
      dispatch(loginStateActions.UserLoggedOut());
      dispatch(WatchlistActions.emptyWatchlist());
    }
  }, [dispatch, props.isUserloggedIn]);
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(JSON.stringify({ Email, password }));
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/loginuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email,
          password,
        }),
      }
    );
    const data = await response.json();
    if (data.message === "Successful login") {
      toastInitiator("logged in successfully", "success");
      Router.push("/");
    }
  };

  return (
    <>
      <Toast />
      <Navbar />
      <form
        onSubmit={SubmitHandler}
        method="POST"
        className="p-4 lg:w-[35vw] w-[80vw] md:w-[60vw] px-8 mx-auto"
      >
        <div className="text-3xl text-center my-8 font-bold underline underline-offset-4">
          Login
        </div>
        <div>Email</div>
        <input
          Emai
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
        <div className="text-sm flex justify-end my-4">
          <a
            href=""
            className="font-medium text-neutral-600 hover:text-neutral-500"
          >
            Forgot your password?
          </a>
        </div>
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

export default Login;

export { getServerSideProps };
