import { useEffect } from 'react';

export function NewsletterSignup() {
  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement('script');
    script.src = 'https://gummi.kit.com/c94efceec0/index.js';
    script.async = true;
    script.setAttribute('data-uid', 'c94efceec0');
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[data-uid="c94efceec0"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div>
      <h4 className="font-semibold text-foreground mb-4">Skráðu þig í póstlista</h4>
      <p className="text-muted-foreground mb-4">
        Fáðu nýjustu upplýsingar um heilsu og líkamsrækt.
      </p>
      
      {/* ConvertKit Embed Form */}
      <div 
        className="convertkit-form"
        data-uid="c94efceec0"
        data-format="inline"
        data-version="5"
      />
    </div>
  );
} 