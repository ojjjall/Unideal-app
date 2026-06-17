import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
// import UserNotRegisteredError from "@/components/ui/UserNotRegisteredError.jsx";

// Layout
import AppLayout from '@/components/layout/AppLayout';

// Auth Pages
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';

// Main Pages
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetails';
import AddProduct from '@/pages/AddProduct';
import MyItems from '@/pages/MyItem';
import Chats from '@/pages/Chat';
import ChatWindow from '@/pages/ChatWindow';
import Profile from '@/pages/Profile';
import EditProfile from '@/pages/EditProfile';
import Verification from '@/pages/Verification';

// Purchasing & Payment
import Wallet from '@/pages/Wallet';
import TopUp from '@/pages/TopUp';
import Checkout from '@/pages/Checkout';
import Payment from '@/pages/Payment';
import MyOrders from '@/pages/MyOrder';
import OrderReceipt from '@/pages/OrderReceipt';

// Communication & Support
import Notifications from '@/pages/Notification';
import NotificationSettings from '@/pages/NotificationSetting';
import BlockReport from '@/pages/BlockReport';
import HelpCenter from '@/pages/HelpCenter';
import ContactSupport from '@/pages/ContactSupport';
import SendFeedback from '@/pages/SendFeedback';

// Analytics
import AdminAnalytics from '@/pages/AdminAnalytics';
import StudentSales from '@/pages/StudentSales';

// Admin
import AdminPanel from '@/pages/AdminPanel';
import AdminVerifications from '@/pages/AdminVerification';
import AdminUsers from '@/pages/AdminUser';
import ReportDetails from '@/pages/ReportDetails';

// Service & Asset Sharing
import AcademicServices from '@/pages/AcademicServices';
import AssetListing from '@/pages/AssetListing';
import MyBookings from '@/pages/MyBooking';

// Figures
import Figure21 from '@/pages/Figure21';
import Figure81 from '@/pages/Figure81';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      // return <UserNotRegisteredError />;
      return <div className="p-4 text-center">User not registered. Please contact support.</div>;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Pages with Bottom Nav */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/my-items" element={<MyItems />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Detail / Sub Pages */}
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/top-up" element={<TopUp />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/order-receipt" element={<OrderReceipt />} />
      <Route path="/chat/:id" element={<ChatWindow />} />
      <Route path="/block-report" element={<BlockReport />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/notification-settings" element={<NotificationSettings />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/contact-support" element={<ContactSupport />} />
      <Route path="/feedback" element={<SendFeedback />} />
      <Route path="/my-sales" element={<StudentSales />} />
      <Route path="/my-bookings" element={<MyBookings />} />

      {/* Services & Assets */}
      <Route path="/services" element={<AcademicServices />} />
      <Route path="/assets" element={<AssetListing />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/verifications" element={<AdminVerifications />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/report-details" element={<ReportDetails />} />
      <Route path="/admin/analytics" element={<AdminAnalytics />} />

      {/* Figures */}
      <Route path="/figure-2-1" element={<Figure21 />} />
      <Route path="/figure-8-1" element={<Figure81 />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
          <Toaster />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;