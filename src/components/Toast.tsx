import React from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-[#ccff00]/40 bg-[#0f141c] p-4 text-white shadow-2xl shadow-black/80 animate-in slide-in-from-bottom-5 duration-200">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ccff00] text-black shrink-0">
        <Check className="h-4 w-4 stroke-[3]" />
      </div>
      <div className="text-xs font-semibold text-slate-200 pr-2">
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded transition-colors"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
