
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['AI Content Creator', 'Developer', 'Tech Educator', 'YouTuber'];
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const highlights = [
    { icon: <Code size={20} />, text: '10+ ปีประสบการณ์' },
    { icon: <Sparkles size={20} />, text: '1000+ นักเรียน' },
    { icon: <Zap size={20} />, text: 'AI Expert' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Welcome Badge */}
          <div className="mb-8 inline-flex items-center space-x-2 bg-accent/50 backdrop-blur-sm px-6 py-3 rounded-full text-sm border border-border hover:border-primary/50 transition-all duration-300">
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span>สวัสดีครับ ยินดีต้อนรับสู่โลกของ AI</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-in-left">
            <span className="block text-foreground hover:scale-105 transition-transform duration-300">Wannaphon</span>
            <span className="block gradient-text hover:scale-105 transition-transform duration-300">Khamkaew</span>
          </h1>
          
          {/* Dynamic Role */}
          <div className="text-xl md:text-3xl lg:text-4xl mb-8 h-20 flex items-center justify-center">
            <span className="text-muted-foreground mr-3">I'm a</span>
            <span className="text-primary font-mono min-w-[280px] md:min-w-[400px] text-left">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            AI Content Creator และ Developer ที่มีประสบการณ์สอน 10 ปี 
            เชี่ยวชาญด้าน AI และ Coding เพื่อสร้างอนาคตที่ดีกว่าด้วยเทคโนโลยี
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-accent/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary">
                  {highlight.icon}
                </div>
                <span className="text-sm font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="group px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center space-x-2"
            >
              <span>เรียนรู้เพิ่มเติม</span>
              <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>ติดต่อเรา</span>
              <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a
              href="http://www.youtube.com/@wannaphonkhemkaew7501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition-colors duration-300 hover:scale-110 transform"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/gep.wannaphon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-wider font-medium">เลื่อนลง</span>
          <ChevronDown size={32} className="group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
