import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Changepass from "./pages/Changepass";
import AddWord from "./pages/AddWord";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepass" element={<Changepass />} />
          <Route path="/addword" element={<AddWord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
