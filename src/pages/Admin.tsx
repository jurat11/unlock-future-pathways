import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, GraduationCap, DollarSign, MessageSquare, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Auth from "@/components/Auth";

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  major_interest: string;
  education_status: string;
  universities: string;
  annual_contribution: string;
  additional_comment: string;
  created_at: string;
}

interface AdminSession {
  id: string;
  email: string;
  authenticated: boolean;
  loginTime: number;
}

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [adminSession, setAdminSession] = useState<AdminSession | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuthSuccess = (session: AdminSession) => {
    setAdminSession(session);
    fetchSubmissions();
  };

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    setAdminSession(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
  };

  useEffect(() => {
    // Check for existing admin session
    const checkAdminSession = () => {
      const storedSession = localStorage.getItem('adminSession');
      if (storedSession) {
        try {
          const parsedSession = JSON.parse(storedSession);
          // Check if session is less than 24 hours old
          const sessionAge = new Date().getTime() - parsedSession.loginTime;
          const maxAge = 24 * 60 * 60 * 1000; // 24 hours
          
          if (sessionAge < maxAge && parsedSession.authenticated) {
            setAdminSession(parsedSession);
            fetchSubmissions();
          } else {
            localStorage.removeItem('adminSession');
            setLoading(false);
          }
        } catch (error) {
          localStorage.removeItem('adminSession');
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    checkAdminSession();
  }, []);

  // Show auth component if admin is not logged in
  if (!adminSession) {
    return <Auth onAuthSuccess={handleAuthSuccess} />;
  }

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load submissions.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (selectedSubmission) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="container mx-auto">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setSelectedSubmission(null)}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">Submission Details</h1>
          </div>

          <Card className="max-w-4xl">
            <CardHeader>
              <CardTitle className="text-xl">
                {selectedSubmission.first_name} {selectedSubmission.last_name}
              </CardTitle>
              <p className="text-muted-foreground">
                Submitted: {formatDate(selectedSubmission.created_at)}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">{selectedSubmission.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">{selectedSubmission.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Major Interest</p>
                      <p className="text-muted-foreground">{selectedSubmission.major_interest}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Education Status</p>
                      <p className="text-muted-foreground">{selectedSubmission.education_status}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Annual Contribution</p>
                      <p className="text-muted-foreground">{selectedSubmission.annual_contribution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Universities List</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm whitespace-pre-wrap">{selectedSubmission.universities}</p>
                    </div>
                  </div>
                  
                  {selectedSubmission.additional_comment && (
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <p className="font-medium">Additional Comment</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm whitespace-pre-wrap">{selectedSubmission.additional_comment}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome, {adminSession.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Form Submissions ({submissions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <p>Loading...</p>
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No submissions yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>First Name</TableHead>
                      <TableHead>Last Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Major Interest</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.first_name}</TableCell>
                        <TableCell>{submission.last_name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.phone}</TableCell>
                        <TableCell>{submission.major_interest}</TableCell>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedSubmission(submission)}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;