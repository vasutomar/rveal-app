import "./App.css";
import Signup from "./components/pages/Signup/Signup.tsx";
import Signin from "./components/pages/Signin/Signin.tsx";
import Landing from "./components/pages/Landing/Landing.tsx";
import Home from "./components/pages/Home/Home.tsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
