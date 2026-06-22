import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  User,
  Mail,
  ShieldCheck,
  FileText,
  ShoppingBag,
  Wallet,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function Profile() {
  const menuItems = [
    { title: 'My Details', icon: User, path: '/edit-profile' },
    { title: 'Verification', icon: ShieldCheck, path: '/verification' },
    { title: 'My Orders', icon: ShoppingBag, path: '/orders' },
    { title: 'Wallet', icon: Wallet, path: '/wallet' },
    { title: 'Settings', icon: Settings, path: '/settings' }
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      <div className="max-w-md mx-auto space-y-6">

        <h1 className="text-2xl font-bold">Profile</h1>

        <Card className="shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12" />
            </div>

            <h2 className="text-xl font-semibold">Garrah Thabit Mohammed</h2>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
              <Mail className="w-4 h-4" />
              <span>garrah@graduate.utm.my</span>
            </div>

            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              <ShieldCheck className="w-4 h-4" />
              Verified Student
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center justify-between px-4 py-4 border-b last:border-b-0 hover:bg-muted transition"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </Link>
              );
            })}
          </CardContent>
        </Card>

        <Button variant="destructive" className="w-full">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>

        <FigureLabel number="3.7" title="Profile Page" />
      </div>
    </div>
  );
}
