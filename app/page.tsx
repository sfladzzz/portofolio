'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Briefcase, Code2, Database, Github, GitBranch, GraduationCap, Linkedin, Lightbulb, Mail, MapPin, Sparkles, TrendingUp, User, Users } from 'lucide-react';

const ThreeBackground = dynamic(() => import('./components/ThreeBackground'), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });

      gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.about-section', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.experience-card', {
        scrollTrigger: {
          trigger: '.experience-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        immediateRender: false,
        y: 80,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        immediateRender: false,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.contact-section', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative isolate min-h-screen bg-transparent text-zinc-100 overflow-x-hidden">
      <ThreeBackground />

      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[rgba(15,17,24,0.9)] shadow-[0_10px_36px_rgba(0,0,0,0.24)] backdrop-blur-2xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-400/70 before:to-transparent">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:flex-nowrap sm:py-3.5">
            <a href="#home" className="group flex shrink-0 items-center gap-2.5" aria-label="Sfladzzz, kembali ke beranda">
              <span className="font-mono text-lg font-bold tracking-tight text-white transition group-hover:text-blue-200">sfladzzz<span className="text-blue-400">.</span></span>
              <span className="hidden h-5 w-px bg-white/15 sm:block" />
              <span className="hidden text-xs text-zinc-400 sm:block">Frontend Developer</span>
            </a>

            <nav aria-label="Navigasi utama" className="order-3 flex w-full items-center justify-between border-t border-white/[0.06] pt-1 text-[13px] sm:order-2 sm:w-auto sm:justify-center sm:gap-1 sm:border-0 sm:pt-0 sm:text-sm">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded px-3 py-2 text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 sm:px-3.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="order-2 inline-flex shrink-0 items-center gap-2 rounded-md bg-blue-500 px-3.5 py-2 text-xs font-semibold text-white shadow-[0_4px_18px_rgba(59,130,246,0.2)] transition hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 sm:order-3 sm:px-4 sm:text-sm"
            >
              Let&apos;s talk <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </header>

      <section id="home" ref={heroRef} className="relative flex min-h-screen items-center justify-center px-4 pt-24 sm:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-20">
          <div className="order-2 text-center md:order-1 md:text-left">
            <div className="hero-badge mb-6 inline-flex items-center gap-2 border-b border-blue-400/30 pb-2 text-xs font-medium uppercase text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
              Available for opportunities
            </div>

            <p className="mb-3 font-mono text-xs uppercase text-zinc-400 sm:text-sm">Informatics engineering <span className="text-blue-400">/</span> Frontend development</p>
            <h1 className="hero-title mb-5 text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Usep Saeful<br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 bg-clip-text text-transparent">Adzkia.</span>
            </h1>

            <p className="hero-subtitle mb-4 max-w-xl text-xl font-semibold text-zinc-100 sm:text-2xl">
              Thoughtful interfaces. Built for the web.
            </p>

            <p className="hero-description mb-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              I turn ideas into clean, responsive experiences with Next.js, React, and Tailwind CSS, backed by a strong foundation in informatics.
            </p>

            <div className="hero-buttons flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a
                href="#projects"
                className="group rounded-md bg-blue-500 px-7 py-3.5 font-semibold text-zinc-950 shadow-lg shadow-blue-500/25 transition-all hover:translate-y-[-2px] hover:bg-blue-400 hover:shadow-blue-500/40"
              >
                Explore my work <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group rounded-md border border-zinc-700 bg-white/[0.03] px-7 py-3.5 font-semibold text-zinc-200 transition-all hover:border-zinc-500 hover:bg-white/[0.07]"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-9 grid grid-cols-3 border-t border-white/10 pt-5 text-left">
              <div className="pr-2">
                <p className="text-lg font-bold text-white sm:text-xl">3.53<span className="text-blue-300">/4</span></p>
                <p className="mt-1 text-[10px] uppercase text-zinc-500 sm:text-xs">Current GPA</p>
              </div>
              <div className="border-l border-white/10 px-3 sm:px-5">
                <p className="text-lg font-bold text-white sm:text-xl">2024</p>
                <p className="mt-1 text-[10px] uppercase text-zinc-500 sm:text-xs">Started study</p>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-5">
                <p className="text-lg font-bold text-white sm:text-xl">Frontend</p>
                <p className="mt-1 text-[10px] uppercase text-zinc-500 sm:text-xs">Primary focus</p>
              </div>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[18rem] md:order-2 md:max-w-[25rem]">
            <div className="relative before:absolute before:-inset-3 before:border before:border-blue-300/20 before:content-[''] after:absolute after:-right-3 after:top-8 after:h-16 after:w-px after:bg-gradient-to-b after:from-blue-300 after:to-transparent">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-blue-200/25 bg-zinc-900 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <Image
                src="/images/profile.jpeg"
                alt="Portrait of Usep Saeful Adzkia"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 368px"
                className="object-cover object-[center_22%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <p className="font-mono text-xs text-blue-200/80">01 / PROFILE</p>
                <p className="mt-1 text-lg font-semibold text-white">Usep Saeful Adzkia</p>
              </div>
              <div className="absolute right-4 top-4 rounded border border-white/20 bg-zinc-950/45 px-2 py-1 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                DEVELOPER
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="about-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
            <div className="bg-zinc-900/65 border border-zinc-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6">
                <User className="w-10 h-10 text-blue-400" />
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-3">Profile</p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                I am a student of Informatics Engineering with a strong interest in software engineering, especially frontend development and UI craftsmanship.
              </p>
            </div>

            <div className="bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 md:p-10 hover:border-blue-500/50 transition-colors">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Currently a Semester 3 student at <span className="text-blue-400 font-semibold">Universitas Pamulang</span> with a GPA of <span className="text-blue-400 font-semibold">3.53/4.00</span>.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                I enjoy learning modern web technologies and translating ideas into intuitive interfaces. My foundation in algorithms, logic, and programming makes me comfortable solving problems with a structured mindset.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                I am especially focused on <span className="text-blue-400 font-semibold">Next.js</span>, <span className="text-blue-400 font-semibold">React</span>, and the JavaScript ecosystem, while continuing to develop my Python skills and teamwork capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={experienceRef} className="experience-section py-20 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Education & Experience</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="experience-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:scale-[1.01]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Education</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-zinc-200 mb-2">Universitas Pamulang</h4>
                  <p className="text-blue-400 font-medium mb-2">Informatics Engineering</p>
                  <p className="text-zinc-400 text-sm mb-3">2024 - Present</p>
                  <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                    <span className="text-blue-300 font-semibold">GPA: 3.53/4.00</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    <span className="font-semibold text-zinc-300">Relevant coursework:</span> Algorithms, Programming Systems, Calculus, Basic Physics, and fundamental software principles.
                  </p>
                </div>

                <div className="border-t border-zinc-700 pt-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-zinc-200">Frontend Development Program</h4>
                    <span className="rounded border border-blue-300/30 bg-blue-300/10 px-2 py-1 font-mono text-[10px] uppercase text-blue-200">Sample data</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium">Digital Skills Academy</p>
                  <p className="text-zinc-400 text-sm">2025 · Short course</p>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">Responsive interfaces, component-based development, and introductory accessibility practices.</p>
                </div>
              </div>
            </div>

            <div className="experience-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:scale-[1.01]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Experience</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-zinc-200 mb-2">Informatics Study Club (ISC)</h4>
                  <p className="text-blue-400 font-medium mb-2">Active Member</p>
                  <p className="text-zinc-400 text-sm mb-4">2025 - Present</p>
                  <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Participating in discussions around recent technology trends and programming fundamentals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Collaborating with peers on coding challenges and improving algorithmic thinking.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-zinc-700 pt-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-zinc-200">Junior Frontend Developer</h4>
                    <span className="rounded border border-blue-300/30 bg-blue-300/10 px-2 py-1 font-mono text-[10px] uppercase text-blue-200">Sample data</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium">Pixelcraft Digital Studio</p>
                  <p className="mb-3 text-zinc-400 text-sm">Jan 2025 - Apr 2025 · Internship (Demo)</p>
                  <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Built reusable UI sections and responsive page layouts from design references.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Worked with a small team to review changes, track tasks, and refine interface details.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" ref={skillsRef} className="skills-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="skill-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-zinc-200">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-zinc-200">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors">
                  Next.js
                </span>
              </div>
            </div>

            <div className="skill-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-zinc-200">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors">
                  MySQL
                </span>
              </div>
            </div>

            <div className="skill-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-zinc-200">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code'].map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-[1.01] md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-zinc-200">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Problem Solving', icon: Lightbulb },
                  { name: 'Teamwork', icon: Users },
                  { name: 'Growth Mindset', icon: TrendingUp },
                ].map((skill) => (
                  <span key={skill.name} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium flex items-center gap-2 hover:bg-blue-500/20 transition-colors">
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" ref={projectsRef} className="projects-section py-20 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/10">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <Code2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-200">Tokopedia Landing Page Clone</h3>
                      <p className="text-blue-400 font-medium">Front End Practice</p>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Developed a clone of Tokopedia&apos;s e-commerce landing page to strengthen my UI implementation and responsive design skills.
                </p>

                <ul className="space-y-3 mb-6 text-zinc-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Built the page structure using semantic HTML5 and a clean content hierarchy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Created a responsive layout using CSS3 with attention to spacing and visual balance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Added light interactivity to create a more polished landing-page experience.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-card bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/10">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <Sparkles className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-200">Portfolio Website</h3>
                      <p className="text-blue-400 font-medium">Personal Branding</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    A personal portfolio designed to showcase my background, strengths, and learning journey in modern web development.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2 text-zinc-400 text-sm leading-relaxed">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Built with Next.js, Tailwind CSS, and GSAP to deliver a smooth and polished presentation.</span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-400 text-sm leading-relaxed">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Focused on strong typography, contrast, and a clean visual system to improve professionalism.</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Next.js', 'Tailwind', 'GSAP', 'UI Design'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="contact-section py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Get In Touch</span>
          </h2>

          <div className="bg-zinc-900/65 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 md:p-12 text-center hover:border-blue-500/50 transition-colors">
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I&apos;m open to internship opportunities, collaborative projects, and conversations about building meaningful digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="mailto:usepsaefuladzkia@gmail.com"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-zinc-950 font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 border border-zinc-600 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 font-semibold rounded-lg transition-all hover:scale-[1.02]"
              >
                See My Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://linkedin.com/in/usep-saeful-adzkia"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-zinc-700 hover:bg-blue-500 rounded-full transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-zinc-700 hover:bg-blue-500 rounded-full transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-700 grid md:grid-cols-2 gap-4 text-left">
              <p className="text-zinc-400">
                <span className="font-semibold text-zinc-300 flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Location:</span>
                Pamulang, Tangerang Selatan
              </p>
              <p className="text-zinc-400">
                <span className="font-semibold text-zinc-300 flex items-center gap-2"><User className="w-4 h-4 text-blue-400" /> Phone:</span>
                085283859519
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-400">
            © 2026 Usep Saeful Adzkia. Built with Next.js, GSAP, Three.js & Tailwind CSS.
          </p>
        </div>
      </footer>
      </div>
    </main>
  );
}
