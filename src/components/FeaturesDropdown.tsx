import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";

// --- Props types ---
type Feature = {
  title: string;
  desc: string;
  href: string;
};

type FeaturesDropdownProps = {
  features: Feature[];
  open: boolean;
  anchorRef: React.RefObject<HTMLButtonElement|null>;
  onClose: () => void;
  onFeatureClick: (feature: Feature) => void;
};

/**
 * FeaturesDropdown - Popup that appears below the Features button
 * Responsive to hover & click, closes on outside click/ESC
 */
export const FeaturesDropdown: React.FC<FeaturesDropdownProps> = ({
  features,
  open,
  anchorRef,
  onClose,
  onFeatureClick,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Animation for fade/slide
  const dropdownVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 16, scale: 0.98 },
  };

  // Close dropdown on click outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose, anchorRef]);

  // Listen for ESC key
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dropdownRef}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownVariants}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-1/2 top-full z-40 w-[420px] -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl border border-[#eee] px-7 py-6"
          style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.14)" }}
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {features.map((feature) => (
              <button
                key={feature.title}
                type="button"
                className="text-left group hover:bg-[#f8f8f8] rounded-lg px-2 py-2 transition"
                onClick={() => onFeatureClick(feature)}
                tabIndex={0}
              >
                <div className="text-base font-semibold text-black group-hover:text-[#38e078]">
                  {feature.title}
                </div>
                <div className="text-[14px] text-[#444] mt-[2px]">
                  {feature.desc}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};