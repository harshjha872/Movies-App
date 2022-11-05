import jwt from "jsonwebtoken";

const verifyUser = async (req, res) => {
  if (!req.headers.authorization)
    res.status(401).json({ message: "no auth headers and no token" });

  try {
    const token = await req.headers.authorization?.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);
    res.status(200).json({ message: "access allowed", user: user });
  } catch (err) {
    if (err)
      res.status(401).json({
        message: "something went wrong with the token, cant verify user",
      });
  }
};

export default verifyUser;
