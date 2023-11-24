import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    console.log("in auth");
    const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "") || req.body.token;
    console.log(token);
    let decodeData = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error)
  }
};

export default auth;
