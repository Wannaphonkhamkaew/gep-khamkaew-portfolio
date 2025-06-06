
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span className="text-muted-foreground">and</span>
            <Code size={16} className="text-primary" />
            <span className="text-muted-foreground">by Wannaphon Khamkaew</span>
          </div>
          
          <div className="text-sm text-muted-foreground mb-4">
            © {currentYear} Wannaphon Khamkaew. All rights reserved.
          </div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href="https://www.facebook.com/gep.wannaphon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Facebook
            </a>
            <a 
              href="http://www.youtube.com/@wannaphonkhemkaew7501" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
