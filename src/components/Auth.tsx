import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import bcrypt from 'bcryptjs';

interface AuthProps {
  onAuthSuccess: (adminData: any) => void;
}

const Auth = ({ onAuthSuccess }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter email and password.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // Query the admins table
      const { data: adminData, error } = await supabase
        .from('admins')
        .select('*')
        .eq('email', email.toLowerCase())
        .single();

      if (error || !adminData) {
        toast({
          title: "Error",
          description: "Invalid email or password.",
          variant: "destructive"
        });
        return;
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, adminData.password_hash);
      
      if (!isPasswordValid) {
        toast({
          title: "Error",
          description: "Invalid email or password.",
          variant: "destructive"
        });
        return;
      }

      // Store admin session in localStorage
      const adminSession = {
        id: adminData.id,
        email: adminData.email,
        authenticated: true,
        loginTime: new Date().getTime()
      };
      
      localStorage.setItem('adminSession', JSON.stringify(adminSession));

      toast({
        title: "Login successful!",
        description: "Welcome to admin dashboard."
      });

      onAuthSuccess(adminSession);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred.",
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
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <p className="text-muted-foreground">Access the admin dashboard</p>
          <div className="mt-4 p-4 bg-muted rounded-lg text-sm">
            <p className="font-medium mb-2">Default Admin Credentials:</p>
            <p><strong>Email:</strong> admin@unlocku.uz</p>
            <p><strong>Password:</strong> admin123</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                placeholder="admin@unlocku.uz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
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
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;