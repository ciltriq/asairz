
import { AxiosError } from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

import { APP_CONSTANTS } from "@/constant/app";

const AUTH_STORAGE_KEY = APP_CONSTANTS.AUTH_STORAGE_KEY;

export const setupInterceptors = (
  api: AxiosInstance,
  navigate: (path: string) => void,
  logout: () => void
) => {
  // Request Interceptor
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.accessToken) {
            config.headers.Authorization = `Bearer ${parsed.accessToken}`;
          }
        } catch (error) {
          console.error("Error parsing auth storage", error);
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        const { status } = error.response;
        // Handle 401 Unauthorized or 403 Forbidden
        if (status === 401 || status === 403) {
          // Clear local storage and state
          logout();
          navigate("/login");
        }
      }
      return Promise.reject(error);
    }
  );
};

