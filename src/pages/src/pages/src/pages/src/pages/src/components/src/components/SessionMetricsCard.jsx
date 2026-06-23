import React from 'react';

export const SessionMetricsCard = ({ title, value, icon, trend }) => {
  const isPositive = trend?.startsWith('+');
  const trendColor = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span className={`text-sm font-medium ${trendColor}`}>
          {trend}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm mt-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};
