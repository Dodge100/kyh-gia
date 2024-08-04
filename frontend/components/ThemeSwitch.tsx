"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React from "react";

import { Button } from "@/components/ui/button";

export default function ThemeSwitch(
  props: React.HTMLAttributes<HTMLButtonElement>,
) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      {...props}
      className={`relative size-full stroke-primary hover:bg-transparent hover:stroke-primary/70 ${props.className}`}
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <IconSun className="size-full stroke-inherit dark:scale-0" />
      <IconMoon className="absolute size-full scale-0 stroke-inherit dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
