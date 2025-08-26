"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  Menu,
  MessageSquare
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden sm:block bg-emerald-600 dark:bg-emerald-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-xs sm:text-sm">+91 94143 11012</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-xs sm:text-sm">info@alummati.com</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4 mt-2 sm:mt-0">
              <span className="text-xs">Follow us for updates and travel tips</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-emerald-200 transition-colors text-xs">Facebook</a>
                <a href="#" className="hover:text-emerald-200 transition-colors text-xs">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Image 
                src="/images/logo.png" 
                alt="AL Ummati Tour & Travels" 
                width={120} 
                height={36} 
                className="h-auto max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm xl:text-base">
                Home
              </a>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm xl:text-base">
                Services
              </a>
              <a href="#packages" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm xl:text-base">
                Packages
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm xl:text-base">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm xl:text-base">
                Contact
              </a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />
              <EnhancedButton 
                href="https://wa.me/919414311012" 
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950"
              >
                <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                WhatsApp
              </EnhancedButton>
              <EnhancedButton 
                href="tel:+919414311012"
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white"
              >
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                Call Now
              </EnhancedButton>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2 lg:hidden">
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}