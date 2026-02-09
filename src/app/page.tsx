"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Circle,
  ArrowDown,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const assetBase = "/assets";

  const projects = [
    {
      title: "PAPER",
      year: "2025",
      category: "Company Website",
      description:
        "Migration project transforming a legacy payment product website to Next.js with focus on SEO optimization and Lighthouse performance. Implemented modern UI components, improved page speed, and enhanced search visibility through strategic frontend architecture.",
      image: `${assetBase}/projects/project-paper.webp`,
      link: "https://paper.id/",
    },
    {
      title: "AURORA",
      year: "2025",
      category: "Design System",
      description:
        "Aurora is Paper's comprehensive design system providing reusable Angular components for building consistent enterprise web applications. Streamlines development workflow through standardized UI patterns, component documentation, and strict design guidelines to ensure visual and functional consistency across all products.",
      image: `${assetBase}/projects/project-designsystem.webp`,
    },
    {
      title: "PIVOT PAYMENT",
      year: "2025",
      category: "Company Website",
      description:
        "Pivot Payment is a product website built with Next.js to introduce and explain the company’s payment solutions. The site focuses on clear information structure, interactive UI, and performance-focused frontend implementation to support product communication and user understanding.",
      image: `${assetBase}/projects/project-pivot.webp`,
      link: "https://pivot-payment.com/",
    },
    {
      title: "PAPER UNFOLD",
      year: "2025",
      category: "Event Website",
      description:
        "An event website showcasing comprehensive event information, guest profiles, and photo galleries. Developed with Next.js featuring responsive design, optimized media loading, and intuitive navigation to deliver an engaging experience for attendees exploring event details and highlights.",
      image: `${assetBase}/projects/project-paperunfold.webp`,
      link: "https://paperunfold.id/",
    },
    {
      title: "E-LEARNING PLATFORM",
      year: "2024",
      category: "Web Application",
      description:
        "Learning management system built with React and MUI component library. Converted high-fidelity Figma prototypes into production-ready components, implementing MUI theming for consistent styling. Built reusable course cards, tables, forms, and dashboards with responsive grid.",
      image: `${assetBase}/projects/project-elearning.webp`,
    },
    {
      title: "INGIGS",
      year: "2023",
      category: "Community Platform",
      description:
        "Community platform built with React functional components and hooks-based state management. Implemented dynamic routing, search/filter logic, and responsive layouts using Tailwind utilities. Optimized performance with code splitting and lazy loading.",
      image: `${assetBase}/projects/project-ingigs.webp`,
    },
    {
      title: "ONE DAY TO WRITE",
      year: "2021-2022",
      category: "Course Registration & Management System",
      description:
        "A full-stack Laravel application for managing writing course registrations and transactions. Built with customer-facing registration portal and admin dashboard for course management. Features automated enrollment workflows, email notifications, and comprehensive backend tools for managing users and transactions.",
      image: `${assetBase}/projects/project-onedaytowrite.webp`,
    },
  ];

  return (
    <div className="bg-[#0D0D0D] text-[#F0F0F0] overflow-x-hidden cursor-none">
      {/* Custom Cursor */}
      <div
        className="fixed w-4 h-4 rounded-full border-2 border-[#F0F0F0] pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${
            cursorVariant === "hover" ? 3 : 1
          })`,
        }}
      />

      {/* Minimal Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-12 py-8">
          <div className="text-sm font-light tracking-widest font-mono">
            ERBELIZA{" "}
            <span className="text-xs">© {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            className="text-sm font-light tracking-widest hover:opacity-60 transition-opacity cursor-none font-mono"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 bg-[#0D0D0D] z-50 transition-transform duration-700 cursor-none ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex items-center justify-center">
          <div className="space-y-6 md:space-y-8 text-center font-mono">
            {["HOME", "ABOUT", "WORK", "CONTACT"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-6xl md:text-8xl font-light tracking-tight hover:italic transition-all cursor-none"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsMenuOpen(false)}
          onMouseEnter={() => setCursorVariant("hover")}
          onMouseLeave={() => setCursorVariant("default")}
          className="absolute top-8 right-12 text-sm font-light tracking-widest cursor-none font-mono"
        >
          CLOSE
        </button>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative px-6 md:px-12"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#004D61] rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#822659] rounded-full filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative text-center max-w-6xl">
          <div className="mb-4 flex items-center justify-center gap-4">
            <Circle className="w-2 h-2 fill-green-400 text-green-400 animate-pulse" />
            <span className="text-xs tracking-widest text-gray-400 font-mono">
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none italic">
            CREATIVE
          </h1>
          <h1 className="text-6xl md:text-9xl font-light mb-6 -mt-6 md:-mt-10 ml-4 tracking-tighter leading-none font-mono">
            Developer
          </h1>

          <p className="text-lg md:text-xl font-light tracking-wide text-gray-400 max-w-2xl mx-auto mb-12">
            Creating high-converting landing pages and scalable component
            libraries that bridge design and engineering.
          </p>

          {/* <div className="flex items-center justify-center gap-8">
            <a
              href="#work"
              className="group flex items-center gap-2 text-sm tracking-widest hover:opacity-60 transition-opacity cursor-none"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              EXPLORE PROJECTS
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
          </div> */}
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="animate-bounce text-xs tracking-widest text-gray-600 flex items-center justify-center">
            SCROLL
            <ArrowDown className="w-4 h-4 ml-2" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 md:px-12 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-16 items-center">
          <div>
            <div className="text-xs tracking-widest text-gray-500 mb-4">
              ABOUT ME
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">
              Making the web
              <span className="italic"> work beautifully</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 font-light text-base md:text-lg">
            <p>
              I bridge design and engineering to build high-quality web
              products. I’ve worked on enterprise-scale design systems in
              Angular and interactive experiences in Next.js, with a strong
              focus on scalability and usability.
            </p>
            <p>
              I adapt across modern frameworks and WordPress, choosing the right
              tools based on the needs of each project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl md:text-4xl font-light text-[#F0F0F0] mb-2">
                  3+
                </div>
                <div className="text-xs tracking-widest text-gray-500">
                  YEARS EXP
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-[#F0F0F0] mb-2">
                  90+
                </div>
                <div className="text-xs tracking-widest text-gray-500">
                  LIGHTHOUSE SCORE
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-[#F0F0F0] mb-2">
                  97+
                </div>
                <div className="text-xs tracking-widest text-gray-500">
                  AHREFS SCORE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <div className="text-xs tracking-widest text-gray-500 mb-4">
              SELECTED WORK
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-12 md:space-y-24">
            {projects.map((project, idx) => {
              const wrapperProps = {
                className: "group block cursor-none",
                onMouseEnter: () => setCursorVariant("hover"),
                onMouseLeave: () => setCursorVariant("default"),
              } as const;
              const CardGrid = (
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                  <div
                    className={`order-1 ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                  >
                    <div
                      className="aspect-4/3 rounded-2xl overflow-hidden"
                      style={{
                        backgroundImage: project.image.startsWith(
                          "linear-gradient",
                        )
                          ? project.image
                          : `url(${project.image})`,
                        backgroundSize: project.image.startsWith(
                          "linear-gradient",
                        )
                          ? "cover"
                          : "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>

                  <div
                    className={`order-2 ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="text-xs tracking-widest text-gray-500 mb-4">
                      {project.category} — {project.year}
                    </div>
                    <h3 className="text-5xl md:text-6xl font-light tracking-tighter mb-3 group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 md:mb-8">
                      {project.description}
                    </p>
                    {project.link && (
                      <div className="flex items-center gap-2 text-sm tracking-widest group-hover:gap-4 transition-all duration-500 ease-out">
                        VIEW PROJECT
                        <span className="relative inline-block w-4 h-4">
                          <ArrowUpRight className="w-4 h-4 transition-opacity duration-300 ease-out group-hover:opacity-0" />
                          <ArrowRight className="w-4 h-4 group-hover:-translate-x-2 absolute inset-0 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:animate-[left-right_0.8s_ease-in-out_infinite]" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );

              return project.link ? (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...wrapperProps}
                >
                  {CardGrid}
                </a>
              ) : (
                <div key={idx} {...wrapperProps}>
                  {CardGrid}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32"
      >
        <div className="text-center max-w-4xl">
          <div className="text-xs tracking-widest text-gray-500 mb-8">
            LET'S WORK TOGETHER
          </div>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter mb-12 leading-tight">
            Got a project?
            <br />
            <span className="italic">Let's talk.</span>
          </h2>

          <div
            className="inline-block text-3xl md:text-5xl font-light tracking-tight hover:italic transition-all mb-16 cursor-none"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            shaqilaerbeliza@gmail.com
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm tracking-widest">
            {[
              { icon: <Github className="w-5 h-5" />, label: "GITHUB", href: "https://github.com/shaqila" },
              { icon: <Linkedin className="w-5 h-5" />, label: "LINKEDIN", href: "https://www.linkedin.com/in/shaqila-erbeliza/" },
              { icon: <Mail className="w-5 h-5" />, label: "EMAIL", href: "mailto:shaqilaerbeliza@gmail.com.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:opacity-60 transition-opacity cursor-none"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {social.icon}
                <span className="text-xs">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-10 md:py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs tracking-widest text-gray-600">
            ERBELIZA © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
          </div>
          <div className="text-xs tracking-widest text-gray-600">
            DEVELOPED WITH PASSION
          </div>
        </div>
      </footer>
    </div>
  );
}
