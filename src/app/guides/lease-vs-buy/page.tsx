"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  DollarSign,
  Car,
  TrendingUp,
  Shield,
  Clock,
  Phone,
  FileText,
  Calculator,
  XCircle,
  Award,
  Users
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

export default function LeaseVsBuyGuidePage() {
  const leasingPros = [
    "Lower monthly payments",
    "Always under warranty", 
    "Access to latest technology",
    "No depreciation concerns",
    "Easy to upgrade",
    "Lower repair costs",
    "Potential tax benefits"
  ];

  const leasingCons = [
    "No ownership equity",
    "Mileage restrictions", 
    "Wear and tear charges",
    "Continuous payments",
    "Early termination fees"
  ];

  const buyingPros = [
    "Build ownership equity",
    "No mileage restrictions",
    "Freedom to modify",
    "Can sell anytime", 
    "No wear charges",
    "Eventually no payments"
  ];

  const buyingCons = [
    "Higher monthly payments",
    "Depreciation losses",
    "Higher repair costs",
    "Responsible for maintenance",
    "Technology becomes outdated",
    "Higher down payment"
  ];

  const scenarios = [
    {
      title: "Choose Leasing If:",
      icon: CheckCircle,
      color: "text-green-400",
      items: [
        "You want lower monthly payments",
        "You like driving newer vehicles", 
        "You drive less than 15,000 miles/year",
        "You prefer predictable costs",
        "You want warranty coverage",
        "You use vehicle for business"
      ]
    },
    {
      title: "Choose Buying If:",
      icon: Award,
      color: "text-blue-400", 
      items: [
        "You want to build equity",
        "You drive more than 15,000 miles/year",
        "You keep vehicles long-term",
        "You want modification freedom",
        "You prefer ownership",
        "You want to eliminate car payments"
      ]
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
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Badge variant="green" className="mb-4">
              <Calculator className="h-3 w-3 mr-1" />
              Financial Guidance
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Leasing vs{' '}
              <span className="text-green-gradient">Buying</span>{' '}
              Guide
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Make an informed decision with Jose's expert analysis of the pros and cons 
              of vehicle leasing versus buying. Find the option that best fits your lifestyle and financial goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Get Personal Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Car className="h-5 w-5 mr-2" />
                View Inventory
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
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
              <span className="text-green-gradient">Leasing</span> vs{' '}
              <span className="text-blue-gradient">Buying</span> Comparison
            </h2>
            <p className="text-xl text-gray-300">
              Understanding the key differences to make the best decision for your situation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Leasing Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="liquid-glass border-0 text-white h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-green-400">Vehicle Leasing</CardTitle>
                  <CardDescription className="text-gray-300">
                    Lower payments, newer technology, warranty coverage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-2">
                        {leasingPros.map((pro, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <XCircle className="h-5 w-5 text-red-400 mr-2" />
                        Considerations
                      </h4>
                      <ul className="space-y-2">
                        {leasingCons.map((con, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Buying Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="liquid-glass border-0 text-white h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-400">Vehicle Buying</CardTitle>
                  <CardDescription className="text-gray-300">
                    Build equity, ownership freedom, long-term value
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-2">
                        {buyingPros.map((pro, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <XCircle className="h-5 w-5 text-red-400 mr-2" />
                        Considerations
                      </h4>
                      <ul className="space-y-2">
                        {buyingCons.map((con, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
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
              Which Option Is <span className="text-green-gradient">Right for You?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Use this guide to determine the best choice based on your specific situation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardHeader>
                    <CardTitle className={`text-xl ${scenario.color} flex items-center`}>
                      <scenario.icon className="h-6 w-6 mr-3" />
                      {scenario.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {scenario.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className={`h-4 w-4 ${scenario.color} mr-3 mt-0.5 flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Analysis */}
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
                  <h2 className="text-3xl font-bold text-green-gradient mb-6">Jose's Expert Analysis</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      After 10+ years in the automotive industry, I've helped countless clients navigate this decision. 
                      The choice between leasing and buying isn't just about money—it's about matching your vehicle 
                      solution to your lifestyle, financial goals, and personal preferences.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      <strong className="text-green-400">For most clients seeking luxury and premium vehicles</strong>, 
                      leasing offers compelling advantages: lower payments, warranty protection, and access to the 
                      latest technology. This is especially true if you prefer driving newer vehicles and stay 
                      within typical mileage limits.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      However, if you're someone who drives extensively, prefers long-term ownership, or wants to 
                      build equity, buying might be your better option. The key is having an honest conversation 
                      about your priorities and financial situation.
                    </p>
                  </div>
                </CardContent>
              </Card>
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
              Still Not Sure Which Option Is Best?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Schedule a free consultation with Jose. He'll analyze your specific situation 
              and help you make the decision that's right for you.
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
                Schedule Free Consultation
              </Button>
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
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/guides/best-car-for-you">
              <Card className="liquid-glass border-0 text-white h-full hover:bg-black/60 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-green-400 transition-colors">
                    Finding the Best Car
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300">
                    Read Guide <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/guides/credit-requirements">
              <Card className="liquid-glass border-0 text-white h-full hover:bg-black/60 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-green-400 transition-colors">
                    Credit Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300">
                    Read Guide <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/guides/first-time-leasing">
              <Card className="liquid-glass border-0 text-white h-full hover:bg-black/60 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-green-400 transition-colors">
                    First Time Leasing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300">
                    Read Guide <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
