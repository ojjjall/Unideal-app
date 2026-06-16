import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CreditCard, Smartphone, Building2 } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const quickAmounts = [50, 100, 200, 500];

export default function TopUp() {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('card');

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/wallet" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Top Up Wallet</h1>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 space-y-5">
          {/* Amount */}
          <div className="space-y-2">
            <Label>Enter Amount (RM)</Label>
            <Input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="text-xl font-semibold h-14 text-center"
            />
            <p className="text-xs text-muted-foreground text-center">Min RM 10 / Max RM 5,000</p>
          </div>

          {/* Quick Amounts */}
          <div className="flex gap-2">
            {quickAmounts.map(a => (
              <button
                key={a}
                onClick={() => setAmount(String(a))}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  amount === String(a) ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}
              >
                RM {a}
              </button>
            ))}
          </div>

          {/* Payment Method */}
          <div className="space-y-3">
            <Label>Payment Method</Label>
            <RadioGroup value={method} onValueChange={setMethod} className="space-y-2">
              <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${method === 'card' ? 'border-primary bg-accent' : 'border-border'}`}>
                <RadioGroupItem value="card" />
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Credit / Debit Card</span>
              </label>
              <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${method === 'ewallet' ? 'border-primary bg-accent' : 'border-border'}`}>
                <RadioGroupItem value="ewallet" />
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">E-Wallet</span>
              </label>
              <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${method === 'banking' ? 'border-primary bg-accent' : 'border-border'}`}>
                <RadioGroupItem value="banking" />
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Online Banking</span>
              </label>
            </RadioGroup>
          </div>

          <Button className="w-full" size="lg" disabled={!amount}>
            Top Up RM {amount || '0.00'}
          </Button>
        </CardContent>
      </Card>
      <FigureLabel number="4.11" title="Top Up Wallet" />
    </div>
  );
}