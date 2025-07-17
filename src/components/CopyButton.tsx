
'use client';

import { useState } from 'react';

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs ${className}`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}
