import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, MessageCircle, Info, Phone, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { trackFBPurchase } from "@/lib/fb-events";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  const handleEnrollClick = () => {
    trackFBPurchase("Purchase", {
      content_name: "Navbar Enroll Now",
      content_category: "Lead",
    });
    setIsOpen(false);
  };

  const navItems = [
    { name: t("nav.courses"), href: "/courses", icon: BookOpen },
    { name: t("nav.aiPartner"), href: "/ai-partner", icon: Sparkles },
    { name: t("nav.about"), href: "/about", icon: Info },
    { name: t("nav.contact"), href: "/contact", icon: Phone },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "bg-white/90 backdrop-blur-md border-b shadow-sm" 
        : "bg-transparent"
    )}>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-center text-xs md:text-sm font-black uppercase tracking-widest relative">
        {t("nav.promo")}
        
        {/* Language Switcher Desktop */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-1 hover:text-primary transition-colors text-[10px] uppercase font-black"
            >
              <Globe className="h-3 w-3" />
              <span>{languages.find(l => l.code === i18n.language.split('-')[0])?.name || 'Language'}</span>
            </button>
            
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-900 normal-case font-bold text-xs overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={cn(
                      "w-full text-left px-4 py-2 hover:bg-primary/5 transition-colors flex items-center space-x-2",
                      i18n.language.startsWith(lang.code) ? "text-primary bg-primary/5" : ""
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className={cn(
        "container mx-auto px-4 flex items-center justify-between transition-all duration-300",
        scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
      )}>
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-primary p-2 rounded-2xl group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
          <span className="text-2xl font-headline font-black text-slate-900 tracking-tight">
            Jolly English
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-2xl text-sm font-bold transition-all",
                  location.pathname === item.href 
                    ? "text-primary bg-primary/5" 
                    : "text-slate-600 hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white font-bold min-h-[3rem] py-2 px-8 rounded-2xl shadow-xl text-center whitespace-normal leading-tight">
            <a 
              href={`https://wa.me/5511948853088?text=${encodeURIComponent(t("nav.whatsappMessage"))}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleEnrollClick}
            >
              {t("nav.enrollNow")}
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Language Switcher Mobile */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLangOpen(!langOpen)}
              className="rounded-xl w-8 h-8"
            >
              <Globe className="h-5 w-5" />
            </Button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-900 normal-case font-bold text-xs overflow-hidden z-[60]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={cn(
                      "w-full text-left px-4 py-2 hover:bg-primary/5 transition-colors flex items-center space-x-2",
                      i18n.language.startsWith(lang.code) ? "text-primary bg-primary/5" : ""
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-white border-b shadow-2xl transition-all duration-300 origin-top overflow-hidden",
        isOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
      )}>
        <div className="container mx-auto px-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center p-4 rounded-2xl text-lg font-bold transition-all",
                location.pathname === item.href ? "bg-primary/5 text-primary" : "text-slate-700 hover:bg-slate-50"
              )}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="mr-4 h-6 w-6 text-primary" />
              {item.name}
            </Link>
          ))}
          <Button asChild className="w-full min-h-[3.5rem] py-3 bg-primary text-white font-bold text-lg rounded-2xl text-center whitespace-normal leading-tight">
            <a 
              href={`https://wa.me/5511948853088?text=${encodeURIComponent(t("nav.whatsappMessage"))}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={handleEnrollClick}
            >
              {t("nav.enrollNow")}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
