import React from "react";
import Navbar from "~/components/Navbar";
import { ShootingStars } from "~/components/magicui/shootingstars";
import { StarsBackground } from "~/components/magicui/starsbg";
import WaitlistForm from "./components/waitlistform";
import Image from "next/image";

export default async function page() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-[94dvh] md:min-h-[92vh]">
        <div className="flex min-h-[94dvh] w-full flex-col items-center justify-center gap-4 md:min-h-[92vh]">
          <p className="font-bold">Elderly AI</p>
          <p className="text-4xl font-semibold md:text-6xl">
            Companion for Elders
          </p>
          <p className=" font-normal">
            You might be busy with your life, but your elders need you help. We
            bring you Elderly AI
          </p>

          <WaitlistForm />
        </div>

        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
}
