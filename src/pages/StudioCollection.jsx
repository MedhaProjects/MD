import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const completedProjects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Completed Project ${i + 1}`,
  description: "A beautifully crafted interior project with attention to detail.",
  image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000",
  status: "Completed",
}));

const upcomingProjects = Array.from({ length: 2 }, (_, i) => ({
  id: i + 101,
  title: `Upcoming Project ${i + 1}`,
  description: "Exciting upcoming interior design project.",
  image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1000",
  status: "Upcoming",
}));

const allProjects = [...completedProjects, ...upcomingProjects];

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 bg-gradient-to-b from-white/90 to-white/70 group"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-64 object-cover rounded-t-2xl transform group-hover:scale-105 transition-transform duration-500"
    />
    {/* Glassmorphism overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
      <button className="px-6 py-2 bg-gradient-to-r from-[#F16B6B] to-[#d75353] text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition">
        View Project
      </button>
    </div>
    <div className="p-5">
      <span
        className={`inline-block px-4 py-1 text-xs font-semibold text-white rounded-full ${
          project.status === "Completed"
            ? "bg-green-500/90 animate-pulse"
            : "bg-orange-500/90 animate-pulse"
        }`}
      >
        {project.status.toUpperCase()}
      </span>
      <h3 className="mt-3 font-extrabold text-2xl text-[#F16B6B]">{project.title}</h3>
      <p className="mt-1 text-gray-700 text-sm">{project.description}</p>
    </div>
  </motion.div>
);

const Studiocollection = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.status === filter);

  return (
    <div className="relative w-full font-sans">

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>

     <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mb-4"
          >
            Matasya Interiors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Transforming spaces into modern, functional, and aesthetically stunning interiors.
          </motion.p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-3 bg-gradient-to-r from-[#F16B6B] to-[#d75353] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition"
          >
            Explore Projects
          </motion.a>
        </div>

        {/* Floating accent shapes */}
        <div className="absolute -bottom-16 -left-20 w-56 h-56 bg-[#F16B6B]/20 rounded-full animate-pulse"></div>
        <div className="absolute -top-24 -right-12 w-64 h-64 bg-[#F16B6B]/10 rounded-full animate-pulse"></div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-7xl mx-auto px-6 py-24">

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-20">
          {["All", "Completed", "Upcoming"].map((status) => (
            <motion.button
              key={status}
              onClick={() => setFilter(status)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 ${
                filter === status
                  ? "bg-gradient-to-r from-[#F16B6B] to-[#d75353] text-white shadow-xl"
                  : "bg-gray-100 text-gray-700 hover:bg-[#F16B6B] hover:text-white"
              }`}
            >
              {status}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <motion.p
                className="col-span-full text-center text-gray-500 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No projects found.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CTA Section - Full Width */}
      <div className="w-full relative bg-gradient-to-r from-[#F16B6B]/10 to-[#d75353]/10 py-28 px-6 lg:px-32 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#F16B6B]/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#d75353]/20 rounded-full animate-pulse"></div>
<div className="text-center relative z-10 max-w-5xl mx-auto">
  <h2 className="text-4xl lg:text-5xl font-extrabold text-[#F16B6B] mb-6">
    Let's Work Together
  </h2>
  <p className="text-gray-700 mb-10 text-lg max-w-3xl mx-auto">
    Get in touch to discuss your dream interior project. Let's turn your vision into reality!
  </p>
  <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }} className="inline-block">
    <Link
      to="/contactus" // your Contact Us page route
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
};

export default Studiocollection;
