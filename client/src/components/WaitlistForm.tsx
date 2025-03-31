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
      title: "Honest Finance",
      description: "Join a community that rejects false promises and embraces radical transparency"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "People-First Approach",
      description: "Help build financial services that prioritize human needs over corporate profits"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Knowledge Democratization",
      description: "Access clear, jargon-free financial education that empowers informed decisions"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Aligned Incentives",
      description: "Support a model where our success is directly tied to delivering genuine value to you"
    }
  ];

  return (
    <section id="waitlist" className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 -z-10"></div>
      
      {/* Circle decorations */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium text-gray-700 border border-gray-300 rounded-full bg-white">
            Join the Bubble Community
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Be Part of the <span className="gradient-text">Solution</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're building a community of people who want an honest, transparent financial system that serves people, not profits. This isn't just a product - it's a movement to fundamentally change how finance works and who it works for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <CircleDollarSign className="h-8 w-8 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Our Community Values</h3>
                    <p className="text-gray-500">What makes us different</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mt-6">
                  {communityValues.map((value, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                        {value.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{value.title}</p>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700 italic">
                    "Our goal is to build a financial system where honesty is the default, not the exception. Where people are treated as partners, not as sources of profit. Where knowledge is shared, not hoarded as a source of power."
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <p className="text-xs text-gray-500">Bubble Community</p>
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
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl blur-xl opacity-50"></div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Be a Founding Member</h3>
              <p className="text-gray-600 mb-6">Help us build a financial system that serves people, not profits</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name"
                            className="bg-white border-gray-200 text-gray-800"
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
                        <FormLabel className="text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="you@example.com"
                            className="bg-white border-gray-200 text-gray-800"
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
                        <FormLabel className="text-gray-700">What interests you most about our vision? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share what resonates with you about our approach to finance..."
                            className="bg-white border-gray-200 text-gray-800 h-24"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <Checkbox id="terms" required className="border-gray-300 data-[state=checked]:bg-gray-800" />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I want to join the Bubble community for honest, transparent finance. I understand I can unsubscribe from updates anytime.
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white group"
                    disabled={submitWaitlistMutation.isPending}
                  >
                    {submitWaitlistMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <span className="flex items-center">
                        Join Bubble Community
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
              <DialogContent className="sm:max-w-md bg-white border border-gray-200">
                <DialogHeader>
                  <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
                    <CheckCircle2 className="w-10 h-10 text-gray-700" />
                  </div>
                  <DialogTitle className="text-center text-2xl font-bold text-gray-800">Welcome to Bubble!</DialogTitle>
                  <DialogDescription className="text-center text-gray-600">
                    Thank you for joining our community for honest, transparent finance. Together, we can create a financial system that works for everyone, not just the select few. We'll keep you updated as we build the future of finance.
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-gray-50 p-4 rounded-lg mt-4 border border-gray-100">
                  <p className="text-center text-gray-700 text-sm">
                    <span className="font-medium">Spread the word:</span> Share our vision for honest finance with friends who are tired of the traditional system's false promises and hidden fees. Together we can drive real change.
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <Button onClick={() => setShowSuccessModal(false)} className="px-8 bg-gray-800 hover:bg-gray-700 text-white">
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