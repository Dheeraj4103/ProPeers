import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import Users from "../models/auth.js";

export const signUpController = async (req, res) => {
  const { name, email, password } = req.body;
  console.log({ name, email, password });
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(404).json({
        message: "User already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      result: newUser,
      token,
    });
  } catch (error) {
    res.status(500).json("Something went wrong...");
  }
};

export const logInController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User doesn't exists",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const options = {
      expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRY * 24 * 60 * 1000
      ),
      httpOnly: true
  };

    res.status(200).cookie('token', token, options).json({
      result: existingUser,
      token,
    });
  } catch (error) {
    res.status(500).json("Something went wrong...");
  }
};
