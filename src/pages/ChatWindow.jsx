import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Send, MoreVertical, Flag, ShieldOff } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import FigureLabel from '@/components/shared/FigureLabel';

const messages = [
  { id: 1, sender: 'other', text: 'Hi! Is the Calculus textbook still available?', time: '2:30 PM' },
  { id: 2, sender: 'me', text: 'Yes, it is! Are you interested?', time: '2:31 PM' },
  { id: 3, sender: 'other', text: 'Yes! Is the price negotiable? Can you do RM 20?', time: '2:32 PM' },
  { id: 4, sender: 'me', text: 'I can do RM 22. The book is in good condition with minimal highlighting.', time: '2:33 PM' },
  { id: 5, sender: 'other', text: 'Deal! Where should we meet?', time: '2:34 PM' },
  { id: 6, sender: 'me', text: 'How about KTF lobby tomorrow at 3pm?', time: '2:35 PM' },
];

export default function ChatWindow() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-card border-b">
        <Link to="/chats" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <Avatar className="w-9 h-9">
          <AvatarFallback className="bg-secondary text-primary text-sm">SA</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-sm font-semibold">Siti Aminah</p>
          <p className="text-[10px] text-green-500">Online</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <ShieldOff className="w-4 h-4 mr-2" /> Block User
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              <Flag className="w-4 h-4 mr-2" /> Report User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
              m.sender === 'me'
                ? 'bg-primary text-primary-foreground rounded-br-sm'
                : 'bg-card border border-border rounded-bl-sm'
            }`}>
              <p className="text-sm">{m.text}</p>
              <p className={`text-[10px] mt-1 ${m.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {m.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-card border-t">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button size="icon" className="shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <FigureLabel number="6.3" title="Chat Window" />
    </div>
  );
}