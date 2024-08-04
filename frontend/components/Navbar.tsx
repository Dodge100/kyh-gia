"use client";

import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { signOut } from "supertokens-auth-react/recipe/session";

import LogoLight from "@/app/icon.png";
import LogoDark from "@/app/icon-dark.png";
import ThemeSwitch from "@/components/ThemeSwitch";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { fetchUserRoles } from "@/lib/auth";

export default function Navbar({
  behavior = "fixed",
  ...props
}: {
  behavior?: "absolute" | "fixed" | "";
} & React.HTMLAttributes<HTMLElement>): React.JSX.Element {
  const [navLinks, setNavLinks] = useState<{ name: string; href: string }[]>([
    {
      name: "Find Your School",
      href: "/find-your-school",
    },
    {
      name: "Your Schools",
      href: "/your-schools",
    },
    {
      name: "Sign in",
      href: "/auth/login",
    },
  ]);

  useLayoutEffect(() => {
    fetchUserRoles().then((roles) => {
      console.log(roles);
      if (roles === null) {
        setNavLinks([
          {
            name: "Find Your School",
            href: "/find-your-school",
          },
          {
            name: "Your Schools",
            href: "/your-schools",
          },
          {
            name: "Sign in",
            href: "/auth/login",
          },
        ]);
      } else if (roles.length === 0) {
        setNavLinks([
          {
            name: "Your Schools",
            href: "/your-schools",
          },
          {
            name: "Sign out",
            href: "/auth/logout",
          },
        ]);
      } else if (roles.includes("admin")) {
        setNavLinks([
          {
            name: "Your Schools",
            href: "/your-schools",
          },
          {
            name: "Admin Dashboard",
            href: "/dashboard/admin",
          },
          {
            name: "Sign out",
            href: "/auth/logout",
          },
        ]);
      } else if (roles.includes("clubOfficer")) {
        setNavLinks([
          {
            name: "Your Schools",
            href: "/your-schools",
          },
          {
            name: "Club Officer",
            href: "/dashboard/club-officer",
          },
          {
            name: "Sign out",
            href: "/auth/logout",
          },
        ]);
      } else if (roles.includes("schoolAdmin")) {
        setNavLinks([
          {
            name: "Your Schools",
            href: "/your-schools",
          },
          {
            name: "School Admin",
            href: "/dashboard/school-admin",
          },
          {
            name: "Sign out",
            href: "/auth/logout",
          },
        ]);
      } else if (roles.includes("teacher")) {
        setNavLinks([
          {
            name: "Your Schools",
            href: "/your-schools",
          },
          {
            name: "Teacher",
            href: "/dashboard/teacher",
          },
          {
            name: "Sign out",
            href: "/auth/logout",
          },
        ]);
      }
    });
  }, []);

  return (
    <header
      {...props}
      className={`${behavior} top-0 z-50 flex w-full px-[6%] py-4 text-sm backdrop-blur-sm transition-all duration-500 md:flex md:flex-nowrap md:items-center md:justify-between ${props.className}`}
    >
      <div className="flex w-full items-center justify-between md:w-auto md:gap-2">
        <Link href="/" className="size-8 align-middle">
          <Image
            className="size-full dark:hidden"
            src={LogoLight}
            alt="CampusConnect Light Logo"
          />
          <Image
            className="hidden size-full dark:block"
            src={LogoDark}
            alt="CampusConnect Dark Logo"
          />
        </Link>
        <Link
          className="font-futura text-2xl font-semibold text-primary hover:text-primary/75"
          href="/"
        >
          CampusConnect
        </Link>

        <Drawer direction="right">
          <DrawerTrigger className="md:hidden">
            <IconMenu2 className="size-5 shrink-0" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerDescription className="font-headline flex flex-col gap-5 pt-1 text-2xl font-medium text-neutral-800 dark:text-neutral-200">
                {navLinks.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="hover:text-neutral-600 dark:hover:text-neutral-400"
                  >
                    {name}
                  </Link>
                ))}
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
      <nav
        className="font-headline hidden grow basis-full items-center justify-end gap-6 overflow-hidden pl-5 text-right font-medium md:flex 2xl:text-base"
        aria-label="Navigation Links"
      >
        {navLinks.map(({ name, href }) => {
          if (name === "Sign out") {
            return (
              <a
                key={name}
                role="button"
                onClick={async () => {
                  await signOut();
                  window.location.href = "/";
                }}
              >
                {name}
              </a>
            );
          }
          return (
            <Link key={name} href={href}>
              {name}
            </Link>
          );
        })}
        <div className="size-5 border-primary align-baseline text-primary hover:border-primary/75 hover:text-primary/75">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
    // <div className="w-full">
    //   <header
    //     className={`z-50 flex w-full flex-wrap bg-gradient-to-b from-white from-[82%] to-transparent py-3 text-sm dark:from-black sm:flex-nowrap sm:justify-start ${behavior} top-0`}
    //   >
    //     <nav
    //       className="mx-4 w-full border-b-[1.5px] border-daisy-bush-900 px-0 pb-2 dark:border-corn-500 md:px-2 lg:px-4"
    //       aria-label="navbar"
    //     >
    //       <div className="flex items-center justify-between">
    //         <Link
    //           className="flex gap-1 text-3xl font-semibold text-primary hover:text-primary/75"
    //           href="/"
    //         >
    //           <Image
    //             className="block dark:hidden"
    //             src={LogoLight}
    //             alt="CampusConnect"
    //             width={40}
    //             height={40}
    //           />
    //           <Image
    //             className="hidden dark:block"
    //             src={LogoDark}
    //             alt="CampusConnect"
    //             width={40}
    //             height={40}
    //           />
    //           CampusConnect
    //         </Link>

    //         <div className="md:hidden">
    //           <button
    //             type="button"
    //             className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
    //             onClick={() => {
    //               console.log(isOpen);
    //               setIsOpen(!isOpen);
    //             }}
    //             aria-controls="navbar-slide-up-animation"
    //             aria-label="Toggle navigation"
    //           >
    //             {!isOpen ? (
    //               <IconMenu2 className="size-4 shrink-0" />
    //             ) : (
    //               <IconX className="size-4 shrink-0" />
    //             )}
    //           </button>
    //         </div>
    //         <div className="hidden grow basis-full overflow-hidden text-base font-medium md:block">
    //           <div className="mt-0 flex flex-row items-center justify-end gap-5 ps-5 text-right 2xl:text-base">
    //             {NAV_LINKS.map(({ name, href }) => (
    //               <Link
    //                 key={name}
    //                 href={href}
    //                 className="font-medium text-gray-800 dark:text-gray-100"
    //                 aria-current="page"
    //               >
    //                 {name}
    //               </Link>
    //             ))}
    //             <div className="border-l-2 border-daisy-bush-900 pl-5 text-daisy-bush-900 hover:text-daisy-bush-600 dark:border-corn-500 dark:text-corn-500 dark:hover:text-corn-600">
    //               <ThemeSwitch />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //   </header>

    //   {isOpen ? (
    //     <div className="fixed left-0 top-0 z-10 h-screen w-screen backdrop-blur" />
    //   ) : null}
    // </div>
  );
}
