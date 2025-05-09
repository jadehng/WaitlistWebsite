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
    title: "The Broken System",
    description: "Today's finance is deliberately complex. Products are unnecessarily complicated, fees are hidden, predictions are sold as facts, and financial 'experts' claim special knowledge they don't have."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    number: "02",
    title: "Bubble Vision",
    description: "We're creating a new approach based on radical transparency, fair pricing, honest education, and aligned incentives. We believe finance should work for people, not against them."
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "03",
    title: "Building Together",
    description: "This isn't just our project - it's a movement. We're inviting people who share our vision to join us in creating a better financial system that serves everyone, not just the wealthy few."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    number: "04",
    title: "Continuous Learning",
    description: "We believe in democratizing financial knowledge. Everyone deserves to understand how their money works, what they're investing in, and the true nature of risk and return in plain language."
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
    <section id="how-it-works" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-50 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-gray-700 border border-gray-300 rounded-full bg-white">
            A New Path Forward
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Making Finance <span className="gradient-text">Work For You</span></h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            The financial system should exist to serve people, not exploit them. Yet the industry has evolved to 
            prioritize profits over helping people achieve their financial goals. We're building a better way.
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
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {problems.map((problem, index) => (
                  <motion.div key={index} className="flex gap-6 relative" variants={fadeInUp}>
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 z-10">
                      {problem.icon}
                    </div>
                    <div className="tech-card p-6 flex-1">
                      <div className="text-xs font-semibold text-gray-500 mb-1">{problem.number}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{problem.title}</h3>
                      <p className="text-gray-600">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl blur-xl opacity-50"></div>
              <div className="tech-card relative overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-100 rounded-lg border border-gray-200">
                      <Layers className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">What's Wrong with Finance Today</h3>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="p-4 rounded-lg bg-white border border-gray-200">
                      <h4 className="font-medium mb-2 flex items-center gap-2 text-gray-800">
                        <span className="text-red-500 text-xl">✗</span>
                        Manufactured Complexity
                      </h4>
                      <p className="text-sm text-gray-600">
                        The financial industry creates unnecessarily complex products and strategies to justify high fees and make customers dependent on "expert" guidance.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white border border-gray-200">
                      <h4 className="font-medium mb-2 flex items-center gap-2 text-gray-800">
                        <span className="text-red-500 text-xl">✗</span>
                        False Expertise Claims
                      </h4>
                      <p className="text-sm text-gray-600">
                        Financial professionals sell the illusion that they can predict market movements or pick winning investments, despite decades of evidence showing this is impossible.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white border border-gray-200">
                      <h4 className="font-medium mb-2 flex items-center gap-2 text-gray-800">
                        <span className="text-red-500 text-xl">✗</span>
                        Profit Over People
                      </h4>
                      <p className="text-sm text-gray-600">
                        The entire system is designed to extract maximum value from consumers through hidden fees, conflicts of interest, and business models where your financial success is secondary to their profits.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-full border border-gray-100">
                        <Clock className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-gray-800">The Bubble Solution</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          We're creating a new financial system based on honesty, fairness, and transparency. We'll use plain language, offer fair subscription pricing, refuse to make market predictions, and provide education that empowers you to make informed decisions.
                        </p>
                        <Button onClick={() => scrollToSection('waitlist')} className="w-full">
                          Join Our Community
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
