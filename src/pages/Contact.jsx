import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function Contact({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "تواصل معنا" : "Contact & Location",
    heroSubtitle: isArabic
      ? "فريق الكونسيرج لدينا جاهز لخدمتكم على مدار الساعة لتلبية كافة تطلعاتكم."
      : "Our concierge team is at your disposal 24/7 to orchestrate your perfect stay.",
    formTitle: isArabic ? "استفسار خاص" : "Private Inquiry",
    name: isArabic ? "الاسم الكامل" : "Full Name",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    message: isArabic ? "كيف يمكننا مساعدتك؟" : "How may we assist you?",
    send: isArabic ? "إرسال الطلب" : "Send Inquiry",
    visit: isArabic ? "الموقع" : "The Destination",
    address: isArabic
      ? "نخلة جميرا، الهلال الشرقي، دبي، الإمارات العربية المتحدة"
      : "East Crescent, Palm Jumeirah, Dubai, United Arab Emirates",
    phone: isArabic ? "الهاتف" : "Telephone",
    hours: isArabic ? "ساعات العمل" : "Availability",
    social: isArabic ? "تابعنا" : "Social Presence",
  };

  return (
    <div className={`bg-[#fcfaf7] text-[#1a1a1a] ${isArabic ? "font-serif-ar text-right" : "text-left"}`} dir={isArabic ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section className="pt-48 pb-32 px-6 text-center max-w-5xl mx-auto">
        <Reveal>
            <span className="block text-[10px] uppercase tracking-[0.5em] mb-6 text-[#C5A358] font-bold">Azure Crown Dubai</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8">
            {t.heroTitle}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-light italic">
            {t.heroSubtitle}
            </p>
        </Reveal>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="px-6 md:px-16 pb-40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">

          {/* FORM */}
          <Reveal>
            <div className="bg-white p-12 md:p-16 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-serif italic mb-10 text-[#C5A358]">
                {t.formTitle}
                </h2>

                <form className="space-y-10">
                <div className="group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">{t.name}</label>
                    <input
                    type="text"
                    className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-[#C5A358] transition duration-500 font-light"
                    />
                </div>

                <div className="group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">{t.email}</label>
                    <input
                    type="email"
                    className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-[#C5A358] transition duration-500 font-light"
                    />
                </div>

                <div className="group">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">{t.message}</label>
                    <textarea
                    rows="4"
                    className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-[#C5A358] transition duration-500 resize-none font-light"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-5 bg-[#1a1a1a] text-white uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-[#C5A358] transition-all duration-500"
                >
                    {t.send}
                </button>
                </form>
            </div>
          </Reveal>

          {/* INFO & MAP CARD */}
          <div className="flex flex-col justify-between">
            <Reveal delay={0.2}>
                <div className="space-y-16">
                    <div>
                        <h2 className="text-3xl font-serif italic mb-8">{t.visit}</h2>
                        <p className="text-gray-500 font-light leading-loose text-lg mb-4">{t.address}</p>
                        <button className="text-[10px] uppercase tracking-[0.3em] border-b border-[#C5A358] pb-1 text-[#C5A358]">
                            {isArabic ? "فتح في خرائط جوجل" : "Get Directions"}
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">{t.phone}</p>
                            <p className="text-xl font-serif italic">+971 4 888 0000</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">{t.hours}</p>
                            <p className="text-xl font-serif italic">{isArabic ? "24 ساعة" : "24 / 7"}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-6">{t.social}</p>
                        <div className="flex gap-8">
                            {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                                <a key={social} href="#" className="text-sm font-light hover:text-[#C5A358] transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* SMALL DECORATIVE IMAGE */}
            <div className="hidden lg:block pt-16">
                <img 
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d" 
                    className="w-full h-48 object-cover opacity-80"
                    alt="Concierge Desk"
                />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION (Full Width) ================= */}
      <section className="h-[600px] w-full relative group">
        <iframe 
          title="Azure Crown Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115622.02988358482!2d55.10189324335938!3d25.111812199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f15393279e569%3A0x9ef16035607971!2sPalm%20Jumeirah!5e0!3m2!1sen!2sae!4v1715000000000!5m2!1sen!2sae"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 border-none shadow-inner"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Decorative Overlay for Map */}
        <div className="absolute inset-0 pointer-events-none border-[24px] border-[#fcfaf7]" />
      </section>

      {/* ================= QUOTE ================= */}
      <section className="py-32 text-center">
         <Reveal>
            <p className="text-2xl font-serif italic text-gray-400 max-w-xl mx-auto px-6">
                {isArabic 
                    ? "لا تتردد في الاتصال بنا، فنحن هنا لنجعل إقامتك استثنائية." 
                    : "Distance is merely a detail. Your journey to extraordinary begins here."}
            </p>
         </Reveal>
      </section>

    </div>
  );
}