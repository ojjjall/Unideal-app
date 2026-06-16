import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function EditProfile() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Edit Personal Details</h1>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input defaultValue="Ahmad Haziq bin Abdullah" />
          </div>
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input defaultValue="+60 12-345 6789" />
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Input defaultValue="Kolej Tun Hussein Onn, UTM Skudai" />
          </div>
          <div className="space-y-2">
            <Label>Email <span className="text-muted-foreground">(Read Only)</span></Label>
            <Input value="ahmad.haziq@graduate.utm.my" disabled className="bg-muted" />
          </div>
          <div className="space-y-2">
            <Label>Matric Number <span className="text-muted-foreground">(Read Only)</span></Label>
            <Input value="A22EC0045" disabled className="bg-muted" />
          </div>

          <Button className="w-full" size="lg">Save Changes</Button>
        </CardContent>
      </Card>
      <FigureLabel number="3.8" title="Edit Personal Details" />
    </div>
  );
}