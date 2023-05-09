import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Crypto from "./pages/Crypto";
import Rest from "./pages/Rest";
import Tour from "./pages/Tour";

function App() {
  return (
    <div>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/rest" element={<Rest />} />
            <Route path="/tour" element={<Tour />} />
          </Routes>
        </ThemeProvider>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
