import React, { useState, useEffect } from 'react';
import { SalesMetricsCard } from '../components/SalesMetricsCard';
import { RevenueChart } from '../components/RevenueChart';
import { TopProductsTable } from '../components/TopProductsTable';
import { CategoryPerformanceChart } from '../components/CategoryPerformanceChart';
import { getSalesData } from '../api/SalesController';

const AdminSalesDashboard = () => {
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('month');

  useEffect(() => {
    fetchSalesData();
  }, [timeRange]);

  const fetchSalesData = async () => {
    setLoading(true);
    try {
      const response = await getSalesData({ timeRange, role: 'admin' });
      setSalesData(response.data);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Sales & Performance Dashboard</h1>
      
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

      <div className="grid grid-cols-4 gap-4 mb-6">
        <SalesMetricsCard 
          title="Total Revenue"
          value={`RM ${salesData?.totalRevenue?.toLocaleString() || 0}`}
          change={salesData?.revenueChange || '+0%'}
          icon="💰"
        />
        <SalesMetricsCard 
          title="Total Orders"
          value={salesData?.totalOrders || 0}
          change={salesData?.ordersChange || '+0%'}
          icon="📦"
        />
        <SalesMetricsCard 
          title="Average Order Value"
          value={`RM ${salesData?.avgOrderValue?.toFixed(2) || 0}`}
          change={salesData?.avgOrderChange || '+0%'}
          icon="🛒"
        />
        <SalesMetricsCard 
          title="Conversion Rate"
          value={`${salesData?.conversionRate || 0}%`}
          change={salesData?.conversionChange || '+0%'}
          icon="📈"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <RevenueChart 
          data={salesData?.revenueTrends}
          title="Revenue Trends"
        />
        <CategoryPerformanceChart 
          data={salesData?.categoryPerformance}
          title="Sales by Category"
        />
      </div>

      <TopProductsTable 
        products={salesData?.topProducts}
        title="Top Selling Products"
      />
    </div>
  );
};

export default AdminSalesDashboard;
