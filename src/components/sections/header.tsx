import { ThemeToggle } from "@/components/theme-toggle";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  Menu,
  MessageSquare
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      {/* Top Bar */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 94143 11012</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@alummati.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <span>Follow us for updates and travel tips</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-emerald-200 transition-colors">Facebook</a>
                <a href="#" className="hover:text-emerald-200 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="AL Ummati Tour & Travels" 
                width={150} 
                height={45} 
                className="h-auto max-h-12"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                Services
              </a>
              <a href="#packages" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                Packages
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <EnhancedButton 
                href="https://wa.me/919414311012" 
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950"
              >
                <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                WhatsApp
              </EnhancedButton>
              <EnhancedButton className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                Call Now
              </EnhancedButton>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}