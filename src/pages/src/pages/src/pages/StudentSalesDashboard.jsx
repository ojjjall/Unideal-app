import React, { useState, useEffect } from 'react';
import { SalesMetricsCard } from '../components/SalesMetricsCard';
import { RevenueChart } from '../components/RevenueChart';
import { TopProductsTable } from '../components/TopProductsTable';
import { getStudentSalesData } from '../api/SalesController';

const StudentSalesDashboard = ({ userId }) => {
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('month');

  useEffect(() => {
    fetchSalesData();
  }, [timeRange, userId]);

  const fetchSalesData = async () => {
    setLoading(true);
    try {
      const response = await getStudentSalesData({ userId, timeRange });
      setSalesData(response.data);
    } catch (error) {
      console.error('Error fetching student sales data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Sales Dashboard</h1>
      
      <div className="flex gap-2 mb-6">
        {['week', 'month', 'quarter', 'year'].map(range => (
          <button
            key={range}
            className={`px-4 py-2 rounded ${
              timeRange === range 
                ? 'bg-primary text-white' 
                : 'bg-gray-200'
            }`}
            onClick={() => setTimeRange(range)}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <SalesMetricsCard 
          title="My Revenue"
          value={`RM ${salesData?.myRevenue?.toLocaleString() || 0}`}
          change={salesData?.revenueChange || '+0%'}
          icon="💰"
        />
        <SalesMetricsCard 
          title="My Sales"
          value={salesData?.mySales || 0}
          change={salesData?.salesChange || '+0%'}
          icon="📦"
        />
        <SalesMetricsCard 
          title="Average Price"
          value={`RM ${salesData?.avgPrice?.toFixed(2) || 0}`}
          change={salesData?.avgPriceChange || '+0%'}
          icon="🏷️"
        />
      </div>

      <RevenueChart 
        data={salesData?.revenueTrends}
        title="My Revenue Trends"
      />

      <TopProductsTable 
        products={salesData?.myProducts}
        title="My Top Selling Products"
      />
    </div>
  );
};

export default StudentSalesDashboard;
