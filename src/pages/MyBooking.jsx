import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Calendar, MapPin, DollarSign } from 'lucide-react';
import FigureLabel from "../components/layout/shared/FigureLabel";

const bookings = [
  { id: '1', item: 'Soldering Iron Kit', type: 'asset', date: '18 May 2026', location: 'KTF Lobby', deposit: 30, depositStatus: 'paid', status: 'confirmed' },
  { id: '2', item: 'Calculus Tutoring', type: 'service', date: '20 May 2026', location: 'Library L2', deposit: 0, depositStatus: 'N/A', status: 'pending' },
  { id: '3', item: 'Arduino Mega Board', type: 'asset', date: '15 May 2026', location: 'P19 Lab', deposit: 50, depositStatus: 'refunded', status: 'completed' },
  { id: '4', item: 'Java Programming Help', type: 'service', date: '10 May 2026', location: 'Online', deposit: 0, depositStatus: 'N/A', status: 'completed' },
];

const statusBadge = {
  pending: 'bg-amber-100 text-amber-700',
  confirmed: 'bg-blue-100 text-blue-700',
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
};

export default function MyBookings() {
  const [tab, setTab] = useState('all');
  const filtered = tab === 'all' ? bookings : bookings.filter(b => b.status === tab);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">My Bookings</h1>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="pending" className="flex-1">Pending</TabsTrigger>
          <TabsTrigger value="confirmed" className="flex-1">Confirmed</TabsTrigger>
          <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-3">
        {filtered.map(b => (
          <Card key={b.id} className="border-0 shadow-sm">
            <CardContent className="pt-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm font-semibold">{b.item}</h3>
                  <Badge className="mt-1 bg-secondary text-secondary-foreground text-[10px]">{b.type}</Badge>
                </div>
                <Badge className={statusBadge[b.status]}>{b.status}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mt-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {b.date}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {b.location}
                </div>
                {b.deposit > 0 && (
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> Deposit: RM {b.deposit}
                  </div>
                )}
                {b.deposit > 0 && (
                  <div className="flex items-center gap-1">
                    <Badge className={b.depositStatus === 'paid' ? 'bg-green-100 text-green-700' : b.depositStatus === 'refunded' ? 'bg-blue-100 text-blue-700' : ''}>
                      {b.depositStatus}
                    </Badge>
                  </div>
                )}
              </div>
              {b.status === 'pending' && (
                <div className="flex gap-2 mt-3">
                  <Button size="sm" className="flex-1 h-8 text-xs">Confirm</Button>
                  <Button size="sm" variant="outline" className="flex-1 h-8 text-xs text-destructive">Cancel</Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <FigureLabel number="7.3" title="Booking Management" />
    </div>
  );
}