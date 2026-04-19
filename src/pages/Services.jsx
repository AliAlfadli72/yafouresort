import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import OptimizedImage from "../components/OptimizedImage";

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const services = (isArabic) => [
  {
    icon:  "mdi:pool",
    title: isArabic ? "مجمع المسابح الفاخر" : "Luxury Pool Complex",
    desc:  isArabic
      ? "ثلاثة مسابح مجهزة بأحدث التقنيات: مسبح خارجي بانورامي، مسبح داخلي مغطى، ومسبح للأطفال. درجات حرارة مضبوطة على مدار الساعة."
      : "Three state-of-the-art pools: panoramic outdoor pool, covered indoor pool, and children's pool. Temperature controlled around the clock.",
    img:   "/pool.webp",
    features: isArabic
      ? ["مسبح بانورامي خارجي", "مسبح داخلي مدفأ", "كبائن واسعة مريحة", "طاقم إنقاذ متخصص"]
      : ["Panoramic Outdoor Pool", "Heated Indoor Pool", "Spacious Private Cabanas", "Specialist Lifeguard Team"],
  },
  {
    icon:  "mdi:spa",
    title: isArabic ? "السبا ومركز الاسترخاء" : "Spa & Wellness Center",
    desc:  isArabic
      ? "ملاذ للاسترخاء التام مع أحدث تقنيات العناية الصحية. جيئ بجسدك إلى التوازن من خلال جلسات المساج، الحمام المغربي، والعلاجات الطبيعية."
      : "A sanctuary for complete relaxation with the latest wellness technologies. Balance your body through massage sessions, Moroccan bath, and natural treatments.",
    img:   "https://images.unsplash.com/photo-1544161515-4ad6ce67e340?w=800&q=78&fm=webp&auto=format",
    features: isArabic
      ? ["مساج سويدي وشرقي", "حمام مغربي أصيل", "سونا وبخار", "علاجات طبيعية بالأعشاب"]
      : ["Swedish & Oriental Massage", "Authentic Moroccan Bath", "Sauna & Steam Room", "Natural Herbal Treatments"],
  },
  {
    icon:  "mdi:horse-variant",
    title: isArabic ? "نادي الفروسية" : "Equestrian Club",
    desc:  isArabic
      ? "تجربة فروسية لا مثيل لها على أرض يعفور الخضراء. نقدم دروساً للمبتدئين وركض حر للمحترفين في أجواء ريفية أصيلة."
      : "An unmatched equestrian experience on Yafour's lush grounds. We offer lessons for beginners and free riding for professionals in an authentic rural atmosphere.",
    img:   "/hero.webp",
    features: isArabic
      ? ["خيول مُدربة عالية الجودة", "مدربون معتمدون دولياً", "مسار ركض آمن ومجهز", "دروس للجميع (أطفال / بالغون)"]
      : ["High-Quality Trained Horses", "Internationally Certified Trainers", "Safe & Equipped Riding Track", "Classes for All (Children / Adults)"],
  },
  {
    icon:  "mdi:party-popper",
    title: isArabic ? "قاعات الأعراس والمناسبات" : "Wedding & Event Halls",
    desc:  isArabic
      ? "مساحات استثنائية لأرقى المناسبات الاجتماعية. من أفراح الأحلام إلى حفلات التخرج، نوفر كل شيء بأعلى معايير الجودة."
      : "Exceptional spaces for society's finest occasions. From dream weddings to graduation parties, we provide everything to the highest quality standards.",
    img:   "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=78&fm=webp&auto=format",
    features: isArabic
      ? ["سعة تستيعاب تصل لـ 500 شخص", "أطقم كوادر متخصصة", "خيارات قوائم طعام متنوعة", "تنسيق ديكور احترافي"]
      : ["Capacity up to 500 guests", "Specialized Event Teams", "Diverse Menu Options", "Professional Décor Coordination"],
  },
  {
    icon:  "mdi:human-capacity-increase",
    title: isArabic ? "قاعات المؤتمرات والأعمال" : "Conference & Business Halls",
    desc:  isArabic
      ? "بيئات عمل احترافية مجهزة بأحدث تقنيات الاتصال والعرض. مثالية للمؤتمرات الكبرى، ورش العمل، واجتماعات الشركات."
      : "Professional work environments equipped with the latest communication and presentation technologies. Perfect for major conferences, workshops, and corporate meetings.",
    img:   "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=78&fm=webp&auto=format",
    features: isArabic
      ? ["شاشات عرض عالية الدقة", "نظام صوت وتسجيل متكامل", "إنترنت فائق السرعة", "ضيافة أعمال راقية"]
      : ["High-Resolution Display Screens", "Integrated Audio & Recording System", "Ultra-Fast Internet", "Premium Business Hospitality"],
  },
  {
    icon:  "mdi:dumbbell",
    title: isArabic ? "النادي الرياضي" : "Sports & Fitness Club",
    desc:  isArabic
      ? "نادٍ رياضي حديث مجهز بأحدث الأجهزة العالمية. مفتوح لضيوف المنتجع على مدار الساعة مع وجود مدربين شخصيين متخصصين."
      : "A modern fitness club equipped with the latest international equipment. Open to resort guests around the clock with specialized personal trainers available.",
    img:   "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=78&fm=webp&auto=format",
    features: isArabic
      ? ["أجهزة كارديو وقوة متطورة", "مدربون شخصيون", "يوغا وبيلاتس", "فتحات نهارية ومسائية"]
      : ["Advanced Cardio & Strength Equipment", "Personal Trainers", "Yoga & Pilates Classes", "Day & Evening Sessions"],
  },
];

export default function Services({ lang }) {
  const isArabic = lang === "ar";
  const serviceData = services(isArabic);

  return (
    <div className="bg-ivory-200 text-charcoal-800 antialiased" dir={isArabic ? "rtl" : "ltr"}>

      {/* ===== HERO ===== */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-forest-600">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 animate-cinematic-zoom"
          style={{ backgroundImage: "url('/pool.webp')" }}
        />
        <div className="absolute inset-0 overlay-green" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="section-label text-gold-400"
          >
            {isArabic ? "ما نقدمه" : "What We Offer"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-heading font-extrabold text-5xl md:text-6xl mt-2"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}
          >
            {isArabic ? "خدمات المنتجع" : "Resort Services"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white/70 text-lg mt-4 max-w-xl mx-auto"
          >
            {isArabic
              ? "كل ما تحتاجه لإقامة فاخرة كاملة تحت سقف واحد"
              : "Everything you need for a complete luxury stay under one roof"
            }
          </motion.p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24 px-6">
        <div className="max-w-[1300px] mx-auto space-y-24">
          {serviceData.map((service, i) => (
            <Reveal key={i} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <div className={i % 2 !== 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-green-deep">
                    <OptimizedImage
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 !== 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                  <div className="w-14 h-14 rounded-2xl bg-forest-600/10 flex items-center justify-center mb-6">
                    <Icon icon={service.icon} className="text-3xl text-forest-600" />
                  </div>
                  <span className="section-label">{isArabic ? "خدماتنا" : "Our Services"}</span>
                  <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-charcoal-900 mt-2 mb-5 leading-[1.2]">
                    {service.title}
                  </h2>
                  <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-charcoal-700">
                        <div className="w-6 h-6 rounded-full bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                          <Icon icon="mdi:check" className="text-gold-600 text-sm" />
                        </div>
                        <span className="text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/book"
                    id={`service-book-${i}`}
                    className="inline-flex items-center gap-2 font-bold text-forest-600 border-b-2 border-forest-600 pb-0.5 hover:text-forest-500 transition-colors duration-300"
                  >
                    {isArabic ? "احجز هذه الخدمة" : "Book This Service"}
                    <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 bg-forest-600 text-white text-center px-6">
        <Reveal>
          <span className="section-label text-gold-400">{isArabic ? "تواصل معنا" : "Get In Touch"}</span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl mt-2 mb-4">
            {isArabic ? "هل لديك استفسار حول خدماتنا؟" : "Questions About Our Services?"}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            {isArabic
              ? "فريقنا المتخصص جاهز للإجابة على استفساراتك وتلبية طلباتك على مدار الساعة."
              : "Our specialized team is ready to answer your questions and fulfill your requests around the clock."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" id="services-contact-btn" className="btn-gold inline-flex items-center gap-3 text-sm">
              <Icon icon="mdi:phone" className="text-lg" />
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
            <a
              href="https://wa.me/963933123456"
              target="_blank"
              rel="noreferrer"
              id="services-whatsapp-btn"
              className="btn-white-glass inline-flex items-center gap-3 text-sm"
            >
              <Icon icon="mdi:whatsapp" className="text-lg" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
