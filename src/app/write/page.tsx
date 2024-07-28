'use client';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';

export default function Write() {
  const Editor = useMemo(() => dynamic(() => import('@/components/Editor'), { ssr: false }), []);

  return (
    <main className="mx-auto w-full max-w-screen-md py-6 lg:py-8">
      <Editor onChange={() => {}} />
    </main>
  );
}
