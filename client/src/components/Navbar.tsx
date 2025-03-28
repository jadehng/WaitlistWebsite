import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";

const Navbar = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="border-b border-gray-200 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <SunIcon className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">LaunchPad</span>
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
        </div>
        <Button onClick={scrollToWaitlist}>
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
