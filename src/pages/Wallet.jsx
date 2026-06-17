import React, { useState, useEffect } from 'react';
import { WalletAPI } from '../api/unidealApi';

const Wallet = ({ studentId }) => {
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topUpAmount, setTopUpAmount] = useState('');

  useEffect(() => {
    fetchWalletData();
  }, [studentId]);

  const fetchWalletData = async () => {
    try {
      setLoading(true);
      const walletData = await WalletAPI.getByStudent(studentId);
      setWallet(walletData);

      const history = await WalletAPI.getHistory(studentId);
      setTransactions(history || []);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTopUp = async () => {
    try {
      const amount = parseFloat(topUpAmount);
      if (isNaN(amount) || amount < 10 || amount > 5000) {
        alert('Please enter an amount between RM 10 and RM 5,000');
        return;
      }

      const updated = await WalletAPI.topUp(studentId, amount, 'duitnow');
      setWallet(updated);
      await fetchWalletData(); // Refresh transactions
      setTopUpAmount('');
      alert('Top-up successful!');
    } catch (error) {
      alert('Top-up failed: ' + error.message);
    }
  };

  if (loading) {
    return <div>Loading wallet...</div>;
  }

  return (
    <div className="p-4">
      {/* Wallet Balance */}
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <h2 className="text-lg font-semibold