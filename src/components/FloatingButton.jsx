import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function FloatingButton({ lang }) {
  const isArabic = lang === "ar";
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon:    "mdi:whatsapp",
      label:   isArabic ? "واتساب" : "WhatsApp",
      href:    "https://wa.me/963933123456",
      bg:      "#25D366",
      color:   "#fff",
      id:      "float-whatsapp",
    },
    {
      icon:    "mdi:phone",
      label:   isArabic ? "اتصل بنا" : "Call Us",
      href:    "tel:+963111234567",
      bg:      "#1B3022",
      color:   "#fff",
      id:      "float-phone",
    },
    {
      icon:    "mdi:calendar-check",
      label:   isArabic ? "احجز الآن" : "Book Now",
      href:    "/book",
      bg:      "#D4AF37",
      color:   "#1B3022",
      id:      "float-book",
    },
  ];

  return (
    <div
      className="fixed bottom-6 z-40 flex flex-col-reverse gap-3 items-start"
      style={{ left: "1.5rem" }}
      dir="ltr"
    >
      {/* ── Action Buttons ── */}
      <AnimatePresence>
        {isOpen && actions.map((action, i) => (
          <motion.a
            key={action.id}
            id={action.id}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : "_self"}
            rel={action.href.startsWith("http") ? "noreferrer" : ""}
            initial={{ opacity: 0, x: -20, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.85 }}
            transition={{ delay: i * 0.07, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-3 text-xs font-bold px-4 py-2.5 rounded-full whitespace-nowrap"
            style={{
              background: action.bg,
              color: action.color,
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
            }}
          >
            <Icon icon={action.icon} className="text-base" />
            {action.label}
          </motion.a>
        ))}
      </AnimatePresence>

      {/* ── Main Toggle Button ── */}
      <motion.button
        id="float-main-btn"
        onClick={() => setIsOpen(o => !o)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.08 }}
        aria-label="Contact options"
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "#1B3022",
          color: "#fff",
          boxShadow: "0 4px 24px rgba(27,48,34,0.5), 0 0 0 3px rgba(212,175,55,0.3)",
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:headset"} className="text-2xl" />
        </motion.div>
      </motion.button>
    </div>
  );
}