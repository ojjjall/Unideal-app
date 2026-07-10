// AnalyticsRoutes.js
// Defines the /api/analytics/* endpoints for the User Activity Dashboard Module.
// Mount this in server.js the same way authRoutes.js is mounted, e.g.:
//
//   const analyticsRoutes = require("./routes/AnalyticsRoutes");
//   app.use("/api/analytics", analyticsRoutes);

const express = require("express");
const router = express.Router();
const AnalyticsController = require("../controllers/AnalyticsController");

// Record a new activity event
router.post("/activity", AnalyticsController.recordActivity);

// Fetch filtered/paginated activity logs
router.get("/activity", AnalyticsController.listActivity);

// Aggregate session metrics (active users, total events, avg actions/user)
router.get("/session-metrics", AnalyticsController.sessionMetrics);

// Daily activity trend for charting
router.get("/trend", AnalyticsController.activityTrend);

module.exports = router;
