"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Car, 
  Filter,
  Heart,
  Phone,
  FileText,
  Fuel,
  Gauge,
  Calendar,
  MapPin,
  DollarSign,
  Star,
  ArrowRight,
  Search,
  Grid,
  List
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Sample inventory data - In a real app, this would come from an API
const vehicles = [
  {
    id: 1,
    make: "BMW",
    model: "X5",
    year: 2024,
    type: "SUV",
    price: 899,
    mileage: "25-30 MPG",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Alpine White",
    features: ["Premium Sound", "Panoramic Roof", "Heated Seats", "Apple CarPlay"],
    image: "/api/placeholder/600/400",
    badge: "Premium",
    availability: "Available Now"
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2024,
    type: "Sedan",
    price: 649,
    mileage: "28-35 MPG",
    transmission: "Automatic",
    drivetrain: "RWD",
    color: "Obsidian Black",
    features: ["MBUX System", "LED Headlights", "Dual Zone Climate", "Leather Interior"],
    image: "/api/placeholder/600/400",
    badge: "Luxury",
    availability: "Available Soon"
  },
  {
    id: 3,
    make: "Audi",
    model: "Q7",
    year: 2024,
    type: "SUV",
    price: 1199,
    mileage: "22-27 MPG",
    transmission: "Automatic",
    drivetrain: "Quattro AWD",
    color: "Glacier White",
    features: ["Virtual Cockpit", "Bang & Olufsen Audio", "Massage Seats", "Air Suspension"],
    image: "/api/placeholder/600/400",
    badge: "Executive",
    availability: "Available Now"
  },
  {
    id: 4,
    make: "Lexus",
    model: "RX 350",
    year: 2024,
    type: "SUV",
    price: 749,
    mileage: "28-32 MPG",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Atomic Silver",
    features: ["Mark Levinson Audio", "Safety System+", "Wireless Charging", "Power Liftgate"],
    image: "/api/placeholder/600/400",
    badge: "Reliable",
    availability: "Available Now"
  },
  {
    id: 5,
    make: "Genesis",
    model: "GV80",
    year: 2024,
    type: "SUV",
    price: 899,
    mileage: "21-26 MPG",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Uyuni White",
    features: ["Ergo Motion Seats", "Active Noise Control", "3D Digital Instrument", "Air Suspension"],
    image: "/api/placeholder/600/400",
    badge: "Luxury",
    availability: "Available Now"
  },
  {
    id: 6,
    make: "Volvo",
    model: "XC90",
    year: 2024,
    type: "SUV",
    price: 799,
    mileage: "23-28 MPG",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Crystal White",
    features: ["Bowers & Wilkins Audio", "Pilot Assist", "Clean Zone", "Nappa Leather"],
    image: "/api/placeholder/600/400",
    badge: "Safety",
    availability: "Available Soon"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function InventoryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const vehicleTypes = ['All', 'SUV', 'Sedan', 'Coupe', 'Convertible'];
  
  const getBadgeVariant = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'premium': return 'green';
      case 'luxury': return 'blue';
      case 'executive': return 'green';
      case 'reliable': return 'blue';
      case 'safety': return 'green';
      default: return 'default';
    }
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = `${vehicle.make} ${vehicle.model} ${vehicle.year}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || vehicle.type === selectedType;
    return matchesSearch && matchesType;
  });

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
              <Car className="h-3 w-3 mr-1" />
              Premium Vehicle Collection
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium{' '}
              <span className="text-green-gradient">Vehicle Inventory</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover our carefully curated selection of premium vehicles, each personally 
              inspected and approved by Jose Perdomo for quality and value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 glassmorphism-header">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              {vehicleTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className="text-sm"
                >
                  {type}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredVehicles.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No vehicles found</h3>
              <p className="text-gray-400">Try adjusting your search criteria</p>
            </motion.div>
          ) : (
            <motion.div
              className={viewMode === 'grid' 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-6"
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="liquid-glass border-0 text-white overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
                      <div className="absolute top-4 left-4 z-10">
                        <Badge variant={getBadgeVariant(vehicle.badge)} className="mb-2">
                          {vehicle.badge}
                        </Badge>
                        <Badge 
                          variant={vehicle.availability === 'Available Now' ? 'green' : 'outline'}
                          className="block w-fit"
                        >
                          {vehicle.availability}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <Button size="icon" variant="ghost" className="bg-black/30 backdrop-blur-sm hover:bg-black/60">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <Car className="h-20 w-20 mx-auto mb-4 opacity-50" />
                          <p className="text-sm">Vehicle Image</p>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl text-white">
                            {vehicle.year} {vehicle.make} {vehicle.model}
                          </CardTitle>
                          <CardDescription className="text-gray-300">
                            {vehicle.type} • {vehicle.color}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-400">
                            ${vehicle.price}<span className="text-sm font-normal text-gray-400">/mo</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Vehicle Stats */}
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center text-gray-300">
                          <Fuel className="h-4 w-4 mr-2 text-green-400" />
                          {vehicle.mileage}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Gauge className="h-4 w-4 mr-2 text-blue-400" />
                          {vehicle.transmission}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <p className="text-sm font-medium text-white mb-2">Key Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {vehicle.features.slice(0, 3).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {vehicle.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{vehicle.features.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 bg-green-gradient hover:opacity-90" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Call About This
                        </Button>
                        <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                          <FileText className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <BackgroundAnimation variant="grid" intensity="subtle" />
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
              Don't See What You're Looking For?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Jose has access to thousands more vehicles. Let him find your perfect match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-gradient hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Call Jose - (XXX) XXX-XXXX
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                <FileText className="h-5 w-5 mr-2" />
                Request Custom Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
