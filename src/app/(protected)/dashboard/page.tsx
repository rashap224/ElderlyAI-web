"use client";

import React from "react";
import { signOut } from "next-auth/react";

export default function Page() {
  return <div onClick={() => signOut()}>SIgnOut</div>;
}
