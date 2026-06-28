import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';
import { AuthAPI } from '@/api/unidealApi';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [matric, setMatric] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setMessage('');
    setError('');

    if (!email || !matric || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and confirm password do not match.');
      return;
    }

    try {
      setLoading(true);

      const result = await AuthAPI.register({
        email,
        matric,
        password
      });

      if (result.success) {
        setMessage('Account registered successfully. You can now log in.');
        setEmail('');
        setMatric('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError(result.message || result.error || 'Registration failed.');
      }
    } catch (err) {
      setError('Cannot connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-3xl font-bold text-primary-foreground">U</span>
          </div>
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Join the UTM marketplace community
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="pt-6 space-y-4">
            {message && (
              <p className="text-sm text-green-600 bg-green-50 p-2 rounded">
                {message}
              </p>
            )}

            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
                {error}
              </p>
            )}

            <div className="space-y-2">
              <Label>UTM Email</Label>
              <Input
                type="email"
                placeholder="yourname@graduate.utm.my"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Matric Number</Label>
              <Input
                placeholder="e.g., A22EC0001"
                value={matric}
                onChange={(e) => setMatric(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Log In
              </Link>
            </p>
          </CardContent>
        </Card>

        <FigureLabel number="3.3" title="User Interface for Register Page" />
      </div>
    </div>
  );
}