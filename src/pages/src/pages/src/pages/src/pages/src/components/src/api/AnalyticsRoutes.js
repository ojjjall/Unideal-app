// This would be used if you have a backend server
// For now, it's a placeholder to show the structure

import { AnalyticsController } from './AnalyticsController';

// In a real Express.js app, this would be:
// const router = require('express').Router();
// router.get('/activity', AnalyticsController.getActivityData);
// router.get('/activity/session/:userId', AnalyticsController.getSessionDetails);
// module.exports = router;

export const AnalyticsRoutes = {
  routes: [
    { method: 'GET', path: '/api/analytics/activity', handler: AnalyticsController.getActivityData },
    { method: 'GET', path: '/api/analytics/activity/session/:userId', handler: AnalyticsController.getSessionDetails }
  ]
};
