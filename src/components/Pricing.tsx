"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import ParallaxSection from "./ParallaxSection";

export default function Pricing() {
  const { t } = useLanguage();
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [visiblePlans, setVisiblePlans] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisiblePlans(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.pricing-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: t.pricing.basic.name,
      price: "$1,000",
      period: t.pricing.month,
      description: t.pricing.basic.description,
      features: t.pricing.basic.features,
      recommended: false,
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      name: t.pricing.standard.name,
      price: "$2,000",
      period: t.pricing.month,
      description: t.pricing.standard.description,
      features: t.pricing.standard.features,
      recommended: true,
      gradient: "from-purple-600 to-pink-600",
      glowColor: "rgba(217, 70, 239, 0.4)",
    },
    {
      name: t.pricing.premium.name,
      price: t.pricing.premium.price,
      period: "",
      description: t.pricing.premium.description,
      features: t.pricing.premium.features,
      recommended: false,
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "rgba(20, 184, 166, 0.4)",
    },
  ];

  return (
    <section id="pricing" className="py-32 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        
        {/* Animated background elements */}
        <ParallaxSection speed={0.2}>
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        </ParallaxSection>
        <ParallaxSection speed={0.3}>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        </ParallaxSection>
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 20%),
                radial-gradient(circle at 80% 20%, rgba(217, 70, 239, 0.3) 0%, transparent 20%),
                radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 20%)
              `,
              backgroundSize: '400px 400px',
            }}
            className="absolute inset-0"
          />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <ParallaxSection speed={0.1}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200/50">
              <span className="gradient-text font-semibold">
                💎 {t.pricing.title}
              </span>
            </div>
            <h2 className="font-display font-bold mb-6 gradient-text">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>
        </ParallaxSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-index={index}
              className={`pricing-card group relative transition-all duration-700 ${
                visiblePlans.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${
                plan.recommended ? 'lg:-translate-y-4 scale-105' : ''
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
              }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 rounded-3xl blur-xl transition-all duration-500 ${
                  hoveredPlan === index ? 'opacity-70 scale-110' : 'opacity-0'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${plan.glowColor}, transparent)`,
                }}
              />

              {/* Main card */}
              <div className={`card-premium relative h-full ${
                plan.recommended ? 'border-2 border-purple-300' : ''
              }`}>
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      ✨ {t.pricing.standard.recommended}
                    </div>
                  </div>
                )}

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div 
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${plan.glowColor}, transparent 50%)`,
                    }}
                  />
                </div>

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className={`${plan.price.length > 10 ? 'text-3xl' : 'text-6xl'} font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        <span className="text-gray-500 text-lg ml-2">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`block text-center py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                      plan.recommended
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-glow`
                        : `border-2 border-gray-200 text-gray-800 hover:border-transparent hover:bg-gradient-to-r hover:${plan.gradient} hover:text-white`
                    }`}
                  >
                    <span className="relative z-10">{t.pricing.cta}</span>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </a>
                </div>

                {/* Interactive particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/50 rounded-full animate-pulse"
                      style={{
                        left: `${10 + (i * 10)}%`,
                        top: `${20 + (i * 8)}%`,
                        animationDelay: `${i * 100}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <ParallaxSection speed={0.1}>
          <div className="text-center">
            <div className="glass-morphism p-6 rounded-2xl max-w-3xl mx-auto">
              <p className="text-gray-700 font-medium">
                {t.pricing.note}
              </p>
            </div>
          </div>
        </ParallaxSection>

        {/* Trust indicators */}
        <ParallaxSection speed={0.05}>
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { icon: "🔒", label: "Secure Payments" },
                { icon: "🏆", label: "Award Winning" },
                { icon: "⚡", label: "Fast Delivery" },
                { icon: "💬", label: "24/7 Support" },
              ].map((item, index) => (
                <div key={index} className="glass-morphism p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-medium text-gray-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
}