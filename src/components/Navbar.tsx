"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToogle";
import { IconBrandDiscord } from "@tabler/icons-react";
import { MagicButton } from "./ui/magicbuton";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-center border-b bg-transparent backdrop-blur-md transition-all">
      <div className="flex h-full w-full px-2 md:w-[85%] md:px-0 lg:w-[60%]">
        <div className="my-1 flex h-full w-full items-center justify-between md:my-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src="/favicon.ico"
                width={35}
                height={35}
                alt="Logo"
                priority
              />
            </Link>
          </div>
          {/* Navlinks */}
          <div className="hidden gap-1 lg:flex">
            <Link href={"/"}>
              <Button variant={"ghost"}>Home</Button>
            </Link>
            <Link href={"/#pricing"}>
              <Button variant={"ghost"}>Pricing</Button>
            </Link>
            <Link href={"/#contact"}>
              <Button variant={"ghost"}>Contact</Button>
            </Link>
            <Link href={"/#faq"}>
              <Button variant={"ghost"}>FAQs</Button>
            </Link>
          </div>
          {/* Getstarted btn */}
          <div className="flex items-center gap-3">
            <Link
              href={"https://discord.gg/vUHMxPvege"}
              target="_blank"
              className=""
            >
              <Button
                size={"icon"}
                variant={"ghost"}
                className="bg-transparent"
              >
                <IconBrandDiscord className="hover:bg-muted" />
              </Button>
            </Link>
            <ModeToggle btnClass={"hover:bg-muted bg-transparent"} />
            <MagicButton className="bg-transparent">Comming Soon</MagicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
