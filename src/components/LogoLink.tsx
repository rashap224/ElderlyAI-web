import Image from "next/image";
import React from "react";

export default function LogoLink() {
  return (
    <Image
      src="https://tailwindui.com/img/logos/mark.svg?color=white&shade=500"
      alt="Workflow"
      className="h-8 w-auto"
      height={8}
      width={8}
    />
  );
}
