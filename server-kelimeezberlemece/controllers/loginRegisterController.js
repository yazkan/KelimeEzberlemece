import connection from "../dbConnection.js";

export const login = (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  connection.query(query, [username, password], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    if (result.length === 0) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }
    res.status(200).json(result);
  });
};

export const register = (req, res) => {
  const { username, password, name } = req.body;
  const query = "INSERT INTO users (username, password, name) VALUES (?, ?, ?)";

  connection.query(query, [username, password, name], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        // Check for duplicate entry error
        res.status(409).json({ error: "Username already exists" }); // 409 Conflict
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
      return;
    }
    res.status(200).json({ message: "User created." });
  });
};
export const changepass = (req, res) => {
  const { username, password } = req.body;
  const selectQuery = "SELECT * FROM users WHERE username = ?";
  connection.query(selectQuery, [username], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    const updateQuery = "UPDATE users SET password = ? WHERE username = ?";
    connection.query(updateQuery, [password, username], (err, result) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.status(200).json({ message: "Password updated." });
    });
  });
};
