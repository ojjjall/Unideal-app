// ActivityService.js
// Handles all database logic for the User Activity Dashboard Module.
// Assumes a MySQL connection pool exported from ../db.js (same pattern as db.js
// used by authService.js), and a table `user_activity_logs` with columns:
//   id INT PK AUTO_INCREMENT
//   user_id INT
//   action VARCHAR(100)        e.g. 'login', 'view_product', 'message_sent'
//   metadata JSON NULL
//   created_at DATETIME DEFAULT CURRENT_TIMESTAMP

const db = require("../db");

/**
 * Record a single activity event for a user.
 */
async function logActivity(userId, action, metadata = null) {
  const [result] = await db.query(
    `INSERT INTO user_activity_logs (user_id, action, metadata, created_at)
     VALUES (?, ?, ?, NOW())`,
    [userId, action, metadata ? JSON.stringify(metadata) : null]
  );
  return { id: result.insertId, userId, action, metadata };
}

/**
 * Get a paginated list of raw activity events, optionally filtered
 * by userId, action type, and date range.
 */
async function getActivityLogs({ userId, action, startDate, endDate, limit = 50, offset = 0 }) {
  const conditions = [];
  const params = [];

  if (userId) {
    conditions.push("user_id = ?");
    params.push(userId);
  }
  if (action) {
    conditions.push("action = ?");
    params.push(action);
  }
  if (startDate) {
    conditions.push("created_at >= ?");
    params.push(startDate);
  }
  if (endDate) {
    conditions.push("created_at <= ?");
    params.push(endDate);
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

  const [rows] = await db.query(
    `SELECT id, user_id, action, metadata, created_at
     FROM user_activity_logs
     ${whereClause}
     ORDER BY created_at DESC
     LIMIT ? OFFSET ?`,
    [...params, Number(limit), Number(offset)]
  );

  return rows;
}

/**
 * Aggregate session metrics: total sessions, active users, and average
 * actions per user over a given date range (defaults to last 7 days).
 */
async function getSessionMetrics({ startDate, endDate } = {}) {
  const start = startDate || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const end = endDate || new Date();

  const [[totals]] = await db.query(
    `SELECT
       COUNT(*) AS totalEvents,
       COUNT(DISTINCT user_id) AS activeUsers
     FROM user_activity_logs
     WHERE created_at BETWEEN ? AND ?`,
    [start, end]
  );

  const avgActionsPerUser =
    totals.activeUsers > 0 ? Number(totals.totalEvents) / Number(totals.activeUsers) : 0;

  return {
    totalEvents: Number(totals.totalEvents) || 0,
    activeUsers: Number(totals.activeUsers) || 0,
    avgActionsPerUser: Number(avgActionsPerUser.toFixed(2)),
    rangeStart: start,
    rangeEnd: end,
  };
}

/**
 * Daily activity counts, useful for feeding UserAnalyticsChart.jsx.
 */
async function getDailyActivityTrend({ startDate, endDate } = {}) {
  const start = startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const end = endDate || new Date();

  const [rows] = await db.query(
    `SELECT DATE(created_at) AS day, COUNT(*) AS eventCount
     FROM user_activity_logs
     WHERE created_at BETWEEN ? AND ?
     GROUP BY DATE(created_at)
     ORDER BY day ASC`,
    [start, end]
  );

  return rows;
}

module.exports = {
  logActivity,
  getActivityLogs,
  getSessionMetrics,
  getDailyActivityTrend,
};
