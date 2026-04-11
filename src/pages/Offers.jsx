import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

export default function Offers({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "العروض الحصرية" : "The Invitations",
    heroSubtitle: isArabic
      ? "باقات موسمية وتجارب مصممة خصيصًا لضيوف أزور كراون."
      : "Seasonal packages and curated residencies crafted for the discerning traveler.",
    from: isArabic ? "ابتداءً من" : "Starting at",
    perNight: isArabic ? "لليلة" : "per night",
    view: isArabic ? "اكتشف المزيد" : "Explore Experience",
    featured: isArabic ? "التجربة الاستثنائية" : "The Signature Stay",
    book: isArabic ? "حجز فوري" : "Reserve Invitation",
    benefits: isArabic ? "تشمل الباقة" : "Inclusions",
  };

  const offers = [
    {
      title: isArabic ? "هروب الرومانسية" : "The Honeymoon Ritual",
      desc: isArabic
        ? "إقامة رومانسية مع عشاء خاص تحت النجوم وجلسة سبا ملكية."
        : "A curated romantic journey featuring candlelit rooftop dining and private spa rituals.",
      price: "3,200 AED",
      img: "https://images.unsplash.com/photo-1544161515-4ad6ce67e340",
      benefits: isArabic ? ["عشاء 5 أطباق", "تدليك للزوجين"] : ["5-Course Dinner", "Couples Massage"]
    },
    {
      title: isArabic ? "ملاذ نهاية الأسبوع" : "The Weekend Solitude",
      desc: isArabic
        ? "استعد توازنك مع إقامة هادئة تشمل دروس يوغا وإفطار عضوي."
        : "Reclaim your time with sunrise yoga, organic breakfast, and guaranteed late check-out.",
      price: "1,800 AED",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      benefits: isArabic ? ["إفطار عضوي", "خروج متأخر"] : ["Organic Breakfast", "Late Check-out"]
    },
    {
      title: isArabic ? "باقة الأعمال الرفيعة" : "The Executive Atelier",
      desc: isArabic
        ? "إقامة تجمع بين الإنتاجية والرفاهية مع خدمة كونسيرج خاصة."
        : "Seamless productivity meeting absolute luxury. Includes airport chauffeur and private office access.",
      price: "2,500 AED",
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      benefits: isArabic ? ["سائق خاص", "قاعة اجتماعات"] : ["Private Chauffeur", "Office Access"]
    },
  ];

  return (
    <div className={`bg-[#fcfaf7] text-[#1a1a1a] ${isArabic ? "font-serif-ar text-right" : "text-left"}`} dir={isArabic ? "rtl" : "ltr"}>

      {/* ================= HERO (Parallax) ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Luxury Resort"
        />
        <div className="relative z-20 text-center text-white px-6">
          <Reveal>
            <span className="block text-[10px] uppercase tracking-[0.5em] mb-6 opacity-70">Azure Crown Collections</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8">{t.heroTitle}</h1>
            <p className="text-lg font-light max-w-2xl mx-auto opacity-90 italic">
              {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FEATURED INVITATION (Full Width) ================= */}
      <section className="py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 shadow-2xl overflow-hidden bg-white">
            <div className="relative h-[500px] md:h-auto overflow-hidden">
               <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" 
                className="w-full h-full object-cover"
               />
               <div className="absolute top-8 left-8 bg-[#C5A358] text-white px-6 py-2 text-[10px] uppercase tracking-widest font-bold">
                  {t.featured}
               </div>
            </div>
            <div className="p-12 md:p-24 flex flex-col justify-center">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-serif italic mb-8 leading-tight">
                  {isArabic ? "باقة الإقامة المذهلة" : "The Grand Azure Residency"}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                   {isArabic
                    ? "استمتع بإقامة شاملة تتضمن جناح فاخر، عشاء ميشلان، وجلسة سبا حصرية في أجواء راقية."
                    : "Experience the pinnacle of Azure Crown. A three-night residency in our Royal Suite including a chef-led tasting menu and unlimited access to the Thermal Suites."}
                </p>
                <div className="flex items-center gap-8 mb-12">
                   <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">{t.from}</span>
                      <span className="text-3xl font-serif text-[#C5A358]">12,000 AED</span>
                   </div>
                </div>
                <button className="w-full md:w-auto px-12 py-5 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.3em] hover:bg-[#C5A358] transition-all duration-500 rounded-sm">
                  {t.book}
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE OFFERS (Asymmetric Layout) ================= */}
      <section className="py-32 px-6 md:px-16 bg-[#f3f1ec]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {offers.map((offer, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-lg">
                    <img
                      src={offer.img}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-700" />
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif italic">{offer.title}</h3>
                    <span className="text-[#C5A358] font-serif text-xl">{offer.price}</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light h-12">
                    {offer.desc}
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-8">
                     <span className="text-[9px] uppercase tracking-widest text-gray-400 block mb-4">{t.benefits}</span>
                     <ul className="grid grid-cols-2 gap-2">
                        {offer.benefits.map((b, i) => (
                           <li key={i} className="text-[10px] uppercase tracking-wider text-gray-600 flex items-center gap-2">
                              <span className="w-1 h-1 bg-[#C5A358] rounded-full" /> {b}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <button className="text-[10px] uppercase tracking-[0.3em] border-b border-[#C5A358] pb-2 hover:text-[#C5A358] transition-all">
                    {t.view}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER NEWSLETTER CTA ================= */}
      <section className="py-40 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl font-serif italic mb-8">
               {isArabic ? "كن أول من يعلم" : "Priority Access"}
            </h2>
            <p className="text-gray-500 mb-12 font-light tracking-wide italic">
               {isArabic 
                ? "انضم إلى قائمتنا البريدية الخاصة للحصول على وصول حصري للعروض الموسمية قبل الجميع."
                : "Join our private circle to receive seasonal invitations and bespoke residency offers before they are released to the public."}
            </p>
            <div className={`flex flex-col md:flex-row gap-4 max-w-md mx-auto ${isArabic ? 'flex-row-reverse' : ''}`}>
               <input 
                type="email" 
                placeholder={isArabic ? "البريد الإلكتروني" : "Your Email Address"} 
                className={`bg-transparent border-b border-white/20 py-4 px-2 outline-none w-full text-xs tracking-widest uppercase focus:border-[#C5A358] transition`}
               />
               <button className="whitespace-nowrap px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A358] hover:text-white transition">
                  {isArabic ? "اشتراك" : "Join Circle"}
               </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}