import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Forgot Password?</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your email to receive a verification code
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label>UTM Email</Label>
              <Input type="email" placeholder="yourname@graduate.utm.my" />
            </div>

            <Button className="w-full" size="lg">
              Send Verification Code
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