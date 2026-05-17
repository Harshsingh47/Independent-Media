"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingWidgets() {
  const WHATSAPP_NUMBER = "918091556755";
  const PRE_FILLED_MESSAGE = encodeURIComponent("Hello, I want a service related to software development");

  return (
    <>
      {/* Sidebar Contact Icons */}
      <div className="side-floating-icons">
        <motion.a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MESSAGE}`}
          target="_blank" 
          className="side-icon whatsapp"
          whileHover={{ x: -5 }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </motion.a>
        <motion.a 
          href="tel:+918091556755" 
          className="side-icon phone"
          whileHover={{ x: -5 }}
        >
          <Phone size={24} />
        </motion.a>
      </div>
    </>
  );
}
