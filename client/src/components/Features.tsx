import { motion } from "framer-motion";
import { LineChart, Coins, Shield, BarChart2, BarChart3, Percent } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const features = [
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Long-Term Oriented",
    description: "Designed for sustainable growth over years, not quick gains. Our strategies focus on building wealth steadily and reliably."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Modern & Accessible",
    description: "No complicated jargon or barriers to entry. Intuitive interfaces and clear information make investing understandable for everyone."
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    title: "Data-Driven Decisions",
    description: "Our robo-advisor uses advanced algorithms to optimize your portfolio based on your goals and risk tolerance."
  },
  {
    icon: <Coins className="w-10 h-10" />,
    title: "ETF Portfolio Focus",
    description: "Diversify with exchange-traded funds that provide exposure to entire markets with lower fees than traditional mutual funds."
  },
  {
    icon: <Percent className="w-10 h-10" />,
    title: "Low-Cost Investing",
    description: "Minimize fees to maximize your returns. Our transparent fee structure ensures more of your money stays invested."
  },
  {
    icon: <BarChart2 className="w-10 h-10" />,
    title: "Automated Rebalancing",
    description: "Your portfolio stays optimized with automatic adjustments that maintain your ideal asset allocation without manual intervention."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Our Vision
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Building <span className="gradient-text">Finance for Everyone</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We believe finance should be simple, accessible, and built for the long term. Bubble Invest brings professional investment strategies to everyone.
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
              className="tech-card p-8"
              variants={fadeInUp}
            >
              <div className="bg-primary/20 p-3 rounded-lg inline-flex mb-6">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
