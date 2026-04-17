import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-slate-900 mb-12"
        >
          {t('privacy.title')} <span className="text-primary">{t('privacy.titleSuffix')}</span>
        </motion.h1>
        <div className="prose prose-slate lg:prose-xl max-w-none space-y-8 text-slate-600">
          {(t('privacy.sections', { returnObjects: true }) as any[]).map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900">{section.title}</h2>
              <p>
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
