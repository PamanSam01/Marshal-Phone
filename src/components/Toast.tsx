'use client';

import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'cart' | 'wishlist' | 'info';
  onClose?: () => void;
}

export default function Toast({ message, type = 'cart' }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-white rounded-xl shadow-xl border border-gray-800 text-sm">
        {type === 'cart' ? (
          <div className="w-7 h-7 rounded-lg bg-[#0066FF] flex items-center justify-center text-white shrink-0">
            <ShoppingBag className="w-4 h-4" />
          </div>
        ) : (
          <div className="w-7 h-7 rounded-lg bg-rose-600 flex items-center justify-center text-white shrink-0">
            <Heart className="w-4 h-4 fill-white" />
          </div>
        )}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}
