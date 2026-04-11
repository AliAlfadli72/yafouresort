import { motion } from "framer-motion";

// Animation Helper
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function About({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "جوهر أزور كراون" : "The Azure Legacy",
    heroSubtitle: isArabic
      ? "وجهة فاخرة تعكس جوهر الضيافة الراقية في دبي."
      : "A sanctuary of refined living, where the golden sands meet architectural avant-garde.",
    storyTitle: isArabic ? "النشأة والرؤية" : "Genesis & Vision",
    designTitle: isArabic ? "الهندسة الجمالية" : "Aesthetic Geometry",
    valuesTitle: isArabic ? "دستور الضيافة" : "The Pillars of Azure",
    signature: isArabic ? "التوقيع" : "The Signature",
  };

  return (
    <div className={`bg-[#fcfaf7] text-[#1a1a1a] ${isArabic ? "font-serif-ar" : ""}`} dir={isArabic ? "rtl" : "ltr"}>

      {/* ================= HERO (Wide & Grand) ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Azure Crown Dubai Exterior"
        />
        <div className="relative z-20 text-center text-white px-6">
          <Reveal>
            <h1 className="text-6xl md:text-[7vw] font-serif italic mb-8 leading-none">
              {t.heroTitle}
            </h1>
            <div className="w-16 h-[1px] bg-[#C5A358] mx-auto mb-8" />
            <p className="text-lg font-light tracking-widest max-w-2xl mx-auto opacity-90 uppercase">
              {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= STORY SECTION (The Split) ================= */}
      <section className="py-40 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <Reveal>
            <span className="text-[#C5A358] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Est. 2018</span>
            <h2 className="text-5xl font-serif italic mb-10 leading-tight">
              {t.storyTitle}
            </h2>
            <div className="space-y-8 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                {isArabic
                  ? "منذ تأسيسه، يمثل أزور كراون رؤية جديدة للضيافة الراقية، حيث يجتمع التصميم العصري مع الخدمة الشخصية."
                  : "Azure Crown was born from a singular ambition: to create a residence that feels less like a hotel and more like a private collector’s estate."}
              </p>
              <p>
                {isArabic
                  ? "تم تصميم كل مساحة بعناية لتوفر تجربة إقامة تتجاوز التوقعات، حيث يلتقي التراث مع الحداثة."
                  : "Every corridor, every scent, and every interaction is curated to evoke a sense of timelessness. We don't just host guests; we safeguard their peace."}
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <Reveal delay={0.2}>
              <div className="aspect-[4/5] overflow-hidden rounded-t-full shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
                  className="w-full h-full object-cover"
                  alt="Hotel Interior"
                />
              </div>
              {/* Floating Quote */}
              <div className={`absolute bottom-10 ${isArabic ? '-left-10' : '-right-10'} bg-[#1a1a1a] text-white p-8 max-w-[280px] hidden lg:block shadow-2xl`}>
                <p className="font-serif italic text-lg mb-4">
                  "Luxury is not a price, it is a feeling of being understood."
                </p>
                <span className="text-[#C5A358] text-[10px] uppercase tracking-widest">— Managing Director</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION (Dark Elegant) ================= */}
      <section className="py-32 bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: isArabic ? "أجنحة خاصة" : "Private Suites", val: "142" },
            { label: isArabic ? "جوائز عالمية" : "Global Awards", val: "12" },
            { label: isArabic ? "طاقم عمل" : "Dedicated Staff", val: "300+" },
            { label: isArabic ? "سنة الخبرة" : "Years of Legacy", val: "25" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <h3 className="text-[#C5A358] text-4xl font-serif italic mb-2">{stat.val}</h3>
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= DESIGN SECTION (Asymmetric) ================= */}
      <section className="py-40 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 relative">
            <Reveal>
              <div className="aspect-video overflow-hidden shadow-2xl mb-8">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                  className="w-full h-full object-cover"
                  alt="Architectural Detail"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="aspect-square overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" className="w-full h-full object-cover" />
                </div>
                <div className="pt-8">
                  <p className="text-sm text-gray-400 font-light italic leading-relaxed">
                    {isArabic 
                      ? "نستخدم المواد الطبيعية مثل الرخام الإيطالي وخشب الجوز لخلق بيئة دافئة."
                      : "We employ raw Italian marble and hand-rubbed walnut to create an environment that breathes with the guest."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2">
            <Reveal>
              <h2 className="text-5xl font-serif italic mb-8">{t.designTitle}</h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed mb-10">
                {isArabic
                  ? "الهندسة المعمارية للفندق مستوحاة من البساطة المعاصرة مع لمسات فنية تعكس هوية دبي الحديثة. كل زاوية هي لوحة فنية مرسومة بالضوء والظل."
                  : "Inspired by the movement of the tides and the geometry of the desert, our architecture is a masterclass in 'Quiet Luxury'. It is a sanctuary designed to filter out the noise of the city, replacing it with the soft interplay of light and shadow."}
              </p>
              <button className="border-b border-[#C5A358] pb-2 text-[10px] uppercase tracking-[0.4em] text-[#C5A358]">
                {isArabic ? "شاهد المعرض المعماري" : "Explore Architecture"}
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= PILLARS / VALUES ================= */}
      <section className="py-40 bg-[#fcfaf7] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-20">{t.valuesTitle}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-20">
            {[
              { id: "01", 
                title: isArabic ? "الخصوصية المطلقة" : "Sacred Privacy", 
                desc: isArabic ? "خدمة تتوقع احتياجاتك قبل طلبها." : "Service that anticipates, but never intrudes." 
              },
              { id: "02", 
                title: isArabic ? "الفن المنسق" : "Curated Artistry", 
                desc: isArabic ? "كل تفصيل هو اختيار مقصود للجمال." : "Every texture and tone is a deliberate choice." 
              },
              { id: "03", 
                title: isArabic ? "الاستدامة الراقية" : "Refined Future", 
                desc: isArabic ? "نلتزم بالرفاهية التي تحترم الأرض." : "Luxury that honors the earth and its resources." 
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <span className="text-[#C5A358] font-serif text-3xl italic block mb-6">{item.id}</span>
                <h4 className="text-xl font-serif italic mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}