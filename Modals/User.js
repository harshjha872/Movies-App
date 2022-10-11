import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    Watchlist: [
      {
        showId: {
          type: Number,
          required: true,
        },
        movieName: {
          type: String,
          required: true,
        },
        typeofShow: { type: String, required: true },
        genre: { type: Number, required: true },
        year: { type: String, required: true },
        image: { type: String, required: true },
        bookMarked: { type: Boolean, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", usersSchema);
