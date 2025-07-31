import { useRef, useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Load ConvertKit script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://gummi.kit.com/c94efceec0/index.js';
    script.async = true;
    script.setAttribute('data-uid', 'c94efceec0');
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(`script[data-uid="c94efceec0"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const email = emailRef.current?.value;
    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      // Set the email in the hidden ConvertKit form
      const convertkitEmail = document.getElementById('convertkit-email') as HTMLInputElement;
      if (convertkitEmail) {
        convertkitEmail.value = email;
      }

      // Submit the ConvertKit form to the iframe
      const convertkitForm = document.getElementById('convertkit-form') as HTMLFormElement;
      if (convertkitForm) {
        convertkitForm.submit();
      }

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

      {/* ConvertKit iframe for form submission */}
      <iframe 
        name="convertkit-iframe" 
        style={{ display: 'none' }}
        title="ConvertKit Form"
      />
      <form
        action="https://gummi.kit.com/f/c94efceec0"
        method="POST"
        target="convertkit-iframe"
        style={{ display: 'none' }}
        id="convertkit-form"
      >
        <input
          type="email"
          name="email_address"
          id="convertkit-email"
        />
      </form>
    </div>
  );
} 