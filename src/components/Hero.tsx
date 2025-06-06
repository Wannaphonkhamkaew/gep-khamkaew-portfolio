
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['AI Content Creator', 'Developer', 'Tech Educator'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < currentRole.length) {
        setDisplayText(currentRole.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6 inline-flex items-center space-x-2 bg-accent/50 px-4 py-2 rounded-full text-sm">
            <Sparkles size={16} className="text-primary" />
            <span>สวัสดีครับ ยินดีต้อนรับ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            <span className="block text-foreground">Wannaphon</span>
            <span className="block gradient-text">Khamkaew</span>
          </h1>
          
          <div className="text-xl md:text-3xl mb-8 h-16 flex items-center justify-center">
            <span className="text-muted-foreground mr-2">I'm a</span>
            <span className="text-primary font-mono min-w-[300px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            AI Content Creator และ Developer ที่มีประสบการณ์สอน 10 ปี 
            เชี่ยวชาญด้าน AI และ Coding
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              เรียนรู้เพิ่มเติม
            </button>
            <button
              onClick={() => window.open('#contact', '_self')}
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105"
            >
              ติดต่อเรา
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
