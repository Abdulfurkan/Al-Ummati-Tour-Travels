import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  Users, 
  Award,
  Heart,
  Globe,
  CheckCircle,
  Star
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "100% Trusted & Licensed",
    description: "Fully licensed travel agency with government approvals and certifications",
    color: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950"
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over a decade of expertise in organizing successful Umrah and Hajj journeys",
    color: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950"
  },
  {
    icon: Users,
    title: "10,000+ Happy Pilgrims",
    description: "Thousands of satisfied customers who trust us for their sacred journeys",
    color: "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support throughout your entire journey",
    color: "text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-950"
  },
  {
    icon: CheckCircle,
    title: "100% Visa Success",
    description: "Perfect track record in visa processing with expert documentation support",
    color: "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950"
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Individual attention and customized solutions for every pilgrim's needs",
    color: "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-950"
  }
];

const testimonials = [
  {
    name: "Ahmed Hassan",
    location: "New York, USA",
    rating: 5,
    text: "Exceptional service from start to finish. The team made our Umrah journey smooth and memorable. Highly recommended!",
    package: "Premium Umrah Package"
  },
  {
    name: "Fatima Ali",
    location: "London, UK", 
    rating: 5,
    text: "Professional, caring, and reliable. They handled everything perfectly, allowing us to focus on our spiritual journey.",
    package: "Family Umrah Package"
  },
  {
    name: "Mohammed Khan",
    location: "Toronto, Canada",
    rating: 5,
    text: "Third time using AL Ummati for our family's Umrah. They never disappoint and always exceed expectations.",
    package: "Economy Umrah Package"
  }
];

const stats = [
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "10,000+", label: "Happy Pilgrims", icon: Users },
  { number: "100%", label: "Visa Success", icon: CheckCircle },
  { number: "24/7", label: "Support Available", icon: Clock }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Your Trusted Pilgrimage Partner
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over 15 years of experience and thousands of satisfied pilgrims, 
            we're committed to making your sacred journey exceptional.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Pilgrims Say
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real experiences from our valued customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{testimonial.location}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.package}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Begin Your Sacred Journey?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied pilgrims who have trusted us with their 
              most important spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Start Planning Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}