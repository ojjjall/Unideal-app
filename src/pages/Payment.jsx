import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Wallet, CheckCircle } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function Payment() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/checkout" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Payment</h1>
      </div>

      {/* Wallet Balance */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Wallet Balance</p>
              <p className="text-lg font-bold">RM 260.00</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" /> Sufficient
          </Badge>
        </CardContent>
      </Card>

      {/* Payment Summary */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4">
          <h3 className="text-sm font-semibold mb-3">Payment Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Product Price</span>
              <span>RM 25.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Processing Fee</span>
              <span>RM 0.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-primary">RM 25.00</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4">
          <h3 className="text-sm font-semibold mb-3">Product Details</h3>
          <div className="flex gap-3">
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100" alt="Product" className="w-14 h-14 rounded-lg object-cover" />
            <div>
              <p className="text-sm font-medium">Calculus Textbook</p>
              <p className="text-xs text-muted-foreground">Books · Good</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Link to="/order-receipt">
        <Button className="w-full" size="lg">Pay RM 25.00</Button>
      </Link>
      <FigureLabel number="4.13" title="Payment Screen" />
    </div>
  );
}