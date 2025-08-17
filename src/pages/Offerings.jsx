import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Sofa, Building, Lamp, Home, ChevronRight, PenTool, Workflow, Camera, Rocket, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useInView } from "framer-motion";

// Brand palette
const brand = {
  primary: "#F16B6B",
  primaryDark: "#d75353",
  soft: "#FFECEE",
  textDark: "#1F1F1F",
  textMuted: "#5b5b5b",
  stroke: "rgba(241,107,107,0.25)",
  cardBg: "rgba(255,255,255,0.75)",
};

// Motion helpers
const useAnims = () => {
  const reduce = useReducedMotion();
  return {
    fadeUp: {
      hidden: { opacity: 0, y: reduce ? 0 : 40 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    },
    fade: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: reduce ? 1 : 0.95 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
    },
    stagger: {
      show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    },
  };
};

// Scroll-triggered animation wrapper
const ScrollAnimate = ({ children, variants, once = true, onLoad = false }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once });
  const shouldAnimate = onLoad ? true : inView;

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={shouldAnimate ? "show" : "hidden"}>
      {children}
    </motion.div>
  );
};

// UI Components
const Badge = ({ children }) => (
  <span
    className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide"
    style={{
      borderColor: brand.stroke,
      background: "rgba(241,107,107,0.08)",
      color: brand.primaryDark,
      fontFamily: "Inter, sans-serif",
    }}
  >
    {children}
  </span>
);

const SectionHeading = ({ kicker, title, subtitle, center }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={center ? "text-center max-w-3xl mx-auto" : ""}
  >
    {kicker && <div className="mb-3"><Badge>{kicker}</Badge></div>}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight" style={{ color: brand.textDark, fontFamily: "Playfair Display, serif" }}>
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: brand.textMuted, fontFamily: "Inter, sans-serif" }}>{subtitle}</p>}
  </motion.div>
);

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`rounded-2xl border backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${className}`}
    style={{ background: brand.cardBg, borderColor: "rgba(0,0,0,0.06)" }}
  >
    {children}
  </motion.div>
);

const PillLink = ({ children }) => (
  <a
    href="#contact"
    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
    style={{
      background: brand.primary,
      color: "white",
      fontFamily: "Inter, sans-serif",
      boxShadow: "0 10px 24px rgba(241,107,107,0.35)",
    }}
  >
    {children} <ArrowRight size={16} />
  </a>
);

export default function OfferingsPage() {
  const anim = useAnims();

  const services = [
    {
      icon: <Sofa />,
      title: "Residential Design",
      desc: "Transforming homes into personalized, functional, and beautiful spaces.",
      points: ["Space planning & layout", "Custom furniture selection", "Lighting & finishes"],
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000",
    },
    {
      icon: <Building />,
      title: "Commercial Design",
      desc: "Stylish and efficient office, retail, and hospitality interiors.",
      points: ["Workplace layout optimization", "Brand-centric aesthetics", "Ergonomic solutions"],
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000",
    },
    {
  icon: <Home />,
  title: "Modular Kitchen & Furniture",
  desc: "Smart, elegant solutions tailored to your space and lifestyle.",
  points: ["Custom cabinetry", "Modular furniture", "Material & hardware selection"],
  img: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1000",
},

    {
      icon: <Lamp />,
      title: "Furniture & Decor",
      desc: "Finishing touches that make every space unique and welcoming.",
      points: ["Accessories & art placement", "Textiles & rugs", "Lighting & ambiance"],
      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000",
    },
  ];
  const steps = [
    { icon: <PenTool />, title: "Discover", text: "We understand your lifestyle, taste & space goals." },
    { icon: <Workflow />, title: "Design", text: "Concepts → layouts → materials → 3D visuals." },
    { icon: <Camera />, title: "Detail", text: "Working drawings, BOQs & site-ready documentation." },
    { icon: <Rocket />, title: "Deliver", text: "Procurement, execution & a picture-perfect handover." },
  ];

  const stats = [
    { num: "250+", label: "Projects Delivered" },
    { num: "35+", label: "Design Awards" },
    { num: "98%", label: "On-Time Delivery" },
    { num: "4.9★", label: "Client Rating" },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-4 lg:pt-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimate variants={anim.fadeUp} onLoad>
            <div className="max-w-3xl">
              <Badge>What We Can Offer You</Badge>
              <h1
                className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
                style={{ color: brand.textDark, fontFamily: "Playfair Display, serif" }}
              >
                Premium interiors crafted for the way <span style={{ color: brand.primary }}>you</span> live.
              </h1>
              <p
                className="mt-5 text-lg md:text-xl leading-relaxed"
                style={{ color: brand.textMuted, fontFamily: "Inter, sans-serif" }}
              >
                From concept to keys—bespoke design, considered materials and immaculate execution.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <PillLink>Start your project</PillLink>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: brand.primaryDark, fontFamily: "Inter, sans-serif" }}
                >
                  Explore services <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate variants={anim.scaleIn} onLoad>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Luxury Interior"
                className="rounded-3xl shadow-xl object-cover w-full h-[420px] lg:h-[520px]"
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "linear-gradient(to top right, rgba(241,107,107,0.15), rgba(0,0,0,0) 60%)" }}
              />
            </div>
          </ScrollAnimate>
        </div>
      </section>

   {/* Services */}
{/* Services */}
<section id="services" className="relative mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
  <SectionHeading
    kicker="Services"
    title="Everything you need—beautifully handled"
    subtitle="Pick a single service or choose our turnkey package for a seamless, stress-free journey."
    center
  />
  <motion.div
    variants={anim.stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
  >
    {services.map((s, i) => (
      <ScrollAnimate key={i} variants={anim.fadeUp}>
        <GlassCard className="h-full p-6 flex flex-col">
          {s.img && (
            <img
              src={s.img}
              alt={s.title}
              className="rounded-2xl mb-4 object-cover w-full h-64"
            />
          )}
          <div className="flex items-center gap-3">
            <div
              className="rounded-xl p-2"
              style={{ background: brand.soft, color: brand.primaryDark }}
            >
              {s.icon}
            </div>
            <h3
              className="text-lg font-semibold"
              style={{ color: brand.textDark, fontFamily: "Playfair Display, serif" }}
            >
              {s.title}
            </h3>
          </div>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: brand.textMuted, fontFamily: "Inter, sans-serif" }}
          >
            {s.desc}
          </p>
          <ul className="mt-4 space-y-2">
            {s.points.map((p, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span
                  className="mt-1 inline-block h-2 w-2 rounded-full"
                  style={{ background: brand.primary }}
                />
                <span
                  className="text-sm"
                  style={{ color: brand.textDark, fontFamily: "Inter, sans-serif" }}
                >
                  {p}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: brand.primaryDark, fontFamily: "Inter, sans-serif" }}
            >
              Get a tailored quote <ChevronRight size={16} />
            </a>
          </div>
        </GlassCard>
      </ScrollAnimate>
    ))}
  </motion.div>
</section>

{/* Stats Section */}
<section className="relative mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
  <GlassCard className="p-8 md:p-10">
    <motion.div
      variants={anim.stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10"
    >
      {/* Left content */}
     <ScrollAnimate variants={anim.fadeUp}>
  <SectionHeading
    kicker="Why choose us"
    title="Luxury, minus the stress"
    subtitle="We handle every detail so you can relax."
  />
  <ul className="mt-6 space-y-3">
    {[
      "Clear timelines & budgets",
      "One dedicated contact",
      "Trusted vendors only",
      "Eco-friendly materials available",
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-1 inline-block h-2 w-2 rounded-full"
                style={{ background: brand.primary }}
              />
              <span
                className="text-sm md:text-base"
                style={{ color: brand.textDark, fontFamily: "Inter, sans-serif" }}
              >
                {t}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <PillLink>Book a free consult</PillLink>
        </div>
      </ScrollAnimate>

      {/* Right stats grid with icons */}
      <motion.div variants={anim.fadeUp} className="grid grid-cols-2 gap-4">
        {[
          { icon: "🎨", label: "Custom Designs" },
          { icon: "🏡", label: "Personalized Spaces" },
          { icon: "🌿", label: "Sustainable Choices" },
          { icon: "🤝", label: "Hassle-free Process" },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border p-6 text-center flex flex-col items-center justify-center"
            style={{ borderColor: "rgba(0,0,0,0.06)", background: "white" }}
          >
            <div className="text-4xl md:text-5xl mb-2">{s.icon}</div>
            <div
              className="mt-2 text-sm md:text-base font-semibold"
              style={{ color: brand.textDark, fontFamily: "Inter, sans-serif" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </GlassCard>
</section>

      {/* Process */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 lg:pb-40" style={{ background: "radial-gradient(circle at top left, rgba(241,107,107,0.1), transparent 70%),radial-gradient(circle at bottom right, rgba(241,107,107,0.05), transparent 70%)" }}>
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-pink-200/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-100/10 rounded-full blur-3xl pointer-events-none"></div>
        <SectionHeading kicker="Our process" title="A smooth, four-step journey" subtitle="Clear stages, predictable outcomes." center />
        <motion.div variants={anim.stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((st, i) => (
            <ScrollAnimate key={i} variants={anim.fadeUp}>
              <GlassCard className="p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold text-lg" style={{ background: `linear-gradient(135deg, ${brand.primary}, ${brand.primaryDark})` }}>{i+1}</div>
                  <div className="p-2 rounded-xl bg-white/80 text-2xl shadow-md" style={{ color: brand.primaryDark }}>{st.icon}</div>
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-tight" style={{ color: brand.textDark, fontFamily: "Playfair Display, serif" }}>{st.title}</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: brand.textMuted, fontFamily: "Inter, sans-serif" }}>{st.text}</p>
              </GlassCard>
            </ScrollAnimate>
          ))}
        </motion.div>
      </section>

<section id="contact" className="relative mx-auto max-w-7xl px-6 pb-24">
  <ScrollAnimate variants={anim.fadeUp}>
    <div
      className="rounded-3xl px-6 py-10 md:px-10 md:py-14 overflow-hidden"
      style={{
        background:
          "radial-gradient(1000px 500px at 0% 0%, rgba(241,107,107,0.18), transparent 55%), linear-gradient(180deg, #FFF5F6 0%, #FFFFFF 100%)",
        border: "1px solid rgba(241,107,107,0.18)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h3
            className="text-2xl md:text-3xl font-semibold leading-snug"
            style={{ color: brand.textDark, fontFamily: "Playfair Display, serif" }}
          >
            Ready to elevate your space?
          </h3>
          <p
            className="mt-2 text-sm md:text-base leading-relaxed"
            style={{ color: brand.textMuted, fontFamily: "Inter, sans-serif" }}
          >
            Share your floor plan and a few references. We’ll send a curated proposal.
          </p>
        </div>
        <div className="md:justify-self-end">
          <Link
            to="/contactus" // your Contact Us page route
            className="inline-block"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <PillLink>Book your consultation</PillLink>
          </Link>
        </div>
      </div>
    </div>
  </ScrollAnimate>
</section>

    </main>
  );
}
