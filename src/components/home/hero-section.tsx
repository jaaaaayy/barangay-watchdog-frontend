"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock } from "lucide-react";

export function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href="/about" className="inline-flex space-x-6">
              <span className="rounded-full bg-red-600/10 px-3 py-1 text-sm font-semibold leading-6 text-red-600 ring-1 ring-inset ring-red-600/10">
                What we do
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-foreground">
                <span>Learn more about our mission</span>
              </span>
            </Link>
          </div>
          <motion.h1 
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your identity stays hidden.
            <br />
            Your report makes change.
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Help improve your barangay by reporting local issues, corruption, or misconduct while keeping your identity completely anonymous and secure.
          </motion.p>
          <div className="mt-10 flex items-center gap-x-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Link href="/create-report">
                <Button size="lg" className="group relative bg-red-600 hover:bg-red-700">
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ 
                        x: isHovering ? -5 : 0,
                        opacity: isHovering ? 0 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      Report Anonymously
                    </motion.span>
                    <motion.span
                      className="absolute left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ 
                        opacity: isHovering ? 1 : 0,
                        x: isHovering ? 0 : 10
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Lock className="h-4 w-4" />
                    </motion.span>
                  </span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link 
                href="/how-it-works" 
                className="text-sm font-semibold leading-6 text-foreground"
              >
                How it works <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div 
              className="relative w-[40rem] h-[35rem] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="absolute w-72 h-72 bg-red-600/10 rounded-full flex items-center justify-center">
                <Shield className="h-32 w-32 text-red-600/70" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-red-600/20 rounded-full animate-ping-slow" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-600/20 rounded-full animate-ping-slower" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}