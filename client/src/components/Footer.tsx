import { Network } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 text-gray-700 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-white opacity-50 -z-10"></div>

      {/* Blurred circles for decoration */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-20 top-20 w-32 h-32 bg-gray-100 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <Network className="w-8 h-8 text-gray-700 bubble-animation rotate-45" />
                <div className="absolute -inset-2 rounded-full bg-gray-100 -z-10 blur-md animate-pulse"></div>
                <div className="absolute -inset-1 rounded-full bg-gray-200 -z-10 blur-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-800">Bubble</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Modern, accessible, and long-term oriented investing with transparent strategies that focus on what you can control, not on false market predictions.
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
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors" 
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Portfolios</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Early Access</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Learn</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Investment Fundamentals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Common Investment Myths</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Behavior & Finance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Financial Terms</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Disclosures</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
          <p className="text-gray-700 text-sm">
            <strong className="text-gray-800">Our Investment Philosophy:</strong> We believe in transparency and honesty. Investing inherently involves risk, and no one can truly predict market movements. Unlike traditional approaches that claim to "beat the market," we focus on education, long-term thinking, and building a community that understands that past performance doesn't guarantee future results. We don't make false promises - instead, we provide the tools and knowledge to help you make informed decisions in an uncertain financial world.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bubble, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Report Bug</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Cookie Settings</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;