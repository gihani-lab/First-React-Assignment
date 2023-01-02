import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Menu";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="contact" element={"test"} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
