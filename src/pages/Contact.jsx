import { motion } from "framer-motion";
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

export default function Contact({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "تواصل معنا" : "Contact Us",
    heroSubtitle: isArabic
      ? "فريق منتجع يعفور في خدمتكم دائماً لضمان تجربة لا تُنسى."
      : "The Yafour Resort team is always at your service to ensure an unforgettable experience.",
    formTitle: isArabic ? "أرسل رسالة" : "Send a Message",
    name: isArabic ? "الاسم الكامل" : "Full Name",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    message: isArabic ? "اكتب رسالتك هنا..." : "Write your message here...",
    send: isArabic ? "إرسال الطلب" : "Send Inquiry",
    visit: isArabic ? "معلومات الاتصال" : "Contact Information",
    addressTitle: isArabic ? "العنوان" : "Address",
    address: isArabic
      ? "قرية يعفور، طريق دمشق - بيروت الدولي، ريف دمشق، سوريا"
      : "Yafour Village, Damascus-Beirut Highway, Rural Damascus, Syria",
    phone: isArabic ? "الهاتف" : "Telephone",
    hoursTitle: isArabic ? "ساعات العمل" : "Working Hours",
    hours: isArabic ? "متاحون على مدار الساعة" : "Available 24/7",
    social: isArabic ? "منصاتنا" : "Our Platforms",
  };

  return (
    <div className={`bg-ivory-200 text-charcoal-800 antialiased min-h-screen ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section className="relative pt-48 pb-24 px-6 bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')] bg-cover mix-blend-overlay opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="block text-gold-400 font-bold uppercase tracking-widest mb-6 border-b border-gold-400/30 inline-block pb-2">
                Yafour Resort
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-md">
                {t.heroTitle}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-bold">
                {t.heroSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT SPLIT ================= */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* RIGHT/LEFT: Form */}
          <Reveal>
            <div className="bg-ivory-200 p-10 md:p-14 rounded-3xl shadow-luxury border border-ivory-400">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                        <Icon icon="mdi:email-fast-outline" className="text-2xl" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-charcoal-900">
                        {t.formTitle}
                    </h2>
                </div>

                <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                    <div>
                        <label className="text-sm font-bold text-charcoal-800 mb-2 block">{t.name}</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-charcoal-800 mb-2 block">{t.email}</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-charcoal-800 mb-2 block">{t.message}</label>
                        <textarea
                            rows="5"
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 bg-gold-500 text-white uppercase font-bold tracking-wider hover:bg-gold-600 transition rounded-xl shadow-md flex items-center justify-center gap-2"
                    >
                        <span>{t.send}</span>
                        <Icon icon={isArabic ? "mdi:send-variant-outline" : "mdi:send-variant"} className={isArabic ? "rotate-180" : ""} />
                    </button>
                </form>
            </div>
          </Reveal>

          {/* LEFT/RIGHT: Info */}
          <div className="space-y-12">
            <Reveal delay={0.2}>
                <h2 className="text-4xl font-heading font-bold text-charcoal-900 mb-10">{t.visit}</h2>
                
                <div className="grid gap-8">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon icon="mdi:map-marker-outline" className="text-2xl text-green-600" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold font-heading mb-2 text-charcoal-900">{t.addressTitle}</h4>
                            <p className="text-charcoal-800/80 leading-relaxed max-w-sm">{t.address}</p>
                            <button className="text-green-600 font-bold text-sm mt-3 hover:text-green-800 transition flex items-center gap-1 border-b border-green-600 pb-1 w-fit">
                                <Icon icon="mdi:directions" />
                                {isArabic ? "الحصول على الاتجاهات" : "Get Directions"}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon icon="mdi:phone-outline" className="text-2xl text-green-600" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold font-heading mb-2 text-charcoal-900">{t.phone}</h4>
                            <p className="text-charcoal-800/80 leading-relaxed" dir="ltr">+963 (11) 393 0000</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon icon="mdi:clock-outline" className="text-2xl text-green-600" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold font-heading mb-2 text-charcoal-900">{t.hoursTitle}</h4>
                            <p className="text-charcoal-800/80 leading-relaxed">{t.hours}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-10 border-t border-gray-100">
                    <h4 className="text-lg font-bold font-heading mb-6 text-charcoal-900">{t.social}</h4>
                    <div className="flex gap-4">
                        {[
                            { icon: "mdi:instagram", link: "#" },
                            { icon: "mdi:facebook", link: "#" },
                            { icon: "mdi:twitter", link: "#" },
                        ].map((social, idx) => (
                            <a key={idx} href={social.link} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:bg-green-600 hover:text-white transition-colors text-green-700 text-xl">
                                <Icon icon={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="h-[500px] w-full relative bg-gray-200">
        <iframe 
          title="Yafour Resort Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113404.93926839352!2d36.08272993070499!3d33.518602980140224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e11a3bca496b%3A0xc49b7da75775fedf!2sYafour%2C%20Syria!5e0!3m2!1sen!2sae!4v1715000000000!5m2!1sen!2sae"
          className="w-full h-full shadow-inner"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          style={{ filter: "contrast(1.2) opacity(0.9)" }}
        />
      </section>

    </div>
  );
}