import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import { Toaster } from "sonner";
import { Suspense, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { PublicRoute } from './routes/PublicRoute';
import { setupInterceptors } from '@/service/interceptor';
import api from '@/service/api';
import { useAuth } from '@/context/AuthContext';

function App() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    setupInterceptors(api, navigate, logout);
  }, [navigate, logout]);

  return (
    <>
      <Toaster richColors position="top-right" />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
