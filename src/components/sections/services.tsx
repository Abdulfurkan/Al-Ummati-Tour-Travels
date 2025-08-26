import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { FadeIn } from "@/components/ui/fade-in";
import { 
  Plane, 
  Building, 
  MapPin, 
  FileText, 
  Car, 
  Users,
  Shield,
  Clock,
  Phone
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Umrah Packages",
    description: "Complete Umrah packages with flights, accommodation, and guided tours",
    features: ["Round-trip flights", "Hotel near Haram", "Group guidance", "Visa processing"],
    color: "emerald"
  },
  {
    icon: Building,
    title: "Hajj Packages",
    description: "Comprehensive Hajj packages for the sacred pilgrimage experience",
    features: ["All rituals included", "Expert guidance", "Premium accommodation", "Transportation"],
    color: "blue"
  },
  {
    icon: MapPin,
    title: "Hotel Booking",
    description: "Premium hotels close to Masjid al-Haram and Masjid an-Nabawi",
    features: ["5-star hotels", "Walking distance", "Buffet meals", "AC rooms"],
    color: "purple"
  },
  {
    icon: FileText,
    title: "Visa Services",
    description: "Hassle-free visa processing with 100% success rate",
    features: ["Document assistance", "Fast processing", "Multiple entries", "Expert support"],
    color: "orange"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Comfortable transport for all your travel needs",
    features: ["Airport transfers", "Ziyarat tours", "AC vehicles", "Professional drivers"],
    color: "red"
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Join our organized group tours with fellow pilgrims",
    features: ["Small groups", "Experienced guide", "Spiritual lectures", "Shared experiences"],
    color: "green"
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    emerald: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950 dark:border-emerald-800",
    blue: "text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-950 dark:border-blue-800",
    purple: "text-purple-600 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-950 dark:border-purple-800",
    orange: "text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-950 dark:border-orange-800",
    red: "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-950 dark:border-red-800",
    green: "text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-950 dark:border-green-800"
  };
  return colors[color as keyof typeof colors] || colors.emerald;
};

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Complete Travel Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From visa processing to accommodation, we handle every aspect of your sacred journey 
              with care and professionalism.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <Card 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md dark:bg-gray-800 dark:hover:shadow-xl cursor-pointer"
                >
                  <CardHeader className="space-y-4">
                    <div className={`w-16 h-16 rounded-xl ${colorClasses} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto hover:shadow-xl transition-all duration-300">
              <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our travel experts are available 24/7 to help you plan your perfect pilgrimage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <EnhancedButton 
                  href="tel:+919414311012" 
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  Call Now
                </EnhancedButton>
                <EnhancedButton 
                  href="https://wa.me/919414311012" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white hover:bg-green-700"
                >
                  <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                  WhatsApp
                </EnhancedButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}