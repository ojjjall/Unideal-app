import React from 'react';

export const ActivityFilters = ({ filters, onFilterChange }) => {
  const handleDateRangeChange = (e) => {
    onFilterChange({ ...filters, dateRange: e.target.value });
  };

  const handleUserTypeChange = (e) => {
    onFilterChange({ ...filters, userType: e.target.value });
  };

  return (
    <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date Range
        </label>
        <select
          value={filters.dateRange}
          onChange={handleDateRangeChange}
          className="border rounded px-3 py-2"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          User Type
        </label>
        <select
          value={filters.userType}
          onChange={handleUserTypeChange}
          className="border rounded px-3 py-2"
        >
          <option value="all">All Users</option>
          <option value="students">Students Only</option>
          <option value="admins">Admins Only</option>
        </select>
      </div>
    </div>
  );
};
