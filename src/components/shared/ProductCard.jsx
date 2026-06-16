import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const conditionColors = {
  'Brand New': 'bg-green-100 text-green-700',
  'Like New': 'bg-blue-100 text-blue-700',
  'Good': 'bg-yellow-100 text-yellow-700',
  'Fair': 'bg-orange-100 text-orange-700',
  'Poor': 'bg-red-100 text-red-700',
};

export default function ProductCard({ product, showActions, onEdit, onDelete }) {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-square bg-muted relative">
          {product.images?.[0] ? (
            <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-4xl">📦</span>
            </div>
          )}
          <Badge className={`absolute top-2 left-2 text-[10px] ${conditionColors[product.condition] || ''}`}>
            {product.condition}
          </Badge>
        </div>
        <div className="p-3">
          <p className="text-sm font-medium truncate">{product.title}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">{product.category}</p>
          <p className="text-base font-bold text-primary mt-1">RM {product.price?.toFixed(2)}</p>
          {showActions && (
            <div className="flex gap-2 mt-2" onClick={e => e.preventDefault()}>
              <button onClick={() => onEdit?.(product)} className="text-xs text-blue-600 hover:underline">Edit</button>
              <button onClick={() => onDelete?.(product)} className="text-xs text-destructive hover:underline">Delete</button>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}