"use server";

import { db } from "~/server/db";
import { onWaitlist } from "~/server/user";

export default async function Waitlist(email: string) {
  if (!email) {
    return { error: "A valid email id is required" };
  }

  const alreadySigned = await onWaitlist(email);

  if (alreadySigned) return { error: "You are already on the waiting list" };

  await db.waitlist.create({
    data: {
      email,
    },
  });

  return { success: "You have been added to the waiting list" };
}
