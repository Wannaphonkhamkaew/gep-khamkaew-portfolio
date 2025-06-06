
import { Facebook, Mail, MapPin, Clock, MessageCircle, Send, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Facebook size={24} className="text-blue-500" />,
      title: 'Facebook Page',
      subtitle: 'Gep Wannaphon',
      description: 'ติดต่อผ่านเพจเฟซบุ๊ก สำหรับคำถามด้าน AI และการเรียนรู้',
      link: 'https://www.facebook.com/gep.wannaphon',
      action: 'ส่งข้อความ',
      responseTime: 'ตอบกลับภายใน 2-4 ชั่วโมง',
      best: 'สำหรับคำถามทั่วไป'
    },
    {
      icon: <Mail size={24} className="text-green-500" />,
      title: 'Email',
      subtitle: 'สำหรับงานร่วมมือ',
      description: 'ติดต่อเพื่อสอบถามหรือขอความร่วมมือด้านการสอนและสร้างเนื้อหา',
      link: 'mailto:contact@wannaphon.dev',
      action: 'ส่งอีเมล',
      responseTime: 'ตอบกลับภายใน 24 ชั่วโมง',
      best: 'สำหรับงานร่วมมือ'
    }
  ];

  const responseInfo = [
    { icon: <Clock size={20} />, text: 'ตอบกลับภายใน 24 ชั่วโมง', subtext: 'เวลาทำการ' },
    { icon: <MapPin size={20} />, text: 'ประเทศไทย (GMT+7)', subtext: 'เขตเวลา' },
    { icon: <MessageCircle size={20} />, text: 'ภาษาไทย/English', subtext: 'ภาษาที่ใช้' }
  ];

  const services = [
    {
      title: 'การสอน AI',
      description: 'สอน AI และ Machine Learning แบบ 1:1 หรือกลุม',
      icon: '🎓'
    },
    {
      title: 'สร้างเนื้อหา',
      description: 'ร่วมมือสร้างคอนเทนต์ด้าน AI และเทคโนโลยี',
      icon: '📝'
    },
    {
      title: 'ที่ปรึกษา',
      description: 'ให้คำปรึกษาโปรเจกต์ AI และการพัฒนาระบบ',
      icon: '💡'
    },
    {
      title: 'พัฒนาเว็บ',
      description: 'รับพัฒนาเว็บแอปพลิเคชันและระบบ AI',
      icon: '💻'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">
            ติดต่อเรา
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            พร้อมตอบคำถาม ให้คำปรึกษา และร่วมมือในโปรเจกต์ด้าน AI และเทคโนโลยี
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </CardTitle>
                      <p className="text-sm text-primary font-medium">
                        {method.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {method.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-accent/30 p-3 rounded-lg">
                      <div className="font-semibold text-primary mb-1">เวลาตอบกลับ</div>
                      <div className="text-muted-foreground">{method.responseTime}</div>
                    </div>
                    <div className="bg-accent/30 p-3 rounded-lg">
                      <div className="font-semibold text-primary mb-1">เหมาะสำหรับ</div>
                      <div className="text-muted-foreground">{method.best}</div>
                    </div>
                  </div>
                  
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 group/link"
                  >
                    <Send size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    <span>{method.action}</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Offered */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in">บริการที่เรามีให้</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="text-center bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="py-6">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Response Information */}
          <div className="mb-16">
            <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="text-xl text-center">ข้อมูลการติดต่อ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {responseInfo.map((info, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <div className="font-semibold mb-1">{info.text}</div>
                      <div className="text-sm text-muted-foreground">{info.subtext}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-primary/10 to-blue-500/10 px-8 py-6 rounded-2xl border border-primary/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="text-lg font-semibold">มาร่วมเรียนรู้ AI และเทคโนโลยีไปด้วยกัน</span>
              </div>
              <p className="text-muted-foreground text-center max-w-md">
                ไม่ว่าจะเป็นคำถาม การเรียนรู้ หรือการร่วมมือ เรายินดีที่จะช่วยเหลือคุณ
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">#AI</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">#Teaching</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">#Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
