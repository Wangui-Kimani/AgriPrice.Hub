// src/pages/Dashboard.tsx – frontend-only with mock data (no backend)
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

interface Transaction {
  id: string;
  vendor_name: string;
  amount: number;
  status: string;
  created_at: string;
}

// Mock data for frontend development
const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', vendor_name: 'Green Valley Farm', amount: 450, status: 'completed', created_at: new Date().toISOString() },
  { id: '2', vendor_name: 'Sunrise Produce', amount: 320, status: 'pending', created_at: new Date().toISOString() },
  { id: '3', vendor_name: 'Harvest Co-op', amount: 780, status: 'completed', created_at: new Date(Date.now() - 86400000).toISOString() },
];

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [stats, setStats] = useState({
    totalTransactions: 0,
    todayTransactions: 0,
    pendingApprovals: 0,
    totalRevenue: 0,
  });
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading, then set mock data
    const t = setTimeout(() => {
      setRecentTransactions(MOCK_TRANSACTIONS);
      const today = new Date().toDateString();
      const todayCount = MOCK_TRANSACTIONS.filter(
        (t) => new Date(t.created_at).toDateString() === today
      ).length;
      const pending = MOCK_TRANSACTIONS.filter((t) => t.status === 'pending').length;
      const revenue = MOCK_TRANSACTIONS.reduce((sum, t) => sum + (t.amount || 0), 0);
      setStats({
        totalTransactions: MOCK_TRANSACTIONS.length,
        todayTransactions: todayCount,
        pendingApprovals: pending,
        totalRevenue: revenue,
      });
      setLoading(false);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  const handleLogout = async () => {
    await signOut();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div>Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {user?.full_name || user?.email}!</h1>
          <p className="market-badge">Market: {user?.market || 'Not assigned'}</p>
          <p className="status-badge">Status: <span className="status-approved">approved</span> (demo)</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Transactions</h3>
          <p className="stat-number">{stats.totalTransactions}</p>
          <p className="stat-label">All time</p>
        </div>
        <div className="stat-card">
          <h3>Today&apos;s Transactions</h3>
          <p className="stat-number">{stats.todayTransactions}</p>
          <p className="stat-label">Last 24 hours</p>
        </div>
        <div className="stat-card">
          <h3>Pending Approvals</h3>
          <p className="stat-number">{stats.pendingApprovals}</p>
          <p className="stat-label">Require action</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-number">${stats.totalRevenue.toLocaleString()}</p>
          <p className="stat-label">This month</p>
        </div>
      </div>

      <div className="section">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-btn" onClick={() => (window.location.href = '/transactions/new')}>
            ➕ Record Transaction
          </button>
          <button className="action-btn" onClick={() => (window.location.href = '/reports')}>
            📊 Generate Report
          </button>
          <button className="action-btn" onClick={() => (window.location.href = '/vendors')}>
            👥 Manage Vendors
          </button>
          <button className="action-btn" onClick={() => (window.location.href = '/profile')}>
            ⚙️ Update Profile
          </button>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>Recent Transactions</h2>
          <a href="/transactions" className="view-all">View All →</a>
        </div>
        {recentTransactions.length > 0 ? (
          <div className="transactions-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Vendor</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>#{transaction.id}</td>
                    <td>{transaction.vendor_name}</td>
                    <td>${transaction.amount}</td>
                    <td>{new Date(transaction.created_at).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-badge status-${transaction.status}`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <p>No transactions yet. Start by recording your first transaction!</p>
            <button className="btn-primary">Record Transaction</button>
          </div>
        )}
      </div>

      <div className="section">
        <h2>Market Announcements</h2>
        <div className="announcement-card">
          <h3>📢 Market Hours Update</h3>
          <p>Starting next week, market hours will be extended to 7 PM on weekdays.</p>
          <span className="announcement-date">Posted: 2 days ago</span>
        </div>
        <div className="announcement-card">
          <h3>⚠️ Important Notice</h3>
          <p>All vendors must renew their permits by the end of the month.</p>
          <span className="announcement-date">Posted: 1 week ago</span>
        </div>
      </div>
    </div>
  );
}
