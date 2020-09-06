import express from "express";
import routes from "../routes";
import {
  users,
  editProfile,
  changePassword,
  userDetail,
} from "../controllers/userController";

const userRoute = express.Router();

userRoute.get("/", users);
userRoute.get(routes.editProfile, editProfile);
userRoute.get(routes.changePassword, changePassword);
userRoute.get(routes.userDetail, userDetail);

export default userRoute;
