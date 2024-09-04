"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { waitlist } from "~/schemas";
import Waitlist from "~/action/waitlist";

type formValues = z.infer<typeof waitlist>;

export default function WaitlistForm() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, reset } = useForm<formValues>({
    resolver: zodResolver(waitlist),
    mode: "onChange",
  });

  const onSubmit = async (data: formValues) => {
    setDisabled(true);
    setLoading(true);
    // TODO: Call your API here
    await Waitlist(data.email)
      .then((res) => {
        if (res.error) {
          toast(res.error);
        } else {
          toast(res.success);
          reset();
        }
      })
      .finally(() => {
        setDisabled(false);
        setLoading(false);
      });
  };

  return (
    <div className="mt-36 flex w-full max-w-[450px] items-center rounded-md border p-1">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full items-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-64 flex-1 rounded-l-md bg-transparent px-4 py-2 focus:outline-none"
          {...register("email")}
        />
        <Button
          disabled={disabled}
          type="submit"
          className="flex h-10 flex-none items-center gap-1 rounded-r-md bg-gradient-to-b from-blue-600 to-blue-700 px-3 text-center text-xs uppercase text-white hover:bg-blue-700 border border-blue-700"
        >
          {loading && <Loader className="animate-spin" size={16} />}
          {!loading ? "Join Waitlist" : "Joining..."}
        </Button>
      </form>
    </div>
  );
}
