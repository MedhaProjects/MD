import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Our Story", to: "/Ourstory" },
  { name: "What We Can Offer You", to: "/offerings" },
  { name: "Studio Collection", to: "/studiocollection" },
  { name: "What Our Clients Say", to: "/whatourclientsay" },
  { name: "Talk to Designer", to: "/contactus" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative bg-white shadow-md sticky top-0 z-50 font-sans overflow-hidden">
      {/* SVG decorations inside navbar container */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Left side soft pink gradient circle */}
        <svg
          className="absolute top-1/2 left-4 w-32 h-32 -translate-y-1/2 opacity-20"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="50" fill="#F16B6B" />
        </svg>

        {/* Right side overlapping pink ellipse */}
        <svg
          className="absolute top-1/3 right-6 w-40 h-24 opacity-15"
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="80" cy="50" rx="80" ry="50" fill="#F16B6B" />
        </svg>

        {/* Subtle wavy line under nav items */}
        <svg
          className="absolute bottom-0 left-0 w-full h-8 opacity-10"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0 30 C360 60 1080 0 1440 30 V60 H0 V30 Z" fill="#F16B6B" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="flex justify-end items-center h-20">
          {/* Desktop nav fully aligned right */}
          <div className="hidden md:flex items-center space-x-10 text-gray-800 text-base font-medium">
            {navItems.map(({ name, to }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={name}
                  to={to}
                  className={`
                    relative
                    transition duration-300 ease-in-out
                    ${name === "Talk to Designer"
                      ? `border border-[#C89F80] rounded-full px-5 py-2 hover:shadow-[0_0_12px_#F16B6B] hover:border-[#F16B6B] text-[#C89F80] hover:text-[#F16B6B] ${
                          isActive ? "shadow-[0_0_12px_#F16B6B] border-[#F16B6B] text-[#F16B6B]" : ""
                        }`
                      : `hover:text-[#F16B6B] hover:underline hover:underline-offset-4 ${
                          isActive ? "text-[#F16B6B] underline underline-offset-4" : ""
                        }`
                    }
                    focus:outline-none focus:ring-2 focus:ring-[#F16B6B] focus:ring-opacity-50
                  `}
                >
                  {name}
                  {/* Small glowing dot on hover for normal items */}
                  {name !== "Talk to Designer" && (
                    <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 rounded-full bg-[#F16B6B] opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform -translate-x-1/2" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu toggle button aligned right */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F16B6B] rounded"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-3 text-gray-800 text-base font-medium shadow-sm border-t border-gray-200 relative z-10">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={`
                block py-2 border-b border-gray-100 rounded
                transition duration-300 ease-in-out
                ${name === "Talk to Designer"
                  ? "border border-[#C89F80] rounded-full px-4 py-2 text-center my-2 hover:shadow-[0_0_12px_#F16B6B] hover:border-[#F16B6B] text-[#C89F80] hover:text-[#F16B6B]"
                  : "hover:text-[#F16B6B]"
                }
                focus:outline-none focus:ring-2 focus:ring-[#F16B6B] focus:ring-opacity-50
              `}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
