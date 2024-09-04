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
      <div className="flex h-full w-full px-2 md:w-[85%] md:px-0 lg:w-[55%]">
        <div className="my-1 flex h-full w-full items-center justify-between md:my-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <p className="font-bold">Elderly AI</p>
            </Link>
          </div>
          {/* Navlinks */}
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
