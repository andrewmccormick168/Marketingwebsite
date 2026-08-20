import React, { useState } from 'react';
import { Image } from '@/components/ui/image';

const MOBILE_APP = import.meta.env.VITE_MOBILE_APP_IMAGE_URL || '';

function FallbackMobile() {
  return (
    <div className="h-full bg-slate-50 p-4 text-left">
      <div className="pt-4 text-center text-sm font-bold text-slate-900">DigiTise360</div>
      <div className="mt-5 rounded-xl bg-white p-4 shadow-sm">
        <div className="text-[10px] uppercase tracking-wide text-slate-400">Next job</div>
        <div className="mt-1 text-sm font-bold text-slate-900">Annual Fire Alarm Service</div>
        <div className="mt-1 text-xs text-slate-500">ABC House · Glasgow</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {['On Route', 'On Site', 'Reports', 'Expenses'].map((x) => (
          <div key={x} className="rounded-lg border border-slate-200 bg-white p-3 text-center text-[10px] font-medium text-slate-700">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MobileMockup() {
  const [failed, setFailed] = useState(false);
  const showImage = MOBILE_APP && !failed;

  return (
    <div className="relative w-[220px] rounded-[2.2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl shadow-slate-900/25">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.7rem] bg-background">
        {showImage ? (
          <Image
            src={MOBILE_APP}
            alt="DigiTise360 engineer mobile app"
            fittingType="fill"
            className="block h-full w-full"
            onError={() => setFailed(true)}
          />
        ) : (
          <FallbackMobile />
        )}
      </div>
    </div>
  );
}
