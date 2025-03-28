import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { 
  AlertTriangle, 
  Lightbulb, 
  Users, 
  BookOpen, 
  Layers,
  Clock 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    number: "01",
    title: "The Problem We See",
    description: "Traditional finance is built on extracting maximum value from customers through complex fee structures, confusing jargon, and misaligned incentives."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    number: "02",
    title: "Our Approach",
    description: "We believe investing should be transparent, ethical, and accessible. We start with education, not sales pitches, and build community around shared values."
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "03",
    title: "Community Building",
    description: "By joining Bubble Invest, you become part of a movement to reshape finance for the 21st century. Your input helps us create a better solution for everyone."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    number: "04",
    title: "Education First",
    description: "Before recommending any investment, we provide the knowledge you need to understand exactly what you're investing in and why it aligns with your goals."
  }
];

const HowItWorks = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Our Vision
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The <span className="gradient-text">Broken System</span> We're Fixing</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            We're not just building another investment app. We're creating a community-driven approach to solve 
            real problems in the financial industry through education, transparency, and ethical principles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-primary/30 hidden md:block"></div>
              
              <div className="space-y-12">
                {problems.map((problem, index) => (
                  <motion.div key={index} className="flex gap-6 relative" variants={fadeInUp}>
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full tech-card border-primary/30 text-primary z-10">
                      {problem.icon}
                    </div>
                    <div className="tech-card p-6 flex-1">
                      <div className="text-xs font-semibold text-primary mb-1">{problem.number}</div>
                      <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                      <p className="text-slate-400">
                        {problem.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-xl blur-xl opacity-20"></div>
              <div className="tech-card relative overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">The Financial System Is Broken</h3>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-red-400 text-xl">✗</span>
                        Short-term Thinking
                      </h4>
                      <p className="text-sm text-slate-400">
                        Most financial products encourage short-term trading and market timing, which hurt long-term returns and increase anxiety.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-red-400 text-xl">✗</span>
                        Misaligned Incentives
                      </h4>
                      <p className="text-sm text-slate-400">
                        Percentage-based fees mean advisors make more money as your assets grow, even if they didn't contribute to that growth.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-red-400 text-xl">✗</span>
                        Lack of Education
                      </h4>
                      <p className="text-sm text-slate-400">
                        The industry benefits from keeping consumers confused and dependent on "experts" rather than empowering them with knowledge.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="bg-white/10 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Our Solution</h4>
                        <p className="text-sm text-slate-400 mb-4">
                          A subscription-based investment platform with transparent pricing, educational resources, and a community of like-minded investors focused on long-term wealth creation.
                        </p>
                        <Button onClick={() => scrollToSection('waitlist')} className="w-full">
                          Join Us in Fixing Finance
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
