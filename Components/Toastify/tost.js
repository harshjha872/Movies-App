import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  return (
    <ToastContainer
      toastStyle={{ backgroundColor: "#121212" }}
      position="top-left"
      autoClose={800}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export const toastInitiator = (message, type = "success") => {
  if (type === "success") {
    toast.success(`${message}`, {
      position: "top-left",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (type === "error") {
    toast.error(`${message}`, {
      position: "top-left",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (type === "info") {
    toast.info(`${message}`, {
      position: "top-left",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
