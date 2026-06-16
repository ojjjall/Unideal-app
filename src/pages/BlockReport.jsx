import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowLeft, ShieldOff, Flag } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const reportReasons = ['Spam', 'Scam', 'Harassment', 'Inappropriate Content', 'Other'];

export default function BlockReport() {
  const [reportReason, setReportReason] = useState('');

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/chats" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Block / Report User</h1>
      </div>

      <Tabs defaultValue="block">
        <TabsList className="w-full">
          <TabsTrigger value="block" className="flex-1">
            <ShieldOff className="w-4 h-4 mr-1" /> Block
          </TabsTrigger>
          <TabsTrigger value="report" className="flex-1">
            <Flag className="w-4 h-4 mr-1" /> Report
          </TabsTrigger>
        </TabsList>

        <TabsContent value="block" className="mt-4">
          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-center py-4">
                <ShieldOff className="w-12 h-12 text-destructive mx-auto mb-2" />
                <h2 className="font-semibold">Block Siti Aminah?</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  They won't be able to message you or see your listings.
                </p>
              </div>
              <div className="space-y-2">
                <Label>Reason (Optional)</Label>
                <Input placeholder="Why are you blocking this user?" />
              </div>
              <Button variant="destructive" className="w-full" size="lg">Block User</Button>
              <Button variant="outline" className="w-full">Cancel</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="report" className="mt-4">
          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label>Reason for Report</Label>
                <RadioGroup value={reportReason} onValueChange={setReportReason} className="space-y-2">
                  {reportReasons.map(r => (
                    <label key={r} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      reportReason === r ? 'border-primary bg-accent' : 'border-border'
                    }`}>
                      <RadioGroupItem value={r} />
                      <span className="text-sm">{r}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Additional Details</Label>
                <Textarea placeholder="Provide more context..." className="h-24" />
              </div>
              <Button className="w-full" size="lg">Submit Report</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <FigureLabel number="6.4" title="Block/Report User" />
    </div>
  );
}