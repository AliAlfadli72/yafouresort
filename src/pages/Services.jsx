import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function Services({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "خدمات استثنائية" : "Exceptional Services",
    heroSubtitle: isArabic 
      ? "تجارب مُصممة خصيصاً لراحتك ورفاهيتك في منتجع يعفور" 
      : "Experiences tailored specifically for your comfort and well-being at Yafour Resort",
    exploreBtn: isArabic ? "اكتشف الخدمات" : "Explore Services",
    discoverMore: isArabic ? "المزيد من التفاصيل" : "Discover More",
  };

  const services = [
    {
      id: "spa",
      title: isArabic ? "السبا والمركز الصحي" : "Spa & Wellness Center",
      description: isArabic 
        ? "استعد حيويتك في السبا الفاخر الذي يوفر جلسات تدليك وعلاجات مائية ومرافق جاكوزي ضمن أجواء هادئة تأخذك بعيداً عن صخب الحياة للوصول إلى الاسترخاء التام."
        : "Rejuvenate in our luxury spa offering massage sessions, hydrotherapy, and jacuzzi facilities within a tranquil atmosphere taking you away from the bustle of life to absolute relaxation.",
      features: isArabic ? ["جلسات تدليك", "ساونا وجاكوزي", "عناية بالبشرة", "غرف استرخاء"] : ["Massage Therapy", "Sauna & Jacuzzi", "Skin Care", "Relaxation Rooms"],
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop",
      icon: "mdi:spa",
    },
    {
      id: "pool",
      title: isArabic ? "المسابح الفاخرة" : "Luxury Pools",
      description: isArabic
        ? "استمتع بأشعة الشمس الساحرة في مسابحنا الخارجية المحاطة بالحدائق الغناء، أو استرخِ في المسبح الداخلي المُدفأ المتاح طوال العام والذي يقدم لك تجربة سباحة فريدة."
        : "Enjoy the enchanting sunshine in our outdoor pools surrounded by lush gardens, or relax in the year-round heated indoor pool providing a unique swimming experience.",
      features: isArabic ? ["مسبح أوليمبي خارجي", "مسبح داخلي مدفأ", "أسرة تشمس فاخرة", "خدمة التراس المباشرة"] : ["Olympic Outdoor Pool", "Heated Indoor Pool", "Luxury Sunbeds", "Direct Terrace Service"],
      img: "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2670&auto=format&fit=crop",
      icon: "mdi:pool",
    },
    {
      id: "gym",
      title: isArabic ? "النادي الرياضي (GYM)" : "Fitness Center (GYM)",
      description: isArabic
        ? "حافظ على لياقتك البدنية خلال إقامتك مع صالتنا الرياضية المجهزة بأحدث الآلات التكنولوجية، وبإشراف مدربين محترفين يقدمون لك المشورة والدعم لتحقيق أهدافك."
        : "Maintain your fitness during your stay with our gym equipped with the latest technology, supervised by professional trainers providing advice and support to achieve your goals.",
      features: isArabic ? ["معدات حديثة ذكية", "مدربون معتمدون", "استوديو يوجا", "بار للمشروبات الصحية"] : ["Modern Smart Equip.", "Certified Trainers", "Yoga Studio", "Health Drinks Bar"],
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
      icon: "mdi:weight-lifter",
    },
    {
      id: "events",
      title: isArabic ? "قاعات المؤتمرات والاحتفالات" : "Conferences & Events Halls",
      description: isArabic
        ? "نوفر مساحات شاسعة وقاعات مجهزة بأحدث التقنيات الصوتية والمرئية لضمان نجاح اجتماعاتكم، مؤتمراتكم، وأفراحكم الخاصة ضمن بيئة تنظيمية لا مثيل لها."
        : "We provide expansive spaces and halls equipped with the latest audiovisual technologies to ensure the success of your meetings, conferences, and private celebrations in an unparalleled organizational environment.",
      features: isArabic ? ["قاعات اجتماعات فخمة", "تنظيم حفلات زفاف", "تقديم الطعام الشامل", "معدات تقنية متطورة"] : ["Luxury Meeting Rooms", "Wedding Planning", "Comprehensive Catering", "Advanced Tech Equip."],
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2670&auto=format&fit=crop",
      icon: "mdi:curtains",
    }
  ];

  return (
    <div className={`bg-ivory-200 text-charcoal-800 antialiased min-h-screen ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover animate-cinematic-zoom"
          alt="Spa Resort Services"
        />
        <div className="relative z-20 text-center text-white px-6 mt-16 text-shadow-lg">
          <Reveal>
            <span className="block text-gold-400 font-bold uppercase tracking-widest mb-6 border-b border-gold-400/30 inline-block pb-2">
                Yafour Resort
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 text-white drop-shadow-md">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto drop-shadow-lg text-white/95 leading-relaxed">
              {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICES LISTING ================= */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {services.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <Reveal>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            src={service.img} 
                            alt={service.title}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute -bottom-6 ${idx % 2 !== 0 ? '-left-6' : '-right-6'} w-32 h-32 bg-gold-400/20 rounded-full blur-3xl -z-10`} />
                </Reveal>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <Reveal delay={0.2}>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-700 shadow-sm border border-green-100">
                          <Icon icon={service.icon} className="text-3xl" />
                      </div>
                      <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">
                          Yafour {service.id}
                      </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-6 drop-shadow-sm">
                      {service.title}
                  </h2>
                  
                  <p className="text-lg text-charcoal-800/80 leading-relaxed mb-10 text-justify">
                      {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-charcoal-800 font-bold bg-ivory-400/50 px-4 py-3 rounded-xl border border-ivory-400">
                              <Icon icon="mdi:check-circle" className="text-green-600 text-lg flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                          </div>
                      ))}
                  </div>

                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gold-500 text-gold-600 font-bold uppercase tracking-widest rounded-xl hover:bg-gold-50 transition-colors shadow-sm">
                      <span>{t.discoverMore}</span>
                      <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} className="text-lg" />
                  </button>
                </Reveal>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 bg-green-900 text-white relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop')] bg-cover mix-blend-overlay opacity-20"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {isArabic ? "جاهز لتجربة لا تُنسى؟" : "Ready for an unforgettable experience?"}
            </h2>
            <p className="text-xl text-white/80 mb-10">
                {isArabic ? "فريق كونسيرج يعفور مستعد دائماً لتلبية كافة طلباتك وترتيب نشاطاتك." : "The Yafour concierge team is always ready to fulfill your every request and arrange your activities."}
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-white font-bold uppercase tracking-widest hover:bg-gold-600 transition-colors rounded-xl shadow-luxury">
                {isArabic ? "تواصل مع الكونسيرج" : "Contact Concierge"}
            </a>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
