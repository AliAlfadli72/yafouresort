import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Services from "./pages/Services";
import Blog from "./pages/Blog";

function App() {
  // ✅ Default language Arabic
  const [lang, setLang] = useState("ar");
  const { pathname } = useLocation();

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // ✅ Load saved language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // ✅ Save language + update HTML direction
  useEffect(() => {
    localStorage.setItem("lang", lang);

    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  }, [lang]);

  return (
    <div className="font-body min-h-screen flex flex-col text-charcoal-800">
      
      {/* ✅ Navbar with language control */}
      <Navbar lang={lang} setLang={setLang} />

      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/rooms" element={<Rooms lang={lang} />} />
        <Route path="/dining" element={<Dining lang={lang} />} />
        <Route path="/offers" element={<Offers lang={lang} />} />
        <Route path="/about" element={<About lang={lang} />} />
        <Route path="/services" element={<Services lang={lang} />} />
        <Route path="/blog" element={<Blog lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
        <Route path="/book" element={<Book lang={lang} />} />
      </Routes>

      <FloatingButton lang={lang} />
      <Footer lang={lang} />

    </div>
  );
}

export default App;