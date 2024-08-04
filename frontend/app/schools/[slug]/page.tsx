"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useState } from "react";

import Clubs, { getClubsWithDay } from "@/app/Clubs";
import type { Club } from "@/app/Clubs";
import { getSchoolWithUrl } from "@/app/Schools";
import AmadorValleyMap from "@/components/AmadorValleyMap";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FuzzySearch from "fuzzy-search";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SchoolDashboard({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [day, setDay] = useState<
    "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | null
  >(null);
  const { resolvedTheme } = useTheme();
  const [mapProps, setMapProps] = useState<
    React.ComponentProps<typeof AmadorValleyMap>
  >({});

  const school = getSchoolWithUrl(params.slug);

  if (!school) {
    router.push("/404");
  }

  const CLUB_COLOR = "#ff0000";
  const OFFICE_HOUR_COLOR = "#00ff00";
  const SPORTS_COLOR = "#0000ff";

  const [userSearchInput, setUserSearchInput] = useState("");

  const [clubsEnrolled, setClubsEnrolled] = useState<string[]>([]);

  const searcher = new FuzzySearch(Clubs, ["name"]);
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(
    searcher.search(userSearchInput),
  );
  const [bottomGridClubs, setBottomGridClubs] = useState<Club[]>(
    searcher.search(userSearchInput),
  );

  return (
    <main className="flex min-h-screen flex-col" suppressHydrationWarning>
      <div className="flex min-h-screen flex-col">
        <Navbar behavior="" />
        <div
          className="flex h-screen flex-col items-center justify-center px-5 pt-16"
          suppressHydrationWarning
        >
          <div className="flex w-full flex-col justify-center gap-10 md:flex-row">
            <div className="flex flex-1 items-center justify-center">
              <AmadorValleyMap
                {...mapProps}
                fillColor={resolvedTheme === "light" ? "#000" : "#fff"}
              />
            </div>
            <div className="flex flex-1 flex-col items-center gap-4 py-10">
              <Select
                onValueChange={(
                  value:
                    | "Monday"
                    | "Tuesday"
                    | "Wednesday"
                    | "Thursday"
                    | "Friday",
                ) => {
                  if (value === "Monday") {
                    setMapProps({
                      H3: CLUB_COLOR,
                      J6: CLUB_COLOR,
                      B6: CLUB_COLOR,
                      LGym: SPORTS_COLOR,
                      SGym: SPORTS_COLOR,
                      D10: OFFICE_HOUR_COLOR,
                      L3: OFFICE_HOUR_COLOR,
                    });
                  } else if (value === "Tuesday") {
                    setMapProps({
                      G1: CLUB_COLOR,
                      D10: CLUB_COLOR,
                      LGym: SPORTS_COLOR,
                      SGym: SPORTS_COLOR,
                      H3: OFFICE_HOUR_COLOR,
                    });
                  } else if (value === "Wednesday") {
                    setMapProps({
                      H1: CLUB_COLOR,
                      C2: CLUB_COLOR,
                      LGym: SPORTS_COLOR,
                      J6: OFFICE_HOUR_COLOR,
                    });
                  } else if (value === "Thursday") {
                    setMapProps({
                      H2: CLUB_COLOR,
                      L3: CLUB_COLOR,
                      SGym: SPORTS_COLOR,
                      B6: OFFICE_HOUR_COLOR,
                    });
                  } else if (value === "Friday") {
                    setMapProps({
                      L4: CLUB_COLOR,
                      Port1: CLUB_COLOR,
                      D11: OFFICE_HOUR_COLOR,
                    });
                  }

                  setDay(value);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pick a day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Day</SelectLabel>
                    <SelectItem value="Monday">Monday</SelectItem>
                    <SelectItem value="Tuesday">Tuesday</SelectItem>
                    <SelectItem value="Wednesday">Wednesday</SelectItem>
                    <SelectItem value="Thursday">Thursday</SelectItem>
                    <SelectItem value="Friday">Friday</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {day !== null && (
                <div className="prose min-w-96 dark:prose-invert">
                  <h2 className="mb-2 p-0 text-red-300">Clubs</h2>
                  <div>
                    {getClubsWithDay(day).map((club) => (
                      <p key={club.name} className="my-1 pt-0">
                        {club.location} - {club.name} - {club.time}
                      </p>
                    ))}
                  </div>
                  {day === "Monday" && (
                    <>
                      <h2 className="my-3 p-0 text-green-300">Office Hours</h2>
                      <div>
                        <p className="my-1 pt-0">D10 - Biology</p>
                        <p className="my-1 pt-0">L3 - Sophomore English</p>
                      </div>
                      <h2 className="my-3 p-0 text-blue-300">Sports</h2>
                      <div>
                        <p className="my-1 pt-0">
                          Large Gym - Basketball - After School - 6pm
                        </p>
                        <p className="my-1 pt-0">
                          Small Gym - Badminton - After School - 6pm
                        </p>
                      </div>
                    </>
                  )}

                  {day === "Tuesday" && (
                    <>
                      <h2 className="my-3 p-0 text-green-300">Office Hours</h2>
                      <div className="prose-none">
                        <p className="my-1 pt-0">H3 - Sophmore English</p>
                      </div>
                      <h2 className="my-3 p-0 text-blue-300">Sports</h2>
                      <div className="prose-none">
                        <p className="my-1 pt-0">
                          Large Gym - Volleyball - After School - 6pm
                        </p>
                        <p>Large Gym - Hockey - After School - 6pm</p>
                      </div>
                    </>
                  )}

                  {day === "Wednesday" && (
                    <>
                      <h2 className="my-3 p-0 text-green-300">Office Hours</h2>
                      <div>
                        <p className="my-1 pt-0">J6 - Freshman English</p>
                      </div>
                      <h2 className="my-3 p-0 text-blue-300">Sports</h2>
                      <div>
                        <p className="my-1 pt-0">
                          Large Gym - Tennis - After School - 6pm
                        </p>
                      </div>
                    </>
                  )}
                  {day === "Thursday" && (
                    <>
                      <h2 className="my-3 p-0 text-green-300">Office Hours</h2>
                      <div>
                        <p className="my-1 pt-0">B6 - Math</p>
                      </div>
                      <h2 className="my-3 p-0 text-blue-300">Sports</h2>
                      <div>
                        <p className="my-1 pt-0">
                          Small Gym - Soccer - After School - 5pm
                        </p>
                      </div>
                    </>
                  )}
                  {day === "Friday" && (
                    <>
                      <h2 className="my-3 p-0 text-green-300">Office Hours</h2>
                      <div>
                        <p className="my-1 pt-0">D11 - Chemistry</p>
                      </div>
                      <h2 className="my-3 p-0 text-blue-300">Sports</h2>
                      <div>
                        <p className="my-1 pt-0">
                          On the Track - Track - After School - 7pm
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-10">
          <input
            className="relative block w-full min-w-[19rem] rounded-lg border border-gray-700 bg-slate-900 py-3 pe-4 ps-10 text-sm text-gray-200 focus:outline-gray-700 focus:ring-gray-600"
            type="text"
            placeholder="Search by Name or Location"
            defaultValue=""
            data-hs-combo-box-input=""
            onChange={(e) => setUserSearchInput(e.target.value)}
          />
          <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
            {searcher.search(userSearchInput).map((club) => (
              <div
                key={club.name}
                className="border- flex flex-col items-center rounded-xl border bg-gray-50 p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7] md:p-5"
              >
                <div className="mb-4 flex items-center">
                  <img
                    src={club.logo}
                    alt={`${club.name} logo`}
                    className="mr-4 h-16 w-16 rounded-full"
                  />
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {club.name}
                  </h3>
                </div>
                <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                  {club.day}, {club.time}
                </p>
                <div className="flex justify-center">
                  <a
                    className="mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                    role="button"
                    onClick={() => {
                      let enrolledClubs = [...clubsEnrolled, club.name];
                      setClubsEnrolled(enrolledClubs);
                      let updatedClubs = bottomGridClubs.filter(
                        (c) => c.url !== club.url,
                      );
                      setBottomGridClubs(updatedClubs);
                      setUserSearchInput("");
                      localStorage.setItem(
                        "clubs",
                        JSON.stringify(enrolledClubs),
                      );
                    }}
                  >
                    Join
                    <svg
                      className="size-4 flex-shrink-0"
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
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a>
                </div>
                <div
                  className="flex justify-end"
                  style={{
                    paddingLeft: "15rem",
                    paddingRight: "1rem",
                  }}
                >
                  <h1 className="pr-5 pt-3">Website: </h1>
                  <a
                    href={club.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
