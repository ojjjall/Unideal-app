import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Monitor, User, CreditCard, Package, ShieldAlert, HelpCircle } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const categories = [
  { icon: Monitor, label: 'Technical Issue' },
  { icon: User, label: 'Account Problem' },
  { icon: CreditCard, label: 'Payment Issue' },
  { icon: Package, label: 'Listing Problem' },
  { icon: ShieldAlert, label: 'Safety Concern' },
  { icon: HelpCircle, label: 'Other' },
];

const priorities = ['Low', 'Normal', 'High', 'Urgent'];

export default function ContactSupport() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('Normal');

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/help" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Contact Support</h1>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 space-y-5">
          <div className="space-y-2">
            <Label>Subject</Label>
            <Input placeholder="Brief description of your issue" />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <div className="grid grid-cols-3 gap-2">
              {categories.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={() => setSelectedCategory(label)}
                  className={`p-3 rounded-xl border text-center transition-colors ${
                    selectedCategory === label
                      ? 'border-primary bg-accent'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 mx-auto mb-1 ${selectedCategory === label ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="text-[10px] font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Priority</Label>
            <div className="flex gap-2">
              {priorities.map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedPriority(p)}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${
                    selectedPriority === p
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Describe your issue in detail..." className="h-28" />
          </div>

          <Button className="w-full" size="lg">Submit Ticket</Button>
        </CardContent>
      </Card>
      <FigureLabel number="6.10" title="Contact Support" />
    </div>
  );
}