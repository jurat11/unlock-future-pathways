import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { User, Session } from '@supabase/supabase-js';

interface AuthProps {
  onAuthSuccess: (user: User, session: Session) => void;
}

const Auth = ({ onAuthSuccess }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        onAuthSuccess(session.user, session);
      }
    };
    
    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          onAuthSuccess(session.user, session);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [onAuthSuccess]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Xatolik",
        description: "Email va parolni kiriting.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      if (isSignUp) {
        const redirectUrl = `${window.location.origin}/admin`;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: redirectUrl
          }
        });

        if (error) throw error;

        toast({
          title: "Ro'yxatdan o'tish muvaffaqiyatli!",
          description: "Emailingizni tasdiqlash uchun pochtangizni tekshiring."
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) throw error;

        toast({
          title: "Kirish muvaffaqiyatli!",
          description: "Admin paneliga xush kelibsiz."
        });
      }
    } catch (error: any) {
      let errorMessage = "Kutilmagan xatolik yuz berdi.";
      
      if (error.message.includes("Invalid login credentials")) {
        errorMessage = "Email yoki parol noto'g'ri.";
      } else if (error.message.includes("User already registered")) {
        errorMessage = "Bu email allaqachon ro'yxatdan o'tgan.";
      } else if (error.message.includes("Password should be at least")) {
        errorMessage = "Parol kamida 6 ta belgidan iborat bo'lishi kerak.";
      }

      toast({
        title: "Xatolik",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {isSignUp ? "Admin ro'yxatdan o'tish" : "Admin kirish"}
          </CardTitle>
          <p className="text-muted-foreground">
            {isSignUp ? "Admin hisobini yarating" : "Admin paneliga kirish uchun"}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Parol</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Parolingizni kiriting"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? "Yuklanmoqda..." : (isSignUp ? "Ro'yxatdan o'tish" : "Kirish")}
            </Button>

            <div className="text-center">
              <Button
                type="button"
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm"
              >
                {isSignUp 
                  ? "Allaqachon hisobingiz bormi? Kirish" 
                  : "Hisobingiz yo'qmi? Ro'yxatdan o'ting"
                }
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;