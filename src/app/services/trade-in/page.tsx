"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RefreshCw,
  DollarSign,
  CheckCircle,
  Phone,
  FileText,
  Calculator,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TradeInPage() {
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
              <RefreshCw className="h-3 w-3 mr-1" />
              Vehicle Trade-In Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Maximize Your{' '}
              <span className="text-green-gradient">Trade-In Value</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get the best value for your current vehicle with Jose's expert trade-in evaluation 
              and negotiation services in East Brunswick.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Calculator className="h-5 w-5 mr-2" />
                Get Trade-In Quote
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
              Why Choose Our <span className="text-blue-gradient">Trade-In Service?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the maximum value for your current vehicle with Jose's expert evaluation process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Maximum Value</h3>
              <p className="text-sm text-gray-300">Professional evaluation ensures you get the highest possible trade-in value</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Quick Process</h3>
              <p className="text-sm text-gray-300">Fast, efficient evaluation and paperwork handling</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Transparent Process</h3>
              <p className="text-sm text-gray-300">Clear explanation of how your vehicle's value is determined</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Simple <span className="text-green-gradient">Trade-In Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              From evaluation to completion in just a few easy steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Vehicle Inspection", description: "Comprehensive evaluation of your vehicle's condition" },
              { step: 2, title: "Market Analysis", description: "Current market value assessment and comparison" },
              { step: 3, title: "Value Presentation", description: "Clear explanation of your vehicle's trade-in value" },
              { step: 4, title: "Paperwork & Transfer", description: "Handle all documentation and title transfer" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">{step.step}</span>
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
              Ready to Get Your{' '}
              <span className="text-green-gradient">Trade-In Value?</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Get a professional evaluation of your current vehicle and maximize your trade-in value 
              with Jose's expert assessment in East Brunswick.
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
                  <Calculator className="h-5 w-5 mr-2" />
                  Get Trade-In Quote
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
