"use client";

import "@/app/zoom-animation.css";

import {
  IconBallBasketball,
  IconFriends,
  IconSchool,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Particles } from "@/components/Particles";
import { Button } from "@/components/ui/button";
import ClubsImg from "@/public/home-images/clubs.avif";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col">
        <Particles className="absolute inset-0 -z-10" />

        <Navbar behavior="" />
        <div className="flex w-full grow flex-col items-center justify-center gap-10 px-16 py-5 md:flex-row">
          <div className="flex-1 text-left">
            <h1 className="mb-6 font-headline text-4xl font-bold md:text-5xl">
              <span className="text-primary">Connect</span> with{" "}
              <span className="text-primary">others</span> in your school
            </h1>
            <p className="text-base font-medium text-gray-900 dark:text-gray-200 md:text-lg">
              <span className="flex gap-2">
                <IconFriends />
                Join Clubs
              </span>
              <span className="flex gap-2">
                <IconSchool />
                Find Office Hours
              </span>
              <span className="flex gap-2">
                <IconBallBasketball />
                Join Sports Teams
              </span>
              <Button
                className="my-2 text-lg font-bold"
                onClick={() => router.push("/auth/login")}
              >
                Sign Up Today!
              </Button>
            </p>
          </div>
          <div className="flex-1">
            <Image
              className="border-racing-green-600 h-96 overflow-hidden rounded-xl border-4 object-cover"
              src={ClubsImg}
              alt="Clubs"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
