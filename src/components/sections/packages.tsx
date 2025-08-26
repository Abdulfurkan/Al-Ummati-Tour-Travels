import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { FadeIn } from "@/components/ui/fade-in";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Star,
  Plane,
  Building,
  Utensils,
  Car,
  CheckCircle
} from "lucide-react";

const packages = [
  {
    type: "Umrah",
    title: "Economy Umrah Package",
    duration: "14-18 Days",
    price: "₹80,000",
    originalPrice: "₹1,49,999",
    rating: 4.8,
    reviews: 324,
    popular: false,
    features: [
      "Round-trip flights",
      "3-star hotel (500m from Haram)",
      "Shared room accommodation", 
      "Daily breakfast",
      "Group guidance",
      "Visa processing",
      "Airport transfers",
      "Zam-Zam 5 Litre water bottle"
    ],
    highlights: [
      "Best value for money",
      "Perfect for first-time pilgrims",
      "English-speaking guide"
    ]
  },
  {
    type: "Umrah",
    title: "Premium Umrah Package", 
    duration: "25 - 30 Days",
    price: "₹1,30,999",
    originalPrice: "₹2,24,999",
    rating: 4.9,
    reviews: 186,
    popular: true,
    features: [
      "Business class flights",
      "4-star hotel (200m from Haram)",
      "Private room with Haram view",
      "All meals included",
      "Private guide available",
      "Express visa processing",
      "Luxury transportation",
      "Ziyarat tours included",
      "Zam-Zam 5 Litre water bottle"
    ],
    highlights: [
      "Most popular choice",
      "Luxury experience",
      "Additional Medina stay"
    ]
  },
  {
    type: "Hajj",
    title: "Complete Hajj Package",
    duration: "45 Days", 
    price: "₹8,14,999",
    originalPrice: "₹12,57,999",
    rating: 4.9,
    reviews: 89,
    popular: false,
    features: [
      "Premium flights",
      "5-star hotels throughout",
      "All Hajj rituals guided",
      "Premium tent in Mina",
      "VIP transportation", 
      "All meals included",
      "24/7 medical support",
      "Experienced Hajj guide",
      "Complete ritual kit",
      "Zam-Zam 5 Litre water bottle"
    ],
    highlights: [
      "Complete Hajj experience",
      "Expert ritual guidance",
      "Premium accommodations"
    ]
  }
];

export default function Packages() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
              Featured Packages
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your Sacred Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Carefully designed packages to suit every budget and preference. 
              All packages include expert guidance and complete support.
            </p>
          </div>
        </FadeIn>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up">
              <Card 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 cursor-pointer ${
                  pkg.popular ? 'ring-2 ring-emerald-500 shadow-lg scale-105' : 'shadow-md'
                }`}
              >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={pkg.type === 'Umrah' ? 'default' : 'secondary'}
                    className={pkg.type === 'Umrah' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}
                  >
                    {pkg.type}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    {pkg.rating} ({pkg.reviews})
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {pkg.title}
                </CardTitle>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">per person</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, highlightIndex) => (
                      <Badge 
                        key={highlightIndex} 
                        variant="outline" 
                        className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <EnhancedButton 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-emerald-600 hover:bg-emerald-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                  >
                    Book Now
                  </EnhancedButton>
                  <EnhancedButton variant="outline" className="w-full">
                    View Details
                  </EnhancedButton>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.8}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-800 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Every pilgrimage is unique. Let us create a personalized package that meets 
                your specific needs, budget, and preferences.
              </p>
              <EnhancedButton size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Users className="w-5 h-5 mr-2" />
                Get Custom Quote
              </EnhancedButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}