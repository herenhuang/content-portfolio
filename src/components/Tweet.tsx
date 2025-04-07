'use client';

import { useEffect } from 'react';

interface TweetProps {
  id: string;
}

export default function Tweet({ id }: TweetProps) {
  useEffect(() => {
    // Remove any existing Twitter script
    const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add Twitter script and initialize
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      script.remove();
    };
  }, [id]);

  return (
    <div className="mt-4">
      <blockquote
        className="twitter-tweet"
        data-conversation="none"
        data-theme="light"
        data-align="center"
      >
        <a href={`https://twitter.com/heyohelen/status/${id}`}></a>
      </blockquote>
    </div>
  );
} 