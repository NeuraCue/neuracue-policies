'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const ZONE = 'America/Los_Angeles';

    const currentYear = new Intl.DateTimeFormat('en-US', {
      timeZone: ZONE,
      year: 'numeric',
    }).format(new Date());
    setYear(currentYear);
  }, []);

  return (
    <footer className="mb-12 mt-12 text-center text-[0.8em] text-neuracue-orange">
      <p className="tabular-nums">
        © <span id="year">{year}</span> NeuraCue™ All rights reserved
      </p>
    </footer>
  );
}
