import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function Dining({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "المطاعم والمقاهي" : "Dining & Cafes",
    heroSubtitle: isArabic
      ? "رحلة تذوق استثنائية ترضي جميع حواسك بأشهى الأطباق المحلية والعالمية."
      : "An exceptional culinary journey satisfying all your senses with local and global dishes.",
    restaurantsTitle: isArabic ? "وجهات تناول الطعام" : "Dining Destinations",
    restaurantsSubtitle: isArabic ? "تشكيلة من أفضل المطابخ العالمية" : "A selection of the best global cuisines",
    reserveBtn: isArabic ? "احجز طاولتك" : "Reserve Table",
    viewMenu: isArabic ? "عرض القائمة" : "View Menu",
  };

  const restaurants = [
    {
      name: isArabic ? "مطعم السرايا" : "Al Saraya Restaurant",
      type: isArabic ? "مأكولات شرقية وغربية" : "Oriental & Western Cuisine",
      desc: isArabic
        ? "المطعم الرئيسي في الفندق يقدم بوفيهاً مفتوحاً للإفطار والغداء والعشاء مع تنوع غني يرضي كل الأذواق وسط إطلالة خلابة."
        : "The main hotel restaurant offers an open buffet for breakfast, lunch, and dinner with a rich variety satisfying all tastes with stunning views.",
      time: isArabic ? "٦:٣٠ ص - ١١:٣٠ م" : "6:30 AM - 11:30 PM",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=78&fm=webp&auto=format",
    },
    {
      name: isArabic ? "أنيس كافيه" : "Anis Cafe",
      type: isArabic ? "مقهى ومخبوزات" : "Cafe & Bakery",
      desc: isArabic
        ? "وجهة مثالية للاجتماعات السريعة أو الاسترخاء بعد الظهر مع تشكيلة من القهوة الممتازة والحلويات الفرنسية والشامية."
        : "A perfect destination for quick meetings or afternoon relaxation with a selection of premium coffee and French-Levantine pastries.",
      time: isArabic ? "٨:٠٠ ص - ١٢:٠٠ ص" : "8:00 AM - 12:00 AM",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=78&fm=webp&auto=format",
    },
    {
      name: isArabic ? "تراس المسبح" : "Poolside Terrace",
      type: isArabic ? "وجبات خفيفة وعصائر" : "Snacks & Juices",
      desc: isArabic
        ? "استمتع بأشعة الشمس والمناظر المنعشة مع قائمة من العصائر الطازجة والوجبات الخفيفة والبيتزا المحضرة على الحطب."
        : "Enjoy the sunshine and refreshing views with a menu of fresh juices, snacks, and wood-fired pizza.",
      time: isArabic ? "١٠:٠٠ ص - غروب الشمس" : "10:00 AM - Sunset",
      img: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&q=78&fm=webp&auto=format",
    },
  ];

  return (
    <div className={`bg-ivory-200 text-charcoal-800 antialiased min-h-screen ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338988a2e8c0?w=1000&q=78&fm=webp&auto=format" 
          className="absolute inset-0 w-full h-full object-cover animate-cinematic-zoom"
          alt="Luxury Dining"
        />
        <div className="relative z-20 text-center text-white px-6 mt-16 text-shadow-lg">
          <Reveal>
            <span className="block text-gold-400 font-bold uppercase tracking-widest mb-6 border-b border-gold-400/30 inline-block pb-2">
                Yafour Resort
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 text-white drop-shadow-md">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto drop-shadow-lg text-white/90">
              {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= RESTAURANTS ================= */}
      <section className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <span className="text-gold-600 uppercase tracking-widest text-sm font-bold mb-4 block">{t.restaurantsSubtitle}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900">{t.restaurantsTitle}</h2>
              <div className="w-16 h-1 bg-green-600 rounded-full mx-auto mt-6" />
            </Reveal>
          </div>

          <div className="space-y-32">
            {restaurants.map((venue, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center`}>
                <div className="w-full md:w-3/5 overflow-hidden rounded-3xl shadow-xl aspect-[16/10]">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    src={venue.img} 
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <div className="w-full md:w-2/5">
                  <Reveal>
                    <div className="flex items-center gap-2 mb-4 text-gold-600">
                        <Icon icon="mdi:silverware-fork-knife" className="text-xl" />
                        <span className="font-bold uppercase tracking-wider text-sm">{venue.type}</span>
                    </div>
                    <h3 className="text-4xl font-heading font-bold mb-6 text-charcoal-900">{venue.name}</h3>
                    <p className="text-charcoal-800/70 text-lg leading-relaxed mb-8">
                      {venue.desc}
                    </p>
                    <div className="flex items-center gap-3 mb-10 bg-ivory-400 p-4 rounded-xl w-fit">
                        <Icon icon="mdi:clock-outline" className="text-green-600 text-xl" />
                        <span className="text-charcoal-800 font-bold">{venue.time}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-green-700 text-white font-bold uppercase tracking-wide hover:bg-green-800 transition-colors rounded-full shadow-md">
                        {t.reserveBtn}
                        </Link>
                        <button className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-gold-500 text-gold-600 font-bold uppercase tracking-wide hover:bg-gold-50 transition-colors rounded-full">
                        {t.viewMenu}
                        </button>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROOM SERVICE BANNER ================= */}
      <section className="py-24 bg-green-800 text-white relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=60&fm=webp&auto=format')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
            <Reveal>
                <Icon icon="mdi:room-service-outline" className="text-6xl text-gold-400 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    {isArabic ? "خدمة الغرف" : "Room Service"}
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                    {isArabic 
                        ? "استمتع بقائمة طعام متنوعة ومحضرة بكل حرفية لتصل إلى غرفتك في أي وقت، لتكتمل تجربة راحتك واستجمامك."
                        : "Enjoy a diverse, expertly prepared menu delivered to your room anytime, perfectly completing your wellness experience."
                    }
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold uppercase tracking-wider border border-white/30">
                    <Icon icon="mdi:phone-in-talk" />
                    <span>{isArabic ? "اطلب الرقم ٣ للخدمة المباشرة" : "Dial 3 for Direct Service"}</span>
                </div>
            </Reveal>
        </div>
      </section>

    </div>
  );
}