import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import HomeLayout from './components/HomeLayout';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Amenities from './pages/Amenities';
import AccessRequest from './pages/AccessRequest';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Cases from './pages/Cases';
import Invoices from './pages/Invoices';
import Contracts from './pages/Contracts';
import Profile from './pages/Profile';

function PrivateRoute({ children, useHome }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center min-h-screen text-gray-500">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return useHome
    ? <HomeLayout>{children}</HomeLayout>
    : <Layout>{children}</Layout>;
}

function PublicRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center min-h-screen text-gray-500">Loading...</div>;
  return user ? <Navigate to="/home" replace /> : children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/customer-portal">
        <Routes>
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />

          {/* Website pages - top navbar layout */}
          <Route path="/home" element={<PrivateRoute useHome><Home /></PrivateRoute>} />
          <Route path="/properties" element={<PrivateRoute useHome><Properties /></PrivateRoute>} />`r`n          <Route path="/properties/:propertyId" element={<PrivateRoute useHome><PropertyDetail /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute useHome><About /></PrivateRoute>} />
          <Route path="/amenities" element={<PrivateRoute useHome><Amenities /></PrivateRoute>} />
          <Route path="/access-request" element={<PrivateRoute useHome><AccessRequest /></PrivateRoute>} />

          {/* Portal workspace pages - sidebar layout */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
          <Route path="/cases" element={<PrivateRoute><Cases /></PrivateRoute>} />
          <Route path="/invoices" element={<PrivateRoute><Invoices /></PrivateRoute>} />
          <Route path="/contracts" element={<PrivateRoute><Contracts /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


