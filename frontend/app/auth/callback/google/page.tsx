"use client";

import { useEffect } from "react";

import { handleGoogleCallback } from "@/lib/auth";

export default function GoogleCallback() {
  useEffect(() => {
    handleGoogleCallback();
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 animate-spin"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
}
