import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// Animation Helper
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function Offers({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "باقات وعروض مميزة" : "Exclusive Offers",
    heroSubtitle: isArabic
      ? "تجارب صممت خصيصاً لتمنحك إقامة لا تُنسى في أحضان الطبيعة."
      : "Curated experiences designed to give you an unforgettable stay surrounded by nature.",
    from: isArabic ? "ابتداءً من" : "Starting at",
    view: isArabic ? "اكتشف العرض" : "Explore Offer",
    featured: isArabic ? "العرض الذهبي" : "The Golden Offer",
    book: isArabic ? "احجز الآن" : "Book Now",
    benefits: isArabic ? "تشمل الباقة" : "Inclusions",
  };

  const offers = [
    {
      title: isArabic ? "عطلة نهاية الأسبوع" : "Weekend Escape",
      desc: isArabic
        ? "استمتع بإجازة قصيرة مع العائلة تتضمن وجبة إفطار مجانية وعشاء مشاوي فاخر."
        : "Enjoy a short getaway with your family including free breakfast and a deluxe BBQ dinner.",
      price: "$ 450",
      img: "https://images.unsplash.com/photo-1544161515-4ad6ce67e340?w=700&q=78&fm=webp&auto=format",
      benefits: isArabic ? ["إفطار بوفيه مفتوح", "عشاء مشاوي", "دخول المسبح"] : ["Open Buffet Breakfast", "BBQ Dinner", "Pool Access"]
    },
    {
      title: isArabic ? "باقة شهر العسل" : "Honeymoon Package",
      desc: isArabic
        ? "أجواء رومانسية لا تُنسى تتضمن جناحاً مزيناً بالورود وجلسة مساج استرخائية للزوجين."
        : "An unforgettable romantic atmosphere including a flower-decorated suite and a relaxing couples massage.",
      price: "$ 850",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=78&fm=webp&auto=format",
      benefits: isArabic ? ["تزيين الجناح", "مساج استرخائي", "عشاء خاص"] : ["Suite Decoration", "Relaxing Massage", "Private Dinner"]
    },
    {
      title: isArabic ? "باقة الاستجمام" : "Wellness Retreat",
      desc: isArabic
        ? "استعد نشاطك مع إقامة تتضمن باقة علاجية في السبا ودخولاً غير محدود للنادي الصحي."
        : "Recharge your energy with a stay that includes a spa treatment package and unlimited health club access.",
      price: "$ 600",
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=78&fm=webp&auto=format",
      benefits: isArabic ? ["علاج سبا كامل", "وجبات صحية", "نادي صحي"] : ["Full Spa Treatment", "Healthy Meals", "Health Club"]
    },
  ];

  return (
    <div className={`bg-ivory-200 text-charcoal-800 antialiased min-h-screen ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0 bg-green-900/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=78&fm=webp&auto=format" 
          className="absolute inset-0 w-full h-full object-cover animate-cinematic-zoom"
          alt="Luxury Resort Offers"
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

      {/* ================= FEATURED OFFER ================= */}
      <section className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden border border-ivory-400 bg-ivory-200">
            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
               <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=78&fm=webp&auto=format" 
                className="w-full h-full object-cover cursor-pointer"
               />
               <div className="absolute top-8 left-8 bg-gold-500 text-white font-bold px-6 py-2 rounded-full shadow-md z-10 flex items-center gap-2">
                 <Icon icon="mdi:star-four-points" />
                 {t.featured}
               </div>
            </div>
            <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-charcoal-900 leading-tight">
                  {isArabic ? "باقة الإقامة المذهلة" : "The Grand Yafour Residency"}
                </h2>
                <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
                <p className="text-charcoal-800/80 text-lg leading-relaxed mb-10">
                   {isArabic
                    ? "استمتع بإقامة شاملة تتضمن الجناح الملكي، عشاء فاخر، وجلسة سبا حصرية مع إطلالات ساحرة على مساحاتنا الخضراء لتجربة استجمام لا تضاهى."
                    : "Experience the pinnacle of Yafour Resort. A premium residency in our Royal Suite including a fine dining experience, exclusive spa session, and enchanting green views."}
                </p>
                <div className="flex items-center gap-6 mb-12 pb-8 border-b border-gray-100">
                   <div>
                      <span className="text-sm text-charcoal-800/60 uppercase font-bold tracking-widest block mb-2">{t.from}</span>
                      <span className="text-4xl font-heading font-bold text-green-700">$ 1,200</span>
                   </div>
                </div>
                <Link to="/book" className="inline-flex w-full md:w-auto items-center justify-center px-12 py-5 bg-gold-500 text-white uppercase font-bold tracking-wider hover:bg-gold-600 transition-colors rounded-full shadow-lg">
                  {t.book}
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALL OFFERS ================= */}
      <section className="py-32 px-6 md:px-16 bg-ivory-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {offers.map((offer, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={offer.img}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 text-green-700 font-bold px-4 py-2 rounded-full text-sm shadow">
                      {offer.price}
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-3xl font-heading font-bold text-charcoal-900 mb-4">{offer.title}</h3>
                    <p className="text-charcoal-800/70 text-base leading-relaxed mb-8 flex-grow">
                      {offer.desc}
                    </p>

                    <div className="border-t border-gray-100 pt-6 mb-8">
                       <span className="text-sm font-bold uppercase text-gold-600 block mb-4 flex items-center gap-2">
                        <Icon icon="mdi:gift" />
                        {t.benefits}
                       </span>
                       <ul className="grid grid-cols-1 gap-3">
                          {offer.benefits.map((b, i) => (
                             <li key={i} className="text-sm font-bold text-charcoal-800 flex items-center gap-2">
                                <Icon icon="mdi:check-circle" className="text-green-600" /> 
                                {b}
                             </li>
                          ))}
                       </ul>
                    </div>

                    <Link to="/book" className="flex items-center justify-between text-green-700 font-bold uppercase tracking-wider hover:text-green-900 transition-colors bg-green-50 px-6 py-4 rounded-xl mt-auto group-hover:bg-green-100">
                      {t.view}
                      <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-40 bg-green-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=60&fm=webp&auto=format')] bg-cover mix-blend-overlay opacity-10 blur-sm"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <Reveal>
            <Icon icon="mdi:email-newsletter" className="text-6xl text-gold-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
               {isArabic ? "اشترك في النشرة البريدية" : "Join Our Newsletter"}
            </h2>
            <p className="text-white/80 mb-12 text-lg">
               {isArabic 
                ? "انضم إلينا للحصول على وصول حصري لأحدث العروض والباقات قبل الجميع."
                : "Join us to get exclusive access to our latest offers and packages before anyone else."}
            </p>
            <form className={`flex flex-col sm:flex-row gap-4 max-w-lg mx-auto ${isArabic ? 'sm:flex-row-reverse' : ''}`} onSubmit={e => e.preventDefault()}>
               <div className="relative flex-grow">
                 <Icon icon="mdi:email-outline" className="text-white/50 absolute top-1/2 -translate-y-1/2 left-4 text-xl" />
                 <input 
                  type="email" 
                  placeholder={isArabic ? "البريد الإلكتروني" : "Your Email Address"} 
                  className={`bg-white/10 backdrop-blur-md border border-white/20 py-4 ${isArabic ? 'pr-4 pl-12' : 'pl-12 pr-4'} rounded-full outline-none w-full font-bold text-white placeholder-white/50 focus:border-gold-400 transition`}
                  required
                 />
               </div>
               <button type="submit" className="px-10 py-4 bg-gold-500 text-white font-bold uppercase tracking-wider hover:bg-gold-600 transition rounded-full shadow-lg flex items-center justify-center gap-2">
                  <span>{isArabic ? "اشتراك" : "Subscribe"}</span>
               </button>
            </form>
          </Reveal>
        </div>
      </section>

    </div>
  );
}