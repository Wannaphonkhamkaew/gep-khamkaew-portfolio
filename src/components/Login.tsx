
import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "เข้าสู่ระบบไม่สำเร็จ",
          description: error.message === 'Invalid login credentials' 
            ? "อีเมลหรือรหัสผ่านไม่ถูกต้อง" 
            : error.message,
          variant: "destructive",
        });
        return;
      }

      if (data.user) {
        toast({
          title: "เข้าสู่ระบบสำเร็จ",
          description: "ยินดีต้อนรับกลับ!",
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast({
        title: "รหัสผ่านไม่ตรงกัน",
        description: "กรุณาตรวจสอบรหัสผ่านยืนยัน",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      toast({
        title: "รหัสผ่านสั้นเกินไป",
        description: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            name: name,
          }
        }
      });

      if (error) {
        toast({
          title: "สมัครสมาชิกไม่สำเร็จ",
          description: error.message === 'User already registered' 
            ? "อีเมลนี้ถูกใช้งานแล้ว" 
            : error.message,
          variant: "destructive",
        });
        return;
      }

      if (data.user) {
        // Insert user data into our custom users table
        const { error: insertError } = await supabase
          .from('users')
          .insert([
            {
              id: data.user.id,
              name: name,
              email: email,
              password_hash: 'handled_by_supabase_auth', // We don't store actual password
              role: 'user'
            }
          ]);

        if (insertError) {
          console.error('Error inserting user profile:', insertError);
        }

        toast({
          title: "สมัครสมาชิกสำเร็จ",
          description: "กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชี",
        });
        
        // Switch to login form
        setIsSignUp(false);
        setName('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Wannaphon.dev</h1>
          <p className="text-muted-foreground">
            {isSignUp ? 'สร้างบัญชีใหม่เพื่อเริ่มต้น' : 'เข้าสู่ระบบเพื่อเริ่มต้นการเดินทาง'}
          </p>
        </div>

        {/* Login/SignUp Card */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl thai-heading">
              {isSignUp ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}
            </CardTitle>
            <CardDescription className="thai-body">
              {isSignUp 
                ? 'กรอกข้อมูลเพื่อสร้างบัญชีใหม่' 
                : 'กรอกข้อมูลของคุณเพื่อเข้าสู่ระบบ'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-6">
              {/* Name Input (Only for Sign Up) */}
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    ชื่อเต็ม
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="กรอกชื่อเต็มของคุณ"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  อีเมล
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="กรอกอีเมลของคุณ"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  รหัสผ่าน
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="กรอกรหัสผ่านของคุณ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input (Only for Sign Up) */}
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    ยืนยันรหัสผ่าน
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="ยืนยันรหัสผ่านของคุณ"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Forgot Password (Only for Login) */}
              {!isSignUp && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    ลืมรหัสผ่าน?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary text-background font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-primary/25"
              >
                {loading 
                  ? (isSignUp ? 'กำลังสมัครสมาชิก...' : 'กำลังเข้าสู่ระบบ...') 
                  : (isSignUp ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ')
                }
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">หรือ</span>
              </div>
            </div>

            {/* Toggle between Login/SignUp */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {isSignUp ? 'มีบัญชีอยู่แล้ว?' : 'ยังไม่มีบัญชี?'}{' '}
                <button 
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setName('');
                    setPassword('');
                    setConfirmPassword('');
                  }}
                  className="text-primary hover:text-primary/80 font-semibold transition-colors hover:underline"
                >
                  {isSignUp ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            © 2024 Wannaphon Khamkaew. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
