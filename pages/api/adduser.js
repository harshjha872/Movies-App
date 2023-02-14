import connectdb from "../../middleware/mongoose";
import User from "../../Modals/User";
const CryptoJS = require("crypto-js");

const addUser = async (req, res) => {
  if (req.method === "POST") {
    if (!req.body.Email || !req.body.password)
      res.json({ message: "Invalid user information" });
    try {
      const userAlreadyExist = await User.findOne({ email: req.body.Email });

      if (userAlreadyExist) {
        res.json({ message: "User already exist" });
        throw new Error("User already exist");
      }

      const HashedPassword = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();

      let newuser = new User({
        name: req.body.name,
        email: req.body.Email,
        password: HashedPassword,
        Watchlist: req.body.Watchlist,
      });

      await newuser.save();

      res.status(201).json({
        message: "User created",
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.json({ message: "Wrong req type" });
  }
};

export default connectdb(addUser);
