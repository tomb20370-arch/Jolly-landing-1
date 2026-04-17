import { motion } from "motion/react";
import { ShieldCheck, Globe, Target, Zap, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const values = [
  {
    key: "success",
    icon: Target,
    color: "bg-blue-50 text-blue-600",
  },
  {
    key: "community",
    icon: Globe,
    color: "bg-purple-50 text-purple-600",
  },
  {
    key: "innovation",
    icon: Zap,
    color: "bg-amber-50 text-amber-600",
  },
  {
    key: "integrity",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600",
  }
];

export function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight"
          >
            {t('about.hero.title')} <br />
            <span className="text-primary">{t('about.hero.titleSuffix')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed"
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-slate-900">{t('about.values.title')}</h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl ${v.color} flex items-center justify-center mb-8`}>
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{t(`about.values.items.${v.key}.title`)}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{t(`about.values.items.${v.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Jolly Method */}
        <div className="mb-16 p-12 md:p-24 rounded-[4rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                {t('about.method.title')} <br />
                <span className="text-primary underline decoration-accent decoration-8 underline-offset-8">{t('about.method.titleSuffix')}</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                {t('about.method.desc')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { key: "tech", icon: Rocket },
                { key: "native", icon: ShieldCheck },
                { key: "ai", icon: Zap },
              ].map((item) => (
                <div key={item.key} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">{t(`about.method.items.${item.key}.title`)}</h4>
                  <p className="text-slate-600 leading-relaxed">{t(`about.method.items.${item.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
