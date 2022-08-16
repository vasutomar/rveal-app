import "./App.css";
import Signup from "./components/pages/Signup/Signup";
import Signin from "./components/pages/Signin/Signin";
import Landing from "./components/pages/Landing/Landing.tsx";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
