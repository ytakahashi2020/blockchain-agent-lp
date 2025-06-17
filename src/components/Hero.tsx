"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background with Mesh Gradient */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        
        {/* Animated mesh overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(600px circle at ${50 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%, 
                rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(800px circle at ${30 - mousePosition.x * 0.1}% ${70 - mousePosition.y * 0.1}%, 
                rgba(217, 70, 239, 0.3) 0%, transparent 50%),
              radial-gradient(400px circle at ${80 + mousePosition.x * 0.05}% ${20 + mousePosition.y * 0.05}%, 
                rgba(20, 184, 166, 0.3) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 border border-white/10 rounded-full blur-sm
                ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i * 10)}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 relative z-10 pt-20">
        <div className={`text-center ${mounted ? "animate-fade-in" : "opacity-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 glass-morphism rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
            <span className="text-white/90 font-medium">
              🌟 Premium Blockchain Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold mb-8 text-white text-shadow-lg leading-tight">
            <span className="block">
              {t.hero.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  <span 
                    className="inline-block"
                    style={{
                      transform: `translateY(${mousePosition.y * 0.05}px)`,
                      transition: 'transform 0.2s ease-out',
                    }}
                  >
                    {line.split(' ').map((word, j) => (
                      <span
                        key={j}
                        className="inline-block mr-4 hover:gradient-text-hover transition-all duration-300"
                        style={{
                          animationDelay: `${(i * 3 + j) * 100}ms`,
                          transform: `translateX(${mousePosition.x * 0.02 * (j + 1)}px)`,
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                  {i < t.hero.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
                {i < t.hero.subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#contact"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {t.hero.ctaContact}
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            
            <a
              href="#pricing"
              className="btn-secondary group"
            >
              <span className="flex items-center">
                {t.hero.ctaPricing}
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects Launched" },
              { number: "100K+", label: "Community Members" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-morphism p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 200}ms`,
                  transform: `translateY(${mousePosition.y * 0.02}px)`,
                }}
              >
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-xs mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}