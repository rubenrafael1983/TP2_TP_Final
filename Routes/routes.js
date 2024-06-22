import { Router } from "express";
import usersRoutes from "./usersRoutes.js";

const routes = Router();
routes.use("/user", usersRoutes);

export default routes;
