import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Bell, Sparkles } from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';
import FigureLabel from '@/components/shared/FigureLabel';

const categories = ['All', 'Books', 'Electronics', 'Fashion', 'Furniture', 'Food & Beverage'];

const sampleProducts = [
  { id: '1', title: 'Calculus Textbook', category: 'Books', price: 25, condition: 'Good', images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300'], view_count: 42 },
  { id: '2', title: 'Wireless Mouse', category: 'Electronics', price: 35, condition: 'Like New', images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300'], view_count: 28 },
  { id: '3', title: 'Desk Lamp', category: 'Furniture', price: 40, condition: 'Brand New', images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=300'], view_count: 15 },
  { id: '4', title: 'Lab Coat (Size M)', category: 'Fashion', price: 20, condition: 'Good', images: ['https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=300'], view_count: 33 },
  { id: '5', title: 'Arduino Kit', category: 'Electronics', price: 80, condition: 'Brand New', images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=300'], view_count: 56 },
  { id: '6', title: 'Nasi Lemak Set', category: 'Food & Beverage', price: 5, condition: 'Brand New', images: ['https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300'], view_count: 89 },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? sampleProducts
    : sampleProducts.filter(p => p.category === activeCategory);

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <h1 className="text-xl font-bold text-primary">UniDeal</h1>
          <p className="text-xs text-muted-foreground">UTM Student Marketplace</p>
        </div>
        <Link to="/notifications" className="relative p-2">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search products..." className="pl-9 bg-card" />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-primary text-primary-foreground'
                : 'bg-card text-muted-foreground border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recommended */}
      <div>
        <h2 className="text-sm font-semibold flex items-center gap-1 mb-3">
          <Sparkles className="w-4 h-4 text-amber-500" /> Recommended for You
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
          {sampleProducts.slice(0, 4).map(p => (
            <div key={p.id} className="min-w-[140px] max-w-[140px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <FigureLabel number="4.8" title="Recommended For You Section" />
      </div>

      {/* Product Grid */}
      <div>
        <h2 className="text-sm font-semibold mb-3">All Products</h2>
        <div className="grid grid-cols-2 gap-3">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <FigureLabel number="4.6" title="Search & Filter Page" />
    </div>
  );
}