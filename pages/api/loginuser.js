import connectdb from "../../middleware/mongoose";
import User from "../../Modals/User";
import jwt from "jsonwebtoken";
const CryptoJS = require("crypto-js");
import { serialize } from "cookie";

const loginHandler = async (req, res) => {
  if (req.method === "POST") {
    if (!req.body) {
      res
        .status(201)
        .json({ message: "No email and password found in the body" });
    }
    const { Email, password } = req.body;
    if (!Email) res.status(201).json({ message: "no email found" });
    if (!password) res.status(201).json({ message: "no password found" });
    const user = await User.findOne({ email: Email });
    if (!user) res.status(200).json({ message: "User does not exist" });

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (password !== decryptedPassword)
      res.status(200).json({ message: "Incorrect Password" });

    const payload = {
      id: user._id,
      name: user.name,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "3d",
    });

    const serialised = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(201).json({ message: "Successful login" });
  } else {
    res.status(201).json({ message: "Invalid req type" });
  }
};

export default connectdb(loginHandler);
