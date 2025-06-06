
import { Facebook, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Facebook size={24} className="text-blue-500" />,
      title: 'Facebook Page',
      subtitle: 'Gep Wannaphon',
      description: 'ติดต่อผ่านเพจเฟซบุ๊ก',
      link: 'https://www.facebook.com/gep.wannaphon',
      action: 'ส่งข้อความ'
    },
    {
      icon: <Mail size={24} className="text-green-500" />,
      title: 'Email',
      subtitle: 'สำหรับงานร่วมมือ',
      description: 'ติดต่อเพื่อสอบถามหรือขอความร่วมมือ',
      link: 'mailto:contact@wannaphon.dev',
      action: 'ส่งอีเมล'
    }
  ];

  const responseTime = [
    { icon: <Clock size={20} />, text: 'ตอบกลับภายใน 24 ชั่วโมง' },
    { icon: <MapPin size={20} />, text: 'ประเทศไทย (GMT+7)' }
  ];

  return (
    <section id="contact" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">
            ติดต่อเรา
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            พร้อมตอบคำถามและให้คำปรึกษา
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </CardTitle>
                      <p className="text-sm text-primary font-medium">
                        {method.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    <span>{method.action}</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Response Information */}
          <div className="text-center">
            <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardContent className="py-8">
                <h3 className="text-xl font-bold mb-6">เวลาตอบกลับ</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  {responseTime.map((info, index) => (
                    <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-blue-500/20 px-8 py-4 rounded-full border border-primary/30 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <span className="text-lg">🚀</span>
              <span className="text-foreground">มาร่วมเรียนรู้ AI และเทคโนโลยีไปด้วยกัน</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
