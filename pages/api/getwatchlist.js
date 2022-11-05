import jwt from "jsonwebtoken";
import User from "../../Modals/User";
import mongoose from "mongoose";
import connectdb from "../../middleware/mongoose";

const getWatchlist = async (req, res) => {
  if (!(await req.cookies.token))
    res
      .status(401)
      .json({ message: "User not authenticated to get watchlist" });

  const token = await req.cookies.token;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) throw new Error("something went wrong with the token");
    const user = await User.findOne({
      _id: mongoose.Types.ObjectId(decoded.id),
    });
    if (!user) throw new Error("user not found");
    const userWatchlist = user.Watchlist;
    res.status(200).json({ userWatchlist: userWatchlist });
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
};

export default connectdb(getWatchlist);
