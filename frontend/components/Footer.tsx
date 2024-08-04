import Link from "next/link";
import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="mx-auto mt-auto w-full border-t border-pampas-300 bg-gradient-to-b from-pampas-150 to-white px-4 pt-8 dark:border-neutral-700 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-black sm:px-6 lg:px-8">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="mx-auto flex flex-col pr-0 lg:mx-0 lg:pr-20">
          <div className="flex flex-row">
            <Link
              className="flex text-2xl font-semibold text-primary hover:text-primary/75 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/"
              aria-label="Brand"
            >
              CampusConnect
            </Link>
          </div>
        </div>
        <div className="mx-auto mb-5 flex flex-row gap-10 lg:mr-[3%]">
          <div className="text-right">
            <Link
              className="text-base font-medium dark:text-gray-100"
              href="/find-your-school"
            >
              Find Your School
            </Link>
          </div>
          <div className="text-right">
            <Link
              className="text-base font-medium dark:text-gray-100"
              href="/find-your-school"
            >
              Your Schools
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-200 py-12 dark:border-gray-700">
        <div className="flex items-center justify-center gap-x-3">
          <div className="ms-4 space-x-8 text-sm">
            <Link
              className="inline-flex gap-x-2 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:text-gray-300"
              href="/"
            >
              © 2024 CampusConnect
            </Link>
          </div>
          <div className="ms-4 space-x-8 text-sm">
            <Link
              className="inline-flex gap-x-2 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:text-gray-300"
              href="/forms-path-here"
            >
              Forms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
