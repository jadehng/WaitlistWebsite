import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-[#10B981]/5 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              The smarter way to <span className="text-primary">launch</span> your next big idea
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Stop wasting time on setup and configuration. LaunchPad gives you everything you need to validate, build, and grow your product faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('waitlist')}>
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('how-it-works')}>
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Product dashboard preview" 
                className="rounded-lg shadow-lg w-full"
                width="600"
                height="400"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
