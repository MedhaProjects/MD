import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// Brand colors
const brand = {
  primary: "#F16B6B",
  primaryDark: "#d75353",
  soft: "#ffe7e7",
  textDark: "#333",
};

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-6 md:px-12"
      >
        <h1 className="text-5xl font-bold text-[#333] mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We’d love to hear from you! Fill out the form or reach us directly.
        </p>
      </motion.div>

      {/* Form + Contact Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-12 mb-16">
        {/* Contact Form */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#ffe7e7] to-white p-10 rounded-3xl shadow-2xl"
        >
          <div className="mb-6">
            <label className="block text-[#333] font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F16B6B]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#333] font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F16B6B]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#333] font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F16B6B]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#333] font-semibold mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F16B6B]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#F16B6B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d75353] transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-white flex items-center gap-4">
            <MapPin className="text-[#F16B6B] w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>123 Interior Lane, Design City, IN</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-white flex items-center gap-4">
            <Phone className="text-[#F16B6B] w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-white flex items-center gap-4">
            <Mail className="text-[#F16B6B] w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>hello@interiordesign.com</p>
            </div>
          </div>
<br></br>
          {/* Social Media Links */}
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" aria-label="Facebook" className="text-[#F16B6B] hover:text-[#d75353]">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-[#F16B6B] hover:text-[#d75353]">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#F16B6B] hover:text-[#d75353]">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#F16B6B] hover:text-[#d75353]">
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          
        </motion.div>
      </div>

      {/* Full-width Map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-96 overflow-hidden"
      >
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902153509112!2d90.40131441449861!3d23.75090339409162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85ef1234567%3A0x123456789abcdef!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sin!4v1692256789012!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;
