import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Footer({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    address: isArabic
      ? "منتجع وفندق يعفور\nطريق بيروت دمشق الدولي، يعفور\nدمشق، ريف دمشق، سوريا\n+963 11 000 0000"
      : "Yafour Hotel & Resort\nBeirut-Damascus Highway, Yafour\nDamascus, Syria\n+963 11 000 0000",
    navigate: isArabic ? "تصفح الموقع" : "Navigate",
    menu: [
      { nameAr: "من نحن", nameEn: "About Us", path: "/about" },
      { nameAr: "الخدمات", nameEn: "Services", path: "/services" },
      { nameAr: "الغرف", nameEn: "Rooms", path: "/rooms" },
      { nameAr: "اتصل بنا", nameEn: "Contact", path: "/contact" }
    ],
    connect: isArabic ? "تواصل معنا" : "Connect",
    newsletter: isArabic ? "النشرة البريدية" : "Newsletter",
    newsletterDesc: isArabic ? "اشترك لتصلك أحدث عروض الفخامة في يعفور." : "Subscribe to receive the latest luxury offers.",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    join: isArabic ? "اشتراك" : "Subscribe",
    rights: isArabic
      ? "© 2026 فندق ومنتجع يعفور. جميع الحقوق محفوظة."
      : "© 2026 Yafour Hotel & Resort. All Rights Reserved.",
    privacy: isArabic ? "سياسة الخصوصية" : "Privacy Policy",
    terms: isArabic ? "الشروط والأحكام" : "Terms",
  };

  return (
    <footer className="bg-ivory-200 text-charcoal-800 pt-32 pb-16 px-6 md:px-12 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-24">

        {/* Logo & Address */}
        <div className="md:col-span-1">
          <h3 className="text-3xl font-heading font-bold flex items-center gap-2 mb-8 text-green-700">
            <Icon icon="mdi:leaf" className="text-gold-500" />
            YAFOUR
          </h3>
          <p className="text-charcoal-800/70 text-sm leading-relaxed font-body whitespace-pre-line">
            {t.address}
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold-600 mb-8 font-bold border-b border-gold-500/20 pb-4 inline-block">
            {t.navigate}
          </h4>
          <ul className="space-y-4 text-sm font-semibold text-charcoal-800/80">
            {t.menu.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="hover:text-green-600 flex items-center gap-2 transition">
                  <Icon icon={isArabic ? "mdi:chevron-left" : "mdi:chevron-right"} className="text-gold-500" />
                  {isArabic ? item.nameAr : item.nameEn}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold-600 mb-8 font-bold border-b border-gold-500/20 pb-4 inline-block">
            {t.connect}
          </h4>
          <ul className="space-y-4 text-sm font-semibold text-charcoal-800/80">
            <li>
              <a href="#" className="hover:text-green-600 flex items-center gap-2 transition">
                <Icon icon="mdi:instagram" className="text-xl text-gold-500" />
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 flex items-center gap-2 transition">
                <Icon icon="mdi:facebook" className="text-xl text-gold-500" />
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 flex items-center gap-2 transition">
                <Icon icon="mdi:linkedin" className="text-xl text-gold-500" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold-600 mb-8 font-bold border-b border-gold-500/20 pb-4 inline-block">
            {t.newsletter}
          </h4>
          <p className="text-sm text-charcoal-800/70 mb-6">
            {t.newsletterDesc}
          </p>
          <div className="flex border border-gold-500/30 rounded-full overflow-hidden bg-white">
            <input
              type="email"
              placeholder={t.email}
              className="bg-transparent text-sm w-full outline-none px-4 py-3 placeholder:text-gray-400"
            />
            <button className="bg-green-600 text-white text-sm font-bold px-6 hover:bg-green-700 transition">
              {t.join}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gold-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 opacity-80">
        <p className="text-sm font-bold text-green-700">
          {t.rights}
        </p>
        <div className="flex gap-8 text-sm font-semibold">
          <Link to="/privacy" className="hover:text-gold-600 transition">
            {t.privacy}
          </Link>
          <Link to="/terms" className="hover:text-gold-600 transition">
            {t.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}