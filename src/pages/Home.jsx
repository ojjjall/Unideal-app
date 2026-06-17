import ProductCard from '../components/layout/shared/ProductCard.jsx';
import React, { useState, useEffect } from 'react';
import { ProductAPI, AnalyticsAPI } from '../api/unidealApi';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchRecommendations();
    // Log user activity
    AnalyticsAPI.logActivity({
      activity_type: 'login',
      timestamp: new Date().toISOString()
    });
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const result = await ProductAPI.search('', {});
      setProducts(result || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecommendations = async () => {
    try {
      // Simple recommendation based on recent products
      const allProducts = await ProductAPI.search('', {});
      // Get top viewed products
      const sorted = (allProducts || []).sort((a, b) => 
        (b.view_count || 0) - (a.view_count || 0)
      );
      setRecommendations(sorted.slice(0, 5));
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to UniDeal</h1>
      
      {/* Recommendations */}
      <h2 className="text-xl font-semibold mb-2">Recommended for You</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* All Products */}
      <h2 className="text-xl font-semibold mb-2">All Listings</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;