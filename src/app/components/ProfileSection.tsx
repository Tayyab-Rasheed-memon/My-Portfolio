
"use client"; // Ensures this is a client-side component

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Use Next.js's Link component

const ProfileSection: React.FC = () => {
  const [text, setText] = useState("Designer");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Text animation logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => (prevText === "Designer" ? "Coder" : "Designer"));
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval
  }, []);

  // Navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after a section is clicked
  };

  // Skills data with real logo SVGs
  const skills = [
    { name: "TypeScript", logo: "/TypeScript.png" },
    { name: "JavaScript", logo: "/javascript.png" },
    { name: "HTML", logo: "/HTML.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "Next.js", logo: "/nextjs.png" },
    { name: "Graphic Design", logo: "/graphic-design.png" },
    { name: "Microsoft Excel", logo: "/excel.png" },
    { name: "Microsoft Word", logo: "/word.png" },
    { name: "Tailwind CSS", logo: "/Tailwind CSS.png" },
    { name: "REST APIs", logo: "/REST APIs.jpeg" },
    { name: "Problem Solving", logo: "/Problem Solving.jpeg" },
    { name: "React.js", logo: "/React.jsds.png" },
  ];

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Navbar with enhanced animations */}
      <nav
        className={`bg-black bg-opacity-80 fixed top-0 left-0 w-full p-4 z-50 transition-all duration-500 ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-green-500 animate-popIn hover:animate-bounce transition-all duration-300">
            <span className="inline-block hover:scale-110">
              I.T. Memon
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none transition-transform duration-300 transform hover:rotate-180"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "❌" : "☰"} {/* Change between ☰ and ❌ */}
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`md:flex gap-8 text-white transition-all duration-500 ${
              isMenuOpen ? "block absolute top-full left-0 right-0 bg-black p-4" : "hidden"
            }`}
          >
            {["home", "skills", "about", "services", "contact"].map((item, index) => (
              <li
                key={item}
                className="animate-slideInFromRight py-2 md:py-0 text-center transition-all duration-300"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <button
                  onClick={() => scrollToSection(item)}
                  className="hover:text-green-500 transition-all duration-300 hover:scale-105 hover:drop-shadow-glow w-full md:w-auto"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

     {/* Profile Section */}
<div
  id="home"
  className="bg-black text-white py-16 md:py-32 overflow-hidden"
>
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4">
    {/* Profile Image with Floating Animation */}
    <div className="relative animate-float">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 blur-2xl rounded-full" />
      <img
        src="/ib.jpg"
        alt="Tayyab Rasheed Memon"
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-green-500/30 shadow-2xl transform transition-transform hover:scale-105 hover:border-green-500/50 z-10"
      />
    </div>

    {/* Profile Content with Staggered Animations */}
    <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-slideUpFade">
        Tayyab Rasheed Memon
        <span className="block text-xl md:text-2xl text-gray-400 mt-2">(Ibrahim)</span>
      </h1>

      <h2 className="text-xl md:text-2xl animate-slideUpFade delay-100">
        I'm a <span className="text-green-400">{text}</span>
      </h2>

      <p className="text-base md:text-lg text-gray-300 leading-relaxed animate-slideUpFade delay-200">
        Passionate full-stack developer specializing in modern web technologies.
        Transforming ideas into scalable digital solutions with cutting-edge tools.
      </p>

      {/* Social Links with Hover Effects */}
      <div className="flex gap-6 text-2xl animate-slideUpFade delay-300">
  {[
    { 
      name: 'GitHub', 
      url: 'https://github.com/Tayyab-Rasheed-memon?tab=repositories', 
      icon: '/github.png' // Path to your GitHub icon
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/tayyab-raheed-9a86022b6?trk=public_post_feed-actor-name&originalSubdomain=pk', 
      icon: '/LinkedIn.jpeg' // Path to your LinkedIn icon
    },
    { 
      name: 'Facebook', 
      url: '#', 
      icon: '/facebook.png' // Path to your Twitter/X icon
    },
  ].map((social, index) => (
    <a
      key={social.name}
      href={social.url}
      className="p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
      aria-label={social.name}
    >
      <div className="w-8 h-8 relative animate-popIn" style={{ animationDelay: `${index * 100}ms` }}>
        <img 
          src={social.icon} 
          alt={social.name + " icon"}
          className="w-full h-full object-contain hover:brightness-125 transition-all"
        />
      </div>
    </a>
  ))}
</div>

      {/* Hire Me Button with Gradient Animation */}
      <Link
        href="/Contact"
        className="relative mt-4 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold overflow-hidden group hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 animate-slideUpFade delay-400"
      >
        <span className="relative z-10">Hire Me</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
    </div>
  </div>
</div>

    

      {/* Skills Section */}
      <div id="skills" className="py-16 md:py-24 bg-black animate-fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Skills
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <div className="mt-2 text-lg font-semibold">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
           <div id="about" className="py-16 md:py-24 bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-green-500 animate-float">
      About Me
    </h2>
    <div className="mt-8 text-left max-w-3xl mx-auto px-4 space-y-6">
      {/* Personal Info */}
      <div className="space-y-2 animate-slide-up-fade delay-100">
        <p className="text-lg">
          <span className="block transition-transform hover:translate-x-2">📍 Pakistan</span>
          <span className="block transition-transform hover:translate-x-2">🎓 11th Grade Student</span>
          <span className="block transition-transform hover:translate-x-2">💻 Next.js & TypeScript Developer</span>
        </p>
      </div>

      {/* Technical Skills */}
      <div className="space-y-3 animate-slide-up-fade delay-200">
        <h3 className="text-xl font-semibold text-green-500">Technical Expertise</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Next.js:</strong> Experienced in building modern, scalable web applications</li>
          <li><strong>TypeScript:</strong> Strong understanding of type safety and OOP principles</li>
          <li><strong>React.js:</strong> Proficient in component-based architectures</li>
          <li><strong>Tailwind CSS:</strong> Efficient utility-first styling implementation</li>
          <li><strong>API Integration:</strong> REST APIs and dynamic data fetching</li>
        </ul>
      </div>

      {/* Experience */}
      <div className="space-y-3 animate-slide-up-fade delay-300">
        <h3 className="text-xl font-semibold text-green-500">Experience</h3>
        <div className="bg-gray-800 p-4 rounded-lg transition-all hover:scale-[1.02]">
          <h4 className="font-semibold">Web Developer (Freelance/Projects)</h4>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Developed multiple web applications using Next.js/TypeScript</li>
            <li>Implemented UI with Tailwind CSS integration</li>
            <li>Integrated REST APIs for dynamic content</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-3 animate-slide-up-fade delay-400">
        <h3 className="text-xl font-semibold text-green-500">Key Projects</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "🛍️ E-commerce Platform",
              description: "Next.js, TypeScript, Tailwind CSS | Full shopping functionality",
              image: "/Screenshot_1.png",
              url: "https://day-4d.vercel.app/"
            },
            {
              title: "📁 Portfolio Website",
              description: "Skills showcase with project demonstrations",
              image: "/Screenshot_2.png",
              url: "https://personal-portfolio-use-tailwind-css-uely.vercel.app/index.html"
            },
            {
              title: "📊 Assignment",
              description: "Thia ia my frist assignment",
              image: "/Screenshot_3.png",
              url: "https://assignment-1-gamma-five.vercel.app/"
            }
          ].map((project, index) => (
            <a 
              key={index}
              href={project.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Challenges & Goals */}
      <div className="space-y-3 animate-slide-up-fade delay-500">
        <h3 className="text-xl font-semibold text-green-500">Journey & Aspirations</h3>
        <p className="italic">
          "Balancing school with coding taught me time management and problem-solving. 
          Debugging complex issues fostered patience, while hands-on projects sharpened 
          my technical skills."
        </p>
        <p className="font-medium">
          Future Focus: Advancing full-stack capabilities, contributing to open-source, 
          and tackling real-world development challenges.
        </p>
      </div>
    </div>
  </div>
</div>
         {/* Services Section */}
          <div id="services" className="py-16 md:py-24 bg-gray-900 animate-fadeIn">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center">
              Services
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Custom Web Development */}
              <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                <h3 className="text-xl font-semibold text-green-500 mb-3">
                  🛠️ Custom Web Development
                </h3>
                <p className="text-gray-300">
                  Fast, secure, and scalable websites using Next.js/TypeScript. 
                  From simple sites to complex web apps, delivered with precision 
                  and maintainability.
                </p>
              </div>

              {/* UI/UX Design */}
              <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                <h3 className="text-xl font-semibold text-green-500 mb-3">
                  🎨 UI/UX Design
                </h3>
                <p className="text-gray-300">
                  Visually appealing interfaces with clean design principles. 
                  Responsive layouts using Tailwind CSS that work flawlessly 
                  across all devices.
                </p>
              </div>

              {/* API Integration */}
              <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                <h3 className="text-xl font-semibold text-green-500 mb-3">
                  🔌 API Integration
                </h3>
                <p className="text-gray-300">
                  Seamless third-party API connections for payments, data fetching, 
                  and social features. Enhanced functionality through secure 
                  integrations.
                </p>
              </div>

              {/* Front-End Development */}
              <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                <h3 className="text-xl font-semibold text-green-500 mb-3">
                  📱 Front-End Development
                </h3>
                <p className="text-gray-300">
                  Mobile-first responsive solutions with React.js. Performance-optimized 
                  interfaces that deliver intuitive user experiences across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>    
                
      <div id="contact" className="relative py-16 md:py-24 bg-black overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0">
    <div className="absolute w-72 h-72 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
    <div className="absolute w-72 h-72 bg-gradient-to-b from-blue-500/20 to-green-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
  <img 
    src="/download.jpeg" 
    alt="Contact icon"
    className="inline-block w-12 h-12 animate-float-light filter-green"
  />
  <span className="ml-3 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
    Get in Touch
  </span>
</h2>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Left Column - Contact Info */}
      <div className="space-y-6 animate-fade-in-up">
        <p className="text-lg text-gray-300">
          I'd love to hear about your project! Whether you need a new website, 
          assistance with a project, or want to chat about development - 
          let's connect! 💡
        </p>

        <div className="space-y-4">
  {[
    { 
      iconSrc: '/email.png ',
      text: 'I.T.Memon@example.com', 
      href: 'mailto:I.T.Memon@example.com'
    },  
    {
      iconSrc: '/phone.png',
      text: '+92-318337546',
      href: 'tel:+92-318337545'
    },
    {
      iconSrc: '/LinkedIn.jpeg',
      text: 'LinkedIn Profile',
      href: 'https://pk.linkedin.com/in/tayyab-raheed-9a86022b6?trk=public_post_feed-actor-name'
    },
    {
      iconSrc: '/download.jpeg',
      text: 'GitHub Portfolio',
      href: 'https://github.com/Tayyab-Rasheed-memon?tab=repositories'
    },
  ].map((item, index) => (
    <a
      key={index}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 group p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={item.iconSrc}
        alt={`${item.text} icon`}
        className="w-8 h-8 object-contain filter-green transition-transform duration-300 group-hover:scale-125"
      />
      <span className="text-gray-300 group-hover:text-green-500 transition-colors">
        {item.text}
      </span>
    </a>
  ))}
</div>
      </div>

      {/* Right Column - Contact Form */}
      <form className="space-y-6">
        {[
          {type: 'text', placeholder: 'Your Name'},
          {type: 'email', placeholder: 'Your Email'},
        ].map((field, index) => (
          <div 
            key={index}
            className="animate-fade-in-up"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full p-3 bg-gray-900/50 rounded-lg text-white backdrop-blur-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500
                       transition-all duration-300 hover:bg-gray-800/50"
            />
          </div>
        ))}

        <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 bg-gray-900/50 rounded-lg text-white backdrop-blur-sm
                     focus:outline-none focus:ring-2 focus:ring-green-500
                     transition-all duration-300 hover:bg-gray-800/50"
          ></textarea>
        </div>

        <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 
                     text-white py-3 px-8 rounded-lg font-semibold 
                     hover:scale-[1.02] transition-transform duration-300
                     hover:shadow-[0_0_20px_-3px_rgba(34,197,94,0.4)]"
          >
            Send Message 🚀
          </button>
        </div>
      </form>
    </div>

    {/* Promise Text */}
    <p className="text-center text-gray-400 mt-12 animate-pulse">
      I'll get back to you within 24 hours! ⏳
    </p>
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Links Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/path-to-your-image.jpg" alt="Logo" className="w-8 h-8 rounded-full"/>
              <span className="text-2xl font-bold text-green-400">Tayyab Rasheed Memon</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#solutions" className="hover:text-green-500">Solutions</a></li>
              <li><a href="#use-cases" className="hover:text-green-500">Use Cases</a></li>
              <li><a href="#resources" className="hover:text-green-500">Resources</a></li>
              <li><a href="#company" className="hover:text-green-500">Company</a></li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-green-500">About</a></li>
              <li><a href="#careers" className="hover:text-green-500">Careers</a></li>
              <li><a href="#contact" className="hover:text-green-500">Contact Us</a></li>
              <li><a href="#privacy-policy" className="hover:text-green-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Subscribe Form Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest updates directly in your inbox.</p>
            <form className="space-y-4 w-full max-w-xs">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none"
              />
              <button 
                type="submit" 
                className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-400 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-4">&copy; 2025 Tayyab Rasheed Memon. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-green-500">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-green-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-green-500">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

        <style>
            {`
            html {
                scroll-behavior: smooth;
            }

            /* Navbar Slide Down */
            @keyframes slideDown {
                from {
                transform: translateY(-50px);
                opacity: 0;
                }
                to {
                transform: translateY(0);
                opacity: 1;
                }
            }

            /* Fade-in effect */
            @keyframes fadeIn {
                from {
                opacity: 0;
                }
            to {
              opacity: 1;
            }
          }

          /* Fade-in Up effect for text */
          @keyframes fadeInUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Slide-in effect for sections */
          @keyframes slideIn {
            from {
              transform: translateX(-30px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          /* Bounce-in effect for the image */
          @keyframes bounceIn {
            0% {
              transform: scale(0.9);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          /* Hover effects on social icons */
          @keyframes hoverEffect {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          /* Hover button scale */
          @keyframes hoverScale {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.05);
            }
          }

          .animate-slideDown {
            animation: slideDown 1s ease-out;
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }

          .animate-slideIn {
            animation: slideIn 1s ease-out;
          }

          .animate-bounceIn {
            animation: bounceIn 1s ease-out;
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
          }

          .animate-hoverEffect {
            animation: hoverEffect 1s ease-in-out infinite;
          }

          .animate-hoverScale {
            animation: hoverScale 0.3s ease-in-out;
          }
        `}
      </style>
      
    </div>
  );
};

export default ProfileSection;






















// "use client"; // Ensures this is a client-side component

// import React, { useState, useEffect } from "react";
// import Link from "next/link"; // Use Next.js's Link component

// const ProfileSection: React.FC = () => {
//   const [text, setText] = useState("Designer");
//   const [navbarVisible, setNavbarVisible] = useState(true);
//   const [scrollY, setScrollY] = useState(0);

//   // Text animation logic
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setText((prevText) => (prevText === "Designer" ? "Coder" : "Designer"));
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(intervalId); // Cleanup interval
//   }, []);

//   // Navbar visibility on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       if (window.scrollY > 100) {
//         setNavbarVisible(false);
//       } else {
//         setNavbarVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll to section
//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Skills data with real logo SVGs
//   const skills = [
//     { name: "TypeScript", logo: "/TypeScript.png" },
//     { name: "JavaScript", logo: "/javascript.png" },
//     { name: "HTML", logo: "/HTML.png" },
//     { name: "CSS", logo: "/css.png" },
//     { name: "Next.js", logo: "/nextjs.png" },
//     { name: "Graphic Design", logo: "/graphic-design.png" },
//     { name: "Microsoft Excel", logo: "/excel.png" },
//     { name: "Microsoft Word", logo: "/word.png" },
//     { name: "Tailwind CSS", logo: "/Tailwind CSS.png" },
//     { name: "REST APIs", logo: "/REST APIs.jpeg" },
//     { name: "Problem Solving", logo: "/Problem Solving.jpeg" },
//     { name: "React.js", logo: "/React.jsds.png" },
//   ];

//   return (
//     <div className="relative bg-black text-white min-h-screen">
//       {/* Navbar with enhanced animations */}
//       <nav
//   className={`bg-black bg-opacity-80 fixed top-0 left-0 w-full p-4 z-50 transition-all duration-500 ${
//     navbarVisible ? "translate-y-0" : "-translate-y-full"
//   }`}
// >
//   <div className="container mx-auto flex justify-between items-center">
//     <div className="text-2xl font-bold text-green-500 animate-popIn">
//       <span className="inline-block hover:scale-105 transition-transform duration-300">
//         I.T. Memon
//       </span>
//     </div>
//     <ul className="hidden md:flex gap-8 text-white">
//       {['home', 'skills', 'about', 'services', 'contact'].map((item, index) => (
//         <li 
//           key={item}
//           className="animate-staggerFadeIn"
//           style={{ animationDelay: `${index * 100 + 200}ms` }}
//         >
//           <button
//             onClick={() => scrollToSection(item)}
//             className="hover:text-green-500 transition-all duration-300
//                      hover:scale-105 hover:drop-shadow-glow"
//           >
//             {item.charAt(0).toUpperCase() + item.slice(1)}
//           </button>
//         </li>
//       ))}
//     </ul>
//   </div>
// </nav>

//      {/* Profile Section */}
// <div
//   id="home"
//   className="bg-black text-white py-16 md:py-32 overflow-hidden"
// >
//   <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4">
//     {/* Profile Image with Floating Animation */}
//     <div className="relative animate-float">
//       <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 blur-2xl rounded-full" />
//       <img
//         src="/ib.jpg"
//         alt="Tayyab Rasheed Memon"
//         className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-green-500/30 shadow-2xl transform transition-transform hover:scale-105 hover:border-green-500/50 z-10"
//       />
//     </div>

//     {/* Profile Content with Staggered Animations */}
//     <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-2xl">
//       <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-slideUpFade">
//         Tayyab Rasheed Memon
//         <span className="block text-xl md:text-2xl text-gray-400 mt-2">(Ibrahim)</span>
//       </h1>

//       <h2 className="text-xl md:text-2xl animate-slideUpFade delay-100">
//         I'm a <span className="text-green-400">{text}</span>
//       </h2>

//       <p className="text-base md:text-lg text-gray-300 leading-relaxed animate-slideUpFade delay-200">
//         Passionate full-stack developer specializing in modern web technologies.
//         Transforming ideas into scalable digital solutions with cutting-edge tools.
//       </p>

//       {/* Social Links with Hover Effects */}
//       <div className="flex gap-6 text-2xl animate-slideUpFade delay-300">
//   {[
//     { 
//       name: 'GitHub', 
//       url: 'https://github.com/Tayyab-Rasheed-memon?tab=repositories', 
//       icon: '/github.png' // Path to your GitHub icon
//     },
//     { 
//       name: 'LinkedIn', 
//       url: 'https://www.linkedin.com/in/tayyab-raheed-9a86022b6?trk=public_post_feed-actor-name&originalSubdomain=pk', 
//       icon: '/LinkedIn.jpeg' // Path to your LinkedIn icon
//     },
//     { 
//       name: 'Facebook', 
//       url: '#', 
//       icon: '/facebook.png' // Path to your Twitter/X icon
//     },
//   ].map((social, index) => (
//     <a
//       key={social.name}
//       href={social.url}
//       className="p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
//       aria-label={social.name}
//     >
//       <div className="w-8 h-8 relative animate-popIn" style={{ animationDelay: `${index * 100}ms` }}>
//         <img 
//           src={social.icon} 
//           alt={social.name + " icon"}
//           className="w-full h-full object-contain hover:brightness-125 transition-all"
//         />
//       </div>
//     </a>
//   ))}
// </div>

//       {/* Hire Me Button with Gradient Animation */}
//       <Link
//         href="/Contact"
//         className="relative mt-4 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold overflow-hidden group hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 animate-slideUpFade delay-400"
//       >
//         <span className="relative z-10">Hire Me</span>
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       </Link>
//     </div>
//   </div>
// </div>

    

//       {/* Skills Section */}
//       <div id="skills" className="py-16 md:py-24 bg-black animate-fadeIn">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500">
//             Skills
//           </h2>
//           <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all animate-fadeInUp"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <img
//                   src={skill.logo}
//                   alt={skill.name}
//                   className="w-16 h-16 mx-auto mb-4 object-contain"
//                 />
//                 <div className="mt-2 text-lg font-semibold">{skill.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//            <div id="about" className="py-16 md:py-24 bg-gray-900">
//   <div className="container mx-auto text-center">
//     <h2 className="text-3xl md:text-4xl font-bold text-green-500 animate-float">
//       About Me
//     </h2>
//     <div className="mt-8 text-left max-w-3xl mx-auto px-4 space-y-6">
//       {/* Personal Info */}
//       <div className="space-y-2 animate-slide-up-fade delay-100">
//         <p className="text-lg">
//           <span className="block transition-transform hover:translate-x-2">📍 Pakistan</span>
//           <span className="block transition-transform hover:translate-x-2">🎓 11th Grade Student</span>
//           <span className="block transition-transform hover:translate-x-2">💻 Next.js & TypeScript Developer</span>
//         </p>
//       </div>

//       {/* Technical Skills */}
//       <div className="space-y-3 animate-slide-up-fade delay-200">
//         <h3 className="text-xl font-semibold text-green-500">Technical Expertise</h3>
//         <ul className="list-disc list-inside space-y-2">
//           <li><strong>Next.js:</strong> Experienced in building modern, scalable web applications</li>
//           <li><strong>TypeScript:</strong> Strong understanding of type safety and OOP principles</li>
//           <li><strong>React.js:</strong> Proficient in component-based architectures</li>
//           <li><strong>Tailwind CSS:</strong> Efficient utility-first styling implementation</li>
//           <li><strong>API Integration:</strong> REST APIs and dynamic data fetching</li>
//         </ul>
//       </div>

//       {/* Experience */}
//       <div className="space-y-3 animate-slide-up-fade delay-300">
//         <h3 className="text-xl font-semibold text-green-500">Experience</h3>
//         <div className="bg-gray-800 p-4 rounded-lg transition-all hover:scale-[1.02]">
//           <h4 className="font-semibold">Web Developer (Freelance/Projects)</h4>
//           <ul className="list-disc list-inside mt-2 space-y-1">
//             <li>Developed multiple web applications using Next.js/TypeScript</li>
//             <li>Implemented UI with Tailwind CSS integration</li>
//             <li>Integrated REST APIs for dynamic content</li>
//           </ul>
//         </div>
//       </div>

//       {/* Projects */}
//       <div className="space-y-3 animate-slide-up-fade delay-400">
//         <h3 className="text-xl font-semibold text-green-500">Key Projects</h3>
//         <div className="grid gap-4 md:grid-cols-2">
//           {[
//             {
//               title: "🛍️ E-commerce Platform",
//               description: "Next.js, TypeScript, Tailwind CSS | Full shopping functionality",
//               image: "/Screenshot_1.png",
//               url: "https://day-4d.vercel.app/"
//             },
//             {
//               title: "📁 Portfolio Website",
//               description: "Skills showcase with project demonstrations",
//               image: "/Screenshot_2.png",
//               url: "https://personal-portfolio-use-tailwind-css-uely.vercel.app/index.html"
//             },
//             {
//               title: "📊 Assignment",
//               description: "Thia ia my frist assignment",
//               image: "/Screenshot_3.png",
//               url: "https://assignment-1-gamma-five.vercel.app/"
//             }
//           ].map((project, index) => (
//             <a 
//               key={index}
//               href={project.url} 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative block bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent" />
//               </div>
//               <div className="p-4">
//                 <h4 className="font-semibold text-lg">{project.title}</h4>
//                 <p className="text-gray-400 text-sm mt-2">{project.description}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Challenges & Goals */}
//       <div className="space-y-3 animate-slide-up-fade delay-500">
//         <h3 className="text-xl font-semibold text-green-500">Journey & Aspirations</h3>
//         <p className="italic">
//           "Balancing school with coding taught me time management and problem-solving. 
//           Debugging complex issues fostered patience, while hands-on projects sharpened 
//           my technical skills."
//         </p>
//         <p className="font-medium">
//           Future Focus: Advancing full-stack capabilities, contributing to open-source, 
//           and tackling real-world development challenges.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
//          {/* Services Section */}
//           <div id="services" className="py-16 md:py-24 bg-gray-900 animate-fadeIn">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center">
//               Services
//             </h2>
//             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {/* Custom Web Development */}
//               <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
//                 <h3 className="text-xl font-semibold text-green-500 mb-3">
//                   🛠️ Custom Web Development
//                 </h3>
//                 <p className="text-gray-300">
//                   Fast, secure, and scalable websites using Next.js/TypeScript. 
//                   From simple sites to complex web apps, delivered with precision 
//                   and maintainability.
//                 </p>
//               </div>

//               {/* UI/UX Design */}
//               <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
//                 <h3 className="text-xl font-semibold text-green-500 mb-3">
//                   🎨 UI/UX Design
//                 </h3>
//                 <p className="text-gray-300">
//                   Visually appealing interfaces with clean design principles. 
//                   Responsive layouts using Tailwind CSS that work flawlessly 
//                   across all devices.
//                 </p>
//               </div>

//               {/* API Integration */}
//               <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
//                 <h3 className="text-xl font-semibold text-green-500 mb-3">
//                   🔌 API Integration
//                 </h3>
//                 <p className="text-gray-300">
//                   Seamless third-party API connections for payments, data fetching, 
//                   and social features. Enhanced functionality through secure 
//                   integrations.
//                 </p>
//               </div>

//               {/* Front-End Development */}
//               <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
//                 <h3 className="text-xl font-semibold text-green-500 mb-3">
//                   📱 Front-End Development
//                 </h3>
//                 <p className="text-gray-300">
//                   Mobile-first responsive solutions with React.js. Performance-optimized 
//                   interfaces that deliver intuitive user experiences across all platforms.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>    
                
//       <div id="contact" className="relative py-16 md:py-24 bg-black overflow-hidden">
//   {/* Animated background elements */}
//   <div className="absolute inset-0">
//     <div className="absolute w-72 h-72 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
//     <div className="absolute w-72 h-72 bg-gradient-to-b from-blue-500/20 to-green-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed"></div>
//   </div>

//   <div className="container mx-auto px-4 relative z-10">
//   <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
//   <img 
//     src="/download.jpeg" 
//     alt="Contact icon"
//     className="inline-block w-12 h-12 animate-float-light filter-green"
//   />
//   <span className="ml-3 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
//     Get in Touch
//   </span>
// </h2>

//     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//       {/* Left Column - Contact Info */}
//       <div className="space-y-6 animate-fade-in-up">
//         <p className="text-lg text-gray-300">
//           I'd love to hear about your project! Whether you need a new website, 
//           assistance with a project, or want to chat about development - 
//           let's connect! 💡
//         </p>

//         <div className="space-y-4">
//   {[
//     { 
//       iconSrc: '/email.png ',
//       text: 'I.T.Memon@example.com', 
//       href: 'mailto:I.T.Memon@example.com'
//     },  
//     {
//       iconSrc: '/phone.png',
//       text: '+92-318337546',
//       href: 'tel:+92-318337545'
//     },
//     {
//       iconSrc: '/LinkedIn.jpeg',
//       text: 'LinkedIn Profile',
//       href: 'https://pk.linkedin.com/in/tayyab-raheed-9a86022b6?trk=public_post_feed-actor-name'
//     },
//     {
//       iconSrc: '/download.jpeg',
//       text: 'GitHub Portfolio',
//       href: 'https://github.com/Tayyab-Rasheed-memon?tab=repositories'
//     },
//   ].map((item, index) => (
//     <a
//       key={index}
//       href={item.href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center gap-3 group p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
//     >
//       <img
//         src={item.iconSrc}
//         alt={`${item.text} icon`}
//         className="w-8 h-8 object-contain filter-green transition-transform duration-300 group-hover:scale-125"
//       />
//       <span className="text-gray-300 group-hover:text-green-500 transition-colors">
//         {item.text}
//       </span>
//     </a>
//   ))}
// </div>
//       </div>

//       {/* Right Column - Contact Form */}
//       <form className="space-y-6">
//         {[
//           {type: 'text', placeholder: 'Your Name'},
//           {type: 'email', placeholder: 'Your Email'},
//         ].map((field, index) => (
//           <div 
//             key={index}
//             className="animate-fade-in-up"
//             style={{animationDelay: `${index * 0.1}s`}}
//           >
//             <input
//               type={field.type}
//               placeholder={field.placeholder}
//               className="w-full p-3 bg-gray-900/50 rounded-lg text-white backdrop-blur-sm
//                        focus:outline-none focus:ring-2 focus:ring-green-500
//                        transition-all duration-300 hover:bg-gray-800/50"
//             />
//           </div>
//         ))}

//         <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="w-full p-3 bg-gray-900/50 rounded-lg text-white backdrop-blur-sm
//                      focus:outline-none focus:ring-2 focus:ring-green-500
//                      transition-all duration-300 hover:bg-gray-800/50"
//           ></textarea>
//         </div>

//         <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-green-500 to-blue-500 
//                      text-white py-3 px-8 rounded-lg font-semibold 
//                      hover:scale-[1.02] transition-transform duration-300
//                      hover:shadow-[0_0_20px_-3px_rgba(34,197,94,0.4)]"
//           >
//             Send Message 🚀
//           </button>
//         </div>
//       </form>
//     </div>

//     {/* Promise Text */}
//     <p className="text-center text-gray-400 mt-12 animate-pulse">
//       I'll get back to you within 24 hours! ⏳
//     </p>
//     <footer className="bg-gray-900 text-white py-10 mt-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Logo and Links Section */}
//           <div className="flex flex-col items-start">
//             <div className="flex items-center space-x-2 mb-4">
//               <img src="/path-to-your-image.jpg" alt="Logo" className="w-8 h-8 rounded-full"/>
//               <span className="text-2xl font-bold text-green-400">Tayyab Rasheed Memon</span>
//             </div>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li><a href="#solutions" className="hover:text-green-500">Solutions</a></li>
//               <li><a href="#use-cases" className="hover:text-green-500">Use Cases</a></li>
//               <li><a href="#resources" className="hover:text-green-500">Resources</a></li>
//               <li><a href="#company" className="hover:text-green-500">Company</a></li>
//             </ul>
//           </div>

//           {/* Links Section */}
//           <div className="flex flex-col items-start">
//             <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li><a href="#about" className="hover:text-green-500">About</a></li>
//               <li><a href="#careers" className="hover:text-green-500">Careers</a></li>
//               <li><a href="#contact" className="hover:text-green-500">Contact Us</a></li>
//               <li><a href="#privacy-policy" className="hover:text-green-500">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Subscribe Form Section */}
//           <div className="flex flex-col items-start">
//             <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
//             <p className="text-sm text-gray-400 mb-4">Get the latest updates directly in your inbox.</p>
//             <form className="space-y-4 w-full max-w-xs">
//               <input 
//                 type="text" 
//                 placeholder="Your Name" 
//                 className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none"
//               />
//               <input 
//                 type="email" 
//                 placeholder="Your Email" 
//                 className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none"
//               />
//               <button 
//                 type="submit" 
//                 className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-400 transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-400 mb-4">&copy; 2025 Tayyab Rasheed Memon. All Rights Reserved.</p>
//           <div className="flex justify-center space-x-6">
//             <a href="https://github.com" className="text-gray-400 hover:text-green-500">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="https://linkedin.com" className="text-gray-400 hover:text-green-500">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="https://facebook.com" className="text-gray-400 hover:text-green-500">
//               <i className="fab fa-facebook"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   </div>
// </div>

//         <style>
//             {`
//             html {
//                 scroll-behavior: smooth;
//             }

//             /* Navbar Slide Down */
//             @keyframes slideDown {
//                 from {
//                 transform: translateY(-50px);
//                 opacity: 0;
//                 }
//                 to {
//                 transform: translateY(0);
//                 opacity: 1;
//                 }
//             }

//             /* Fade-in effect */
//             @keyframes fadeIn {
//                 from {
//                 opacity: 0;
//                 }
//             to {
//               opacity: 1;
//             }
//           }

//           /* Fade-in Up effect for text */
//           @keyframes fadeInUp {
//             from {
//               transform: translateY(20px);
//               opacity: 0;
//             }
//             to {
//               transform: translateY(0);
//               opacity: 1;
//             }
//           }

//           /* Slide-in effect for sections */
//           @keyframes slideIn {
//             from {
//               transform: translateX(-30px);
//               opacity: 0;
//             }
//             to {
//               transform: translateX(0);
//               opacity: 1;
//             }
//           }

//           /* Bounce-in effect for the image */
//           @keyframes bounceIn {
//             0% {
//               transform: scale(0.9);
//               opacity: 0;
//             }
//             100% {
//               transform: scale(1);
//               opacity: 1;
//             }
//           }

//           /* Hover effects on social icons */
//           @keyframes hoverEffect {
//             0% {
//               transform: scale(1);
//             }
//             50% {
//               transform: scale(1.1);
//             }
//             100% {
//               transform: scale(1);
//             }
//           }

//           /* Hover button scale */
//           @keyframes hoverScale {
//             0% {
//               transform: scale(1);
//             }
//             100% {
//               transform: scale(1.05);
//             }
//           }

//           .animate-slideDown {
//             animation: slideDown 1s ease-out;
//           }

//           .animate-fadeIn {
//             animation: fadeIn 1s ease-out;
//           }

//           .animate-slideIn {
//             animation: slideIn 1s ease-out;
//           }

//           .animate-bounceIn {
//             animation: bounceIn 1s ease-out;
//           }

//           .animate-fadeInUp {
//             animation: fadeInUp 1s ease-out;
//           }

//           .animate-hoverEffect {
//             animation: hoverEffect 1s ease-in-out infinite;
//           }

//           .animate-hoverScale {
//             animation: hoverScale 0.3s ease-in-out;
//           }
//         `}
//       </style>
      
//     </div>
//   );
// };

// export default ProfileSection;


















// "use client"; // Ensures this is a client-side component

// import React, { useState, useEffect } from "react";
// import Link from "next/link"; // Use Next.js's Link component

// const ProfileSection: React.FC = () => {
//   const [text, setText] = useState("Designer");
//   const [navbarVisible, setNavbarVisible] = useState(true);
//   const [scrollY, setScrollY] = useState(0);

//   // Text animation logic
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setText((prevText) => (prevText === "Designer" ? "Coder" : "Designer"));
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(intervalId); // Cleanup interval
//   }, []);

//   // Navbar visibility on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       if (window.scrollY > 100) {
//         setNavbarVisible(false);
//       } else {
//         setNavbarVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll to section
//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative bg-black text-white min-h-screen">
//       {/* Navbar with enhanced animations */}
//       <nav
//         className={`bg-black bg-opacity-80 fixed top-0 left-0 w-full p-4 z-50 transition-all duration-500 ${
//           navbarVisible ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-2xl font-bold text-green-500 animate-fadeIn">
//             Olivia Kate
//           </div>
//           <ul className="hidden md:flex gap-8 text-white">
//             <li>
//               <button
//                 onClick={() => scrollToSection("home")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("about")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("skills")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 Skills
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("services")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 Services
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Profile Section */}
//       <div
//         id="home"
//         className="bg-black text-white py-16 md:py-32 animate-slideIn"
//       >
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
//           <div className="relative animate-bounceIn">
//             <img
//               src="/path-to-your-image.jpg"
//               alt="Olivia"
//               className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-xl hover:scale-105 transition-transform"
//             />
//           </div>
//           <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
//             <h1 className="text-3xl md:text-4xl font-bold text-green-500 animate-fadeInUp">
//               Olivia Kate
//             </h1>
//             <h2 className="text-xl md:text-2xl text-blue-500 animate-fadeInUp">
//               I'm a <span className="text-green-500">{text}</span>
//             </h2>
//             <p className="text-base md:text-lg animate-fadeInUp">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
//               quasi commodi quia rerum.
//             </p>
//             <div className="flex gap-4 text-xl">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-500 transition-colors animate-hoverEffect"
//               >
//                 Facebook
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-500 transition-colors animate-hoverEffect"
//               >
//                 LinkedIn
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-500 transition-colors animate-hoverEffect"
//               >
//                 Twitter
//               </a>
//             </div>
//             <Link
//               href="/contact"
//               className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-6 rounded-full text-lg mt-4 hover:scale-105 transition-transform animate-hoverEffect"
//             >
//               Hire me
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Additional Sections for Presentation */}
//       <div id="about" className="py-16 md:py-24 bg-gray-900 animate-fadeIn">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500">
//             About Me
//           </h2>
//           <p className="mt-4 text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
//             quasi commodi quia rerum.
//           </p>
//         </div>
//       </div>

//       <div id="skills" className="py-16 md:py-24 bg-black animate-fadeIn">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500">
//             Skills
//           </h2>
//           <p className="mt-4 text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
//             quasi commodi quia rerum.
//           </p>
//         </div>
//       </div>

//       <div id="services" className="py-16 md:py-24 bg-gray-900 animate-fadeIn">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500">
//             Services
//           </h2>
//           <p className="mt-4 text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
//             quasi commodi quia rerum.
//           </p>
//         </div>
//       </div>

//       <div id="contact" className="py-16 md:py-24 bg-black animate-fadeIn">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500">
//             Contact
//           </h2>
//           <p className="mt-4 text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
//             quasi commodi quia rerum.
//           </p>
//         </div>
//       </div>

//       <style>
//         {`
//           html {
//             scroll-behavior: smooth;
//           }

//           /* Navbar Slide Down */
//           @keyframes slideDown {
//             from {
//               transform: translateY(-50px);
//               opacity: 0;
//             }
//             to {
//               transform: translateY(0);
//               opacity: 1;
//             }
//           }

//           /* Fade-in effect */
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }

//           /* Fade-in Up effect for text */
//           @keyframes fadeInUp {
//             from {
//               transform: translateY(20px);
//               opacity: 0;
//             }
//             to {
//               transform: translateY(0);
//               opacity: 1;
//             }
//           }

//           /* Slide-in effect for sections */
//           @keyframes slideIn {
//             from {
//               transform: translateX(-30px);
//               opacity: 0;
//             }
//             to {
//               transform: translateX(0);
//               opacity: 1;
//             }
//           }

//           /* Bounce-in effect for the image */
//           @keyframes bounceIn {
//             0% {
//               transform: scale(0.9);
//               opacity: 0;
//             }
//             100% {
//               transform: scale(1);
//               opacity: 1;
//             }
//           }

//           /* Hover effects on social icons */
//           @keyframes hoverEffect {
//             0% {
//               transform: scale(1);
//             }
//             50% {
//               transform: scale(1.1);
//             }
//             100% {
//               transform: scale(1);
//             }
//           }

//           /* Hover button scale */
//           @keyframes hoverScale {
//             0% {
//               transform: scale(1);
//             }
//             100% {
//               transform: scale(1.05);
//             }
//           }

//           .animate-slideDown {
//             animation: slideDown 1s ease-out;
//           }

//           .animate-fadeIn {
//             animation: fadeIn 1s ease-out;
//           }

//           .animate-slideIn {
//             animation: slideIn 1s ease-out;
//           }

//           .animate-bounceIn {
//             animation: bounceIn 1s ease-out;
//           }

//           .animate-fadeInUp {
//             animation: fadeInUp 1s ease-out;
//           }

//           .animate-hoverEffect {
//             animation: hoverEffect 1s ease-in-out infinite;
//           }

//           .animate-hoverScale {
//             animation: hoverScale 0.3s ease-in-out;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProfileSection;










// "use client";

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./ProfileSection.css"; // Import custom CSS file
// const ProfileSection: React.FC = () => {
//   const [text, setText] = useState("Designer");

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setText((prevText) => (prevText === "Designer" ? "Coder" : "Designer"));
//     }, 2000); // Change every 2 seconds

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">Olivia Kate</div>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/skills">Skills</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       <div className="profile-container">
//         <div className="profile-content">
//           <div className="profile-image-container">
//             <img
//               src="/path-to-your-image.jpg"
//               alt="Olivia"
//               className="profile-image"
//             />
//           </div>
//           <div className="profile-details">
//             <h1 className="profile-name">Olivia Kate</h1>
//             <h2 className="profile-title">I'm a <span className="animated-text">{text}</span></h2>
//             <p className="profile-description">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quasi commodi quia rerum.
//             </p>
//             <div className="social-links">
//               <a href="#" className="social-link">Facebook</a>
//               <a href="#" className="social-link">LinkedIn</a>
//               <a href="#" className="social-link">Twitter</a>
//             </div>
//             <Link to="/contact" className="hire-me-button">
//               Hire me
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfileSection;

// "use client";

// import React from "react";
// import { Link } from "react-router-dom";
// import "./ProfileSection.css"; // Import custom CSS file
// const ProfileSection: React.FC = () => {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">Olivia Kate</div>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/skills">Skills</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       <div className="profile-container">
//         <div className="profile-content">
//           <div className="profile-image-container">
//             <img
//               src="/path-to-your-image.jpg"
//               alt="Olivia"
//               className="profile-image"
//             />
//           </div>
//           <div className="profile-details">
//             <h1 className="profile-name">Olivia Kate</h1>
//             <h2 className="profile-title">I'm a <span className="animated-text">Designer</span></h2>
//             <p className="profile-description">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quasi commodi quia rerum.
//             </p>
//             <div className="social-links">
//               <a href="#" className="social-link">Facebook</a>
//               <a href="#" className="social-link">LinkedIn</a>
//               <a href="#" className="social-link">Twitter</a>
//             </div>
//             <Link to="/contact" className="hire-me-button">
//               Hire me
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfileSection;






// "use client";

// import React from "react";
// import { Link } from "react-router-dom";
// import "./ProfileSection.css"; // Import custom CSS file

// const ProfileSection: React.FC = () => {
//   return (
//     <div className="profile-container">
//       <div className="profile-content">
//         <div className="profile-image-container">
//           <img
//             src="/path-to-your-image.jpg" // Update with your image path
//             alt="Olivia"
//             className="profile-image"
//           />
//         </div>
//         <div className="profile-details">
//           <h1 className="profile-name">Olivia Kate</h1>
//           <h2 className="profile-title">I'm a Designer</h2>
//           <p className="profile-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
//             quasi commodi quia rerum. Lorem ipsum dolor sit amet, consectetur
//             adipiscing elit.
//           </p>
//           <div className="social-links">
//             <a href="#" className="social-link">Facebook</a>
//             <a href="#" className="social-link">LinkedIn</a>
//             <a href="#" className="social-link">Twitter</a>
//           </div>
//           <Link to="/contact" className="hire-me-button">
//             Hire me
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;

// // components/ProfileSection.tsx
// import React from "react";

// const ProfileSection = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-black text-white">
//       <div className="flex items-center space-x-8">
//         <div className="relative">
//           <img
//             src="/ib.jpg" // Replace with your image path
//             alt="Olivia"
//             className="w-48 h-48 rounded-full object-cover animate-fadeIn"
//           />
//         </div>
//         <div className="space-y-6">
//           <h1 className="text-4xl font-bold animate-slideIn">Olivia Kate</h1>
//           <h2 className="text-2xl text-blue-400 animate-slideIn">I'm a Designer</h2>
//           <p className="text-lg animate-slideIn">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
//             quasi commodi quia rerum.
//           </p>
//           <div className="space-x-4 animate-slideIn">
//             <a href="#" className="text-xl">FB</a>
//             <a href="#" className="text-xl">IN</a>
//             <a href="#" className="text-xl">TW</a>
//           </div>
//           <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full animate-slideIn">
//             Hire me
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;



























// "use client"; // Ensures this is a client-side component

// import React, { useState, useEffect } from "react";
// import Link from "next/link"; // Use Next.js's Link component

// const ProfileSection: React.FC = () => {
//   const [text, setText] = useState("Designer");
//   const [navbarVisible, setNavbarVisible] = useState(true);
//   const [scrollY, setScrollY] = useState(0);

//   // Text animation logic
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setText((prevText) => (prevText === "Designer" ? "Coder" : "Designer"));
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(intervalId); // Cleanup interval
//   }, []);

//   // Navbar visibility on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       if (window.scrollY > 100) {
//         setNavbarVisible(false);
//       } else {
//         setNavbarVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll to section
//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Skills data with real logo SVGs
//   const skills = [
//     { name: "TypeScript", logo: "/TypeScript.png" },
//     { name: "JavaScript", logo: "/javascript.png" },
//     { name: "HTML", logo: "/HTML.png" },
//     { name: "CSS", logo: "/css.png" },
//     { name: "Next.js", logo: "/nextjs.png" },
//     { name: "Graphic Design", logo: "/graphic-design.png" },
//     { name: "Microsoft Excel", logo: "/excel.png" },
//     { name: "Microsoft Word", logo: "/word.png" },
//     { name: "Tailwind CSS", logo: "/Tailwind CSS.png" },
//     { name: "REST APIs", logo: "/REST APIs.jpeg" },
//     { name: "Problem Solving", logo: "/Problem Solving.jpeg" },
//     { name: "React.js", logo: "/React.jsds.png" },
//   ];

//   return (
//     <div className="relative bg-black text-white min-h-screen">
//       {/* Navbar with unique animation */}
//       <nav
//         className={`bg-black bg-opacity-80 fixed top-0 left-0 w-full p-4 z-50 transition-all duration-500 ease-in-out ${
//           navbarVisible ? "transform translate-y-0" : "transform translate-y-full"
//         } animate-slideInNavbar`}
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-2xl font-bold text-green-500 animate__animated animate__fadeIn">
//             I.T. Memon
//           </div>
//           <ul className="hidden md:flex gap-8 text-white">
//             <li>
//               <button
//                 onClick={() => scrollToSection("home")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("skills")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 Skills
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("about")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("services")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 Services
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="hover:text-green-500 transition-colors"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Profile Section with animations */}
//       <div
//         id="home"
//         className="bg-black text-white py-16 md:py-32 animate__animated animate__fadeInUp"
//       >
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
//           <div className="relative animate__animated animate__zoomIn">
//             <img
//               src="/ib.jpg"
//               alt="Olivia"
//               className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-xl hover:scale-105 transition-transform"
//             />
//           </div>
//           <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left animate__animated animate__slideInUp">
//             <h1 className="text-3xl md:text-4xl font-bold text-green-500 animate__animated animate__fadeInUp">
//               Tayyab Rasheed Memon (Ibrahim)
//             </h1>
//             <h2 className="text-xl md:text-2xl text-blue-500 animate__animated animate__fadeInUp">
//               I'm a <span className="text-green-500">{text}</span>
//             </h2>
//             <p className="text-base md:text-lg animate__animated animate__fadeInUp">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
//               quasi commodi quia rerum.
//             </p>
//             <div className="flex gap-4 text-xl">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-500 transition-colors"
//               >
//                 Facebook
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-500 transition-colors"
//               >
//                 LinkedIn
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-500 transition-colors"
//               >
//                 Twitter
//               </a>
//             </div>
//             <Link
//               href="/contact"
//               className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-6 rounded-full text-lg mt-4 hover:scale-105 transition-transform"
//             >
//               Hire me
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Skills Section with added animations */}
//       <div
//         id="skills"
//         className="py-16 md:py-24 bg-black animate__animated animate__fadeInUpSection"
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500 animate__animated animate__slideInUp">
//             Skills
//           </h2>
//           <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all animate__animated animate__fadeInUp hover:scale-110"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <img
//                   src={skill.logo}
//                   alt={skill.name}
//                   className="w-16 h-16 mx-auto mb-4 object-contain"
//                 />
//                 <div className="mt-2 text-lg font-semibold">{skill.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <div
//         id="about"
//         className="py-16 md:py-24 bg-gray-900 animate__animated animate__bounceIn"
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500">
//             About Me
//           </h2>
//           <div className="mt-8 text-left max-w-3xl mx-auto px-4 space-y-6">
//             {/* Personal Info */}
//             <div className="space-y-2">
//               <p className="text-lg">
//                 <span className="block">📍 Pakistan</span>
//                 <span className="block">🎓 11th Grade Student</span>
//                 <span className="block">💻 Next.js & TypeScript Developer</span>
//               </p>
//             </div>

//             {/* Technical Skills */}
//             <div className="space-y-3">
//               <h3 className="text-xl font-semibold text-green-500">
//                 Technical Expertise
//               </h3>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>
//                   <strong>Next.js:</strong> Experienced in building modern, scalable web applications
//                 </li>
//                 <li>
//                   <strong>TypeScript:</strong> Strong understanding of type safety and OOP principles
//                 </li>
//                 <li>
//                   <strong>React.js:</strong> Proficient in component-based architectures
//                 </li>
//                 <li>
//                   <strong>REST APIs:</strong> Experience in creating and consuming RESTful APIs
//                 </li>
//                 <li>
//                   <strong>Tailwind CSS:</strong> Skilled in utility-first CSS for responsive web design
//                 </li>
//               </ul>
//             </div>

//             {/* Design & Soft Skills */}
//             <div className="space-y-3">
//               <h3 className="text-xl font-semibold text-green-500">
//                 Design & Soft Skills
//               </h3>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>
//                   <strong>Graphic Design:</strong> Ability to create clean and impactful designs
//                 </li>
//                 <li>
//                   <strong>Problem Solving:</strong> Passionate about problem-solving in coding and design
//                 </li>
//                 <li>
//                   <strong>Microsoft Excel & Word:</strong> Excellent command of office tools
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div
//         id="services"
//         className="py-16 md:py-24 bg-gray-900 animate__animated animate__fadeInUpSection"
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500">
//             Services
//           </h2>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Custom Web Development */}
//             <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
//               <h3 className="text-xl font-semibold text-green-500 mb-3">
//                 🛠️ Custom Web Development
//               </h3>
//               <p className="text-gray-300">
//                 Fast, secure, and scalable websites using Next.js/TypeScript. 
//                 From simple sites to complex web apps, delivered with precision 
//                 and maintainability.
//               </p>
//             </div>

//             {/* UI/UX Design */}
//             <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
//               <h3 className="text-xl font-semibold text-green-500 mb-3">
//                 🎨 UI/UX Design
//               </h3>
//               <p className="text-gray-300">
//                 Visually appealing interfaces with clean design principles. 
//                 Responsive layouts using Tailwind CSS that work flawlessly 
//                 across all devices.
//               </p>
//             </div>

//             {/* API Integration */}
//             <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
//               <h3 className="text-xl font-semibold text-green-500 mb-3">
//                 🔌 API Integration
//               </h3>
//               <p className="text-gray-300">
//                 Seamless third-party API connections for payments, data fetching, 
//                 and social features. Enhanced functionality through secure 
//                 integrations.
//               </p>
//             </div>

//             {/* Front-End Development */}
//             <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
//               <h3 className="text-xl font-semibold text-green-500 mb-3">
//                 📱 Front-End Development
//               </h3>
//               <p className="text-gray-300">
//                 Mobile-first responsive solutions with React.js. Performance-optimized 
//                 interfaces that deliver intuitive user experiences across all platforms.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div
//         id="contact"
//         className="py-16 md:py-24 bg-black animate__animated animate__fadeInUpSection"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center">
//             Get in Touch
//           </h2>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             {/* Left Column - Contact Info */}
//             <div className="space-y-6 animate__animated animate__fadeInUp">
//               <p className="text-lg text-gray-300">
//                 I'd love to hear about your project! Whether you need a new website, 
//                 assistance with a project, or want to chat about development - 
//                 let's connect!
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3 group">
//                   <span className="text-green-500">✉️</span>
//                   <a href="mailto:your-email@example.com" className="text-gray-300 hover:text-green-500 transition-colors">
//                     your-email@example.com
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-3 group">
//                   <span className="text-green-500">📱</span>
//                   <a href="tel:+92-XXXXXXXXX" className="text-gray-300 hover:text-green-500 transition-colors">
//                     +92-XXXXXXXXX
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-3 group">
//                   <span className="text-green-500">🔗</span>
//                   <a href="https://linkedin.com/in/your-profile" target="_blank" className="text-gray-300 hover:text-green-500 transition-colors">
//                     LinkedIn Profile
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-3 group">
//                   <span className="text-green-500">🐙</span>
//                   <a href="https://github.com/your-username" target="_blank" className="text-gray-300 hover:text-green-500 transition-colors">
//                     GitHub Portfolio
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Contact Form */}
//             <form className="space-y-6 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>

//               <div>
//                 <textarea
//                   placeholder="Your Message"
//                   rows={4}
//                   className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-8 rounded-full font-semibold hover:scale-105 transition-transform"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Promise Text */}
//           <p className="text-center text-gray-400 mt-12 animate__animated animate__fadeInUp">
//             I'll get back to you within 24 hours! ⏳
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;