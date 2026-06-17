import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-square bg-gray-100">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
        <CardContent className="p-3">
          <h3 className="font-semibold text-sm truncate">{product.name}</h3>
          <p className="text-primary font-bold">RM {product.price?.toFixed(2)}</p>
          <p className="text-xs text-gray-500">{product.condition}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;