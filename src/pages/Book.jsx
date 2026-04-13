import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function Book({ lang }) {
  const isArabic = lang === "ar";
  const resultsRef = useRef(null);
  const checkoutRef = useRef(null);

  const t = {
    heroTitle: isArabic ? "احجز إقامتك الفاخرة" : "Reserve Your Luxury Stay",
    heroSubtitle: isArabic 
        ? "بوابتك نحو تجربة استثنائية من الراحة والاستجمام في أحضان طبيعة يعفور الساحرة." 
        : "Your gateway to an exceptional experience of comfort and relaxation amidst Yafour's enchanting nature.",
    arrival: isArabic ? "تاريخ الوصول" : "Check-in Date",
    departure: isArabic ? "تاريخ المغادرة" : "Check-out Date",
    guests: isArabic ? "عدد الضيوف" : "Number of Guests",
    check: isArabic ? "البحث عن التوفر" : "Check Availability",
    from: isArabic ? "متوفر بدءاً من" : "Available From",
    perNight: isArabic ? "لليلة الواحدة" : "per night",
    reserve: isArabic ? "اختيار هذا الجناح" : "Select this Suite",
    confirm: isArabic ? "تأكيد الحجز النهائي" : "Confirm Booking",
    name: isArabic ? "الاسم الكامل (مطابق للهوية)" : "Full Name (as per ID)",
    email: isArabic ? "البريد الإلكتروني للإيصال" : "Email Address for Receipt",
    phone: isArabic ? "رقم الهاتف المحمول" : "Mobile Number",
    summary: isArabic ? "تفاصيل إقامتك" : "Stay Details",
    back: isArabic ? "العودة للخيارات" : "Back to Options",
    total: isArabic ? "المبلغ الإجمالي" : "Total Amount",
    residence: isArabic ? "مكان الإقامة" : "Residence",
    guestInfo: isArabic ? "بيانات الضيف الرئيسية" : "Main Guest Information",
    whyBook: isArabic ? "لماذا الحجز المباشر؟" : "Why Book Direct?",
    benefit1Title: isArabic ? "أفضل سعر مضمون" : "Best Rate Guarantee",
    benefit1Desc: isArabic ? "نضمن لك أقل الأسعار عند الحجز عبر موقعنا المباشر." : "We guarantee the lowest prices when booking direct.",
    benefit2Title: isArabic ? "مرونة في الإلغاء" : "Flexible Cancellation",
    benefit2Desc: isArabic ? "إلغاء مجاني قبل 24 ساعة من موعد الوصول." : "Free cancellation up to 24 hours before arrival.",
    benefit3Title: isArabic ? "ترقية مجانية" : "Free Upgrade",
    benefit3Desc: isArabic ? "فرصة الحصول على ترقية للجناح عند التوفر." : "Chance for complimentary suite upgrades upon availability.",
  };

  const [searchData, setSearchData] = useState({
    arrival: "",
    departure: "",
    guests: "2",
  });

  const [showResults, setShowResults] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const suites = [
    {
      id: 1,
      name: isArabic ? "الفيلا الرئاسية الفخمة" : "Luxurious Presidential Villa",
      price: "1,500 $",
      size: "200 m²",
      view: isArabic ? "إطلالة بانورامية على المسبح" : "Panoramic Pool View",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop",
      features: isArabic ? ["مسبح خاص", "خادم شخصي", "3 غرف نوم"] : ["Private Pool", "Butler", "3 Bedrooms"],
    },
    {
      id: 2,
      name: isArabic ? "جناح يعفور الملكي" : "Yafour Royal Suite",
      price: "800 $",
      size: "120 m²",
      view: isArabic ? "إطلالة ساحرة على الحدائق" : "Enchanting Garden View",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop",
      features: isArabic ? ["صالة استقبال", "شرفة واسعة", "جاكوزي"] : ["Reception Room", "Large Balcony", "Jacuzzi"],
    },
    {
      id: 3,
      name: isArabic ? "غرفة ديلوكس تنفيذية" : "Executive Deluxe Room",
      price: "300 $",
      size: "45 m²",
      view: isArabic ? "إطلالة المنتجع الداخلية" : "Inner Resort View",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2670&auto=format&fit=crop",
      features: isArabic ? ["سرير كينغ", "مكتب عمل", "آلة قهوة"] : ["King Bed", "Work Desk", "Coffee Machine"],
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate network request for smooth UX
    setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
        setSelectedRoom(null);
        setTimeout(() => {
            resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }, 800);
  };

  const handleSelectRoom = (suite) => {
      setSelectedRoom(suite);
      setTimeout(() => {
          checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
  }

  return (
    <div className={`bg-ivory-200 text-charcoal-800 min-h-screen pb-40 ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>
      
      {/* ================= HERO & SEARCH ================= */}
      <section className="relative pt-40 pb-32 px-6 bg-charcoal-900 border-b-8 border-gold-500">
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop" 
                alt="Luxury Hotel"
                className="w-full h-full object-cover animate-cinematic-zoom"
             />
             <div className="absolute inset-0 bg-charcoal-900/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[50vh]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold-400/50 rounded-full text-gold-400 font-bold uppercase tracking-widest text-sm mb-6 bg-charcoal-900/50 backdrop-blur-md shadow-lg">
                    <Icon icon="mdi:star-four-points" />
                    <span>Yafour Resort</span>
                    <Icon icon="mdi:star-four-points" />
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white drop-shadow-lg">
                    {t.heroTitle}
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed shadow-sm font-bold">
                    {t.heroSubtitle}
                </p>
            </motion.div>

            {/* FLOATING BOOKING ENGINE */}
            <motion.form
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                onSubmit={handleSearch}
                className="w-full max-w-6xl mx-auto bg-white p-4 md:p-6 rounded-[2.5rem] shadow-2xl grid md:grid-cols-4 gap-4 items-center relative -bottom-24 z-20 border border-gray-100"
            >
                <div className="bg-ivory-200 px-6 py-4 rounded-3xl border border-ivory-400 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 transition">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal-800/70 mb-2 font-bold">
                        <Icon icon="mdi:calendar-arrow-right" className="text-green-600 text-lg" />
                        {t.arrival}
                    </label>
                    <input
                        type="date"
                        className="w-full bg-transparent outline-none text-xl text-charcoal-900 font-bold cursor-text"
                        onChange={(e) => setSearchData({ ...searchData, arrival: e.target.value })}
                        required
                    />
                </div>

                <div className="bg-ivory-200 px-6 py-4 rounded-3xl border border-ivory-400 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 transition">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal-800/70 mb-2 font-bold">
                        <Icon icon="mdi:calendar-arrow-left" className="text-red-600 text-lg" />
                        {t.departure}
                    </label>
                    <input
                        type="date"
                        className="w-full bg-transparent outline-none text-xl text-charcoal-900 font-bold cursor-text"
                        onChange={(e) => setSearchData({ ...searchData, departure: e.target.value })}
                        required
                    />
                </div>

                <div className="bg-ivory-200 px-6 py-4 rounded-3xl border border-ivory-400 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 transition">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal-800/70 mb-2 font-bold">
                        <Icon icon="mdi:account-group" className="text-gold-600 text-lg" />
                        {t.guests}
                    </label>
                    <select
                        className="w-full bg-transparent outline-none text-xl text-charcoal-900 font-bold appearance-none cursor-pointer"
                        onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
                    >
                        <option value="1">01 Guest</option>
                        <option value="2">02 Guests</option>
                        <option value="4">04 Guests</option>
                        <option value="6">06 Guests</option>
                    </select>
                </div>

                <button 
                    disabled={isSearching}
                    className="h-full w-full bg-green-700 text-white py-5 px-8 rounded-3xl uppercase text-sm tracking-widest font-bold hover:bg-green-800 transition-colors flex items-center justify-center gap-3 shadow-md focus:ring-4 focus:ring-green-700/30"
                >
                    {isSearching ? (
                        <Icon icon="line-md:loading-twotone-loop" className="text-3xl" />
                    ) : (
                        <>
                            <span>{t.check}</span>
                            <Icon icon="mdi:magnify" className="text-2xl" />
                        </>
                    )}
                </button>
            </motion.form>
        </div>
      </section>

      {/* ================= QUICK BENEFITS (ONLY SHOW IF NOT SEARCHING/RESULTS) ================= */}
      {!showResults && (
        <section className="pt-40 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                     <span className="text-gold-600 uppercase tracking-widest text-sm font-bold">{t.whyBook}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                     {[
                         { icon: "mdi:tag-heart", title: t.benefit1Title, desc: t.benefit1Desc },
                         { icon: "mdi:calendar-check-outline", title: t.benefit2Title, desc: t.benefit2Desc },
                         { icon: "mdi:shield-star-outline", title: t.benefit3Title, desc: t.benefit3Desc },
                     ].map((item, i) => (
                         <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                              <div className="w-16 h-16 bg-ivory-400 rounded-full flex items-center justify-center text-green-700 mb-6">
                                  <Icon icon={item.icon} className="text-3xl" />
                              </div>
                              <h3 className="text-xl font-bold font-heading mb-3 text-charcoal-900">{item.title}</h3>
                              <p className="text-charcoal-800/70">{item.desc}</p>
                         </div>
                     ))}
                </div>
            </div>
        </section>
      )}

      {/* ================= RESULTS DISPLAY ================= */}
      <AnimatePresence>
        {showResults && !selectedRoom && (
            <motion.section 
                ref={resultsRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="max-w-7xl mx-auto pt-40 px-6 relative z-20"
            >
                <div className="flex items-center gap-3 mb-10 text-charcoal-900 border-b border-gray-200 pb-4">
                    <Icon icon="mdi:bed-king-outline" className="text-4xl text-gold-600" />
                    <h2 className="text-3xl font-heading font-bold">{isArabic ? "الأجنحة والغرف المتاحة" : "Available Rooms & Suites"}</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                {suites.map((suite, idx) => (
                    <motion.div
                        key={suite.id}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.15 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-ivory-400 flex flex-col"
                    >
                        <div className="relative h-72 overflow-hidden">
                            <img src={suite.img} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" alt={suite.name} />
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-md text-charcoal-900 flex items-center gap-1">
                                <Icon icon="mdi:texture-box" className="text-gold-600" />
                                {suite.size}
                            </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow relative">
                           {/* Highlight ribbon */}
                           {idx === 0 && (
                               <div className="absolute -top-5 left-8 bg-gold-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-widest flex items-center gap-1">
                                    <Icon icon="mdi:fire" />
                                    {isArabic ? "مُوصى به بقوة" : "Highly Recommended"}
                               </div>
                           )}

                            <h3 className="text-2xl font-heading font-bold mb-3 text-charcoal-900">{suite.name}</h3>
                            <p className="text-charcoal-800/70 text-sm uppercase tracking-widest mb-6 font-bold flex items-center gap-2">
                                <Icon icon="mdi:eye-outline" className="text-lg text-green-600" />
                                {suite.view}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {suite.features.map((f, i) => (
                                    <span key={i} className="bg-ivory-200 text-charcoal-800 text-xs px-3 py-1.5 rounded-lg border border-ivory-400 font-bold">
                                        {f}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex justify-between items-end border-t border-gray-100 pt-6 mt-auto mb-8">
                                <div>
                                    <span className="text-xs text-charcoal-800/60 uppercase tracking-widest block font-bold mb-1">{t.from}</span>
                                    <span className="text-3xl font-heading font-bold text-green-700">{suite.price}</span>
                                </div>
                                <span className="text-xs text-charcoal-800/60 uppercase font-bold">{t.perNight}</span>
                            </div>

                            <button
                                onClick={() => handleSelectRoom(suite)}
                                className="w-full py-4 bg-charcoal-900 text-white uppercase text-sm tracking-widest font-bold hover:bg-gold-500 transition-colors rounded-xl shadow-md flex items-center justify-center gap-2"
                            >
                                <span>{t.reserve}</span>
                                <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} />
                            </button>
                        </div>
                    </motion.div>
                ))}
                </div>
            </motion.section>
        )}
      </AnimatePresence>

      {/* ================= CHECKOUT ATELIER ================= */}
      <AnimatePresence>
        {selectedRoom && (
            <motion.section 
                ref={checkoutRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto pt-32 px-6 relative z-20"
            >
                <div className="bg-white rounded-[2.5rem] grid lg:grid-cols-5 shadow-2xl border border-ivory-400 overflow-hidden">
                    
                    {/* Left Side: Form */}
                    <div className="lg:col-span-3 p-10 md:p-16">
                        <button 
                            onClick={() => setSelectedRoom(null)}
                            className="text-sm uppercase tracking-widest text-charcoal-800/60 font-bold mb-12 hover:text-green-600 flex items-center gap-2 transition bg-ivory-200 px-4 py-2 rounded-full w-fit hover:shadow-sm"
                        >
                            <Icon icon={isArabic ? "mdi:arrow-right" : "mdi:arrow-left"} className="text-xl" />
                            {t.back}
                        </button>
                        
                        <div className="flex items-center gap-4 mb-12">
                             <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700">
                                 <Icon icon="mdi:account-details-outline" className="text-2xl" />
                             </div>
                            <h2 className="text-3xl font-heading font-bold text-charcoal-900">
                                {t.guestInfo}
                            </h2>
                        </div>

                        <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="text-xs uppercase tracking-widest text-charcoal-800/80 font-bold mb-3 flex items-center gap-1">
                                        <Icon icon="mdi:account" className="text-gold-600" />
                                        {t.name}
                                    </label>
                                    <input type="text" className="w-full bg-ivory-200 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-600/30 transition shadow-sm" required />
                                </div>
                                <div className="group">
                                    <label className="text-xs uppercase tracking-widest text-charcoal-800/80 font-bold mb-3 flex items-center gap-1">
                                        <Icon icon="mdi:email" className="text-gold-600" />
                                        {t.email}
                                    </label>
                                    <input type="email" className="w-full bg-ivory-200 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-600/30 transition shadow-sm" required />
                                </div>
                            </div>
                            
                            <div className="group">
                                <label className="text-xs uppercase tracking-widest text-charcoal-800/80 font-bold mb-3 flex items-center gap-1">
                                    <Icon icon="mdi:phone" className="text-gold-600" />
                                    {t.phone}
                                </label>
                                <input type="tel" className="w-full bg-ivory-200 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-600/30 transition shadow-sm" required />
                            </div>
                            
                            <div className="pt-8">
                                <button type="submit" className="w-full py-5 bg-green-700 text-white uppercase text-base tracking-widest font-bold hover:bg-green-800 transition-all rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                                    <Icon icon="mdi:check-decagram-outline" className="text-2xl" />
                                    {t.confirm}
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4 font-bold flex items-center justify-center gap-1">
                                    <Icon icon="mdi:lock-outline" />
                                    {isArabic ? "معلوماتك مشفرة ومحمية ببروتوكول آمن 256-bit" : "Your information is securely encrypted with 256-bit protocol"}
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Summary Card */}
                    <div className="lg:col-span-2 bg-charcoal-900 text-white p-10 md:p-14 border-t lg:border-t-0 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
                            <Icon icon="mdi:receipt-text-outline" className="text-3xl text-gold-500" />
                            <h4 className="text-xl font-heading font-bold uppercase tracking-widest">{t.summary}</h4>
                        </div>
                        
                        <div className="relative aspect-[16/10] mb-10 overflow-hidden rounded-2xl shadow-xl border border-white/10 group">
                            <img src={selectedRoom.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Selected" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <h3 className="absolute bottom-4 left-4 right-4 text-xl font-heading font-bold drop-shadow-md text-white text-center">
                                {selectedRoom.name}
                            </h3>
                        </div>

                        <div className="space-y-6 flex-grow">
                            <div className="flex justify-between border-b border-white/10 pb-4 text-white/80">
                                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Icon icon="mdi:calendar-arrow-right" className="text-gold-400"/> {t.arrival}</span>
                                <span className="text-sm font-bold text-white">{searchData.arrival || "مفتوح - Open"}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4 text-white/80">
                                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Icon icon="mdi:calendar-arrow-left" className="text-gold-400" /> {t.departure}</span>
                                <span className="text-sm font-bold text-white">{searchData.departure || "مفتوح - Open"}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4 text-white/80">
                                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Icon icon="mdi:account-group" className="text-gold-400" /> {t.guests}</span>
                                <span className="text-sm font-bold text-white">{searchData.guests}</span>
                            </div>
                            
                            <div className="flex justify-between pt-6 mt-4 items-center bg-white/10 p-6 rounded-2xl border border-gold-500/30">
                                <span className="text-sm uppercase tracking-widest font-bold text-white/90">{t.total}</span>
                                <span className="text-3xl font-heading font-bold text-gold-400 drop-shadow-md">{selectedRoom.price}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.section>
        )}
      </AnimatePresence>

    </div>
  );
}