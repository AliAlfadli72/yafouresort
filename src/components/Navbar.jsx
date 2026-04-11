import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ lang, setLang }) {
  const isArabic = lang === "ar";
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(isArabic ? "en" : "ar");
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-5 flex justify-between items-center ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div
        className={`text-2xl tracking-[0.3em] font-serif italic transition-colors duration-300 ${
          isScrolled ? "text-black" : "text-white"
        }`}
      ><Link to="/">AZURE
      </Link>
        
      </div>

      {/* Links */}
      <div
        className={`hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        <Link to="/rooms" className="hover:text-[#C5A358] transition">
          {isArabic ? "الأجنحة" : "Suites"}
        </Link>
        <Link to="/dining" className="hover:text-[#C5A358] transition">
          {isArabic ? "المطاعم" : "Dining"}
        </Link>
        <Link to="/offers" className="hover:text-[#C5A358] transition">
          {isArabic ? "العروض" : "Offers"}
        </Link>
        <Link to="/about" className="hover:text-[#C5A358] transition">
          {isArabic ? "حولنا" : "About Us"}
        </Link>
        <Link to="/contact" className="hover:text-[#C5A358] transition">
          {isArabic ? "اتصل بنا" : "Contact"}
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          } hover:text-[#C5A358]`}
        >
          {isArabic ? "EN" : "AR"}
        </button>

        {/* Reserve Button */}
        <Link to="/book"
          className={`px-8 py-2.5 border rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 ${
            isScrolled
              ? "border-black text-black hover:bg-black hover:text-white"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          {isArabic ? "احجز الآن" : "Reserve Now"}
        </Link>
      </div>
    </motion.nav>
  );
}