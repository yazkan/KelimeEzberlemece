import { Router } from "express";
import {
  login,
  register,
  changepass,
} from "../controllers/loginRegisterController.js";

const app = Router();

app.post("/login", (req, res) => {
  console.log("Log: Post request /login");
  login(req, res);
});

app.post("/register", (req, res) => {
  console.log("Log: Post request /register");
  register(req, res);
});

app.put("/changepass", (req, res) => {
  console.log("Log: Put request /changepass");
  changepass(req, res);
});

export default app;
