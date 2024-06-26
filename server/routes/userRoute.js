import express from "express";
import {
  create,
  getAll,
  getOne,
  update,
  deleteUser,
  login,
  getUser,
  attendClass,
} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getUser/", getUser);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
route.post("/login/", login);
route.put("/user/:id/attendClass", attendClass); // 追加
export default route;
