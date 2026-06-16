import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const orders = [
  { id: 'ORD-2026-0045', product: 'Calculus Textbook', date: '15 May 2026', method: 'Wallet', total: 25, status: 'completed' },
  { id: 'ORD-2026-0044', product: 'Arduino Kit', date: '14 May 2026', method: 'E-Wallet', total: 80, status: 'completed' },
  { id: 'ORD-2026-0043', product: 'Lab Coat (Size M)', date: '12 May 2026', method: 'Wallet', total: 20, status: 'cancelled' },
  { id: 'ORD-2026-0042', product: 'Wireless Mouse', date: '10 May 2026', method: 'Credit Card', total: 35, status: 'completed' },
];

const statusBadge = {
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
  pending: 'bg-amber-100 text-amber-700',
};

export default function MyOrders() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Order History</h1>
      </div>

      <div className="space-y-2">
        {orders.map(o => (
          <Link to="/order-receipt" key={o.id}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-3 pb-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-muted-foreground font-mono">{o.id}</p>
                  <Badge className={statusBadge[o.status]}>{o.status}</Badge>
                </div>
                <p className="text-sm font-medium">{o.product}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-xs text-muted-foreground">
                    {o.date} · {o.method}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold">RM {o.total.toFixed(2)}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <FigureLabel number="4.14" title="Order History" />
    </div>
  );
}