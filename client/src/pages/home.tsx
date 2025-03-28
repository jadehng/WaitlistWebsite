import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Implementing smooth scrolling for anchor links
    const anchorElements = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const element = e.currentTarget as HTMLAnchorElement;
      const href = element.getAttribute('href');
      
      if (href === '#' || !href) return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: (targetElement as HTMLElement).offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };
    
    // Add event listeners
    anchorElements.forEach(anchor => {
      anchor.addEventListener('click', handleClick as EventListener);
    });
    
    // Cleanup function
    return () => {
      anchorElements.forEach(anchor => {
        anchor.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
