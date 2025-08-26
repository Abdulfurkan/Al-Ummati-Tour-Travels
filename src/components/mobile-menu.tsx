"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageSquare, Home, Settings, Package, Users, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { EnhancedButton } from "@/components/ui/enhanced-button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#services", label: "Services", icon: Settings },
  { href: "#packages", label: "Packages", icon: Package },
  { href: "#about", label: "About Us", icon: Users },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.3,
        ease: "easeOut" as const,
      },
    }),
  };

  const handleLinkClick = (href: string) => {
    onClose();
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-6 py-4">
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.href}
                        custom={index}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        onClick={() => handleLinkClick(item.href)}
                        className="w-full flex items-center space-x-3 px-3 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg transition-colors"
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Theme Toggle */}
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <motion.div
                  custom={navigationItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="flex items-center justify-between mb-4"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                  <ThemeToggle />
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="px-6 pb-6 space-y-3">
                <motion.div
                  custom={navigationItems.length + 1}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <EnhancedButton
                    href="https://wa.me/919414311012"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                    WhatsApp
                  </EnhancedButton>
                </motion.div>
                <motion.div
                  custom={navigationItems.length + 2}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <EnhancedButton
                    href="tel:+919414311012"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                    Call Now
                  </EnhancedButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}