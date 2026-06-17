import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import ProductCard from '@/components/shared/ProductCard';
import FigureLabel from '@/components/shared/FigureLabel';

const myProducts = [
  { id: '1', title: 'Calculus Textbook', category: 'Books', price: 25, condition: 'Good', images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300'] },
  { id: '2', title: 'Wireless Mouse', category: 'Electronics', price: 35, condition: 'Like New', images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300'] },
  { id: '3', title: 'Desk Lamp', category: 'Furniture', price: 40, condition: 'Brand New', images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=300'] },
  { id: '4', title: 'Lab Coat (Size M)', category: 'Fashion', price: 20, condition: 'Good', images: ['https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=300'] },
];

export default function MyItem() {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold pt-2">My Product Listings</h1>

      <div className="grid grid-cols-2 gap-3">
        {myProducts.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            showActions
            onEdit={() => {}}
            onDelete={() => setShowDelete(true)}
          />
        ))}
      </div>

      {/* Delete Confirmation */}
      <Dialog open={showDelete} onOpenChange={setShowDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this product? This action cannot be undone.
          </p>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setShowDelete(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => setShowDelete(false)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <FigureLabel number="4.3" title="My Product Listings" />
      <FigureLabel number="4.4" title="Edit Product & Delete Product Confirmation" />
    </div>
  );
}