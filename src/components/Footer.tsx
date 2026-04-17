import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-primary p-2 rounded-xl group-hover:rotate-6 transition-transform">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-headline font-black text-white tracking-tight">
                Jolly English
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-primary transition-colors">
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-primary transition-colors">
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-primary transition-colors">
                <Twitter className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">{t("footer.quickLinks")}</h4>
            <ul className="space-y-4">
              {[
                { name: t("nav.courses"), href: "/courses" },
                { name: t("nav.aiPartner"), href: "/ai-partner" },
                { name: t("nav.about"), href: "/about" },
                { name: t("nav.contact"), href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-primary transition-colors text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">{t("footer.contactUs")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg">São Paulo, Brazil</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <a href={`https://wa.me/5511948853088?text=${encodeURIComponent(t("nav.whatsappMessage"))}`} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                  +55 11 94885-3088
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <a href="mailto:hello@jollyenglishacademy.site" className="text-lg hover:text-primary transition-colors">
                  hello@jollyenglishacademy.site
                </a>
              </li>
            </ul>
          </div>

          {/* Support Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">{t("footer.supportHours")}</h4>
            <div className="bg-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{t("footer.monFri")}</span>
                <span className="font-bold text-white">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{t("footer.sat")}</span>
                <span className="font-bold text-white">10:00 - 14:00</span>
              </div>
              <div className="h-px bg-slate-700 w-full" />
              <p className="text-sm text-slate-500 italic">
                {t("footer.closed")}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-center md:text-left">
            © {currentYear} Jolly English Academy. {t("footer.rights")}
          </p>
          <div className="flex space-x-8 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
