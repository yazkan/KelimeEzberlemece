import React, { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest.js";
import "./Quiz.scss";
import defaultImg from "../assets/react.svg";

function Quiz() {
  const [words, setWords] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const response = await newRequest.get("/words/" + user.id);
      setWords(response.data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const formatPath = (path) => {
    console.log("http://localhost:3000/" + path.replace(/\\/g, "/"));
    return "http://localhost:3000/" + path.replace(/\\/g, "/");
  };

  return (
    <div className="words-container">
      {words.map((word, index) => (
        <div key={index} className="word-card">
          <div className="word-info">
            <h2>
              {word.word} : <input type="text" />
            </h2>
            <h3>Cümleler:</h3>
            <p>{word.sentences}</p>
          </div>
          <img
            className="word-image"
            src={word.picture_name ? formatPath(word.picture_name) : defaultImg}
            alt={`${word.word} visual representation`}
          />
        </div>
      ))}
      <button className="load-btn">Sınavı Tamamla</button>
    </div>
  );
}

export default Quiz;
