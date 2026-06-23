export const ActivityService = {
  async getActivityMetrics(dateRange, userType) {
    // In production, this would query the database
    // For now, return mock data
    const mockData = {
      activeUsers: 245,
      totalSessions: 423,
      avgDuration: '12:34',
      bounceRate: 18,
      chartData: [
        { date: 'Jun 16', users: 45 },
        { date: 'Jun 17', users: 52 },
        { date: 'Jun 18', users: 38 },
        { date: 'Jun 19', users: 61 },
        { date: 'Jun 20', users: 49 },
      ]
    };
    
    return mockData;
  },

  async getUserSessions(userId, date) {
    return {
      sessions: [
        { login: '10:30 AM', logout: '11:45 AM', duration: '1:15' },
        { login: '02:15 PM', logout: '03:30 PM', duration: '1:15' },
      ]
    };
  }
};
