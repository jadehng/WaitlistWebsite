import { Button } from "@/components/ui/button";
import { Codepen, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
    setMobileMenuOpen(false);
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  return (
    <nav className="border-b border-slate-800 backdrop-blur-lg bg-slate-900/80 fixed w-full z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-10">
          <div className="relative">
            <Codepen className="w-8 h-8 text-primary bubble-animation" />
            <div className="absolute -inset-1 rounded-full bg-primary/20 -z-10 blur-sm glow-effect"></div>
          </div>
          <span className="text-xl font-bold gradient-text">Bubble Invest</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-slate-300 hover:text-primary transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button 
            onClick={scrollToWaitlist}
            className="hidden md:flex glow-effect"
          >
            Join Waitlist
          </Button>

          <button 
            className="md:hidden text-slate-300 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-slate-900 z-40 pt-24 px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-slate-300 hover:text-primary transition-colors py-3 text-lg border-b border-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={scrollToWaitlist}
                className="mt-4"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;