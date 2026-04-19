import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Navbar({ lang, setLang }) {
  const isArabic = lang === "ar";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(isArabic ? "en" : "ar");
  };

  const menuItems = [
    { nameAr: "من نحن",    nameEn: "About",   path: "/about" },
    { nameAr: "الخدمات",  nameEn: "Services", path: "/services" },
    { nameAr: "المطاعم",  nameEn: "Dining",   path: "/dining" },
    { nameAr: "الغرف",    nameEn: "Rooms",    path: "/rooms" },
    { nameAr: "العروض",   nameEn: "Offers",   path: "/offers" },
    { nameAr: "المدونة",  nameEn: "Journal",  path: "/blog" },
    { nameAr: "اتصل بنا", nameEn: "Contact",  path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* ===== FLOATING NAVBAR ===== */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "glass-header-hero py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6">

          {/* ===== LOGO ===== */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className={`transition-colors duration-500 ${
                isScrolled ? "text-forest-600" : "text-gold-400"
              }`}
            >
              <Icon icon="mdi:leaf" className="text-3xl" />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-heading font-extrabold text-xl tracking-[0.12em] transition-colors duration-500 ${
                  isScrolled ? "text-forest-600" : "text-white drop-shadow-lg"
                }`}
              >
                YAFOUR
              </span>
              <span
                className={`text-[9px] tracking-[0.3em] uppercase font-light transition-colors duration-500 ${
                  isScrolled ? "text-gold-700" : "text-gold-400"
                }`}
              >
                {isArabic ? "فندق ومنتجع" : "Hotel & Resort"}
              </span>
            </div>
          </Link>

          {/* ===== DESKTOP LINKS ===== */}
          <div className="hidden lg:flex items-center gap-7 text-[13px] font-semibold">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`luxury-link transition-colors duration-300 whitespace-nowrap ${
                  isActive(item.path)
                    ? "text-gold-500"
                    : isScrolled
                    ? "text-charcoal-800 hover:text-gold-600"
                    : "text-white/90 hover:text-gold-300 drop-shadow-md"
                }`}
              >
                {isArabic ? item.nameAr : item.nameEn}
              </Link>
            ))}
          </div>

          {/* ===== RIGHT ACTIONS ===== */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border rounded-full px-3 py-1.5 ${
                isScrolled
                  ? "border-forest-600/30 text-forest-600 hover:border-forest-600 hover:bg-forest-600 hover:text-white"
                  : "border-white/30 text-white hover:border-white/60 hover:bg-white/10"
              }`}
            >
              {isArabic ? "EN" : "ع"}
            </button>

            {/* Book Now CTA */}
            <Link
              to="/book"
              id="navbar-book-btn"
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wide uppercase transition-all duration-500 ${
                isScrolled
                  ? "bg-gradient-gold text-white glow-gold hover:shadow-luxury-lg hover:-translate-y-0.5"
                  : "border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-white"
              }`}
            >
              <Icon icon="mdi:calendar-check" className="text-base" />
              <span>{isArabic ? "احجز الآن" : "Reserve"}</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className={`lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center transition-colors duration-300 ${
                isScrolled ? "text-charcoal-800" : "text-white"
              }`}
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ===== FULLSCREEN MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-y-auto"
            style={{
              background: "linear-gradient(160deg, #1B3022 0%, #142016 55%, #0d1a0f 100%)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white text-2xl hover:rotate-90 hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
            >
              <Icon icon="mdi:close" />
            </button>

            {/* Logo in Menu */}
            <div className="mb-8 flex items-center gap-3">
              <Icon icon="mdi:leaf" className="text-4xl text-gold-400" />
              <div>
                <div className="font-heading font-extrabold text-2xl text-white tracking-widest">YAFOUR</div>
                <div className="text-[9px] tracking-[0.3em] text-gold-400 uppercase">
                  {isArabic ? "فندق ومنتجع" : "Hotel & Resort"}
                </div>
              </div>
            </div>

            {/* Gold Divider */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-px" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }} />
              <div className="w-2 h-2 rounded-full animate-pulse-gold" style={{ background: "#D4AF37" }} />
              <div className="w-12 h-px" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }} />
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col items-center gap-7">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative block text-center"
                  >
                    <span
                      className={`text-2xl md:text-3xl font-heading font-bold transition-colors duration-300 ${
                        isActive(item.path) ? "text-gold-400" : "text-white hover:text-gold-300"
                      }`}
                      style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                    >
                      {isArabic ? item.nameAr : item.nameEn}
                    </span>
                    {/* Gold underline on hover */}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-400 rounded-full" style={{ background: "#D4AF37" }} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Book Now in Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold inline-flex items-center gap-3 text-sm"
              >
                <Icon icon="mdi:calendar-check" className="text-lg" />
                {isArabic ? "احجز الآن" : "Reserve Now"}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}