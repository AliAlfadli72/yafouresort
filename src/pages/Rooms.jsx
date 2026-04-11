import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Animation Helper
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

export default function Rooms({ lang }) {
  const isArabic = lang === "ar";
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const t = {
    heroTitle: isArabic ? "الغرف والأجنحة" : "Rooms & Suites",
    heroSubtitle: isArabic
      ? "مساحات مصممة بعناية حيث يلتقي الهدوء بالفخامة."
      : "Curated living spaces where serenity meets sophistication.",
    collection: isArabic ? "مجموعتنا المختارة" : "The Collection",
    amenitiesTitle: isArabic ? "تفاصيل الرفاهية" : "The Finer Details",
    amenitiesSub: isArabic ? "كل ما تحتاجه لإقامة مثالية" : "In-room excellence as standard",
    from: isArabic ? "ابتداءً من" : "From",
    perNight: isArabic ? "لليلة" : "per night",
    details: isArabic ? "اكتشف الجناح" : "Explore Suite",
  };

  const amenities = [
    { title: isArabic ? "بياضات إيطالية" : "Italian Linens", desc: isArabic ? "قطن مصري 1000 غرزة" : "1000-thread count Egyptian cotton" },
    { title: isArabic ? "تحكم ذكي" : "Smart Control", desc: isArabic ? "تحكم كامل بالإضاءة والجو" : "Integrated iPad room automation" },
    { title: isArabic ? "حمام رخامي" : "Marble Bath", desc: isArabic ? "رخام إيطالي وتجهيزات ذهبية" : "Carrara marble & rain showers" },
    { title: isArabic ? "ميني بار منسق" : "Curated Bar", desc: isArabic ? "مشروبات ووجبات خفيفة مختارة" : "Artisan spirits & local delicacies" },
  ];

  const rooms = [
    {
      name: isArabic ? "جناح أفق رويال" : "Royal Skyline Suite",
      size: "120 m²",
      desc: isArabic
        ? "إطلالة بانورامية على أفق دبي مع غرفة معيشة خاصة."
        : "Panoramic skyline views with a private oak-paneled living lounge.",
      price: "4,500 AED",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    },
    {
      name: isArabic ? "إقامة البنتهاوس" : "Penthouse Residence",
      size: "450 m²",
      desc: isArabic
        ? "مساحات فاخرة تغطي طابقاً كاملاً مع مسبح خاص وتراس."
        : "Full-floor residence featuring a private infinity pool and 360° terrace.",
      price: "8,900 AED",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    },
    {
      name: isArabic ? "غرفة أفق ديلوكس" : "Deluxe Horizon Room",
      size: "65 m²",
      desc: isArabic
        ? "تصميم عصري يجمع بين الخشب الدافئ والإضاءة الطبيعية."
        : "Contemporary elegance blending warm walnut textures and floor-to-ceiling glass.",
      price: "1,200 AED",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    },
  ];

  return (
    <div className={`bg-[#fcfaf7] text-[#1a1a1a] ${isArabic ? "font-serif-ar" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      
      {/* ================= SECTION 1 — IMMERSIVE HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a]/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Luxury Interior"
        />
        <div className="relative z-20 text-center text-white px-6">
          <Reveal>
            <span className="block text-[10px] uppercase tracking-[0.5em] mb-6 opacity-80">Azure Crown Dubai</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-none">
              {t.heroTitle}
            </h1>
            <p className="text-lg font-light tracking-wide max-w-2xl mx-auto opacity-90">
              {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= SECTION 2 — THE COLLECTION (Editorial) ================= */}
      <section className="py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-200 pb-12 gap-8">
            <div className="max-w-xl">
              <span className="text-[#C5A358] uppercase tracking-widest text-xs font-bold mb-4 block">{t.collection}</span>
              <h2 className="text-5xl font-serif italic">{isArabic ? "مساحات تعيد تعريف الفخامة" : "Spaces Redefined"}</h2>
            </div>
          </div>

          <div className="space-y-40">
            {rooms.map((room, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                <div className="w-full md:w-3/5 overflow-hidden shadow-2xl">
                  <motion.img 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.2 }}
                    src={room.img} 
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
                <div className="w-full md:w-2/5">
                  <Reveal>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] uppercase tracking-widest bg-[#C5A358] text-white px-3 py-1 rounded-full">{room.size}</span>
                    </div>
                    <h3 className="text-4xl font-serif italic mb-6">{room.name}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                      {room.desc}
                    </p>
                    <div className="flex items-baseline gap-2 mb-10">
                        <span className="text-xs text-gray-400 uppercase tracking-widest">{t.from}</span>
                        <span className="text-2xl font-serif text-[#C5A358]">{room.price}</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">{t.perNight}</span>
                    </div>
                    <button className="px-10 py-4 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.3em] hover:bg-[#C5A358] transition-all duration-500 rounded-full">
                      {t.details}
                    </button>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 — THE FINER DETAILS (Grid) ================= */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <Reveal>
              <span className="text-[#C5A358] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">{t.amenitiesSub}</span>
              <h2 className="text-5xl font-serif italic">{t.amenitiesTitle}</h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {amenities.map((item, i) => (
              <Reveal key={i}>
                <div className="p-8 border border-white/10 hover:border-[#C5A358]/50 transition-colors group">
                  <div className="w-8 h-[1px] bg-[#C5A358] mb-6 group-hover:w-full transition-all duration-700" />
                  <h4 className="text-xl font-serif italic mb-4">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 — CONCIERGE CTA ================= */}
      <section className="py-40 bg-[#fcfaf7]">
        <div className="max-w-5xl mx-auto px-6 text-center border border-[#C5A358]/20 py-20 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fcfaf7] px-8">
            <span className="text-[#C5A358] text-2xl font-serif italic">Azure Concierge</span>
          </div>
          <Reveal>
            <h2 className="text-4xl font-serif italic mb-8">
                {isArabic ? "هل تبحث عن تجربة مخصصة؟" : "Seeking a Bespoke Stay?"}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-12 font-light italic">
                {isArabic 
                    ? "فريق الكونسيرج لدينا جاهز لتلبية كافة احتياجاتك، من ترتيبات السفر الخاصة إلى العشاء الحصري." 
                    : "From private jet transfers to exclusive gallery viewings, our team ensures your stay is exactly as envisioned."
                }
            </p>
            <button className="border-b border-black pb-2 text-[10px] uppercase tracking-[0.4em] hover:text-[#C5A358] hover:border-[#C5A358] transition-all">
                {isArabic ? "تواصل معنا" : "Inquire Privately"}
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}