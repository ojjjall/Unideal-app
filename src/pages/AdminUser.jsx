import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Search, Shield, ShieldOff, ShieldAlert, CheckCircle } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const stats = [
  { label: 'Restricted', value: 3, color: 'bg-orange-100 text-orange-700' },
  { label: 'Suspended', value: 2, color: 'bg-red-100 text-red-700' },
  { label: 'Permanent', value: 1, color: 'bg-red-200 text-red-800' },
  { label: 'Active', value: 156, color: 'bg-green-100 text-green-700' },
];

const users = [
  { name: 'Ahmad Haziq', email: 'ahmad.haziq@graduate.utm.my', status: 'active', role: 'Student' },
  { name: 'Siti Aminah', email: 'siti.aminah@graduate.utm.my', status: 'restricted', role: 'Student' },
  { name: 'Muhammad Ali', email: 'muhammad.ali@graduate.utm.my', status: 'suspended', role: 'Student' },
  { name: 'Nurul Aisyah', email: 'nurul.aisyah@graduate.utm.my', status: 'active', role: 'Student' },
];

const statusBadge = {
  active: 'bg-green-100 text-green-700',
  restricted: 'bg-orange-100 text-orange-700',
  suspended: 'bg-red-100 text-red-700',
};

export default function AdminUsers() {
  const [tab, setTab] = useState('all');

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/admin" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">User Access Management</h1>
      </div>

      {/* Stats Bar */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {stats.map(s => (
          <Badge key={s.label} className={`${s.color} whitespace-nowrap px-3 py-1.5`}>
            {s.value} {s.label}
          </Badge>
        ))}
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="active" className="flex-1">Active</TabsTrigger>
          <TabsTrigger value="restricted" className="flex-1">Restricted</TabsTrigger>
          <TabsTrigger value="suspended" className="flex-1">Suspended</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search users..." className="pl-9" />
      </div>

      <div className="space-y-2">
        {users.filter(u => tab === 'all' || u.status === tab).map((u, i) => (
          <Link to="/admin/report-details" key={i}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-3 pb-3 flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-secondary text-primary text-sm">{u.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{u.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                </div>
                <Badge className={statusBadge[u.status]}>{u.status}</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <FigureLabel number="3.13" title="User Access Management" />
    </div>
  );
}