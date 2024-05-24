import connection from "../dbConnection.js";
import multer from "multer";
import path from "path";

// Dosya yükleme için Multer konfigürasyonu
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Dosyaların yükleneceği klasör
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

const fileFilter = (req, file, cb) => {
  // Sadece image dosyalarını kabul et
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false); // Dosya geçerli bir resim değilse kaydetme, ama hata da döndürme
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Multer middleware ile dosya yükleme
export const addWord = upload.single("image");

// Yükleme sonrası işlemleri yapacak controller
export const handleAddWord = (req, res) => {
  const { word, translated_word, sentences, user_id } = req.body;
  const picture_name = req.file ? req.file.path : null; // Dosya yüklenmemişse, picture_name'i null olarak ata

  const sequential_knowing = 0; // Varsayılan değer

  const query = `
    INSERT INTO words (word, translated_word, sentences, picture_name, sequential_knowing, user_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    query,
    [
      word,
      translated_word,
      sentences,
      picture_name,
      sequential_knowing,
      user_id,
    ],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Database Error", details: err.message });
      }
      res.status(201).json({ message: "Word added successfully" });
    }
  );
};

export const getWords = (req, res) => {
  // Kullanıcının ID'sini istek parametrelerinden alalım
  const userId = req.params.userId;

  // Güvenlik ve hataları önlemek için, userId'nin varlığını kontrol edelim
  if (!userId) {
    return res.status(400).json({ error: "No user ID provided" });
  }

  // userId'ye göre filtrelenmiş sorgu
  const query = "SELECT * FROM words WHERE user_id = ?";

  connection.query(query, [userId], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Database Error", details: err.message });
    }
    res.json(results);
  });
};
