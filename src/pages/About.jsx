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
    heroTitle: isArabic ? "قصة يعفور" : "The Yafour Story",
    heroSubtitle: isArabic
      ? "وجهة استثنائية تعكس عراقة الضيافة السورية بين أحضان الطبيعة."
      : "An exceptional destination reflecting the prestige of Syrian hospitality amidst nature.",
    storyTitle: isArabic ? "حيث تلتقي الأصالة بالحاضر" : "Where Heritage Meets the Present",
    designTitle: isArabic ? "التناغم مع الطبيعة" : "Harmony with Nature",
    valuesTitle: isArabic ? "قيمنا الأساسية" : "Our Core Values",
  };

  return (
    <div className={`bg-ivory-200 text-charcoal-800 antialiased min-h-screen ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-green-900/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" 
          className="absolute inset-0 w-full h-full object-cover animate-cinematic-zoom"
          alt="Yafour Resort Exterior"
        />
        <div className="relative z-20 text-center text-white px-6 mt-16 text-shadow-lg">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 text-gold-400">
              {t.heroTitle}
            </h1>
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-8 rounded-full shadow-lg" />
            <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto drop-shadow-md">
              {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="text-gold-600 font-bold text-sm uppercase tracking-widest block mb-4 border-b border-gold-500/20 inline-block pb-2">
              {isArabic ? "تأسس عام ٢٠١٠" : "Established 2010"}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-charcoal-900 leading-snug">
              {t.storyTitle}
            </h2>
            <div className="space-y-6 text-charcoal-800/80 text-lg leading-relaxed">
              <p>
                {isArabic
                  ? "منذ افتتاحه، شكل منتجع يعفور علامة فارقة في عالم السياحة والضيافة في سوريا. بني الفندق على مساحة خضراء شاسعة ليكون الملاذ الأول للباحثين عن الهدوء والاستجمام بعيداً عن صخب المدينة."
                  : "Since its opening, Yafour Resort has been a landmark in the world of tourism and hospitality in Syria. Built over vast greenery, it serves as the premier sanctuary for those seeking tranquility away from the city's hustle."}
              </p>
              <p>
                {isArabic
                  ? "نجمع في يعفور بين روح الضيافة الدمشقية الأصيلة وأحدث معايير الفخامة العالمية لنقدم لضيوفنا تجربة لا تُنسى."
                  : "We combine the spirit of authentic Damascene hospitality with the latest standards of global luxury to offer our guests an unforgettable experience."}
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <Reveal delay={0.2}>
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl border border-ivory-400">
                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  alt="Hotel Interior"
                />
              </div>
              <div className={`absolute -bottom-8 ${isArabic ? '-right-8' : '-left-8'} bg-green-800 text-white p-8 max-w-[300px] hidden lg:block shadow-2xl rounded-2xl`}>
                <p className="font-heading text-xl mb-4 font-bold">
                  {isArabic ? "الرفاهية الحقيقية تكمن في متعة الانسجام مع الطبيعة." : "True luxury is found in the joy of harmonizing with nature."}
                </p>
                <div className="w-8 h-1 bg-gold-400 rounded-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-green-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')] bg-cover mix-blend-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: isArabic ? "غرفة وجناح" : "Rooms & Suites", val: "220" },
            { label: isArabic ? "مطاعم وكافيهات" : "Restaurants & Cafes", val: "5" },
            { label: isArabic ? "قاعات أفراح ومؤتمرات" : "Halls & Conferences", val: "4" },
            { label: isArabic ? "موظف في خدمتكم" : "Dedicated Staff", val: "400+" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <h3 className="text-gold-400 text-5xl font-heading font-bold mb-3 drop-shadow-md">{stat.val}</h3>
              <p className="text-white/80 text-sm font-bold tracking-wider uppercase">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= DESIGN & ARCHITECTURE ================= */}
      <section className="py-32 px-6 md:px-16 bg-ivory-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <Reveal>
              <div className="grid grid-cols-2 gap-6 relative">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg mt-12" alt="Nature Details" />
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg relative -top-12 border-4 border-white" alt="Lobby Details" />
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2">
            <Reveal>
              <h2 className="text-4xl font-heading font-bold mb-8 text-charcoal-900 leading-snug">{t.designTitle}</h2>
              <p className="text-charcoal-800/80 text-lg leading-relaxed mb-8">
                {isArabic
                  ? "يعتمد تصميم منتجع يعفور على دمج العناصر الطبيعية كالمقاطع المائية والمساحات الخضراء الواسعة مع الحجر الأبيض ليخلق بيئة بصرية تريح النفس. الواجهات الزجاجية تمنحك إطلالات كاملة على الحدائق والمسبح الأولمبي."
                  : "The design of Yafour Resort is based on integrating natural elements such as water features and vast green spaces with white stone to create a visually soothing environment. Glass facades provide full views of the gardens and the Olympic pool."}
              </p>
              <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-32 px-6 bg-white border-t border-gold-500/10">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-20">{t.valuesTitle}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { id: "01", 
                title: isArabic ? "كرم الضيافة" : "Generous Hospitality", 
                desc: isArabic ? "نعتني أدق التفاصيل لنجعلك تشعر بأنك في منزلك." : "We care for the smallest details to make you feel at home." 
              },
              { id: "02", 
                title: isArabic ? "الجودة المتميزة" : "Premium Quality", 
                desc: isArabic ? "لا نساوم على الجودة في مأكولاتنا، مرافقنا، وخدماتنا." : "We do not compromise on quality in our food, facilities, and services." 
              },
              { id: "03", 
                title: isArabic ? "التطور المستمر" : "Continuous Innovation", 
                desc: isArabic ? "نعمل دائماً على تجديد مرافقنا لمواكبة أحدث الصيحات." : "We always work on renewing our facilities to keep up with the latest trends." 
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-ivory-400 p-10 rounded-3xl h-full shadow-sm hover:shadow-luxury transition border border-transparent hover:border-gold-500/20 group">
                  <span className="w-16 h-16 rounded-full bg-green-50 text-green-600 font-heading text-2xl font-bold flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition duration-300">{item.id}</span>
                  <h4 className="text-xl font-bold font-heading mb-4 text-charcoal-900">{item.title}</h4>
                  <p className="text-charcoal-800/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}