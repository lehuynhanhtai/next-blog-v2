'use client';
import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [backToTop, setBachToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setBachToTop(true);
      } else {
        setBachToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8">
      {backToTop && (
        <div onClick={scrollToTop} className="cursor-pointer border p-2">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 17-4-4-4 4m8-6-4-4-4 4" />
          </svg>
        </div>
      )}
    </div>
  );
}
