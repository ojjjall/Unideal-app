import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, FileText, AlertTriangle, RotateCcw, Clock, Ban } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function ReportDetails() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/admin/users" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Report Details</h1>
      </div>

      {/* User Profile Card */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 flex items-center gap-4">
          <Avatar className="w-14 h-14">
            <AvatarFallback className="bg-secondary text-primary text-xl">MA</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">Muhammad Ali</h2>
            <p className="text-xs text-muted-foreground">muhammad.ali@graduate.utm.my</p>
            <p className="text-xs text-muted-foreground">A22EC0087</p>
            <Badge className="mt-1 bg-red-100 text-red-700">Suspended</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Report Info */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4 space-y-3">
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" /> Report Summary
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">Report ID</p>
              <p className="font-medium">#RPT-0023</p>
            </div>
            <div>
              <p className="text-muted-foreground">Reported By</p>
              <p className="font-medium">Siti Aminah</p>
            </div>
            <div>
              <p className="text-muted-foreground">Reason</p>
              <p className="font-medium">Scam / Fraud</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date</p>
              <p className="font-medium">15 May 2026</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Description</p>
            <p className="mt-1 text-sm">User sold a product but never delivered. Multiple complaints received from different buyers about the same user.</p>
          </div>
        </CardContent>
      </Card>

      {/* Evidence */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Evidence Files
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              <FileText className="w-8 h-8" />
            </div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              <FileText className="w-8 h-8" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Admin Actions */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4 space-y-2">
          <h3 className="text-sm font-semibold">Admin Actions</h3>
          <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
            <RotateCcw className="w-4 h-4 mr-2" /> Reinstate User
          </Button>
          <Button variant="outline" className="w-full text-amber-600 border-amber-300" size="sm">
            <Clock className="w-4 h-4 mr-2" /> Suspend Temporarily
          </Button>
          <Button variant="outline" className="w-full text-destructive border-destructive/30" size="sm">
            <Ban className="w-4 h-4 mr-2" /> Escalate to Permanent
          </Button>
        </CardContent>
      </Card>
      <FigureLabel number="3.14" title="Report Details" />
    </div>
  );
}