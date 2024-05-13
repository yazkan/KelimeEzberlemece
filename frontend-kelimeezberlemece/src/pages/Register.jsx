import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

//bu sayfa güncellenecek!!!!

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked ? 1 : 0 };
    });
  };
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Yeni bir Kelime Ezberlemece hesabı oluştur</h1>
          <label htmlFor="">Kullanıcı Adı:</label>
          <input required name="username" type="text" onChange={handleChange} />
          <label htmlFor="">Email:</label>
          <input required name="email" type="email" onChange={handleChange} />
          <label htmlFor="">Şifre:</label>
          <input
            required
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button type="submit">Kayıt ol</button>
        </div>
        <div className="right">
          <h1>İş ilanı vermek için bu alanı işaretleyin</h1>
          <div className="toggle">
            <label htmlFor="">İş İlanı vermek istiyorum</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="right">
            <label htmlFor="">İsim: </label>
            <input required name="name" type="text" onChange={handleChange} />
          </div>
          <label htmlFor="">Telefon:</label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="+90 5XX XXX XX XX"
            pattern="\+90\s*[0-9]{3}\s*[0-9]{3}\s*[0-9]{2}\s*[0-9]{2}"
            onChange={handleChange}
          />
          <label htmlFor="">Hakkımda:</label>
          <textarea
            placeholder="İşiniz ve kendiniz hakkında kısaca bahsedin"
            name="info"
            rows="8"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
