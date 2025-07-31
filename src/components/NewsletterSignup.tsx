import { useRef, useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // ConvertKit API handles subscription directly - no script needed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const email = emailRef.current?.value;
    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      // Use ConvertKit API to subscribe the user
      const response = await fetch('https://api.convertkit.com/v3/forms/c94efceec0/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: 'z7HghIE6el8mQxJvAet-zw',
          email: email,
          first_name: '', // Optional: you can add a first name field if needed
        }),
      });

      if (response.ok) {
        // Clear the input
        if (emailRef.current) {
          emailRef.current.value = '';
        }
        setMessage('Takk fyrir að skrá þig! Þú ert nú á póstlistanum.');
      } else {
        const errorData = await response.json();
        console.error('ConvertKit API error:', errorData);
        setMessage('Villa kom upp. Vinsamlegast reyndu aftur.');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setMessage('Villa kom upp. Vinsamlegast reyndu aftur.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h4 className="font-semibold text-foreground mb-4">Skráðu þig í póstlista</h4>
      <p className="text-muted-foreground mb-4">
        Fáðu nýjustu upplýsingar um heilsu og líkamsrækt.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <Input
          type="email"
          ref={emailRef}
          placeholder="Sláðu inn netfang"
          className="bg-background border-border/50"
          required
          disabled={isSubmitting}
        />
        <Button type="submit" variant="hero" size="sm" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Mail className="w-4 h-4" />
          )}
        </Button>
      </form>
      
      {message && (
        <p className={`text-sm ${message.includes('Takk') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}

      {/* ConvertKit API handles subscription directly */}
    </div>
  );
} 