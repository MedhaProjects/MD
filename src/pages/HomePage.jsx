import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const slides = [
  {
    img: "/images/int.jpg",
    title: "Transform Your Home with Elegance",
    description:
      "Personalized interior designs crafted to reflect your unique style and taste.",
  },
  {
    img: "/images/int2.jpg",
    title: "Innovative Modern Living Spaces",
    description:
      "Sleek, contemporary interiors designed to elevate your lifestyle effortlessly.",
  },
  {
    img: "/images/int3.jpg",
    title: "Comfort Meets Sophistication",
    description:
      "Cozy and chic interiors tailored perfectly for your home’s personality.",
  },
];

const steps = [
  {
    title: "Consult Our Designer",
    description:
      "Discuss your vision, style, and budget with our expert designers to create the perfect plan.",
    button: "Get Started",
  },
  {
    title: "Confirm Your Booking",
    description:
      "Secure your slot by paying just 10% of the estimated quote or ₹30,000, whichever is higher.",
    button: "Next",
  },
  {
    title: "Execution & Handover",
    description:
      "We execute the plan, manage everything, and hand over a beautifully completed space.",
    button: "Book Now",
  },
];

const tabs = ["Architecture", "Interior Design", "3D Design"];
const ANIMATION_DURATION = 800;
const AUTO_SLIDE_INTERVAL = 4000;
const BUTTON_TEXT = "Explore Now";
const BUTTON_URL = "/studiocollection";


export default function HeroSlider() {
  const navigate = useNavigate();

  const tabContent = {
    Architecture: (
      <p className="text-gray-700 mb-8 max-w-lg text-lg leading-relaxed font-medium">
        Architecture is the art and science of designing and constructing
        buildings, focusing on aesthetics, functionality, and safety.
      </p>
    ),
    "Interior Design": (
      <p className="text-gray-700 mb-8 max-w-lg text-lg leading-relaxed font-medium">
        Interior Design is creating functional and beautiful indoor spaces that
        enhance the quality of life and culture of the occupants.
      </p>
    ),
    "3D Design": (
      <p className="text-gray-700 mb-8 max-w-lg text-lg leading-relaxed font-medium">
        3D Design involves creating three-dimensional models and visualizations
        for architecture, interiors, and products.
      </p>
    ),
  };

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const intervalRef = useRef(null);
  const textTimeoutRef = useRef(null);
  const initialAnimationTimeoutRef = useRef(null);
  const initialFadeInTimeoutRef = useRef(null);

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      changeSlide((c) => (c + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  const changeSlide = (updateFn) => {
    if (animating) return;
    setAnimating(true);
    setTextVisible(false);

    setTimeout(() => {
      setCurrent(updateFn);
      setAnimating(false);

      textTimeoutRef.current = setTimeout(() => {
        setTextVisible(true);
      }, 300);
    }, ANIMATION_DURATION);
  };

  useEffect(() => {
    resetAutoSlide();
    setTextVisible(true);

    initialAnimationTimeoutRef.current = setTimeout(() => {
      setTextVisible(false);
      initialFadeInTimeoutRef.current = setTimeout(() => {
        setTextVisible(true);
      }, 300);
    }, 100)
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(textTimeoutRef.current);
      clearTimeout(initialAnimationTimeoutRef.current);
      clearTimeout(initialFadeInTimeoutRef.current);
    };
  }, []);

  const prevSlide = () => {
    resetAutoSlide();
    changeSlide((c) => (c - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    resetAutoSlide();
    changeSlide((c) => (c + 1) % slides.length);
  };

  const goToSlide = (idx) => {
    if (idx === current || animating) return;
    resetAutoSlide();
    changeSlide(() => idx);
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 font-sans select-none">
      {/* Hero Slider */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {slides.map((slide, i) => {
          const active = i === current;
          return (
            <img
              key={i}
              src={slide.img}
              alt={slide.title}
              draggable={false}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                active ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ willChange: "opacity, transform" }}
            />
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-xl mx-auto text-white drop-shadow-lg
            transition-all duration-500 ease-in-out
            ${
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            {slides[current].title}
          </h1>
          <p className="mt-4 text-lg opacity-95">
            {slides[current].description}
          </p>
          <Link
  to={BUTTON_URL}
  className="px-6 py-3 rounded-xl text-white font-medium shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
  style={{ background: "#F16B6B" }}
>
  Explore Now
</Link>

        </div>

        {/* Navigation */}
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="absolute left-6 top-[40%] -translate-y-1/2 bg-white bg-opacity-25 hover:bg-gradient-to-r hover:from-[#F16B6B] hover:to-[#D45959] hover:text-white text-gray-900 rounded-full p-3 shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="absolute right-6 top-[40%] -translate-y-1/2 bg-white bg-opacity-25 hover:bg-gradient-to-r hover:from-[#F16B6B] hover:to-[#D45959] hover:text-white text-gray-900 rounded-full p-3 shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-4 h-4 rounded-full border-2 border-white transition-colors duration-300 ${
                i === current ? "bg-white" : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-20 bg-gradient-to-tr from-white via-gray-50 to-white relative overflow-hidden">
        {/* Left Image */}
        <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative z-10">
          <img
            src="/images/int3.jpg"
            alt="Luxury Living Room"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-xl relative z-20 space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight relative">
            About Us
            <span className="block h-1 w-24 bg-gradient-to-r from-[#F16B6B] to-[#D45959] rounded-full mt-2"></span>
          </h2>

          <h3 className="text-3xl font-semibold text-[#F16B6B] leading-snug">
            Elevate Your Space with Timeless Elegance
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#F16B6B]">Luxora Interiors</span>, we craft interiors that tell your story — blending luxurious comfort with artistic precision.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From bespoke furniture to elegant finishes, our expert team works hand-in-hand with you to bring your vision to life.
          </p>
        </div>
      </section>
   <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto text-center px-6">
    <h3
      className="text-sm uppercase font-semibold tracking-widest mb-2"
      style={{ color: "#F16B6B" }}
    >
      Service We Do
    </h3>
    <h2 className="text-5xl font-extrabold text-gray-900 mb-20">
      Our Featured Services
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {[
        {
          title: "Architecture",
          img: "/images/int.jpg",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#F16B6B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5} // thicker stroke for premium feel
            >
              {/* More balanced house/building icon */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7v8a2 2 0 01-2 2h-3a2 2 0 01-2-2v-4H8v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-8z" />
            </svg>
          ),
          description:
            "Innovative architectural solutions tailored to your vision.",
        },
        {
          title: "Interior Design",
          img: "/images/int2.jpg",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#F16B6B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              {/* A stylized grid icon representing layout */}
              <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          description:
            "Personalized interiors that reflect your style and comfort.",
        },
        {
          title: "Furniture",
          img: "/images/int3.jpg",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#F16B6B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              {/* A chair icon, balanced and premium */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21v-6h10v6M5 9h14v4H5zM9 9V5h6v4" />
            </svg>
          ),
          description:
            "Crafted furniture that combines form and function flawlessly.",
        },
        {
          title: "3D Design",
          img: "/images/int.jpg",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#F16B6B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              {/* A cube icon representing 3D design */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96l8.73 5.03 8.73-5.03M12 22.5v-11" />
            </svg>
          ),
          description:
            "Cutting-edge 3D designs to visualize your dream projects.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="relative group bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden border border-transparent hover:border-[#F16B6B] transition-all duration-500"
          tabIndex={0}
          role="button"
          aria-label={`View details for ${item.title}`}
        >
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              draggable={false}
            />
          </div>
          <div className="p-6 text-left">
            <div className="flex items-center space-x-4 mb-4">
              {/* Removed hover background color */}
              <div className="p-3 rounded-full bg-[#F16B6B]/20">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#F16B6B] transition-colors duration-500">
                {item.title}
              </h4>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>

          {/* Animated underline on hover */}
          <span
            className="absolute bottom-0 left-0 w-0 h-1 bg-[#F16B6B] transition-all duration-500 group-hover:w-full"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  </div>
</section>
{/* 3-Step Process - Image Right, Content Left */}
<section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
      Transform Your Space in 3 Simple Steps
    </h2>

    {/* Step Content Box */}
    <div
      key={currentStep}
      className="flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out min-h-[16rem] sm:min-h-[20rem] lg:min-h-[24rem]"
    >
      {/* Step Image */}
      <div className="lg:w-1/2 w-full h-64 sm:h-72 lg:h-auto flex-shrink-0">
        <img
          src={
            currentStep === 1
              ? "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000"
              : currentStep === 2
              ? "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1000"
              : "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000"
          }
          alt={`Step ${currentStep}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Step Content */}
      <div className="lg:w-1/2 w-full p-8 sm:p-10 flex flex-col justify-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
          Step {currentStep}
        </h3>
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
          {steps[currentStep - 1].description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-3">
          <button
            onClick={() => {
              if (currentStep > 1) setCurrentStep((prev) => prev - 1);
            }}
            disabled={currentStep === 1}
            className="px-6 py-3 rounded-full text-lg sm:text-xl font-bold border border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <button
            onClick={() => {
              if (currentStep < steps.length) {
                setCurrentStep((prev) => prev + 1);
              } else {
                navigate("/contactus");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="px-8 py-3 rounded-full text-lg sm:text-xl font-bold bg-gradient-to-r from-[#F16B6B] to-[#d75353] text-white shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {currentStep < steps.length ? "Next" : steps[currentStep - 1].button}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div
            className="bg-[#F16B6B] h-full rounded-full transition-all duration-700"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  </div>
</section>









    <section className="bg-white py-20 px-6 lg:px-24 font-poppins select-none">
  {/* ABOUT US */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* Left Image with subtle circle */}
    <div className="relative flex justify-center">
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full" style={{ backgroundColor: "#ffe7e7", opacity: 0.5, zIndex: -10 }}></div>
      <img
        src="/images/int.jpg"
        alt="Living Room"
        className="rounded-2xl shadow-lg max-w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>

    {/* Right Text Content */}
    <div>
      <h2 className="text-4xl font-extrabold mb-6" style={{ color: "#333", lineHeight: "1.2" }}>
        We Provide You The Best Experience.
      </h2>
      <p className="mb-8 max-w-xl" style={{ color: "#666", lineHeight: "1.75" }}>
        You can align your image to the right, left, or center with a caption, link, and alt text. New Journey. You can align your image to the right, left, or center with a caption, link and alt text. New Journey.
      </p>

      {/* Tabs */}
      <div className="flex space-x-8 text-base font-semibold border-b mb-10" style={{ borderColor: "#ffe7e7" }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 transition-colors duration-300 ${
              activeTab === tab
                ? "border-b-4"
                : "hover:text-[#F16B6B]"
            }`}
            style={{
              color: activeTab === tab ? "#F16B6B" : "#666",
              borderBottomColor: activeTab === tab ? "#F16B6B" : "transparent",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content based on active tab */}
      {tabContent[activeTab]}

      {/* Bullet Points */}
      <ul className="space-y-3 max-w-md text-lg font-semibold" style={{ color: "#333" }}>
        {[
          "✔ Quality and designs checks deeply",
          "✔ Periodic site review and timelines",
          "✔ Design development and strategy",
        ].map((point, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <svg
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              style={{ color: "#F16B6B" }}
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>{point.replace("✔ ", "")}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

 

          {/* CTA Section - Clean Version */}
<div className="w-full py-28 px-6 lg:px-32">
  <div className="text-center max-w-5xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#F16B6B] mb-6">
      Let's Work Together
    </h2>
    <p className="text-gray-700 mb-10 text-lg max-w-3xl mx-auto">
      Get in touch to discuss your dream interior project. Let's turn your vision into reality!
    </p>
    <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <Link
        to="/contactus"
        className="px-12 py-4 bg-gradient-to-r from-[#F16B6B] to-[#d75353] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Contact Us
      </Link>
    </motion.div>
  </div>

      </div>
    </div>
    
  
);
}
