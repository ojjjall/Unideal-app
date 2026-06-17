// @ts-nocheck
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
      await fetchWalletData();
      setTopUpAmount('');
      alert('Top-up successful!');
    } catch (error) {
      alert('Top-up failed: ' + error.message);
    }
  };

  if (loading) {
    return <div className="p-4">Loading wallet...</div>;
  }

  return (
    <div className="p-4">
      {/* Wallet Balance */}
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <h2 className="text-lg font-semibold">Wallet Balance</h2>
        <p className="text-3xl font-bold text-green-600">
          RM {(wallet?.balance || 0).toFixed(2)}
        </p>
      </div>

      {/* Top Up Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="font-semibold mb-2">Top Up Wallet</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Amount (RM)"
            className="border rounded px-3 py-2 flex-1"
            value={topUpAmount}
            onChange={(e) => setTopUpAmount(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleTopUp}
          >
            Top Up
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">Min: RM 10 | Max: RM 5,000</p>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">Transaction History</h3>
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No transactions yet</p>
        ) : (
          <ul className="divide-y">
            {transactions.map((tx) => (
              <li key={tx.id} className="py-2 flex justify-between">
                <span>{tx.description || tx.type}</span>
                <span className={tx.type === 'topup' ? 'text-green-600' : 'text-red-600'}>
                  {tx.type === 'topup' ? '+' : '-'} RM {tx.amount?.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Wallet;