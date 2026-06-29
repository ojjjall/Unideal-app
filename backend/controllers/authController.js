const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { email, matric, password } = req.body;

    if (!email || !matric || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email, matric number, and password are required'
      });
    }

    await authService.register(email, matric, password);

    res.status(201).json({
      success: true,
      message: 'User registered successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: err.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    const user = await authService.login(email, password);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: err.message
    });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const { email, matric } = req.body;

    await authService.updateProfile(id, email, matric);

    res.json({
      success: true,
      message: "Profile updated successfully"
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await authService.forgotPassword(email);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Email not found'
      });
    }

    res.json({
      success: true,
      message: 'Email verified. You may reset your password.'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    await authService.resetPassword(email, newPassword);

    res.json({
      success: true,
      message: 'Password reset successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};