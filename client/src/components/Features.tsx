import { motion } from "framer-motion";
import { Clock, BarChart2, Code } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const features = [
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Save Time",
    description: "Launch in days, not months. Our templates and workflows remove the guesswork."
  },
  {
    icon: <BarChart2 className="w-10 h-10" />,
    title: "Grow Faster",
    description: "Built-in growth tools to help you acquire and retain users from day one."
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Built-in Analytics",
    description: "Understand what's working with powerful, easy-to-use analytics dashboards."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LaunchPad?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We've built the tools you need to take your idea from concept to launch in record time.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-background p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              variants={fadeInUp}
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">
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
