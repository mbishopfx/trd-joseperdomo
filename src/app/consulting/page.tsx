"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Shield, 
  Star,
  Phone,
  FileText,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Car,
  Award,
  MessageCircle,
  Lightbulb,
  Target,
  BarChart,
  Calculator
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

export default function ConsultingPage() {
  const consultingServices = [
    {
      icon: Target,
      title: "Vehicle Selection Guidance",
      description: "Get expert advice on choosing the perfect vehicle for your specific needs, lifestyle, and budget.",
      features: [
        "Lifestyle assessment and matching",
        "Budget optimization strategies",
        "Performance vs. efficiency analysis",
        "Future needs consideration"
      ],
      duration: "60-90 minutes",
      price: "Complimentary"
    },
    {
      icon: Calculator,
      title: "Financial Analysis & Planning",
      description: "Comprehensive analysis of lease terms, total cost of ownership, and financing options.",
      features: [
        "Lease vs. buy comparison",
        "Total cost analysis",
        "Payment structure optimization",
        "Credit improvement strategies"
      ],
      duration: "45-60 minutes",
      price: "Complimentary"
    },
    {
      icon: BarChart,
      title: "Market Insights & Timing",
      description: "Leverage Jose's market knowledge to time your lease for maximum value and selection.",
      features: [
        "Market trend analysis",
        "Seasonal pricing insights",
        "Model year transition timing",
        "Incentive optimization"
      ],
      duration: "30-45 minutes",
      price: "Complimentary"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Jose learns about your needs, preferences, and circumstances",
      icon: MessageCircle,
      duration: "30 minutes"
    },
    {
      step: 2,
      title: "Market Research",
      description: "Jose researches available options and negotiates best terms",
      icon: TrendingUp,
      duration: "24-48 hours"
    },
    {
      step: 3,
      title: "Recommendations",
      description: "Personalized recommendations with detailed analysis",
      icon: Lightbulb,
      duration: "30 minutes"
    },
    {
      step: 4,
      title: "Execution",
      description: "Jose handles paperwork, negotiations, and delivery coordination",
      icon: CheckCircle,
      duration: "Ongoing"
    }
  ];

  const whyChooseJose = [
    {
      icon: Star,
      title: "10+ Years Experience",
      description: "Over a decade of automotive industry expertise and market knowledge"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Proven track record of successful automotive consultations"
    },
    {
      icon: Shield,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges or hidden costs"
    },
    {
      icon: Award,
      title: "Personal Attention",
      description: "Jose personally handles every consultation and client relationship"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      vehicle: "2024 BMW X5",
      quote: "Jose's expertise saved me thousands. He found exactly what I needed and negotiated terms I never could have gotten alone.",
      rating: 5
    },
    {
      name: "Michael R.",
      vehicle: "2024 Mercedes C-Class",
      quote: "First time leasing and Jose made it effortless. His guidance was invaluable throughout the entire process.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      vehicle: "2024 Audi Q7",
      quote: "Jose's market knowledge is incredible. He timed my lease perfectly and I got an amazing deal on my dream car.",
      rating: 5
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp}>
                <Badge variant="green" className="mb-4">
                  <Shield className="h-3 w-3 mr-1" />
                  Expert Automotive Consulting
                </Badge>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional{' '}
                <span className="text-green-gradient">Auto Consulting</span>{' '}
                Services
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-gray-200 mb-8 leading-relaxed">
                With over 10 years of automotive expertise, Jose provides personalized consulting 
                to help you make the best vehicle decisions. Get professional guidance tailored 
                to your unique needs and circumstances.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-gradient hover:opacity-90">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                  <FileText className="h-5 w-5 mr-2" />
                  Learn About Process
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">5.0</div>
                  <div className="text-sm text-gray-400">Client Rating</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Jose's Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-gradient rounded-2xl transform -rotate-3 opacity-20"></div>
                <Image
                  src="/jose.png"
                  alt="Jose Perdomo - Automotive Consultant"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-green-gradient p-6 rounded-xl shadow-lg">
                  <div className="text-center text-white">
                    <div className="text-sm font-medium">Jose Perdomo</div>
                    <div className="text-xs opacity-90">Auto Consultant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
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
              Consulting <span className="text-blue-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automotive consulting services designed to save you time, money, 
              and ensure you make the best vehicle decision.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-600">
                      <div>
                        <div className="flex items-center text-sm text-gray-400 mb-1">
                          <Clock className="h-3 w-3 mr-1" />
                          Duration
                        </div>
                        <div className="text-sm font-medium text-white">{service.duration}</div>
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-gray-400 mb-1">
                          <DollarSign className="h-3 w-3 mr-1" />
                          Investment
                        </div>
                        <div className="text-sm font-medium text-green-400">{service.price}</div>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-gradient hover:opacity-90">
                      Schedule Service
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
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
              The <span className="text-green-gradient">Consulting Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Jose's proven 4-step process ensures you get the best possible outcome
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-gradient rounded-full flex items-center justify-center text-sm font-bold text-white">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{step.description}</p>
                    
                    <div className="flex items-center justify-center text-xs text-blue-400">
                      <Clock className="h-3 w-3 mr-1" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Jose */}
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
              Why Choose <span className="text-blue-gradient">Jose's Expertise</span>
            </h2>
            <p className="text-xl text-gray-300">
              The difference that 10+ years of experience and personal attention makes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseJose.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-sm text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="bubbles" intensity="subtle" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Client <span className="text-green-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300">
              Hear from clients who've experienced Jose's exceptional consulting service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-200 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-green-400">{testimonial.vehicle}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Experience Expert{' '}
              <span className="text-green-gradient">Automotive Consulting?</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Don't navigate the complex automotive market alone. Let Jose's 10+ years of 
              expertise guide you to the perfect vehicle at the best possible terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button size="lg" className="bg-green-gradient hover:opacity-90 text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-8 py-4"
              >
                <Car className="h-5 w-5 mr-2" />
                Browse Inventory
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-600">
              <div className="text-center">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Quick Response</div>
                <div className="text-xs text-gray-400">Same day scheduling</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">No Pressure</div>
                <div className="text-xs text-gray-400">Honest, transparent advice</div>
              </div>
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Free Consultation</div>
                <div className="text-xs text-gray-400">No cost, no obligation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
