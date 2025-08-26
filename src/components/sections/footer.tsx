import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Heart,
  Shield
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" }
];

const services = [
  { name: "Umrah Packages", href: "#umrah" },
  { name: "Hajj Packages", href: "#hajj" },
  { name: "Hotel Booking", href: "#hotels" },
  { name: "Visa Services", href: "#visa" },
  { name: "Transportation", href: "#transport" },
  { name: "Group Tours", href: "#groups" }
];

const legal = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
  { name: "Refund Policy", href: "#refund" },
  { name: "Travel Insurance", href: "#insurance" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                <span className="text-emerald-400">AL Ummati</span>
                <br />
                <span className="text-white">Tour & Travels</span>
              </h3>
              <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                Your trusted partner for sacred journeys. We provide comprehensive 
                Umrah and Hajj travel services with over 15 years of experience.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-sm text-gray-300 dark:text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                <span>+91 94143 11012</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 dark:text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                <span>info@alummati.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-300 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-emerald-400 flex-shrink-0" />
                <span>H, 903, Haldion Ka Rasta, Johri Bazar<br />4th Crossing, Ramganj Bazar, Jaipur, Rajasthan 302003</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 dark:text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 dark:text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Legal & Support</h4>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {legal.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 dark:text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-sm text-gray-300 dark:text-gray-400">
                <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                <span>Licensed Travel Agency</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 dark:text-gray-400">
                <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                <span>IATA Certified</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 dark:text-gray-400">
                <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                <span>Hajj Ministry Approved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
              Stay Updated with Our Latest Packages
            </h4>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Subscribe to our newsletter for exclusive deals, travel tips, and spiritual guidance
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-4 px-4 sm:px-0">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 border border-gray-600 dark:border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 text-sm sm:text-base"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 dark:border-gray-600 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-xs sm:text-sm text-gray-300 dark:text-gray-400 text-center sm:text-left">
              <span className="flex items-center justify-center sm:justify-start">
                © 2024 AL Ummati Tour & Travels. Made with{" "}
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500 fill-current" />
                for the Ummah
              </span>
            </div>
            
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">Follow us:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 dark:bg-gray-600 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 hover:bg-blue-400 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}