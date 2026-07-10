// AnalyticsController.js
// HTTP request handlers for the User Activity Dashboard Module.
// Delegates all data access to ActivityService.js (same controller -> service
// -> db pattern used in authController.js -> authService.js -> db.js).

const ActivityService = require("../services/ActivityService");

/**
 * POST /api/analytics/activity
 * Body: { userId, action, metadata? }
 * Records a single activity event (e.g. login, product view, message sent).
 */
async function recordActivity(req, res) {
  try {
    const { userId, action, metadata } = req.body;

    if (!userId || !action) {
      return res.status(400).json({ error: "userId and action are required" });
    }

    const entry = await ActivityService.logActivity(userId, action, metadata);
    return res.status(201).json(entry);
  } catch (err) {
    console.error("recordActivity error:", err);
    return res.status(500).json({ error: "Failed to record activity" });
  }
}

/**
 * GET /api/analytics/activity
 * Query: userId?, action?, startDate?, endDate?, limit?, offset?
 * Used by ActivityFilters.jsx to populate the raw activity log table.
 */
async function listActivity(req, res) {
  try {
    const { userId, action, startDate, endDate, limit, offset } = req.query;
    const logs = await ActivityService.getActivityLogs({
      userId,
      action,
      startDate,
      endDate,
      limit,
      offset,
    });
    return res.json(logs);
  } catch (err) {
    console.error("listActivity error:", err);
    return res.status(500).json({ error: "Failed to fetch activity logs" });
  }
}

/**
 * GET /api/analytics/session-metrics
 * Query: startDate?, endDate?
 * Used by SessionMetricsCard.jsx.
 */
async function sessionMetrics(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const metrics = await ActivityService.getSessionMetrics({ startDate, endDate });
    return res.json(metrics);
  } catch (err) {
    console.error("sessionMetrics error:", err);
    return res.status(500).json({ error: "Failed to compute session metrics" });
  }
}

/**
 * GET /api/analytics/trend
 * Query: startDate?, endDate?
 * Used by UserAnalyticsChart.jsx to render the activity-over-time line chart.
 */
async function activityTrend(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const trend = await ActivityService.getDailyActivityTrend({ startDate, endDate });
    return res.json(trend);
  } catch (err) {
    console.error("activityTrend error:", err);
    return res.status(500).json({ error: "Failed to fetch activity trend" });
  }
}

module.exports = {
  recordActivity,
  listActivity,
  sessionMetrics,
  activityTrend,
};
