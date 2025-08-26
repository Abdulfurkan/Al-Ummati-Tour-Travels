import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-blue-600/10 dark:from-emerald-400/5 dark:via-transparent dark:to-blue-400/5" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Badge */}
          <FadeIn delay={0.2}>
            <Badge variant="outline" className="mb-2 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-white/80 dark:bg-gray-800/80 border-emerald-200 dark:border-emerald-400">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-yellow-400 text-yellow-400" />
              Trusted by 10,000+ Pilgrims
            </Badge>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.4}>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="text-emerald-600 dark:text-emerald-400">AL Ummati</span>
                <br />
                Tour &amp; Travels
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Your trusted partner for sacred journeys to{" "}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Umrah</span> and{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Hajj</span>
              </p>
            </div>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.6}>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
              Experience the spiritual journey of a lifetime with our carefully crafted packages, 
              expert guidance, and dedicated support throughout your pilgrimage.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <EnhancedButton 
                size="lg" 
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Explore Umrah Packages</span>
              </EnhancedButton>
              <EnhancedButton 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Get Free Consultation</span>
              </EnhancedButton>
            </div>
          </FadeIn>

          {/* Features */}
          <FadeIn delay={1.0}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto px-2 sm:px-0">
              <FadeIn delay={1.2} direction="up">
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
              </FadeIn>
              <FadeIn delay={1.4} direction="up">
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Customer Support</div>
                </div>
              </FadeIn>
              <FadeIn delay={1.6} direction="up">
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Visa Success Rate</div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}