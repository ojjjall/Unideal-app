import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Bug, Lightbulb, TrendingUp, Frown, Heart } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const feedbackTypes = [
  { icon: Bug, label: 'Bug Report', color: 'text-red-500' },
  { icon: Lightbulb, label: 'Feature Request', color: 'text-amber-500' },
  { icon: TrendingUp, label: 'Improvement', color: 'text-blue-500' },
  { icon: Frown, label: 'Complaint', color: 'text-orange-500' },
  { icon: Heart, label: 'Compliment', color: 'text-pink-500' },
];

export default function SendFeedback() {
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/help" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Send Feedback</h1>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 space-y-5">
          <div className="space-y-2">
            <Label>Feedback Type</Label>
            <div className="grid grid-cols-3 gap-2">
              {feedbackTypes.map(({ icon: Icon, label, color }) => (
                <button
                  key={label}
                  onClick={() => setSelectedType(label)}
                  className={`p-3 rounded-xl border text-center transition-colors ${
                    selectedType === label
                      ? 'border-primary bg-accent'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 mx-auto mb-1 ${selectedType === label ? color : 'text-muted-foreground'}`} />
                  <span className="text-[10px] font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Brief title for your feedback" />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Tell us more about your feedback..." className="h-28" />
          </div>

          <Button className="w-full" size="lg">Submit Feedback</Button>
        </CardContent>
      </Card>
      <FigureLabel number="6.11" title="Send Feedback" />
    </div>
  );
}