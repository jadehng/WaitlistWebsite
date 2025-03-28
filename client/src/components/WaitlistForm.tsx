import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistEntrySchema } from "@shared/schema";
import type { InsertWaitlistEntry } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Loader2, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Lightbulb, 
  ArrowRight,
  CircleDollarSign
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const WaitlistForm = () => {
  const { toast } = useToast();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<InsertWaitlistEntry>({
    resolver: zodResolver(insertWaitlistEntrySchema),
    defaultValues: {
      name: "",
      email: "",
      comments: "",
    },
  });

  const submitWaitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      setShowSuccessModal(true);
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertWaitlistEntry) => {
    submitWaitlistMutation.mutate(data);
  };

  const communityValues = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Shared Vision",
      description: "Join a community that believes in ethical, transparent, and accessible finance"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collective Wisdom",
      description: "Benefit from community knowledge sharing and group financial education"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Educational Focus",
      description: "Access resources to understand investing fundamentals before making decisions"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Value Alignment",
      description: "Be part of a movement that values long-term growth over short-term gains"
    }
  ];

  return (
    <section id="waitlist" className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/30 via-slate-900 to-slate-900 -z-10"></div>
      
      {/* Circle decorations */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            Building a Community
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our <span className="gradient-text">Movement</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We're creating a community of people who believe finance should work differently. This isn't just a product - it's a vision for how we can make finance more ethical, transparent, and accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="tech-card p-8 border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <CircleDollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Our Community Values</h3>
                    <p className="text-slate-400">What makes us different</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mt-6">
                  {communityValues.map((value, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        {value.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white">{value.title}</p>
                        <p className="text-slate-400 text-sm">{value.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <p className="text-sm text-slate-300 italic">
                    "We're not just building another financial app. We're creating a movement that puts education first, transparency at the center, and long-term value creation as the goal."
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/30"></div>
                    <p className="text-xs text-slate-400">Founder, Bubble Invest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-xl blur-xl opacity-20"></div>
            <div className="tech-card p-8 relative">
              <h3 className="text-2xl font-bold mb-2">Join the Movement</h3>
              <p className="text-slate-400 mb-6">Be part of a community reshaping finance for the 21st century</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-300">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name"
                            className="bg-slate-800 border-slate-700 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-300">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="you@example.com"
                            className="bg-slate-800 border-slate-700 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-slate-300">What interests you most about our vision? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share what resonates with you about our approach to finance..."
                            className="bg-slate-800 border-slate-700 text-white h-24"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <Checkbox id="terms" required className="data-[state=checked]:bg-primary" />
                      <label htmlFor="terms" className="text-sm text-slate-400">
                        I'd like to be part of this community and receive updates. I understand I can unsubscribe anytime.
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full glow-effect group"
                    disabled={submitWaitlistMutation.isPending}
                  >
                    {submitWaitlistMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <span className="flex items-center">
                        Join Our Community
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {showSuccessModal && (
            <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
              <DialogContent className="sm:max-w-md tech-card border-primary/30">
                <DialogHeader>
                  <div className="mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 glow-effect">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <DialogTitle className="text-center text-2xl font-bold">Welcome to Our Community!</DialogTitle>
                  <DialogDescription className="text-center text-slate-400">
                    Thank you for joining us on this journey to reshape finance. We're excited to build something meaningful together and will keep you updated on our progress.
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-slate-800/50 p-4 rounded-lg mt-4">
                  <p className="text-center text-slate-300 text-sm">
                    <span className="font-medium">Help us grow:</span> Share our vision with like-minded friends who might be interested in joining our community of financial changemakers.
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <Button onClick={() => setShowSuccessModal(false)} className="px-8">
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WaitlistForm;