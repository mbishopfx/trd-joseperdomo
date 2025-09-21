"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award,
  Shield,
  CheckCircle,
  Phone,
  FileText,
  Clock
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WarrantiesPage() {
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
              <Award className="h-3 w-3 mr-1" />
              Extended Warranties
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Extended{' '}
              <span className="text-green-gradient">Warranty Protection</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive extended warranty options for your peace of mind in East Brunswick.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Shield className="h-5 w-5 mr-2" />
                Learn About Coverage
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Comprehensive Coverage", description: "Engine, transmission, and major component protection" },
              { icon: Clock, title: "Extended Protection", description: "Coverage beyond manufacturer warranty" },
              { icon: Award, title: "Nationwide Service", description: "Accepted at authorized service centers nationwide" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.description}</p>
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
              Protect Your Vehicle's{' '}
              <span className="text-green-gradient">Future</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Extend your peace of mind with comprehensive warranty coverage for your leased vehicle in East Brunswick.
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
                  <Shield className="h-5 w-5 mr-2" />
                  Learn About Coverage
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
