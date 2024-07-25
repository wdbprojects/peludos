"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="">
      <Switch
        id="switch-theme"
        checked={theme === "dark"}
        onCheckedChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      />
    </div>
  );
};

export default SwitchTheme;
