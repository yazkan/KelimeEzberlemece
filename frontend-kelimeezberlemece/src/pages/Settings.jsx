import React, { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest.js";
import "./Quiz.scss";

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
    return path
      ? `../../../server-kelimeezberlemece/${path.replace(/\\/g, "/")}`
      : "../assets/react.svg";
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
            src={formatPath(word.picture_name)}
            alt={`${word.word} visual representation`}
            className="word-image"
          />
        </div>
      ))}
      <button className="load-btn">Sınavı Tamamla</button>
    </div>
  );
}

export default Quiz;
