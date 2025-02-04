import { createContext, type ReactNode, useState } from "react";
import { Credentials, User } from "@shared/types/types.ts";

export type AuthContextType = {
  user: User | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state (check localStorage, cookies etc.)

  // deno-lint-ignore require-await
  const login = async (credentials: Credentials): Promise<void> => {
    // api call for the user, mock for now
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const logout = (): void => {
    setUser(null);
    // remove user data from cookies or wherever it is
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
