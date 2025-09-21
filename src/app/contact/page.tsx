"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  User,
  Car,
  DollarSign,
  Star,
  CheckCircle
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    budget: '',
    timeframe: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // You might want to show an error state here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Jose Directly",
      description: "Speak with Jose for immediate assistance",
      contact: "(XXX) XXX-XXXX",
      action: "Call Now",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "info@jpautoleasing.com",
      action: "Send Email",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Our Location",
      description: "Schedule an in-person consultation",
      contact: "Your Location, State",
      action: "Get Directions",
      gradient: "from-green-500 to-green-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "By Appointment" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <BackgroundAnimation variant="dots" intensity="subtle" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/20 to-blue-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="green" className="mb-4">
                <MessageCircle className="h-3 w-3 mr-1" />
                Get In Touch
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact{' '}
              <span className="text-green-gradient">JP Auto Leasing</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-200 mb-8 leading-relaxed">
              Ready to find your perfect vehicle? Jose is here to help with personalized service 
              and over 10 years of automotive expertise.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (XXX) XXX-XXXX
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                Send Message Below
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="liquid-glass border-0 text-white h-full text-center">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{method.title}</CardTitle>
                    <CardDescription className="text-gray-300">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-lg font-semibold text-green-400">
                      {method.contact}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Business Info */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="grid" intensity="subtle" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="liquid-glass border-0 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white text-center mb-2">
                      {isSubmitted ? "Message Sent!" : "Send Us a Message"}
                    </CardTitle>
                    <CardDescription className="text-center text-gray-300">
                      {isSubmitted 
                        ? "Thank you! Jose will get back to you within 24 hours."
                        : "Tell us about your automotive needs and Jose will personally respond"
                      }
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Message Received!</h3>
                        <p className="text-gray-300 mb-6">
                          Jose will personally review your message and respond within 24 hours.
                        </p>
                        <Button 
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                              name: '', email: '', phone: '', vehicleType: '',
                              budget: '', timeframe: '', message: ''
                            });
                          }}
                          variant="outline"
                          className="border-green-500 text-green-400 hover:bg-green-600 hover:text-white"
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Full Name *</label>
                            <Input
                              name="name"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Email *</label>
                            <Input
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Phone Number *</label>
                            <Input
                              name="phone"
                              type="tel"
                              placeholder="(XXX) XXX-XXXX"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Vehicle Type</label>
                            <select
                              name="vehicleType"
                              value={formData.vehicleType}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Select vehicle type</option>
                              <option value="SUV">SUV</option>
                              <option value="Sedan">Sedan</option>
                              <option value="Coupe">Coupe</option>
                              <option value="Convertible">Convertible</option>
                              <option value="Truck">Truck</option>
                              <option value="Other">Other / Not Sure</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Monthly Budget</label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Select budget range</option>
                              <option value="Under $400">Under $400/month</option>
                              <option value="$400-$600">$400-$600/month</option>
                              <option value="$600-$800">$600-$800/month</option>
                              <option value="$800-$1200">$800-$1200/month</option>
                              <option value="Over $1200">Over $1200/month</option>
                              <option value="Not Sure">Not Sure</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Timeframe</label>
                            <select
                              name="timeframe"
                              value={formData.timeframe}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">When do you need it?</option>
                              <option value="ASAP">As soon as possible</option>
                              <option value="This Month">This month</option>
                              <option value="Next Month">Next month</option>
                              <option value="2-3 Months">In 2-3 months</option>
                              <option value="Just Looking">Just looking around</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">Message</label>
                          <textarea
                            name="message"
                            rows={4}
                            placeholder="Tell Jose about your specific needs, preferences, or any questions you have..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className="flex w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-green-gradient hover:opacity-90 text-lg py-3" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending Message...
                            </div>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              Send Message to Jose
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Business Info Sidebar */}
            <div className="space-y-8">
              
              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="liquid-glass border-0 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Clock className="h-5 w-5 mr-2 text-green-400" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-300">{schedule.day}</span>
                        <span className="font-medium text-white">{schedule.hours}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="liquid-glass border-0 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Star className="h-5 w-5 mr-2 text-green-400" />
                      Why Choose JP Auto Leasing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">10+ years of automotive expertise</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">Personal consultation with every client</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">Access to thousands of vehicles</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">Transparent pricing, no hidden fees</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">Credit assistance and guidance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="liquid-glass border-0 text-white">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-400">500+</div>
                        <div className="text-xs text-gray-400">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">5.0</div>
                        <div className="text-xs text-gray-400">Client Rating</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">10+</div>
                        <div className="text-xs text-gray-400">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">24hr</div>
                        <div className="text-xs text-gray-400">Response Time</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
