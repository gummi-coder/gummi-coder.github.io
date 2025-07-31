import { useRef, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Kit script is not needed since we're handling form submission manually
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://gummi.kit.com/7206859c46/index.js';
  //   script.async = true;
  //   script.setAttribute('data-uid', '7206859c46');
  //   document.body.appendChild(script);
  // }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const email = emailRef.current?.value;
    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      // Submit directly to ConvertKit using fetch
      const formData = new FormData();
      formData.append('email_address', email);
      formData.append('form', '67b0610893');

      const response = await fetch('https://gummi.kit.com/f/67b0610893', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This is needed for ConvertKit forms
      });

      // Clear the input
      if (emailRef.current) {
        emailRef.current.value = '';
      }

      setMessage('Takk fyrir að skrá þig! Þú ert nú á póstlistanum.');
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

      {/* ConvertKit form is now handled via fetch API */}
    </div>
  );
} 