import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Quiz() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sınav Modülü</h1>
        <label htmlFor="">Kelime 1: Earth</label>
        <div>
          <label htmlFor="">Cevap: </label>
          <input
            name="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <label htmlFor="">Kelime 2: World</label>
        <div>
          <label htmlFor="">Cevap: </label>
          <input
            name="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button type="submit">Onayla</button>
      </form>
    </div>
  );
}

export default Quiz;
