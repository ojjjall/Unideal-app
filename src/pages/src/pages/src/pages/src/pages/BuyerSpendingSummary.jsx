import React, { useState, useEffect } from 'react';
import { SpendingByCategoryChart } from '../components/SpendingByCategoryChart';
import { SpendingTrendsChart } from '../components/SpendingTrendsChart';
import { TopBuyersTable } from '../components/TopBuyersTable';
import { CategoryBreakdownCard } from '../components/CategoryBreakdownCard';
import { getSpendingData } from '../api/SpendingController';

const BuyerSpendingSummary = () => {
  const [spendingData, setSpendingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState('month');

  useEffect(() => {
    fetchSpendingData();
  }, [period]);

  const fetchSpendingData = async () => {
    setLoading(true);
    try {
      const response = await getSpendingData({ period });
      setSpendingData(response.data);
    } catch (error) {
      console.error('Error fetching spending data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Buyer Spending Summary</h1>
      
      <div className="flex gap-2 mb-6">
        {['week', 'month', 'quarter', 'year'].map(p => (
          <button
            key={p}
            className={`px-4 py-2 rounded ${
              period === p ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
            onClick={() => setPeriod(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-600">Total Spending</h3>
          <p className="text-2xl font-bold text-primary">
            RM {spendingData?.totalSpending?.toLocaleString() || 0}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-600">Average per User</h3>
          <p className="text-2xl font-bold text-primary">
            RM {spendingData?.avgPerUser?.toFixed(2) || 0}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-600">Total Buyers</h3>
          <p className="text-2xl font-bold text-primary">
            {spendingData?.totalBuyers || 0}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <SpendingByCategoryChart 
          data={spendingData?.categorySpending}
        />
        <SpendingTrendsChart 
          data={spendingData?.spendingTrends}
        />
      </div>

      <TopBuyersTable 
        buyers={spendingData?.topBuyers}
      />

      <CategoryBreakdownCard 
        categories={spendingData?.categoryBreakdown}
      />
    </div>
  );
};

export default BuyerSpendingSummary;
