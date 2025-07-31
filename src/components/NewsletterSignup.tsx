import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      // Submit to ConvertKit using a simple form submission
      const formData = new FormData();
      formData.append('email_address', email);
      formData.append('form', 'c94efceec0');

      await fetch('https://gummi.kit.com/f/c94efceec0', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setEmail('');
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
} 