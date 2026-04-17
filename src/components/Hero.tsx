import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeCheck, ArrowRight, PlayCircle, Users, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

import { trackFBPurchase } from "@/lib/fb-events";

export function Hero() {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    trackFBPurchase("Purchase", {
      content_name: "Hero CTA - WhatsApp",
      content_category: "Lead",
    });
  };

  const handleSecondaryCTAClick = () => {
    trackFBPurchase("Purchase", {
      content_name: "Hero CTA - Courses",
      content_category: "Navigation",
    });
  };

  return (
    <section className="relative pt-32 md:pt-40 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-2 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs font-black text-slate-900 uppercase tracking-widest">🌟 {t("hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-[5rem] font-black text-slate-900 leading-[0.95] tracking-tight"
            >
              {t("hero.title")} <br />
              <span className="relative inline-block text-primary">
                {t("hero.titleAccent")}
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-accent rounded-full" />
              </span>
              {t("hero.titleSuffix") && (
                <>
                  <br />
                  {t("hero.titleSuffix")}
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 leading-snug max-w-xl"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-start gap-3"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <Button asChild size="lg" className="min-h-[3.5rem] md:min-h-[4rem] py-3 px-8 md:px-10 text-lg md:text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group w-full sm:w-auto whitespace-normal leading-tight text-center">
                  <a 
                    href={`https://wa.me/5511948853088?text=${encodeURIComponent(t("nav.whatsappMessage"))}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleCTAClick}
                  >
                    {t("hero.cta")}
                    <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-[3.5rem] md:min-h-[4rem] py-3 px-8 md:px-10 text-lg md:text-xl font-bold rounded-2xl border-2 border-slate-200 hover:bg-slate-50 w-full sm:w-auto text-center whitespace-normal leading-tight">
                  <Link to="/courses" onClick={handleSecondaryCTAClick}>
                    {t("hero.secondaryCta")}
                  </Link>
                </Button>
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-500 ml-1">
                {t("hero.demoNote")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center space-x-4 pt-2"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-slate-500">
                {t("hero.stats")}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative lg:pt-6"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/my-family.png" 
                alt="Happy family learning together" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card - Now below the image */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 glass-card p-6 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">{t("hero.familyBadge")}</div>
                  <div className="text-sm text-slate-500">{t("hero.familyDesc")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
