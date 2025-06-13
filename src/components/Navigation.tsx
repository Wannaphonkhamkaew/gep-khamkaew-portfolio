
import { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail, Home, LogIn } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'หน้าแรก', icon: <Home size={16} />, path: '/' },
    { id: 'about', label: 'เกี่ยวกับฉัน', icon: <User size={16} />, path: '/' },
    { id: 'portfolio', label: 'ผลงาน', icon: <Briefcase size={16} />, path: '/' },
    { id: 'contact', label: 'ติดต่อ', icon: <Mail size={16} />, path: '/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Only update active section if we're on the home page
      if (location.pathname === '/') {
        const sections = navItems.map(item => item.id);
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            return scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string, path: string) => {
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="font-mono text-xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/')}
          >
            Wannaphon.dev
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, item.path)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id && location.pathname === '/'
                    ? 'text-primary bg-accent/70 shadow-md'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent/30'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            
            {/* Login Button */}
            <button
              onClick={handleLoginClick}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ml-2 ${
                location.pathname === '/login'
                  ? 'text-primary bg-accent/70 shadow-md'
                  : 'text-muted-foreground hover:text-primary hover:bg-accent/30'
              }`}
            >
              <LogIn size={16} />
              <span>เข้าสู่ระบบ</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-accent/30"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 mb-4 border border-border shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.path)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id && location.pathname === '/'
                      ? 'text-primary bg-accent/70'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent/30'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              
              {/* Mobile Login Button */}
              <button
                onClick={handleLoginClick}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/login'
                    ? 'text-primary bg-accent/70'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent/30'
                }`}
              >
                <LogIn size={16} />
                <span>เข้าสู่ระบบ</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
