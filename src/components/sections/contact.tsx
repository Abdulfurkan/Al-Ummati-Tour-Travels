import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Globe,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 94143 11012"],
    description: "Call us anytime for immediate assistance",
    color: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    details: ["+91 94143 11012"],
    description: "Quick responses via WhatsApp",
    color: "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@alummati.com", "bookings@alummati.com"],
    description: "Send us your queries anytime",
    color: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["H, 903, Haldion Ka Rasta, Johri Bazar", "4th Crossing, Ramganj Bazar, Jaipur, Rajasthan 302003"],
    description: "Visit our office for consultation",
    color: "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950"
  }
];

const workingHours = [
  { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
  { day: "Saturday", time: "10:00 AM - 6:00 PM" },
  { day: "Sunday", time: "12:00 PM - 5:00 PM" }
];

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact AL Ummati Tour & Travels
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your spiritual journey? Our travel experts are here to help you 
            plan the perfect Umrah or Hajj experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Send className="w-6 h-6 mr-3 text-emerald-600" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="+91 94143 11012" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white">
                    <option value="">Select a service</option>
                    <option value="umrah">Umrah Package</option>
                    <option value="hajj">Hajj Package</option>
                    <option value="visa">Visa Services</option>
                    <option value="hotel">Hotel Booking</option>
                    <option value="custom">Custom Package</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Travel Date
                  </label>
                  <Input type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Number of Travelers
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white">
                    <option value="">Select number</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3-5 People</option>
                    <option value="6-10">6-10 People</option>
                    <option value="10+">More than 10</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements, questions, or any special needs..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  We respect your privacy. Your information will not be shared with third parties.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700 dark:text-gray-300 font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Working Hours */}
            <Card className="shadow-md border-0 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{schedule.day}</span>
                    <span className="text-gray-900 dark:text-white font-medium">{schedule.time}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-emerald-600 font-medium">
                    Emergency support available 24/7
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-md border-0 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-emerald-600" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                  Stay updated with our latest packages and travel tips
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}