import { Router } from "express";
import userRouter from "./api/user.route";

const indexRoute: Router = Router();

indexRoute.use("/user", userRouter);

export default indexRoute;
