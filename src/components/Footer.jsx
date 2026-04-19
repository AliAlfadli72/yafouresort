import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// ─── Guaranteed dark green color (bypasses any Tailwind resolution issues) ───
const BG_DARK  = "#1B3022";  // Forest Green — main
const BG_DEEPER = "#142018"; // Deeper footer shade

export default function Footer({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    brand: {
      tagline: isArabic ? "فخامة الطبيعة.. دمشقية الروح" : "Nature's Luxury, Damascus's Soul",
      desc: isArabic
        ? "في قلب طبيعة يعفور الساحرة، حيث يلتقي نقاء الهواء بهدوء الريف."
        : "In the heart of enchanting Yafour, where pure air meets serene countryside.",
    },
    explore: {
      title: isArabic ? "استكشف" : "Explore",
      links: [
        { label: isArabic ? "من نحن" : "About Us", path: "/about" },
        { label: isArabic ? "الغرف والأجنحة" : "Rooms & Suites", path: "/rooms" },
        { label: isArabic ? "المطاعم" : "Dining", path: "/dining" },
        { label: isArabic ? "الخدمات" : "Services", path: "/services" },
        { label: isArabic ? "العروض" : "Special Offers", path: "/offers" },
        { label: isArabic ? "المدونة" : "Journal", path: "/blog" },
      ],
    },
    services: {
      title: isArabic ? "خدماتنا" : "Our Services",
      items: [
        { icon: "mdi:pool",                  label: isArabic ? "مجمع المسابح"    : "Swimming Pools" },
        { icon: "mdi:spa",                   label: isArabic ? "منتجع صحي / سبا" : "Spa & Wellness" },
        { icon: "mdi:silverware-fork-knife", label: isArabic ? "مطاعم فاخرة"     : "Fine Dining" },
        { icon: "mdi:horse-variant",         label: isArabic ? "نادي الفروسية"   : "Equestrian Club" },
        { icon: "mdi:human-capacity-increase",label: isArabic ? "قاعات مؤتمرات"  : "Conference Halls" },
        { icon: "mdi:party-popper",          label: isArabic ? "قاعات أعراس"     : "Wedding Halls" },
      ],
    },
    contact: {
      title:    isArabic ? "تواصل معنا" : "Contact Us",
      address:  isArabic ? "يعفور، ريف دمشق، سوريا" : "Yafour, Rural Damascus, Syria",
      phone:    "+963 11 123 4567",
      whatsapp: "+963 933 123 456",
      email:    "info@yafouresort.com",
    },
    newsletter: {
      title:       isArabic ? "اشترك في نشرتنا" : "Newsletter",
      placeholder: isArabic ? "بريدك الإلكتروني" : "Your email address",
      btn:         isArabic ? "اشترك" : "Subscribe",
    },
    legal: {
      rights: isArabic
        ? "© 2026 فندق ومنتجع يعفور. جميع الحقوق محفوظة."
        : "© 2026 Yafour Hotel & Resort. All rights reserved.",
    },
  };

  const socials = [
    { icon: "mdi:facebook",  href: "#",                         label: "Facebook" },
    { icon: "mdi:instagram", href: "#",                         label: "Instagram" },
    { icon: "mdi:twitter",   href: "#",                         label: "Twitter" },
    { icon: "mdi:whatsapp",  href: "https://wa.me/963933123456", label: "WhatsApp" },
  ];

  return (
    <footer style={{ background: BG_DARK, color: "#fff" }}>

      {/* ═══ PRE-FOOTER NEWSLETTER ═══ */}
      <div style={{ borderBottom: "1px solid rgba(212,175,55,0.15)" }} className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-1" style={{ color: "#fff" }}>
              {t.newsletter.title}
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              {isArabic ? "احصل على أحدث عروضنا وأخبار المنتجع" : "Get our latest offers and resort news"}
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              id="newsletter-email"
              placeholder={t.newsletter.placeholder}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
              className="flex-1 md:w-72 rounded-full px-5 py-3 text-sm focus:outline-none transition-colors duration-300"
            />
            <button id="newsletter-submit" className="btn-gold text-sm px-6 py-3 whitespace-nowrap !rounded-full">
              {t.newsletter.btn}
            </button>
          </div>
        </div>
      </div>

      {/* ═══ MAIN FOOTER GRID ═══ */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1: Brand ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Icon icon="mdi:leaf" className="text-3xl" style={{ color: "#D4AF37" }} />
              <div>
                <div className="font-heading font-extrabold text-xl tracking-widest" style={{ color: "#fff" }}>
                  YAFOUR
                </div>
                <div className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>
                  {isArabic ? "فندق ومنتجع" : "Hotel & Resort"}
                </div>
              </div>
            </div>
            <p className="text-sm italic font-medium mb-4" style={{ color: "#D4AF37" }}>
              {t.brand.tagline}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              {t.brand.desc}
            </p>
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} icon="mdi:star" style={{ color: "#D4AF37", fontSize: "1rem" }} />
              ))}
            </div>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.65)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.border = "1px solid #D4AF37";
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                  }}
                >
                  <Icon icon={s.icon} className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Explore ── */}
          <div>
            <h4 className="font-heading font-bold text-base mb-6 tracking-wide" style={{ color: "#fff" }}>
              {t.explore.title}
            </h4>
            <ul className="space-y-3">
              {t.explore.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-sm flex items-center gap-2 group transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    <span
                      className="inline-block h-px transition-all duration-300"
                      style={{ width: "12px", background: "rgba(212,175,55,0.4)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <h4 className="font-heading font-bold text-base mb-6 tracking-wide" style={{ color: "#fff" }}>
              {t.services.title}
            </h4>
            <ul className="space-y-3">
              {t.services.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <Icon icon={item.icon} className="text-base flex-shrink-0" style={{ color: "#D4AF37" }} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <h4 className="font-heading font-bold text-base mb-6 tracking-wide" style={{ color: "#fff" }}>
              {t.contact.title}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                <Icon icon="mdi:map-marker" className="text-lg mt-0.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                <span>{t.contact.address}</span>
              </li>
              {[
                { icon: "mdi:phone",         href: `tel:${t.contact.phone}`,           val: t.contact.phone,    ltr: true },
                { icon: "mdi:whatsapp",      href: `https://wa.me/963933123456`,        val: t.contact.whatsapp, ltr: true, blank: true },
                { icon: "mdi:email-outline", href: `mailto:${t.contact.email}`,         val: t.contact.email },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    target={item.blank ? "_blank" : "_self"}
                    rel={item.blank ? "noreferrer" : ""}
                    className="flex items-center gap-3 text-sm transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    <Icon icon={item.icon} className="text-lg flex-shrink-0" style={{ color: "#D4AF37" }} />
                    <span dir={item.ltr ? "ltr" : "auto"}>{item.val}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/book"
              id="footer-book-btn"
              className="mt-8 inline-flex items-center gap-2 btn-gold text-sm px-6 py-2.5"
            >
              <Icon icon="mdi:calendar-check" />
              {isArabic ? "احجز الآن" : "Book Now"}
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ COPYRIGHT BAR ═══ */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: BG_DEEPER }} className="py-5 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          <p>{t.legal.rights}</p>
          <div className="flex items-center gap-1.5" style={{ color: "rgba(212,175,55,0.65)" }}>
            <Icon icon="mdi:leaf" className="text-sm" />
            <span className="text-[10px] tracking-widest uppercase">
              {isArabic ? "صُنع بشغف في سوريا" : "Crafted with passion in Syria"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}