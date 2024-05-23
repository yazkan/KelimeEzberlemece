import React, { useState } from "react";
import newRequest from "../../utils/newRequest.js";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/login", {
        username: username,
        password: password,
      });

      localStorage.setItem(
        "currentUser",
        JSON.stringify(res.data[0] ? res.data[0] : null)
      );
      navigate("/");
    } catch (err) {
      setError("Error: " + err.response.data.error);
    }
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
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
