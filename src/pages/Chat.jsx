import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Bot, Circle } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const conversations = [
  { id: '1', name: 'Siti Aminah', product: 'Re: Calculus Textbook', message: 'Is the price negotiable?', time: '2m ago', unread: 2, online: true },
  { id: '2', name: 'Muhammad Ali', product: 'Re: Arduino Kit', message: 'Can we meet at KTF?', time: '15m ago', unread: 0, online: true },
  { id: '3', name: 'Nurul Aisyah', product: 'Re: Lab Coat', message: 'Thank you! Item received', time: '1h ago', unread: 0, online: false },
  { id: '4', name: 'Ahmad Firdaus', product: 'Re: Desk Lamp', message: 'Still available?', time: '3h ago', unread: 1, online: false },
];

export default function Chats() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold pt-2">Messages</h1>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search conversations..." className="pl-9" />
      </div>

      {/* AI Assistant */}
      <Link to="/chat/ai" className="block">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent border border-primary/20">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">AI Shopping Assistant</p>
            <p className="text-xs text-muted-foreground">Ask me anything about products!</p>
          </div>
          <Badge className="bg-primary text-primary-foreground">AI</Badge>
        </div>
      </Link>

      {/* Conversations */}
      <div className="space-y-1">
        {conversations.map(c => (
          <Link to={`/chat/${c.id}`} key={c.id}>
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-secondary text-primary">{c.name[0]}</AvatarFallback>
                </Avatar>
                {c.online && (
                  <Circle className="w-3 h-3 text-green-500 fill-green-500 absolute bottom-0 right-0" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold">{c.name}</p>
                  <span className="text-[10px] text-muted-foreground">{c.time}</span>
                </div>
                <p className="text-xs text-primary/70 font-medium">{c.product}</p>
                <p className={`text-xs truncate mt-0.5 ${c.unread > 0 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {c.message}
                </p>
              </div>
              {c.unread > 0 && (
                <Badge className="bg-primary text-primary-foreground text-[10px] min-w-[20px] h-5 flex items-center justify-center">
                  {c.unread}
                </Badge>
              )}
            </div>
          </Link>
        ))}
      </div>
      <FigureLabel number="6.2" title="Messages List" />
    </div>
  );
}