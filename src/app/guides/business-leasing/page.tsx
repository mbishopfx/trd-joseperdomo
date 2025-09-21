"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase,
  TrendingUp,
  DollarSign,
  CheckCircle,
  Phone,
  FileText,
  Building,
  Calculator
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BusinessLeasingPage() {
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
              <Briefcase className="h-3 w-3 mr-1" />
              Business Leasing Guide
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart{' '}
              <span className="text-green-gradient">Business Leasing</span>{' '}
              Strategies
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive guide to business vehicle leasing in East Brunswick. 
              Maximize tax benefits and optimize cash flow with Jose's expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Building className="h-5 w-5 mr-2" />
                Business Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Benefits */}
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
              Business Leasing <span className="text-blue-gradient">Advantages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic benefits that help your East Brunswick business thrive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: "Tax Deductions", description: "100% deductible lease payments for business use" },
              { icon: TrendingUp, title: "Cash Flow", description: "Lower monthly payments preserve working capital" },
              { icon: Calculator, title: "Predictable Costs", description: "Fixed monthly expenses for budget planning" },
              { icon: Building, title: "Fleet Management", description: "Professional fleet coordination services" },
              { icon: CheckCircle, title: "Warranty Coverage", description: "Vehicles stay under manufacturer warranty" },
              { icon: Briefcase, title: "Professional Image", description: "Always drive newer, well-maintained vehicles" }
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

      {/* Tax Benefits Section */}
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
                Maximize Your <span className="text-green-gradient">Tax Benefits</span>
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Business vehicle leasing offers significant tax advantages for East Brunswick businesses. 
                Jose's expertise helps you structure leases to maximize deductions.
              </p>
              
              <div className="space-y-4">
                {[
                  "100% deductible lease payments for business use",
                  "No depreciation calculations required",
                  "Lower alternative minimum tax impact",
                  "Simplified tax reporting and bookkeeping",
                  "Potential Section 179 deduction benefits",
                  "Professional tax planning guidance"
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
              <h3 className="text-2xl font-bold text-green-400 mb-6">Tax Savings Example</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                  <span className="text-gray-300">Annual Lease Payments:</span>
                  <span className="text-white font-bold">$12,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                  <span className="text-gray-300">Tax Deduction (100%):</span>
                  <span className="text-green-400 font-bold">$12,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                  <span className="text-gray-300">Tax Savings (25% bracket):</span>
                  <span className="text-blue-400 font-bold">$3,000</span>
                </div>
                <div className="text-center pt-4 text-sm text-gray-400">
                  *Consult your tax professional for specific benefits
                </div>
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
              Ready to Optimize Your{' '}
              <span className="text-green-gradient">Business Fleet?</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Let Jose help your East Brunswick business maximize tax benefits and minimize costs 
              with strategic business vehicle leasing.
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
                  <Building className="h-5 w-5 mr-2" />
                  Business Consultation
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
