const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_KEY } = process.env;
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next(); //allow the request to continue
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; //Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(token, JWT_KEY);
    req.userData = { userId: decodedToken.userId }; //add data to request
    next(); //let the request continue
  } catch (err) {
    return next(new HttpError("Authentication failed!", 403));
  }
};
