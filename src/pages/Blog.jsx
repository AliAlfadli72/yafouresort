import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Blog({ lang }) {
  const isArabic = lang === "ar";

  const t = {
    hero: {
      title: isArabic ? "مدونة يعفور" : "Yafour Blog",
      subtitle: isArabic ? "أخبار، أحداث، وقصص ملهمة من قلب يعفور" : "News, Events, and Inspiring Stories from Yafour",
    },
    posts: [
      {
        id: 1,
        title: isArabic ? "افتتاح الصالة الماسية للأعراس" : "Grand Opening of the Diamond Wedding Hall",
        date: isArabic ? "٢٤ مايو ٢٠٢٦" : "May 24, 2026",
        excerpt: isArabic 
          ? "احتفلنا أمس بافتتاح الصالة الماسية الجديدة والمجهزة بأفضل تقنيات الإضاءة والصوت لتكون المكان الأمثل لأفراحكم."
          : "Yesterday we celebrated the opening of our new Diamond Hall, equipped with the best lighting and sound technology for your weddings.",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      },
      {
        id: 2,
        title: isArabic ? "مهرجان المأكولات الشامية الأصيلة" : "Authentic Levantine Food Festival",
        date: isArabic ? "١٢ أبريل ٢٠٢٦" : "April 12, 2026",
        excerpt: isArabic
          ? "ندعوكم لتذوق أشهى الأطباق الشامية في مهرجاننا السنوي الذي يقام في مطعم السرايا بإشراف أمهر الطهاة."
          : "We invite you to taste the most delicious Levantine dishes at our annual festival at Al Saraya Restaurant.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
      },
      {
        id: 3,
        title: isArabic ? "دليلك للاسترخاء في سبا يعفور" : "Your Guide to Relaxation at Yafour Spa",
        date: isArabic ? "٠٥ مارس ٢٠٢٦" : "March 05, 2026",
        excerpt: isArabic
          ? "نقدم لك نصائح ذهبية لتحقيق أقصى استفادة من جلسات المساج والعناية بالبشرة في نادي ومسبح يعفور الصحي."
          : "We offer golden tips to get the most out of your massage and skincare sessions at the Yafour Health Club.",
        image: "https://images.unsplash.com/photo-1544161515-4ad6ce67e340",
      }
    ]
  };

  return (
    <div className={`bg-ivory-200 text-charcoal-800 antialiased min-h-screen ${isArabic ? "font-serif-ar" : "font-sans"}`} dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 bg-charcoal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-green-900 opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gold-400"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.posts.map((post, idx) => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden group hover:shadow-luxury transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <Icon icon="mdi:calendar-blank" />
                  {post.date}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold font-heading text-charcoal-900 mb-4 group-hover:text-green-700 transition-colors">
                  <Link to="#">{post.title}</Link>
                </h2>
                <p className="text-charcoal-800/70 leading-relaxed mb-6 flex-grow text-sm">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-gold-600 font-bold hover:text-gold-700 transition-colors uppercase text-sm mt-auto">
                  {isArabic ? "اقرأ المزيد" : "Read More"}
                  <Icon icon={isArabic ? "mdi:arrow-left" : "mdi:arrow-right"} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
