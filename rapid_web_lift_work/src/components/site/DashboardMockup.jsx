import React, { useState } from 'react';
import { Image } from '@/components/ui/image';

const OFFICE_DASHBOARD = import.meta.env.VITE_DASHBOARD_IMAGE_URL || '';

function FallbackDashboard() {
  return (
    <div className="grid h-full grid-cols-[180px_1fr] bg-white text-left">
      <div className="border-r border-border bg-slate-950 p-5">
        <div className="mb-8 text-lg font-bold text-white">DigiTise360</div>
        <div className="space-y-3">
          {['Dashboard', 'Jobs', 'Calendar', 'Quotes', 'Customers', 'Reports'].map((item, i) => (
            <div key={item} className={`rounded-md px-3 py-2 text-xs ${i === 0 ? 'bg-white/10 text-white' : 'text-slate-400'}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-slate-900">Operations Dashboard</div>
            <div className="text-xs text-slate-500">Live business overview</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['Open Jobs', 'On Site', 'Completed'].map((label, i) => (
            <div key={label} className="rounded-lg border border-border p-4">
              <div className="text-xs text-slate-500">{label}</div>
              <div className="mt-1 text-2xl font-bold text-slate-900">{[18, 7, 42][i]}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 h-36 rounded-lg border border-border bg-slate-50 p-4">
          <div className="mb-3 text-xs font-semibold text-slate-700">Today’s activity</div>
          <div className="space-y-2">
            {[70, 54, 82, 43].map((width, i) => (
              <div key={i} className="h-3 rounded bg-slate-200" style={{ width: `${width}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardMockup() {
  const [failed, setFailed] = useState(false);
  const showImage = OFFICE_DASHBOARD && !failed;

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
      {showImage ? (
        <Image
          src={OFFICE_DASHBOARD}
          alt="DigiTise360 office dashboard — operations overview"
          fittingType="fit"
          className="block h-full w-full"
          onError={() => setFailed(true)}
        />
      ) : (
        <FallbackDashboard />
      )}
    </div>
  );
}
