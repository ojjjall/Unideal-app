import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Camera, Plus } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

const conditions = ['Brand New', 'Like New', 'Good', 'Fair', 'Poor'];
const categories = ['Books', 'Electronics', 'Fashion', 'Furniture', 'Food & Beverage', 'Sports', 'Stationery', 'Other'];

export default function AddProduct() {
  const [selectedCondition, setSelectedCondition] = useState('');

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold pt-2">Add New Product</h1>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 space-y-5">
          {/* Photos */}
          <div className="space-y-2">
            <Label>Photos <span className="text-muted-foreground">(Max 5)</span></Label>
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button className="w-20 h-20 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 shrink-0 hover:border-primary transition-colors">
                <Camera className="w-5 h-5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">Add</span>
              </button>
              {[1, 2].map(i => (
                <div key={i} className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Plus className="w-5 h-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="e.g., Calculus Textbook" />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* Condition */}
          <div className="space-y-2">
            <Label>Condition</Label>
            <div className="flex flex-wrap gap-2">
              {conditions.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCondition(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCondition === c
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label>Price (RM)</Label>
            <Input type="number" placeholder="0.00" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Describe your product..." className="h-24" />
          </div>

          <Button className="w-full" size="lg">List Product</Button>
        </CardContent>
      </Card>
      <FigureLabel number="4.2" title="Add New Product" />
    </div>
  );
}