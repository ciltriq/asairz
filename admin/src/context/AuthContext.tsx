import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import { APP_CONSTANTS } from "@/constant/app";

export type AdminInterface = {
  id: string;
  name: string;
  email: string;
  role: "admin";
};

type AuthContextType = {
  admin: AdminInterface | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  login: (token: string, admin: AdminInterface) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = APP_CONSTANTS.AUTH_STORAGE_KEY;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [admin, setAdmin] = useState<AdminInterface | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Restore auth on refresh
  useEffect(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      setAdmin(parsed.admin);
      setAccessToken(parsed.accessToken);
    } catch {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, []);

  const login = (token: string, adminData: AdminInterface) => {
    setAccessToken(token);
    setAdmin(adminData);

    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({
        accessToken: token,
        admin: adminData,
      })
    );
  };

  const logout = () => {
    setAccessToken(null);
    setAdmin(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        accessToken,
        isAuthenticated: Boolean(accessToken),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
