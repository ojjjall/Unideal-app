export const getActivityData = async (filters) => {
  // Mock data - simulates backend API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
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
        }
      });
    }, 500);
  });
};

export const getSessionDetails = async (userId, date) => {
  return {
    data: {
      sessions: [
        { login: '10:30 AM', logout: '11:45 AM', duration: '1:15' },
        { login: '02:15 PM', logout: '03:30 PM', duration: '1:15' },
      ]
    }
  };
};

export const AnalyticsController = {
  async getActivityData(req, res) {
    try {
      const { dateRange, userType } = req.query;
      // In production: const data = await ActivityService.getActivityMetrics(dateRange, userType);
      const data = {
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
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};
