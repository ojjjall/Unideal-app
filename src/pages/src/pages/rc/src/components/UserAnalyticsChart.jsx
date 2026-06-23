import React from 'react';

export const UserAnalyticsChart = ({ data, title }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-4">{title}</h3>
        <div className="text-center text-gray-500 py-8">
          No data available
        </div>
      </div>
    );
  }

  const maxValue = Math.max(...data.map(d => d.users || 0));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="h-64 flex items-end justify-between gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-blue-500 rounded-t"
              style={{ 
                height: `${(item.users / maxValue) * 100}%`,
                minHeight: '10px'
              }}
            />
            <span className="text-xs text-gray-500 mt-1">{item.date}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-2 text-sm text-gray-600">
        <span>👥 Users</span>
      </div>
    </div>
  );
};
