import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Book({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    heroTitle: isArabic ? "احجز إقامتك" : "Reserve Your Stay",
    arrival: isArabic ? "الوصول" : "Arrival",
    departure: isArabic ? "المغادرة" : "Departure",
    guests: isArabic ? "الضيوف" : "Guests",
    check: isArabic ? "تحقق من التوفر" : "Check Availability",
    from: isArabic ? "ابتداءً من" : "From",
    perNight: isArabic ? "لليلة" : "per night",
    reserve: isArabic ? "اختيار الجناح" : "Select Suite",
    confirm: isArabic ? "إتمام الحجز" : "Confirm Residency",
    name: isArabic ? "الاسم الكامل" : "Full Name",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    summary: isArabic ? "ملخص الحجز" : "Reservation Summary",
  };

  const [searchData, setSearchData] = useState({
    arrival: "",
    departure: "",
    guests: "2",
  });

  const [showResults, setShowResults] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const suites = [
    {
      id: 1,
      name: isArabic ? "الجناح الملكي" : "Royal Skyline Suite",
      price: "4,500 AED",
      size: "120 m²",
      view: isArabic ? "إطلالة على البحر" : "Sea View",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    },
    {
      id: 2,
      name: isArabic ? "جناح البنتهاوس" : "Penthouse Residence",
      price: "8,900 AED",
      size: "350 m²",
      view: isArabic ? "إطلالة بانورامية" : "Panoramic Skyline",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    },
    {
      id: 3,
      name: isArabic ? "غرفة ديلوكس" : "Deluxe Horizon Room",
      price: "1,200 AED",
      size: "65 m²",
      view: isArabic ? "إطلالة المدينة" : "City View",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
    setSelectedRoom(null);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  return (
    <div className={`bg-[#fcfaf7] text-[#1a1a1a] min-h-screen pb-40 ${isArabic ? "font-serif-ar" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      
      {/* ================= HERO & SEARCH ================= */}
      <section className="relative pt-48 pb-20 px-6 bg-[#1a1a1a] text-white overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt="Booking Background"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif italic mb-16"
            >
                {t.heroTitle}
            </motion.h1>

            <form
                onSubmit={handleSearch}
                className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-sm grid md:grid-cols-4 gap-0 p-1 items-center shadow-2xl"
            >
                <div className="px-8 py-6 text-left border-r border-white/10">
                    <label className="block text-[9px] uppercase tracking-[0.3em] text-[#C5A358] mb-2 font-bold">
                        {t.arrival}
                    </label>
                    <input
                        type="date"
                        className="w-full bg-transparent outline-none text-sm text-white invert"
                        onChange={(e) => setSearchData({ ...searchData, arrival: e.target.value })}
                        required
                    />
                </div>

                <div className="px-8 py-6 text-left border-r border-white/10">
                    <label className="block text-[9px] uppercase tracking-[0.3em] text-[#C5A358] mb-2 font-bold">
                        {t.departure}
                    </label>
                    <input
                        type="date"
                        className="w-full bg-transparent outline-none text-sm text-white invert"
                        onChange={(e) => setSearchData({ ...searchData, departure: e.target.value })}
                        required
                    />
                </div>

                <div className="px-8 py-6 text-left">
                    <label className="block text-[9px] uppercase tracking-[0.3em] text-[#C5A358] mb-2 font-bold">
                        {t.guests}
                    </label>
                    <select
                        className="w-full bg-transparent outline-none text-sm text-white appearance-none cursor-pointer"
                        onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
                    >
                        <option className="text-black" value="1">01 Guest</option>
                        <option className="text-black" value="2">02 Guests</option>
                        <option className="text-black" value="4">04 Guests</option>
                    </select>
                </div>

                <button className="h-full bg-[#C5A358] text-white py-6 md:py-0 px-8 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500">
                    {t.check}
                </button>
            </form>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <AnimatePresence>
        {showResults && !selectedRoom && (
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto mt-32 px-6"
            >
                <div className="grid md:grid-cols-3 gap-12">
                {suites.map((suite) => (
                    <motion.div
                        key={suite.id}
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="relative h-80 overflow-hidden">
                            <img src={suite.img} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={suite.name} />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 text-[10px] uppercase tracking-widest font-bold">
                                {suite.size}
                            </div>
                        </div>

                        <div className="p-10">
                            <h3 className="text-2xl font-serif italic mb-2">{suite.name}</h3>
                            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-6">{suite.view}</p>
                            
                            <div className="flex justify-between items-center mb-8 border-t border-gray-50 pt-6">
                                <div>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block">{t.from}</span>
                                    <span className="text-xl font-serif text-[#C5A358]">{suite.price}</span>
                                </div>
                                <span className="text-[10px] text-gray-400 uppercase">{t.perNight}</span>
                            </div>

                            <button
                                onClick={() => { setSelectedRoom(suite); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                                className="w-full py-4 bg-[#1a1a1a] text-white uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-[#C5A358] transition-all duration-500"
                            >
                                {t.reserve}
                            </button>
                        </div>
                    </motion.div>
                ))}
                </div>
            </motion.section>
        )}
      </AnimatePresence>

      {/* ================= FINAL RESERVATION ATELIER ================= */}
      <AnimatePresence>
        {selectedRoom && (
            <motion.section 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-6xl mx-auto mt-20 px-6"
            >
                <div className="bg-white grid lg:grid-cols-3 shadow-2xl border border-gray-100 overflow-hidden">
                    
                    {/* Left Side: Detail */}
                    <div className="lg:col-span-2 p-12 md:p-20">
                        <button 
                            onClick={() => setSelectedRoom(null)}
                            className="text-[10px] uppercase tracking-widest text-gray-400 mb-12 hover:text-[#C5A358] flex items-center gap-2"
                        >
                            ← {isArabic ? "العودة للقائمة" : "Back to Selection"}
                        </button>
                        
                        <h2 className="text-4xl md:text-5xl font-serif italic mb-12">
                            {isArabic ? "بيانات الضيف" : "Guest Particulars"}
                        </h2>

                        <form className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">{t.name}</label>
                                    <input type="text" className="w-full border-b border-gray-200 py-3 outline-none focus:border-[#C5A358] transition bg-transparent font-light" required />
                                </div>
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">{t.email}</label>
                                    <input type="email" className="w-full border-b border-gray-200 py-3 outline-none focus:border-[#C5A358] transition bg-transparent font-light" required />
                                </div>
                            </div>
                            
                            <div className="pt-10">
                                <button className="px-16 py-6 bg-[#1a1a1a] text-white uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-[#C5A358] transition-all duration-500 rounded-sm">
                                    {t.confirm}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Summary Card */}
                    <div className="bg-[#f9f7f4] p-12 border-l border-gray-100">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A358] mb-10">{t.summary}</h4>
                        
                        <div className="aspect-video mb-8 overflow-hidden rounded-sm">
                            <img src={selectedRoom.img} className="w-full h-full object-cover" alt="Selected" />
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between border-b border-gray-200 pb-4">
                                <span className="text-xs text-gray-400 uppercase tracking-widest">{isArabic ? "الجناح" : "Residence"}</span>
                                <span className="text-sm italic font-serif">{selectedRoom.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-4">
                                <span className="text-xs text-gray-400 uppercase tracking-widest">{t.arrival}</span>
                                <span className="text-sm font-light">{searchData.arrival || "---"}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-4">
                                <span className="text-xs text-gray-400 uppercase tracking-widest">{t.departure}</span>
                                <span className="text-sm font-light">{searchData.departure || "---"}</span>
                            </div>
                            <div className="flex justify-between pt-4">
                                <span className="text-sm uppercase tracking-widest font-bold text-[#1a1a1a]">{isArabic ? "الإجمالي" : "Total"}</span>
                                <span className="text-2xl font-serif text-[#C5A358]">{selectedRoom.price}</span>
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