import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const testimonials = [
  {
    quote: "Bubble Invest has completely changed how I approach investing. The ETF portfolios are well-balanced, and the automation means I don't have to constantly monitor the market.",
    author: "Sarah Johnson",
    role: "Tech Professional, 32",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    performance: "+16.3%",
    years: "2"
  },
  {
    quote: "As someone just starting their career, I never thought investing would be accessible to me. With Bubble Invest's low minimum and user-friendly platform, I'm already building wealth for the future.",
    author: "Michael Chen",
    role: "Recent Graduate, 24",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    performance: "+11.8%",
    years: "1"
  },
  {
    quote: "The long-term focus really resonates with me. I've tried day trading and stock picking, but Bubble Invest's diversified approach gives me peace of mind that my retirement is on track.",
    author: "Aisha Patel",
    role: "Business Owner, 41",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    performance: "+14.2%",
    years: "1.5"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Investors <span className="gradient-text">Share Their Experience</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join thousands of investors who are already building wealth with our AI-powered ETF portfolios.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="tech-card p-8 relative"
              variants={fadeInUp}
            >
              <div className="absolute -right-3 -top-3 bg-green-500/10 p-2 rounded-full border border-green-500/20">
                <BadgeCheck className="w-6 h-6 text-green-500" />
              </div>
              
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 text-sm">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-slate-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-green-500 font-bold">{testimonial.performance}</p>
                  <p className="text-slate-400 text-xs">in {testimonial.years} years</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm italic max-w-2xl mx-auto">
            Note: Past performance is not indicative of future results. Investment returns shown are based on early investor experiences and may not represent typical results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
