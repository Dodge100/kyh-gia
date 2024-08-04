"use client";

import { IconLoader, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { School } from "@/app/Schools";
import { getSchoolFromName } from "@/app/Schools";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Separator from "@/components/Separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Schools from "@/public/school.avif";
import { Button } from "@/components/ui/button";

export default function YourSchools() {
  const [schoolsEnrolled, setSchoolsEnrolled] = useState<string[] | null>(null);

  useEffect(() => {
    const schools: string | null = localStorage.getItem("schools");
    setSchoolsEnrolled(schools ? JSON.parse(schools) : []);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar behavior="" />

      <div className="relative">
        <div className="absolute -z-10 size-full bg-black">
          <Image
            src={Schools}
            alt="schools image"
            className="size-full object-cover opacity-70 dark:opacity-50"
          />
        </div>
        <div className="absolute bottom-0 z-20 flex h-4 w-full justify-center overflow-hidden text-[#eceee4]">
          <Separator
            fill={true}
            fillColor="text-background"
            className="w-full min-w-[1412px]"
          />
        </div>
        <div className="h-8" />
        <div className="w-full pb-10 pt-8 sm:pb-24">
          <div className="prose-md prose mx-auto max-w-lg space-y-6 text-center sm:space-y-8">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Your Schools
            </h1>
          </div>
        </div>
      </div>

      <div className="flex w-full grow flex-col items-center justify-center gap-5 py-5">
        {schoolsEnrolled ? (
          schoolsEnrolled.length !== 0 ? (
            schoolsEnrolled.map((schoolName) => {
              const school: School | undefined = getSchoolFromName(schoolName);
              if (!school) return null;
              return (
                <Card
                  key={school.city}
                  className="bg-gray-200 p-4 shadow-xl dark:bg-neutral-800"
                >
                  <CardHeader>
                    <CardTitle className="text-center font-headline text-xl font-extrabold text-gray-900 dark:text-gray-100">
                      {schoolName}
                    </CardTitle>
                    <CardDescription className="text-center text-sm text-gray-600 dark:text-gray-400">
                      {school.city}, {school.state} {school.zip}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" asChild>
                      <Link
                        className="inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                        href={school.url}
                      >
                        View School Dashboard
                        <svg
                          className="size-4 shrink-0"
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
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Link>
                    </Button>

                    <Button
                      variant="link"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                      onClick={() => {
                        let schools = localStorage.getItem("schools");
                        let enrolledSchools = new Set<string>(
                          schools ? JSON.parse(schools) : [],
                        );
                        enrolledSchools.delete(schoolName);

                        localStorage.setItem(
                          "schools",
                          JSON.stringify(Array.from(enrolledSchools)),
                        );

                        setSchoolsEnrolled(Array.from(enrolledSchools));
                      }}
                    >
                      Leave this school
                      <IconX height="20px" />
                    </Button>
                  </CardFooter>
                </Card>
                // <div
                //   key={schoolName}
                //   className="flex w-4/5 max-w-96 flex-col items-center rounded-xl border bg-gray-50 p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7] md:w-3/5 md:p-5"
                // >
                //   <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                //     {schoolName}
                //   </h3>
                //   <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                //     {school.city}, {school.state} {school.zip}
                //   </p>
                //   <Link
                //     className="mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                //     href={school.url}
                //   >
                //     View School Dashboard
                //     <svg
                //       className="size-4 shrink-0"
                //       xmlns="http://www.w3.org/2000/svg"
                //       width="24"
                //       height="24"
                //       viewBox="0 0 24 24"
                //       fill="none"
                //       stroke="currentColor"
                //       strokeWidth="2"
                //       strokeLinecap="round"
                //       strokeLinejoin="round"
                //     >
                //       <path d="m9 18 6-6-6-6" />
                //     </svg>
                //   </Link>
                //   <button
                //     type="button"
                //     className="mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                //     onClick={() => {
                //       let schools = localStorage.getItem("schools");
                //       let enrolledSchools = new Set<string>(
                //         schools ? JSON.parse(schools) : [],
                //       );
                //       enrolledSchools.delete(schoolName);

                //       localStorage.setItem(
                //         "schools",
                //         JSON.stringify(Array.from(enrolledSchools)),
                //       );

                //       setSchoolsEnrolled(Array.from(enrolledSchools));
                //     }}
                //   >
                //     Leave this school
                //     <IconX height="20px" />
                //   </button>
                // </div>
              );
            })
          ) : (
            <div className="mx-4">
              <h3 className="text-center text-base md:text-lg">
                You {"haven't"} joined a school yet. Click{" "}
                <Link
                  href="/find-your-school"
                  className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800 dark:text-yellow-400 dark:visited:text-orange-600 dark:hover:text-yellow-600"
                >
                  here
                </Link>{" "}
                to join one!
              </h3>
            </div>
          )
        ) : (
          <IconLoader />
        )}
      </div>
      <Footer />
    </main>
  );
}
