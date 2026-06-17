import { base44 } from './base44Client';

// ============================================================
// STUDENT API
// ============================================================
export const StudentAPI = {
  create: async (data) => {
    try {
      return await base44.entities.Students.create(data);
    } catch (error) {
      console.error('Student create error:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      return await base44.entities.Students.get(id);
    } catch (error) {
      console.error('Student get error:', error);
      throw error;
    }
  },

  getByEmail: async (email) => {
    try {
      const result = await base44.entities.Students.list();
      return result.filter(s => s.email === email);
    } catch (error) {
      console.error('Student getByEmail error:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      return await base44.entities.Students.update(id, data);
    } catch (error) {
      console.error('Student update error:', error);
      throw error;
    }
  }
};

// ============================================================
// WALLET API
// ============================================================
export const WalletAPI = {
  getByStudent: async (studentId) => {
    try {
      const wallets = await base44.entities.Wallets.list();
      const wallet = wallets.find(w => w.student_id === studentId);
      
      if (wallet) {
        return wallet;
      }
      
      // Create wallet if not exists
      return await base44.entities.Wallets.create({
        student_id: studentId,
        balance: 0
      });
    } catch (error) {
      console.error('Wallet get error:', error);
      throw error;
    }
  },

  getBalance: async (studentId) => {
    try {
      const wallet = await WalletAPI.getByStudent(studentId);
      return wallet?.balance || 0;
    } catch (error) {
      console.error('Balance get error:', error);
      return 0;
    }
  },

  topUp: async (studentId, amount, paymentMethod) => {
    try {
      if (amount < 10 || amount > 5000) {
        throw new Error('Amount must be between RM 10 and RM 5,000');
      }

      const wallet = await WalletAPI.getByStudent(studentId);

      const updatedWallet = await base44.entities.Wallets.update(wallet.id, {
        balance: (wallet.balance || 0) + amount
      });

      // Create transaction record
      await base44.entities.WalletTransactions.create({
        wallet_id: wallet.id,
        student_id: studentId,
        type: 'topup',
        amount: amount,
        description: `Top-up via ${paymentMethod}`,
        payment_method: paymentMethod,
        status: 'completed'
      });

      return updatedWallet;
    } catch (error) {
      console.error('Top-up error:', error);
      throw error;
    }
  },

  getHistory: async (studentId) => {
    try {
      const wallet = await WalletAPI.getByStudent(studentId);
      const transactions = await base44.entities.WalletTransactions.list();
      return transactions.filter(t => t.wallet_id === wallet.id);
    } catch (error) {
      console.error('History error:', error);
      return [];
    }
  }
};

// ============================================================
// PRODUCT API
// ============================================================
export const ProductAPI = {
  create: async (data) => {
    try {
      return await base44.entities.Products.create(data);
    } catch (error) {
      console.error('Product create error:', error);
      throw error;
    }
  },

  search: async (query, filters = {}) => {
    try {
      const products = await base44.entities.Products.list();
      
      let filtered = products.filter(p => p.status === 'active');
      
      // Search by name or description
      if (query && query.trim().length > 0) {
        const searchTerm = query.toLowerCase();
        filtered = filtered.filter(p => 
          p.name?.toLowerCase().includes(searchTerm) ||
          p.description?.toLowerCase().includes(searchTerm)
        );
      }
      
      // Apply filters
      if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category);
      }
      
      if (filters.condition) {
        filtered = filtered.filter(p => p.condition === filters.condition);
      }
      
      if (filters.minPrice) {
        filtered = filtered.filter(p => (p.price || 0) >= filters.minPrice);
      }
      
      if (filters.maxPrice) {
        filtered = filtered.filter(p => (p.price || 0) <= filters.maxPrice);
      }
      
      return filtered;
    } catch (error) {
      console.error('Search error:', error);
      return [];
    }
  },

  update: async (id, data) => {
    try {
      return await base44.entities.Products.update(id, data);
    } catch (error) {
      console.error('Product update error:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      return await base44.entities.Products.update(id, {
        status: 'deleted'
      });
    } catch (error) {
      console.error('Product delete error:', error);
      throw error;
    }
  }
};