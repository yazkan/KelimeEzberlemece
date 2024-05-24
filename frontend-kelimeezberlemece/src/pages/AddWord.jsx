import React, { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest.js";
import "./Login.scss";

function AddWord() {
  const [englishWord, setEnglishWord] = useState("");
  const [turkishEquivalent, setTurkishEquivalent] = useState("");
  const [sentences, setSentences] = useState("");
  const [file, setFile] = useState(null);
  const [successAlert, setSuccessAlert] = useState("none");
  const [warningAlert, setWarningAlert] = useState("none");
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessAlert("none");
    }, 2000);

    return () => clearInterval(timer);
  }, [successAlert]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWarningAlert("none");
    }, 2000);

    return () => clearInterval(timer);
  }, [warningAlert]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(englishWord, turkishEquivalent, sentences, file);

    const data = new FormData();
    data.append("word", englishWord);
    data.append("translated_word", turkishEquivalent);
    data.append("sentences", sentences);
    data.append("user_id", user.id);
    data.append("image", file);

    try {
      await newRequest.post("/addword", data);
      setSuccessAlert("flex");
    } catch (error) {
      setWarningAlert("flex");
    }
  };

  return (
    <>
      <div style={{ display: successAlert }} className="alertCss success">
        <p>Kelime Ekleme Başarılı</p>
      </div>

      <div style={{ display: warningAlert }} className="alertCss warning">
        <p>Kelime Ekleme Başarısız</p>
      </div>

      <div
        style={{ marginTop: "-80px", marginBottom: "-20px" }}
        className="login"
      >
        <form style={{ width: "480px" }} onSubmit={handleSubmit}>
          <h1>Yeni Kelime Ekle</h1>
          <label htmlFor="englishWord">İngilizce Kelime:</label>
          <input
            id="englishWord"
            name="englishWord"
            type="text"
            onChange={(e) => setEnglishWord(e.target.value)}
          />

          <label htmlFor="turkishEquivalent">Kelimenin Türkçe Karşılığı:</label>
          <input
            id="turkishEquivalent"
            name="turkishEquivalent"
            type="text"
            onChange={(e) => setTurkishEquivalent(e.target.value)}
          />

          <label htmlFor="usageSentences">Kelimeyi İçeren Cümleler:</label>
          <textarea
            id="usageSentences"
            name="usageSentences"
            style={{ minWidth: "440px", minHeight: "80px" }}
            onChange={(e) => setSentences(e.target.value)}
          />

          <label htmlFor="file">Resim Dosyası:</label>
          <input
            id="file"
            name="file"
            type="file"
            onChange={handleFileChange}
          />
          <button type="submit">Kelimeyi Ekle</button>
        </form>
      </div>
    </>
  );
}

export default AddWord;
