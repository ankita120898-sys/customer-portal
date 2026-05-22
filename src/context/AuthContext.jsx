import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const MOCK_USER = {
  id: '001',
  name: 'Anjali Garg',
  email: 'anjali.garg@yopmail.com',
  username: 'anjali.garg@yopmail.com',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const loading = false;

  const login = async (username, password) => {
    // Mock login - accept any credentials for now.
    setUser(MOCK_USER);
    return MOCK_USER;
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
