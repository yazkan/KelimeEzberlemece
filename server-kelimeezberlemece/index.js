import express from "express";
import cors from "cors";
import loginRegister from "./routes/loginRegisterRouter.js";
import word from "./routes/wordRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(loginRegister);
app.use(word);

app.listen(3000, () => console.log("Server running on port 3000!"));
