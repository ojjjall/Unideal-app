const db = require('../db');
const bcrypt = require('bcryptjs');

exports.register = async (email, matric, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO users (email, matric, password)
      VALUES (?, ?, ?)
    `;

    db.query(sql, [email, matric, hashedPassword], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

exports.login = async (email, password) => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT id, email, matric, password, user_type
      FROM users
      WHERE email = ?
    `;

    db.query(sql, [email], async (err, results) => {
      if (err) return reject(err);

      if (!results || results.length === 0) {
        return resolve(null);
      }

      const user = results[0];
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return resolve(null);
      }

      delete user.password;
      resolve(user);
    });
  });
}
exports.updateProfile = (id, email, matric) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE users SET email=?, matric=? WHERE id=?";

    db.query(sql, [email, matric, id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
exports.forgotPassword = (email) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT id FROM users WHERE email = ?";

    db.query(sql, [email], (err, results) => {
      if (err) return reject(err);

      if (!results || results.length === 0) {
        return resolve(null);
      }

      resolve(results[0]);
    });
  });
};

exports.resetPassword = async (email, newPassword) => {
  const bcrypt = require('bcryptjs');
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  return new Promise((resolve, reject) => {
    const sql = "UPDATE users SET password = ? WHERE email = ?";

    db.query(sql, [hashedPassword, email], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};