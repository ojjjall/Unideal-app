import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Share2 } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function OrderReceipt() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/my-orders" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Order Receipt</h1>
      </div>

      {/* Success Banner */}
      <div className="text-center py-4">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-2" />
        <h2 className="text-lg font-bold">Order Successful!</h2>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Order Number</span>
            <span className="text-sm font-mono font-semibold">ORD-2026-0045</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <Badge className="bg-green-100 text-green-700">Completed</Badge>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold mb-3">Product Details</h3>
            <div className="flex gap-3">
              <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100" alt="Product" className="w-14 h-14 rounded-lg object-cover" />
              <div>
                <p className="text-sm font-medium">Calculus Textbook</p>
                <p className="text-xs text-muted-foreground">Books · Good Condition</p>
                <p className="text-sm font-bold text-primary mt-1">RM 25.00</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
            <h3 className="font-semibold">Order Information</h3>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span>15 May 2026, 3:15 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Payment Method</span>
              <span>Wallet</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Seller</span>
              <span>Ahmad Haziq</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total Paid</span>
              <span className="text-primary">RM 25.00</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full" size="lg">
        <Share2 className="w-4 h-4 mr-2" /> Share Receipt
      </Button>
      <FigureLabel number="4.15" title="Order Receipt" />
    </div>
  );
}