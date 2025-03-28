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
    icon: <Clock className="w-10 h-10" />,
    title: "Long-Term Value Creation",
    description: "We focus on sustainable growth over decades, not quarters. True wealth is built with patience and consistency, not chasing trends or timing markets."
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Ethical & Transparent",
    description: "We believe in full disclosure of our investment philosophy, fees, and potential risks. No hidden costs, no complex fee structures designed to confuse."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Community-Driven",
    description: "Join a community of like-minded individuals who believe in fair, accessible finance. Share knowledge, learn together, and grow collectively."
  },
  {
    icon: <LibraryBig className="w-10 h-10" />,
    title: "Financial Education First",
    description: "We prioritize helping you understand how finance works. Educational resources, interactive tools, and clear explanations accompany every feature."
  },
  {
    icon: <Handshake className="w-10 h-10" />,
    title: "No False Promises",
    description: "Unlike traditional financial services that claim to predict markets, we acknowledge that no one can truly forecast financial futures. We focus on what's controllable instead."
  },
  {
    icon: <CircleDollarSign className="w-10 h-10" />,
    title: "Subscription, Not Percentage",
    description: "Our transparent subscription model means we charge a flat fee instead of a percentage of assets. As your wealth grows, our fee stays the same."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Our Principles
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Revolutionizing <span className="gradient-text">Finance for Good</span></h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            We're building a financial community that puts people first. Our mission is to make finance honest,
            transparent, and accessible to all, with a focus on ethical principles and long-term value creation.
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
              <div className="bg-primary/20 p-3 rounded-lg inline-flex mb-6">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400 flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 p-8 tech-card border border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/20 p-3 rounded-lg inline-flex">
              <Lightbulb className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">A New Financial Paradigm</h3>
              <p className="text-slate-400">
                We're not just building another investment platform. We're creating a movement to reshape finance
                for the 21st century—one that serves people rather than extracting value from them, that educates
                rather than obscures, and that builds community rather than encouraging isolation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
