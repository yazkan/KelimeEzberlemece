import React, { useState } from "react";
import newRequest from "../../utils/newRequest.js";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user", user);
    try {
      await newRequest.post("/register", {
        username: user.username,
        password: user.password,
        name: user.name,
      });
      navigate("/login");
    } catch (err) {
      setError("Error: " + err.response.data.error);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Yeni bir Kelime Ezberlemece hesabı oluştur</h1>
          <label htmlFor="">Ad Soyad:</label>
          <input required name="name" type="text" onChange={handleChange} />
          <label htmlFor="">Kullanıcı Adı:</label>
          <input required name="username" type="text" onChange={handleChange} />
          <label htmlFor="">Şifre:</label>
          <input
            required
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button type="submit">Kayıt ol</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Register;
