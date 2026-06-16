import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, CheckCheck, MessageCircle, ShoppingCart, Bell, Shield } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const notifications = [
  { id: 1, sender: 'Siti Aminah', message: 'Is the price negotiable?', type: 'message', time: '2 min ago', read: false },
  { id: 2, sender: 'System', message: 'Your order ORD-2026-0045 has been completed.', type: 'order', time: '1 hour ago', read: false },
  { id: 3, sender: 'Admin', message: 'Your matric verification has been approved!', type: 'verification', time: '3 hours ago', read: true },
  { id: 4, sender: 'Ahmad Firdaus', message: 'Is the desk lamp still available?', type: 'message', time: '5 hours ago', read: true },
  { id: 5, sender: 'System', message: 'Welcome to UniDeal! Complete your profile to get started.', type: 'system', time: '1 day ago', read: true },
];

const typeIcon = {
  message: <MessageCircle className="w-4 h-4 text-blue-500" />,
  order: <ShoppingCart className="w-4 h-4 text-green-500" />,
  system: <Bell className="w-4 h-4 text-amber-500" />,
  verification: <Shield className="w-4 h-4 text-primary" />,
};

export default function Notifications() {
  const unread = notifications.filter(n => !n.read).length;

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
          <h1 className="text-xl font-bold">Notifications</h1>
          {unread > 0 && <Badge className="bg-primary text-primary-foreground">{unread}</Badge>}
        </div>
        <Button variant="ghost" size="sm" className="text-xs text-primary">
          <CheckCheck className="w-3 h-3 mr-1" /> Mark All as Read
        </Button>
      </div>

      <div className="space-y-2">
        {notifications.map(n => (
          <Card key={n.id} className={`border-0 shadow-sm ${!n.read ? 'bg-accent/50' : ''}`}>
            <CardContent className="pt-3 pb-3 flex items-start gap-3">
              <Avatar className="w-10 h-10 mt-0.5">
                <AvatarFallback className={`${!n.read ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  {n.sender[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{n.sender}</p>
                  <span className="text-[10px] text-muted-foreground">{n.time}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{n.message}</p>
              </div>
              <div className="mt-1">{typeIcon[n.type]}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <FigureLabel number="6.6" title="Notifications List" />
    </div>
  );
}