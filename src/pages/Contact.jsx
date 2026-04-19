import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

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

export default function Contact({ lang }) {
  const isArabic = lang === "ar";
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  const t = {
    hero: {
      label:    isArabic ? "نحن هنا لخدمتك" : "We're Here to Help",
      title:    isArabic ? "تواصل معنا" : "Get In Touch",
      subtitle: isArabic ? "فريقنا مستعد للإجابة على جميع استفساراتك على مدار الساعة" : "Our team is ready to answer all your inquiries around the clock",
    },
    info: {
      address: { icon: "mdi:map-marker",   label: isArabic ? "العنوان"         : "Address",      value: isArabic ? "يعفور، ريف دمشق، سوريا" : "Yafour, Rural Damascus, Syria" },
      phone:   { icon: "mdi:phone",         label: isArabic ? "الهاتف"          : "Phone",        value: "+963 11 123 4567" },
      mobile:  { icon: "mdi:cellphone",     label: isArabic ? "واتساب / موبايل" : "WhatsApp",     value: "+963 933 123 456" },
      email:   { icon: "mdi:email-outline", label: isArabic ? "البريد الإلكتروني": "Email",       value: "info@yafouresort.com" },
      hours:   { icon: "mdi:clock-outline", label: isArabic ? "ساعات العمل"     : "Working Hours", value: isArabic ? "٢٤/٧ — متاح دائماً" : "24/7 — Always Available" },
    },
    form: {
      title:      isArabic ? "أرسل لنا رسالة" : "Send Us a Message",
      name:       isArabic ? "الاسم الكامل" : "Full Name",
      email:      isArabic ? "البريد الإلكتروني" : "Email Address",
      phone:      isArabic ? "رقم الهاتف" : "Phone Number",
      subject:    isArabic ? "موضوع الرسالة" : "Subject",
      message:    isArabic ? "رسالتك" : "Your Message",
      submit:     isArabic ? "إرسال الرسالة" : "Send Message",
      success:    isArabic ? "تم إرسال رسالتك بنجاح! سيتواصل معك فريقنا قريباً." : "Your message was sent successfully! Our team will contact you soon.",
      subjects: [
        isArabic ? "حجز غرفة أو جناح" : "Room or Suite Reservation",
        isArabic ? "استفسار عن خدمة" : "Service Inquiry",
        isArabic ? "حجز قاعة مناسبة" : "Event Hall Booking",
        isArabic ? "رحلة جماعية" : "Group Trip",
        isArabic ? "استفسار عام" : "General Inquiry",
      ],
    },
    quick: {
      title:   isArabic ? "تواصل فوري" : "Quick Contact",
      wa:      isArabic ? "واتساب مباشر" : "WhatsApp Direct",
      call:    isArabic ? "اتصل بنا الآن" : "Call Us Now",
      email:   isArabic ? "راسلنا بالإيميل" : "Email Us",
    },
  };

  return (
    <div className="bg-ivory-200 text-charcoal-800 antialiased" dir={isArabic ? "rtl" : "ltr"}>

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-forest-600">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 animate-cinematic-zoom"
          style={{ backgroundImage: "url('/hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-600/90 to-charcoal-900/80" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label text-gold-400"
          >
            {t.hero.label}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-heading font-extrabold text-5xl md:text-6xl mt-2"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-lg mt-4 max-w-xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ===== QUICK CONTACT CARDS ===== */}
      <section className="py-0 px-6 -mt-12 relative z-20">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* WhatsApp */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            href="https://wa.me/963933123456"
            target="_blank"
            rel="noreferrer"
            id="contact-whatsapp-card"
            className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-ivory-500 hover:border-green-500/30 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors duration-300">
              <Icon icon="mdi:whatsapp" className="text-2xl text-[#25D366] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <div className="font-bold text-charcoal-900 text-sm">{t.quick.wa}</div>
              <div className="text-charcoal-500 text-xs mt-0.5" dir="ltr">+963 933 123 456</div>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            href="tel:+963111234567"
            id="contact-phone-card"
            className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-ivory-500 hover:border-forest-600/30 group"
          >
            <div className="w-12 h-12 rounded-xl bg-forest-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-forest-600 transition-colors duration-300">
              <Icon icon="mdi:phone" className="text-2xl text-forest-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <div className="font-bold text-charcoal-900 text-sm">{t.quick.call}</div>
              <div className="text-charcoal-500 text-xs mt-0.5" dir="ltr">+963 11 123 4567</div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="mailto:info@yafouresort.com"
            id="contact-email-card"
            className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-ivory-500 hover:border-gold-500/30 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
              <Icon icon="mdi:email-outline" className="text-2xl text-gold-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <div className="font-bold text-charcoal-900 text-sm">{t.quick.email}</div>
              <div className="text-charcoal-500 text-xs mt-0.5">info@yafouresort.com</div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* ===== MAIN CONTENT: Form + Info ===== */}
      <section className="py-24 px-6">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-3 gap-12">

          {/* ===== Contact Info ===== */}
          <Reveal className="lg:col-span-1">
            <div className="bg-forest-600 rounded-3xl p-8 text-white h-full">
              <h3 className="font-heading font-bold text-2xl mb-2">
                {isArabic ? "معلومات التواصل" : "Contact Information"}
              </h3>
              <p className="text-white/60 text-sm mb-8">
                {isArabic ? "نحن هنا لمساعدتك في أي وقت" : "We are here to help you at any time"}
              </p>

              <div className="space-y-6">
                {Object.values(t.info).map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon icon={item.icon} className="text-gold-400 text-lg" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gold-400 font-bold mb-0.5">{item.label}</div>
                      <div className="text-sm text-white/80 font-medium" dir={i < 2 ? "auto" : "ltr"}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
                  {isArabic ? "تابعنا على" : "Follow Us On"}
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: "mdi:facebook",  href: "#" },
                    { icon: "mdi:instagram", href: "#" },
                    { icon: "mdi:twitter",   href: "#" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
                    >
                      <Icon icon={s.icon} className="text-base" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ===== Contact Form ===== */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="font-heading font-bold text-2xl text-charcoal-900 mb-2">{t.form.title}</h3>
              <p className="text-charcoal-500 text-sm mb-8">
                {isArabic ? "سيتواصل معك فريقنا خلال 24 ساعة" : "Our team will reach out within 24 hours"}
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700 text-sm font-medium"
                >
                  <Icon icon="mdi:check-circle" className="text-2xl text-green-500 flex-shrink-0" />
                  {t.form.success}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider mb-1.5 block">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={isArabic ? "أدخل اسمك" : "Enter your name"}
                      className="w-full bg-ivory-300 border border-ivory-500 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-colors duration-300 placeholder-charcoal-400"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider mb-1.5 block">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={isArabic ? "بريدك الإلكتروني" : "your@email.com"}
                      className="w-full bg-ivory-300 border border-ivory-500 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-colors duration-300 placeholder-charcoal-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider mb-1.5 block">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+963 ..."
                      dir="ltr"
                      className="w-full bg-ivory-300 border border-ivory-500 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-colors duration-300 placeholder-charcoal-400"
                    />
                  </div>
                  {/* Subject */}
                  <div>
                    <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider mb-1.5 block">
                      {t.form.subject} *
                    </label>
                    <select
                      name="subject"
                      id="contact-subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-ivory-300 border border-ivory-500 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-colors duration-300 appearance-none"
                    >
                      <option value="">{isArabic ? "اختر الموضوع" : "Select a subject"}</option>
                      {t.form.subjects.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider mb-1.5 block">
                    {t.form.message} *
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={isArabic ? "اكتب رسالتك هنا..." : "Write your message here..."}
                    className="w-full bg-ivory-300 border border-ivory-500 rounded-xl px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-colors duration-300 resize-none placeholder-charcoal-400"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={loading}
                  className="btn-gold w-full flex items-center justify-center gap-3 text-sm !rounded-xl py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Icon icon="mdi:loading" className="text-xl animate-spin" />
                      {isArabic ? "جاري الإرسال..." : "Sending..."}
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:send" className="text-lg" />
                      {t.form.submit}
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="px-6 pb-24">
        <div className="max-w-[1300px] mx-auto">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-green-deep h-[400px] bg-ivory-400 flex items-center justify-center border border-ivory-500">
              <div className="text-center">
                <Icon icon="mdi:map-marker" className="text-6xl text-forest-600 mx-auto mb-4 animate-float" />
                <h3 className="font-heading font-bold text-2xl text-charcoal-900 mb-2">
                  {isArabic ? "يعفور، ريف دمشق" : "Yafour, Rural Damascus"}
                </h3>
                <p className="text-charcoal-500 text-sm mb-4">
                  {isArabic ? "على بعد 20 دقيقة من مركز دمشق" : "20 minutes from Damascus City Center"}
                </p>
                <a
                  href="https://maps.google.com/?q=Yafour+Damascus+Syria"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-map-link"
                  className="inline-flex items-center gap-2 btn-green-outline text-sm px-6 py-2.5 !rounded-xl"
                >
                  <Icon icon="mdi:google-maps" className="text-lg" />
                  {isArabic ? "افتح في خرائط جوجل" : "Open in Google Maps"}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}