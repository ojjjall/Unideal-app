import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { KeyRound } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
            <KeyRound className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your verification code and new password
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" value="user@graduate.utm.my" disabled className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label>6-Digit Verification Code</Label>
              <div className="flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <Input
                    key={i}
                    maxLength={1}
                    className="text-center text-lg font-semibold h-12"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input type="password" placeholder="Enter new password" />
            </div>
            <div className="space-y-2">
              <Label>Confirm New Password</Label>
              <Input type="password" placeholder="Confirm new password" />
            </div>

            <Button className="w-full" size="lg">
              Reset Password
            </Button>
          </CardContent>
        </Card>
        <FigureLabel number="3.5" title="User Interface for Reset Password" />
      </div>
    </div>
  );
}