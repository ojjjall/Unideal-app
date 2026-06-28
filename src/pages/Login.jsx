import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';
import { AuthAPI } from '@/api/unidealApi';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setMessage('');
    setError('');

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    try {
      setLoading(true);

      const result = await AuthAPI.login({
        email,
        password
      });

      if (result.success) {
        setMessage('Login successful.');

        localStorage.setItem('unideal_user', JSON.stringify(result.user));

        setTimeout(() => {
          navigate('/');
        }, 800);
      } else {
        setError(result.message || result.error || 'Login failed.');
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
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-3xl font-bold text-primary-foreground">U</span>
          </div>
          <h1 className="text-2xl font-bold">UniDeal</h1>
          <p className="text-sm text-muted-foreground mt-1">UTM Student Marketplace</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="pb-4">
            <h2 className="text-xl font-semibold text-center">Welcome Back</h2>
            <p className="text-sm text-muted-foreground text-center">Sign in to your account</p>
          </CardHeader>

          <CardContent className="space-y-4">
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
              <Label htmlFor="email">UTM Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="yourname@graduate.utm.my"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>

              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </CardContent>
        </Card>

        <FigureLabel number="3.2" title="User Interface for Login Page" />
      </div>
    </div>
  );
}