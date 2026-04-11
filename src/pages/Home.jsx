import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

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

  // Translation Dictionary
  const content = {
    hero: {
      est: isArabic ? "تأسس عام ١٩٢٤ — دبي" : "Est. 1924 — Dubai",
      title: isArabic ? "أزور كراون" : "Azure Crown",
      cta: isArabic ? "احجز ملاذك الخاص" : "Reserve Your Sanctuary",
    },
    booking: {
      arrival: isArabic ? "الوصول" : "Arrival",
      departure: isArabic ? "المغادرة" : "Departure",
      guests: isArabic ? "الضيوف" : "Guests",
      adults2: isArabic ? "شخصين" : "02 Adults",
      adults4: isArabic ? "٤ أشخاص" : "04 Adults",
      check: isArabic ? "تحقق من التوفر" : "Check Availability",
    },
    editorial: {
      subtitle: isArabic ? "فن الحياة" : "The Art of Living",
      title: isArabic ? "ملاذ هادئ فوق المدينة" : "A Sanctuary Above The City",
      desc: isArabic 
        ? "يجمع أزور كراون بين الرقي المعماري وهدوء المسكن الخاص. يقدم كل جناح إطلالة منسقة على أفق المدينة، مصممة لأولئك الذين يبحثون عن الصمت في قلب العالم."
        : "Azure Crown blends architectural refinement with the quietude of a private residence. Every suite offers a curated perspective of the skyline, designed for those who seek silence in the center of the world.",
      cta: isArabic ? "استكشف الأجنحة" : "Explore The Suites",
    },
    collection: {
      label: isArabic ? "المجموعة" : "The Collection",
      title: isArabic ? "روائع الراحة" : "Masterpieces of Comfort",
      penthouse: isArabic ? "سكاي بنتهاوس" : "The Sky Penthouse",
      penthouseTitle: isArabic ? "فخامة راقية" : "Refined Grandeur",
      studio: isArabic ? "استوديو التوقيع" : "Signature Studio",
      studioTitle: isArabic ? "زن البساطة" : "Minimalist Zen",
    },
    culinary: {
      label: isArabic ? "فن الطهو" : "Gastronomy",
      badge: isArabic ? "تميز نجوم ميشلان" : "Michelin Star Excellence",
      title: isArabic ? "طاولة أزور" : "The Azure Table",
      desc: isArabic
        ? "استمتع بسيمفونية من النكهات حيث تلتقي المكونات الموسمية مع التقنيات الحديثة. يقدم مطعمنا في الطابق العلوي أكثر من مجرد وجبة؛ إنها رحلة عبر القارات."
        : "Experience a symphony of flavors where seasonal ingredients meet avant-garde techniques. Our rooftop restaurant offers more than just a meal; it’s a journey across continents.",
      service: isArabic ? "خدمة العشاء" : "Dinner Service",
      dressCode: isArabic ? "زي رسمي أنيق" : "Dress Code",
    },
    stats: [
      { n: "01", label: isArabic ? "عشاء حائز على نجمة" : "Michelin Star Dining" },
      { n: "250", label: isArabic ? "أجنحة خاصة" : "Custom Suites" },
      { n: "100%", label: isArabic ? "خصوصية تامة" : "Private Privacy" },
      { n: "24h", label: isArabic ? "خدمة المساعد الشخصي" : "Butler Service" },
    ],
    wellness: {
      label: isArabic ? "السبا في أزور" : "The Spa at Azure",
      title: isArabic ? "هدوء العقل" : "Quiet Your Mind",
      quote: isArabic 
        ? "ملاذ من الصمت حيث يتوقف الزمن. من مسبحنا اللامتناهي إلى الطقوس الشمولية الشخصية، نعيد التوازن الذي لم تكن تعلم أنك فقدته."
        : "A sanctuary of silence where time stands still. From our infinity pool to personalized holistic rituals, we restore the balance you didn't know you'd lost.",
    },
    testimonial: {
      quote: isArabic 
        ? "الاهتمام بالتفاصيل غير مرئي ولكنه محسوس في كل زاوية. إنه ليس مجرد فندق، بل تحفة فنية في عالم الضيافة الحديثة."
        : "The attention to detail is invisible but felt in every corner. It is not just a hotel, it is a masterpiece of modern hospitality.",
      source: "VOGUE TRAVELER",
    },
    footer: {
      title: isArabic ? "الأفق بانتظارك" : "The Skyline Awaits",
      cta: isArabic ? "احجز إقامتك الآن" : "Book Your Residency",
    }
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div 
      className={`bg-[#fcfaf7] text-[#1a1a1a] selection:bg-[#C5A358] selection:text-white antialiased ${isArabic ? "font-serif-ar" : "font-sans"}`} 
      dir={isArabic ? "rtl" : "ltr"}
    >
      
      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-6"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`block text-xs uppercase mb-8 opacity-80 ${isArabic ? "tracking-normal" : "tracking-[0.5em]"}`}
          >
            {content.hero.est}
          </motion.span>
          <h1 className="text-7xl md:text-[9vw] font-serif italic mb-10 leading-none tracking-tighter">
            {content.hero.title}
          </h1>
          <div className="h-[1px] w-24 bg-[#C5A358] mx-auto mb-12" />
          <button className="group relative px-14 py-6 overflow-hidden border border-white/30 rounded-full transition-all duration-500">
            <span className={`relative z-10 text-xs uppercase font-light ${isArabic ? "tracking-normal" : "tracking-[0.3em]"}`}>
              {content.hero.cta}
            </span>
            <div className="absolute inset-0 bg-[#C5A358] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>

        {/* Floating Booking Bar */}
        <div className="absolute bottom-12 left-0 w-full px-6 z-20">
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl grid md:grid-cols-4 gap-2 items-center">
            <div className={`px-6 py-4 ${isArabic ? "text-right" : "text-left"}`}>
              <label className={`block text-[9px] uppercase text-[#C5A358] mb-1 font-bold ${isArabic ? "tracking-normal" : "tracking-widest"}`}>{content.booking.arrival}</label>
              <input type="date" className="bg-transparent w-full outline-none text-sm font-medium" />
            </div>
            <div className={`px-6 py-4 border-gray-100 ${isArabic ? "md:border-l" : "md:border-x"}`}>
              <label className={`block text-[9px] uppercase text-[#C5A358] mb-1 font-bold ${isArabic ? "tracking-normal" : "tracking-widest"}`}>{content.booking.departure}</label>
              <input type="date" className="bg-transparent w-full outline-none text-sm font-medium" />
            </div>
            <div className={`px-6 py-4 ${isArabic ? "text-right" : "text-left"}`}>
              <label className={`block text-[9px] uppercase text-[#C5A358] mb-1 font-bold ${isArabic ? "tracking-normal" : "tracking-widest"}`}>{content.booking.guests}</label>
              <select className="bg-transparent w-full outline-none text-sm font-medium appearance-none">
                <option>{content.booking.adults2}</option>
                <option>{content.booking.adults4}</option>
              </select>
            </div>
            <button className={`bg-[#1a1a1a] text-white h-full py-5 rounded-xl hover:bg-[#C5A358] transition-colors duration-300 uppercase text-[10px] font-bold ${isArabic ? "tracking-normal" : "tracking-[0.2em]"}`}>
              {content.booking.check}
            </button>
          </div>
        </div>
      </section>

      {/* ================= EDITORIAL SECTION ================= */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <Reveal>
                <span className="text-[#C5A358] font-serif italic text-2xl mb-6 block">{content.editorial.subtitle}</span>
                <h2 className="text-5xl md:text-7xl font-light leading-[1.05] mb-8 tracking-tight">
                  {content.editorial.title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-12 font-light">
                  {content.editorial.desc}
                </p>
                <button className={`text-[10px] border-b border-[#C5A358] pb-2 uppercase hover:text-[#C5A358] transition-colors ${isArabic ? "tracking-normal" : "tracking-[0.3em]"}`}>
                  {content.editorial.cta}
                </button>
              </Reveal>
            </div>
            
            <div className="md:col-span-7 order-1 md:order-2 relative">
               <Reveal>
                  <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5 }}
                      src="https://images.unsplash.com/photo-1611892440504-42a792e24d32" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`hidden md:block absolute -bottom-16 w-72 h-96 border-[16px] border-[#fcfaf7] shadow-2xl overflow-hidden ${isArabic ? "-right-24" : "-left-24"}`}>
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" className="w-full h-full object-cover" />
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACCOMMODATIONS GALLERY ================= */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row justify-between items-end mb-20 gap-8 ${isArabic ? "md:text-right" : ""}`}>
            <div className="max-w-xl">
              <Reveal>
                <span className={`text-[#C5A358] uppercase text-[10px] font-bold ${isArabic ? "tracking-normal" : "tracking-[0.4em]"}`}>{content.collection.label}</span>
                <h2 className="text-5xl font-serif italic mt-6">{content.collection.title}</h2>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group overflow-hidden relative aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" />
              <div className="absolute inset-0 bg-black/20" />
              <div className={`absolute bottom-10 text-white ${isArabic ? "right-10 text-right" : "left-10"}`}>
                <p className={`text-[10px] uppercase mb-2 opacity-80 ${isArabic ? "tracking-normal" : "tracking-[0.3em]"}`}>{content.collection.penthouse}</p>
                <h3 className="text-3xl font-serif italic">{content.collection.penthouseTitle}</h3>
              </div>
            </div>
            <div className="md:col-span-4 group overflow-hidden relative aspect-[4/5] md:aspect-auto">
              <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a" className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" />
              <div className="absolute inset-0 bg-black/20" />
              <div className={`absolute bottom-10 text-white ${isArabic ? "right-10 text-right" : "left-10"}`}>
                <p className={`text-[10px] uppercase mb-2 opacity-80 ${isArabic ? "tracking-normal" : "tracking-[0.3em]"}`}>{content.collection.studio}</p>
                <h3 className="text-3xl font-serif italic">{content.collection.studioTitle}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULINARY EXPERIENCE ================= */}
      <section className="py-40 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <Reveal>
              <div className="aspect-[3/4] overflow-hidden rounded-t-full border border-white/10 p-4">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" className="w-full h-full object-cover rounded-t-full" />
              </div>
            </Reveal>
            <div className={`absolute top-1/2 bg-[#C5A358] w-40 h-40 rounded-full flex items-center justify-center text-center p-6 shadow-2xl ${isArabic ? "-left-12 rotate-12" : "-right-12 -rotate-12"}`}>
              <p className={`text-[11px] font-bold uppercase leading-tight ${isArabic ? "tracking-normal" : "tracking-widest"}`}>{content.culinary.badge}</p>
            </div>
          </div>

          <div className={isArabic ? "text-right" : "text-left"}>
            <Reveal delay={0.2}>
              <span className={`text-[#C5A358] uppercase text-[10px] font-bold ${isArabic ? "tracking-normal" : "tracking-[0.5em]"}`}>{content.culinary.label}</span>
              <h2 className="text-6xl font-serif italic mt-8 mb-10 leading-tight">{content.culinary.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                {content.culinary.desc}
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-[#C5A358] font-serif text-2xl italic">18:00 — 23:00</h4>
                  <p className={`text-[10px] text-gray-500 uppercase mt-2 ${isArabic ? "tracking-normal" : "tracking-widest"}`}>{content.culinary.service}</p>
                </div>
                <div>
                  <h4 className="text-[#C5A358] font-serif text-2xl italic">{content.culinary.dressCode}</h4>
                  <p className={`text-[10px] text-gray-500 uppercase mt-2 ${isArabic ? "tracking-normal" : "tracking-widest"}`}>{content.culinary.dressCode}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-[#1a1a1a] border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {content.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group">
                <h3 className="text-5xl font-serif italic text-[#C5A358] mb-3">{stat.n}</h3>
                <p className={`text-[10px] uppercase text-gray-500 group-hover:text-white transition-colors ${isArabic ? "tracking-normal" : "tracking-[0.4em]"}`}>{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= WELLNESS SECTION ================= */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <Reveal>
            <span className={`text-[#C5A358] uppercase text-[10px] font-bold ${isArabic ? "tracking-normal" : "tracking-[0.4em]"}`}>{content.wellness.label}</span>
            <h2 className="text-6xl font-serif italic mt-8 mb-16">{content.wellness.title}</h2>
            <div className="aspect-video relative overflow-hidden mb-20 group cursor-pointer">
               <img src="https://images.unsplash.com/photo-1544161515-4ad6ce67e340" className="w-full h-full object-cover rounded-sm shadow-2xl" />
               <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className={`w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ${isArabic ? "border-r-[18px] border-r-white mr-2" : "border-l-[18px] border-l-white ml-2"}`} />
                  </div>
               </div>
            </div>
            <p className="text-gray-400 text-2xl font-light italic leading-relaxed max-w-3xl mx-auto">
              "{content.wellness.quote}"
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-40 bg-[#f3f1ec]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-6xl text-[#C5A358] font-serif mb-8 block leading-none">“</span>
            <h2 className="text-3xl md:text-5xl font-serif italic leading-snug text-gray-800 mb-12 tracking-tight">
              {content.testimonial.quote}
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-16 h-[1px] bg-gray-400 mb-6" />
              <p className={`text-[10px] uppercase font-bold text-gray-500 ${isArabic ? "tracking-normal" : "tracking-[0.4em]"}`}>{content.testimonial.source}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-60 relative overflow-hidden bg-white text-center">
        <Reveal>
          <h2 className="text-7xl md:text-[9vw] font-serif italic mb-16 tracking-tighter">{content.footer.title}</h2>
          <button className={`px-20 py-8 bg-[#1a1a1a] text-white rounded-full text-xs uppercase hover:bg-[#C5A358] transition-all duration-500 transform hover:-translate-y-2 shadow-2xl ${isArabic ? "tracking-normal" : "tracking-[0.4em]"}`}>
            {content.footer.cta}
          </button>
        </Reveal>
        <div className={`absolute bottom-0 left-0 right-0 text-[18vw] font-serif italic text-black/[0.03] whitespace-nowrap leading-none select-none pointer-events-none -mb-10`}>
          {content.hero.title} {content.hero.title}
        </div>
      </section>

    </div>
  );
}