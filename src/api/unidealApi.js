import { base44 } from './base44Client';

// ============================================================
// STUDENT API
// ============================================================

export const StudentAPI = {
  // Create a new student profile
  create: async (data) => {
    return await base44.entities.Students.create(data);
  },

  // Get student profile by ID
  getById: async (id) => {
    return await base44.entities.Students.get(id);
  },

  // Get student by email
  getByEmail: async (email) => {
    return await base44.entities.Students.filter({
      where: { email: { $eq: email } }
    });
  },

  // Update student profile
  update: async (id, data) => {
    return await base44.entities.Students.update(id, data);
  },

  // Get all students (admin only)
  getAll: async () => {
    return await base44.entities.Students.list();
  },

  // Verify student identity
  verifyStudent: async (id, data) => {
    return await base44.entities.Students.update(id, {
      verification_status: data.status,
      ...data
    });
  },

  // Suspend a student (admin)
  suspend: async (id, reason, duration) => {
    const updated = await base44.entities.Students.update(id, {
      account_status: 'suspended'
    });

    // Log admin action
    await AdminActionsAPI.create({
      target_user_id: id,
      action_type: 'suspend',
      reason: reason,
      duration: duration || 7
    });

    return updated;
  },

  // Reinstate a student (admin)
  reinstate: async (id, reason) => {
    const updated = await base44.entities.Students.update(id, {
      account_status: 'active'
    });

    // Log admin action
    await AdminActionsAPI.create({
      target_user_id: id,
      action_type: 'reinstate',
      reason: reason
    });

    return updated;
  }
};

// ============================================================
// WALLET API
// ============================================================

export const WalletAPI = {
  // Get or create wallet for a student
  getByStudent: async (studentId) => {
    const wallets = await base44.entities.Wallets.filter({
      where: { student_id: { $eq: studentId } }
    });

    if (wallets.length > 0) {
      return wallets[0];
    }

    // Create wallet if not exists
    return await base44.entities.Wallets.create({
      student_id: studentId,
      balance: 0
    });
  },

  // Get wallet balance
  getBalance: async (studentId) => {
    const wallet = await WalletAPI.getByStudent(studentId);
    return wallet.balance || 0;
  },

  // Top up wallet
  topUp: async (studentId, amount, paymentMethod) => {
    // Validate amount
    if (amount < 10 || amount > 5000) {
      throw new Error('Amount must be between RM 10 and RM 5,000');
    }

    const wallet = await WalletAPI.getByStudent(studentId);

    // Create transaction record
    const transaction = await base44.entities.WalletTransactions.create({
      wallet_id: wallet.id,
      student_id: studentId,
      type: 'topup',
      amount: amount,
      description: `Top-up via ${paymentMethod}`,
      payment_method: paymentMethod,
      status: 'pending'
    });

    // Update wallet balance
    const updatedWallet = await base44.entities.Wallets.update(wallet.id, {
      balance: (wallet.balance || 0) + amount,
      last_transaction_date: new Date().toISOString()
    });

    // Update transaction status
    await base44.entities.WalletTransactions.update(transaction.id, {
      status: 'completed'
    });

    return updatedWallet;
  },

  // Process payment (holds funds in escrow)
  processPayment: async (studentId, amount, description, referenceId) => {
    const wallet = await WalletAPI.getByStudent(studentId);

    if ((wallet.balance || 0) < amount) {
      throw new Error('Insufficient balance');
    }

    // Create transaction record
    const transaction = await base44.entities.WalletTransactions.create({
      wallet_id: wallet.id,
      student_id: studentId,
      type: 'payment',
      amount: amount,
      description: description,
      reference_id: referenceId,
      status: 'pending'
    });

    // Hold funds (deduct from balance, but don't release yet)
    const updatedWallet = await base44.entities.Wallets.update(wallet.id, {
      balance: (wallet.balance || 0) - amount,
      last_transaction_date: new Date().toISOString()
    });

    return {
      wallet: updatedWallet,
      transaction: transaction
    };
  },

  // Release payment to seller (after confirmation)
  releasePayment: async (transactionId) => {
    const transaction = await base44.entities.WalletTransactions.get(transactionId);

    if (transaction.status !== 'pending') {
      throw new Error('Transaction is not pending');
    }

    // Find seller's wallet
    // Note: This would need the seller_id from the transaction
    // Implementation depends on your Order/Transaction flow

    // Update transaction status
    await base44.entities.WalletTransactions.update(transactionId, {
      status: 'completed'
    });

    return { success: true };
  },

  // Get transaction history
  getHistory: async (studentId) => {
    const wallet = await WalletAPI.getByStudent(studentId);

    return await base44.entities.WalletTransactions.filter({
      where: { wallet_id: { $eq: wallet.id } },
      orderBy: { created_date: 'desc' }
    });
  }
};

// ============================================================
// ADMIN ACTIONS API
// ============================================================

export const AdminActionsAPI = {
  create: async (data) => {
    return await base44.entities.AdminActions.create(data);
  },

  getByUser: async (userId) => {
    return await base44.entities.AdminActions.filter({
      where: { target_user_id: { $eq: userId } },
      orderBy: { created_date: 'desc' }
    });
  },

  getAll: async () => {
    return await base44.entities.AdminActions.list({
      orderBy: { created_date: 'desc' }
    });
  }
};

// ============================================================
// REPORTS API
// ============================================================

export const ReportsAPI = {
  create: async (data) => {
    return await base44.entities.UserReports.create(data);
  },

  getByUser: async (userId) => {
    return await base44.entities.UserReports.filter({
      where: { reported_user_id: { $eq: userId } },
      orderBy: { created_date: 'desc' }
    });
  },

  getPending: async () => {
    return await base44.entities.UserReports.filter({
      where: { status: { $eq: 'pending' } },
      orderBy: { created_date: 'asc' }
    });
  },

  resolve: async (id, status, adminNotes) => {
    return await base44.entities.UserReports.update(id, {
      status: status,
      admin_notes: adminNotes,
      resolved_at: new Date().toISOString()
    });
  }
};

// ============================================================
// VERIFICATION API
// ============================================================

export const VerificationAPI = {
  submit: async (data) => {
    return await base44.entities.VerificationSubmissions.create(data);
  },

  getPending: async () => {
    return await base44.entities.VerificationSubmissions.filter({
      where: { status: { $eq: 'pending' } },
      orderBy: { created_date: 'asc' }
    });
  },

  approve: async (id, adminId, notes) => {
    const submission = await base44.entities.VerificationSubmissions.get(id);

    // Update submission
    await base44.entities.VerificationSubmissions.update(id, {
      status: 'approved',
      admin_id: adminId,
      admin_notes: notes,
      reviewed_at: new Date().toISOString()
    });

    // Update student record
    await base44.entities.Students.update(submission.student_id, {
      verification_status: 'verified'
    });

    return { success: true };
  },

  reject: async (id, adminId, notes) => {
    await base44.entities.VerificationSubmissions.update(id, {
      status: 'rejected',
      admin_id: adminId,
      admin_notes: notes,
      reviewed_at: new Date().toISOString()
    });

    await base44.entities.Students.update(studentId, {
      verification_status: 'rejected'
    });

    return { success: true };
  }
};

// ============================================================
// PRODUCT API
// ============================================================

export const ProductAPI = {
  create: async (data) => {
    return await base44.entities.Products.create(data);
  },

  getById: async (id) => {
    return await base44.entities.Products.get(id);
  },

  getBySeller: async (sellerId) => {
    return await base44.entities.Products.filter({
      where: { seller_id: { $eq: sellerId } },
      orderBy: { created_date: 'desc' }
    });
  },

  search: async (query, filters = {}) => {
    let whereClause = {
      status: { $eq: 'active' }
    };

    // Search by name or description
    if (query) {
      whereClause.$or = [
        { name: { $contains: query } },
        { description: { $contains: query } }
      ];
    }

    // Apply filters
    if (filters.category) {
      whereClause.category = { $eq: filters.category };
    }

    if (filters.condition) {
      whereClause.condition = { $eq: filters.condition };
    }

    if (filters.minPrice) {
      whereClause.price = { $gte: filters.minPrice };
    }

    if (filters.maxPrice) {
      whereClause.price = { $lte: filters.maxPrice };
    }

    return await base44.entities.Products.filter({
      where: whereClause,
      orderBy: { created_date: 'desc' }
    });
  },

  update: async (id, data) => {
    return await base44.entities.Products.update(id, data);
  },

  delete: async (id) => {
    return await base44.entities.Products.update(id, {
      status: 'deleted'
    });
  },

  markSold: async (id) => {
    return await base44.entities.Products.update(id, {
      status: 'sold'
    });
  },

  incrementView: async (id) => {
    const product = await base44.entities.Products.get(id);
    return await base44.entities.Products.update(id, {
      view_count: (product.view_count || 0) + 1
    });
  }
};

// ============================================================
// ORDER API
// ============================================================

export const OrderAPI = {
  create: async (data) => {
    return await base44.entities.Orders.create(data);
  },

  getById: async (id) => {
    return await base44.entities.Orders.get(id);
  },

  getByBuyer: async (buyerId) => {
    return await base44.entities.Orders.filter({
      where: { buyer_id: { $eq: buyerId } },
      orderBy: { created_date: 'desc' }
    });
  },

  getBySeller: async (sellerId) => {
    return await base44.entities.Orders.filter({
      where: { seller_id: { $eq: sellerId } },
      orderBy: { created_date: 'desc' }
    });
  },

  updateStatus: async (id, status) => {
    return await base44.entities.Orders.update(id, { status });
  }
};

// ============================================================
// CHAT API
// ============================================================

export const ChatAPI = {
  getConversations: async (studentId) => {
    return await base44.entities.Conversations.filter({
      where: {
        participant_emails: { $contains: studentId }
      },
      orderBy: { updated_date: 'desc' }
    });
  },

  getMessages: async (conversationId) => {
    return await base44.entities.Messages.filter({
      where: { conversation_id: { $eq: conversationId } },
      orderBy: { created_date: 'asc' }
    });
  },

  sendMessage: async (data) => {
    return await base44.entities.Messages.create(data);
  },

  markAsRead: async (messageId) => {
    return await base44.entities.Messages.update(messageId, {
      is_read: true
    });
  },

  // Subscribe to new messages in a conversation
  subscribeToMessages: (conversationId, callback) => {
    return base44.entities.Messages.subscribe({
      where: { conversation_id: { $eq: conversationId } },
      onUpdate: (data) => {
        callback(data);
      }
    });
  }
};

// ============================================================
// ANALYTICS API
// ============================================================

export const AnalyticsAPI = {
  // Log user activity
  logActivity: async (data) => {
    return await base44.entities.UserActivityLog.create(data);
  },

  // Get user activity for dashboard
  getUserActivity: async (studentId, days = 7) => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    return await base44.entities.UserActivityLog.filter({
      where: {
        student_id: { $eq: studentId },
        timestamp: { $gte: startDate.toISOString() }
      },
      orderBy: { timestamp: 'desc' }
    });
  },

  // Get sales analytics (admin)
  getSalesAnalytics: async (period = 'month') => {
    // Implementation depends on your data structure
    // This would aggregate Transaction data
    const transactions = await base44.entities.Transactions.list();
    // Process and aggregate data
    return transactions;
  },

  // Get top performing products
  getTopProducts: async (limit = 10) => {
    const products = await base44.entities.Products.filter({
      where: { status: { $eq: 'sold' } },
      orderBy: { view_count: 'desc' },
      limit: limit
    });
    return products;
  }
};

// ============================================================
// SERVICES & ASSETS API
// ============================================================

export const ServiceAPI = {
  create: async (data) => {
    return await base44.entities.Services.create(data);
  },

  getAvailable: async () => {
    return await base44.entities.Services.filter({
      where: { status: { $eq: 'available' } },
      orderBy: { created_date: 'desc' }
    });
  },

  requestBooking: async (data) => {
    return await base44.entities.Bookings.create(data);
  }
};

export const AssetAPI = {
  create: async (data) => {
    return await base44.entities.Assets.create(data);
  },

  getAvailable: async () => {
    return await base44.entities.Assets.filter({
      where: { availability_status: { $eq: 'available' } },
      orderBy: { created_date: 'desc' }
    });
  },

  borrow: async (assetId, borrowerId, deposit) => {
    // Create booking with deposit
    return await base44.entities.Bookings.create({
      asset_id: assetId,
      borrower_email: borrowerId,
      deposit_status: 'paid',
      status: 'confirmed',
      deposit_amount: deposit
    });
  }
};