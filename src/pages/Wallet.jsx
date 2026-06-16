import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, ArrowUpRight, ArrowDownLeft, RotateCcw } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const transactions = [
  { type: 'topup', label: 'Wallet Top Up', amount: 100, date: '15 May 2026, 10:30 AM' },
  { type: 'purchase', label: 'Calculus Textbook', amount: -25, date: '14 May 2026, 3:15 PM' },
  { type: 'refund', label: 'Refund - Lab Coat', amount: 20, date: '13 May 2026, 11:00 AM' },
  { type: 'purchase', label: 'Wireless Mouse', amount: -35, date: '12 May 2026, 2:45 PM' },
  { type: 'topup', label: 'Wallet Top Up', amount: 200, date: '10 May 2026, 9:00 AM' },
];

const typeIcon = {
  topup: <ArrowDownLeft className="w-4 h-4 text-green-600" />,
  purchase: <ArrowUpRight className="w-4 h-4 text-red-500" />,
  refund: <RotateCcw className="w-4 h-4 text-blue-500" />,
};

export default function Wallet() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">MyWallet</h1>
      </div>

      {/* Balance */}
      <Card className="border-0 shadow-sm bg-primary text-primary-foreground">
        <CardContent className="pt-6 text-center">
          <p className="text-sm opacity-80">Available Balance</p>
          <p className="text-4xl font-bold mt-1">RM 260.00</p>
          <Link to="/top-up">
            <Button variant="secondary" className="mt-4" size="sm">
              <Plus className="w-4 h-4 mr-1" /> Top Up
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-4 text-center">
            <p className="text-xs text-muted-foreground">Total Topped Up</p>
            <p className="text-lg font-bold text-green-600">RM 300.00</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-4 text-center">
            <p className="text-xs text-muted-foreground">Total Spent</p>
            <p className="text-lg font-bold text-red-500">RM 60.00</p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <div>
        <h2 className="text-sm font-semibold mb-3">Transaction History</h2>
        <div className="space-y-2">
          {transactions.map((t, i) => (
            <Card key={i} className="border-0 shadow-sm">
              <CardContent className="pt-3 pb-3 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  t.type === 'topup' ? 'bg-green-100' : t.type === 'refund' ? 'bg-blue-100' : 'bg-red-100'
                }`}>
                  {typeIcon[t.type]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
                <p className={`text-sm font-semibold ${t.amount > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {t.amount > 0 ? '+' : ''}RM {Math.abs(t.amount).toFixed(2)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <FigureLabel number="4.10" title="MyWallet Screen" />
    </div>
  );
}