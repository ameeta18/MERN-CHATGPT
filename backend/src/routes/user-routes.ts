import { Router } from "express";
import { getAllUsers, userLogin, userLogout, userSignup, verifyUser } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";
const userRoutes=Router();
userRoutes.get("/",getAllUsers);
userRoutes.post("/signup",validate(signupValidator),userSignup); //for signup
userRoutes.post("/login",validate(loginValidator),userLogin); 
userRoutes.get("/auth-status", verifyToken,verifyUser); // fetch if the user's cookies are valid then skip login
userRoutes.get("/logout", verifyToken, userLogout);
export default userRoutes;