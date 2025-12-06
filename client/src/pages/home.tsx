import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Shield, Zap, Cloud, Cpu, Activity } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import CodeDemo from "@/components/sections/code-demo";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <CodeDemo />
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to automate your infrastructure?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of developers who are deploying faster and safer with Salus Cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Start for Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-muted-foreground/20 hover:bg-muted/50">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      </section>
      <Footer />
    </div>
  );
}
