"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import ParallaxSection from "./ParallaxSection";

export default function Instructor() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="instructor" className="py-32 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        
        {/* Animated background elements */}
        <ParallaxSection speed={0.2}>
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl" />
        </ParallaxSection>
        <ParallaxSection speed={0.3}>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl" />
        </ParallaxSection>
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 20%),
                radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.3) 0%, transparent 20%)
              `,
              backgroundSize: '300px 300px',
            }}
            className="absolute inset-0"
          />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <ParallaxSection speed={0.1}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full border border-cyan-200/50">
              <span className="gradient-text font-semibold">
                👨‍🏫 {t.instructor.title}
              </span>
            </div>
            <h2 className="font-display font-bold mb-6 gradient-text">
              {t.instructor.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.instructor.subtitle}
            </p>
          </div>
        </ParallaxSection>

        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Instructor Image */}
          <div className="relative">
            <div className="relative group">
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl shadow-3xl group-hover:shadow-glow-lg transition-all duration-500">
                <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-blue-100 to-purple-100">
                  {/* Instructor image */}
                  <img
                    src="/images/teacher.jpg"
                    alt={t.instructor.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with social links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-bold text-xl mb-2">{t.instructor.name}</h3>
                      <p className="text-white/90 text-sm mb-4">{t.instructor.role}</p>
                      <div className="flex space-x-3">
                        <a
                          href="https://x.com/yuki_solana"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-2xl shadow-lg animate-float">
                <div className="text-center">
                  <div className="text-xl font-bold">1.5K+</div>
                  <div className="text-xs">YouTube</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-xs">Workshops</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
            </div>
          </div>

          {/* Instructor Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold mb-3 gradient-text">{t.instructor.name}</h3>
              <p className="text-xl text-gray-600 mb-6">{t.instructor.role}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t.instructor.bio}</p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900">Credentials & Experience</h4>
              <ul className="space-y-3">
                {t.instructor.credentials.map((credential, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div className="glass-morphism p-6 rounded-2xl">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-blue-500 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
                <p className="text-gray-700 italic text-lg leading-relaxed">{t.instructor.quote}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                className="btn-primary group inline-flex"
              >
                <span className="flex items-center">
                  Connect with Our Expert
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}