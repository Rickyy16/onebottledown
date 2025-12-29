import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { BsWhatsapp } from "react-icons/bs";

const FloatingCTA = () => {
  const phoneNumber = "+91 6377663382";
  const whatsappNumber = "6377663382";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to enquire about your liquor delivery services.");

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50 flex flex-col gap-3"
    >
      <motion.a
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg gold-glow group transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground group-hover:animate-pulse" />
      </motion.a>

      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        <BsWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-foreground group-hover:animate-pulse" />
      </motion.a>
    </motion.div>
  );
};

export default FloatingCTA;
