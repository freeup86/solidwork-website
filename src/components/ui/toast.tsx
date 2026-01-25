'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, Zap } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => {
      // Max 3 toasts
      const newToasts = [...prev, { id, message, type }];
      if (newToasts.length > 3) {
        return newToasts.slice(-3);
      }
      return newToasts;
    });

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-600" />,
    error: <AlertCircle className="h-5 w-5 text-red-600" />,
    info: <Zap className="h-5 w-5 text-[var(--color-amber)]" />,
  };

  const styles = {
    success: 'border-green-200 bg-green-50',
    error: 'border-red-200 bg-red-50',
    info: 'border-[var(--color-amber)]/30 bg-[var(--color-amber)]/5',
  };

  const iconBg = {
    success: 'bg-green-100',
    error: 'bg-red-100',
    info: 'bg-[var(--color-amber)]/10',
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3"
        role="region"
        aria-label="Notifications"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast-enter flex items-start gap-3 rounded-xl border-2 p-4 shadow-lg backdrop-blur-sm ${styles[toast.type]}`}
            style={{ minWidth: '320px', maxWidth: '420px' }}
            role="alert"
          >
            <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${iconBg[toast.type]}`}>
              {icons[toast.type]}
            </div>
            <div className="flex-1 pt-0.5">
              <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
                {toast.type === 'success' && 'Success'}
                {toast.type === 'error' && 'Error'}
                {toast.type === 'info' && 'Info'}
              </p>
              <p className="mt-1 text-sm text-[var(--color-slate)]">{toast.message}</p>
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-[var(--color-steel)] transition-colors hover:bg-black/5 hover:text-[var(--color-ink)]"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
