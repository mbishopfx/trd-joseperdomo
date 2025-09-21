"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  DollarSign,
  Car,
  Users,
  Fuel,
  Shield,
  Star,
  Phone,
  FileText,
  Calculator,
  Heart,
  MapPin,
  TrendingUp,
  Clock
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function BestCarGuidePage() {
  const considerations = [
    {
      icon: Users,
      title: "Lifestyle Assessment",
      description: "Consider your daily routine, family size, and how you'll primarily use the vehicle",
      tips: [
        "Daily commute distance and traffic conditions",
        "Family size and passenger needs",
        "Cargo and storage requirements",
        "Weekend activities and hobbies"
      ]
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Understand all costs involved, not just the monthly payment",
      tips: [
        "Monthly lease payment and down payment",
        "Insurance costs (often higher for luxury vehicles)",
        "Maintenance and service costs",
        "Fuel expenses based on your driving habits"
      ]
    },
    {
      icon: Fuel,
      title: "Efficiency & Performance",
      description: "Balance performance needs with fuel efficiency and environmental impact",
      tips: [
        "Fuel economy ratings for your driving style",
        "Engine performance for your driving needs",
        "Hybrid or electric options for eco-conscious drivers",
        "All-wheel drive for weather conditions"
      ]
    },
    {
      icon: Shield,
      title: "Safety & Reliability",
      description: "Prioritize safety features and vehicle reliability ratings",
      tips: [
        "IIHS and NHTSA safety ratings",
        "Standard and available safety features",
        "Brand reliability and warranty coverage",
        "Recalls and known issues research"
      ]
    }
  ];

  const vehicleTypes = [
    {
      type: "Luxury Sedan",
      bestFor: "Professional image, comfort, fuel efficiency",
      pros: ["Professional appearance", "Comfortable ride", "Good fuel economy", "Advanced tech features"],
      cons: ["Limited cargo space", "Higher insurance costs"],
      idealClient: "Executives, daily commuters, those prioritizing comfort and image"
    },
    {
      type: "Premium SUV",
      bestFor: "Families, versatility, all-weather capability",
      pros: ["Spacious interior", "Higher seating position", "All-weather traction", "Towing capability"],
      cons: ["Higher fuel costs", "More expensive to maintain"],
      idealClient: "Families, outdoor enthusiasts, those needing cargo space"
    },
    {
      type: "Luxury Coupe",
      bestFor: "Style, performance, personal expression",
      pros: ["Stunning aesthetics", "Performance focus", "Exclusive feel", "Advanced technology"],
      cons: ["Limited practicality", "Higher maintenance"],
      idealClient: "Style-conscious individuals, performance enthusiasts, empty nesters"
    }
  ];

  const josesTips = [
    {
      icon: Star,
      tip: "Think 3-5 years ahead",
      description: "Your life might change - consider future needs like family growth or career changes."
    },
    {
      icon: Calculator,
      tip: "Test drive in real conditions",
      description: "Drive the vehicle in your actual daily conditions - highway, city traffic, parking situations."
    },
    {
      icon: Shield,
      tip: "Check total cost of ownership",
      description: "Factor in insurance, maintenance, fuel, and depreciation - not just the monthly payment."
    },
    {
      icon: Heart,
      tip: "Trust your instincts",
      description: "After all the research, choose the vehicle that feels right and makes you happy to drive."
    }
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
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="green" className="mb-4">
                <Car className="h-3 w-3 mr-1" />
                Expert Automotive Guidance
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
              Finding the{' '}
              <span className="text-green-gradient">Best Car</span>{' '}
              for You
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-200 mb-8 leading-relaxed">
              A comprehensive guide from Jose Perdomo's 10+ years of automotive expertise. 
              Learn how to choose the perfect vehicle that matches your lifestyle, budget, and needs.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Get Personal Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <FileText className="h-5 w-5 mr-2" />
                View Our Inventory
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="liquid-glass border-0 text-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-green-gradient mb-6">Jose's Expert Introduction</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      After helping over 500 clients find their perfect vehicles in my 10+ years in the automotive industry, 
                      I've learned that the "best" car isn't universal—it's the one that perfectly matches YOUR unique needs, 
                      lifestyle, and budget.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      This guide distills my years of experience into actionable insights that will help you make an informed 
                      decision. Remember, I'm always here for a personal consultation to discuss your specific situation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Considerations */}
            <motion.div className="mb-16">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Key <span className="text-blue-gradient">Considerations</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Four critical factors to evaluate before making your decision
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {considerations.map((consideration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="liquid-glass border-0 text-white h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-green-gradient rounded-lg flex items-center justify-center mb-4">
                          <consideration.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-white">{consideration.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-base">
                          {consideration.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {consideration.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start text-sm text-gray-300">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vehicle Type Guide */}
            <motion.div className="mb-16">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Vehicle Type <span className="text-green-gradient">Guide</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Understanding which vehicle type best suits your needs
                </p>
              </motion.div>

              <div className="space-y-8">
                {vehicleTypes.map((vehicle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="liquid-glass border-0 text-white">
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-3 gap-6">
                          <div>
                            <h3 className="text-2xl font-bold text-green-400 mb-2">{vehicle.type}</h3>
                            <p className="text-gray-300 mb-4">{vehicle.bestFor}</p>
                            <p className="text-sm text-blue-400 font-medium">Ideal for: {vehicle.idealClient}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                              Advantages
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-300">
                              {vehicle.pros.map((pro, proIndex) => (
                                <li key={proIndex} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                              <TrendingUp className="h-4 w-4 text-blue-400 mr-2" />
                              Considerations
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-300">
                              {vehicle.cons.map((con, conIndex) => (
                                <li key={conIndex} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Jose's Pro Tips */}
            <motion.div className="mb-16">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Jose's <span className="text-blue-gradient">Pro Tips</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Insider insights from 10+ years of automotive expertise
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {josesTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="liquid-glass border-0 text-white h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-blue-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                            <tip.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-2">{tip.tip}</h3>
                            <p className="text-sm text-gray-300">{tip.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="bubbles" intensity="subtle" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto glassmorphism-card p-8 rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Find Your Perfect Vehicle?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Let Jose's expertise guide you through the process. Schedule a personal consultation 
              to discuss your specific needs and find the ideal vehicle for your lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (XXX) XXX-XXXX
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Car className="h-5 w-5 mr-2" />
                Browse Current Inventory
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-600">
              <div className="text-center">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Quick Response</div>
                <div className="text-xs text-gray-400">Usually within 24 hours</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">No Pressure</div>
                <div className="text-xs text-gray-400">Honest, transparent advice</div>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Expert Guidance</div>
                <div className="text-xs text-gray-400">10+ years experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Related <span className="text-green-gradient">Guides</span>
            </h2>
            <p className="text-lg text-gray-300">
              Continue your automotive education with these helpful resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/guides/lease-vs-buy">
                <Card className="liquid-glass border-0 text-white h-full hover:bg-black/60 transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-green-400 transition-colors">
                      Leasing vs Buying Guide
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Understand the pros and cons of each option
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300">
                      Read Guide <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/guides/credit-requirements">
                <Card className="liquid-glass border-0 text-white h-full hover:bg-black/60 transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-green-400 transition-colors">
                      Credit Requirements Guide
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Learn about credit scores and financing options
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300">
                      Read Guide <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/guides/first-time-leasing">
                <Card className="liquid-glass border-0 text-white h-full hover:bg-black/60 transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-green-400 transition-colors">
                      First Time Leasing Tips
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Everything you need to know as a first-time leasee
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300">
                      Read Guide <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
