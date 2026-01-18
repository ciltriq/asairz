import { AUTH_ROUTES } from "@/constant/routesPath";
import api from "./api";
import type { AdminInterface } from "@/context/AuthContext";
import type { AxiosError } from "axios";
import type { loginSchemaType } from "@/schema/auth.schema";

export const AuthService = {

  login: async (formData: loginSchemaType) => {
    try {
      const res = await api.post<{user:AdminInterface, accessToken:string, message:string}>(AUTH_ROUTES.LOGIN, formData);
      return { user: res.data.user, message: res.data.message, accessToken:res.data.accessToken, status: res.status };
    } catch (error: unknown) {
      const err = error as AxiosError<{ error: string }>;
      const errorMessage =
        err.response?.data.error || "Login failed. Please try again.";
      throw new Error(errorMessage);
    }
  }
}