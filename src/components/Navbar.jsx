import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Navbar({ lang, setLang }) {
  const isArabic = lang === "ar";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const menuItems = [
    { nameAr: "من نحن", nameEn: "About", path: "/about" },
    { nameAr: "الخدمات", nameEn: "Services", path: "/services" },
    { nameAr: "المطاعم", nameEn: "Dining", path: "/dining" },
    { nameAr: "الغرف", nameEn: "Rooms", path: "/rooms" },
    { nameAr: "العروض", nameEn: "Offers", path: "/offers" },
    { nameAr: "المدونة", nameEn: "Blog", path: "/blog" },
    { nameAr: "اتصل بنا", nameEn: "Contact", path: "/contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-5 flex justify-between items-center ${
        isScrolled
          ? "glass-header-hero"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div
        className={`text-2xl font-heading font-bold tracking-wider transition-colors duration-300 flex items-center gap-2 ${
          isScrolled ? "text-green-600" : "text-white drop-shadow-md"
        }`}
      >
        <Icon icon="mdi:leaf" className={isScrolled ? "text-gold-500" : "text-gold-400"} />
        <Link to="/">YAFOUR</Link>
      </div>

      {/* Desktop Links */}
      <div
        className={`hidden lg:flex gap-8 text-sm font-semibold transition-colors duration-300 ${
          isScrolled ? "text-charcoal-800" : "text-white drop-shadow-md"
        }`}
      >
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="hover:text-gold-500 transition-colors">
            {isArabic ? item.nameAr : item.nameEn}
          </Link>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className={`flex items-center gap-1 text-xs font-bold uppercase transition-colors duration-300 ${
            isScrolled ? "text-charcoal-800 hover:text-gold-500" : "text-white drop-shadow-md hover:text-gold-400"
          }`}
        >
          <Icon icon="mdi:translate" className="text-lg" />
          <span>{isArabic ? "EN" : "AR"}</span>
        </button>

        {/* Reserve Button */}
        <Link to="/book"
          className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold uppercase transition-all duration-300 ${
            isScrolled
              ? "bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-900 shadow-luxury transform hover:-translate-y-0.5 glow-gold"
              : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-green-700"
          }`}
        >
          <Icon icon="mdi:calendar-check" className="text-lg" />
          <span>{isArabic ? "احجز الآن" : "Reserve"}</span>
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden text-2xl transition-colors duration-300 ${
            isScrolled ? "text-charcoal-800" : "text-white drop-shadow-md"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} />
        </button>
      </div>
      
      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-ivory-200/95 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl lg:hidden flex flex-col py-6 px-8 gap-4 font-heading text-charcoal-800">
           {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold border-b border-charcoal-800/5 pb-2 hover:text-gold-600"
            >
              {isArabic ? item.nameAr : item.nameEn}
            </Link>
          ))}
          <Link to="/book" onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-bold text-center glow-gold"
          >
            <Icon icon="mdi:calendar-check" className="text-xl" />
            <span>{isArabic ? "احجز الآن" : "Reserve Now"}</span>
          </Link>
        </div>
      )}
    </motion.nav>
  );
}