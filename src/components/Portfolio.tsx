
import { ExternalLink, Youtube, Facebook, Globe, Play, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: 'YouTube Channel',
      subtitle: 'Wannaphon Khamkaew',
      description: 'ช่องยูทูบเกี่ยวกับ AI และ Coding สำหรับผู้ที่ต้องการเรียนรู้เทคโนโลยีใหม่ๆ พร้อมเนื้อหาที่อัปเดตตามเทรนด์ล่าสุด',
      details: {
        concept: 'สร้างเนื้อหาการเรียนรู้ AI ที่เข้าใจง่าย',
        process: 'วิจัย → สร้างสคริปต์ → ถ่ายทำ → แก้ไข → เผยแพร่',
        result: 'ช่วยให้นักเรียนมากกว่า 1000+ คนเข้าใจ AI'
      },
      icon: <Youtube size={32} className="text-red-500" />,
      link: 'http://www.youtube.com/@wannaphonkhemkaew7501',
      tags: ['AI', 'Coding', 'Education', 'Tutorial'],
      color: 'from-red-500/20 to-red-600/20',
      stats: [
        { icon: <Play size={16} />, value: '50+', label: 'วิดีโอ' },
        { icon: <Users size={16} />, value: '1K+', label: 'ผู้ติดตาม' }
      ]
    },
    {
      title: 'Facebook Page',
      subtitle: 'Gep Wannaphon',
      description: 'เพจเฟซบุ๊กที่แชร์ความรู้ด้าน AI เทคโนโลยี และนวัตกรรมใหม่ๆ พร้อมการอัปเดตข่าวสารและเทรนด์เทคโนโลยี',
      details: {
        concept: 'แพลตฟอร์มแบ่งปันความรู้และสร้างชุมชน AI',
        process: 'สร้างเนื้อหา → ออกแบบโพสต์ → โต้ตอบกับชุมชน',
        result: 'สร้างชุมชนที่หลงใหลในเทคโนโลยี AI'
      },
      icon: <Facebook size={32} className="text-blue-500" />,
      link: 'https://www.facebook.com/gep.wannaphon',
      tags: ['AI', 'Technology', 'Innovation', 'Community'],
      color: 'from-blue-500/20 to-blue-600/20',
      stats: [
        { icon: <TrendingUp size={16} />, value: 'Daily', label: 'โพสต์' },
        { icon: <Users size={16} />, value: 'Active', label: 'ชุมชน' }
      ]
    },
    {
      title: 'Personal Website',
      subtitle: 'Gep Wannaphon Portfolio',
      description: 'เว็บไซต์ส่วนตัวที่รวบรวมเนื้อหาด้าน AI และ Coding ไว้ในที่เดียว พร้อมแสดงผลงานและประสบการณ์ที่ผ่านมา',
      details: {
        concept: 'พอร์ตโฟลิโอดิจิทัลที่แสดงความเชี่ยวชาญ',
        process: 'วางแผน → ออกแบบ UI/UX → พัฒนา → ปรับปรุง',
        result: 'แพลตฟอร์มแสดงผลงานที่ครบถ้วนและน่าประทับใจ'
      },
      icon: <Globe size={32} className="text-green-500" />,
      link: '#',
      tags: ['Web Development', 'AI', 'Coding', 'Portfolio'],
      color: 'from-green-500/20 to-green-600/20',
      stats: [
        { icon: <TrendingUp size={16} />, value: 'Modern', label: 'เทคโนโลยี' },
        { icon: <Globe size={16} />, value: 'Responsive', label: 'ดีไซน์' }
      ]
    }
  ];

  const achievements = [
    { number: '10+', label: 'ปีประสบการณ์', icon: '🎓' },
    { number: '1000+', label: 'นักเรียน', icon: '👥' },
    { number: '50+', label: 'วิดีโอสอน', icon: '📹' },
    { number: '100%', label: 'ความพึงพอใจ', icon: '⭐' }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">
            ผลงานของเรา
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            แพลตฟอร์มและช่องทางที่เราสร้างสรรค์เนื้อหา เพื่อแบ่งปันความรู้ด้าน AI และเทคโนโลยีให้กับคนรุ่นใหม่
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="py-6">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3">
                  <div className="border-l-4 border-primary/30 pl-3">
                    <h5 className="text-sm font-semibold text-primary mb-1">แนวคิด:</h5>
                    <p className="text-xs text-muted-foreground">{project.details.concept}</p>
                  </div>
                  <div className="border-l-4 border-green-500/30 pl-3">
                    <h5 className="text-sm font-semibold text-green-400 mb-1">กระบวนการ:</h5>
                    <p className="text-xs text-muted-foreground">{project.details.process}</p>
                  </div>
                  <div className="border-l-4 border-blue-500/30 pl-3">
                    <h5 className="text-sm font-semibold text-blue-400 mb-1">ผลลัพธ์:</h5>
                    <p className="text-xs text-muted-foreground">{project.details.result}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-around py-3 bg-accent/30 rounded-lg">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="flex items-center justify-center text-primary mb-1">
                        {stat.icon}
                      </div>
                      <div className="text-sm font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-accent border border-border rounded-md text-xs text-muted-foreground hover:border-primary/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 group/link"
                >
                  <span>ดูผลงาน</span>
                  <ExternalLink 
                    size={16} 
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" 
                  />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-primary/10 to-blue-500/10 px-8 py-6 rounded-2xl border border-primary/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span className="text-lg font-semibold">มีผลงานอื่นๆ อีกมากมาย</span>
            </div>
            <p className="text-muted-foreground text-center max-w-md">
              ติดตามเราเพื่อดูผลงานใหม่ๆ และเรียนรู้เทคโนโลยี AI ไปด้วยกัน
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
