// This file defines the API routes for the Analytics subsystem
// In a real Express.js app, these would connect to controllers

export const AnalyticsRoutes = {
  routes: [
    { 
      method: 'GET', 
      path: '/api/analytics/activity', 
      description: 'Get user activity metrics with filters',
      controller: 'AnalyticsController.getActivityData'
    },
    { 
      method: 'GET', 
      path: '/api/analytics/activity/session/:userId', 
      description: 'Get session details for a specific user',
      controller: 'AnalyticsController.getSessionDetails'
    }
  ]
};

// REAL EXPRESS.JS IMPLEMENTATION (for reference):
// const router = require('express').Router();
// const AnalyticsController = require('./AnalyticsController');
// 
// router.get('/activity', AnalyticsController.getActivityData);
// router.get('/activity/session/:userId', AnalyticsController.getSessionDetails);
// 
// module.exports = router;
