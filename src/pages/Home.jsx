import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// ================= SCROLL REVEAL HELPER =================
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ================= GOLD TRIPLE DIVIDER =================
const GoldDivider = () => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="w-14 h-px bg-gradient-to-r from-transparent to-gold-500" />
    <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-gold" />
    <div className="w-14 h-px bg-gradient-to-l from-transparent to-gold-500" />
  </div>
);

// ================= SECTION LABEL =================
const SectionLabel = ({ children }) => (
  <span className="section-label">{children}</span>
);

export default function Home({ lang }) {
  const isArabic = lang === "ar";
  const heroRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [booking, setBooking] = useState({
    checkin: "", checkout: "", guests: "2",
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // ---- Testimonials auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ---- Translations
  const t = {
    hero: {
      est:      isArabic ? "وجهتك الأولى في قلب الطبيعة" : "Your Premier Nature Escape",
      title:    isArabic ? "يعفور" : "YAFOUR",
      subtitle: isArabic ? "فندق ومنتجع" : "Hotel & Resort",
      tagline:  isArabic ? "فخامة الطبيعة.. دمشقية الروح" : "Nature's Luxury, Damascus's Soul",
      cta:      isArabic ? "احجز إقامتك" : "Reserve Your Stay",
      explore:  isArabic ? "اكتشف المنتجع" : "Explore Resort",
    },
    booking: {
      title:    isArabic ? "ابدأ تجربة لا تُنسى" : "Begin an Unforgettable Stay",
      checkin:  isArabic ? "تسجيل الدخول" : "Check-In",
      checkout: isArabic ? "تسجيل الخروج" : "Check-Out",
      guests:   isArabic ? "الضيوف" : "Guests",
      check:    isArabic ? "التحقق من التوفر" : "Check Availability",
    },
    about: {
      label: isArabic ? "من نحن" : "About Us",
      title: isArabic ? "تناغم الفخامة مع الطبيعة" : "Where Luxury Meets Nature",
      desc:  isArabic
        ? "في أحضان يعفور الساحرة، على بُعد خطوات من صخب دمشق، تجد منتجعاً يجمع بين الأصالة السورية ومعايير الضيافة العالمية. تجربة تتجاوز الإقامة لتصنع ذكريات تدوم مدى الحياة."
        : "Nestled in enchanting Yafour, steps from Damascus's bustle, our resort blends authentic Syrian heritage with world-class hospitality standards — crafting memories that last a lifetime.",
      stats: [
        { value: "50+",  label: isArabic ? "جناح فاخر"      : "Luxury Suites" },
        { value: "5★",   label: isArabic ? "تصنيف دولي"    : "International Rating" },
        { value: "20+",  label: isArabic ? "سنة خبرة"       : "Years Experience" },
        { value: "98%",  label: isArabic ? "رضا العملاء"    : "Guest Satisfaction" },
      ],
      cta: isArabic ? "اعرف المزيد" : "Discover More",
    },
    experiences: {
      label: isArabic ? "تجارب استثنائية" : "Exceptional Experiences",
      title: isArabic ? "عالم من الرفاهية" : "A World of Wellbeing",
      items: [
        {
          icon:     "mdi:pool",
          img:      "/pool.png",
          title:    isArabic ? "مجمع المسابح"   : "Infinity Pools",
          desc:     isArabic ? "استمتع بسباحة لا محدودة في مسابحنا البانورامية المحاطة بالطبيعة الخضراء." : "Immerse yourself in our panoramic pools surrounded by lush nature.",
          path:     "/services",
        },
        {
          icon:     "mdi:spa",
          img:      "/pool.png",
          title:    isArabic ? "السبا والعناية" : "Spa & Wellness",
          desc:     isArabic ? "برامج استرخاء وعناية فاخرة تعيد توازن جسدك وروحك." : "Luxury relaxation programs restoring balance to body and soul.",
          path:     "/services",
        },
        {
          icon:     "mdi:silverware-fork-knife",
          img:      "/dining.webp",
          title:    isArabic ? "المطاعم الفاخرة" : "Fine Dining",
          desc:     isArabic ? "تجربة تذوق عالمية بلمسات شرقية أصيلة في أجواء رومانتيكية." : "World-class dining with authentic Eastern touches in romantic ambiance.",
          path:     "/dining",
        },
        {
          icon:     "mdi:horse-variant",
          img:      "/hero.webp",
          title:    isArabic ? "نادي الفروسية" : "Equestrian Club",
          desc:     isArabic ? "تجارب فروسية أصيلة تناسب العائلات والمحترفين على حد سواء." : "Authentic equestrian experiences for families and professionals alike.",
          path:     "/services",
        },
        {
          icon:     "mdi:party-popper",
          img:      "/hero.webp",
          title:    isArabic ? "قاعات المناسبات" : "Event Halls",
          desc:     isArabic ? "مساحات استثنائية للأعراس والمناسبات الراقية بأحدث التقنيات." : "Exceptional spaces for weddings and elite events with cutting-edge tech.",
          path:     "/services",
        },
        {
          icon:     "mdi:human-capacity-increase",
          img:      "/hero.webp",
          title:    isArabic ? "قاعات المؤتمرات" : "Conference Halls",
          desc:     isArabic ? "بيئات عمل احترافية مجهزة بالكامل لأرقى الاجتماعات والمؤتمرات." : "Fully-equipped professional environments for premium meetings and conferences.",
          path:     "/services",
        },
      ],
    },
    rooms: {
      label:  isArabic ? "الإقامة الفاخرة" : "Luxury Accommodations",
      title:  isArabic ? "الغرف والأجنحة" : "Rooms & Suites",
      from:   isArabic ? "يبدأ من" : "From",
      night:  isArabic ? "/ الليلة" : "/ night",
      cta:    isArabic ? "استكشف الغرف" : "Explore Rooms",
      items: [
        {
          img:      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=78&fm=webp&auto=format",
          title:    isArabic ? "الغرفة الديلوكس" : "Deluxe Room",
          size:     isArabic ? "35 م²" : "35 sqm",
          view:     isArabic ? "إطلالة طبيعية" : "Nature View",
          price:    "120",
          amenities: ["mdi:wifi", "mdi:television-play", "mdi:air-conditioner", "mdi:coffee"],
        },
        {
          img:      "/room-suite.webp",
          title:    isArabic ? "الجناح التنفيذي" : "Executive Suite",
          size:     isArabic ? "65 م²" : "65 sqm",
          view:     isArabic ? "إطلالة بانورامية" : "Panoramic View",
          price:    "250",
          amenities: ["mdi:wifi", "mdi:television-play", "mdi:air-conditioner", "mdi:bathtub"],
        },
        {
          img:      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=78&fm=webp&auto=format",
          title:    isArabic ? "الجناح الملكي" : "Royal Suite",
          size:     isArabic ? "120 م²" : "120 sqm",
          view:     isArabic ? "إطلالة VIP" : "VIP View",
          price:    "480",
          amenities: ["mdi:wifi", "mdi:television-play", "mdi:jacuzzi", "mdi:room-service"],
        },
        {
          img:      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=78&fm=webp&auto=format",
          title:    isArabic ? "شاليه الطبيعة" : "Nature Chalet",
          size:     isArabic ? "80 م²" : "80 sqm",
          view:     isArabic ? "وسط الطبيعة" : "In Nature",
          price:    "350",
          amenities: ["mdi:wifi", "mdi:fireplace", "mdi:balcony", "mdi:nature"],
        },
      ],
    },
    testimonials: {
      label: isArabic ? "آراء ضيوفنا" : "Guest Voices",
      title: isArabic ? "ما يقوله ضيوفنا" : "What Our Guests Say",
    },
    cta_banner: {
      title: isArabic ? "الطبيعة بانتظارك" : "Nature Awaits You",
      desc:  isArabic ? "احجز إقامتك في منتجع يعفور الآن واستمتع بعروض حصرية" : "Reserve your stay now and enjoy exclusive seasonal offers",
      btn:   isArabic ? "احجز إقامتك الآن" : "Book Your Stay Now",
      btn2:  isArabic ? "تواصل معنا" : "Contact Us",
    },
  };

  const testimonials = [
    {
      quote:  isArabic
        ? "أجمل تجربة إقامة حظيت بها. الهدوء المحيط بمنتجع يعفور والاهتمام بالتفاصيل والطعام الاستثنائي يجعلني أرغب بالعودة كل شهر."
        : "The most beautiful stay I've ever had. Yafour's tranquility, attention to detail, and exceptional food make me want to return every month.",
      author: isArabic ? "أحمد سلمان" : "Ahmed Salmaan",
      role:   isArabic ? "رجل أعمال، دمشق" : "Entrepreneur, Damascus",
      stars:  5,
    },
    {
      quote:  isArabic
        ? "قضينا شهر العسل في منتجع يعفور وكانت التجربة لا تُوصف. خدمة راقية، طبيعة خلابة، وطاقم عمل محترف بكل معنى الكلمة."
        : "We spent our honeymoon at Yafour and the experience was indescribable. Premium service, breathtaking nature, and a truly professional team.",
      author: isArabic ? "ليلى ومحمد رزق" : "Leila & Mohammad Rizk",
      role:   isArabic ? "عروسان سعيدان" : "Happy Newlyweds",
      stars:  5,
    },
    {
      quote:  isArabic
        ? "منذ اللحظة الأولى شعرت أنني في مكان مختلف تماماً. الفندق يجمع بين الأصالة والعصرية بطريقة نادرة. سأوصي به دائماً."
        : "From the very first moment, I felt I was somewhere completely different. A rare blend of heritage and modernity. I'll always recommend it.",
      author: isArabic ? "سارة الخطيب" : "Sara Al-Khatib",
      role:   isArabic ? "مديرة تنفيذية" : "Executive Director",
      stars:  5,
    },
  ];

  return (
    <div className="bg-ivory-200 text-charcoal-800 antialiased" dir={isArabic ? "rtl" : "ltr"}>

      {/* ============================================================
          1. CINEMATIC HERO SECTION
      ============================================================ */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-forest-600"
        id="hero"
      >
        {/* Background with Ken Burns zoom */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-cinematic-zoom"
            style={{ backgroundImage: "url('/hero.webp')" }}
          />
          {/* Dark luxury overlay */}
          <div className="absolute inset-0 overlay-green" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-charcoal-900/20" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-6 flex flex-col items-center max-w-5xl mx-auto"
        >
          {/* Pre-title badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm mb-8"
          >
            <Icon icon="mdi:star" className="text-gold-400 text-sm" />
            <span className="text-gold-300 text-xs font-bold tracking-[0.2em] uppercase">
              {t.hero.est}
            </span>
            <Icon icon="mdi:star" className="text-gold-400 text-sm" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-extrabold text-7xl md:text-9xl leading-none mb-2"
            style={{
              textShadow: "0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(212,175,55,0.2)",
              letterSpacing: isArabic ? "0.06em" : "0.12em",
            }}
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-2xl md:text-3xl font-light tracking-[0.25em] text-white/80 mb-6 uppercase"
          >
            {t.hero.subtitle}
          </motion.div>

          {/* Gold Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2.5 h-2.5 bg-gold-400 rounded-full animate-pulse-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-base md:text-lg text-gold-300 italic font-medium mb-10 tracking-wide"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/book" id="hero-book-cta" className="btn-gold inline-flex items-center gap-3 text-sm">
              <Icon icon="mdi:calendar-check" className="text-lg" />
              {t.hero.cta}
            </Link>
            <Link
              to="/about"
              id="hero-explore-cta"
              className="btn-white-glass inline-flex items-center gap-3 text-sm"
            >
              <Icon icon="mdi:arrow-down-circle-outline" className="text-lg" />
              {t.hero.explore}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Icon icon="mdi:chevron-double-down" className="text-white/50 text-2xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================
          2. GLASSMORPHISM BOOKING BAR (Floating below hero)
      ============================================================ */}
      <section className="py-0 px-4 md:px-8 relative z-20 -mt-12" id="booking-bar">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-green-deep border border-ivory-500 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-ivory-500 text-center">
              <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-gold-700">
                {t.booking.title}
              </span>
            </div>
            <div className="grid md:grid-cols-4 gap-0">
              {/* Check-in */}
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-ivory-500 group hover:bg-ivory-300 transition-colors duration-300">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-700 font-bold mb-2">
                  <Icon icon="mdi:calendar-import" className="text-base" />
                  {t.booking.checkin}
                </label>
                <input
                  type="date"
                  id="booking-checkin"
                  value={booking.checkin}
                  onChange={e => setBooking(b => ({ ...b, checkin: e.target.value }))}
                  className="bg-transparent w-full outline-none text-sm font-bold text-charcoal-900 cursor-pointer"
                />
              </div>
              {/* Check-out */}
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-ivory-500 group hover:bg-ivory-300 transition-colors duration-300">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-700 font-bold mb-2">
                  <Icon icon="mdi:calendar-export" className="text-base" />
                  {t.booking.checkout}
                </label>
                <input
                  type="date"
                  id="booking-checkout"
                  value={booking.checkout}
                  onChange={e => setBooking(b => ({ ...b, checkout: e.target.value }))}
                  className="bg-transparent w-full outline-none text-sm font-bold text-charcoal-900 cursor-pointer"
                />
              </div>
              {/* Guests */}
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-ivory-500 group hover:bg-ivory-300 transition-colors duration-300">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-700 font-bold mb-2">
                  <Icon icon="mdi:account-group" className="text-base" />
                  {t.booking.guests}
                </label>
                <select
                  id="booking-guests"
                  value={booking.guests}
                  onChange={e => setBooking(b => ({ ...b, guests: e.target.value }))}
                  className="bg-transparent w-full outline-none text-sm font-bold text-charcoal-900 appearance-none cursor-pointer"
                >
                  {["1","2","3","4","5","6+"].map(g => (
                    <option key={g} value={g}>{g} {isArabic ? "أشخاص" : "Guests"}</option>
                  ))}
                </select>
              </div>
              {/* CTA */}
              <Link
                to="/book"
                id="booking-bar-cta"
                className="flex items-center justify-center gap-3 bg-forest-600 text-white font-bold text-sm uppercase tracking-wide hover:bg-forest-500 transition-colors duration-300 px-6 py-5"
              >
                <Icon icon="mdi:magnify" className="text-lg" />
                {t.booking.check}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          3. ABOUT / QUICK GLANCE
      ============================================================ */}
      <section className="py-32 px-6 bg-ivory-200" id="about-glance">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-green-deep">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=78&fm=webp&auto=format"
                  alt={isArabic ? "منتجع يعفور" : "Yafour Resort"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* Floating stat card */}
              <div className={`absolute bottom-8 glass-card rounded-2xl p-6 max-w-[200px] shadow-luxury ${isArabic ? "-right-4 md:-right-10" : "-left-4 md:-left-10"}`}>
                <div className="text-3xl font-extrabold text-forest-600 font-heading mb-1">★★★★★</div>
                <div className="text-xs text-gold-700 font-bold tracking-wide">
                  {isArabic ? "درجة متميزة" : "Premier Rating"}
                </div>
                <div className="text-sm text-charcoal-600 mt-1">
                  {isArabic ? "وجهة موثوقة للنخبة السورية" : "Trusted by Syrian elite"}
                </div>
              </div>
              {/* Gold accent line */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold-500 rounded-tl-2xl opacity-60" />
            </div>
          </Reveal>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel>{t.about.label}</SectionLabel>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal-900 mb-8 leading-[1.15]">
                {t.about.title}
              </h2>
              <p className="text-charcoal-600 text-lg leading-relaxed mb-10">
                {t.about.desc}
              </p>
            </Reveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {t.about.stats.map((stat, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-5 text-center hover:border-gold-500/30">
                    <div className="text-3xl font-extrabold font-heading text-forest-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-charcoal-600 font-medium">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <Link
                to="/about"
                id="about-read-more"
                className="inline-flex items-center gap-3 text-forest-600 font-bold group hover:text-forest-500 transition-colors duration-300"
              >
                <span className="border-b-2 border-forest-600 pb-0.5 group-hover:border-forest-500">
                  {t.about.cta}
                </span>
                <Icon
                  icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. EXPERIENCE GRID (CSS Grid + Hover Reveal)
      ============================================================ */}
      <section className="py-32 bg-ivory-400 border-y border-gold-500/10" id="experiences">
        <div className="max-w-[1300px] mx-auto px-6">
          <Reveal className="text-center mb-16">
            <SectionLabel>{t.experiences.label}</SectionLabel>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal-900 mt-2">
              {t.experiences.title}
            </h2>
            <GoldDivider />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.experiences.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link
                  to={item.path}
                  id={`experience-card-${i}`}
                  className="group relative block rounded-3xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover cursor-pointer"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  />
                  {/* Base Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-600/90 via-forest-600/30 to-transparent" />
                  {/* Hover Overlay Reveal */}
                  <div className="absolute inset-0 bg-forest-600/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gold-500 group-hover:border-gold-500">
                      <Icon icon={item.icon} className="text-xl text-gold-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">{item.title}</h3>
                    {/* Description — revealed on hover */}
                    <p className="text-white/80 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {item.desc}
                    </p>
                    {/* Arrow */}
                    <div className="mt-3 flex items-center gap-2 text-gold-400 text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                      <span>{isArabic ? "اكتشف المزيد" : "Discover More"}</span>
                      <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. ROOMS HORIZONTAL SCROLL SLIDER
      ============================================================ */}
      <section className="py-32 bg-white overflow-hidden" id="rooms-preview">
        <div className="max-w-[1300px] mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <SectionLabel>{t.rooms.label}</SectionLabel>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal-900 mt-1">
                {t.rooms.title}
              </h2>
            </div>
            <Link
              to="/rooms"
              id="rooms-view-all"
              className="inline-flex items-center gap-2 text-forest-600 font-bold hover:text-forest-500 transition-colors border-b-2 border-forest-600 pb-0.5 whitespace-nowrap"
            >
              {isArabic ? "عرض جميع الغرف" : "View All Rooms"}
              <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} />
            </Link>
          </Reveal>

          {/* Horizontal Scroll Container */}
          <div className="rooms-scroll-container pb-4">
            {t.rooms.items.map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="room-card flex-shrink-0 glass-card rounded-3xl overflow-hidden"
              >
                {/* Room Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-forest-600/90 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-xs font-bold">
                    ${room.price}<span className="font-normal text-white/70">{t.rooms.night}</span>
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-3">{room.title}</h3>

                  {/* Specs */}
                  <div className="flex items-center gap-4 text-xs text-charcoal-600 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:floor-plan" className="text-gold-500" />
                      {room.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:window-maximize" className="text-gold-500" />
                      {room.view}
                    </span>
                  </div>

                  {/* Amenity Icons */}
                  <div className="flex items-center gap-3 mb-5">
                    {room.amenities.map((icon, j) => (
                      <div key={j} className="w-8 h-8 rounded-full bg-forest-600/8 flex items-center justify-center">
                        <Icon icon={icon} className="text-forest-600 text-base" />
                      </div>
                    ))}
                  </div>

                  {/* Price Row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-charcoal-400">{t.rooms.from}</div>
                      <div className="text-2xl font-extrabold text-gold-600 font-heading">
                        <span className="text-sm font-normal">$</span>{room.price}
                        <span className="text-xs font-normal text-charcoal-400">{t.rooms.night}</span>
                      </div>
                    </div>
                    <Link
                      to="/book"
                      id={`room-book-${i}`}
                      className="btn-gold text-xs px-4 py-2 !rounded-xl"
                    >
                      {isArabic ? "احجز" : "Book"}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. ATMOSPHERIC POOL SECTION (Glassmorphism)
      ============================================================ */}
      <section className="relative py-0 h-[600px] flex items-center justify-center overflow-hidden" id="pool-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pool.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-600/80 via-forest-600/50 to-transparent" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <Reveal>
            <SectionLabel className="text-gold-400">{isArabic ? "الاسترخاء والعناية" : "Relax & Rejuvenate"}</SectionLabel>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-2 mb-6 leading-[1.15]">
              {isArabic ? "مجمع المسابح الفاخر" : "Luxury Pool Complex"}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {isArabic
                ? "استمتع بجلسات ترفيه لا مثيل لها في مسابحنا الخارجية والداخلية المجهزة بأحدث التقنيات وأجمل الإطلالات."
                : "Enjoy unmatched leisure in our outdoor and indoor pools equipped with state-of-the-art facilities and breathtaking views."
              }
            </p>
            <Link to="/services" id="pool-discover-btn" className="btn-gold inline-flex items-center gap-3 text-sm">
              <Icon icon="mdi:pool" className="text-lg" />
              {isArabic ? "اكتشف السبا والمسابح" : "Discover Spa & Pools"}
            </Link>
          </Reveal>

          {/* Glass Stats Card */}
          <Reveal delay={0.2}>
            <div className="glass-panel rounded-3xl p-8 grid grid-cols-2 gap-6">
              {[
                { icon: "mdi:pool",    val: "3",   label: isArabic ? "مسابح" : "Pools" },
                { icon: "mdi:spa",     val: "12",  label: isArabic ? "جلسة سبا" : "Spa Sessions" },
                { icon: "mdi:clock",   val: "24",  label: isArabic ? "ساعة متاح" : "Hrs Open" },
                { icon: "mdi:thermometer-water", val: "32°", label: isArabic ? "درجة حرارة" : "Pool Temp" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <Icon icon={item.icon} className="text-3xl text-gold-400 mx-auto mb-2" />
                  <div className="text-2xl font-extrabold text-white font-heading">{item.val}</div>
                  <div className="text-xs text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          7. DINING EDITORIAL SPLIT
      ============================================================ */}
      <section className="py-32 px-6 bg-ivory-200" id="dining-preview">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <SectionLabel>{isArabic ? "تجربة المذاق" : "Dining Experience"}</SectionLabel>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal-900 mt-2 mb-6 leading-[1.15]">
                {isArabic ? "مطاعم فاخرة بلمسات شرقية" : "Fine Dining with Eastern Touches"}
              </h2>
              <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                {isArabic
                  ? "استمتع بتجربة تذوق استثنائية في مطاعمنا الفاخرة التي تجمع بين أروع أطباق المطبخ العالمي وعبق الأصالة السورية في أجواء لا تُنسى."
                  : "Experience extraordinary cuisine in our fine restaurants blending world-class dishes with Syrian culinary heritage in unforgettable atmospheres."
                }
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: "mdi:silverware-fork-knife", label: isArabic ? "مطبخ عالمي" : "International" },
                  { icon: "mdi:food-drumstick",        label: isArabic ? "مشاوي شرقية" : "Oriental Grill" },
                  { icon: "mdi:coffee",                label: isArabic ? "لاونج القهوة" : "Coffee Lounge" },
                  { icon: "mdi:glass-cocktail",        label: isArabic ? "عصائر طازجة" : "Fresh Juices" },
                ].map((tag, i) => (
                  <span key={i} className="flex items-center gap-2 px-4 py-2 bg-ivory-400 rounded-full text-xs font-bold text-charcoal-700 border border-ivory-600/30">
                    <Icon icon={tag.icon} className="text-gold-600" />
                    {tag.label}
                  </span>
                ))}
              </div>
              <Link to="/dining" id="dining-discover-btn" className="inline-flex items-center gap-2 font-bold text-forest-600 border-b-2 border-forest-600 pb-0.5 hover:text-forest-500 transition-colors">
                {isArabic ? "اكتشف مطاعمنا" : "Explore Our Dining"}
                <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-green-deep">
              <img
                src="/dining.png"
                alt={isArabic ? "مطاعم يعفور" : "Yafour Dining"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className={`absolute bottom-8 glass-card rounded-2xl p-5 shadow-luxury max-w-[180px] ${isArabic ? "-right-4 md:-right-8" : "-left-4 md:-left-8"}`}>
              <Icon icon="mdi:silverware-fork-knife" className="text-3xl text-gold-500 mb-2" />
              <div className="font-bold text-charcoal-900 text-sm">
                {isArabic ? "تجربة لا تُنسى" : "Unforgettable"}
              </div>
              <div className="text-xs text-charcoal-600 mt-1">
                {isArabic ? "4 مطاعم فاخرة" : "4 Fine Restaurants"}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          8. TESTIMONIALS CAROUSEL
      ============================================================ */}
      <section className="py-32 bg-ivory-400 border-t border-gold-500/10" id="testimonials">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <SectionLabel>{t.testimonials.label}</SectionLabel>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal-900 mt-2 mb-12">
              {t.testimonials.title}
            </h2>
          </Reveal>

          {/* Quote Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Icon icon="mdi:format-quote-open" className="text-6xl text-gold-400/40 mx-auto mb-4" />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="text-gold-500 text-xl" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl font-medium text-charcoal-800 leading-relaxed mb-8 italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[activeTestimonial].author.charAt(0)}
                </div>
                <div className="text-right" dir={isArabic ? "rtl" : "ltr"}>
                  <div className="font-bold text-charcoal-900">{testimonials[activeTestimonial].author}</div>
                  <div className="text-xs text-charcoal-500">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                id={`testimonial-dot-${i}`}
                onClick={() => setActiveTestimonial(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeTestimonial
                    ? "w-8 h-2 bg-gold-500"
                    : "w-2 h-2 bg-gold-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          9. FINAL CTA BANNER
      ============================================================ */}
      <section className="relative py-36 overflow-hidden" id="final-cta">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/hero.webp')" }}
        />
        <div className="absolute inset-0 overlay-green" />
        <div className="absolute inset-0 bg-forest-600/50" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <SectionLabel className="text-gold-400">{isArabic ? "احجز الآن" : "Reserve Now"}</SectionLabel>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl leading-[1.1] mt-2 mb-6"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
            >
              {t.cta_banner.title}
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              {t.cta_banner.desc}
            </p>
            <GoldDivider />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/book" id="final-cta-book" className="btn-gold inline-flex items-center gap-3 text-sm">
                <Icon icon="mdi:calendar-check" className="text-lg" />
                {t.cta_banner.btn}
              </Link>
              <Link to="/contact" id="final-cta-contact" className="btn-white-glass inline-flex items-center gap-3 text-sm">
                <Icon icon="mdi:phone" className="text-lg" />
                {t.cta_banner.btn2}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}