import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function ConfirmEmail() {
  const [location, navigate] = useLocation();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Confirming your email...');
  
  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Get the token from URL query params
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        
        if (!token) {
          setStatus('error');
          setMessage('Invalid confirmation link. The token is missing.');
          return;
        }
        
        // Call the API to confirm the email
        const data = await fetch(`/api/confirm-email?token=${token}`).then(res => {
          if (!res.ok) {
            throw new Error(`${res.status}: ${res.statusText}`);
          }
          return res.json();
        });
        
        setStatus('success');
        setMessage(data.message || 'Your email has been confirmed successfully!');
      } catch (error: any) {
        setStatus('error');
        setMessage(error.message || 'Failed to confirm your email. Please try again or contact support.');
      }
    };
    
    confirmEmail();
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-background/80">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full max-w-md"
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Email Confirmation</CardTitle>
            <CardDescription className="text-center">
              {status === 'loading' ? 'Please wait while we confirm your email' : 
               status === 'success' ? 'Thank you for confirming your email!' : 
               'There was an issue with your confirmation'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {status === 'loading' && (
              <div className="flex flex-col items-center justify-center p-6">
                <Loader2 size={48} className="animate-spin text-primary mb-4" />
                <p className="text-center">{message}</p>
              </div>
            )}
            
            {status === 'success' && (
              <Alert variant="default" className="bg-green-500/10 border-green-500/20">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <AlertTitle className="text-green-500">Success!</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
            
            {status === 'error' && (
              <Alert variant="destructive">
                <XCircle className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              variant="default" 
              onClick={() => navigate('/')} 
              className="w-full"
            >
              Return to Home
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}