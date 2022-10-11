import connectdb from "../../middleware/mongoose";
import User from "../../Modals/User";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const addtowatchlist = async (req, res) => {
  if (req.method === "POST") {
    const token = req.cookies.token;
    if (!token) res.status(401).json({ message: "User not authenticated" });

    if (!req.body) res.status(404).json({ message: "movie data not found" });

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findOne({
        _id: mongoose.Types.ObjectId(decoded.id),
      });
      if (!user) throw new Error("user not found");
      const userWatchlist = user.Watchlist;
      const currentShow = userWatchlist.find(
        (ele) => ele.movieName === req.body.movieName
      );
      if (currentShow) {
        res.status(200).json({ message: "show is already in watchlist" });
      } else {
        userWatchlist.push({
          showId: req.body.showId,
          movieName: req.body.movieName,
          typeofShow: req.body.typeofShow,
          genre: req.body.genre,
          year: req.body.year,
          image: req.body.image,
          bookMarked: true,
        });
        await User.findByIdAndUpdate(mongoose.Types.ObjectId(decoded.id), {
          Watchlist: userWatchlist,
        });
        res.status(201).json({ message: "Watchlist updated" });
      }
    } catch (err) {
      console.log(err);
      res.json({ message: err });
    }
  }
};

export default connectdb(addtowatchlist);
