"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Shield,
  FileText,
  TrendingUp,
  Users,
  Star,
  Clock,
  DollarSign
} from "lucide-react";

import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inventory", href: "/inventory", icon: Car },
    { name: "About Us", href: "/about", icon: Users },
    { name: "Consulting", href: "/consulting", icon: Shield },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Credit Application", href: "/credit-application", icon: FileText },
  ];

  const seoPages = [
    { name: "Finding the Best Car for You", href: "/guides/best-car-for-you" },
    { name: "Vehicle Leasing vs Buying Guide", href: "/guides/lease-vs-buy" },
    { name: "Credit Score Requirements", href: "/guides/credit-requirements" },
    { name: "First Time Leasing Tips", href: "/guides/first-time-leasing" },
    { name: "Luxury Vehicle Leasing", href: "/guides/luxury-leasing" },
    { name: "Business Vehicle Solutions", href: "/guides/business-leasing" },
  ];

  const services = [
    { name: "Personal Vehicle Leasing", href: "/services/personal-leasing" },
    { name: "Commercial Fleet Solutions", href: "/services/commercial" },
    { name: "Vehicle Trade-In", href: "/services/trade-in" },
    { name: "Insurance Assistance", href: "/services/insurance" },
    { name: "Extended Warranties", href: "/services/warranties" },
    { name: "Maintenance Packages", href: "/services/maintenance" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Grid Animation Background */}
      <BackgroundAnimation variant="grid" intensity="subtle" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-blue-600/10" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Car className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">JP Auto Leasing</h3>
                <p className="text-green-400 text-sm">Premium Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              With over 10 years of experience in the automotive industry, JP Auto Leasing LLC 
              provides premium vehicle leasing solutions tailored to your needs.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-3 text-green-400" />
                <a href="tel:+19084163008" className="hover:text-green-300 transition-colors">(908) 416-3008</a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-3 text-green-400" />
                <a href="mailto:jpautoleasingllc@gmail.com" className="hover:text-green-300 transition-colors">jpautoleasingllc@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-green-400" />
                <span>New Jersey</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="hover:bg-green-500/20">
                <Facebook className="h-4 w-4 text-green-400" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-blue-500/20">
                <Instagram className="h-4 w-4 text-blue-400" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-green-500/20">
                <Twitter className="h-4 w-4 text-green-400" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors text-sm group"
                >
                  <link.icon className="h-4 w-4 mr-3 text-green-400 group-hover:text-green-300" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <Link 
                  key={service.name}
                  href={service.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* SEO/Resource Pages */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Resources & Guides</h4>
            <div className="space-y-3">
              {seoPages.map((page) => (
                <Link 
                  key={page.name}
                  href={page.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 py-8 border-t border-gray-700">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">Premium</div>
            <div className="text-sm text-gray-400">Quality Service</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">10+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">Expert</div>
            <div className="text-sm text-gray-400">Guidance</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">Best</div>
            <div className="text-sm text-gray-400">Value</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} JP Auto Leasing LLC. All rights reserved. 
              <span className="mx-2">|</span>
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white"
                asChild
              >
                <a href="/contact">
                  <FileText className="h-4 w-4 mr-2" />
                  Quick Quote
                </a>
              </Button>
              <Button 
                size="sm" 
                className="bg-green-gradient hover:opacity-90"
              >
                <Phone className="h-4 w-4 mr-2" />
                (908) 416-3008
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
