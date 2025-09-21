"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Shield,
  Phone,
  FileText,
  Clock,
  Car,
  Calculator,
  Users,
  Star,
  TrendingUp
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

export default function FirstTimeLeasingPage() {
  const basics = [
    { term: "Monthly Payment", definition: "Your regular lease payment, typically lower than loan payments" },
    { term: "Down Payment", definition: "Initial payment, often called 'drive-off' costs" },
    { term: "Residual Value", definition: "The vehicle's estimated worth at lease end" },
    { term: "Money Factor", definition: "The lease interest rate (multiply by 2,400 for APR equivalent)" },
    { term: "Mileage Allowance", definition: "Annual miles included (typically 10,000-15,000)" },
    { term: "Wear & Tear", definition: "Normal usage vs. excessive damage charges" }
  ];

  const steps = [
    { step: 1, title: "Determine Budget", description: "Calculate what you can afford monthly, including insurance" },
    { step: 2, title: "Research Vehicles", description: "Identify models that fit your needs and budget" },
    { step: 3, title: "Get Pre-Approved", description: "Check your credit and get pre-approved for financing" },
    { step: 4, title: "Shop & Compare", description: "Compare lease offers from multiple sources" },
    { step: 5, title: "Read the Fine Print", description: "Understand all terms, fees, and restrictions" },
    { step: 6, title: "Sign & Drive", description: "Complete paperwork and take delivery" }
  ];

  const commonMistakes = [
    { mistake: "Not Understanding Total Costs", tip: "Factor in insurance, maintenance, and potential fees" },
    { mistake: "Ignoring Mileage Limits", tip: "Estimate your annual driving accurately" },
    { mistake: "Skipping Gap Insurance", tip: "Protect yourself in case of total loss" },
    { mistake: "Not Reading Fine Print", tip: "Understand all terms and potential charges" },
    { mistake: "Focusing Only on Payment", tip: "Consider total cost and lease terms" }
  ];

  const advantages = [
    "Lower monthly payments than buying",
    "Always under manufacturer warranty", 
    "Access to latest technology",
    "No depreciation worries",
    "Easy to upgrade every few years",
    "Lower repair costs"
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
              <GraduationCap className="h-3 w-3 mr-1" />
              First-Time Leasing Guide
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your First{' '}
              <span className="text-green-gradient">Vehicle Lease</span>{' '}
              Made Simple
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Everything you need to know for your first vehicle lease. Jose's expert guidance 
              ensures you make informed decisions and avoid common first-timer mistakes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Get Expert Guidance
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Car className="h-5 w-5 mr-2" />
                View Available Vehicles
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leasing Basics */}
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
              Leasing <span className="text-blue-gradient">Basics</span> You Need to Know
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding key terms and concepts will help you navigate your first lease confidently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {basics.map((basic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-400">{basic.term}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{basic.definition}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
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
              Your <span className="text-green-gradient">Step-by-Step</span> Guide
            </h2>
            <p className="text-xl text-gray-300">
              Follow this proven process for a successful first leasing experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-white">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm text-center">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lease? */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-green-gradient">Leasing?</span>
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Leasing offers unique advantages, especially for first-time lessees who want 
                to experience driving newer vehicles with lower monthly commitments.
              </p>
              
              <div className="space-y-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{advantage}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="liquid-glass border-0 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Payment Example</h3>
                    <p className="text-gray-300 text-sm">Typical lease vs. purchase comparison</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                      <span className="text-gray-300">Lease Payment:</span>
                      <span className="text-green-400 font-bold">$450/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                      <span className="text-gray-300">Purchase Payment:</span>
                      <span className="text-blue-400 font-bold">$650/mo</span>
                    </div>
                    <div className="text-center pt-4 text-sm text-gray-400">
                      *Example based on $35,000 vehicle
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="bubbles" intensity="subtle" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Avoid These <span className="text-blue-gradient">Common Mistakes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Learn from others' experiences and make smart decisions from the start
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {commonMistakes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">{item.mistake}</h3>
                        <p className="text-sm text-gray-300">{item.tip}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jose's First-Timer Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="liquid-glass border-0 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-green-gradient">Jose's First-Timer Promise</h2>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-200 leading-relaxed mb-6 text-center">
                      "I remember my first lease experience - it was overwhelming! That's why I'm committed 
                      to making your first lease simple, transparent, and stress-free. I'll walk you through 
                      every step and ensure you understand exactly what you're signing."
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">No Pressure</div>
                        <div className="text-sm text-gray-300">Take your time to decide</div>
                      </div>
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Star className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">Clear Explanations</div>
                        <div className="text-sm text-gray-300">Every term explained</div>
                      </div>
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">Ongoing Support</div>
                        <div className="text-sm text-gray-300">Here throughout your lease</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="dots" intensity="strong" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-black/80 to-blue-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto glassmorphism-card p-8 rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Your <span className="text-green-gradient">First Lease?</span>
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Let Jose guide you through your first leasing experience with expert advice, 
              transparent pricing, and personalized service every step of the way.
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
                <FileText className="h-5 w-5 mr-2" />
                Start Your Application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
