import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Globe, Users, Gift, CheckCircle2, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "General English",
    familyMember: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      course: "General English",
      familyMember: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight"
          >
            {t('contact.hero.title')} <span className="text-primary underline decoration-accent decoration-8 underline-offset-8">{t('contact.hero.titleSuffix')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed"
          >
            {t('contact.hero.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info Cards */}
          <div className="space-y-8">
            {[
              {
                key: "campus",
                icon: Globe,
                color: "bg-blue-50 text-blue-600",
              },
              {
                key: "family",
                icon: Users,
                color: "bg-purple-50 text-purple-600",
              },
              {
                key: "support",
                icon: Mail,
                color: "bg-amber-50 text-amber-600",
              }
            ].map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{t(`contact.info.items.${item.key}.title`)}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{t(`contact.info.items.${item.key}.desc`)}</p>
              </motion.div>
            ))}

            <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-xl space-y-6">
              <div className="flex items-center space-x-3 text-accent">
                <Gift className="h-6 w-6" />
                <h4 className="text-xl font-black uppercase tracking-widest">{t('contact.promo.title')}</h4>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('contact.promo.desc')}
              </p>
              <div className="flex items-center space-x-2 text-sm font-bold text-white/80">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{t('contact.promo.note')}</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div id="enroll" className="lg:col-span-2 bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl font-black text-slate-900">{t('contact.form.title')}</h2>
              <p className="text-xl text-slate-600">
                {t('contact.form.subtitle')}
              </p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center space-y-6 bg-accent/10 rounded-[3rem] border border-accent/20"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto shadow-xl shadow-accent/20">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-900">{t('contact.success.title')}</h3>
                <p className="text-xl text-slate-600">
                  {t('contact.success.desc')}
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline" 
                  className="h-14 px-8 rounded-xl border-slate-200 text-slate-600 font-bold"
                >
                  {t('contact.success.button')}
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">{t('contact.form.fields.name.label')}</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder={t('contact.form.fields.name.placeholder')} 
                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">{t('contact.form.fields.email.label')}</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder={t('contact.form.fields.email.placeholder')} 
                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">{t('contact.form.fields.course.label')}</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all text-lg appearance-none"
                  >
                    <option value="General English">{t('courses.list.general.title')}</option>
                    <option value="Business English">{t('courses.list.business.title')}</option>
                    <option value="English for Kids">{t('courses.list.kids.title')}</option>
                    <option value="Exam Prep">{t('courses.list.exam.title')}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">{t('contact.form.fields.family.label')}</label>
                  <input 
                    name="familyMember"
                    value={formData.familyMember}
                    onChange={handleChange}
                    type="text" 
                    placeholder={t('contact.form.fields.family.placeholder')} 
                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all text-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">{t('contact.form.fields.message.label')}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.fields.message.placeholder')} 
                    className="w-full h-40 p-6 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all text-lg resize-none"
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full min-h-[5rem] py-4 rounded-[2rem] bg-primary hover:bg-primary/90 text-white text-2xl font-black shadow-2xl shadow-primary/40 group text-center whitespace-normal leading-tight"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                        {t('contact.form.submit.loading')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit.default')}
                        <Send className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
