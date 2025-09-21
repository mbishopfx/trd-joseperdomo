"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Shield, 
  Clock,
  CheckCircle,
  User,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Building,
  Car,
  Lock,
  AlertCircle,
  Star,
  TrendingUp
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

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

export default function CreditApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    ssn: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    residenceType: '',
    monthsAtAddress: '',
    
    // Employment Information
    employerName: '',
    jobTitle: '',
    employmentType: '',
    monthsEmployed: '',
    grossMonthlyIncome: '',
    
    // Financial Information
    monthlyHousing: '',
    otherMonthlyPayments: '',
    
    // Vehicle Information
    vehicleInterest: '',
    tradeInVehicle: '',
    downPayment: '',
    
    // References
    reference1Name: '',
    reference1Phone: '',
    reference2Name: '',
    reference2Phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/credit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Application submission error:', error);
      // You might want to show an error state here
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Address & Employment", icon: Building },
    { number: 3, title: "Financial & Vehicle", icon: DollarSign },
    { number: 4, title: "Review & Submit", icon: FileText }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Get pre-approved in as little as 24 hours"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Bank-level security for all your information"
    },
    {
      icon: Star,
      title: "Expert Review",
      description: "Jose personally reviews every application"
    },
    {
      icon: TrendingUp,
      title: "Credit Building",
      description: "Build credit history with responsible leasing"
    }
  ];

  const creditTiers = [
    {
      tier: "Excellent Credit",
      score: "750+",
      benefits: ["Best rates available", "Minimal down payment", "Premium vehicle access"],
      color: "text-green-400"
    },
    {
      tier: "Good Credit",
      score: "650-749",
      benefits: ["Competitive rates", "Standard terms", "Wide vehicle selection"],
      color: "text-blue-400"
    },
    {
      tier: "Fair Credit",
      score: "550-649",
      benefits: ["Specialized programs", "Credit improvement options", "Flexible terms"],
      color: "text-yellow-400"
    },
    {
      tier: "Building Credit",
      score: "Under 550",
      benefits: ["Credit building programs", "Co-signer options", "Fresh start opportunities"],
      color: "text-orange-400"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <section className="relative pt-24 pb-16 min-h-screen flex items-center overflow-hidden">
          <BackgroundAnimation variant="bubbles" intensity="subtle" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="liquid-glass border-0 text-white">
                <CardContent className="p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="w-24 h-24 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle className="h-12 w-12 text-white" />
                  </motion.div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Application Submitted Successfully!
                  </h1>
                  
                  <p className="text-lg text-gray-200 mb-6">
                    Thank you for choosing JP Auto Leasing. Jose will personally review your application 
                    and contact you within 24 hours with next steps.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center text-sm text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-green-400" />
                      Expected response: Within 24 hours
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-300">
                      <Phone className="h-4 w-4 mr-2 text-blue-400" />
                      Questions? Call (XXX) XXX-XXXX
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-green-gradient hover:opacity-90">
                      <Car className="h-4 w-4 mr-2" />
                      Browse Inventory
                    </Button>
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Jose
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

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
                <FileText className="h-3 w-3 mr-1" />
                Credit Application
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quick{' '}
              <span className="text-green-gradient">Credit Application</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get pre-approved for your vehicle lease with our secure, streamlined application process. 
              Jose personally reviews every application to find you the best terms possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 glassmorphism-header">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className={`flex items-center space-x-2 ${
                    currentStep >= step.number ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.number 
                        ? 'bg-green-gradient text-white' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span className="text-sm font-medium hidden sm:block">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 ${
                      currentStep > step.number ? 'bg-green-400' : 'bg-gray-700'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="liquid-glass border-0 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Step {currentStep}: {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription className="text-center text-gray-300">
                  Please provide accurate information for the best approval terms
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">First Name *</label>
                          <Input
                            name="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">Last Name *</label>
                          <Input
                            name="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">Email *</label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">Phone *</label>
                          <Input
                            name="phone"
                            type="tel"
                            placeholder="(XXX) XXX-XXXX"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">Date of Birth *</label>
                          <Input
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">
                            Social Security Number *
                            <Lock className="inline h-3 w-3 ml-1 text-green-400" />
                          </label>
                          <Input
                            name="ssn"
                            type="password"
                            placeholder="XXX-XX-XXXX"
                            value={formData.ssn}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Address & Employment */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-green-400 flex items-center">
                          <MapPin className="h-5 w-5 mr-2" />
                          Address Information
                        </h3>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">Street Address *</label>
                          <Input
                            name="address"
                            placeholder="123 Main Street"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">City *</label>
                            <Input
                              name="city"
                              placeholder="Your City"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">State *</label>
                            <Input
                              name="state"
                              placeholder="State"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">ZIP Code *</label>
                            <Input
                              name="zipCode"
                              placeholder="12345"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Residence Type *</label>
                            <select
                              name="residenceType"
                              value={formData.residenceType}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none"
                              required
                            >
                              <option value="">Select type</option>
                              <option value="Own">Own</option>
                              <option value="Rent">Rent</option>
                              <option value="Live with family">Live with family</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Months at Address *</label>
                            <Input
                              name="monthsAtAddress"
                              type="number"
                              placeholder="24"
                              value={formData.monthsAtAddress}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 flex items-center">
                          <Building className="h-5 w-5 mr-2" />
                          Employment Information
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Employer Name *</label>
                            <Input
                              name="employerName"
                              placeholder="Company Name"
                              value={formData.employerName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Job Title *</label>
                            <Input
                              name="jobTitle"
                              placeholder="Your Position"
                              value={formData.jobTitle}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Employment Type *</label>
                            <select
                              name="employmentType"
                              value={formData.employmentType}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none"
                              required
                            >
                              <option value="">Select type</option>
                              <option value="Full-time">Full-time</option>
                              <option value="Part-time">Part-time</option>
                              <option value="Self-employed">Self-employed</option>
                              <option value="Contract">Contract</option>
                              <option value="Retired">Retired</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Months Employed *</label>
                            <Input
                              name="monthsEmployed"
                              type="number"
                              placeholder="24"
                              value={formData.monthsEmployed}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">
                            Gross Monthly Income *
                            <span className="text-xs text-gray-400 ml-2">(Before taxes)</span>
                          </label>
                          <Input
                            name="grossMonthlyIncome"
                            type="number"
                            placeholder="5000"
                            value={formData.grossMonthlyIncome}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Financial & Vehicle Info */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-green-400 flex items-center">
                          <DollarSign className="h-5 w-5 mr-2" />
                          Financial Information
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Monthly Housing Payment *</label>
                            <Input
                              name="monthlyHousing"
                              type="number"
                              placeholder="1200"
                              value={formData.monthlyHousing}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Other Monthly Payments</label>
                            <Input
                              name="otherMonthlyPayments"
                              type="number"
                              placeholder="500"
                              value={formData.otherMonthlyPayments}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 flex items-center">
                          <Car className="h-5 w-5 mr-2" />
                          Vehicle Information
                        </h3>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block text-white">Vehicle Interest</label>
                          <textarea
                            name="vehicleInterest"
                            rows={3}
                            placeholder="Describe the type of vehicle you're interested in (e.g., luxury sedan, SUV, specific make/model)"
                            value={formData.vehicleInterest}
                            onChange={handleInputChange}
                            className="flex w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Trade-in Vehicle?</label>
                            <select
                              name="tradeInVehicle"
                              value={formData.tradeInVehicle}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none"
                            >
                              <option value="">Do you have a trade-in?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-white">Down Payment</label>
                            <select
                              name="downPayment"
                              value={formData.downPayment}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus-visible:outline-none"
                            >
                              <option value="">Select down payment</option>
                              <option value="$0">$0</option>
                              <option value="$1,000-$2,500">$1,000-$2,500</option>
                              <option value="$2,500-$5,000">$2,500-$5,000</option>
                              <option value="$5,000+">$5,000+</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review & Submit */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20">
                        <div className="flex items-start space-x-3">
                          <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div className="text-sm text-gray-200">
                            <p className="font-medium text-white mb-2">Important Information:</p>
                            <ul className="space-y-1 text-gray-300">
                              <li>• All information provided will be kept strictly confidential</li>
                              <li>• Jose will personally review your application within 24 hours</li>
                              <li>• You may be contacted for additional information if needed</li>
                              <li>• This application does not guarantee approval</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-lg text-white mb-4">
                          Ready to submit your application?
                        </p>
                        <p className="text-gray-300 mb-6">
                          Jose will review your information and contact you with next steps within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t border-gray-600">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Previous
                      </Button>
                    )}
                    
                    <div className="ml-auto">
                      {currentStep < 4 ? (
                        <Button
                          type="button"
                          onClick={() => setCurrentStep(currentStep + 1)}
                          className="bg-green-gradient hover:opacity-90"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="bg-green-gradient hover:opacity-90 text-lg px-8"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Submitting...
                            </div>
                          ) : (
                            <>
                              <FileText className="h-5 w-5 mr-2" />
                              Submit Application
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credit Tiers Information */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="grid" intensity="subtle" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Credit <span className="text-green-gradient">Tiers & Benefits</span>
            </h2>
            <p className="text-xl text-gray-300">
              We work with all credit levels to find you the best possible terms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="liquid-glass border-0 text-white h-full">
                  <CardHeader className="text-center">
                    <CardTitle className={`text-lg ${tier.color}`}>{tier.tier}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-white">
                      {tier.score}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
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

      <Footer />
    </div>
  );
}
