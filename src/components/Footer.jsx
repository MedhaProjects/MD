import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Our Story", to: "/Ourstory" },
  { name: "What We Can Offer You", to: "/offerings" },
  { name: "Studio Collection", to: "/studiocollection" },
  { name: "What Our Clients Say", to: "/whatourclientsay" },
  { name: "Talk to Designer", to: "/contactus" },
];

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-[#FFE7E7] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#F16B6B] mb-4">Matasya Designs</h2>
          <p className="text-[#FFE7E7]">
            Crafting beautiful and functional spaces that reflect your style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#F16B6B]">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map(({ name, to }) => (
              <li key={name}>
                <Link to={to} className="hover:text-[#F16B6B]">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#F16B6B]">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-[#F16B6B]"><Facebook /></a>
            <a href="#" className="hover:text-[#F16B6B]"><Instagram /></a>
            <a href="#" className="hover:text-[#F16B6B]"><Twitter /></a>
            <a href="#" className="hover:text-[#F16B6B]"><Linkedin /></a>
          </div>
          <p className="text-[#FFE7E7]">hello@matasyadesigns.com</p>
          <p className="text-[#FFE7E7]">+91 98765 43210</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-[#FFE7E7] text-sm">
        © 2025 Matasya Designs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
