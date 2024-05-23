import express from "express";
import cors from "cors";
import loginRegister from "./routes/loginRegisterRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(loginRegister);

app.listen(3000, () => console.log("Server running on port 3000!"));
