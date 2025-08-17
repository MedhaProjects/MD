import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Ruler, Heart, Star, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Brand color palette
const brand = {
  primary: "#F16B6B",
  primaryDark: "#d75353",
  soft: "#ffe7e7",
};

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// Team Data
const teamData = [
  { name: "Megha Sharma", role: "Lead Designer", img: "https://randomuser.me/api/portraits/women/68.jpg", funFact: "Loves sketching in coffee shops" },
  { name: "Rahul Verma", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/52.jpg", funFact: "Collects vintage lamps" },
  { name: "Anita Joshi", role: "Interior Stylist", img: "https://randomuser.me/api/portraits/women/45.jpg", funFact: "Passionate about sustainable materials" },
  { name: "Vikram Singh", role: "3D Visualizer", img: "https://randomuser.me/api/portraits/men/76.jpg", funFact: "Loves realistic renderings" },
];

// Decorative Background
const DecoBackground = () => (
  <svg className="absolute inset-0 -z-10 h-full w-full" aria-hidden>
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" fill="none" stroke={brand.soft} strokeWidth="1" />
      </pattern>
      <radialGradient id="glow" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor={brand.primary} stopOpacity="0.2" />
        <stop offset="100%" stopColor={brand.primary} stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <circle cx="20%" cy="20%" r="250" fill="url(#glow)" />
    <circle cx="80%" cy="10%" r="220" fill="url(#glow)" />
    <circle cx="85%" cy="80%" r="300" fill="url(#glow)" />
  </svg>
);

// Value Card
const ValueCard = ({ icon: Icon, title, text }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className="rounded-2xl border bg-white/70 backdrop-blur-md p-6 shadow-xl hover:scale-105 transition-transform duration-300"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: brand.soft }}>
      <Icon color={brand.primary} />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600 leading-relaxed">{text}</p>
  </motion.div>
);

// Gallery Item
const GalleryItem = ({ src, alt }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-2xl shadow-lg group"
  >
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <Sparkles
      className="absolute right-3 top-3 h-5 w-5 opacity-0 group-hover:opacity-100 transition"
      color={brand.primary}
    />
  </motion.div>
);

// Team Card
const TeamCard = ({ name, role, img, funFact }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    whileHover={{ scale: 1.05, rotate: 1 }}
    transition={{ type: "spring", stiffness: 80 }}
    className="rounded-2xl border bg-white/60 backdrop-blur-md p-6 shadow-xl text-center"
  >
    <img
      src={img}
      alt={name}
      className="mx-auto h-28 w-28 rounded-full object-cover mb-4 border-2"
      style={{ borderColor: brand.primary }}
    />
    <h3 className="font-semibold text-gray-900">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
    <p className="mt-2 text-gray-500 italic text-sm">{funFact}</p>
  </motion.div>
);

// Main Page
export default function OurStoryPage() {
  return (
    <div className="relative min-h-screen text-gray-900">
      <DecoBackground />

      {/* Hero Section */}
      <section className="relative z-10 bg-pink-50 px-6 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6">
            <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold leading-tight text-gray-900">
              Our Story
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed max-w-xl">
              From a two-person atelier to a premium interior design studio, we’ve always believed that beautiful homes begin with beautiful intentions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              {/* Explore Projects Button */}
      <Link to="/studiocollection">
        <button
          className="px-6 py-3 rounded-xl text-white font-medium shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
          style={{ background: brand.primary }}
        >
          Explore Projects <ArrowRight className="inline ml-2" size={18} />
        </button>
      </Link>

      {/* Book a Consultation Button */}
      <Link to="/contactus">
        <button
          className="px-6 py-3 rounded-xl border-2 font-medium transition-transform hover:scale-105"
          style={{ borderColor: brand.primary, color: brand.primary }}
        >
          Book a Consultation
        </button>
      </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4 relative z-10">
            <GalleryItem src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000" alt="Modern living" />
            <GalleryItem src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000" alt="Dining space" />
            <GalleryItem src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1000" alt="Bedroom" />
            <GalleryItem src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000" alt="Kitchen" />
          </motion.div>
        </div>
      </section>

  {/* Values Section */}
<section className="relative bg-pink-50 px-6 py-24 lg:px-20">
  <motion.h2
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-gray-900 tracking-tight"
  >
    Our Values
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={stagger}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
  >
    {/* Creativity */}
    <motion.div
      className="flex flex-col items-center text-center space-y-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-24 h-24 rounded-full bg-pink-200 flex items-center justify-center shadow-lg">
        <Paintbrush className="w-10 h-10 text-pink-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Creativity</h3>
      <p className="text-gray-700">Innovative designs that reflect your personality.</p>
    </motion.div>

    {/* Functionality */}
    <motion.div
      className="flex flex-col items-center text-center space-y-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center shadow-lg">
        <Ruler className="w-10 h-10 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Functionality</h3>
      <p className="text-gray-700">Practical layouts that make everyday living effortless.</p>
    </motion.div>

    {/* Client-Centric */}
    <motion.div
      className="flex flex-col items-center text-center space-y-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-24 h-24 rounded-full bg-green-200 flex items-center justify-center shadow-lg">
        <Heart className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Client-Centric</h3>
      <p className="text-gray-700">Every design begins with your lifestyle in mind.</p>
    </motion.div>

    {/* Sustainability */}
    <motion.div
      className="flex flex-col items-center text-center space-y-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center shadow-lg">
        <Star className="w-10 h-10 text-yellow-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Sustainability</h3>
      <p className="text-gray-700">Eco-friendly materials and conscious choices.</p>
    </motion.div>
  </motion.div>
</section>

      {/* Team Section */}
      <section className="relative bg-white px-6 py-20 lg:px-8">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-3xl font-bold mb-12 text-center">
          Meet Our Team
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </motion.div>
      </section>

   
<section className="relative bg-pink-50 px-6 py-20 text-center">
  <motion.h2
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className="text-4xl font-extrabold mb-6"
  >
    Let's Create Your Dream Space
  </motion.h2>
  <motion.p
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className="text-lg text-gray-700 mb-6"
  >
    Every project starts with a conversation. Tell us your vision and let's bring it to life.
  </motion.p>

  <Link
    to="/contactus"
    className="inline-block"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <motion.button
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="px-8 py-4 rounded-xl text-white font-medium shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl flex items-center justify-center mx-auto"
      style={{ background: brand.primary }}
    >
      Book a Consultation <ArrowRight className="inline ml-2" size={18} />
    </motion.button>
  </Link>
</section>
    </div>
  );
}
