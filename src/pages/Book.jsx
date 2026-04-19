import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

/* ── Scroll reveal ── */
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Brand palette (inline-safe hex) ── */
const C = {
  green:  "#1B3022",
  greenM: "#2d6a4f",
  gold:   "#D4AF37",
  goldL:  "#E8C840",
  ivory:  "#F9F9F9",
  ivoryW: "#FAF7F2",
  text:   "#1C1C1C",
  muted:  "#6B6B6B",
};

/* ── Rooms data factory ── */
const ROOMS = (isArabic) => [
  {
    id: 1,
    name:  isArabic ? "الفيلا الرئاسية" : "Presidential Villa",
    badge: isArabic ? "الأكثر طلباً" : "Most Booked",
    price: 1500,
    size:  "200 m²",
    guests: 6,
    view:  isArabic ? "إطلالة بانورامية على المسبح" : "Panoramic Pool View",
    img:   "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=900&q=78&fm=webp&auto=format",
    features: isArabic ? ["مسبح خاص", "خادم شخصي", "3 غرف نوم", "مطبخ مجهز"] : ["Private Pool", "Butler Service", "3 Bedrooms", "Full Kitchen"],
    icon: "mdi:home-city",
  },
  {
    id: 2,
    name:  isArabic ? "الجناح الملكي" : "Royal Suite",
    badge: null,
    price: 800,
    size:  "120 m²",
    guests: 4,
    view:  isArabic ? "إطلالة ساحرة على الحدائق" : "Enchanting Garden View",
    img:   "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=78&fm=webp&auto=format",
    features: isArabic ? ["صالة استقبال", "شرفة واسعة", "جاكوزي", "إفطار مجاني"] : ["Reception Room", "Large Balcony", "Jacuzzi", "Free Breakfast"],
    icon: "mdi:crown",
  },
  {
    id: 3,
    name:  isArabic ? "غرفة ديلوكس تنفيذية" : "Executive Deluxe",
    badge: isArabic ? "الأوفر" : "Best Value",
    price: 300,
    size:  "45 m²",
    guests: 2,
    view:  isArabic ? "إطلالة المنتجع الداخلية" : "Inner Resort View",
    img:   "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=78&fm=webp&auto=format",
    features: isArabic ? ["سرير كينغ", "مكتب عمل", "آلة قهوة", "تلفزيون 65 بوصة"] : ["King Bed", "Work Desk", "Coffee Machine", "65\" Smart TV"],
    icon: "mdi:bed-king",
  },
];

/* ═══════════════════════════════════════════════════ */
export default function Book({ lang }) {
  const isArabic = lang === "ar";
  const dir = isArabic ? "rtl" : "ltr";
  const rooms = ROOMS(isArabic);

  /* step: 1=search  2=rooms  3=checkout  4=success */
  const [step, setStep]               = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [searchData, setSearchData]   = useState({ arrival: "", departure: "", guests: "2" });
  const [form, setForm]               = useState({ name: "", email: "", phone: "", notes: "" });
  const [formErrors, setFormErrors]   = useState({});

  const resultsRef  = useRef(null);
  const checkoutRef = useRef(null);

  /* ── Computed values ── */
  const nights = (() => {
    if (!searchData.arrival || !searchData.departure) return 1;
    const d = (new Date(searchData.departure) - new Date(searchData.arrival)) / 86400000;
    return d > 0 ? d : 1;
  })();

  /* ── Handlers ── */
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setStep(2);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }, 900);
  };

  const handleSelect = (room) => {
    setSelectedRoom(room);
    setStep(3);
    setTimeout(() => checkoutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = true;
    if (!form.phone.trim() || form.phone.length < 7) e.phone = true;
    setFormErrors(e);
    return !Object.keys(e).length;
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStep(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── Labels ── */
  const t = {
    heroTitle: isArabic ? "احجز إقامتك الفاخرة" : "Reserve Your Luxury Stay",
    heroSub:   isArabic ? "بوابتك نحو تجربة استثنائية في أحضان طبيعة يعفور الساحرة." : "Your gateway to an exceptional experience in Yafour's enchanting nature.",
    arrival:   isArabic ? "تاريخ الوصول" : "Check-in",
    departure: isArabic ? "تاريخ المغادرة" : "Check-out",
    guests:    isArabic ? "عدد الضيوف" : "Guests",
    search:    isArabic ? "البحث" : "Search",
    perNight:  isArabic ? "/ الليلة" : "/ night",
    select:    isArabic ? "اختر هذا الجناح" : "Select Suite",
    back:      isArabic ? "العودة" : "Back",
    guestInfo: isArabic ? "بيانات الضيف" : "Guest Information",
    name:      isArabic ? "الاسم الكامل" : "Full Name",
    email:     isArabic ? "البريد الإلكتروني" : "Email Address",
    phone:     isArabic ? "رقم الهاتف" : "Phone Number",
    notes:     isArabic ? "طلبات خاصة" : "Special Requests",
    confirm:   isArabic ? "تأكيد الحجز" : "Confirm Booking",
    summary:   isArabic ? "ملخص الإقامة" : "Stay Summary",
    total:     isArabic ? "الإجمالي" : "Total",
    nights:    isArabic ? "ليالٍ" : "nights",
    available: isArabic ? "الأجنحة المتاحة" : "Available Suites",
    successT:  isArabic ? "تم تأكيد حجزك! 🎉" : "Booking Confirmed! 🎉",
    successS:  isArabic ? "سيصلك تأكيد عبر البريد. نتطلع لاستضافتك في يعفور." : "A confirmation email is on its way. We look forward to welcoming you.",
    bookingRef:isArabic ? "رقم الحجز" : "Booking Reference",
    newBook:   isArabic ? "حجز جديد" : "New Booking",
    goHome:    isArabic ? "العودة للرئيسية" : "Back to Home",
  };

  /* ── Step labels ── */
  const STEPS = [
    { n: 1, label: isArabic ? "البحث"    : "Search",  icon: "mdi:magnify" },
    { n: 2, label: isArabic ? "الاختيار" : "Select",  icon: "mdi:bed-king-outline" },
    { n: 3, label: isArabic ? "البيانات" : "Details", icon: "mdi:account-edit" },
    { n: 4, label: isArabic ? "التأكيد"  : "Confirm", icon: "mdi:check-decagram" },
  ];

  /* ── Booking ref number (stable per session) ── */
  const [bookingRef] = useState(
    () => "YF-" + Math.random().toString(36).slice(2, 8).toUpperCase()
  );

  return (
    <div dir={dir} style={{ background: C.ivoryW, color: C.text, minHeight: "100vh" }} className="antialiased">

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative flex flex-col overflow-hidden" style={{ minHeight: "100svh" }}>

        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=78&fm=webp&auto=format"
          alt="Yafour Resort"
          className="absolute inset-0 w-full h-full object-cover animate-cinematic-zoom"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(170deg,rgba(13,26,15,.9) 0%,rgba(27,48,34,.65) 55%,rgba(13,26,15,.92) 100%)" }}
        />

        {/* Inner */}
        <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-lg mx-auto px-5 pt-28 pb-10 text-center">

          {/* Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[.2em] mb-5"
            style={{ border: "1px solid rgba(212,175,55,.45)", color: C.gold, background: "rgba(27,48,34,.6)" }}
          >
            <Icon icon="mdi:star-four-points" className="text-[9px]" />
            <span>Yafour Resort</span>
            <Icon icon="mdi:star-four-points" className="text-[9px]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading font-bold leading-snug mb-3"
            style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)", color: "#fff", textShadow: "0 4px 24px rgba(0,0,0,.55)" }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm leading-relaxed mb-8 max-w-xs"
            style={{ color: "rgba(255,255,255,.75)" }}
          >
            {t.heroSub}
          </motion.p>

          {/* ════ BOOKING WIDGET (Mobile-first 2×2) ════ */}
          <motion.form
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            onSubmit={handleSearch}
            className="w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#fff", border: "1px solid rgba(212,175,55,.2)" }}
          >
            {/* Row 1 — Dates (always 2 columns) */}
            <div className="grid grid-cols-2" style={{ borderBottom: "1px solid rgba(0,0,0,.07)" }}>

              <div className="px-4 pt-4 pb-3" style={{ borderRight: "1px solid rgba(0,0,0,.07)" }}>
                <label className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: C.green }}>
                  <Icon icon="mdi:calendar-arrow-right" style={{ fontSize: ".8rem" }} />
                  {t.arrival}
                </label>
                <input
                  type="date" required
                  className="w-full bg-transparent outline-none text-sm font-bold"
                  style={{ color: C.text }}
                  value={searchData.arrival}
                  onChange={e => setSearchData(p => ({ ...p, arrival: e.target.value }))}
                />
              </div>

              <div className="px-4 pt-4 pb-3">
                <label className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: "#c0392b" }}>
                  <Icon icon="mdi:calendar-arrow-left" style={{ fontSize: ".8rem" }} />
                  {t.departure}
                </label>
                <input
                  type="date" required
                  className="w-full bg-transparent outline-none text-sm font-bold"
                  style={{ color: C.text }}
                  value={searchData.departure}
                  onChange={e => setSearchData(p => ({ ...p, departure: e.target.value }))}
                />
              </div>
            </div>

            {/* Row 2 — Guests + Search button */}
            <div className="grid grid-cols-2">

              <div className="px-4 pt-3 pb-4" style={{ borderRight: "1px solid rgba(0,0,0,.07)" }}>
                <label className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: C.gold }}>
                  <Icon icon="mdi:account-group" style={{ fontSize: ".8rem" }} />
                  {t.guests}
                </label>
                <select
                  className="w-full bg-transparent outline-none text-sm font-bold appearance-none"
                  style={{ color: C.text }}
                  value={searchData.guests}
                  onChange={e => setSearchData(p => ({ ...p, guests: e.target.value }))}
                >
                  {[1,2,3,4,5,6].map(n => (
                    <option key={n} value={n}>
                      {n < 10 ? `0${n}` : n} {isArabic ? "ضيف" : n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="flex items-center justify-center gap-2 py-5 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                style={{ background: isSearching ? C.greenM : C.green, color: "#fff" }}
              >
                {isSearching
                  ? <Icon icon="line-md:loading-twotone-loop" className="text-2xl" />
                  : <><Icon icon="mdi:magnify" className="text-base" /><span>{t.search}</span></>
                }
              </button>
            </div>
          </motion.form>

          {/* Trust strip */}
          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            {[
              { icon: "mdi:shield-check",       label: isArabic ? "حجز آمن" : "Secure Booking" },
              { icon: "mdi:tag-heart",           label: isArabic ? "أفضل سعر" : "Best Price" },
              { icon: "mdi:calendar-remove",     label: isArabic ? "إلغاء مجاني" : "Free Cancel" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-1 text-[11px] font-bold" style={{ color: "rgba(255,255,255,.70)" }}>
                <Icon icon={b.icon} style={{ color: C.gold, fontSize: "1rem" }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        {step === 1 && (
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2"
            style={{ color: "rgba(255,255,255,.4)" }}
          >
            <Icon icon="mdi:chevron-double-down" className="text-2xl" />
          </motion.div>
        )}
      </section>

      {/* ════ STEP PROGRESS BAR (visible from step 2) ════ */}
      <AnimatePresence>
        {step > 1 && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="sticky top-0 z-40 py-3 px-4"
            style={{ background: C.green, boxShadow: "0 4px 24px rgba(27,48,34,.3)" }}
          >
            <div className="max-w-md mx-auto flex items-center justify-between gap-1">
              {STEPS.map((s, i) => (
                <div key={s.n} className="flex items-center gap-1 flex-1">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-400"
                    style={{
                      background: step >= s.n ? C.gold : "rgba(255,255,255,.15)",
                      color:      step >= s.n ? C.green : "rgba(255,255,255,.45)",
                    }}
                  >
                    {step > s.n ? <Icon icon="mdi:check" /> : <Icon icon={s.icon} />}
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wide hidden sm:block"
                    style={{ color: step === s.n ? C.gold : step > s.n ? "rgba(255,255,255,.65)" : "rgba(255,255,255,.3)" }}
                  >
                    {s.label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div
                      className="flex-1 h-px mx-1"
                      style={{ background: step > s.n ? C.gold : "rgba(255,255,255,.18)", minWidth: 8 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════ STEP 1 — BENEFITS (when step=1) ════ */}
      {step === 1 && (
        <section className="py-16 px-5 max-w-7xl mx-auto">
          <FadeUp className="text-center mb-10">
            <span className="section-label">{isArabic ? "لماذا الحجز المباشر؟" : "Why Book Direct?"}</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mt-3" style={{ color: C.green }}>
              {isArabic ? "مزايا حصرية لضيوفنا" : "Exclusive Guest Privileges"}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "mdi:tag-heart-outline",    title: isArabic ? "أفضل سعر مضمون"  : "Best Rate Guaranteed", desc: isArabic ? "نضمن أقل الأسعار."                  : "Lowest prices on direct bookings." },
              { icon: "mdi:calendar-check-outline",title: isArabic ? "إلغاء مجاني"     : "Free Cancellation",   desc: isArabic ? "إلغاء مجاني قبل 24 ساعة."           : "Cancel free up to 24 hrs before." },
              { icon: "mdi:shield-star-outline",   title: isArabic ? "ترقية مجانية"    : "Free Upgrade",        desc: isArabic ? "فرصة ترقية الجناح عند التوفر."      : "Complimentary suite upgrade avail." },
              { icon: "mdi:gift-outline",          title: isArabic ? "إفطار فاخر"      : "Luxury Breakfast",    desc: isArabic ? "فطور مجاني لضيوف الحجز المباشر."    : "Complimentary breakfast included." },
            ].map((b, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div
                  className="p-5 md:p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: "#fff", border: "1px solid rgba(212,175,55,.15)", boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}
                >
                  <div
                    className="w-11 h-11 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${C.green}12` }}
                  >
                    <Icon icon={b.icon} className="text-xl md:text-2xl" style={{ color: C.green }} />
                  </div>
                  <h3 className="font-heading font-bold text-sm md:text-base mb-1.5" style={{ color: C.green }}>{b.title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.muted }}>{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
      )}

      {/* ════ STEP 2 — ROOM SELECTION ════ */}
      <AnimatePresence mode="wait">
        {step === 2 && (
          <motion.section
            ref={resultsRef}
            key="rooms"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="py-14 px-5 max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="section-label">{t.available}</span>
                <h2 className="text-2xl md:text-4xl font-heading font-bold mt-2" style={{ color: C.green }}>
                  {isArabic ? "اختر إقامتك المثالية" : "Choose Your Perfect Stay"}
                </h2>
              </div>
              {/* Search pill */}
              <div
                className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold"
                style={{ background: C.green, color: "#fff" }}
              >
                <Icon icon="mdi:calendar-range" style={{ color: C.gold }} />
                <span>{searchData.arrival || "—"} → {searchData.departure || "—"}</span>
                <span style={{ color: "rgba(255,255,255,.4)" }}>·</span>
                <Icon icon="mdi:account-group" style={{ color: C.gold }} />
                <span>{searchData.guests}</span>
              </div>
            </div>

            {/* Room cards — responsive grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room, idx) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col rounded-2xl overflow-hidden"
                  style={{ background: "#fff", border: "1px solid rgba(212,175,55,.12)", boxShadow: "0 4px 20px rgba(0,0,0,.07)" }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={room.img}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {room.badge && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase" style={{ background: C.gold, color: C.green }}>
                        {room.badge}
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md" style={{ background: "rgba(27,48,34,.8)", color: "#fff" }}>
                      <Icon icon="mdi:texture-box" className="inline me-1" style={{ color: C.gold }} />
                      {room.size}
                    </div>
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(27,48,34,.25), transparent 55%)" }} />
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-heading font-bold leading-tight" style={{ color: C.green }}>{room.name}</h3>
                      <Icon icon={room.icon} className="text-xl mt-0.5 flex-shrink-0" style={{ color: C.gold }} />
                    </div>
                    <p className="text-xs mb-4 flex items-center gap-1.5" style={{ color: C.muted }}>
                      <Icon icon="mdi:eye-outline" style={{ color: C.greenM }} />
                      {room.view}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {room.features.map((f, i) => (
                        <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg font-bold"
                          style={{ background: `${C.green}0d`, color: C.green, border: `1px solid ${C.green}22` }}>
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-end justify-between mt-auto pt-4 mb-5" style={{ borderTop: "1px solid rgba(0,0,0,.07)" }}>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest block mb-1" style={{ color: C.muted }}>
                          {isArabic ? "يبدأ من" : "From"}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-heading font-bold" style={{ color: C.green }}>${room.price}</span>
                          <span className="text-[10px] font-bold" style={{ color: C.muted }}>{t.perNight}</span>
                        </div>
                        {nights > 1 && (
                          <span className="text-[10px]" style={{ color: C.goldL }}>
                            ≈ ${(room.price * nights).toLocaleString()} / {nights} {t.nights}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-bold"
                        style={{ background: `${C.green}0d`, color: C.green }}>
                        <Icon icon="mdi:account-group" />
                        {isArabic ? `حتى ${room.guests}` : `Up to ${room.guests}`}
                      </div>
                    </div>

                    {/* Select button */}
                    <button
                      onClick={() => handleSelect(room)}
                      className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                      style={{ background: C.green, color: "#fff", boxShadow: `0 4px 16px ${C.green}33` }}
                      onMouseEnter={e => { e.currentTarget.style.background = C.gold; e.currentTarget.style.color = C.green; }}
                      onMouseLeave={e => { e.currentTarget.style.background = C.green; e.currentTarget.style.color = "#fff"; }}
                    >
                      {t.select}
                      <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ════ STEP 3 — CHECKOUT ════ */}
      <AnimatePresence mode="wait">
        {step === 3 && selectedRoom && (
          <motion.section
            ref={checkoutRef}
            key="checkout"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="py-14 px-5 max-w-5xl mx-auto"
          >
            <div
              className="rounded-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-5"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,.11)", border: "1px solid rgba(212,175,55,.15)" }}
            >
              {/* ─ Left: Form ─ */}
              <div className="lg:col-span-3 p-6 md:p-12" style={{ background: "#fff" }}>

                {/* Back */}
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-8 px-4 py-2 rounded-full transition-all duration-300"
                  style={{ background: `${C.green}0d`, color: C.green }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.green; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${C.green}0d`; e.currentTarget.style.color = C.green; }}
                >
                  <Icon icon={isArabic ? "mdi:arrow-right" : "mdi:arrow-left"} />
                  {t.back}
                </button>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${C.green}12` }}>
                    <Icon icon="mdi:account-details-outline" className="text-xl" style={{ color: C.green }} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold" style={{ color: C.green }}>{t.guestInfo}</h2>
                    <p className="text-xs" style={{ color: C.muted }}>
                      {isArabic ? "أدخل بياناتك لإتمام الحجز" : "Enter your details to complete booking"}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleConfirm} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <GuestField label={t.name} icon="mdi:account" iconColor={C.gold} error={formErrors.name}>
                      <input
                        type="text" className="w-full bg-transparent outline-none text-sm font-medium" style={{ color: C.text }}
                        placeholder={isArabic ? "محمد العلي" : "John Smith"}
                        value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      />
                    </GuestField>
                    <GuestField label={t.email} icon="mdi:email-outline" iconColor={C.gold} error={formErrors.email}>
                      <input
                        type="email" className="w-full bg-transparent outline-none text-sm font-medium" style={{ color: C.text }}
                        placeholder="email@example.com"
                        value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      />
                    </GuestField>
                  </div>

                  <GuestField label={t.phone} icon="mdi:phone" iconColor={C.gold} error={formErrors.phone}>
                    <input
                      type="tel" dir="ltr" className="w-full bg-transparent outline-none text-sm font-medium" style={{ color: C.text }}
                      placeholder="+963 9XX XXX XXX"
                      value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    />
                  </GuestField>

                  <GuestField label={t.notes} icon="mdi:note-text-outline" iconColor={C.muted}>
                    <textarea
                      rows={3} className="w-full bg-transparent outline-none text-sm font-medium resize-none" style={{ color: C.text }}
                      placeholder={isArabic ? "طلبات الحمية، المناسبات، رغبات خاصة..." : "Dietary needs, occasions, special wishes..."}
                      value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                    />
                  </GuestField>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                    style={{ background: C.green, color: "#fff", boxShadow: `0 6px 24px ${C.green}40` }}
                  >
                    <Icon icon="mdi:check-decagram-outline" className="text-lg" />
                    {t.confirm}
                  </button>

                  <p className="text-center text-[10px] flex items-center justify-center gap-1.5" style={{ color: C.muted }}>
                    <Icon icon="mdi:lock-outline" />
                    {isArabic ? "بياناتك مشفرة ومحمية بـ 256-bit SSL" : "Secured with 256-bit SSL encryption"}
                  </p>
                </form>
              </div>

              {/* ─ Right: Summary ─ */}
              <div
                className="lg:col-span-2 p-6 md:p-10 flex flex-col"
                style={{ background: C.green }}
              >
                <div className="flex items-center gap-2.5 mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
                  <Icon icon="mdi:receipt-text-outline" style={{ color: C.gold, fontSize: "1.3rem" }} />
                  <h4 className="text-sm font-heading font-bold uppercase tracking-widest" style={{ color: "#fff" }}>{t.summary}</h4>
                </div>

                {/* Room image */}
                <div className="relative rounded-xl overflow-hidden mb-6 aspect-[16/9]">
                  <img src={selectedRoom.img} alt={selectedRoom.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,.75), transparent 55%)" }} />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-heading font-bold text-center" style={{ color: "#fff" }}>
                    {selectedRoom.name}
                  </p>
                </div>

                {/* Detail rows */}
                <div className="space-y-3">
                  {[
                    { icon: "mdi:calendar-arrow-right", label: t.arrival,   val: searchData.arrival  || "—" },
                    { icon: "mdi:calendar-arrow-left",  label: t.departure,  val: searchData.departure || "—" },
                    { icon: "mdi:account-group",         label: t.guests,     val: `${searchData.guests} ${isArabic ? "ضيف" : "guest(s)"}` },
                    { icon: "mdi:weather-night",         label: isArabic ? "عدد الليالي" : "Nights", val: `${nights} ${t.nights}` },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                      <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,.6)" }}>
                        <Icon icon={row.icon} style={{ color: C.gold }} />
                        {row.label}
                      </span>
                      <span className="text-xs font-bold" style={{ color: "#fff" }}>{row.val}</span>
                    </div>
                  ))}

                  {/* Total */}
                  <div
                    className="flex items-center justify-between p-4 rounded-xl mt-2"
                    style={{ background: "rgba(212,175,55,.15)", border: "1px solid rgba(212,175,55,.3)" }}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,.85)" }}>{t.total}</span>
                    <div className="text-end">
                      <div className="text-2xl font-heading font-bold" style={{ color: C.gold }}>
                        ${(selectedRoom.price * nights).toLocaleString()}
                      </div>
                      <div className="text-[10px]" style={{ color: "rgba(255,255,255,.45)" }}>
                        ${selectedRoom.price} × {nights} {t.nights}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ════ STEP 4 — SUCCESS ════ */}
      <AnimatePresence mode="wait">
        {step === 4 && (
          <motion.section
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center min-h-[70vh] px-5 py-20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 18 }}
              className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
              style={{ background: `${C.green}15`, border: `3px solid ${C.gold}` }}
            >
              <Icon icon="mdi:check-decagram" className="text-5xl" style={{ color: C.gold }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3" style={{ color: C.green }}>{t.successT}</h2>
              <p className="text-sm md:text-base max-w-sm mx-auto leading-relaxed mb-8" style={{ color: C.muted }}>{t.successS}</p>

              <div
                className="inline-flex flex-col items-center px-8 py-5 rounded-2xl mb-8"
                style={{ background: "#fff", border: "1px solid rgba(212,175,55,.25)", boxShadow: "0 8px 32px rgba(0,0,0,.07)" }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: C.muted }}>{t.bookingRef}</span>
                <span className="text-2xl font-heading font-bold tracking-widest" style={{ color: C.green }}>{bookingRef}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => { setStep(1); setSelectedRoom(null); setForm({ name:"",email:"",phone:"",notes:"" }); setSearchData({ arrival:"",departure:"",guests:"2" }); }}
                  className="px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300"
                  style={{ background: C.green, color: "#fff" }}
                >
                  {t.newBook}
                </button>
                <a
                  href="/"
                  className="px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300"
                  style={{ border: `2px solid ${C.green}`, color: C.green }}
                >
                  {t.goHome}
                </a>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20" />
    </div>
  );
}

/* ════ GUEST FORM FIELD COMPONENT ════ */
function GuestField({ label, icon, iconColor, error, children }) {
  return (
    <div
      className="rounded-xl px-4 py-3.5 transition-all duration-300"
      style={{
        background:  error ? "rgba(220,38,38,.04)" : "rgba(27,48,34,.04)",
        border: `1.5px solid ${error ? "rgba(220,38,38,.4)" : "rgba(27,48,34,.12)"}`,
      }}
    >
      <label
        className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest mb-2"
        style={{ color: error ? "#dc2626" : "#6B6B6B" }}
      >
        <Icon icon={icon} style={{ color: error ? "#dc2626" : iconColor, fontSize: "0.85rem" }} />
        {label}
        {error && <span style={{ color: "#dc2626" }}>*</span>}
      </label>
      {children}
    </div>
  );
}