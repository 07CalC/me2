'use client'
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


export const ToggleTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

  }, [theme]);


  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl border px-4 py-2 text-2xl transition-all dark:border-slate-700 dark:bg-slate-800 dark:text-white border-slate-200 bg-white text-slate-900 shadow"
    >
      {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
    </button>
  )

}
