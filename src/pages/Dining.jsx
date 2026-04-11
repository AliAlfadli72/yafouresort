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

export default function Dining({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "المطاعم والتجارب" : "Gastronomy",
    heroSubtitle: isArabic
      ? "رحلة طهوية استثنائية تجمع بين النكهات العالمية واللمسات المعاصرة."
      : "A curated journey through global flavors, where architectural design meets culinary mastery.",
    signature: isArabic ? "مطعم أزور" : "Azure Signature",
    privateDining: isArabic ? "الطعام الخاص" : "The Private Atelier",
    philosophy: isArabic ? "فلسفة الطهي" : "The Philosophy",
    reserve: isArabic ? "احجز طاولة" : "Secure a Table",
    exploreMenu: isArabic ? "اكتشف القائمة" : "View the Menu",
    cellarTitle: isArabic ? "قبو الخبير" : "The Sommelier's Vault",
    cellarDesc: isArabic 
      ? "مجموعة مختارة من أعرق الكروم العالمية، منسقة بعناية لتكمل وجبتكم." 
      : "A subterranean sanctuary housing over 3,000 labels of rare vintages and artisan spirits."
  };

  return (
    <div className={`bg-[#fcfaf7] text-[#1a1a1a] ${isArabic ? "font-serif-ar" : ""}`} dir={isArabic ? "rtl" : "ltr"}>

      {/* ================= HERO SECTION (Full Height) ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550966842-286e58249217" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Fine Dining Ambiance"
        />
        <div className="relative z-20 text-center text-white px-6">
          <Reveal>
            <span className="block text-[10px] uppercase tracking-[0.5em] mb-6 opacity-80">
                {isArabic ? "تجربة تذوق عالمية" : "World-Class Palate"}
            </span>
            <h1 className="text-6xl md:text-[8vw] font-serif italic mb-8 leading-none tracking-tighter">
              {t.heroTitle}
            </h1>
            <p className="text-lg font-light tracking-wide max-w-2xl mx-auto opacity-90 italic">
              {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= SIGNATURE RESTAURANT (Split Layout) ================= */}
      <section className="py-40 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-[1px] bg-[#C5A358]" />
                    <span className="text-[#C5A358] text-[10px] uppercase tracking-[0.3em] font-bold">Michelin Guide 2026</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-[1.1]">
                  {t.signature}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-12 font-light">
                  {isArabic
                    ? "يقدم مطعم أزور تجربة فريدة حيث تلتقي المكونات الموسمية بأعلى معايير الطهي العالمي. إطلالة بانورامية وأجواء أنيقة تضمن أمسية لا تُنسى."
                    : "Azure transcends traditional dining. Our Executive Chef orchestrates a daily symphony of locally-sourced ingredients and molecular techniques, served against the backdrop of the Dubai skyline."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <button className="px-10 py-5 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.3em] hover:bg-[#C5A358] transition-all duration-500 rounded-full shadow-xl">
                    {t.reserve}
                    </button>
                    <button className="px-10 py-5 border border-gray-200 text-[10px] uppercase tracking-[0.3em] hover:border-[#C5A358] transition-all duration-500 rounded-full">
                    {t.exploreMenu}
                    </button>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7 order-1 md:order-2 relative">
                <Reveal>
                    <div className="aspect-[4/5] md:aspect-[1.2/1] overflow-hidden rounded-sm shadow-2xl">
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.5 }}
                            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Floating Detail Image */}
                    <div className="hidden md:block absolute -bottom-12 -left-12 w-64 h-80 border-[12px] border-[#fcfaf7] shadow-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de" className="w-full h-full object-cover" />
                    </div>
                </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE CELLAR (Dark & Moody) ================= */}
      <section className="py-32 bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
            <Reveal>
                <div className="aspect-square overflow-hidden rounded-full border border-white/10 p-4">
                    <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3" className="w-full h-full object-cover rounded-full opacity-80" />
                </div>
            </Reveal>
            <div>
                <Reveal delay={0.2}>
                    <h2 className="text-5xl font-serif italic mb-8 text-[#C5A358]">{t.cellarTitle}</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                        {t.cellarDesc}
                    </p>
                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                        <div>
                            <span className="text-[#C5A358] text-2xl font-serif">3000+</span>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">{isArabic ? "زجاجة نادرة" : "Rare Vintages"}</p>
                        </div>
                        <div>
                            <span className="text-[#C5A358] text-2xl font-serif">{isArabic ? "خبير" : "Expert"}</span>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">{isArabic ? "تنسيق خاص" : "Sommelier Service"}</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
      </section>

      {/* ================= PRIVATE ATELIER (Private Dining) ================= */}
      <section className="py-40 bg-white px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
                <span className="text-[#C5A358] text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">{isArabic ? "حصري" : "Exclusive"}</span>
                <h2 className="text-5xl font-serif italic mb-8">
                {t.privateDining}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed font-light mb-10">
                {isArabic
                    ? "للحظات الخاصة، نقدم قاعات طعام خاصة مصممة لتناسب الاحتفالات والاجتماعات الرفيعة، مع قوائم طعام مخصصة بإشراف الشيف التنفيذي."
                    : "For those moments that require absolute discretion, our Private Atelier provides a secluded haven. From corporate banquets to intimate proposals, we tailor every detail—from the thread count of the linens to the tempo of the background music."}
                </p>
                <button className="border-b border-black pb-2 text-[10px] uppercase tracking-[0.4em] hover:text-[#C5A358] hover:border-[#C5A358] transition-all">
                    {isArabic ? "استفسر الآن" : "Inquire for Events"}
                </button>
            </Reveal>
          </div>

          <div className="relative">
             <Reveal>
                <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                    <img
                    src="https://images.unsplash.com/photo-1550966842-286e58249217"
                    className="w-full h-full object-cover"
                    />
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY (Full Width Visual) ================= */}
      <section className="py-40 bg-[#fcfaf7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <span className="text-6xl text-[#C5A358] font-serif mb-8 block">“</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-12 tracking-tight">
              {t.philosophy}
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed italic font-light">
              {isArabic
                ? "نؤمن بأن الطهي فن يتجاوز المذاق، إنه تجربة حسية متكاملة. كل طبق يعكس شغفنا بالجودة والابتكار والتفاصيل الدقيقة."
                : "We believe cuisine is an ephemeral art form. It’s the meeting point of geography, history, and raw emotion—plated with precision and served with humility."}
            </p>
          </Reveal>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-[1px] bg-[#C5A358]/20" />
        <div className="absolute top-1/2 right-0 w-64 h-[1px] bg-[#C5A358]/20" />
      </section>

    </div>
  );
}