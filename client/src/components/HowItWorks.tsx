import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CircleDollarSign, Target, AreaChart, Zap } from "lucide-react";

const steps = [
  {
    icon: <Target className="w-8 h-8" />,
    number: "01",
    title: "Set Your Goals",
    description: "Tell us your financial goals, time horizon, and risk tolerance. Our platform creates a personalized investment strategy just for you."
  },
  {
    icon: <CircleDollarSign className="w-8 h-8" />,
    number: "02",
    title: "Fund Your Account",
    description: "Link your bank account and make your initial deposit. Start with as little as $100 and set up recurring deposits to grow your portfolio."
  },
  {
    icon: <AreaChart className="w-8 h-8" />,
    number: "03",
    title: "Smart Portfolio Creation",
    description: "Our AI-powered robo-advisor builds and manages a diversified ETF portfolio optimized for your goals and risk profile."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "04",
    title: "Automatic Management",
    description: "Sit back as our platform handles rebalancing, dividend reinvestment, and tax optimization to maximize your returns with minimal effort."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How <span className="gradient-text">Bubble Invest</span> Works</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our automated platform makes investing simple and efficient, so you can focus on your goals while we handle the details.
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
                {steps.map((step, index) => (
                  <motion.div key={index} className="flex gap-6 relative" variants={fadeInUp}>
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full tech-card border-primary/30 text-primary z-10">
                      {step.icon}
                    </div>
                    <div className="tech-card p-6 flex-1">
                      <div className="text-xs font-semibold text-primary mb-1">{step.number}</div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-slate-400">
                        {step.description}
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
              <div className="tech-card relative overflow-hidden pb-0">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Portfolio Growth Projection</h3>
                  <p className="text-slate-400 text-sm mb-6">Based on historical market performance with regular contributions</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-slate-400">Starting Amount</p>
                      <p className="text-2xl font-bold">$5,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Monthly Contribution</p>
                      <p className="text-2xl font-bold">$500</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Time Horizon</p>
                      <p className="text-2xl font-bold">20 Years</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-64 w-full relative">
                  {/* Chart grid lines */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-5">
                    {Array(30).fill(0).map((_, i) => (
                      <div key={i} className="border-t border-l border-slate-700 chart-grid"></div>
                    ))}
                  </div>
                  
                  {/* Chart area */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-primary/40 to-transparent"
                    style={{
                      clipPath: "polygon(0 100%, 5% 85%, 10% 82%, 15% 80%, 20% 75%, 25% 77%, 30% 70%, 35% 68%, 40% 65%, 45% 60%, 50% 55%, 55% 50%, 60% 45%, 65% 40%, 70% 37%, 75% 35%, 80% 30%, 85% 25%, 90% 20%, 95% 18%, 100% 15%, 100% 100%)"
                    }}
                  ></div>
                  
                  {/* Chart line */}
                  <svg 
                    className="absolute inset-0" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,85 C5,82 10,80 15,80 C20,75 25,77 30,70 C35,68 40,65 45,60 C50,55 55,50 60,45 C65,40 70,37 75,35 C80,30 85,25 90,20 C95,18 100,15 100,15" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="2" 
                      vectorEffect="non-scaling-stroke" 
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3498db" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Data points */}
                  {[
                    { x: 0, y: 85 }, { x: 15, y: 80 }, { x: 30, y: 70 }, 
                    { x: 45, y: 60 }, { x: 60, y: 45 }, { x: 75, y: 35 }, 
                    { x: 100, y: 15 }
                  ].map((point, i) => (
                    <div 
                      key={i}
                      className="absolute w-3 h-3 bg-primary rounded-full border-2 border-white" 
                      style={{ left: `${point.x}%`, bottom: `${point.y}%`, transform: 'translate(-50%, 50%)' }}
                    ></div>
                  ))}
                  
                  {/* Y-axis labels */}
                  <div className="absolute left-2 bottom-2 text-xs text-slate-400">$5K</div>
                  <div className="absolute left-2 bottom-1/2 text-xs text-slate-400">$150K</div>
                  <div className="absolute left-2 top-2 text-xs text-slate-400">$300K</div>
                  
                  {/* X-axis labels */}
                  <div className="absolute left-0 bottom-0 text-xs text-slate-400">Now</div>
                  <div className="absolute left-1/2 bottom-0 text-xs text-slate-400 -translate-x-1/2">10 Years</div>
                  <div className="absolute right-0 bottom-0 text-xs text-slate-400">20 Years</div>
                </div>
                
                <div className="p-6 border-t border-slate-800 flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-slate-400">Projected Value</p>
                    <p className="text-2xl font-bold gradient-text">$305,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Estimated Annual Return</p>
                    <p className="text-2xl font-bold text-green-500">8.5%</p>
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
