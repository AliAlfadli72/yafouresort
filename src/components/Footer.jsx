import { Link } from "react-router-dom";

export default function Footer({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    address: isArabic
      ? "1224 شارع سكاي لاين\nدبي، الإمارات العربية المتحدة\n+971 4 000 0000"
      : "1224 Skyline Boulevard\nDubai, United Arab Emirates\n+971 4 000 0000",

    navigate: isArabic ? "التصفح" : "Navigate",
    suites: isArabic ? "الأجنحة" : "The Suites",
    dining: isArabic ? "المطاعم" : "Gastronomy",
    spa: isArabic ? "السبا" : "Wellness Spa",
    events: isArabic ? "الفعاليات الخاصة" : "Private Events",

    connect: isArabic ? "تواصل" : "Connect",

    newsletter: isArabic ? "النشرة البريدية" : "Newsletter",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    join: isArabic ? "انضم" : "Join",

    rights: isArabic
      ? "© 2026 أزور كراون العالمية. جميع الحقوق محفوظة."
      : "© 2026 Azure Crown International. All Rights Reserved.",

    privacy: isArabic ? "سياسة الخصوصية" : "Privacy Policy",
    terms: isArabic ? "الشروط والأحكام" : "Terms",
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-32">

        {/* Logo & Address */}
        <div className="md:col-span-1">
          <h3 className="text-3xl tracking-[0.4em] font-serif italic mb-10">
            AZURE
          </h3>

          <p className="text-gray-500 text-[11px] leading-loose tracking-[0.2em] uppercase whitespace-pre-line">
            {t.address}
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#C5A358] mb-10 font-bold">
            {t.navigate}
          </h4>

          <ul className="space-y-5 text-[11px] text-gray-500 uppercase tracking-widest">
            <li>
              <Link to="/rooms" className="hover:text-white transition">
                {t.suites}
              </Link>
            </li>
            <li>
              <Link to="/dining" className="hover:text-white transition">
                {t.dining}
              </Link>
            </li>
            <li>
              <Link to="/spa" className="hover:text-white transition">
                {t.spa}
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-white transition">
                {t.events}
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#C5A358] mb-10 font-bold">
            {t.connect}
          </h4>

          <ul className="space-y-5 text-[11px] text-gray-500 uppercase tracking-widest">
            <li>
              <Link to="#" className="hover:text-white transition">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition">
                Facebook
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#C5A358] mb-10 font-bold">
            {t.newsletter}
          </h4>

          <div className="flex border-b border-white/20 pb-4">
            <input
              type="email"
              placeholder={t.email.toUpperCase()}
              className="bg-transparent text-[10px] w-full outline-none tracking-widest"
            />
            <button className="text-[10px] uppercase tracking-[0.3em] ml-4 hover:text-[#C5A358] transition">
              {t.join}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-50">
        <p className="text-[9px] tracking-[0.3em] uppercase">
          {t.rights}
        </p>

        <div className="flex gap-10 text-[9px] tracking-[0.3em] uppercase">
          <Link to="/privacy" className="hover:text-white transition">
            {t.privacy}
          </Link>
          <Link to="/terms" className="hover:text-white transition">
            {t.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}