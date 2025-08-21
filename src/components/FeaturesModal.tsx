import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// --- Props types ---
type Feature = {
  title: string;
  desc: string;
  href: string;
};

type FeatureModalProps = {
  feature: Feature | null;
  open: boolean;
  onClose: () => void;
};

/**
 * FeatureModal - Modal popup for feature details
 * Opens when a feature is clicked in FeaturesDropdown
 * Closes on outside click, ESC, or close button
 */
export const FeatureModal: React.FC<FeatureModalProps> = ({
  feature,
  open,
  onClose,
}) => {
  // Animation for fade/scale
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.96 },
  };

  // Listen for ESC key
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // Listen for outside click
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!feature) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-2xl px-7 py-6 min-w-[340px] max-w-[98vw] relative"
            style={{ boxShadow: "0 6px 36px rgba(0,0,0,0.18)" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 p-2 rounded hover:bg-gray-100"
              aria-label="Close"
              onClick={onClose}
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
            {/* Modal Content */}
            <div>
              <div className="text-xl font-bold text-[#38e078] mb-2">
                {feature.title}
              </div>
              <div className="text-gray-700 text-base">{feature.desc}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};