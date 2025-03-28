import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistEntrySchema } from "@shared/schema";
import type { InsertWaitlistEntry } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, RocketIcon, CircleDollarSign, LockIcon, CreditCard, ArrowRight } from "lucide-react";
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

  const perks = [
    {
      icon: <RocketIcon className="w-5 h-5" />,
      title: "Early Access",
      description: "Be first to experience our innovative ETF portfolios"
    },
    {
      icon: <CircleDollarSign className="w-5 h-5" />,
      title: "Reduced Fees",
      description: "Lifetime fee discount for founding members"
    },
    {
      icon: <LockIcon className="w-5 h-5" />,
      title: "Priority Support",
      description: "Direct access to our financial advisors"
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
            Limited Spots Available
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Bubble Invest <span className="gradient-text">Waitlist</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Be among the first to experience our revolutionary approach to ETF investing. Early members receive exclusive benefits and priority access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="tech-card p-6 border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">No Credit Card Required</h3>
                    <p className="text-slate-400 text-sm">Just sign up to secure your spot</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {perks.map((perk, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        {perk.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white">{perk.title}</p>
                        <p className="text-slate-400 text-sm">{perk.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                    ].map((src, i) => (
                      <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-slate-900">
                        <img src={src} alt="User avatar" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-slate-900 flex items-center justify-center text-primary text-xs">
                      +86
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    <span className="text-white font-medium">89 people</span> joined in the last 24 hours
                  </p>
                </div>
                
                <div className="mt-4 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-blue-500 w-[78%]"></div>
                </div>
                <p className="text-slate-400 text-xs mt-2">Waitlist is 78% full - secure your spot now</p>
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
              <h3 className="text-2xl font-bold mb-6">Reserve Your Spot</h3>
              
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
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <Checkbox id="terms" required className="data-[state=checked]:bg-primary" />
                      <label htmlFor="terms" className="text-sm text-slate-400">
                        I agree to receive updates about Bubble Invest and understand that I can unsubscribe at any time.
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
                        Join the Waitlist
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
                  <DialogTitle className="text-center text-2xl font-bold">You're on the list!</DialogTitle>
                  <DialogDescription className="text-center text-slate-400">
                    Thanks for joining our waitlist. We'll notify you as soon as Bubble Invest is ready for you to start your investment journey.
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-slate-800/50 p-4 rounded-lg mt-4">
                  <p className="text-center text-slate-300 text-sm">
                    <span className="font-medium">Pro tip:</span> Share with friends to move up the waitlist. We'll be inviting users in order of signup date.
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
