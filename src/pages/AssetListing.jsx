import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Search, Package } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const assets = [
  { id: '1', name: 'Soldering Iron Kit', category: 'Tools', owner: 'Ahmad Haziq', deposit: 30, status: 'available' },
  { id: '2', name: 'Digital Oscilloscope', category: 'Equipment', owner: 'Siti Aminah', deposit: 100, status: 'available' },
  { id: '3', name: 'Engineering Drawing Set', category: 'Tools', owner: 'Muhammad Ali', deposit: 15, status: 'borrowed' },
  { id: '4', name: 'Arduino Mega Board', category: 'Electronics', owner: 'Nurul Aisyah', deposit: 50, status: 'available' },
];

export default function AssetListing() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Borrow Assets</h1>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search assets..." className="pl-9" />
      </div>

      <div className="space-y-3">
        {assets.map(a => (
          <Card key={a.id} className="border-0 shadow-sm">
            <CardContent className="pt-4">
              <div className="flex gap-3">
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-semibold">{a.name}</h3>
                      <p className="text-xs text-muted-foreground">{a.category}</p>
                    </div>
                    <Badge className={a.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}>
                      {a.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Avatar className="w-5 h-5">
                      <AvatarFallback className="text-[8px] bg-secondary">{a.owner[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{a.owner}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground">Deposit: <span className="font-semibold text-foreground">RM {a.deposit.toFixed(2)}</span></p>
                    <Button size="sm" className="h-7 text-xs" disabled={a.status !== 'available'}>
                      Request to Borrow
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <FigureLabel number="7.2" title="Asset Listing & Borrowing" />
    </div>
  );
}