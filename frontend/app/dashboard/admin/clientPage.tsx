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

export default function AdminDashboard({ schools }: { schools: School[] }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Navbar behavior="" />

      <div className="prose my-8 flex w-full grow flex-col items-center justify-center dark:prose-invert">
        <h1>Admin Dashboard</h1>

        <div className="flex flex-col items-center">
          {schools.map((school) => (
            <Card key={school.name} className="not-prose">
              <CardHeader>
                <CardTitle>{school.name}</CardTitle>
                <CardDescription className="text-base">
                  {school.city} {school.state}, {school.zip}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Add administrator</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add Administrator</DialogTitle>
                      <DialogDescription>
                        Invite administrators to manage this school.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input
                          id="email"
                          defaultValue=""
                          className="col-span-3"
                          type="email"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}

          <h2>Add School</h2>
          <Card className="not-prose w-[40vw]">
            <CardContent>
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-4">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="" className="col-span-3" />
                </div>
                <div className="flex items-center gap-4">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="" className="col-span-3" />
                </div>
                <div className="flex items-center gap-4">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="" className="col-span-3" />
                </div>
                <div className="flex items-center gap-4">
                  <Label htmlFor="zip">Zip</Label>
                  <Input id="zip" defaultValue="" className="col-span-3" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Add School</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
