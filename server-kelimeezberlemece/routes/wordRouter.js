import { Router } from "express";
import {
  addWord,
  handleAddWord,
  getWords,
} from "../controllers/wordController.js";

const wordRouter = Router();

wordRouter.post("/addword", addWord, handleAddWord);
wordRouter.get("/words/:userId", getWords);

export default wordRouter;
