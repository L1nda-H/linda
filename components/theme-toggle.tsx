"use client";

import { useLayoutEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

type Theme = "light" | "dark";

function preferredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const next = preferredTheme();
    document.documentElement.classList.toggle("dark", next === "dark");
    setTheme(next);
    setReady(true);
  }, []);

  function select(next: Theme) {
    applyTheme(next);
    setTheme(next);
  }

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="fixed bottom-5 right-5 z-[1000] flex items-center gap-1 rounded-full border border-sky-300 bg-white/90 p-1 shadow-lg shadow-black/10 backdrop-blur-sm dark:border-white/15 dark:bg-[#323A5E]/90"
    >
      <button
        type="button"
        aria-label="Light mode"
        aria-pressed={ready ? theme === "light" : undefined}
        onClick={() => select("light")}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-950 text-white transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 dark:bg-transparent dark:text-sky-100 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:outline-sky-100"
      >
        <FaSun aria-hidden="true" className="text-lg" />
      </button>
      <button
        type="button"
        aria-label="Dark mode"
        aria-pressed={ready ? theme === "dark" : undefined}
        onClick={() => select("dark")}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-transparent text-sky-800 transition hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 dark:bg-sky-100 dark:text-sky-950 dark:hover:bg-white dark:focus-visible:outline-sky-100"
      >
        <FaMoon aria-hidden="true" className="text-lg" />
      </button>
    </div>
  );
}
