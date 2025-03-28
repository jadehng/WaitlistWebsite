import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const steps = [
  {
    number: 1,
    title: "Validate Your Idea",
    description: "Use our landing page templates to collect interest and validate demand before building anything."
  },
  {
    number: 2,
    title: "Design Your Product",
    description: "Drag-and-drop interface builder and pre-built components make design a breeze."
  },
  {
    number: 3,
    title: "Launch and Iterate",
    description: "One-click deployment to get your product in users' hands. Collect feedback automatically."
  },
  {
    number: 4,
    title: "Scale With Confidence",
    description: "Our infrastructure grows with you, from your first user to your millionth."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our simple four-step process takes you from idea to market faster than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div key={index} className="flex gap-4" variants={fadeInUp}>
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80" 
              alt="Product workflow visualization" 
              className="rounded-xl shadow-lg w-full"
              width="600"
              height="450"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
