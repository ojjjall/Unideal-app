import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, CheckCircle, XCircle, Clock, Users, Zap, AlertTriangle } from 'lucide-react';
import StatCard from '@/components/shared/StatCard';
import FigureLabel from '@/components/shared/FigureLabel';

const verifications = [
  { name: 'Siti Aminah', matric: 'A22EC0102', faculty: 'FSKSM', submitted: '2 hours ago', status: 'pending' },
  { name: 'Muhammad Ali', matric: 'A22EC0087', faculty: 'FK', submitted: '5 hours ago', status: 'pending' },
  { name: 'Nurul Aisyah', matric: 'A22EC0156', faculty: 'FKEE', submitted: '1 day ago', status: 'flagged' },
];

export default function AdminVerifications() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/admin" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Verification Review</h1>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <StatCard icon={Users} label="Total" value="45" />
        <StatCard icon={Zap} label="Auto-matched" value="30" />
        <StatCard icon={AlertTriangle} label="Flagged" value="3" color="text-amber-600" />
      </div>

      <div className="space-y-3">
        {verifications.map((v, i) => (
          <Card key={i} className="border-0 shadow-sm">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarFallback className="bg-secondary text-primary">{v.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">{v.name}</p>
                    <Badge className={v.status === 'flagged' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}>
                      {v.status === 'flagged' ? <AlertTriangle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                      {v.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{v.matric} · {v.faculty}</p>
                  <p className="text-xs text-muted-foreground mt-1">Submitted {v.submitted}</p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1 h-8 text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" /> Approve
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 h-8 text-xs text-destructive">
                      <XCircle className="w-3 h-3 mr-1" /> Reject
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <FigureLabel number="3.10" title="Admin Review Verifications" />
    </div>
  );
}