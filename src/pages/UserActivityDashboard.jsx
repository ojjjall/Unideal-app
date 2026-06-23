import React, { useState, useEffect } from 'react';
import { ActivityFilters } from '../components/ActivityFilters';
import { UserAnalyticsChart } from '../components/UserAnalyticsChart';
import { SessionMetricsCard } from '../components/SessionMetricsCard';
import { getActivityData } from '../api/AnalyticsController';

const UserActivityDashboard = () => {
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    dateRange: '7d',
    userType: 'all'
  });

  useEffect(() => {
    fetchActivityData();
  }, [filters]);

  const fetchActivityData = async () => {
    setLoading(true);
    try {
      const response = await getActivityData(filters);
      setActivityData(response.data);
    } catch (error) {
      console.error('Error fetching activity data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Activity Dashboard</h1>
      
      <ActivityFilters 
        filters={filters}
        onFilterChange={setFilters}
      />
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <SessionMetricsCard 
          title="Active Users"
          value={activityData?.activeUsers || 0}
          icon="👥"
          trend="+12%"
        />
        <SessionMetricsCard 
          title="Total Sessions"
          value={activityData?.totalSessions || 0}
          icon="🔄"
          trend="+8%"
        />
        <SessionMetricsCard 
          title="Avg. Session Duration"
          value={activityData?.avgDuration || '0:00'}
          icon="⏱️"
          trend="+5%"
        />
        <SessionMetricsCard 
          title="Bounce Rate"
          value={`${activityData?.bounceRate || 0}%`}
          icon="📊"
          trend="-3%"
        />
      </div>
      
      <UserAnalyticsChart 
        data={activityData?.chartData}
        title="User Activity Trends"
      />
    </div>
  );
};

export default UserActivityDashboard;
