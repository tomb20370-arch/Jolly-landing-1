import { Hero } from "@/components/Hero";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, Star, Users, Brain, Globe, Gift, ShieldCheck, Rocket, ArrowRight, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function Home() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Hero />

      {/* Human + AI Logic Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {t("home.method.title")}
            </h2>
            <p className="text-xl text-slate-600">
              {t("home.method.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t("home.method.human.title"),
                benefit: t("home.method.human.benefit"),
                desc: t("home.method.human.desc"),
                icon: Users,
                tag: t("home.method.human.tag")
              },
              {
                title: t("home.method.ai.title"),
                benefit: t("home.method.ai.benefit"),
                desc: t("home.method.ai.desc"),
                icon: Brain,
                tag: t("home.method.ai.tag")
              },
              {
                title: t("home.method.promo.title"),
                benefit: t("home.method.promo.benefit"),
                desc: t("home.method.promo.desc"),
                icon: Gift,
                tag: t("home.method.promo.tag")
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col h-full"
              >
                <div className="inline-flex items-center self-start px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  {item.tag}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-primary font-bold mb-4">{item.benefit}</p>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {t("home.comparison.title")}
            </h2>
            <p className="text-xl text-slate-600">
              {t("home.comparison.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-red-50 border border-red-100 space-y-6"
            >
              <div className="flex items-center space-x-3 text-red-600">
                <XCircle className="h-8 w-8" />
                <h3 className="text-2xl font-black">{t("home.comparison.oldWay.title")}</h3>
              </div>
              <ul className="space-y-4">
                {(t("home.comparison.oldWay.items", { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-slate-600">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Jolly Way */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-accent/10 border border-accent/20 space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <Star className="h-12 w-12 text-accent/20 rotate-12" />
              </div>
              <div className="flex items-center space-x-3 text-accent">
                <CheckCircle2 className="h-8 w-8" />
                <h3 className="text-2xl font-black">{t("home.comparison.jollyWay.title")}</h3>
              </div>
              <ul className="space-y-4">
                {(t("home.comparison.jollyWay.items", { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-slate-700 font-bold">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-accent shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 2-for-1 Offer Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="promo-gradient rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3 text-left space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold uppercase tracking-widest">
                  <Gift className="h-4 w-4" />
                  <span>{t("home.promoSection.tag")}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  {t("home.promoSection.title")} <br />
                  <span className="text-accent">{t("home.promoSection.titleAccent")}</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  {t("home.promoSection.desc")}
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="h-6 w-6" />
                    </div>
                    <span className="font-bold">{t("home.promoSection.benefit1")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Globe className="h-6 w-6" />
                    </div>
                    <span className="font-bold">{t("home.promoSection.benefit2")}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white p-8 rounded-[2rem] text-slate-900 shadow-2xl space-y-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center space-y-2">
                    <div className="text-sm font-bold text-primary uppercase tracking-widest">{t("home.promoSection.card.badge")}</div>
                    <div className="text-5xl font-black">{t("home.promoSection.card.title")}</div>
                    <div className="text-slate-500">{t("home.promoSection.card.subtitle")}</div>
                  </div>
                  <div className="h-px bg-slate-100 w-full" />
                  <ul className="space-y-3">
                    {(t("home.promoSection.card.items", { returnObjects: true }) as string[]).map(item => (
                      <li key={item} className="flex items-center space-x-2 text-sm font-bold">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full min-h-[3.5rem] py-2 rounded-xl bg-primary text-white font-black text-lg shadow-lg shadow-primary/20 text-center whitespace-normal leading-tight">
                    <a href={`https://wa.me/5511948853088?text=${encodeURIComponent(t("nav.whatsappMessage"))}`} target="_blank" rel="noopener noreferrer">{t("home.promoSection.card.cta")}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {t("home.advantage.title")}
            </h2>
            <p className="text-xl text-slate-600">
              {t("home.advantage.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t("home.advantage.items", { returnObjects: true }) as any[]).map((item, i) => {
              const icons = [ShieldCheck, Rocket, Brain];
              const colors = ["bg-blue-50 text-primary", "bg-purple-50 text-purple-600", "bg-accent/10 text-accent"];
              const Icon = icons[i];
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all group"
                >
                  <div className={`w-16 h-16 rounded-2xl ${colors[i]} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {t("home.faq.title")} <span className="text-primary">{t("home.faq.titleSuffix")}</span>
            </h2>
            <p className="text-xl text-slate-600">
              {t("home.faq.subtitle")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {(t("home.faq.items", { returnObjects: true }) as any[]).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="border border-slate-100 rounded-3xl overflow-hidden bg-slate-50/50 hover:bg-white transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-xl transition-colors ${openFaq === i ? "bg-primary text-white" : "bg-white text-slate-400"}`}>
                    {openFaq === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed text-lg">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 space-y-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
            {t("home.finalCta.title")}
          </h2>
          <p className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("home.finalCta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button asChild size="lg" className="min-h-[5rem] py-4 px-12 text-2xl font-black rounded-[2rem] bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 group text-center whitespace-normal leading-tight">
              <a href={`https://wa.me/5511948853088?text=${encodeURIComponent(t("nav.whatsappMessage"))}`} target="_blank" rel="noopener noreferrer">
                {t("home.finalCta.cta")}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="pt-12 flex items-center justify-center space-x-8 text-slate-500 font-bold uppercase tracking-widest text-sm">
            {(t("home.finalCta.footer", { returnObjects: true }) as string[]).map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
