"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Crown,
  Star,
  Shield,
  Sparkles,
  CheckCircle,
  Phone,
  FileText,
  Award,
  TrendingUp,
  Car,
  Gem,
  Clock
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

export default function LuxuryLeasingPage() {
  const luxuryBrands = [
    { 
      brand: "Mercedes-Benz", 
      models: ["S-Class", "E-Class", "GLE", "GLS"], 
      highlight: "German Engineering Excellence" 
    },
    { 
      brand: "BMW", 
      models: ["7 Series", "5 Series", "X7", "X5"], 
      highlight: "Ultimate Driving Machine" 
    },
    { 
      brand: "Audi", 
      models: ["A8", "A6", "Q8", "Q7"], 
      highlight: "Vorsprung durch Technik" 
    },
    { 
      brand: "Lexus", 
      models: ["LS", "ES", "GX", "LX"], 
      highlight: "Japanese Luxury & Reliability" 
    },
    { 
      brand: "Porsche", 
      models: ["Panamera", "Cayenne", "Macan"], 
      highlight: "Sports Car Heritage" 
    },
    { 
      brand: "Tesla", 
      models: ["Model S", "Model X", "Model 3"], 
      highlight: "Electric Innovation" 
    }
  ];

  const luxuryFeatures = [
    { icon: Crown, title: "Premium Materials", description: "Hand-crafted interiors with finest leather and wood" },
    { icon: Sparkles, title: "Advanced Technology", description: "Cutting-edge infotainment and driver assistance" },
    { icon: Shield, title: "Superior Safety", description: "Latest safety innovations and crash protection" },
    { icon: Star, title: "Exceptional Performance", description: "Powerful engines and refined driving dynamics" },
    { icon: Award, title: "Prestige & Status", description: "Make a statement with recognized luxury brands" },
    { icon: Gem, title: "Exclusive Features", description: "Unique amenities not found in standard vehicles" }
  ];

  const whyLeaseLuxury = [
    "Access to latest luxury technology without full purchase price",
    "Lower monthly payments compared to financing",
    "Always under comprehensive warranty coverage", 
    "Ability to upgrade to newer models every few years",
    "No depreciation concerns on high-value vehicles",
    "Potential tax advantages for business use",
    "Professional maintenance and service packages available"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Luxury Vehicle Leasing",
            "description": "Premium luxury vehicle leasing in East Brunswick, NJ. Mercedes, BMW, Audi, Lexus, Porsche, and Tesla leasing with expert guidance.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "JP Auto Leasing LLC",
              "telephone": "(908) 416-3008",
              "email": "jpautoleasingllc@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "East Brunswick",
                "addressRegion": "NJ",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "State",
              "name": "New Jersey"
            },
            "serviceType": "Luxury Vehicle Leasing",
            "offers": {
              "@type": "Offer",
              "description": "Luxury vehicle leasing with competitive terms and expert guidance"
            }
          })
        }}
      />
      
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
              <Crown className="h-3 w-3 mr-1" />
              Luxury Vehicle Leasing
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience{' '}
              <span className="text-green-gradient">Luxury</span>{' '}
              Without Compromise
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Drive the finest vehicles from Mercedes-Benz, BMW, Audi, Lexus, and more. 
              Jose's expertise ensures you get the best luxury leasing terms in East Brunswick.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (908) 416-3008
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Car className="h-5 w-5 mr-2" />
                Browse Luxury Inventory
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Luxury Brands */}
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
              Premium <span className="text-blue-gradient">Luxury Brands</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access to the world's most prestigious automotive brands with competitive leasing terms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryBrands.map((brand, index) => (
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
                    <CardTitle className="text-xl text-green-400">{brand.brand}</CardTitle>
                    <CardDescription className="text-blue-300 text-sm font-medium">
                      {brand.highlight}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Popular Models:</h4>
                      <div className="space-y-2">
                        {brand.models.map((model, modelIndex) => (
                          <div key={modelIndex} className="flex items-center text-sm text-gray-300">
                            <Star className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {model}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Features */}
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
              What Makes <span className="text-green-gradient">Luxury Different</span>
            </h2>
            <p className="text-xl text-gray-300">
              The distinctive features and benefits that define the luxury automotive experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lease Luxury */}
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
                Why <span className="text-green-gradient">Lease Luxury?</span>
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Luxury vehicle leasing offers unique advantages that make premium automotive 
                experiences more accessible and financially smart for East Brunswick residents.
              </p>
              
              <div className="space-y-3">
                {whyLeaseLuxury.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{reason}</span>
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
                      <Crown className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Luxury Lease Example</h3>
                    <p className="text-gray-300 text-sm">Mercedes-Benz E-Class comparison</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                      <span className="text-gray-300">Lease Payment:</span>
                      <span className="text-green-400 font-bold">$650/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                      <span className="text-gray-300">Purchase Payment:</span>
                      <span className="text-blue-400 font-bold">$1,200/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                      <span className="text-gray-300">Monthly Savings:</span>
                      <span className="text-yellow-400 font-bold">$550/mo</span>
                    </div>
                    <div className="text-center pt-4 text-sm text-gray-400">
                      *Example based on $65,000 luxury vehicle
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jose's Luxury Promise */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="bubbles" intensity="subtle" />
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
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-green-gradient">The Luxury Experience Promise</h2>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-200 leading-relaxed mb-6 text-center">
                      "Luxury isn't just about the vehicle—it's about the entire experience. From our first 
                      conversation to the day you drive away, I ensure every aspect of your luxury lease 
                      reflects the premium standards you expect."
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Star className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">White Glove Service</div>
                        <div className="text-sm text-gray-300">Premium customer experience</div>
                      </div>
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">Exclusive Access</div>
                        <div className="text-sm text-gray-300">Priority inventory and terms</div>
                      </div>
                      <div className="text-center p-4 bg-black/20 rounded-lg">
                        <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <div className="font-semibold text-white">Concierge Support</div>
                        <div className="text-sm text-gray-300">Ongoing luxury service</div>
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
              Ready to Experience{' '}
              <span className="text-green-gradient">True Luxury?</span>
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Let Jose help you access the world's finest vehicles with competitive leasing terms 
              and the premium service experience you deserve.
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
                <Crown className="h-5 w-5 mr-2" />
                Schedule Luxury Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
