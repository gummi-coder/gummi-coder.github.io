import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/gf-training-logo.png";
import { NewsletterSignup } from "./NewsletterSignup";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="GF Training logo"
                className="h-10 w-auto object-contain drop-shadow"
                style={{ maxWidth: 140 }}
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Umbreyttu líkama og huga með sérsniðnum æfingum, næringu og stuðningi.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href="https://www.instagram.com/gummieitt/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href="https://x.com/Gfridgeirs" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href="https://www.tiktok.com/@gummieitt?is_from_webapp=1&sender_device=pc" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
                    <path d="M28.5 10.5c-2.5 0-4.5-2-4.5-4.5h-4v17c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7 0 1 .1v-4.1c-.3 0-.7-.1-1-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8V14.5c1.2 1 2.7 1.5 4.5 1.5v-5.5z" />
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href="https://www.youtube.com/@gudmundurfridgeirs" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Heimasíða</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('thjalfun')} className="text-muted-foreground hover:text-foreground transition-smooth text-left">Þjálfun</button></li>
              <li><button onClick={() => scrollToSection('verd')} className="text-muted-foreground hover:text-foreground transition-smooth text-left">Verð</button></li>
              <li><button onClick={() => scrollToSection('um-mig')} className="text-muted-foreground hover:text-foreground transition-smooth text-left">Um mig</button></li>
              <li><button onClick={() => scrollToSection('umsagnir')} className="text-muted-foreground hover:text-foreground transition-smooth text-left">Umsagnir</button></li> 
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Aðstoð</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">Hafðu samband</Link></li>
              <li><Link to="/skilmalar" className="text-muted-foreground hover:text-foreground transition-smooth">Skilmálar</Link></li>
              <li><Link to="/skilmalar" className="text-muted-foreground hover:text-foreground transition-smooth">Persónuverndarstefna</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <NewsletterSignup />
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>gummi@gftraining.is</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 GF Training. Öll réttindi áskilin. Fyrir íþróttafólk um allan heim 💪
          </p>
        </div>
      </div>
    </footer>
  );
}