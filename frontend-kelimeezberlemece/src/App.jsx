import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Changepass from "./pages/Changepass";
import AddWord from "./pages/AddWord";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
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
