"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  icon: React.ReactNode;
  path: string;
  customClass?: string;
}

//FIXME: md esta a 768px para el cambio de dispositivo y es a 700

export const IconNav = ({ icon, path, customClass }: Props) => {
  const pathname = usePathname();

  return (
    <Button
      asChild
      variant={"ghost"}
      className={`h-12 w-16 rounded-xl md:hover:bg-[#f0f0f0] ${pathname === path ? "text-black hover:text-black" : "text-[#b1b1b1] hover:text-[#b1b1b1]"} ${customClass}`}
    >
      <Link href={path}>{icon}</Link>
    </Button>
  );
};
