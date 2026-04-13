import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// ================= ANIMATION HELPER =================
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function Home({ lang }) {
  const isArabic = lang === "ar";
  const heroRef = useRef(null);

  const t = {
    hero: {
      est: isArabic ? "ملاذك الساحر في قلب الطبيعة" : "Your Enchanting Nature Escape",
      title: isArabic ? "يعفور" : "YAFOUR",
      subtitle: isArabic ? "فندق ومنتجع" : "Hotel & Resort",
      cta: isArabic ? "احجز إقامتك الآن" : "Reserve Your Stay",
    },
    booking: {
      arrival: isArabic ? "تسجيل الدخول" : "Check-In",
      departure: isArabic ? "تسجيل الخروج" : "Check-Out",
      guests: isArabic ? "الضيوف" : "Guests",
      adults2: isArabic ? "شخصين" : "02 Adults",
      adults3: isArabic ? "٣ أشخاص" : "03 Adults",
      adults4: isArabic ? "٤ أشخاص" : "04 Adults",
      check: isArabic ? "التحقق من التوفر" : "Check Availability",
    },
    glance: {
      subtitle: isArabic ? "نظرة سريعة" : "A Quick Glance",
      title: isArabic ? "تناغم الفخامة مع الطبيعة" : "Where Luxury Meets Nature",
      desc: isArabic
        ? "يقع فندق ومنتجع يعفور في أحضان الطبيعة الساحرة، ليقدم لك تجربة ضيافة سورية أصيلة ممزوجة بالرقي العصري. غرف فاخرة، إطلالات بانورامية، وخدمات مصممة خصيصاً لراحتك التامة."
        : "Nestled in enchanting nature, Yafour Hotel & Resort offers an authentic Syrian hospitality experience blended with modern refinement. Breathtaking views, luxury rooms, and services tailored for your ultimate comfort.",
      cta: isArabic ? "اقرأ المزيد عنا" : "Read More About Us",
    },
    features: {
      label: isArabic ? "أبرز الميزات" : "Key Features",
      title: isArabic ? "عالم من الرفاهية" : "A World of Wellbeing",
      items: [
        { icon: "mdi:pool", title: isArabic ? "مسبح خارجي فاخر" : "Luxury Outdoor Pool" },
        { icon: "mdi:spa", title: isArabic ? "منتجع صحي (سبا)" : "Wellness Spa" },
        { icon: "mdi:silverware-fork-knife", title: isArabic ? "مطاعم عالمية" : "Fine Dining" },
        { icon: "mdi:account-group", title: isArabic ? "صالات مؤتمرات" : "Conference Halls" },
      ]
    },
    offers: {
      label: isArabic ? "العروض الخاصة" : "Special Offers",
      title: isArabic ? "تجارب لا تُنسى" : "Unforgettable Experiences",
      cta: isArabic ? "اكتشف العرض" : "Discover Offer",
      list: [
        {
          img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
          title: isArabic ? "عرض عطلة نهاية الأسبوع" : "Weekend Getaway",
          desc: isArabic ? "خصم ١٥٪ على الإقامات ليلة الخميس والجمعة مع فطور مجاني." : "15% off Thursday and Friday night stays with complimentary breakfast."
        },
        {
          img: "https://images.unsplash.com/photo-1544161515-4ad6ce67e340",
          title: isArabic ? "باقة الاسترخاء" : "Relaxation Package",
          desc: isArabic ? "جلسة مساج فاخرة مع دخول مفتوح للمسبح والنادي الصحي للمتزوجين." : "Luxury massage session with full access to the pool and wellness club for couples."
        }
      ]
    },
    testimonials: {
      label: isArabic ? "آراء العملاء" : "Testimonials",
      title: isArabic ? "ما يقوله ضيوفنا" : "What Our Guests Say",
      quote: isArabic 
        ? "أجمل تجربة إقامة حظيت بها. الهدوء المحيط بمنتجع يعفور، الاهتمام بالتفاصيل، والطعام الاستثنائي يجعلني أرغب بالعودة كل شهر."
        : "The most beautiful stay I have ever had. The tranquility surrounding Yafour Resort, attention to detail, and exceptional food makes me want to return every month.",
      author: isArabic ? "أحمد س. — مسافر أعمال" : "Ahmed S. — Business Traveler",
    },
    footer_cta: {
      title: isArabic ? "الطبيعة بانتظارك" : "Nature Awaits You",
      btn: isArabic ? "احجز إقامتك" : "Book Your Residency",
    }
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className={`bg-ivory-200 text-charcoal-800 antialiased ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>
      
      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-cinematic-zoom"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b')" }}
          />
          {/* Greenish dark overlay for nature luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-700/60 via-charcoal-900/40 to-charcoal-900/80" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-6 flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="block text-sm md:text-base mb-6 font-bold tracking-widest text-gold-400"
          >
            {t.hero.est}
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-heading mb-2 drop-shadow-2xl">
            {t.hero.title}
          </h1>
          <h2 className="text-3xl md:text-5xl font-heading font-light mb-12 text-white/90 tracking-wide">
            {t.hero.subtitle}
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2 h-2 bg-gold-400 rounded-full glow-gold" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <Link to="/book" className="group relative px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full shadow-luxury overflow-hidden hover:scale-105 transition-transform duration-300">
            <span className="relative z-10 text-white font-bold text-lg uppercase tracking-wide">
              {t.hero.cta}
            </span>
          </Link>
        </motion.div>

        {/* Floating Booking Widget */}
        <div className="absolute bottom-10 left-0 w-full px-6 z-20">
          <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-4 md:p-2 grid md:grid-cols-4 gap-4 items-center">
            <div className="px-6 py-2 border-b md:border-b-0 border-gray-200 md:border-r">
              <label className="flex items-center gap-2 text-xs uppercase text-gold-600 mb-1 font-bold">
                <Icon icon="mdi:calendar-import" className="text-lg" />
                {t.booking.arrival}
              </label>
              <input type="date" className="bg-transparent w-full outline-none text-sm font-bold text-charcoal-800" />
            </div>
            <div className="px-6 py-2 border-b md:border-b-0 border-gray-200 md:border-r">
              <label className="flex items-center gap-2 text-xs uppercase text-gold-600 mb-1 font-bold">
                <Icon icon="mdi:calendar-export" className="text-lg" />
                {t.booking.departure}
              </label>
              <input type="date" className="bg-transparent w-full outline-none text-sm font-bold text-charcoal-800" />
            </div>
            <div className="px-6 py-2 border-b md:border-b-0 border-gray-200">
              <label className="flex items-center gap-2 text-xs uppercase text-gold-600 mb-1 font-bold">
                <Icon icon="mdi:account-group" className="text-lg" />
                {t.booking.guests}
              </label>
              <select className="bg-transparent w-full outline-none text-sm font-bold text-charcoal-800 appearance-none">
                <option>{t.booking.adults2}</option>
                <option>{t.booking.adults3}</option>
                <option>{t.booking.adults4}</option>
              </select>
            </div>
            <Link to="/book" className="flex items-center justify-center bg-green-600 text-white h-full py-4 rounded-xl hover:bg-green-700 transition-colors duration-300 uppercase text-sm font-bold shadow-md h-[50px] md:h-auto">
              <span>{t.booking.check}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= QUICK GLANCE ================= */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <Reveal>
              <div className="aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl border-4 border-ivory-200 border-b-0 relative">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" className="w-full h-full object-cover hover:scale-110 transition duration-1000" alt="Resort" />
              </div>
              <div className={`absolute bottom-10 bg-ivory-200 p-6 rounded-2xl shadow-xl max-w-xs ${isArabic ? "-right-8" : "-left-8"} hidden md:block`}>
                <h3 className="text-xl font-heading font-bold text-green-700 mb-2">★★★★★</h3>
                <p className="text-sm text-charcoal-800/80 font-bold">عصري الفخامة، أصيل الضيافة.</p>
              </div>
            </Reveal>
          </div>
          
          <div className="order-1 md:order-2">
            <Reveal>
              <span className="text-gold-600 font-bold text-sm tracking-widest uppercase mb-4 block border-b border-gold-500/30 inline-block pb-2">
                {t.glance.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-8 leading-snug">
                {t.glance.title}
              </h2>
              <p className="text-charcoal-800/70 text-lg leading-relaxed mb-10">
                {t.glance.desc}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-800 transition-colors group">
                <span className="border-b-2 border-green-600 pb-1">{t.glance.cta}</span>
                <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-24 bg-ivory-400 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-gold-600 font-bold text-sm tracking-widest uppercase mb-2 block">{t.features.label}</span>
              <h2 className="text-4xl font-heading font-bold text-charcoal-900">{t.features.title}</h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mt-6 rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-luxury transition duration-300 text-center border border-transparent hover:border-gold-500/20 group">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition duration-300">
                    <Icon icon={item.icon} className="text-4xl text-green-600 group-hover:text-white transition duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OFFERS SECTION ================= */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <Reveal>
                <span className="text-gold-600 font-bold text-sm tracking-widest uppercase mb-2 block">{t.offers.label}</span>
                <h2 className="text-4xl font-heading font-bold text-charcoal-900">{t.offers.title}</h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link to="/offers" className="text-green-600 font-bold hover:text-green-800 transition-colors">
                عرض الكل &larr;
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.offers.list.map((offer, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[16/10] shadow-md border border-gray-100">
                  <img src={offer.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={offer.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
                    <p className="text-white/80 text-sm mb-6 max-w-md line-clamp-2">{offer.desc}</p>
                    <Link to="/offers" className="inline-block px-8 py-3 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-full text-sm font-bold hover:bg-gold-500 hover:border-gold-500 transition-colors">
                      {t.offers.cta}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 bg-ivory-400 border-t border-gold-500/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <Icon icon="mdi:format-quote-open" className="text-6xl text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal-900 leading-relaxed mb-12">
              "{t.testimonials.quote}"
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-12 h-1 bg-green-600 mb-4 rounded-full" />
              <p className="text-sm font-bold text-charcoal-800/70">{t.testimonials.author}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-40 relative bg-green-700 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')] bg-cover bg-center mix-blend-overlay" />
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-10 relative z-10">{t.footer_cta.title}</h2>
          <Link to="/book" className="group relative z-10 inline-block px-12 py-5 bg-gold-500 text-white rounded-full text-sm font-bold hover:bg-white hover:text-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl">
            {t.footer_cta.btn}
          </Link>
        </Reveal>
      </section>

    </div>
  );
}