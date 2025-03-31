import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { TrendingUp, ShieldCheck, CircleDollarSign, Users, Clock, Library } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-slate-900 to-slate-900 -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2Nmg2di02aC0xMnptLTE4IDZoNnY2aC02di02em0xMiAwaDZ2Nmg2djYgNmg2di0xMmgtMTJ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
              Our Vision
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Fair Finance <br/>
              <span className="gradient-text">for All</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg">
              We believe finance should be honest, transparent, and accessible to all. The current system isn't working for most people - it's complicated, expensive, and often puts profits over people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('waitlist')} className="glow-effect">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('how-it-works')} className="border-slate-700 hover:bg-slate-800">
                Learn Our Vision
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                { icon: <ShieldCheck className="h-5 w-5" />, text: "Radical Transparency" },
                { icon: <Clock className="h-5 w-5" />, text: "Ethical Investing" },
                { icon: <Users className="h-5 w-5" />, text: "Fair Compensation" },
                { icon: <Library className="h-5 w-5" />, text: "Empowerment Through Education" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <div className="flex items-center justify-center bg-primary/20 rounded-full w-8 h-8 text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-xl blur-xl opacity-20"></div>
              <div className="tech-card p-8 relative">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                      <CircleDollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">What We're Building</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Bubble is our first step toward a better financial future. We're creating a smarter investment platform and business automation tools that help embrace modern technology.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/20 p-2 rounded-full">
                        <TrendingUp className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Our Vision</h4>
                        <p className="text-sm text-slate-400">We believe finance should be honest, transparent, and accessible to everyone. Our goal is to create a system that works for ordinary people, not just the wealthy or financial institutions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-2 rounded-full">
                        <ShieldCheck className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Our Promise</h4>
                        <p className="text-sm text-slate-400">We won't use complicated language to confuse you. We won't claim we can predict markets. We'll be transparent about fees and we'll educate before we recommend any investment approach.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex flex-col">
                    <p className="text-sm text-slate-400 mb-2">By working together, we can create a better financial future</p>
                    <Button onClick={() => scrollToSection('waitlist')} variant="default" className="w-full">
                      Join The Bubble Community
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="hidden md:block">
              <div className="absolute top-40 right-20 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
