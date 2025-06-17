"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
          language === "en"
            ? "bg-white/20 text-white"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
      >
        EN
      </button>
      <span className="text-white/50">/</span>
      <button
        onClick={() => setLanguage("ja")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
          language === "ja"
            ? "bg-white/20 text-white"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
      >
        日本語
      </button>
    </div>
  );
}