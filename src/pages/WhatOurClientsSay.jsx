import React from "react";
import { motion } from "framer-motion";
import { Star, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Sofia Williams",
    role: "Homeowner",
    text: "The interior design transformed our home! Every detail is perfect.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Lee",
    role: "Office Manager",
    text: "Professional, creative, and timely. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Entrepreneur",
    text: "Amazing work! My office now feels both stylish and functional.",
    rating: 4,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Homeowner",
    text: "The team listened to all our needs and delivered beyond expectations.",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia Davis",
    role: "Interior Enthusiast",
    text: "A seamless experience from start to finish. Highly satisfied!",
    rating: 5,
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhatOurClientsSay() {
  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          What Our Clients Say
        </h1>
        <p className="text-gray-200 mb-12">
          Transforming spaces, one happy client at a time.
        </p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#ffe7e7]/90 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.role}</p>
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <div className="flex space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-[#F16B6B] w-5 h-5" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 rounded-full bg-[#F16B6B] text-white font-semibold hover:bg-[#d75353] transition"
        >
          Share Your Experience
        </motion.button>

        {/* New Section: Invitation + Contact + Social */}
        <div className="mt-16 text-center text-white">
          <p className="text-2xl mb-6">
            We would love to work with you! Let's create something amazing together.
          </p>
  
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Link
    to="/contactus"
    className="inline-block mb-6 px-8 py-3 rounded-full bg-[#F16B6B] text-white font-semibold hover:bg-[#d75353] transition"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    Contact Us
  </Link>
</motion.div>
          <div className="flex justify-center space-x-6 text-white text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
