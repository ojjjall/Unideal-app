import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';
import { AuthAPI } from '@/api/unidealApi';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    setMessage('');
    setError('');

    if (!email) {
      setError('Please enter your UTM email.');
      return;
    }

    try {
      setLoading(true);

      const result = await AuthAPI.forgotPassword({ email });

      if (result.success) {
        setMessage(result.message || 'Email verified. You may reset your password.');

        setTimeout(() => {
          navigate('/reset-password', { state: { email } });
        }, 800);
      } else {
        setError(result.message || 'Email not found.');
      }
    } catch (err) {
      setError('Unable to connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Forgot Password?</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your email to verify your account
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label>UTM Email</Label>
              <Input
                type="email"
                placeholder="yourname@graduate.utm.my"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {message && <p className="text-sm text-green-600">{message}</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}

            <Button
              className="w-full"
              size="lg"
              onClick={handleForgotPassword}
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Continue'}
            </Button>

            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Log In
            </Link>
          </CardContent>
        </Card>

        <FigureLabel number="3.4" title="User Interface for Request Verification Code" />
      </div>
    </div>
  );
}