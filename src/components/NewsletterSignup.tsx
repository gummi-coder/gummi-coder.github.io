import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  // Simple direct form submission to ConvertKit

  return (
    <div>
      <h4 className="font-semibold text-foreground mb-4">Skráðu þig í póstlista</h4>
      <p className="text-muted-foreground mb-4">
        Fáðu nýjustu upplýsingar um heilsu og líkamsrækt.
      </p>
      
      {/* Direct ConvertKit form */}
      <form 
        action="https://gummi.kit.com/f/c94efceec0" 
        method="POST" 
        className="flex gap-2 mb-4"
        target="_blank"
      >
        <Input
          type="email"
          name="email_address"
          placeholder="Sláðu inn netfang"
          className="bg-background border-border/50"
          required
        />
        <Button type="submit" variant="hero" size="sm">
          <Mail className="w-4 h-4" />
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground">
        Skráðu þig og fáðu daglegan tölvupóst í 30 daga með öllum upplýsingum um heilsu og líkamsrækt.
      </p>
    </div>
  );
} 