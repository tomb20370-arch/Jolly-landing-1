import { motion } from "motion/react";
import { BookOpen, CheckCircle2, Globe, Clock, Users, Star, Brain, Sparkles, Gift, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function Courses() {
  const { t } = useTranslation();

  const courseIcons = {
    general: Globe,
    business: BookOpen,
    kids: Star,
    exam: Clock
  };

  const courseKeys = ['general', 'business', 'kids', 'exam'] as const;

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
          >
            {t('courses.title')} <span className="text-primary">{t('courses.titleSuffix')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed"
          >
            {t('courses.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courseKeys.map((key, i) => {
            const Icon = courseIcons[key];
            const tagKey = key === 'general' ? 'tagPopular' : key === 'business' ? 'tagCareer' : key === 'kids' ? 'tagKids' : null;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group relative flex flex-col"
              >
                {tagKey && (
                  <div className="absolute -top-4 left-10 px-4 py-1 bg-accent text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                    {t(`courses.${tagKey}`)}
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t(`courses.list.${key}.level`)}</span>
                    <span className="text-sm font-bold text-primary">{t(`courses.list.${key}.duration`)}</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-widest mb-4 self-start">
                  <Gift className="h-3 w-3" />
                  <span>{t('courses.promo2for1')}</span>
                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-4">{t(`courses.list.${key}.title`)}</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">{t(`courses.list.${key}.desc`)}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-auto">
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">{t('courses.outcomesTitle')}</h4>
                    <ul className="space-y-3">
                      {(t(`courses.list.${key}.outcomes`, { returnObjects: true }) as string[]).map((outcome) => (
                        <li key={outcome} className="flex items-center space-x-3 text-slate-700 font-medium text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-primary uppercase tracking-widest flex items-center">
                      <Sparkles className="h-4 w-4 mr-2" />
                      {t('courses.advantageTitle')}
                    </h4>
                    <ul className="space-y-3">
                      {(t('courses.advantageList', { returnObjects: true }) as string[]).map((item) => (
                        <li key={item} className="flex items-center space-x-3 text-slate-700 font-medium text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button asChild className="w-full min-h-[4rem] py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-base sm:text-lg md:text-xl shadow-xl shadow-slate-900/20 px-2 sm:px-4">
                    <a href={`https://wa.me/5511948853088?text=${encodeURIComponent(t("nav.whatsappMessage"))}`} target="_blank" rel="noopener noreferrer" className="text-center whitespace-normal leading-tight">
                      {t('courses.ctaDemo')}
                    </a>
                  </Button>
                  <p className="text-center text-xs font-bold text-slate-500">
                    {t('courses.ctaNote')}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What's Included Section */}
        <section className="mt-16 py-16 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {t('courses.included.title')} <span className="text-primary">{t('courses.included.titleSuffix')}</span>
            </h2>
            <p className="text-xl text-slate-600">
              {t('courses.included.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                key: 'ai',
                icon: Brain,
                color: "bg-accent/10 text-accent"
              },
              {
                key: 'experts',
                icon: ShieldCheck,
                color: "bg-primary/10 text-primary"
              },
              {
                key: 'promise',
                icon: Gift,
                color: "bg-purple-100 text-purple-600"
              }
            ].map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{t(`courses.included.items.${item.key}.title`)}</h3>
                <p className="text-slate-600 leading-relaxed">{t(`courses.included.items.${item.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Methodology Section */}
        <div className="mt-16 p-12 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                {t('courses.methodology.title')} <br />
                <span className="text-primary">{t('courses.methodology.titleSuffix')}</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                {t('courses.methodology.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { key: 'interaction', icon: Users },
                  { key: 'contextual', icon: Star },
                ].map((item) => (
                  <div key={item.key} className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                    <item.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-black text-lg">{t(`courses.methodology.items.${item.key}.title`)}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{t(`courses.methodology.items.${item.key}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-accent p-8 rounded-[2rem] shadow-2xl">
                <div className="text-4xl font-black text-white">98%</div>
                <div className="text-white/80 font-bold">{t('courses.methodology.successRate')}</div>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">
                  {t('courses.methodology.successDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
