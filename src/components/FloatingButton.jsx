import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FloatingButton({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    book: isArabic ? "احجز الآن" : "Book Now",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed bottom-6 z-50 ${
        isArabic ? "left-6" : "right-6"
      }`}
    >
      <Link
        to="/book"
        className="bg-[#C5A358] text-black px-8 py-4 rounded-full shadow-xl uppercase text-[11px] tracking-[0.3em] font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300"
      >
        {t.book}
      </Link>
    </motion.div>
  );
}