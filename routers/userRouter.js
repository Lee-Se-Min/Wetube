import express from "express";
import routes from "../routes";

const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.send("user index");
});
userRoute.get(routes.editProfile, (req, res) => {
  res.send("edit profile");
});
userRoute.get(routes.changePassword, (req, res) => {
  res.send("change password");
});
userRoute.get(routes.userDetail, (req, res) => {
  res.send("user detail");
});

export default userRoute;
