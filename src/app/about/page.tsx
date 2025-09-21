"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Users, 
  Shield, 
  Star,
  Clock,
  Award,
  Target,
  TrendingUp,
  Heart,
  Phone,
  FileText,
  Car,
  CheckCircle,
  Lightbulb,
  DollarSign
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

export default function AboutPage() {
  const companyValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest, transparent dealings with every client. No hidden fees, no surprises - just straightforward automotive expertise."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Committed to providing the highest quality service and finding the perfect vehicle match for each client's unique needs."
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Every client receives Jose's personal attention and expertise. We believe in building relationships, not just transactions."
    },
    {
      icon: Target,
      title: "Results",
      description: "Focused on delivering measurable value - better terms, perfect vehicle matches, and exceptional customer experiences."
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "10+ Years Experience",
      description: "Over a decade of automotive industry expertise and market knowledge",
      highlight: "Proven track record"
    },
    {
      icon: Lightbulb,
      title: "Personalized Service",
      description: "Jose personally handles every consultation and client relationship",
      highlight: "Direct owner involvement"
    },
    {
      icon: DollarSign,
      title: "No Hidden Costs",
      description: "Transparent pricing with no surprise charges or hidden fees",
      highlight: "Complete transparency"
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep knowledge of automotive trends, pricing, and the best deals available",
      highlight: "Insider knowledge"
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Industry Entry",
      description: "Jose began his journey in the automotive industry, learning from the ground up"
    },
    {
      year: "2018",
      title: "Expertise Development",
      description: "Expanded knowledge in vehicle financing, leasing, and customer consultation"
    },
    {
      year: "2022",
      title: "Market Mastery",
      description: "Became recognized expert in premium vehicle leasing and automotive consulting"
    },
    {
      year: "2024",
      title: "JP Auto Leasing LLC",
      description: "Founded JP Auto Leasing LLC to provide premium, personalized automotive solutions"
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
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="green" className="mb-4">
                <Users className="h-3 w-3 mr-1" />
                About JP Auto Leasing LLC
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium{' '}
              <span className="text-green-gradient">Automotive Solutions</span>{' '}
              with Personal Service
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-200 mb-8 leading-relaxed">
              Founded on the principle that every client deserves expert guidance and personalized 
              attention, JP Auto Leasing LLC brings over 10 years of automotive industry expertise 
              to help you make the best vehicle decisions.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <FileText className="h-5 w-5 mr-2" />
                Learn About Our Process
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Jose's Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet{' '}
                <span className="text-blue-gradient">Jose Perdomo</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  Jose Perdomo founded JP Auto Leasing LLC with a simple yet powerful mission: to 
                  revolutionize the automotive leasing experience through genuine expertise, personal 
                  attention, and unwavering integrity.
                </p>
                
                <p>
                  With over <strong className="text-green-400">10 years in the automotive industry</strong>, 
                  Jose has witnessed the evolution of vehicle technology, financing options, and market 
                  dynamics. This extensive experience allows him to navigate complex automotive landscapes 
                  and secure the best possible outcomes for his clients.
                </p>
                
                <p>
                  What sets Jose apart is his commitment to understanding each client's unique situation. 
                  Whether you're a first-time lessee, a seasoned car enthusiast, or a business owner 
                  looking for fleet solutions, Jose takes the time to understand your needs, budget, 
                  and long-term goals.
                </p>
                
                <p>
                  <strong className="text-blue-400">"I know what you need"</strong> isn't just our 
                  company motto—it's Jose's personal promise to leverage his decade of experience 
                  for your benefit.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-gradient rounded-2xl transform rotate-3 opacity-20"></div>
                <Image
                  src="/jose.png"
                  alt="Jose Perdomo - Founder of JP Auto Leasing LLC"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-gradient p-6 rounded-xl shadow-lg">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm">Years</div>
                    <div className="text-xs opacity-90">Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our <span className="text-green-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every interaction and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
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
                    <div className="w-16 h-16 bg-green-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
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
              Our <span className="text-blue-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-300">
              A decade of growth, learning, and commitment to automotive excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="liquid-glass border-0 text-white">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-green-400 mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-4 h-4 bg-blue-gradient rounded-full flex-shrink-0 shadow-lg"></div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose <span className="text-green-gradient">JP Auto Leasing?</span>
            </h2>
            <p className="text-xl text-gray-300">
              The advantages of working with a dedicated automotive professional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <reason.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                        <p className="text-gray-300 mb-3">{reason.description}</p>
                        <div className="text-sm text-green-400 font-medium">
                          ✓ {reason.highlight}
                        </div>
                      </div>
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
              Ready to Experience the{' '}
              <span className="text-green-gradient">JP Auto Leasing Difference?</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Let Jose's 10+ years of automotive expertise work for you. Experience personalized 
              service, transparent pricing, and professional guidance every step of the way.
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
                <Car className="h-5 w-5 mr-2" />
                View Our Inventory
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-600">
              <div className="text-center">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Quick Response</div>
                <div className="text-xs text-gray-400">Usually same day</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">No Pressure</div>
                <div className="text-xs text-gray-400">Honest, transparent advice</div>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Expert Guidance</div>
                <div className="text-xs text-gray-400">10+ years experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
