import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Upload, CheckCircle, Clock } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function Verification() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Verify Matric Number</h1>
      </div>

      {/* Student Info */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Name</p>
              <p className="font-medium">Ahmad Haziq</p>
            </div>
            <div>
              <p className="text-muted-foreground">Matric No.</p>
              <p className="font-medium">A22EC0045</p>
            </div>
            <div>
              <p className="text-muted-foreground">Faculty</p>
              <p className="font-medium">FSKSM</p>
            </div>
            <div>
              <p className="text-muted-foreground">Status</p>
              <Badge className="bg-yellow-100 text-yellow-700">
                <Clock className="w-3 h-3 mr-1" /> Pending
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Area */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6">
          <h3 className="text-sm font-semibold mb-3">Upload Matric Card</h3>
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
            <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
            <p className="text-xs text-muted-foreground mt-1">JPEG, PNG (max 5MB)</p>
            <Button variant="outline" className="mt-4" size="sm">Choose File</Button>
          </div>
        </CardContent>
      </Card>

      {/* Verification Status */}
      <Card className="border-0 shadow-sm bg-amber-50">
        <CardContent className="pt-4 flex items-start gap-3">
          <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800">Verification Pending</p>
            <p className="text-xs text-amber-600 mt-1">Your matric card is being reviewed by admin. This usually takes 1-2 business days.</p>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full" size="lg">Submit for Verification</Button>

      <FigureLabel number="3.9" title="Verify Matric Number Page" />
    </div>
  );
}