import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Changepass() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Yeni Şifre Belirle</h1>
        <label htmlFor="">Kullanıcı Adı:</label>
        <input
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Yeni Şifre:</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">Yeni Şifreyi Tekrarla:</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Onayla</button>
      </form>
    </div>
  );
}

export default Changepass;
