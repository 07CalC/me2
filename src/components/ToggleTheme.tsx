'use client'
import { useEffect, useRef, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    }
    return 'light';
  });
  const [animating, setAnimating] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setCirclePos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  }, []);

  const toggleTheme = () => {
    setAnimating(true);
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }, 400);
    setTimeout(() => setAnimating(false), 800);
  };

  const nextTheme = theme === "light" ? "dark" : "light";
  const circleBg =
    nextTheme === "dark" ? "bg-[#1b1816]" : "bg-white";

  return (
    <>
      <button
        ref={btnRef}
        onClick={toggleTheme}
        className="rounded-xl px-4 py-2 text-2xl transition-all dark:bg-[#1b1816] dark:text-white bg-white shadow relative z-50"
        style={{ position: "relative" }}
      >
        {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>
      {animating && (
        <div
          className="fixed pointer-events-none"
          style={{
            left: circlePos.x,
            top: circlePos.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 40
          }}
        >
          <div
            className={`rounded-full transition-opacity ${circleBg}`}
            style={{
              width: 0,
              height: 0,
              animation: "circle-expand 0.5s forwards"
            }}
          />
        </div>
      )}
    </>
  )
}
