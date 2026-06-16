import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Search, Star, Clock, GraduationCap } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const categories = ['All', 'Tutoring', 'Assignment Help', 'Language', 'Programming', 'Design'];

const services = [
  { id: '1', title: 'Calculus Tutoring', category: 'Tutoring', provider: 'Dr. Nurul', price: 30, rating: 4.8, sessions: 52 },
  { id: '2', title: 'Java Programming Help', category: 'Programming', provider: 'Ahmad Firdaus', price: 25, rating: 4.6, sessions: 34 },
  { id: '3', title: 'Academic Writing', category: 'Assignment Help', provider: 'Siti Zainab', price: 20, rating: 4.9, sessions: 67 },
  { id: '4', title: 'Mandarin Language', category: 'Language', provider: 'Lee Wei Ming', price: 35, rating: 4.7, sessions: 28 },
];

export default function AcademicServices() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Academic Services</h1>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search services..." className="pl-9" />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(s => (
          <Card key={s.id} className="border-0 shadow-sm">
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-secondary text-primary">
                      <GraduationCap className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-semibold">{s.title}</h3>
                    <p className="text-xs text-muted-foreground">{s.provider}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-secondary text-secondary-foreground text-[10px]">{s.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> {s.rating}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                        <Clock className="w-3 h-3" /> {s.sessions} sessions
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-bold text-primary whitespace-nowrap">RM {s.price}/hr</p>
              </div>
              <Button className="w-full mt-3" size="sm">Request Service</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <FigureLabel number="7.1" title="Academic Services Listing" />
    </div>
  );
}