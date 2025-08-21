"use client";


import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { Button, Chip } from "@heroui/react";
import { ChevronDown, Mountain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FeaturesDropdown } from "./FeaturesDropdown";
import { FeatureModal } from "./FeaturesModal";

// --- Feature type ---
type Feature = {
  title: string;
  desc: string;
  href: string;
};

/**
 * Navigation - Main Navbar component
 * - FeaturesDropdown integrated for desktop
 * - FeatureModal opens when clicking any feature in dropdown
 * - Comments highlight all new logic and integration
 */
export const Navigation: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Features dropdown/modal state
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [hoveringFeatures, setHoveringFeatures] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  // Ref to Features button for positioning dropdown
  const featuresBtnRef = useRef<HTMLButtonElement>(null);

  const features: Feature[] = [
    { title: "Trail Discovery", desc: "Find verified hiking trails", href: "#trails" },
    { title: "GPS Navigation", desc: "Offline maps & tracking", href: "#navigation" },
    { title: "Community", desc: "Connect with hikers", href: "#community" },
    { title: "Peak Tracking", desc: "Log your summits", href: "#tracking" },
  ];

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Features dropdown open/close logic
  const handleFeaturesOpen = () => setFeaturesOpen(true);
  const handleFeaturesClose = () => setFeaturesOpen(false);

  // Hover logic: keeps open while mouse is on button or dropdown
  const onFeaturesBtnMouseEnter = () => {
    setHoveringFeatures(true);
    handleFeaturesOpen();
  };
  const onFeaturesBtnMouseLeave = () => {
    setHoveringFeatures(false);
    setTimeout(() => {
      if (!hoveringFeatures) handleFeaturesClose();
    }, 120);
  };

  // Dropdown hover handlers
  const onDropdownMouseEnter = () => setHoveringFeatures(true);
  const onDropdownMouseLeave = () => {
    setHoveringFeatures(false);
    setTimeout(() => {
      if (!hoveringFeatures) handleFeaturesClose();
    }, 120);
  };

  // Toggle on click
  const handleFeaturesBtnClick = () => setFeaturesOpen((o) => !o);

  // Modal handlers
  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
    handleFeaturesClose();
  };
  const handleModalClose = () => setSelectedFeature(null);

  // Brand logo
  const Brand = (
    <NavbarBrand className="flex items-center gap-2">
      <Mountain className="h-8 w-8 text-[#38e078]" />
      <span
        className="text-[20px] font-bold tracking-tight text-amber-50"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Trekmate
      </span>
      <Chip
        color="secondary"
        size="sm"
        variant="flat"
        className="hidden sm:flex px-2 py-[2px] text-[11px] font-medium"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Beta
      </Chip>
    </NavbarBrand>
  );

  return (
    <>
      {/* Initial Navbar */}
      {!scrolled && (
        <Navbar
          maxWidth="xl"
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-transparent px-4 sm:px-8 py-2"
        >
          <NavbarContent justify="start">{Brand}</NavbarContent>
        </Navbar>
      )}

      {/* Scroll Navbar */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <Navbar
              maxWidth="xl"
              onMenuOpenChange={setIsMenuOpen}
              className={`transition-colors duration-300 px-4 sm:px-8 py-2
              ${scrolled ? "bg-black/40 backdrop-blur-lg border-b border-[#1c1c1c]" : ""}`}
            >
              {/* Brand */}
              <NavbarContent justify="start">{Brand}</NavbarContent>

              {/* Desktop Menu */}
              <NavbarContent className="hidden md:flex justify-center gap-8" justify="center">
                <NavbarItem className="relative">
                  {/* Features Button with Dropdown/Modal */}
                  <Button
                    ref={featuresBtnRef}
                    disableRipple
                    variant="light"
                    endContent={
                      <motion.div
                        animate={{ rotate: featuresOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    }
                    className={`flex items-center hover:bg-transparent px-0 text-[14px] font-medium text-white`}
                    onMouseEnter={onFeaturesBtnMouseEnter}
                    onMouseLeave={onFeaturesBtnMouseLeave}
                    onClick={handleFeaturesBtnClick}
                    tabIndex={0}
                    aria-haspopup="true"
                    aria-expanded={featuresOpen}
                  >
                    Features
                  </Button>
                  {/* Popup Dropdown */}
                  <div
                    onMouseEnter={onDropdownMouseEnter}
                    onMouseLeave={onDropdownMouseLeave}
                  >
                    <FeaturesDropdown
                      open={featuresOpen}
                      anchorRef={featuresBtnRef}
                      features={features}
                      onClose={handleFeaturesClose}
                      onFeatureClick={handleFeatureClick}
                    />
                  </div>
                </NavbarItem>
                <NavbarItem>
                  <a
                    href="#pricing"
                    className="text-sm hover:text-[#38e078] transition-colors text-[#f5f5f5]"
                  >
                    Pricing
                  </a>
                </NavbarItem>
                <NavbarItem>
                  <a
                    href="#about"
                    className="text-sm hover:text-[#38e078] transition-colors text-[#f5f5f5]"
                  >
                    About
                  </a>
                </NavbarItem>
              </NavbarContent>

              {/* CTA Buttons (Desktop) */}
              <NavbarContent justify="end" className="hidden md:flex gap-3 ">
                <Button
                onClick={()=>router.push('/auth/signin')}
                  variant="light"
                  className="text-[#38e078] text-[12px] font-medium hover:bg-[#404140] hover:cursor-pointer hover:rounded"
                >
                  Sign In
                </Button>
                <Button
                  onClick={()=>router.push('/auth/signup')}
                  className="bg-[#38e078] rounded hover:bg-[#32c96d] hover:text-white text-black font-medium text-[12px] px-5 hover:cursor-pointer"
                >
                  Get Started
                </Button>
              </NavbarContent>

              {/* Mobile Menu Toggle */}
              <NavbarContent className="md:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
              </NavbarContent>

              {/* Mobile Menu */}
              <NavbarMenu>
                <div className="mt-4 space-y-4">
                  <h4 className="font-medium text-lg">Features</h4>
                  {features.map((feature) => (
                    <NavbarMenuItem key={feature.title}>
                      <a
                        href={feature.href}
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        {feature.title}
                      </a>
                    </NavbarMenuItem>
                  ))}
                </div>

                <div className="pt-4 space-y-2 border-t mt-6">
                  <Button variant="light" className="w-full justify-start">
                    Sign In
                  </Button>
                  <Button
                    className="w-full bg-[#38e078] hover:bg-[#32c96d] text-black"
                  >
                    Get Started
                  </Button>
                </div>
              </NavbarMenu>
            </Navbar>
            {/* Modal for Feature Details */}
            <FeatureModal
              feature={selectedFeature}
              open={!!selectedFeature}
              onClose={handleModalClose}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};














