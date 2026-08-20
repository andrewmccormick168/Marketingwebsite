import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const appUrl = (import.meta.env.VITE_APP_URL || 'https://app.digitise360.com').replace(/\/$/, '');

export default function Register() {
  useEffect(() => {
    window.location.replace(`${appUrl}/register`);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center text-slate-600">
        <Loader2 className="mx-auto mb-3 h-6 w-6 animate-spin" />
        Opening DigiTise360 registration…
      </div>
    </div>
  );
}
