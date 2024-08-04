"use client";

import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { googleSignInClicked, signInClicked } from "@/lib/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Navbar behavior="" />

      <div className="my-8 flex w-full grow items-center justify-center">
        <Card className="max-h-[80vh] w-9/10 bg-gray-200 p-5 shadow-xl dark:bg-neutral-800 xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5">
          <CardHeader>
            <CardTitle className="font-headline text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Sign In
            </CardTitle>
            <CardDescription className="text-center text-sm text-gray-600 dark:text-gray-400">
              Not registered yet?{" "}
              <Link
                href="/auth/signup"
                className="link-no-underline font-medium"
              >
                Sign Up
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-3 flex flex-col items-center justify-center">
            <Button
              onClick={googleSignInClicked}
              variant="outline"
              className="flex gap-2"
            >
              <FcGoogle />
              Continue with Google
            </Button>

            <div className="mb-6 mt-10 flex w-full">
              <Separator className="w-auto grow" />
              <span className="-mt-3 px-2 text-gray-500 dark:text-gray-300">
                or
              </span>
              <Separator className="w-auto grow" />
            </div>

            <div className="flex w-full flex-col gap-4">
              <div className="w-full">
                <Label htmlFor="email" className="ml-1">
                  Email
                </Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div className="w-full">
                <Label
                  htmlFor="password"
                  className="mb-1.5 ml-1 flex justify-between"
                >
                  <p>Password</p>
                  <Link
                    href="/auth/forgot-password"
                    className="link-no-underline"
                  >
                    Forgot Password?
                  </Link>
                </Label>
                <Input
                  iconPosition="right"
                  icon={
                    passwordVisible ? (
                      <IconEyeOff
                        className="cursor-pointer"
                        onClick={() => {
                          setPasswordVisible(!passwordVisible);
                        }}
                      />
                    ) : (
                      <IconEye
                        className="cursor-pointer"
                        onClick={() => {
                          setPasswordVisible(!passwordVisible);
                        }}
                      />
                    )
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => signInClicked(email, password)}
              className="mt-2 w-full"
            >
              Sign in
            </Button>
          </CardFooter>
        </Card>
        {/* <div className="flex h-4/5 w-9/10 flex-col items-center justify-center gap-1 rounded-xl bg-gray-200 px-6 py-10 shadow-2xl dark:prose-invert dark:bg-neutral-800 xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Sign In
          </h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Not registered yet?{" "}
            <Link href="/auth/signup" className="link-no-underline font-medium">
              Sign Up
            </Link>
          </p>
          <Button
            variant="outline"
            className="mt-6 flex gap-2"
            // className="mt-6 flex gap-2 border-gray-700 hover:bg-gray-200 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            <FcGoogle />
            Continue with Google
          </Button>

          <div className="relative m-5 w-full">
            <div className="absolute inset-0 flex items-center">
              <Separator className="absolute w-full" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-50 px-2 text-gray-500 dark:bg-neutral-800 dark:text-gray-300">
                or
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="w-full">
              <Label htmlFor="email" className="ml-1">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Email address" />
            </div>
            <div className="w-full">
              <Label
                htmlFor="password"
                className="mb-1.5 ml-1 flex justify-between"
              >
                <p>Password</p>
                <Link
                  href="/auth/forgot-password"
                  className="link-no-underline"
                >
                  Forgot Password?
                </Link>
              </Label>
              <Input id="password" type="text" placeholder="Password" />
            </div>
          </div>

          <Button className="mt-8 w-full">Sign in</Button>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}
