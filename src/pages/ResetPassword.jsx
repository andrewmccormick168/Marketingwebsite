import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const appUrl = (import.meta.env.VITE_APP_URL || 'https://app.digitise360.com').replace(/\/$/, '');

export default function ResetPassword() {
  useEffect(() => {
    const query = window.location.search || '';
    window.location.replace(`${appUrl}/reset-password${query}`);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center text-slate-600">
        <Loader2 className="mx-auto mb-3 h-6 w-6 animate-spin" />
        Opening password reset…
      </div>
    </div>
  );
}
