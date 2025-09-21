"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CreditCard,
  TrendingUp,
  Shield,
  CheckCircle,
  Phone,
  FileText,
  Star,
  Award,
  AlertCircle,
  DollarSign,
  Clock,
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

export default function CreditRequirementsPage() {
  const creditTiers = [
    {
      tier: "Excellent Credit",
      score: "750+",
      benefits: ["Best available rates", "Minimal down payment", "Premium vehicle access", "Fastest approval"],
      color: "bg-green-gradient",
      textColor: "text-green-400",
      description: "Qualify for the most competitive lease terms and premium vehicle options."
    },
    {
      tier: "Good Credit", 
      score: "650-749",
      benefits: ["Competitive rates", "Standard terms", "Wide vehicle selection", "Quick approval"],
      color: "bg-blue-gradient",
      textColor: "text-blue-400",
      description: "Access to most vehicles with favorable terms and competitive rates."
    },
    {
      tier: "Fair Credit",
      score: "550-649", 
      benefits: ["Specialized programs", "Credit improvement options", "Flexible terms", "Expert guidance"],
      color: "bg-yellow-500",
      textColor: "text-yellow-400",
      description: "Special programs available with personalized assistance from Jose."
    },
    {
      tier: "Building Credit",
      score: "Under 550",
      benefits: ["Credit building programs", "Co-signer options", "Fresh start opportunities", "Personal consultation"],
      color: "bg-orange-500", 
      textColor: "text-orange-400",
      description: "Specialized solutions to help you get approved and improve your credit."
    }
  ];

  const improvementTips = [
    {
      icon: TrendingUp,
      title: "Pay Bills On Time",
      description: "Payment history is the most important factor affecting your credit score"
    },
    {
      icon: CreditCard,
      title: "Lower Credit Utilization",
      description: "Keep credit card balances below 30% of available limits"
    },
    {
      icon: Clock,
      title: "Don't Close Old Accounts", 
      description: "Length of credit history positively impacts your score"
    },
    {
      icon: Shield,
      title: "Monitor Your Credit",
      description: "Regular monitoring helps catch errors and track improvement"
    }
  ];

  const requirements = [
    { category: "Income Verification", items: ["Recent pay stubs", "Tax returns (if self-employed)", "Bank statements", "Employment verification"] },
    { category: "Identification", items: ["Valid driver's license", "Social Security card", "Proof of residence", "Insurance information"] },
    { category: "Credit Information", items: ["Credit score and report", "Previous auto loans", "Current debt obligations", "Co-signer info (if applicable)"] }
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
              <CreditCard className="h-3 w-3 mr-1" />
              Credit & Financing Guide
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Credit{' '}
              <span className="text-green-gradient">Requirements</span>{' '}
              Guide
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Understand credit requirements for vehicle leasing and discover how Jose can help 
              you get approved regardless of your current credit situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Get Pre-Approved Today
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <FileText className="h-5 w-5 mr-2" />
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credit Tiers Section */}
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
              Credit <span className="text-blue-gradient">Tiers & Opportunities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all credit levels to find you the best possible terms and vehicle options
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {creditTiers.map((tier, index) => (
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
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 ${tier.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <CreditCard className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${tier.textColor}`}>{tier.score}</div>
                        <div className="text-xs text-gray-400">Credit Score</div>
                      </div>
                    </div>
                    <CardTitle className={`text-xl ${tier.textColor}`}>{tier.tier}</CardTitle>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Available Benefits:</h4>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className={`h-4 w-4 ${tier.textColor} mr-2 mt-0.5 flex-shrink-0`} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
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
              Application <span className="text-green-gradient">Requirements</span>
            </h2>
            <p className="text-xl text-gray-300">
              What you'll need to complete your lease application
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-400">{req.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {req.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

      {/* Credit Improvement Tips */}
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
              Improve Your <span className="text-blue-gradient">Credit Score</span>
            </h2>
            <p className="text-xl text-gray-300">
              Simple steps to boost your credit and qualify for better terms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {improvementTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <tip.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{tip.title}</h3>
                <p className="text-sm text-gray-300">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jose's Promise */}
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
                    <div className="w-20 h-20 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-green-gradient">Jose's Credit Promise</h2>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-200 leading-relaxed mb-4 text-center">
                      "In my 10+ years in the automotive industry, I've learned that everyone's credit story is unique. 
                      Whether you have excellent credit or are working to rebuild, I'm committed to finding you 
                      a solution that works."
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">No Judgment</div>
                        <div className="text-sm text-gray-300">Confidential, respectful service</div>
                      </div>
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Star className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">Expert Guidance</div>
                        <div className="text-sm text-gray-300">Personalized solutions</div>
                      </div>
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">Best Efforts</div>
                        <div className="text-sm text-gray-300">We work hard for approvals</div>
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
              Ready to Get <span className="text-green-gradient">Pre-Approved?</span>
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              No matter your credit situation, Jose will work to find you a solution. 
              Get started with a free, no-obligation consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
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
                Start Credit Application
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-600">
              <div className="text-center">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Quick Process</div>
                <div className="text-xs text-gray-400">Same day decisions available</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Secure Application</div>
                <div className="text-xs text-gray-400">Your information is protected</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Expert Review</div>
                <div className="text-xs text-gray-400">Jose reviews every application</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
