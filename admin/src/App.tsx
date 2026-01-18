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
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/shared/ErrorFallback";
import { Spinner } from "@/components/ui/spinner";

function App() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    setupInterceptors(api, navigate, logout);
  }, [navigate, logout]);

  return (
    <>
      <Toaster richColors position="top-right" />
      <Suspense fallback={<div className="flex h-screen items-center justify-center"><Spinner size={40} /></div>}>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate("/dashboard")}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default App
