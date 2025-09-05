'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                JANET.CODES
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              FULL-STACK
            </span>
            <br />
            <span className="text-white">DEVELOPER</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building modern, high-performance web applications with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Type Race Project */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/typeraceonline.png" 
                  alt="Type Race Online Screenshot" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">Type Race Online</h3>
              <p className="text-gray-300 mb-4">
                A fast-paced typing game built with modern web technologies. Features real-time multiplayer racing and performance analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Real-time</span>
              </div>
              <a
                href="https://typeraceonline.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Live Site →
              </a>
            </div>

            {/* NursePrep Project */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-6 overflow-hidden relative">
                {/* Mock screenshot of nursing education platform */}
                <div className="absolute inset-4 bg-gray-900/80 rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">N</div>
                    <div className="text-purple-300 font-semibold">NursePrep.school</div>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">NCLEX-RN Practice Questions</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-purple-600/20 rounded p-2">
                      <span className="text-xs text-purple-200">Chapter 1: Fundamentals</span>
                      <span className="text-xs text-green-400">✓ 95%</span>
                    </div>
                    <div className="flex items-center justify-between bg-purple-600/20 rounded p-2">
                      <span className="text-xs text-purple-200">Chapter 2: Pharmacology</span>
                      <span className="text-xs text-yellow-400">◐ 78%</span>
                    </div>
                    <div className="flex items-center justify-between bg-purple-600/20 rounded p-2">
                      <span className="text-xs text-purple-200">Chapter 3: Med-Surg</span>
                      <span className="text-xs text-gray-400">○ 0%</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400">NursePrep.school</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive nursing education platform with interactive learning modules and practice exams for nursing students.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Education</span>
              </div>
              <a
                href="https://nurseprep.school"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Live Site →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ABOUT
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Passionate full-stack developer with expertise in modern web technologies. 
              I build scalable applications that solve real-world problems and provide exceptional user experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Frontend</h3>
                <p className="text-gray-400">JavaScript, React, HTML, CSS, EJS, TypeScript, Tailwind CSS</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Backend</h3>
                <p className="text-gray-400">Node.js, Express, MongoDB, Mongoose, Firebase, OAuth, APIs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Tools</h3>
                <p className="text-gray-400">VS Code, Git, GitHub, CLI, Vercel, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CONTACT
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to build something amazing together? Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@janet.codes"
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/janet-phan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/janetcodehubs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-gray-400">
        <p>&copy; 2025 Janet. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
