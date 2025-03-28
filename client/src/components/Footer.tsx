import { CircleDollarSign } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50 -z-10"></div>
      
      {/* Blurred circles for decoration */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-20 top-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <CircleDollarSign className="w-8 h-8 text-primary" />
                <div className="absolute -inset-1 rounded-full bg-primary/20 -z-10 blur-sm"></div>
              </div>
              <span className="text-xl font-bold gradient-text">Bubble Invest</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Modern, accessible, and long-term oriented investing with AI-powered ETF portfolios designed for everyone.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaTwitter />, label: "Twitter" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <FaDiscord />, label: "Discord" },
                { icon: <FaYoutube />, label: "YouTube" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary/20 hover:text-primary transition-colors" 
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-400 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Portfolios</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Early Access</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-white">Learn</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">ETF Basics</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Investment Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Market Research</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Financial Terms</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Disclosures</a></li>
            </ul>
          </div>
        </div>
        
        <div className="tech-card p-6 mb-12">
          <p className="text-slate-400 text-sm">
            <strong className="text-white">Investor Notice:</strong> Investing involves risk, including the possible loss of principal. ETFs are subject to market fluctuation and the risks of their underlying investments. ETFs are subject to management fees and other expenses. Past performance is not a guarantee of future results. This information is provided for educational purposes only and is not intended to provide investment advice or recommendations. Please consult with a qualified financial professional before making investment decisions.
          </p>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bubble Invest, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Report Bug</a>
            <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Cookie Settings</a>
            <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
