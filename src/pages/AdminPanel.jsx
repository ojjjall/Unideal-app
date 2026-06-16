import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, ChevronRight, BarChart3, FileCheck } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function AdminPanel() {
  return (
    <div className="p-4 space-y-4">
      <div className="pt-2">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <p className="text-sm text-muted-foreground">Manage users and platform</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-4 text-center">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <FileCheck className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">Pending Verifications</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-4 text-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-muted-foreground">Restricted Users</p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Links */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4 divide-y">
          <Link to="/admin/verifications" className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                <FileCheck className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-sm font-medium">Verification Review</span>
                <p className="text-xs text-muted-foreground">Review student verifications</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-amber-100 text-amber-700">12</Badge>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </Link>
          <Link to="/admin/users" className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-sm font-medium">User Access Management</span>
                <p className="text-xs text-muted-foreground">Manage user accounts</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </Link>
          <Link to="/admin/analytics" className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-sm font-medium">Analytics Dashboard</span>
                <p className="text-xs text-muted-foreground">View platform analytics</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </Link>
        </CardContent>
      </Card>
      <FigureLabel number="3.12" title="Admin Panel" />
    </div>
  );
}