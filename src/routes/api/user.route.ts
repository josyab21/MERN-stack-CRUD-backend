import { Router } from "express";
import UserController from "../../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post("/", UserController.createUser);
userRouter.get("/", UserController.getUsers);
userRouter.get("/:userId", UserController.getUserById);
userRouter.patch("/:userId", UserController.updateUserById);
userRouter.delete("/:userId", UserController.deleteUserById);

export default userRouter;
