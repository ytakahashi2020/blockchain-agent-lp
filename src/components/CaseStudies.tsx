"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CaseStudies() {
  const { t } = useLanguage();
  
  const cases = [
    {
      project: t.caseStudies.defi.project,
      category: t.caseStudies.defi.category,
      results: t.caseStudies.defi.results,
      testimonial: t.caseStudies.defi.testimonial,
    },
    {
      project: t.caseStudies.nft.project,
      category: t.caseStudies.nft.category,
      results: t.caseStudies.nft.results,
      testimonial: t.caseStudies.nft.testimonial,
    },
    {
      project: t.caseStudies.layer2.project,
      category: t.caseStudies.layer2.category,
      results: t.caseStudies.layer2.results,
      testimonial: t.caseStudies.layer2.testimonial,
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t.caseStudies.title}</h2>
          <p className="text-xl text-gray-600">
            {t.caseStudies.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const categoryColors = {
              DeFi: "from-blue-500 to-cyan-500",
              NFT: "from-purple-500 to-pink-500", 
              Infrastructure: "from-green-500 to-teal-500"
            };
            const gradientClass = categoryColors[caseStudy.category as keyof typeof categoryColors] || "from-gray-500 to-gray-600";
            
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.project}</h3>
                  <span className={`inline-block bg-gradient-to-r ${gradientClass} text-white text-sm px-4 py-2 rounded-full font-medium`}>
                    {caseStudy.category}
                  </span>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-4 text-gray-800">Results</h4>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-gradient-to-r ${gradientClass}`} />
                        <span className="text-gray-700 leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <div className="relative">
                    <svg className="w-8 h-8 text-gray-300 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      {caseStudy.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}