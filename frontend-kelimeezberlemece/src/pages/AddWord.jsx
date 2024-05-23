import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function AddWord() {
  const [englishWord, setEnglishWord] = useState("");
  const [turkishEquivalent, setTurkishEquivalent] = useState("");
  const [usageSentences, setUsageSentences] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Dosyanın sadece birincisini alıyoruz
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Formun yeniden yüklenmesini önle
    // Burada form verileriyle bir şeyler yapabilirsiniz
    console.log(englishWord, turkishEquivalent, usageSentences, file);

    navigate("/"); // Form işlemleri tamamlandıktan sonra yönlendirme
  };

  return (
    <div className="login">
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
          onChange={(e) => setUsageSentences(e.target.value)}
        />

        <label htmlFor="file">Resim Dosyası:</label>
        <input id="file" name="file" type="file" onChange={handleFileChange} />

        <button type="submit">Kelimeyi Ekle</button>
      </form>
    </div>
  );
}

export default AddWord;
