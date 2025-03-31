import { Button } from "@/components/ui/button";
import { Network, Menu, X } from "lucide-react";
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
    { name: "Join Us", href: "#waitlist" }
  ];

  return (
    <nav className="border-b border-gray-200 backdrop-blur-lg bg-white/90 fixed w-full z-50 px-4 md:px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex flex-col items-start z-10">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Network className="w-8 h-8 text-gray-700 bubble-animation rotate-45" />
              <div className="absolute -inset-2 rounded-full bg-gray-100 -z-10 blur-md animate-pulse"></div>
              <div className="absolute -inset-1 rounded-full bg-gray-200 -z-10 blur-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-800">Bubble</span>
          </div>
          <span className="text-xs text-gray-500 ml-10 -mt-1">Transparent by design</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button 
            onClick={scrollToWaitlist}
            className="hidden md:flex bg-gray-800 hover:bg-gray-700 text-white"
          >
            Join Waitlist
          </Button>

          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 pt-24 px-4"
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
                  className="text-gray-700 hover:text-gray-900 transition-colors py-3 text-lg border-b border-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={scrollToWaitlist}
                className="mt-4 bg-gray-800 hover:bg-gray-700 text-white"
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