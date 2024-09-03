import { ModeToggle } from "~/components/ModeToogle";
import { redirect } from "next/navigation";

export default async function HomePage() {
  redirect("/waitlist");

  return (
    <div className="relative flex min-h-dvh items-center justify-center gap-2 overflow-hidden md:min-h-screen">
      <div className="flex gap-3">
        <span className="text-center">You are good to go</span>
        <ModeToggle />
      </div>
    </div>
  );
}
