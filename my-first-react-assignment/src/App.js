import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Menu";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="AboutPage" element={<AboutPage />} />
          <Route path="ContactPage" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
