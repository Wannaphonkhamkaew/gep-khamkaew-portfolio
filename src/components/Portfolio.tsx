
import { ExternalLink, Youtube, Facebook, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: 'YouTube Channel',
      subtitle: 'Wannaphon Khamkaew',
      description: 'ช่องยูทูบเกี่ยวกับ AI และ Coding สำหรับผู้ที่ต้องการเรียนรู้เทคโนโลยีใหม่ๆ',
      icon: <Youtube size={32} className="text-red-500" />,
      link: 'http://www.youtube.com/@wannaphonkhemkaew7501',
      tags: ['AI', 'Coding', 'Education', 'Tutorial'],
      color: 'from-red-500/20 to-red-600/20'
    },
    {
      title: 'Facebook Page',
      subtitle: 'Gep Wannaphon',
      description: 'เพจเฟซบุ๊กที่แชร์ความรู้ด้าน AI เทคโนโลยี และนวัตกรรมใหม่ๆ',
      icon: <Facebook size={32} className="text-blue-500" />,
      link: 'https://www.facebook.com/gep.wannaphon',
      tags: ['AI', 'Technology', 'Innovation', 'Community'],
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Website',
      subtitle: 'Gep Wannaphon',
      description: 'เว็บไซต์ส่วนตัวที่รวบรวมเนื้อหาด้าน AI และ Coding ไว้ในที่เดียว',
      icon: <Globe size={32} className="text-green-500" />,
      link: '#',
      tags: ['Web Development', 'AI', 'Coding', 'Portfolio'],
      color: 'from-green-500/20 to-green-600/20'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">
            ผลงานของเรา
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            แพลตฟอร์มและช่องทางที่เราสร้างสรรค์เนื้อหา
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-accent border border-border rounded text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 group/link"
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

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-accent/50 px-6 py-3 rounded-full animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <span className="text-muted-foreground">มีผลงานอื่นๆ อีกมากมาย</span>
            <span className="text-primary">ติดตามเราได้ที่ช่องทางด้านล่าง</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
