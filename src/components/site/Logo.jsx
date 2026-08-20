import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';

const LOGO_URL = '/assets/digitise360-logo.png';

export default function Logo({ className = 'h-8 w-44' }) {
  const [failed, setFailed] = useState(false);
  const showImage = LOGO_URL && !failed;

  return (
    <Link to="/" className="inline-flex items-center" aria-label="DigiTise360 home">
      {showImage ? (
        <Image
          src={LOGO_URL}
          alt="DigiTise360"
          fittingType="fit"
          className={`${className} object-contain w-auto`}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
          DigiTise<span className="text-primary">360</span>
        </span>
      )}
    </Link>
  );
}
