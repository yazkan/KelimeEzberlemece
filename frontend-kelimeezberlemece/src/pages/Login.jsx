import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Kelime Ezberlemece Giriş</h1>
        <label htmlFor="">Kullanıcı Adı:</label>
        <input
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Şifre:</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Giriş Yap</button>
        <a href="/changepass">Şifremi unuttum.</a>
      </form>
    </div>
  );
}

export default Login;
