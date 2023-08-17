import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

interface AuthContextData {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username: string, password: string) => {
    if (username === "foo" && password === "bar") {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      router.push("/");
      return true;
    }
    return false;
  };

  useEffect(() => {
    const storedStatus = localStorage.getItem('isLoggedIn');
    if (storedStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    } else if (router.pathname === '/account/login') {
      router.push('/account/login');    
    } else {
      router.push('/account/login');
    }
  }, [isLoggedIn, router.pathname]);
  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const useAuthContext = () => useContext(AuthContext);
