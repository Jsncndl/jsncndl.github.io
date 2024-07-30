"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      className="dark:text-white"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="system" className="dark:text-white">
        System
      </option>
      <option value="dark" className="dark:text-white">
        Dark
      </option>
      <option value="light" className="dark:text-white">
        Light
      </option>
    </select>
  );
};

export default ThemeSwitch;
