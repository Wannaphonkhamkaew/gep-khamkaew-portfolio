
import { GraduationCap, Award, Users, Code, Heart, Coffee, BookOpen, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: <Users size={24} />, number: '10+', label: 'ปีประสบการณ์สอน', color: 'text-blue-400' },
    { icon: <Code size={24} />, number: '1000+', label: 'นักเรียนที่ได้สอน', color: 'text-green-400' },
    { icon: <Award size={24} />, number: 'AI', label: 'เชี่ยวชาญ', color: 'text-purple-400' },
    { icon: <BookOpen size={24} />, number: '50+', label: 'วิดีโอสอน', color: 'text-orange-400' },
  ];

  const skills = [
    { name: 'Artificial Intelligence', level: 95, color: 'bg-blue-500' },
    { name: 'Machine Learning', level: 90, color: 'bg-green-500' },
    { name: 'Python Programming', level: 85, color: 'bg-yellow-500' },
    { name: 'Content Creation', level: 95, color: 'bg-purple-500' },
    { name: 'Online Teaching', level: 100, color: 'bg-red-500' },
    { name: 'YouTube Creator', level: 88, color: 'bg-pink-500' },
  ];

  const hobbies = [
    { icon: <Code size={20} />, name: 'Coding', description: 'สร้างโปรเจกต์ AI ใหม่ๆ' },
    { icon: <Coffee size={20} />, name: 'Coffee', description: 'คอกาแฟตัวยง' },
    { icon: <Heart size={20} />, name: 'Teaching', description: 'แบ่งปันความรู้ให้คนอื่น' },
    { icon: <Zap size={20} />, name: 'Innovation', description: 'ติดตามเทคโนโลยีใหม่' },
  ];

  return (
    <section id="about" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">
            เกี่ยวกับฉัน
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ผมคือ Wannaphon Khamkaew AI Content Creator และ Developer ที่หลงใหลในการสอนและสร้างสรรค์เนื้อหาด้าน AI
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <GraduationCap className="mr-3 text-primary" size={28} />
                  ประวัติการศึกษา
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-primary">
                      ระบบสารสนเทศทางคอมพิวเตอร์
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      มหาวิทยาลัยเทคโนโลยีราชมงคล
                    </p>
                    <p className="text-sm text-muted-foreground">
                      พื้นฐานที่แข็งแกร่งด้านคอมพิวเตอร์และระบบสารสนเทศ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">ประสบการณ์การทำงาน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      AI Content Creator & Educator
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      สร้างเนื้อหาด้าน AI และสอนออนไลน์มาแล้ว 10 ปี
                    </p>
                    <p className="text-sm text-muted-foreground">
                      เชี่ยวชาญในการอธิบายเทคโนโลยี AI ที่ซับซ้อนให้เข้าใจง่าย
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      YouTube Creator & Developer
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      ผู้สร้างเนื้อหาด้าน AI และ Coding บนหลายแพลตฟอร์ม
                    </p>
                    <p className="text-sm text-muted-foreground">
                      มีผู้ติดตามกว่า 1000+ คนที่เรียนรู้ AI ผ่านช่องทางของผม
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="py-6">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-in">ความเชี่ยวชาญ</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-accent rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 animate-fade-in">งานอดิเรกและความสนใจ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="py-6 text-center">
                  <div className="text-primary mb-3 flex justify-center">
                    {hobby.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{hobby.name}</h4>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
