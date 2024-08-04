"use client";

import { IconChevronRight } from "@tabler/icons-react";
import FuzzySearch from "fuzzy-search";
import { useRouter } from "next/navigation";
import { useState } from "react";

import SCHOOLS from "@/app/Schools";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function FindYourSchool() {
  const router = useRouter();

  const [userSearchInput, setUserSearchInput] = useState("");

  const searcher = new FuzzySearch(SCHOOLS, ["name", "city", "zip"]);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar behavior="" />
      <div className="flex w-full flex-col items-center justify-center gap-5 py-5">
        <div className="relative mx-5 w-1/2 min-w-[19rem] max-w-9/10">
          <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex w-full items-center ps-3.5">
            <svg
              className="size-4 shrink-0 text-gray-400 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            className="block w-full rounded-lg border border-gray-300 py-3 pe-4 ps-10 text-sm focus:outline-gray-400 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-200 dark:focus:outline-gray-700 dark:focus:ring-gray-600"
            type="text"
            placeholder="Search by Name, ZIP Code, or City"
            defaultValue=""
            onChange={(e) => setUserSearchInput(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {searcher.search(userSearchInput).map((school) => (
            <div
              key={school.name}
              className="border- flex flex-col items-center rounded-xl border bg-gray-50 p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7] md:p-5"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {school.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                {school.city}, {school.state} {school.zip}
              </p>
              <Button
                className="mt-3 inline-flex gap-1 !no-underline"
                variant="link"
                onClick={() => {
                  let schools = localStorage.getItem("schools");
                  let enrolledSchools = new Set(
                    schools ? JSON.parse(schools) : [],
                  );
                  enrolledSchools.add(school.name);

                  localStorage.setItem(
                    "schools",
                    JSON.stringify(Array.from(enrolledSchools)),
                  );

                  router.push("/your-schools");
                }}
              >
                Join this school <IconChevronRight className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
