'use client';

import { useState, useCallback } from 'react';
import { User } from '@/types';
import { mockUser } from '@/services/mock-data';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 1000));
      setUser(mockUser);
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('user', JSON.stringify(mockUser));
      return mockUser;
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 1000));
      const newUser: User = { ...mockUser, name, email };
      setUser(newUser);
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('user', JSON.stringify(newUser));
      return newUser;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }, []);

  const checkAuth = useCallback(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return { user, loading, login, register, logout, checkAuth };
}
