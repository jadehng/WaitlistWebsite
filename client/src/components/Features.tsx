import { motion } from "framer-motion";
import { 
  Clock, 
  ShieldCheck, 
  Users, 
  Lightbulb, 
  LibraryBig, 
  CircleDollarSign, 
  Handshake, 
  Scale 
} from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Radical Transparency",
    description: "We're committed to complete honesty about how finance works. We'll tell you when something is unknowable, like future market performance, and focus on what can actually be controlled."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "People Over Profits",
    description: "We believe financial services should serve people, not the other way around. Our success is measured by our impact on our community's financial wellbeing, not by extracting maximum profit."
  },
  {
    icon: <LibraryBig className="w-10 h-10" />,
    title: "Knowledge as Freedom",
    description: "Education is at our core. We'll teach you the fundamentals of finance in plain language so you can make informed decisions and understand exactly what you're investing in and why."
  },
  {
    icon: <Scale className="w-10 h-10" />,
    title: "Fair Compensation",
    description: "Our flat subscription model means we don't make more money as your investments grow. We're incentivized to provide quality service and education, not to maximize assets under management."
  },
  {
    icon: <Handshake className="w-10 h-10" />,
    title: "Accountable & Aligned",
    description: "We'll never claim to predict the future or time the markets. Instead, we'll focus on managing risk appropriately, diversification, and ensuring our interests are fully aligned with yours."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Long-Term Thinking",
    description: "We reject the culture of short-term gains that dominates finance. Instead, we encourage sustainable growth over decades through patience, consistency, and sound fundamentals."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white to-gray-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-gray-700 border border-gray-300 rounded-full bg-white">
            Our Core Principles
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">A Vision for <span className="gradient-text">Honest Finance</span></h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            The financial industry has lost its way. Instead of serving people, it often exploits them through confusion, complexity, and conflicts of interest. We're building a new path forward based on these core principles.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="tech-card p-8 h-full flex flex-col"
              variants={fadeInUp}
            >
              <div className="bg-gray-100 p-3 rounded-lg inline-flex mb-6">
                <div className="text-gray-700">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 p-8 tech-card border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-gray-100 p-3 rounded-lg inline-flex">
              <Lightbulb className="w-10 h-10 text-gray-700" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Promise to You</h3>
              <p className="text-gray-600">
                We believe finance should exist to serve your needs, not to exploit you. We will never use complex language to confuse you, claim we can predict markets, hide fees, or pretend we have special knowledge that others don't. 
                We're building a system based on honesty, fairness, and mutual respect—where your interests and our interests are perfectly aligned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
