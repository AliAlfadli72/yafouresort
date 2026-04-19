import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
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

const rooms = (isArabic) => [
  {
    id: "deluxe",
    img:      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=78&fm=webp&auto=format",
    category: isArabic ? "غرفة ديلوكس" : "Deluxe Room",
    title:    isArabic ? "الغرفة الديلوكس الفاخرة" : "Luxury Deluxe Room",
    size:     "35 m²",
    view:     isArabic ? "إطلالة طبيعية" : "Nature View",
    capacity: 2,
    price:    120,
    amenities: [
      { icon: "mdi:wifi",                label: isArabic ? "إنترنت" : "Wi-Fi" },
      { icon: "mdi:television-play",     label: isArabic ? "تلفاز ذكي" : "Smart TV" },
      { icon: "mdi:air-conditioner",     label: isArabic ? "تكييف" : "A/C" },
      { icon: "mdi:coffee",              label: isArabic ? "قهوة" : "Coffee" },
      { icon: "mdi:parking",             label: isArabic ? "موقف" : "Parking" },
    ],
    features: isArabic
      ? ["سرير كينج فاخر", "حمام رخامي", "شرفة خاصة", "إفطار مضمون"]
      : ["King Luxury Bed", "Marble Bathroom", "Private Balcony", "Breakfast Included"],
    tag: null,
  },
  {
    id: "superior",
    img:      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=78&fm=webp&auto=format",
    category: isArabic ? "غرفة سوبيريور" : "Superior Room",
    title:    isArabic ? "الغرفة السوبيريور" : "Superior Room",
    size:     "45 m²",
    view:     isArabic ? "إطلالة حديقة" : "Garden View",
    capacity: 2,
    price:    160,
    amenities: [
      { icon: "mdi:wifi",            label: isArabic ? "إنترنت" : "Wi-Fi" },
      { icon: "mdi:television-play", label: isArabic ? "تلفاز ذكي" : "Smart TV" },
      { icon: "mdi:bathtub",         label: isArabic ? "بانيو" : "Bathtub" },
      { icon: "mdi:room-service",    label: isArabic ? "خدمة غرف" : "Room Service" },
    ],
    features: isArabic
      ? ["سرير كوين فاخر", "جلسة جانبية", "إطلالة الحديقة", "إفطار مضمون"]
      : ["Queen Luxury Bed", "Sitting Area", "Garden Views", "Breakfast Included"],
    tag: isArabic ? "الأكثر طلباً" : "Most Popular",
  },
  {
    id: "executive",
    img:      "/room-suite.png",
    category: isArabic ? "جناح تنفيذي" : "Executive Suite",
    title:    isArabic ? "الجناح التنفيذي" : "Executive Suite",
    size:     "65 m²",
    view:     isArabic ? "إطلالة بانورامية" : "Panoramic View",
    capacity: 3,
    price:    250,
    amenities: [
      { icon: "mdi:wifi",                label: isArabic ? "إنترنت" : "Wi-Fi" },
      { icon: "mdi:television-play",     label: isArabic ? "تلفاز ذكي" : "Smart TV" },
      { icon: "mdi:bathtub",             label: isArabic ? "جاكوزي" : "Jacuzzi" },
      { icon: "mdi:room-service",        label: isArabic ? "خدمة VIP" : "VIP Service" },
      { icon: "mdi:glass-cocktail",      label: isArabic ? "ميني بار" : "Mini Bar" },
    ],
    features: isArabic
      ? ["غرفة معيشة منفصلة", "جاكوزي فاخر", "شرفة بانورامية", "خدمة كونسيرج"]
      : ["Separate Living Room", "Luxury Jacuzzi", "Panoramic Terrace", "Concierge Service"],
    tag: null,
  },
  {
    id: "royal",
    img:      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=78&fm=webp&auto=format",
    category: isArabic ? "الجناح الملكي" : "Royal Suite",
    title:    isArabic ? "الجناح الملكي الفاخر" : "Grand Royal Suite",
    size:     "120 m²",
    view:     isArabic ? "إطلالة VIP بانورامية" : "VIP Panoramic View",
    capacity: 4,
    price:    480,
    amenities: [
      { icon: "mdi:wifi",         label: isArabic ? "إنترنت" : "Wi-Fi" },
      { icon: "mdi:jacuzzi",      label: isArabic ? "جاكوزي" : "Jacuzzi" },
      { icon: "mdi:pool",         label: isArabic ? "مسبح خاص" : "Private Pool" },
      { icon: "mdi:room-service", label: isArabic ? "بتلر" : "Butler" },
      { icon: "mdi:car-side",     label: isArabic ? "ليموزين" : "Limousine" },
    ],
    features: isArabic
      ? ["مسبح خاص", "خدمة بتلر 24/7", "غرفتا نوم", "طاروق على السطح"]
      : ["Private Pool", "24/7 Butler Service", "Two Bedrooms", "Rooftop Terrace"],
    tag: isArabic ? "النخبة" : "Elite",
  },
  {
    id: "chalet",
    img:      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=78&fm=webp&auto=format",
    category: isArabic ? "شاليه الطبيعة" : "Nature Chalet",
    title:    isArabic ? "شاليه الطبيعة المنعزل" : "Secluded Nature Chalet",
    size:     "80 m²",
    view:     isArabic ? "وسط الغابة" : "Forest Immersion",
    capacity: 4,
    price:    350,
    amenities: [
      { icon: "mdi:wifi",       label: isArabic ? "إنترنت" : "Wi-Fi" },
      { icon: "mdi:fireplace",  label: isArabic ? "مدفأة" : "Fireplace" },
      { icon: "mdi:balcony",    label: isArabic ? "تراس" : "Terrace" },
      { icon: "mdi:nature",     label: isArabic ? "طبيعة" : "Nature" },
    ],
    features: isArabic
      ? ["فناء خارجي خاص", "مدفأة رومانتيكية", "عزل تام في الطبيعة", "إفطار ريفي"]
      : ["Private Outdoor Patio", "Romantic Fireplace", "Total Nature Seclusion", "Rustic Breakfast"],
    tag: isArabic ? "الأكثر رومانسية" : "Most Romantic",
  },
  {
    id: "family",
    img:      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=78&fm=webp&auto=format",
    category: isArabic ? "جناح العائلة" : "Family Suite",
    title:    isArabic ? "جناح العائلة الفسيح" : "Spacious Family Suite",
    size:     "95 m²",
    view:     isArabic ? "إطلالة المسبح" : "Pool View",
    capacity: 6,
    price:    420,
    amenities: [
      { icon: "mdi:wifi",            label: isArabic ? "إنترنت" : "Wi-Fi" },
      { icon: "mdi:baby-carriage",   label: isArabic ? "ودود للأطفال" : "Child-Friendly" },
      { icon: "mdi:television-play", label: isArabic ? "تلفاز ذكي" : "Smart TV" },
      { icon: "mdi:kitchen",         label: isArabic ? "مطبخ صغير" : "Kitchenette" },
    ],
    features: isArabic
      ? ["غرفتا نوم مستقلتان", "مطبخ صغير", "إطلالة المسبح الرائعة", "ألعاب للأطفال"]
      : ["Two Separate Bedrooms", "Kitchenette", "Amazing Pool Views", "Children's Entertainment"],
    tag: null,
  },
];

export default function Rooms({ lang }) {
  const isArabic = lang === "ar";
  const [filter, setFilter] = useState("all");
  const roomData = rooms(isArabic);

  const categories = [
    { key: "all",      label: isArabic ? "الجميع" : "All" },
    { key: "غرفة",     label: isArabic ? "الغرف" : "Rooms" },
    { key: "جناح",     label: isArabic ? "الأجنحة" : "Suites" },
    { key: "شاليه",    label: isArabic ? "الشاليهات" : "Chalets" },
  ];

  const filtered = filter === "all"
    ? roomData
    : roomData.filter(r => r.category.includes(filter) || r.id.includes(filter));

  return (
    <div className="bg-ivory-200 text-charcoal-800 antialiased" dir={isArabic ? "rtl" : "ltr"}>

      {/* ===== HERO ===== */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-forest-600">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 animate-cinematic-zoom"
          style={{ backgroundImage: "url('/room-suite.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-600/80 to-charcoal-900/70" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="section-label text-gold-400"
          >
            {isArabic ? "الإقامة الفاخرة" : "Luxury Accommodations"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-heading font-extrabold text-5xl md:text-6xl mt-2"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}
          >
            {isArabic ? "الغرف والأجنحة" : "Rooms & Suites"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white/70 text-lg mt-4 max-w-xl mx-auto"
          >
            {isArabic
              ? "اختر إقامتك المثالية من بين مجموعتنا الفاخرة المصممة لراحتك القصوى"
              : "Choose your perfect stay from our luxury collection designed for your ultimate comfort"
            }
          </motion.p>
        </div>
      </section>

      {/* ===== FILTER TABS ===== */}
      <div className="sticky top-16 z-30 bg-ivory-200/90 backdrop-blur-lg border-b border-ivory-500 py-4 px-6">
        <div className="max-w-[1300px] mx-auto flex gap-3 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat.key}
              id={`filter-${cat.key}`}
              onClick={() => setFilter(cat.key)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat.key
                  ? "bg-forest-600 text-white shadow-green-deep"
                  : "bg-white text-charcoal-700 border border-ivory-500 hover:border-gold-500/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== ROOMS GRID ===== */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((room, i) => (
            <Reveal key={room.id} delay={i * 0.08}>
              <div className="group glass-card rounded-3xl overflow-hidden h-full flex flex-col">

                {/* Room Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  {/* Tag Badge */}
                  {room.tag && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-charcoal-900 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full tracking-wider shadow">
                      {room.tag}
                    </div>
                  )}
                  {/* Category */}
                  <div className="absolute bottom-4 left-4 text-[10px] bg-forest-600/80 backdrop-blur-sm text-white uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                    {room.category}
                  </div>
                </div>

                {/* Room Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-3">{room.title}</h3>

                  {/* Specs Row */}
                  <div className="flex items-center gap-4 text-xs text-charcoal-500 mb-4 flex-wrap">
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:floor-plan" className="text-gold-500" />{room.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:window-maximize" className="text-gold-500" />{room.view}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:account-group" className="text-gold-500" />
                      {isArabic ? `حتى ${room.capacity} أشخاص` : `Up to ${room.capacity} guests`}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {room.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-charcoal-600">
                        <Icon icon="mdi:check-circle" className="text-gold-500 text-base flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Amenities */}
                  <div className="flex items-center gap-2 mb-5">
                    {room.amenities.map((a, j) => (
                      <div
                        key={j}
                        title={a.label}
                        className="w-8 h-8 rounded-full bg-forest-600/8 flex items-center justify-center hover:bg-forest-600 hover:text-white transition-colors duration-300 group/icon"
                      >
                        <Icon icon={a.icon} className="text-forest-600 group-hover/icon:text-white text-base transition-colors duration-300" />
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-ivory-500">
                    <div>
                      <div className="text-xs text-charcoal-400">{isArabic ? "يبدأ من" : "Starting from"}</div>
                      <div className="text-2xl font-extrabold text-gold-600 font-heading">
                        <span className="text-sm font-normal">$</span>{room.price}
                        <span className="text-xs font-normal text-charcoal-400">
                          {isArabic ? "/ الليلة" : "/ night"}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/book"
                      id={`room-cta-${room.id}`}
                      className="btn-gold text-xs px-5 py-2.5 !rounded-xl"
                    >
                      {isArabic ? "احجز الآن" : "Book Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== BOOKING CTA ===== */}
      <section className="py-24 bg-forest-600 text-center text-white px-6">
        <Reveal>
          <span className="section-label text-gold-400">{isArabic ? "احجز مباشرة" : "Book Direct"}</span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl mt-2 mb-4">
            {isArabic ? "هل تحتاج مساعدة في اختيار غرفتك؟" : "Need Help Choosing Your Room?"}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            {isArabic
              ? "فريق الكونسيرج لدينا مستعد على مدار الساعة لمساعدتك في اختيار الإقامة المثالية."
              : "Our concierge team is available 24/7 to help you find the perfect accommodation."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" id="rooms-page-book" className="btn-gold inline-flex items-center gap-3 text-sm">
              <Icon icon="mdi:calendar-check" className="text-lg" />
              {isArabic ? "احجز الآن" : "Reserve Now"}
            </Link>
            <a
              href="https://wa.me/963933123456"
              target="_blank"
              rel="noreferrer"
              id="rooms-page-whatsapp"
              className="btn-white-glass inline-flex items-center gap-3 text-sm"
            >
              <Icon icon="mdi:whatsapp" className="text-lg" />
              {isArabic ? "استفسر عبر واتساب" : "WhatsApp Inquiry"}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}