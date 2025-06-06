
import { GraduationCap, Award, Users, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={24} />, number: '10+', label: 'ปีประสบการณ์สอน' },
    { icon: <Code size={24} />, number: '1000+', label: 'นักเรียนที่ได้สอน' },
    { icon: <Award size={24} />, number: 'AI', label: 'เชี่ยวชาญ' },
  ];

  const skills = [
    'Artificial Intelligence',
    'Machine Learning',
    'Python Programming',
    'Content Creation',
    'Online Teaching',
    'YouTube Creator',
  ];

  return (
    <section id="about" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">
            เกี่ยวกับผม
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ความเป็นมาและประสบการณ์
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-primary" size={28} />
              ประวัติการศึกษา
            </h3>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                ระบบสารสนเทศทางคอมพิวเตอร์
              </h4>
              <p className="text-muted-foreground">
                มหาวิทยาลัยเทคโนโลยีราชมงคล
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6">ประสบการณ์</h3>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  AI Content Creator
                </h4>
                <p className="text-muted-foreground mb-2">
                  สร้างเนื้อหาด้าน AI และเทคโนโลยี
                </p>
                <p className="text-sm text-muted-foreground">
                  ประสบการณ์สอน 10 ปี
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Tech Educator
                </h4>
                <p className="text-muted-foreground mb-2">
                  สอน AI และ Programming
                </p>
                <p className="text-sm text-muted-foreground">
                  เชี่ยวชาญด้าน AI และ Coding
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 animate-fade-in">ความเชี่ยวชาญ</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-accent border border-border rounded-full text-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
