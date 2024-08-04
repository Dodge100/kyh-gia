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
import { googleSignInClicked, signUpClicked } from "@/lib/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Navbar behavior="" />

      <div className="my-8 flex w-full grow items-center justify-center">
        <Card className="max-h-[80vh] w-9/10 bg-gray-200 p-5 shadow-xl dark:bg-neutral-800 xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Sign Up
            </CardTitle>
            <CardDescription className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="link-no-underline font-medium"
              >
                Log in
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
                <Label htmlFor="password">Password</Label>
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
              onClick={() => signUpClicked(email, password)}
              className="mt-2 w-full"
            >
              Sign up
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
