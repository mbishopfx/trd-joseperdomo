"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building,
  TrendingUp,
  Shield,
  DollarSign,
  CheckCircle,
  Phone,
  FileText,
  Users,
  Calculator,
  Award,
  Clock,
  Briefcase
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

export default function CommercialLeasingPage() {
  const businessTypes = [
    { type: "Small Business", description: "1-5 vehicles for growing companies", vehicles: ["Sedans", "SUVs", "Pickup Trucks"] },
    { type: "Fleet Operations", description: "10+ vehicles for established businesses", vehicles: ["Commercial Vans", "Box Trucks", "Fleet Cars"] },
    { type: "Delivery Services", description: "Specialized vehicles for logistics", vehicles: ["Cargo Vans", "Step Vans", "Refrigerated Trucks"] },
    { type: "Professional Services", description: "Executive and client-facing vehicles", vehicles: ["Luxury Sedans", "Premium SUVs", "Executive Vans"] }
  ];

  const benefits = [
    { icon: DollarSign, title: "Tax Advantages", description: "Lease payments are typically 100% tax deductible" },
    { icon: TrendingUp, title: "Cash Flow Management", description: "Lower monthly payments preserve working capital" },
    { icon: Shield, title: "Warranty Coverage", description: "Vehicles stay under manufacturer warranty" },
    { icon: Calculator, title: "Predictable Costs", description: "Fixed monthly expenses for budget planning" },
    { icon: Award, title: "Fleet Management", description: "Professional fleet management services available" },
    { icon: Clock, title: "Easy Upgrades", description: "Regular fleet updates with latest technology" }
  ];

  const process = [
    { step: 1, title: "Business Assessment", description: "Analyze your business needs and vehicle requirements" },
    { step: 2, title: "Fleet Planning", description: "Design optimal fleet composition and sizing" },
    { step: 3, title: "Financial Structuring", description: "Create lease terms that maximize tax benefits" },
    { step: 4, title: "Implementation", description: "Coordinate delivery and fleet management setup" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Vehicle Leasing",
            "description": "Professional commercial vehicle leasing solutions for businesses in East Brunswick, NJ. Fleet management, tax advantages, and expert guidance.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "JP Auto Leasing LLC",
              "telephone": "(908) 416-3008",
              "email": "jpautoleasingllc@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "East Brunswick",
                "addressRegion": "NJ",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "State",
              "name": "New Jersey"
            },
            "serviceType": "Commercial Vehicle Leasing",
            "offers": {
              "@type": "Offer",
              "description": "Commercial vehicle leasing with tax advantages and fleet management"
            }
          })
        }}
      />
      
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
              <Building className="h-3 w-3 mr-1" />
              Commercial Fleet Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Commercial{' '}
              <span className="text-green-gradient">Vehicle Leasing</span>{' '}
              for East Brunswick Businesses
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Maximize your business efficiency with professional fleet leasing solutions. 
              Jose's expertise helps East Brunswick businesses optimize their vehicle costs and operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <FileText className="h-5 w-5 mr-2" />
                Get Fleet Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Types */}
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
              Solutions for Every <span className="text-blue-gradient">Business Type</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From small businesses to large fleets, we provide tailored leasing solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400">{business.type}</CardTitle>
                    <CardDescription className="text-gray-300">{business.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Popular Vehicles:</h4>
                      <div className="space-y-2">
                        {business.vehicles.map((vehicle, vehicleIndex) => (
                          <div key={vehicleIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="h-3 w-3 text-blue-400 mr-2 flex-shrink-0" />
                            {vehicle}
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

      {/* Benefits Section */}
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
              Commercial Leasing <span className="text-green-gradient">Advantages</span>
            </h2>
            <p className="text-xl text-gray-300">
              Strategic benefits that help your East Brunswick business thrive
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
                <Card className="liquid-glass border-0 text-white h-full text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
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
              Our <span className="text-blue-gradient">Fleet Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Streamlined approach to get your business fleet operational quickly
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
              Ready to Optimize Your{' '}
              <span className="text-green-gradient">Business Fleet?</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Let Jose help your East Brunswick business maximize efficiency and minimize costs 
              with professional commercial leasing solutions.
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
                <Briefcase className="h-5 w-5 mr-2" />
                Schedule Business Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
