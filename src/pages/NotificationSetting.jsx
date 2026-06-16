import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ArrowLeft, MessageCircle, Bell, Smartphone } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    messages: true,
    system: true,
    push: false,
  });

  const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Notification Settings</h1>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4 divide-y">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-primary" />
              <div>
                <Label className="text-sm font-medium">New Messages</Label>
                <p className="text-xs text-muted-foreground">Get notified for new messages</p>
              </div>
            </div>
            <Switch checked={settings.messages} onCheckedChange={() => toggle('messages')} />
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" />
              <div>
                <Label className="text-sm font-medium">System Updates</Label>
                <p className="text-xs text-muted-foreground">Order status, verifications</p>
              </div>
            </div>
            <Switch checked={settings.system} onCheckedChange={() => toggle('system')} />
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-primary" />
              <div>
                <Label className="text-sm font-medium">Push Notifications</Label>
                <p className="text-xs text-muted-foreground">Receive push on your device</p>
              </div>
            </div>
            <Switch checked={settings.push} onCheckedChange={() => toggle('push')} />
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4">
          <h3 className="text-sm font-semibold mb-3">Notification Preview</h3>
          <div className="p-3 bg-muted rounded-lg flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold">UniDeal</p>
              <p className="text-xs text-muted-foreground">You have a new message from Siti Aminah</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full">Reset to Default</Button>
      <FigureLabel number="6.7" title="Notification Settings" />
    </div>
  );
}