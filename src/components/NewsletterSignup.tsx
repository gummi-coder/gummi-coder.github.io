import { useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const kitFormRef = useRef<HTMLFormElement>(null);
  const kitEmailRef = useRef<HTMLInputElement>(null);

  // Kit script is not needed since we're handling form submission manually
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://gummi.kit.com/7206859c46/index.js';
  //   script.async = true;
  //   script.setAttribute('data-uid', '7206859c46');
  //   document.body.appendChild(script);
  // }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current.value;
    if (!email) return;

    kitEmailRef.current.value = email;
    kitFormRef.current.submit();

    // Optional: clearing and confirmation
    emailRef.current.value = '';
    alert('Takk fyrir að skrá þig!');
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
        />
        <Button type="submit" variant="hero" size="sm">
          <Mail className="w-4 h-4" />
        </Button>
      </form>

      {/* Falið Kit form */}
      <iframe name="kit-frame" style={{ display: 'none' }}></iframe>
      <form
        ref={kitFormRef}
        action="https://gummi.kit.com/f/7206859c46"
        method="POST"
        target="kit-frame"
        style={{ display: 'none' }}
      >
        <input
          type="email"
          name="email_address"
          ref={kitEmailRef}
        />
      </form>
    </div>
  );
} 