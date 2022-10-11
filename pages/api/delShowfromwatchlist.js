import connectdb from "../../middleware/mongoose";
import User from "../../Modals/User";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const removeShowfromWatchlist = async (req, res) => {
  if (req.method === "POST") {
    const token = req.cookies.token;
    if (!token) res.status(401).json({ message: "User not authenticated" });
    if (!req.body) res.status(404).json({ message: "movie data not found" });

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (!decoded) throw new Error("something went wrong with token");
      const user = await User.findOne({
        _id: mongoose.Types.ObjectId(decoded.id),
      });
      if (!user) throw new Error("user not found");
      const userWatchlist = user.Watchlist;
      const movieToDelete = userWatchlist.find(
        (ele) => ele.movieName === req.body.movieName
      );
      if (!movieToDelete) {
        res.status(404).json({ message: "Show not found in watchlist" });
      } else {
        movieToDelete.bookMarked = false;
        const MoviesAfterDelete = userWatchlist.filter(
          (ele) => ele.movieName !== movieToDelete.movieName
        );

        let newList = [...MoviesAfterDelete];

        await User.findByIdAndUpdate(mongoose.Types.ObjectId(decoded.id), {
          Watchlist: newList,
        });

        res.status(201).json({ message: "show deleted from watchlist" });
      }
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: err });
    }
  }
};

export default connectdb(removeShowfromWatchlist);
