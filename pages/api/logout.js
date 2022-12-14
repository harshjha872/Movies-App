import { serialize } from "cookie";

const logoutHandler = async (req, res) => {
  const { cookies } = req;

  const jwt = cookies.token;

  if (!jwt) {
    return res.json({ message: "already logged out" });
  } else {
    const serialised = serialize("token", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
};

export default logoutHandler;
