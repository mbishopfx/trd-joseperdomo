"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Car, 
  Shield, 
  Users, 
  Star, 
  Phone, 
  FileText, 
  ArrowRight, 
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Sparkles,
  Truck,
  MapPin
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variants
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

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
};

export default function HomePage() {
  const services = [
    {
      icon: Car,
      title: "Premium Vehicle Leasing",
      description: "Access to luxury and premium vehicles with flexible leasing terms tailored to your lifestyle and budget.",
      features: ["Luxury & Premium Models", "Flexible Terms", "Competitive Rates"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Expert Consulting",
      description: "Over 10 years of automotive expertise helping you make the right vehicle choice for your needs.",
      features: ["10+ Years Experience", "Personalized Guidance", "Expert Advice"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Easy Credit Process",
      description: "Streamlined credit application process with assistance every step of the way.",
      features: ["Quick Approval", "Credit Assistance", "Transparent Process"],
      gradient: "from-green-500 to-green-600"
    }
  ];

  const trustSignals = [
    { icon: Shield, value: "Premium", label: "Quality", sublabel: "Service", color: "green" },
    { icon: Clock, value: "10+", label: "Years", sublabel: "Experience", color: "blue" },
    { icon: TrendingUp, value: "Expert", label: "Guidance", sublabel: "Always", color: "green" },
    { icon: Award, value: "Best", label: "Value", sublabel: "Guaranteed", color: "blue" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Advanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JP Auto Leasing LLC",
            "description": "Premium vehicle leasing solutions in East Brunswick, NJ. Personal and commercial leasing with 10+ years expertise. Mercedes, BMW, Audi, Lexus, Tesla leasing specialist.",
            "url": "https://jpautoleasing.com",
            "telephone": "(908) 416-3008",
            "email": "jpautoleasingllc@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "East Brunswick",
              "addressRegion": "NJ",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.4281",
              "longitude": "-74.4160"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "New Jersey"
              },
              {
                "@type": "City",
                "name": "East Brunswick"
              },
              {
                "@type": "City", 
                "name": "New Brunswick"
              },
              {
                "@type": "City",
                "name": "Edison"
              }
            ],
            "serviceType": ["Vehicle Leasing", "Commercial Fleet Leasing", "Luxury Vehicle Leasing"],
            "priceRange": "$$",
            "founder": {
              "@type": "Person",
              "name": "Jose Perdomo",
              "jobTitle": "Automotive Leasing Specialist",
              "worksFor": {
                "@type": "Organization",
                "name": "JP Auto Leasing LLC"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Vehicle Leasing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Personal Vehicle Leasing",
                    "description": "Luxury and standard vehicle leasing for individuals"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Fleet Leasing",
                    "description": "Business vehicle leasing and fleet management"
                  }
                }
              ]
            },
            "knowsAbout": ["Vehicle Leasing", "Automotive Finance", "Fleet Management", "Luxury Vehicles"],
            "slogan": "I Know What You Need",
            "foundingDate": "2024",
            "numberOfEmployees": "1-10",
            "openingHours": "Mo-Su 09:00-21:00",
            "paymentAccepted": ["Cash", "Credit Card", "Financing"],
            "currenciesAccepted": "USD"
          })
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <BackgroundAnimation variant="dots" intensity="medium" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/20 to-blue-900/40" />
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto text-white"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="outline" className="mb-4 text-green-400 border-green-400/50 bg-black/30 backdrop-blur-sm">
                <Truck className="h-3 w-3 mr-1" />
                Premium Automotive Solutions Since 2014
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Premium{' '}
              <span className="text-green-gradient">Auto Leasing</span>{' '}
              Solutions
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Experience the JP Auto Leasing difference with over 10 years of expertise in 
              premium vehicle solutions, personalized consulting, and exceptional service.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-green-gradient hover:opacity-90 text-white text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button 
                size="lg"
                variant="blue" 
                className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-8 py-4"
              >
                <FileText className="h-5 w-5 mr-2" />
                Get Free Quote
              </Button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {trustSignals.map((signal, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className={`w-16 h-16 ${signal.color === 'green' ? 'bg-green-gradient' : 'bg-blue-gradient'} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <signal.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{signal.value}</div>
                  <div className="font-medium text-gray-200">{signal.label}</div>
                  <div className="text-sm text-gray-400">{signal.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <BackgroundAnimation variant="grid" intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="green" className="mb-4">
                <Sparkles className="h-3 w-3 mr-1" />
                Our Services
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Automotive{' '}
              <span className="text-blue-gradient">Solutions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive leasing solutions backed by a decade of automotive expertise and 
              personalized service that puts your needs first.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                {...scaleOnHover}
              >
                <Card className="liquid-glass border-0 text-white hover:bg-black/60 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white mt-6">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Jose Section */}
      <section className="py-24 relative">
        <BackgroundAnimation variant="bubbles" intensity="subtle" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-gradient rounded-2xl transform rotate-3 opacity-20"></div>
                <Image
                  src="/jose.png"
                  alt="Jose Perdomo - Owner of JP Auto Leasing LLC"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-gradient p-4 rounded-xl shadow-lg">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge variant="blue" className="mb-4">
                <Users className="h-3 w-3 mr-1" />
                Meet the Owner
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet{' '}
                <span className="text-green-gradient">Jose Perdomo</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  With over <strong className="text-green-400">10 years of experience</strong> in the 
                  automotive industry, Jose Perdomo founded JP Auto Leasing LLC with a simple mission: 
                  to provide exceptional vehicle leasing solutions backed by genuine expertise and 
                  personalized service.
                </p>
                
                <p>
                  Jose understands that choosing the right vehicle is more than just a transaction—it's 
                  about finding the perfect match for your lifestyle, budget, and goals. His deep 
                  knowledge of the automotive market, combined with a commitment to transparency and 
                  integrity, has helped hundreds of clients secure their ideal vehicles.
                </p>
                
                <p>
                  <strong className="text-blue-400">"I know what you need"</strong> isn't just our 
                  motto—it's Jose's personal guarantee that every client receives expert guidance 
                  tailored to their unique situation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 glassmorphism-card rounded-lg">
                  <div className="text-3xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 glassmorphism-card rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">Expert</div>
                  <div className="text-sm text-gray-300">Guidance</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-green-gradient hover:opacity-90">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Jose - (908) 416-3008
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                  <FileText className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <BackgroundAnimation variant="dots" intensity="strong" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-black/80 to-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Find Your{' '}
              <span className="text-green-gradient">Perfect Vehicle?</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-200 mb-12 leading-relaxed">
              Experience the difference that 10+ years of automotive expertise makes. 
              Let Jose help you find your perfect vehicle with personalized service.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90 text-white text-lg px-10 py-5 shadow-2xl">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button 
                size="lg"
                variant="blue" 
                className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-10 py-5"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Schedule Meeting
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
