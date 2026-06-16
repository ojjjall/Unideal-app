import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Eye, MessageCircle, ShoppingCart, Shield } from 'lucide-react';
import FigureLabel from '@/components/shared/FigureLabel';

export default function ProductDetail() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
          alt="Product"
          className="w-full aspect-square object-cover"
        />
        <Link to="/" className="absolute top-4 left-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      <div className="p-4 space-y-4">
        {/* Product Info */}
        <div>
          <div className="flex items-start justify-between">
            <h1 className="text-xl font-bold">Calculus Textbook</h1>
            <p className="text-xl font-bold text-primary">RM 25.00</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Badge className="bg-blue-100 text-blue-700">Books</Badge>
            <Badge className="bg-yellow-100 text-yellow-700">Good</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Eye className="w-3 h-3" /> 42 views
            </span>
          </div>
        </div>

        {/* Description */}
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-4">
            <h3 className="text-sm font-semibold mb-2">Description</h3>
            <p className="text-sm text-muted-foreground">
              James Stewart Calculus: Early Transcendentals, 8th Edition. Used for SSCE1693. Good condition with some highlighting. No torn pages.
            </p>
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

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
          <div className="max-w-lg mx-auto flex gap-3">
            <Button variant="outline" className="flex-1" size="lg">
              <MessageCircle className="w-4 h-4 mr-2" /> Contact Seller
            </Button>
            <Link to="/checkout" className="flex-1">
              <Button className="w-full" size="lg">
                <ShoppingCart className="w-4 h-4 mr-2" /> Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <FigureLabel number="4.7" title="Product Details Page" />
    </div>
  );
}