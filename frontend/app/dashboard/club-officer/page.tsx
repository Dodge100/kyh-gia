"use client";

import { useEffect, useState } from "react";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type School = {
  name: string;
  zip: string;
  state: string;
  city: string;
};

export default function ClubOfficerDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Navbar behavior="" />

      <div className="prose my-8 flex w-full grow flex-col items-center justify-center dark:prose-invert">
        <h1>Club Officer Dashboard</h1>

        <h3>Your Clubs</h3>
      </div>

      <Footer />
    </div>
  );
}
