// @ts-nocheck
'use client';
import { useState } from 'react';

export function CopyButton({ text, className }: { text: any; className?: string }) {
  const [copied, setCopied] = useState(false);
  const copyableText = typeof text === 'string' ? text : text.map((item: any) => {
    if (typeof item === 'string') {
      return item;
    } else if (typeof item === 'object' && 'props' in item && 'children' in item.props) {
      return item.props.children;
    }
    return '';
  }).join('');
  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyableText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 rounded text-sm ${className}`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

