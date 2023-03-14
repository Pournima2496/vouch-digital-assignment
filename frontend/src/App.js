import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./app.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
