import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { TrendingUp, LineChart, Coins, BarChart3 } from "lucide-react";

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
              Smart investing for everyone
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your future, <br/>
              <span className="gradient-text">financially secured</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg">
              Bubble Invest makes long-term investing simple, accessible, and modern with our AI-powered robo advisor and carefully selected ETF portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('waitlist')} className="glow-effect">
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('how-it-works')} className="border-slate-700 hover:bg-slate-800">
                How It Works
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="h-5 w-5" />, text: "Long-term oriented" },
                { icon: <LineChart className="h-5 w-5" />, text: "Data-driven decisions" },
                { icon: <Coins className="h-5 w-5" />, text: "Low-cost ETFs" },
                { icon: <BarChart3 className="h-5 w-5" />, text: "Smart rebalancing" }
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
              <div className="tech-card p-6 relative">
                <div className="absolute right-6 top-6">
                  <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Portfolio Performance</h3>
                  <p className="text-slate-400 text-sm">ETF-based investment growth over time</p>
                </div>
                
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Tech ETFs</span>
                    <span className="text-green-500">+18.4%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Sustainable Energy</span>
                    <span className="text-green-500">+12.3%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Global Markets</span>
                    <span className="text-green-500">+9.7%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full" style={{ width: '54%' }}></div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-slate-400">Portfolio Total</p>
                      <p className="text-2xl font-bold gradient-text">+14.2%</p>
                    </div>
                    <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                      View Details
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
