import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// Animation Helper
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
      ? "تجسيد للراحة المطلقة وسط الطبيعة الخلابة."
      : "The embodiment of absolute comfort amidst breathtaking nature.",
    collection: isArabic ? "مجموعتنا الفاخرة" : "Our Luxury Collection",
    collectionSub: isArabic ? "مساحات تعكس ذوقك الرفيع" : "Spaces Reflecting Refined Taste",
    amenitiesTitle: isArabic ? "ميزات الإقامة" : "Stay Features",
    amenitiesSub: isArabic ? "كل مايلزم لراحتك التامة" : "Everything needed for total comfort",
    from: isArabic ? "ابتداءً من" : "From",
    perNight: isArabic ? "لليلة" : "per night",
    details: isArabic ? "احجز الغرفة" : "Book Room",
  };

  const amenities = [
    { icon: "mdi:wifi", title: isArabic ? "إنترنت فائق السرعة" : "High-Speed WiFi", desc: isArabic ? "متاح في كافة أنحاء المنتجع مجاناً" : "Available complimentary throughout the resort" },
    { icon: "mdi:television-classic", title: isArabic ? "شاشات ذكية" : "Smart TVs", desc: isArabic ? "قياس 55 بوصة مع قنوات فضائية" : "55-inch displays with satellite channels" },
    { icon: "mdi:camera-control", title: isArabic ? "إطلالات بانورامية" : "Panoramic Views", desc: isArabic ? "شرفات مطلة على المسبح والحدائق" : "Balconies overlooking the pool and gardens" },
    { icon: "mdi:room-service", title: isArabic ? "خدمة الغرف" : "Room Service", desc: isArabic ? "خدمة مميزة على مدار 24 ساعة" : "Premium 24-hour room service" },
  ];

  const rooms = [
    {
      name: isArabic ? "الجناح الملكي" : "Royal Suite",
      size: "150 m²",
      desc: isArabic
        ? "مساحة استثنائية تضم غرفتي نوم وصالة معيشة مع إطلالة خلابة على الطبيعة للباحثين عن الفخامة الفائقة."
        : "An exceptional space featuring two bedrooms and a living area with breathtaking nature views for ultimate luxury.",
      price: "$ 500",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      features: isArabic ? ["٢ سرير كنغ", "جاكوزي خاص", "تراس كبير"] : ["2 King Beds", "Private Jacuzzi", "Large Terrace"],
    },
    {
      name: isArabic ? "جناح الأمراء" : "Princes Suite",
      size: "95 m²",
      desc: isArabic
        ? "تتميز بتصميم كلاسيكي متناغم مع حداثة التجهيزات ومساحة جلوس مريحة."
        : "Features a classic design harmonized with modern amenities and a comfortable seating area.",
      price: "$ 350",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      features: isArabic ? ["سرير كنغ", "حمام رخامي", "إطلالة مسبح"] : ["1 King Bed", "Marble Bath", "Pool View"],
    },
    {
      name: isArabic ? "غرفة ديلوكس مزدوجة" : "Deluxe Double Room",
      size: "45 m²",
      desc: isArabic
        ? "مثالية للعائلات الصغيرة أو الأصدقاء، تجهيزات راقية وإطلالة مريحة على الحدائق المنسقة."
        : "Perfect for small families or friends, high-end amenities, and relaxing views of the landscaped gardens.",
      price: "$ 150",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      features: isArabic ? ["سريرا توأم", "بلكونة", "مكتب عمل"] : ["Twin Beds", "Balcony", "Work Desk"],
    },
  ];

  return (
    <div className={`bg-ivory-200 text-charcoal-800 antialiased min-h-screen ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>
      
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461" 
          className="absolute inset-0 w-full h-full object-cover animate-cinematic-zoom"
          alt="Luxury Hotel Room"
        />
        <div className="relative z-20 text-center text-white px-6">
          <Reveal>
            <span className="block text-gold-400 font-bold uppercase tracking-widest mb-6">Yafour Resort</span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 drop-shadow-lg">
              {t.heroTitle}
            </h1>
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-8 rounded-full shadow-lg" />
            <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto drop-shadow-md">
              {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= ROOMS COLLECTION ================= */}
      <section className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <Reveal>
              <span className="text-gold-600 uppercase tracking-widest text-sm font-bold mb-4 block border-b border-gold-500/20 inline-block pb-2">{t.collection}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900">{t.collectionSub}</h2>
            </Reveal>
          </div>

          <div className="space-y-32">
            {rooms.map((room, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center`}>
                <div className="w-full md:w-3/5 overflow-hidden rounded-3xl shadow-xl">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    src={room.img} 
                    className="w-full aspect-[4/3] md:aspect-[16/10] object-cover cursor-pointer"
                  />
                </div>
                <div className="w-full md:w-2/5">
                  <Reveal>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">{room.size}</span>
                        <div className="flex gap-2">
                          {room.features.map((feat, idx) => (
                            <span key={idx} className="bg-ivory-400 text-charcoal-800/80 text-xs font-bold px-3 py-1.5 rounded-full">{feat}</span>
                          ))}
                        </div>
                    </div>
                    <h3 className="text-4xl font-heading font-bold mb-6 text-charcoal-900">{room.name}</h3>
                    <p className="text-charcoal-800/70 text-lg leading-relaxed mb-8">
                      {room.desc}
                    </p>
                    <div className="flex items-center gap-3 mb-10 pb-10 border-b border-gray-100">
                        <span className="text-sm text-charcoal-800/60 uppercase font-bold">{t.from}</span>
                        <span className="text-3xl font-heading font-bold text-gold-600">{room.price}</span>
                        <span className="text-sm text-charcoal-800/60 uppercase font-bold">{t.perNight}</span>
                    </div>
                    <Link to="/book" className="inline-block px-10 py-4 bg-green-700 text-white font-bold uppercase tracking-wide hover:bg-green-800 transition-colors rounded-full shadow-md">
                      {t.details}
                    </Link>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AMENITIES GRID ================= */}
      <section className="py-24 bg-ivory-400 border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-gold-600 uppercase tracking-widest text-sm font-bold mb-4 block">{t.amenitiesSub}</span>
              <h2 className="text-4xl font-heading font-bold text-charcoal-900">{t.amenitiesTitle}</h2>
              <div className="w-16 h-1 bg-green-600 rounded-full mx-auto mt-6" />
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <Icon icon={item.icon} className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading mb-2 text-charcoal-900">{item.title}</h4>
                    <p className="text-charcoal-800/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-green-900 text-center relative text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')] bg-cover mix-blend-overlay opacity-10"></div>
        <div className="relative z-10 px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                {isArabic ? "هل ترغب بترتيبات خاصة؟" : "Want Special Arrangements?"}
            </h2>
            <p className="max-w-xl mx-auto mb-10 text-white/80 text-lg">
                {isArabic 
                    ? "فريق الاستقبال لدينا جاهز لتلبية كافة احتياجاتك لتكون إقامتك مميزة بكل المقاييس." 
                    : "Our reception team is ready to meet all your needs to make your stay exceptional by all means."
                }
            </p>
            <Link to="/contact" className="inline-block px-12 py-4 bg-gold-500 text-white uppercase text-sm font-bold tracking-widest hover:bg-white hover:text-green-700 transition duration-300 rounded-full shadow-xl hover:shadow-2xl">
                {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}