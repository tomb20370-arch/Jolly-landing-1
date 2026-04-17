import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { trackFBPurchase } from "@/lib/fb-events";

export function WhatsAppButton() {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/5511948853088?text=${encodeURIComponent(t("nav.whatsappMessage"))}`;

  const handleClick = () => {
    trackFBPurchase("Purchase", {
      content_name: "Floating WhatsApp Button",
      content_category: "Lead",
    });
  };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center space-x-2 group"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
        Questions? Chat with us!
      </span>
    </motion.a>
  );
}
