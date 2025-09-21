"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Car,
  DollarSign,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  FileText,
  Star,
  Sparkles,
  TrendingUp,
  Calculator,
  Award
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

export default function PersonalLeasingPage() {
  const benefits = [
    { icon: DollarSign, title: "Lower Monthly Payments", description: "Significantly lower payments compared to financing" },
    { icon: Clock, title: "Always Under Warranty", description: "Enjoy peace of mind with manufacturer warranty coverage" },
    { icon: Sparkles, title: "Latest Technology", description: "Access to the newest features and safety technology" },
    { icon: TrendingUp, title: "Easy Upgrades", description: "Switch to newer models every few years" },
    { icon: Shield, title: "Maintenance Coverage", description: "Many leases include maintenance and service packages" },
    { icon: Calculator, title: "Tax Advantages", description: "Potential tax benefits for business use vehicles" }
  ];

  const process = [
    { step: 1, title: "Consultation", description: "Discuss your needs, preferences, and budget with Jose" },
    { step: 2, title: "Vehicle Selection", description: "Browse options that match your lifestyle and requirements" },
    { step: 3, title: "Terms Negotiation", description: "Jose secures the best possible lease terms for you" },
    { step: 4, title: "Approval & Delivery", description: "Complete paperwork and schedule vehicle delivery" }
  ];

  const vehicleTypes = [
    { name: "Luxury Sedans", description: "Premium comfort and performance for daily driving", popular: ["BMW 3 Series", "Mercedes C-Class", "Audi A4"] },
    { name: "SUVs & Crossovers", description: "Versatility and space for families and adventures", popular: ["BMW X5", "Mercedes GLE", "Audi Q7"] },
    { name: "Electric Vehicles", description: "Eco-friendly options with cutting-edge technology", popular: ["BMW i4", "Tesla Model 3", "Audi e-tron"] },
    { name: "Sports Cars", description: "High-performance vehicles for driving enthusiasts", popular: ["BMW M3", "Mercedes AMG", "Audi RS5"] }
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
            variants={fadeInUp}
          >
            <Badge variant="green" className="mb-4">
              <Car className="h-3 w-3 mr-1" />
              Personal Vehicle Leasing
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium{' '}
              <span className="text-green-gradient">Personal Leasing</span>{' '}
              Solutions
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Experience the luxury of driving your dream vehicle with flexible leasing options 
              tailored to your lifestyle. Jose's expertise ensures you get the best terms possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <FileText className="h-5 w-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-blue-gradient">Personal Leasing?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages that make leasing an attractive option for personal vehicle needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-gradient rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="grid" intensity="subtle" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Available <span className="text-green-gradient">Vehicle Categories</span>
            </h2>
            <p className="text-xl text-gray-300">
              From luxury sedans to high-performance sports cars, find your perfect match
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {vehicleTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400">{type.name}</CardTitle>
                    <CardDescription className="text-gray-300">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Popular Models:</h4>
                      <div className="space-y-2">
                        {type.popular.map((model, modelIndex) => (
                          <div key={modelIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="h-3 w-3 text-blue-400 mr-2 flex-shrink-0" />
                            {model}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Simple <span className="text-blue-gradient">4-Step Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              From initial consultation to driving your new vehicle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-xl font-bold text-white">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </motion.div>
            ))}
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
              Ready to Start Your{' '}
              <span className="text-green-gradient">Personal Leasing Journey?</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Let Jose's expertise guide you through the personal leasing process. 
              Get expert advice, competitive terms, and personalized service.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90 text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-8 py-4"
              >
                <Car className="h-5 w-5 mr-2" />
                View Available Vehicles
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
