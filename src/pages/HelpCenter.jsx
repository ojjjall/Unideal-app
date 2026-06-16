import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, MessageCircle, Mail, Phone, ThumbsUp, ChevronRight, HelpCircle, User, CreditCard, BookOpen } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const quickActions = [
  { icon: MessageCircle, label: 'Chat Support', color: 'bg-blue-100 text-blue-600' },
  { icon: Mail, label: 'Email Us', color: 'bg-green-100 text-green-600' },
  { icon: Phone, label: 'WhatsApp', color: 'bg-emerald-100 text-emerald-600' },
  { icon: ThumbsUp, label: 'Feedback', color: 'bg-amber-100 text-amber-600', link: '/feedback' },
];

const faqs = [
  'How do I verify my student matric card?',
  'How to top up my wallet?',
  'What happens if a seller doesn\'t deliver?',
  'How to report a suspicious user?',
];

const browseCategories = [
  { icon: HelpCircle, label: 'General', count: 12 },
  { icon: User, label: 'Account', count: 8 },
  { icon: CreditCard, label: 'Payments', count: 15 },
];

export default function HelpCenter() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Help Center</h1>
      </div>

      {/* Hero */}
      <Card className="border-0 shadow-sm bg-primary text-primary-foreground">
        <CardContent className="pt-6 text-center">
          <h2 className="text-lg font-bold">How can we help you?</h2>
          <div className="relative mt-3">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search for help..." className="pl-9 bg-white text-foreground" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2">
        {quickActions.map(({ icon: Icon, label, color, link }) => (
          <Link to={link || '#'} key={label}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-4 pb-4 flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">{label}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Popular Questions */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Popular Questions</h3>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-2 divide-y">
            {faqs.map((faq, i) => (
              <button key={i} className="w-full flex items-center justify-between py-3 text-left">
                <span className="text-sm">{faq}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Browse by Category */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Browse by Category</h3>
        <div className="grid grid-cols-3 gap-2">
          {browseCategories.map(({ icon: Icon, label, count }) => (
            <Card key={label} className="border-0 shadow-sm">
              <CardContent className="pt-4 pb-4 text-center">
                <Icon className="w-5 h-5 mx-auto text-primary mb-1" />
                <p className="text-xs font-medium">{label}</p>
                <p className="text-[10px] text-muted-foreground">{count} articles</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Card className="border-0 shadow-sm bg-secondary">
        <CardContent className="pt-4 text-center">
          <p className="text-sm font-medium">Still need help?</p>
          <p className="text-xs text-muted-foreground mt-1">Our team is here to assist you</p>
          <Link to="/contact-support">
            <Button size="sm" className="mt-3">Contact Support</Button>
          </Link>
        </CardContent>
      </Card>
      <FigureLabel number="6.9" title="Help Center" />
    </div>
  );
}