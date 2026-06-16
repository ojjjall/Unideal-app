import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Shield } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function Checkout() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Review Your Order</h1>
      </div>

      {/* Product Details */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4">
          <h3 className="text-sm font-semibold mb-3">Product Details</h3>
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150"
              alt="Product"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-medium">Calculus Textbook</p>
              <p className="text-xs text-muted-foreground">Books · Good Condition</p>
              <p className="text-lg font-bold text-primary mt-1">RM 25.00</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Seller Info */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4">
          <h3 className="text-sm font-semibold mb-3">Seller Information</h3>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">AH</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium flex items-center gap-1">
                Ahmad Haziq <Shield className="w-3 h-3 text-green-500" />
              </p>
              <p className="text-xs text-muted-foreground">ahmad.haziq@graduate.utm.my</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <Link to="/" className="flex-1">
          <Button variant="outline" className="w-full" size="lg">Cancel</Button>
        </Link>
        <Link to="/payment" className="flex-1">
          <Button className="w-full" size="lg">Proceed to Payment</Button>
        </Link>
      </div>
      <FigureLabel number="4.12" title="Checkout Screen" />
    </div>
  );
}