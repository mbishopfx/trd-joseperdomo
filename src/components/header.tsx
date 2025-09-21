"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Car, Shield, Users, FileText, MapPin, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      name: "Inventory", 
      href: "/inventory", 
      icon: Car,
      description: "Browse our premium vehicle collection"
    },
    { 
      name: "Services", 
      href: "#", 
      icon: Shield,
      submenu: [
        { name: "Consulting", href: "/consulting", description: "Expert automotive guidance" },
        { name: "Credit Application", href: "/credit-application", description: "Quick and easy financing" },
        { name: "Vehicle Appraisal", href: "/services/appraisal", description: "Professional vehicle valuation" }
      ]
    },
    { 
      name: "About", 
      href: "/about", 
      icon: Users,
      description: "Learn about JP Auto Leasing"
    },
    { 
      name: "Contact", 
      href: "/contact", 
      icon: Phone,
      description: "Get in touch with our team"
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism-header backdrop-blur-xl' 
          : 'bg-black/50 backdrop-blur-md border-b border-green-500/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <motion.div
                className="w-12 h-12 rounded-xl bg-green-gradient flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/sticker.png"
                  alt="JP Auto Leasing LLC"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            </div>
            <div>
              <motion.h1 
                className="text-xl font-bold text-foreground tracking-wide"
                animate={{ 
                  opacity: [0.9, 1, 0.9],
                  letterSpacing: ["0.02em", "0.04em", "0.02em"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                JP AUTO LEASING
              </motion.h1>
              <p className="text-xs text-green-400 font-medium">Premium Automotive Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="text-foreground hover:text-green-400">
                        <item.icon className="h-4 w-4 mr-2" />
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-96 p-4 glassmorphism-card">
                          <div className="grid grid-cols-1 gap-3">
                            {item.submenu.map((subItem) => (
                              <NavigationMenuLink key={subItem.name} asChild>
                                <Link
                                  href={subItem.href}
                                  className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-500/10 hover:text-green-300 focus:bg-green-500/10 focus:text-green-300"
                                >
                                  <div className="text-sm font-medium leading-none text-white group-hover:text-green-300">
                                    {subItem.name}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-green-500/10 hover:text-green-300 focus:bg-green-500/10 focus:text-green-300 focus:outline-none"
                      >
                        <item.icon className="h-4 w-4 mr-2" />
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white" asChild>
              <a href="/contact">
                <FileText className="h-4 w-4 mr-2" />
                Get Quote
              </a>
            </Button>
            <Button className="bg-green-gradient hover:opacity-90 text-white shadow-lg">
              <Phone className="h-4 w-4 mr-2" />
              (908) 416-3008
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glassmorphism-dark text-white border-l border-green-500/20">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="text-center border-b border-green-500/20 pb-4">
                  <motion.div className="text-lg font-bold tracking-wider text-green-400">
                    JP AUTO LEASING
                  </motion.div>
                  <p className="text-sm text-gray-300 mt-1">Premium Automotive Solutions</p>
                </div>
                
                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link 
                        href={item.href}
                        className="flex items-center text-[17px] font-medium hover:text-green-400 transition-colors py-2"
                      >
                        <item.icon className="h-5 w-5 mr-3 text-green-400" />
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-8 space-y-2 mt-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-gray-300 hover:text-blue-400 transition-colors py-1"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 pt-4 border-t border-green-500/20">
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                    asChild
                  >
                    <a href="/contact">
                      <FileText className="h-4 w-4 mr-2" />
                      Get Quote
                    </a>
                  </Button>
                  <Button className="w-full bg-green-gradient hover:opacity-90 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    (908) 416-3008
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
