"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield,
  CheckCircle,
  Phone,
  FileText,
  Award,
  Clock
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="relative pt-24 pb-16 overflow-hidden">
        <BackgroundAnimation variant="dots" intensity="subtle" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/20 to-blue-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="green" className="mb-4">
              <Shield className="h-3 w-3 mr-1" />
              Insurance Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete{' '}
              <span className="text-green-gradient">Insurance Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive insurance guidance and coordination for your leased vehicles in East Brunswick.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <FileText className="h-5 w-5 mr-2" />
                Get Insurance Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Types Section */}
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
              Complete <span className="text-blue-gradient">Insurance Coverage</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive insurance solutions for your leased vehicles in East Brunswick
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Full Coverage", description: "Comprehensive collision and liability coverage" },
              { icon: Award, title: "Gap Insurance", description: "Protection against total loss situations" },
              { icon: CheckCircle, title: "Lease Protection", description: "Specialized coverage for leased vehicles" },
              { icon: Clock, title: "Claims Support", description: "24/7 assistance with insurance claims" },
              { icon: FileText, title: "Documentation", description: "Complete insurance paperwork handling" },
              { icon: Phone, title: "Direct Support", description: "Personal assistance from Jose" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Insurance Services */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="grid" intensity="subtle" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="text-green-gradient">Insurance Services?</span>
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Protecting your leased vehicle investment with comprehensive coverage and expert guidance 
                throughout East Brunswick and New Jersey.
              </p>
              
              <div className="space-y-4">
                {[
                  "Expert guidance on coverage requirements",
                  "Competitive rates from top insurers",
                  "Specialized lease protection options",
                  "Claims assistance and support",
                  "Gap insurance recommendations",
                  "Complete documentation handling"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl glassmorphism-card"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6">Insurance Checklist</h3>
              <div className="space-y-4">
                {[
                  "Liability Coverage (NJ Requirements)",
                  "Comprehensive & Collision",
                  "Gap Insurance Protection",
                  "Uninsured Motorist Coverage",
                  "Personal Injury Protection",
                  "Lease-End Protection"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-blue-gradient rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </div>
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
              Protect Your{' '}
              <span className="text-green-gradient">Investment Today</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Get comprehensive insurance coverage for your leased vehicle with Jose's expert guidance 
              and competitive rates in East Brunswick.
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
                asChild
              >
                <a href="/contact">
                  <FileText className="h-5 w-5 mr-2" />
                  Get Insurance Quote
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
