import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-3xl font-bold text-primary-foreground">U</span>
          </div>
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-sm text-muted-foreground mt-1">Join the UTM marketplace community</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label>UTM Email</Label>
              <Input type="email" placeholder="yourname@graduate.utm.my" />
            </div>
            <div className="space-y-2">
              <Label>Matric Number</Label>
              <Input placeholder="e.g., A22EC0001" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Input type={showPassword ? 'text' : 'password'} placeholder="Create a password" />
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
              <Input type="password" placeholder="Confirm your password" />
            </div>

            <Button className="w-full" size="lg">
              Sign Up
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